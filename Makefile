.PHONY: setup push deploy archive_old_deployments

setup:
	npm install -g @google/clasp
	clasp login
	rm -f .clasp.json
	clasp clone $${CHATGPT_QUESTIONS_SCRIPT_ID}

push:
	clasp push

archive_old_deployments:
	@echo "Archiving old deployments..."
	@DEPLOYMENTS=$$(clasp deployments | grep -v AKfycbwXgScS1X2SbXfMXvh-U70V4zByKG0T-0GglicmD8w | grep '^-' | perl -pe 's/- (\S+).+/$$1/'); \
	for DEPLOYMENT in $$DEPLOYMENTS; do \
		echo "Archiving deployment: $$DEPLOYMENT"; \
		clasp undeploy $$DEPLOYMENT; \
	done

deploy: archive_old_deployments
	clasp push
	clasp deploy --description "New deployment"
	clasp deployments
