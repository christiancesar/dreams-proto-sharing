// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var health_health_pb = require('../health/health_pb.js');

function serialize_dreams_health_v1_HealthCheckRequest(arg) {
  if (!(arg instanceof health_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type dreams.health.v1.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dreams_health_v1_HealthCheckRequest(buffer_arg) {
  return health_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dreams_health_v1_HealthReport(arg) {
  if (!(arg instanceof health_health_pb.HealthReport)) {
    throw new Error('Expected argument of type dreams.health.v1.HealthReport');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dreams_health_v1_HealthReport(buffer_arg) {
  return health_health_pb.HealthReport.deserializeBinary(new Uint8Array(buffer_arg));
}


// Health check igual em todos os microsserviços. Cada serviço expõe Check por gRPC.
var HealthService = exports.HealthService = {
  check: {
    path: '/dreams.health.v1.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_health_pb.HealthCheckRequest,
    responseType: health_health_pb.HealthReport,
    requestSerialize: serialize_dreams_health_v1_HealthCheckRequest,
    requestDeserialize: deserialize_dreams_health_v1_HealthCheckRequest,
    responseSerialize: serialize_dreams_health_v1_HealthReport,
    responseDeserialize: deserialize_dreams_health_v1_HealthReport,
  },
};

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService, 'Health');
