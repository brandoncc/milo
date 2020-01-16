import { IpVersion, DnsResult } from "../types";

interface nrdp {
    dns: {
        lookupHost(host: string,
                            ipVersion: IpVersion,
                            timeout: number,
                            callback: (result: DnsResult) => void): void;
    }
    l(...args: any[]): void;
    assert(cond: any, message?: string): void;
    atoutf8(input: Uint8Array | ArrayBuffer | string): Uint8Array;
    utf8toa(input: Uint8Array | ArrayBuffer | string, offset?: number, length?: number): string;
    hash(type: string, data: string): Uint8Array;
    btoa(buffer: Uint8Array|ArrayBuffer|string, returnUint8Array: true): Uint8Array;
    btoa(buffer: Uint8Array|ArrayBuffer|string, returnUint8Array: false|undefined): string;
    btoa(buffer: Uint8Array|ArrayBuffer|string): string;
    atob(buffer: Uint8Array|ArrayBuffer|string, returnUint8Array: true): Uint8Array;
    atob(buffer: Uint8Array|ArrayBuffer|string, returnUint8Array: false|undefined): string;
    atob(buffer: Uint8Array|ArrayBuffer|string): string;
    random(len: number): Uint8Array
}

// @ts-ignore
export default globalThis.nrdp as nrdp;