package com.facebook.animated.gif;

import android.graphics.Bitmap;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import ga.b;
import ga.c;
import java.nio.ByteBuffer;
import nb.a;
import o8.d;
import o8.j;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GifImage implements c, ha.c {

    /* renamed from: b  reason: collision with root package name */
    private static volatile boolean f10557b;

    /* renamed from: a  reason: collision with root package name */
    private Bitmap.Config f10558a = null;
    @d
    private long mNativeContext;

    @d
    public GifImage() {
    }

    public static GifImage f(ByteBuffer byteBuffer, ImageDecodeOptions imageDecodeOptions) {
        h();
        byteBuffer.rewind();
        GifImage nativeCreateFromDirectByteBuffer = nativeCreateFromDirectByteBuffer(byteBuffer, imageDecodeOptions.f11076b, imageDecodeOptions.f11081g);
        nativeCreateFromDirectByteBuffer.f10558a = imageDecodeOptions.f11083i;
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
        GifImage nativeCreateFromNativeMemory = nativeCreateFromNativeMemory(j10, i10, imageDecodeOptions.f11076b, imageDecodeOptions.f11081g);
        nativeCreateFromNativeMemory.f10558a = imageDecodeOptions.f11083i;
        return nativeCreateFromNativeMemory;
    }

    private static synchronized void h() {
        synchronized (GifImage.class) {
            if (!f10557b) {
                f10557b = true;
                a.d("gifimage");
            }
        }
    }

    private static b.EnumC0350b i(int i10) {
        if (i10 == 0) {
            return b.EnumC0350b.DISPOSE_DO_NOT;
        }
        if (i10 == 1) {
            return b.EnumC0350b.DISPOSE_DO_NOT;
        }
        if (i10 == 2) {
            return b.EnumC0350b.DISPOSE_TO_BACKGROUND;
        }
        if (i10 == 3) {
            return b.EnumC0350b.DISPOSE_TO_PREVIOUS;
        }
        return b.EnumC0350b.DISPOSE_DO_NOT;
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

    @Override // ga.c
    public int a() {
        return nativeGetFrameCount();
    }

    @Override // ga.c
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

    @Override // ga.c
    public b c(int i10) {
        GifFrame w10 = w(i10);
        try {
            return new b(i10, w10.b(), w10.c(), w10.getWidth(), w10.getHeight(), b.a.BLEND_WITH_PREVIOUS, i(w10.d()));
        } finally {
            w10.dispose();
        }
    }

    @Override // ha.c
    public c d(ByteBuffer byteBuffer, ImageDecodeOptions imageDecodeOptions) {
        return f(byteBuffer, imageDecodeOptions);
    }

    @Override // ha.c
    public c e(long j10, int i10, ImageDecodeOptions imageDecodeOptions) {
        return g(j10, i10, imageDecodeOptions);
    }

    protected void finalize() {
        nativeFinalize();
    }

    @Override // ga.c
    public int getHeight() {
        return nativeGetHeight();
    }

    @Override // ga.c
    public int getWidth() {
        return nativeGetWidth();
    }

    @Override // ga.c
    /* renamed from: j */
    public GifFrame w(int i10) {
        return nativeGetFrame(i10);
    }

    @Override // ga.c
    public int t() {
        return nativeGetSizeInBytes();
    }

    @Override // ga.c
    public boolean u() {
        return false;
    }

    @Override // ga.c
    public Bitmap.Config v() {
        return this.f10558a;
    }

    @Override // ga.c
    public int[] x() {
        return nativeGetFrameDurations();
    }

    @d
    GifImage(long j10) {
        this.mNativeContext = j10;
    }
}
