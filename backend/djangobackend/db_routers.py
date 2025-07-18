class SQLSpielRouter:
    route_app_labels = {'game'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'game'
        return 'default'

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'game'
        return 'default'

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == 'game'
        return db == 'default'
