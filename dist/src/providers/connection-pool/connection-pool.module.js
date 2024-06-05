"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPoolModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../database/db.service");
const connection_pool_service_1 = require("./connection-pool.service");
const encryption_service_1 = require("../encrption/encryption.service");
const employee_1 = require("../../queryBuilder/employee");
let ConnectionPoolModule = class ConnectionPoolModule {
};
exports.ConnectionPoolModule = ConnectionPoolModule;
exports.ConnectionPoolModule = ConnectionPoolModule = __decorate([
    (0, common_1.Module)({
        providers: [db_service_1.DatabaseService, connection_pool_service_1.ConnectionPoolService, encryption_service_1.EncryptionService, employee_1.Queries],
        exports: [db_service_1.DatabaseService, connection_pool_service_1.ConnectionPoolService],
    })
], ConnectionPoolModule);
//# sourceMappingURL=connection-pool.module.js.map