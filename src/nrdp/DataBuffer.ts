import { IDataBuffer } from "../types";
type ConcatTypes = ArrayBuffer | Uint8Array | IDataBuffer | string | number[] | number;
type DataBufferConstructor = {
    new(bytes?: number): IDataBuffer;
    new(data: string, encoding?: string): IDataBuffer;
    new(data: ArrayBuffer | IDataBuffer | Uint8Array, offset?: number, length?: number): IDataBuffer;
    compare(lhs: string | ArrayBuffer | IDataBuffer | Uint8Array | number | number[],
            rhs: string | ArrayBuffer | IDataBuffer | Uint8Array | number | number[]): -1 | 0 | 1;
    concat(...args: ConcatTypes[]): IDataBuffer
    of(...args: ConcatTypes[]): IDataBuffer;
    random(size: number): IDataBuffer;
}

declare const DataBuffer: DataBufferConstructor;
export default DataBuffer;

