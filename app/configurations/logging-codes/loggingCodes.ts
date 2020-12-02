enum ApiErrorCodes {
    BAD_REQUEST = 'Bad Request',
}

enum StatusCodes {
}

enum DatabaseErrorCodes {
    ERROR_DB_INITIALIZATION = 'Exception During DB initialization',
    DUPLICATE_CONTENT = "Document already exist in database"

}

enum DatabaseCodes {
    INITIALIZING_DB = 'Database Initialization starting',
    SUCCESS_DB_CONNECTION = 'Connected Successfully to DB'
}

export  {
    DatabaseErrorCodes as dbErrorCodes,
    DatabaseCodes as dbCodes,
}
