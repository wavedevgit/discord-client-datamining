package com.facebook.imagepipeline.memory;

import android.util.Log;
import java.io.Closeable;
import java.nio.ByteBuffer;
import o8.j;
import va.q;
import va.r;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeMemoryChunk implements q, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final long f11257d;

    /* renamed from: e  reason: collision with root package name */
    private final int f11258e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f11259i;

    static {
        nb.a.d("imagepipeline");
    }

    public NativeMemoryChunk(int i10) {
        j.b(Boolean.valueOf(i10 > 0));
        this.f11258e = i10;
        this.f11257d = nativeAllocate(i10);
        this.f11259i = false;
    }

    private void n(int i10, q qVar, int i11, int i12) {
        if (qVar instanceof NativeMemoryChunk) {
            j.i(!isClosed());
            j.i(!qVar.isClosed());
            r.b(i10, qVar.getSize(), i11, i12, this.f11258e);
            nativeMemcpy(qVar.C() + i11, this.f11257d + i10, i12);
            return;
        }
        throw new IllegalArgumentException("Cannot copy two incompatible MemoryChunks");
    }

    @o8.d
    private static native long nativeAllocate(int i10);

    @o8.d
    private static native void nativeCopyFromByteArray(long j10, byte[] bArr, int i10, int i11);

    @o8.d
    private static native void nativeCopyToByteArray(long j10, byte[] bArr, int i10, int i11);

    @o8.d
    private static native void nativeFree(long j10);

    @o8.d
    private static native void nativeMemcpy(long j10, long j11, int i10);

    @o8.d
    private static native byte nativeReadByte(long j10);

    @Override // va.q
    public long C() {
        return this.f11257d;
    }

    @Override // va.q
    public long a() {
        return this.f11257d;
    }

    @Override // va.q, java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        if (!this.f11259i) {
            this.f11259i = true;
            nativeFree(this.f11257d);
        }
    }

    protected void finalize() {
        if (isClosed()) {
            return;
        }
        Log.w("NativeMemoryChunk", "finalize: Chunk " + Integer.toHexString(System.identityHashCode(this)) + " still active. ");
        try {
            close();
        } finally {
            super.finalize();
        }
    }

    @Override // va.q
    public int getSize() {
        return this.f11258e;
    }

    @Override // va.q
    public synchronized int h(int i10, byte[] bArr, int i11, int i12) {
        int a10;
        j.g(bArr);
        j.i(!isClosed());
        a10 = r.a(i10, i12, this.f11258e);
        r.b(i10, bArr.length, i11, a10, this.f11258e);
        nativeCopyFromByteArray(this.f11257d + i10, bArr, i11, a10);
        return a10;
    }

    @Override // va.q
    public synchronized boolean isClosed() {
        return this.f11259i;
    }

    @Override // va.q
    public void l(int i10, q qVar, int i11, int i12) {
        j.g(qVar);
        if (qVar.a() == a()) {
            Log.w("NativeMemoryChunk", "Copying from NativeMemoryChunk " + Integer.toHexString(System.identityHashCode(this)) + " to NativeMemoryChunk " + Integer.toHexString(System.identityHashCode(qVar)) + " which share the same address " + Long.toHexString(this.f11257d));
            j.b(Boolean.FALSE);
        }
        if (qVar.a() < a()) {
            synchronized (qVar) {
                synchronized (this) {
                    n(i10, qVar, i11, i12);
                }
            }
            return;
        }
        synchronized (this) {
            synchronized (qVar) {
                n(i10, qVar, i11, i12);
            }
        }
    }

    @Override // va.q
    public synchronized int o(int i10, byte[] bArr, int i11, int i12) {
        int a10;
        j.g(bArr);
        j.i(!isClosed());
        a10 = r.a(i10, i12, this.f11258e);
        r.b(i10, bArr.length, i11, a10, this.f11258e);
        nativeCopyToByteArray(this.f11257d + i10, bArr, i11, a10);
        return a10;
    }

    @Override // va.q
    public ByteBuffer p() {
        return null;
    }

    @Override // va.q
    public synchronized byte w(int i10) {
        boolean z10;
        boolean z11 = true;
        j.i(!isClosed());
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        if (i10 >= this.f11258e) {
            z11 = false;
        }
        j.b(Boolean.valueOf(z11));
        return nativeReadByte(this.f11257d + i10);
    }

    public NativeMemoryChunk() {
        this.f11258e = 0;
        this.f11257d = 0L;
        this.f11259i = true;
    }
}
