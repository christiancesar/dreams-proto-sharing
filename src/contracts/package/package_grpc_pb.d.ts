// package: packagetrip
// file: package/package.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as package_package_pb from "../package/package_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPackagesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchPackage: IPackagesService_IsearchPackage;
    createPackage: IPackagesService_IcreatePackage;
    listPackages: IPackagesService_IlistPackages;
    listPackageByUser: IPackagesService_IlistPackageByUser;
}

interface IPackagesService_IsearchPackage extends grpc.MethodDefinition<package_package_pb.PackageSearchRequest, package_package_pb.PackageSearchResponse> {
    path: "/packagetrip.Packages/searchPackage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<package_package_pb.PackageSearchRequest>;
    requestDeserialize: grpc.deserialize<package_package_pb.PackageSearchRequest>;
    responseSerialize: grpc.serialize<package_package_pb.PackageSearchResponse>;
    responseDeserialize: grpc.deserialize<package_package_pb.PackageSearchResponse>;
}
interface IPackagesService_IcreatePackage extends grpc.MethodDefinition<package_package_pb.PackageCreateRequest, package_package_pb.PackagesResponse> {
    path: "/packagetrip.Packages/createPackage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<package_package_pb.PackageCreateRequest>;
    requestDeserialize: grpc.deserialize<package_package_pb.PackageCreateRequest>;
    responseSerialize: grpc.serialize<package_package_pb.PackagesResponse>;
    responseDeserialize: grpc.deserialize<package_package_pb.PackagesResponse>;
}
interface IPackagesService_IlistPackages extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, package_package_pb.PackagesResponse> {
    path: "/packagetrip.Packages/listPackages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<package_package_pb.PackagesResponse>;
    responseDeserialize: grpc.deserialize<package_package_pb.PackagesResponse>;
}
interface IPackagesService_IlistPackageByUser extends grpc.MethodDefinition<package_package_pb.PackagesByUserRequest, package_package_pb.PackagesResponse> {
    path: "/packagetrip.Packages/listPackageByUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<package_package_pb.PackagesByUserRequest>;
    requestDeserialize: grpc.deserialize<package_package_pb.PackagesByUserRequest>;
    responseSerialize: grpc.serialize<package_package_pb.PackagesResponse>;
    responseDeserialize: grpc.deserialize<package_package_pb.PackagesResponse>;
}

export const PackagesService: IPackagesService;

export interface IPackagesServer extends grpc.UntypedServiceImplementation {
    searchPackage: grpc.handleUnaryCall<package_package_pb.PackageSearchRequest, package_package_pb.PackageSearchResponse>;
    createPackage: grpc.handleUnaryCall<package_package_pb.PackageCreateRequest, package_package_pb.PackagesResponse>;
    listPackages: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, package_package_pb.PackagesResponse>;
    listPackageByUser: grpc.handleUnaryCall<package_package_pb.PackagesByUserRequest, package_package_pb.PackagesResponse>;
}

export interface IPackagesClient {
    searchPackage(request: package_package_pb.PackageSearchRequest, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    searchPackage(request: package_package_pb.PackageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    searchPackage(request: package_package_pb.PackageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    createPackage(request: package_package_pb.PackageCreateRequest, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    createPackage(request: package_package_pb.PackageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    createPackage(request: package_package_pb.PackageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    listPackages(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    listPackages(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    listPackages(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    listPackageByUser(request: package_package_pb.PackagesByUserRequest, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    listPackageByUser(request: package_package_pb.PackagesByUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    listPackageByUser(request: package_package_pb.PackagesByUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
}

export class PackagesClient extends grpc.Client implements IPackagesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchPackage(request: package_package_pb.PackageSearchRequest, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public searchPackage(request: package_package_pb.PackageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public searchPackage(request: package_package_pb.PackageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public createPackage(request: package_package_pb.PackageCreateRequest, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public createPackage(request: package_package_pb.PackageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public createPackage(request: package_package_pb.PackageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public listPackages(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public listPackages(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public listPackages(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public listPackageByUser(request: package_package_pb.PackagesByUserRequest, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public listPackageByUser(request: package_package_pb.PackagesByUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
    public listPackageByUser(request: package_package_pb.PackagesByUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_package_pb.PackagesResponse) => void): grpc.ClientUnaryCall;
}
