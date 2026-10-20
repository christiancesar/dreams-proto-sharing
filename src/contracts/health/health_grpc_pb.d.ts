// package: dreams.health.v1
// file: health/health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as health_health_pb from "../health/health_pb";

interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IHealthService_ICheck;
}

interface IHealthService_ICheck extends grpc.MethodDefinition<health_health_pb.HealthCheckRequest, health_health_pb.HealthReport> {
    path: "/dreams.health.v1.Health/Check";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<health_health_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<health_health_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<health_health_pb.HealthReport>;
    responseDeserialize: grpc.deserialize<health_health_pb.HealthReport>;
}

export const HealthService: IHealthService;

export interface IHealthServer extends grpc.UntypedServiceImplementation {
    check: grpc.handleUnaryCall<health_health_pb.HealthCheckRequest, health_health_pb.HealthReport>;
}

export interface IHealthClient {
    check(request: health_health_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: health_health_pb.HealthReport) => void): grpc.ClientUnaryCall;
    check(request: health_health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_health_pb.HealthReport) => void): grpc.ClientUnaryCall;
    check(request: health_health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_health_pb.HealthReport) => void): grpc.ClientUnaryCall;
}

export class HealthClient extends grpc.Client implements IHealthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public check(request: health_health_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: health_health_pb.HealthReport) => void): grpc.ClientUnaryCall;
    public check(request: health_health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_health_pb.HealthReport) => void): grpc.ClientUnaryCall;
    public check(request: health_health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_health_pb.HealthReport) => void): grpc.ClientUnaryCall;
}
