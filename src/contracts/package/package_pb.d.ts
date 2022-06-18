// package: packagetrip
// file: package/package.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PackageSearch extends jspb.Message { 
    getOriginlocationcode(): string;
    setOriginlocationcode(value: string): PackageSearch;
    getDestinationlocationcode(): string;
    setDestinationlocationcode(value: string): PackageSearch;
    getDeparturedate(): string;
    setDeparturedate(value: string): PackageSearch;
    getReturndate(): string;
    setReturndate(value: string): PackageSearch;
    getAdults(): number;
    setAdults(value: number): PackageSearch;
    getChildren(): number;
    setChildren(value: number): PackageSearch;
    getInfants(): number;
    setInfants(value: number): PackageSearch;
    getTravelclass(): string;
    setTravelclass(value: string): PackageSearch;
    getRoomquantity(): number;
    setRoomquantity(value: number): PackageSearch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageSearch.AsObject;
    static toObject(includeInstance: boolean, msg: PackageSearch): PackageSearch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageSearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageSearch;
    static deserializeBinaryFromReader(message: PackageSearch, reader: jspb.BinaryReader): PackageSearch;
}

export namespace PackageSearch {
    export type AsObject = {
        originlocationcode: string,
        destinationlocationcode: string,
        departuredate: string,
        returndate: string,
        adults: number,
        children: number,
        infants: number,
        travelclass: string,
        roomquantity: number,
    }
}

export class PackageSearchResponse extends jspb.Message { 
    getPackage(): string;
    setPackage(value: string): PackageSearchResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageSearchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PackageSearchResponse): PackageSearchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageSearchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageSearchResponse;
    static deserializeBinaryFromReader(message: PackageSearchResponse, reader: jspb.BinaryReader): PackageSearchResponse;
}

export namespace PackageSearchResponse {
    export type AsObject = {
        pb_package: string,
    }
}

export class PackageSearchRequest extends jspb.Message { 

    hasPackagesearch(): boolean;
    clearPackagesearch(): void;
    getPackagesearch(): PackageSearch | undefined;
    setPackagesearch(value?: PackageSearch): PackageSearchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageSearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PackageSearchRequest): PackageSearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageSearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageSearchRequest;
    static deserializeBinaryFromReader(message: PackageSearchRequest, reader: jspb.BinaryReader): PackageSearchRequest;
}

export namespace PackageSearchRequest {
    export type AsObject = {
        packagesearch?: PackageSearch.AsObject,
    }
}

export class Flight extends jspb.Message { 
    getIntinerantes(): string;
    setIntinerantes(value: string): Flight;
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
        intinerantes: string,
        price: string,
    }
}

export class Hotel extends jspb.Message { 
    getHotel(): string;
    setHotel(value: string): Hotel;
    getOffers(): string;
    setOffers(value: string): Hotel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hotel.AsObject;
    static toObject(includeInstance: boolean, msg: Hotel): Hotel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hotel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hotel;
    static deserializeBinaryFromReader(message: Hotel, reader: jspb.BinaryReader): Hotel;
}

export namespace Hotel {
    export type AsObject = {
        hotel: string,
        offers: string,
    }
}

export class PackageCreate extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): PackageCreate;

    hasFlight(): boolean;
    clearFlight(): void;
    getFlight(): Flight | undefined;
    setFlight(value?: Flight): PackageCreate;

    hasHotel(): boolean;
    clearHotel(): void;
    getHotel(): Hotel | undefined;
    setHotel(value?: Hotel): PackageCreate;
    getAmount(): number;
    setAmount(value: number): PackageCreate;
    getOff(): number;
    setOff(value: number): PackageCreate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageCreate.AsObject;
    static toObject(includeInstance: boolean, msg: PackageCreate): PackageCreate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageCreate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageCreate;
    static deserializeBinaryFromReader(message: PackageCreate, reader: jspb.BinaryReader): PackageCreate;
}

export namespace PackageCreate {
    export type AsObject = {
        userid: string,
        flight?: Flight.AsObject,
        hotel?: Hotel.AsObject,
        amount: number,
        off: number,
    }
}

export class PackageCreateRequest extends jspb.Message { 

    hasPackagecreate(): boolean;
    clearPackagecreate(): void;
    getPackagecreate(): PackageCreate | undefined;
    setPackagecreate(value?: PackageCreate): PackageCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PackageCreateRequest): PackageCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageCreateRequest;
    static deserializeBinaryFromReader(message: PackageCreateRequest, reader: jspb.BinaryReader): PackageCreateRequest;
}

export namespace PackageCreateRequest {
    export type AsObject = {
        packagecreate?: PackageCreate.AsObject,
    }
}

export class PackageResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): PackageResponse;

    hasFlight(): boolean;
    clearFlight(): void;
    getFlight(): Flight | undefined;
    setFlight(value?: Flight): PackageResponse;

    hasHotel(): boolean;
    clearHotel(): void;
    getHotel(): Hotel | undefined;
    setHotel(value?: Hotel): PackageResponse;
    getAmount(): number;
    setAmount(value: number): PackageResponse;
    getOff(): number;
    setOff(value: number): PackageResponse;
    getUpdatedat(): number;
    setUpdatedat(value: number): PackageResponse;
    getCreatedat(): number;
    setCreatedat(value: number): PackageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PackageResponse): PackageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageResponse;
    static deserializeBinaryFromReader(message: PackageResponse, reader: jspb.BinaryReader): PackageResponse;
}

export namespace PackageResponse {
    export type AsObject = {
        id: string,
        flight?: Flight.AsObject,
        hotel?: Hotel.AsObject,
        amount: number,
        off: number,
        updatedat: number,
        createdat: number,
    }
}

export class PackagesResponse extends jspb.Message { 

    hasPackageresponse(): boolean;
    clearPackageresponse(): void;
    getPackageresponse(): PackageResponse | undefined;
    setPackageresponse(value?: PackageResponse): PackagesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PackagesResponse): PackagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackagesResponse;
    static deserializeBinaryFromReader(message: PackagesResponse, reader: jspb.BinaryReader): PackagesResponse;
}

export namespace PackagesResponse {
    export type AsObject = {
        packageresponse?: PackageResponse.AsObject,
    }
}

export class PackagesByUserRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): PackagesByUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackagesByUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PackagesByUserRequest): PackagesByUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackagesByUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackagesByUserRequest;
    static deserializeBinaryFromReader(message: PackagesByUserRequest, reader: jspb.BinaryReader): PackagesByUserRequest;
}

export namespace PackagesByUserRequest {
    export type AsObject = {
        userid: string,
    }
}
