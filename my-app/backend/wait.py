from wsgi import app
from waitress import serve



serve(app, port=8000)
"""from paste.translogger import TransLogger
import logging

logger = logging.getLogger("waitress")
logger.setLevel(logging.INFO)

serve(TransLogger(app), port=9000)
