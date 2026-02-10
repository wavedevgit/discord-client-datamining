package com.facebook.animated.gif;

import android.graphics.Bitmap;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import ha.b;
import ha.c;
import java.nio.ByteBuffer;
import ob.a;
import p8.d;
import p8.j;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GifImage implements c, ia.c {

    /* renamed from: b  reason: collision with root package name */
    private static volatile boolean f9949b;

    /* renamed from: a  reason: collision with root package name */
    private Bitmap.Config f9950a = null;
    @d
    private long mNativeContext;

    @d
    public GifImage() {
    }

    public static GifImage f(ByteBuffer byteBuffer, ImageDecodeOptions imageDecodeOptions) {
        h();
        byteBuffer.rewind();
        GifImage nativeCreateFromDirectByteBuffer = nativeCreateFromDirectByteBuffer(byteBuffer, imageDecodeOptions.f10468b, imageDecodeOptions.f10473g);
        nativeCreateFromDirectByteBuffer.f9950a = imageDecodeOptions.f10475i;
        return nativeCreateFromDirectByteBuffer;
    }

    public static GifImage g(long j10, int i10, ImageDecodeOptions imageDecodeOptions) {
        boolean z10;
        h();
        if (j10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        GifImage nativeCreateFromNativeMemory = nativeCreateFromNativeMemory(j10, i10, imageDecodeOptions.f10468b, imageDecodeOptions.f10473g);
        nativeCreateFromNativeMemory.f9950a = imageDecodeOptions.f10475i;
        return nativeCreateFromNativeMemory;
    }

    private static synchronized void h() {
        synchronized (GifImage.class) {
            if (!f9949b) {
                f9949b = true;
                a.d("gifimage");
            }
        }
    }

    private static b.EnumC0380b i(int i10) {
        if (i10 == 0) {
            return b.EnumC0380b.DISPOSE_DO_NOT;
        }
        if (i10 == 1) {
            return b.EnumC0380b.DISPOSE_DO_NOT;
        }
        if (i10 == 2) {
            return b.EnumC0380b.DISPOSE_TO_BACKGROUND;
        }
        if (i10 == 3) {
            return b.EnumC0380b.DISPOSE_TO_PREVIOUS;
        }
        return b.EnumC0380b.DISPOSE_DO_NOT;
    }

    @d
    private static native GifImage nativeCreateFromDirectByteBuffer(ByteBuffer byteBuffer, int i10, boolean z10);

    @d
    private static native GifImage nativeCreateFromFileDescriptor(int i10, int i11, boolean z10);

    @d
    private static native GifImage nativeCreateFromNativeMemory(long j10, int i10, int i11, boolean z10);

    @d
    private native void nativeDispose();

    @d
    private native void nativeFinalize();

    @d
    private native int nativeGetDuration();

    @d
    private native GifFrame nativeGetFrame(int i10);

    @d
    private native int nativeGetFrameCount();

    @d
    private native int[] nativeGetFrameDurations();

    @d
    private native int nativeGetHeight();

    @d
    private native int nativeGetLoopCount();

    @d
    private native int nativeGetSizeInBytes();

    @d
    private native int nativeGetWidth();

    @d
    private native boolean nativeIsAnimated();

    @Override // ha.c
    public int[] A() {
        return nativeGetFrameDurations();
    }

    @Override // ha.c
    public int a() {
        return nativeGetFrameCount();
    }

    @Override // ha.c
    public int b() {
        int nativeGetLoopCount = nativeGetLoopCount();
        if (nativeGetLoopCount == -1) {
            return 1;
        }
        if (nativeGetLoopCount != 0) {
            return nativeGetLoopCount + 1;
        }
        return 0;
    }

    @Override // ha.c
    public b c(int i10) {
        GifFrame z10 = z(i10);
        try {
            return new b(i10, z10.b(), z10.c(), z10.getWidth(), z10.getHeight(), b.a.BLEND_WITH_PREVIOUS, i(z10.d()));
        } finally {
            z10.dispose();
        }
    }

    @Override // ia.c
    public c d(ByteBuffer byteBuffer, ImageDecodeOptions imageDecodeOptions) {
        return f(byteBuffer, imageDecodeOptions);
    }

    @Override // ia.c
    public c e(long j10, int i10, ImageDecodeOptions imageDecodeOptions) {
        return g(j10, i10, imageDecodeOptions);
    }

    protected void finalize() {
        nativeFinalize();
    }

    @Override // ha.c
    public int getHeight() {
        return nativeGetHeight();
    }

    @Override // ha.c
    public int getWidth() {
        return nativeGetWidth();
    }

    @Override // ha.c
    /* renamed from: j */
    public GifFrame z(int i10) {
        return nativeGetFrame(i10);
    }

    @Override // ha.c
    public int w() {
        return nativeGetSizeInBytes();
    }

    @Override // ha.c
    public boolean x() {
        return false;
    }

    @Override // ha.c
    public Bitmap.Config y() {
        return this.f9950a;
    }

    @d
    GifImage(long j10) {
        this.mNativeContext = j10;
    }
}
