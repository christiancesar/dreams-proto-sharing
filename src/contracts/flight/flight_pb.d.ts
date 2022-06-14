// package: flight
// file: flight/flight.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class FlightOffersSearch extends jspb.Message { 
    getOriginlocationcode(): string;
    setOriginlocationcode(value: string): FlightOffersSearch;
    getDestinationlocationcode(): string;
    setDestinationlocationcode(value: string): FlightOffersSearch;
    getDeparturedate(): string;
    setDeparturedate(value: string): FlightOffersSearch;
    getReturndate(): string;
    setReturndate(value: string): FlightOffersSearch;
    getAdults(): number;
    setAdults(value: number): FlightOffersSearch;
    getChildren(): number;
    setChildren(value: number): FlightOffersSearch;
    getInfants(): number;
    setInfants(value: number): FlightOffersSearch;
    getTravelclass(): string;
    setTravelclass(value: string): FlightOffersSearch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightOffersSearch.AsObject;
    static toObject(includeInstance: boolean, msg: FlightOffersSearch): FlightOffersSearch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightOffersSearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightOffersSearch;
    static deserializeBinaryFromReader(message: FlightOffersSearch, reader: jspb.BinaryReader): FlightOffersSearch;
}

export namespace FlightOffersSearch {
    export type AsObject = {
        originlocationcode: string,
        destinationlocationcode: string,
        departuredate: string,
        returndate: string,
        adults: number,
        children: number,
        infants: number,
        travelclass: string,
    }
}

export class FlightOffersRequest extends jspb.Message { 

    hasFlightofferssearch(): boolean;
    clearFlightofferssearch(): void;
    getFlightofferssearch(): FlightOffersSearch | undefined;
    setFlightofferssearch(value?: FlightOffersSearch): FlightOffersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightOffersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightOffersRequest): FlightOffersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightOffersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightOffersRequest;
    static deserializeBinaryFromReader(message: FlightOffersRequest, reader: jspb.BinaryReader): FlightOffersRequest;
}

export namespace FlightOffersRequest {
    export type AsObject = {
        flightofferssearch?: FlightOffersSearch.AsObject,
    }
}

export class FlightOffersResponse extends jspb.Message { 
    getFlightoffers(): string;
    setFlightoffers(value: string): FlightOffersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightOffersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightOffersResponse): FlightOffersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightOffersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightOffersResponse;
    static deserializeBinaryFromReader(message: FlightOffersResponse, reader: jspb.BinaryReader): FlightOffersResponse;
}

export namespace FlightOffersResponse {
    export type AsObject = {
        flightoffers: string,
    }
}

export class Flight extends jspb.Message { 
    getId(): string;
    setId(value: string): Flight;
    getItineraries(): string;
    setItineraries(value: string): Flight;
    getPrice(): string;
    setPrice(value: string): Flight;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Flight.AsObject;
    static toObject(includeInstance: boolean, msg: Flight): Flight.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Flight, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Flight;
    static deserializeBinaryFromReader(message: Flight, reader: jspb.BinaryReader): Flight;
}

export namespace Flight {
    export type AsObject = {
        id: string,
        itineraries: string,
        price: string,
    }
}

export class FlightCreate extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): FlightCreate;
    getItineraries(): string;
    setItineraries(value: string): FlightCreate;
    getPrice(): string;
    setPrice(value: string): FlightCreate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightCreate.AsObject;
    static toObject(includeInstance: boolean, msg: FlightCreate): FlightCreate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightCreate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightCreate;
    static deserializeBinaryFromReader(message: FlightCreate, reader: jspb.BinaryReader): FlightCreate;
}

export namespace FlightCreate {
    export type AsObject = {
        userid: string,
        itineraries: string,
        price: string,
    }
}

export class FlightCreateRequest extends jspb.Message { 

    hasFlightcreate(): boolean;
    clearFlightcreate(): void;
    getFlightcreate(): FlightCreate | undefined;
    setFlightcreate(value?: FlightCreate): FlightCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightCreateRequest): FlightCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightCreateRequest;
    static deserializeBinaryFromReader(message: FlightCreateRequest, reader: jspb.BinaryReader): FlightCreateRequest;
}

export namespace FlightCreateRequest {
    export type AsObject = {
        flightcreate?: FlightCreate.AsObject,
    }
}

export class FlightResponse extends jspb.Message { 

    hasFlight(): boolean;
    clearFlight(): void;
    getFlight(): Flight | undefined;
    setFlight(value?: Flight): FlightResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightResponse): FlightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightResponse;
    static deserializeBinaryFromReader(message: FlightResponse, reader: jspb.BinaryReader): FlightResponse;
}

export namespace FlightResponse {
    export type AsObject = {
        flight?: Flight.AsObject,
    }
}

export class FlightListResponse extends jspb.Message { 
    clearFlightList(): void;
    getFlightList(): Array<Flight>;
    setFlightList(value: Array<Flight>): FlightListResponse;
    addFlight(value?: Flight, index?: number): Flight;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightListResponse): FlightListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightListResponse;
    static deserializeBinaryFromReader(message: FlightListResponse, reader: jspb.BinaryReader): FlightListResponse;
}

export namespace FlightListResponse {
    export type AsObject = {
        flightList: Array<Flight.AsObject>,
    }
}

export class FlightShowRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): FlightShowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightShowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightShowRequest): FlightShowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightShowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightShowRequest;
    static deserializeBinaryFromReader(message: FlightShowRequest, reader: jspb.BinaryReader): FlightShowRequest;
}

export namespace FlightShowRequest {
    export type AsObject = {
        id: string,
    }
}

export class FlightByUserRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): FlightByUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightByUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightByUserRequest): FlightByUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightByUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightByUserRequest;
    static deserializeBinaryFromReader(message: FlightByUserRequest, reader: jspb.BinaryReader): FlightByUserRequest;
}

export namespace FlightByUserRequest {
    export type AsObject = {
        userid: string,
    }
}
