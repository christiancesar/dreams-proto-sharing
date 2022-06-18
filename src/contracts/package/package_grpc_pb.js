// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var package_package_pb = require('../package/package_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackageCreateRequest(arg) {
  if (!(arg instanceof package_package_pb.PackageCreateRequest)) {
    throw new Error('Expected argument of type packagetrip.PackageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackageCreateRequest(buffer_arg) {
  return package_package_pb.PackageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackageSearchRequest(arg) {
  if (!(arg instanceof package_package_pb.PackageSearchRequest)) {
    throw new Error('Expected argument of type packagetrip.PackageSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackageSearchRequest(buffer_arg) {
  return package_package_pb.PackageSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackageSearchResponse(arg) {
  if (!(arg instanceof package_package_pb.PackageSearchResponse)) {
    throw new Error('Expected argument of type packagetrip.PackageSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackageSearchResponse(buffer_arg) {
  return package_package_pb.PackageSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackagesByUserRequest(arg) {
  if (!(arg instanceof package_package_pb.PackagesByUserRequest)) {
    throw new Error('Expected argument of type packagetrip.PackagesByUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackagesByUserRequest(buffer_arg) {
  return package_package_pb.PackagesByUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackagesResponse(arg) {
  if (!(arg instanceof package_package_pb.PackagesResponse)) {
    throw new Error('Expected argument of type packagetrip.PackagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackagesResponse(buffer_arg) {
  return package_package_pb.PackagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PackagesService = exports.PackagesService = {
  searchPackage: {
    path: '/packagetrip.Packages/searchPackage',
    requestStream: false,
    responseStream: false,
    requestType: package_package_pb.PackageSearchRequest,
    responseType: package_package_pb.PackageSearchResponse,
    requestSerialize: serialize_packagetrip_PackageSearchRequest,
    requestDeserialize: deserialize_packagetrip_PackageSearchRequest,
    responseSerialize: serialize_packagetrip_PackageSearchResponse,
    responseDeserialize: deserialize_packagetrip_PackageSearchResponse,
  },
  createPackage: {
    path: '/packagetrip.Packages/createPackage',
    requestStream: false,
    responseStream: false,
    requestType: package_package_pb.PackageCreateRequest,
    responseType: package_package_pb.PackagesResponse,
    requestSerialize: serialize_packagetrip_PackageCreateRequest,
    requestDeserialize: deserialize_packagetrip_PackageCreateRequest,
    responseSerialize: serialize_packagetrip_PackagesResponse,
    responseDeserialize: deserialize_packagetrip_PackagesResponse,
  },
  listPackages: {
    path: '/packagetrip.Packages/listPackages',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: package_package_pb.PackagesResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_packagetrip_PackagesResponse,
    responseDeserialize: deserialize_packagetrip_PackagesResponse,
  },
  // rpc showPackage(PackageRequest) returns (PackagesResponse);
// rpc updatePackage(PackageRequest) returns (PackagesResponse);
listPackageByUser: {
    path: '/packagetrip.Packages/listPackageByUser',
    requestStream: false,
    responseStream: false,
    requestType: package_package_pb.PackagesByUserRequest,
    responseType: package_package_pb.PackagesResponse,
    requestSerialize: serialize_packagetrip_PackagesByUserRequest,
    requestDeserialize: deserialize_packagetrip_PackagesByUserRequest,
    responseSerialize: serialize_packagetrip_PackagesResponse,
    responseDeserialize: deserialize_packagetrip_PackagesResponse,
  },
};

exports.PackagesClient = grpc.makeGenericClientConstructor(PackagesService);
