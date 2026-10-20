// package: dreams.health.v1
// file: health/health.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HealthCheckRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
    static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
    export type AsObject = {
    }
}

export class HealthReport extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): HealthReport;
    getService(): string;
    setService(value: string): HealthReport;
    getTimestamp(): string;
    setTimestamp(value: string): HealthReport;
    getUptimeSeconds(): number;
    setUptimeSeconds(value: number): HealthReport;
    getResponseTimeMs(): number;
    setResponseTimeMs(value: number): HealthReport;
    clearChecksList(): void;
    getChecksList(): Array<CheckResult>;
    setChecksList(value: Array<CheckResult>): HealthReport;
    addChecks(value?: CheckResult, index?: number): CheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthReport.AsObject;
    static toObject(includeInstance: boolean, msg: HealthReport): HealthReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthReport;
    static deserializeBinaryFromReader(message: HealthReport, reader: jspb.BinaryReader): HealthReport;
}

export namespace HealthReport {
    export type AsObject = {
        status: string,
        service: string,
        timestamp: string,
        uptimeSeconds: number,
        responseTimeMs: number,
        checksList: Array<CheckResult.AsObject>,
    }
}

export class CheckResult extends jspb.Message { 
    getName(): string;
    setName(value: string): CheckResult;
    getStatus(): string;
    setStatus(value: string): CheckResult;
    getResponseTimeMs(): number;
    setResponseTimeMs(value: number): CheckResult;
    getDetails(): string;
    setDetails(value: string): CheckResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckResult.AsObject;
    static toObject(includeInstance: boolean, msg: CheckResult): CheckResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckResult;
    static deserializeBinaryFromReader(message: CheckResult, reader: jspb.BinaryReader): CheckResult;
}

export namespace CheckResult {
    export type AsObject = {
        name: string,
        status: string,
        responseTimeMs: number,
        details: string,
    }
}
