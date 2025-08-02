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

    #def allow_migrate(self, db, app_label, model_name=None, **hints):
    #    if app_label in self.route_app_labels:
    #        return db == 'game'
    #    return db == 'default'

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        # Für die 'game' DB: Game-App plus alle System-Apps
        if db == 'game':
            return app_label in (
                'game',
                'auth',
                'contenttypes',
                'sessions',
                'admin',
                'token_blacklist',
            )
        # Für die Default-DB: alle anderen Apps (inkl. users, auth-System-Apps)
        if db == 'default':
            return app_label not in ('game',)
        return None
