package com.github.luben.zstd;

import java.io.Closeable;
import java.io.IOException;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class BaseZstdBufferDecompressingStreamNoFinalizer implements Closeable {
    private int consumed;
    private int produced;
    protected ByteBuffer source;
    protected long stream;
    protected boolean closed = false;
    private boolean finishedFrame = false;
    private boolean streamEnd = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public BaseZstdBufferDecompressingStreamNoFinalizer(ByteBuffer byteBuffer) {
        this.source = byteBuffer;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.closed) {
            try {
                freeDStream(this.stream);
            } finally {
                this.closed = true;
                this.source = null;
            }
        }
    }

    abstract long decompressStream(long j10, ByteBuffer byteBuffer, int i10, int i11, ByteBuffer byteBuffer2, int i12, int i13);

    abstract long freeDStream(long j10);

    public boolean hasRemaining() {
        if (!this.streamEnd) {
            if (this.source.hasRemaining() || !this.finishedFrame) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int readInternal(ByteBuffer byteBuffer, boolean z10) {
        if (!this.closed) {
            boolean z11 = false;
            if (this.streamEnd) {
                return 0;
            }
            long j10 = this.stream;
            int position = byteBuffer.position();
            int remaining = byteBuffer.remaining();
            ByteBuffer byteBuffer2 = this.source;
            long decompressStream = decompressStream(j10, byteBuffer, position, remaining, byteBuffer2, byteBuffer2.position(), this.source.remaining());
            if (!Zstd.isError(decompressStream)) {
                ByteBuffer byteBuffer3 = this.source;
                byteBuffer3.position(byteBuffer3.position() + this.consumed);
                byteBuffer.position(byteBuffer.position() + this.produced);
                if (!this.source.hasRemaining()) {
                    ByteBuffer refill = refill(this.source);
                    this.source = refill;
                    if (!z10 && refill.isDirect()) {
                        throw new IllegalArgumentException("Source buffer should be a non-direct buffer");
                    }
                    if (z10 && !this.source.isDirect()) {
                        throw new IllegalArgumentException("Source buffer should be a direct buffer");
                    }
                }
                if (decompressStream == 0) {
                    z11 = true;
                }
                this.finishedFrame = z11;
                if (z11) {
                    this.streamEnd = !this.source.hasRemaining();
                }
                return this.produced;
            }
            throw new ZstdIOException(decompressStream);
        }
        throw new IOException("Stream closed");
    }

    protected ByteBuffer refill(ByteBuffer byteBuffer) {
        return byteBuffer;
    }

    public BaseZstdBufferDecompressingStreamNoFinalizer setDict(byte[] bArr) {
        long loadDictDecompress = Zstd.loadDictDecompress(this.stream, bArr, bArr.length);
        if (Zstd.isError(loadDictDecompress)) {
            throw new ZstdIOException(loadDictDecompress);
        }
        return this;
    }

    public BaseZstdBufferDecompressingStreamNoFinalizer setLongMax(int i10) {
        long decompressionLongMax = Zstd.setDecompressionLongMax(this.stream, i10);
        if (!Zstd.isError(decompressionLongMax)) {
            return this;
        }
        throw new ZstdIOException(decompressionLongMax);
    }

    public BaseZstdBufferDecompressingStreamNoFinalizer setDict(ZstdDictDecompress zstdDictDecompress) {
        zstdDictDecompress.acquireSharedLock();
        try {
            long loadFastDictDecompress = Zstd.loadFastDictDecompress(this.stream, zstdDictDecompress);
            if (Zstd.isError(loadFastDictDecompress)) {
                throw new ZstdIOException(loadFastDictDecompress);
            }
            return this;
        } finally {
            zstdDictDecompress.releaseSharedLock();
        }
    }
}
