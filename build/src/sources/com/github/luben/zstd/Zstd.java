package com.github.luben.zstd;

import com.github.luben.zstd.util.Native;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class Zstd {
    static {
        Native.load();
    }

    public static native int blockSizeMax();

    public static native int chainLogMax();

    public static native int chainLogMin();

    public static native long compressBound(long j10);

    public static native long compressUnsafe(long j10, long j11, long j12, long j13, int i10, boolean z10);

    public static native long decompressUnsafe(long j10, long j11, long j12, long j13);

    @Deprecated
    public static native long decompressedDirectByteBufferSize(ByteBuffer byteBuffer, int i10, int i11, boolean z10);

    private static native long decompressedSize0(byte[] bArr, int i10, int i11, boolean z10);

    public static native int defaultCompressionLevel();

    public static native long errChecksumWrong();

    public static native long errCorruptionDetected();

    public static native long errDictionaryCorrupted();

    public static native long errDictionaryCreationFailed();

    public static native long errDictionaryWrong();

    public static native long errDstBufferNull();

    public static native long errDstSizeTooSmall();

    public static native long errFrameParameterUnsupported();

    public static native long errFrameParameterWindowTooLarge();

    public static native long errGeneric();

    public static native long errInitMissing();

    public static native long errMaxSymbolValueTooLarge();

    public static native long errMaxSymbolValueTooSmall();

    public static native long errMemoryAllocation();

    public static native long errNoError();

    public static native long errParameterOutOfBound();

    public static native long errParameterUnsupported();

    public static native long errPrefixUnknown();

    public static native long errSrcSizeWrong();

    public static native long errStageWrong();

    public static native long errTableLogTooLarge();

    public static native long errVersionUnsupported();

    public static native long errWorkSpaceTooSmall();

    static native void generateSequences(long j10, long j11, long j12, long j13, long j14);

    static native long getBuiltinSequenceProducer();

    public static native long getDictIdFromDict(byte[] bArr);

    private static native long getDictIdFromDictDirect(ByteBuffer byteBuffer, int i10, int i11);

    public static native long getDictIdFromFrame(byte[] bArr);

    public static native long getDictIdFromFrameBuffer(ByteBuffer byteBuffer);

    public static native long getDirectByteBufferFrameContentSize(ByteBuffer byteBuffer, int i10, int i11, boolean z10);

    public static native long getErrorCode(long j10);

    public static native String getErrorName(long j10);

    private static native long getFrameContentSize0(byte[] bArr, int i10, int i11, boolean z10);

    static native long getStubSequenceProducer();

    public static native int hashLogMax();

    public static native int hashLogMin();

    public static native boolean isError(long j10);

    public static native int loadDictCompress(long j10, byte[] bArr, int i10);

    public static native int loadDictDecompress(long j10, byte[] bArr, int i10);

    public static native int loadFastDictCompress(long j10, ZstdDictCompress zstdDictCompress);

    public static native int loadFastDictDecompress(long j10, ZstdDictDecompress zstdDictDecompress);

    public static native int magicNumber();

    public static native int maxCompressionLevel();

    public static native int minCompressionLevel();

    public static native void registerSequenceProducer(long j10, long j11, long j12);

    public static native int searchLengthMax();

    public static native int searchLengthMin();

    public static native int searchLogMax();

    public static native int searchLogMin();

    public static native int setCompressionChainLog(long j10, int i10);

    public static native int setCompressionChecksums(long j10, boolean z10);

    public static native int setCompressionHashLog(long j10, int i10);

    public static native int setCompressionJobSize(long j10, int i10);

    public static native int setCompressionLevel(long j10, int i10);

    public static native int setCompressionLong(long j10, int i10);

    public static native int setCompressionMagicless(long j10, boolean z10);

    public static native int setCompressionMinMatch(long j10, int i10);

    public static native int setCompressionOverlapLog(long j10, int i10);

    public static native int setCompressionSearchLog(long j10, int i10);

    public static native int setCompressionStrategy(long j10, int i10);

    public static native int setCompressionTargetLength(long j10, int i10);

    public static native int setCompressionWindowLog(long j10, int i10);

    public static native int setCompressionWorkers(long j10, int i10);

    public static native int setDecompressionLongMax(long j10, int i10);

    public static native int setDecompressionMagicless(long j10, boolean z10);

    public static native int setEnableLongDistanceMatching(long j10, int i10);

    public static native int setRefMultipleDDicts(long j10, boolean z10);

    public static native int setSearchForExternalRepcodes(long j10, int i10);

    public static native int setSequenceProducerFallback(long j10, boolean z10);

    public static native int setValidateSequences(long j10, int i10);

    private static native long trainFromBuffer0(byte[][] bArr, byte[] bArr2, boolean z10, int i10);

    private static native long trainFromBufferDirect0(ByteBuffer byteBuffer, int[] iArr, ByteBuffer byteBuffer2, boolean z10, int i10);

    public static native int windowLogMax();

    public static native int windowLogMin();
}
