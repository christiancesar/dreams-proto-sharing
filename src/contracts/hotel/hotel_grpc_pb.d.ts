// package: hotel
// file: hotel/hotel.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as hotel_hotel_pb from "../hotel/hotel_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IHotelsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchHotelOffer: IHotelsService_IsearchHotelOffer;
    createHotel: IHotelsService_IcreateHotel;
    listHotels: IHotelsService_IlistHotels;
    showHotel: IHotelsService_IshowHotel;
    listHotelByUser: IHotelsService_IlistHotelByUser;
}

interface IHotelsService_IsearchHotelOffer extends grpc.MethodDefinition<hotel_hotel_pb.HotelOffersRequest, hotel_hotel_pb.HotelOffersResponse> {
    path: "/hotel.Hotels/searchHotelOffer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hotel_hotel_pb.HotelOffersRequest>;
    requestDeserialize: grpc.deserialize<hotel_hotel_pb.HotelOffersRequest>;
    responseSerialize: grpc.serialize<hotel_hotel_pb.HotelOffersResponse>;
    responseDeserialize: grpc.deserialize<hotel_hotel_pb.HotelOffersResponse>;
}
interface IHotelsService_IcreateHotel extends grpc.MethodDefinition<hotel_hotel_pb.HotelCreateRequest, hotel_hotel_pb.HotelResponse> {
    path: "/hotel.Hotels/createHotel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hotel_hotel_pb.HotelCreateRequest>;
    requestDeserialize: grpc.deserialize<hotel_hotel_pb.HotelCreateRequest>;
    responseSerialize: grpc.serialize<hotel_hotel_pb.HotelResponse>;
    responseDeserialize: grpc.deserialize<hotel_hotel_pb.HotelResponse>;
}
interface IHotelsService_IlistHotels extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, hotel_hotel_pb.HotelListResponse> {
    path: "/hotel.Hotels/listHotels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<hotel_hotel_pb.HotelListResponse>;
    responseDeserialize: grpc.deserialize<hotel_hotel_pb.HotelListResponse>;
}
interface IHotelsService_IshowHotel extends grpc.MethodDefinition<hotel_hotel_pb.HotelShowRequest, hotel_hotel_pb.HotelResponse> {
    path: "/hotel.Hotels/showHotel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hotel_hotel_pb.HotelShowRequest>;
    requestDeserialize: grpc.deserialize<hotel_hotel_pb.HotelShowRequest>;
    responseSerialize: grpc.serialize<hotel_hotel_pb.HotelResponse>;
    responseDeserialize: grpc.deserialize<hotel_hotel_pb.HotelResponse>;
}
interface IHotelsService_IlistHotelByUser extends grpc.MethodDefinition<hotel_hotel_pb.HotelsByUserRequest, hotel_hotel_pb.HotelListResponse> {
    path: "/hotel.Hotels/listHotelByUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hotel_hotel_pb.HotelsByUserRequest>;
    requestDeserialize: grpc.deserialize<hotel_hotel_pb.HotelsByUserRequest>;
    responseSerialize: grpc.serialize<hotel_hotel_pb.HotelListResponse>;
    responseDeserialize: grpc.deserialize<hotel_hotel_pb.HotelListResponse>;
}

export const HotelsService: IHotelsService;

export interface IHotelsServer extends grpc.UntypedServiceImplementation {
    searchHotelOffer: grpc.handleUnaryCall<hotel_hotel_pb.HotelOffersRequest, hotel_hotel_pb.HotelOffersResponse>;
    createHotel: grpc.handleUnaryCall<hotel_hotel_pb.HotelCreateRequest, hotel_hotel_pb.HotelResponse>;
    listHotels: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, hotel_hotel_pb.HotelListResponse>;
    showHotel: grpc.handleUnaryCall<hotel_hotel_pb.HotelShowRequest, hotel_hotel_pb.HotelResponse>;
    listHotelByUser: grpc.handleUnaryCall<hotel_hotel_pb.HotelsByUserRequest, hotel_hotel_pb.HotelListResponse>;
}

export interface IHotelsClient {
    searchHotelOffer(request: hotel_hotel_pb.HotelOffersRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelOffersResponse) => void): grpc.ClientUnaryCall;
    searchHotelOffer(request: hotel_hotel_pb.HotelOffersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelOffersResponse) => void): grpc.ClientUnaryCall;
    searchHotelOffer(request: hotel_hotel_pb.HotelOffersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelOffersResponse) => void): grpc.ClientUnaryCall;
    createHotel(request: hotel_hotel_pb.HotelCreateRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    createHotel(request: hotel_hotel_pb.HotelCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    createHotel(request: hotel_hotel_pb.HotelCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    listHotels(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    listHotels(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    listHotels(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    showHotel(request: hotel_hotel_pb.HotelShowRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    showHotel(request: hotel_hotel_pb.HotelShowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    showHotel(request: hotel_hotel_pb.HotelShowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    listHotelByUser(request: hotel_hotel_pb.HotelsByUserRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    listHotelByUser(request: hotel_hotel_pb.HotelsByUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    listHotelByUser(request: hotel_hotel_pb.HotelsByUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
}

export class HotelsClient extends grpc.Client implements IHotelsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchHotelOffer(request: hotel_hotel_pb.HotelOffersRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelOffersResponse) => void): grpc.ClientUnaryCall;
    public searchHotelOffer(request: hotel_hotel_pb.HotelOffersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelOffersResponse) => void): grpc.ClientUnaryCall;
    public searchHotelOffer(request: hotel_hotel_pb.HotelOffersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelOffersResponse) => void): grpc.ClientUnaryCall;
    public createHotel(request: hotel_hotel_pb.HotelCreateRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    public createHotel(request: hotel_hotel_pb.HotelCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    public createHotel(request: hotel_hotel_pb.HotelCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    public listHotels(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    public listHotels(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    public listHotels(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    public showHotel(request: hotel_hotel_pb.HotelShowRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    public showHotel(request: hotel_hotel_pb.HotelShowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    public showHotel(request: hotel_hotel_pb.HotelShowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelResponse) => void): grpc.ClientUnaryCall;
    public listHotelByUser(request: hotel_hotel_pb.HotelsByUserRequest, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    public listHotelByUser(request: hotel_hotel_pb.HotelsByUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
    public listHotelByUser(request: hotel_hotel_pb.HotelsByUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotel_hotel_pb.HotelListResponse) => void): grpc.ClientUnaryCall;
}
