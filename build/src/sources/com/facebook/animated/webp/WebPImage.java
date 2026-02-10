package com.facebook.animated.webp;

import android.graphics.Bitmap;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.nativecode.f;
import ha.b;
import ha.c;
import java.nio.ByteBuffer;
import p8.d;
import p8.j;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class WebPImage implements c, ia.c {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap.Config f10528a = null;
    @d
    private long mNativeContext;

    @d
    public WebPImage() {
    }

    public static WebPImage f(ByteBuffer byteBuffer, ImageDecodeOptions imageDecodeOptions) {
        f.a();
        byteBuffer.rewind();
        WebPImage nativeCreateFromDirectByteBuffer = nativeCreateFromDirectByteBuffer(byteBuffer);
        if (imageDecodeOptions != null) {
            nativeCreateFromDirectByteBuffer.f10528a = imageDecodeOptions.f11052i;
        }
        return nativeCreateFromDirectByteBuffer;
    }

    public static WebPImage g(long j10, int i10, ImageDecodeOptions imageDecodeOptions) {
        boolean z10;
        f.a();
        if (j10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        WebPImage nativeCreateFromNativeMemory = nativeCreateFromNativeMemory(j10, i10);
        if (imageDecodeOptions != null) {
            nativeCreateFromNativeMemory.f10528a = imageDecodeOptions.f11052i;
        }
        return nativeCreateFromNativeMemory;
    }

    private static native WebPImage nativeCreateFromDirectByteBuffer(ByteBuffer byteBuffer);

    private static native WebPImage nativeCreateFromNativeMemory(long j10, int i10);

    private native void nativeDispose();

    private native void nativeFinalize();

    private native int nativeGetDuration();

    private native WebPFrame nativeGetFrame(int i10);

    private native int nativeGetFrameCount();

    private native int[] nativeGetFrameDurations();

    private native int nativeGetHeight();

    private native int nativeGetLoopCount();

    private native int nativeGetSizeInBytes();

    private native int nativeGetWidth();

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
        return nativeGetLoopCount();
    }

    @Override // ha.c
    public b c(int i10) {
        b.a aVar;
        b.EnumC0359b enumC0359b;
        WebPFrame z10 = z(i10);
        try {
            int b10 = z10.b();
            int c10 = z10.c();
            int width = z10.getWidth();
            int height = z10.getHeight();
            if (z10.d()) {
                aVar = b.a.BLEND_WITH_PREVIOUS;
            } else {
                aVar = b.a.NO_BLEND;
            }
            b.a aVar2 = aVar;
            if (z10.e()) {
                enumC0359b = b.EnumC0359b.DISPOSE_TO_BACKGROUND;
            } else {
                enumC0359b = b.EnumC0359b.DISPOSE_DO_NOT;
            }
            b bVar = new b(i10, b10, c10, width, height, aVar2, enumC0359b);
            z10.dispose();
            return bVar;
        } catch (Throwable th2) {
            z10.dispose();
            throw th2;
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
    /* renamed from: h */
    public WebPFrame z(int i10) {
        return nativeGetFrame(i10);
    }

    @Override // ha.c
    public int w() {
        return nativeGetSizeInBytes();
    }

    @Override // ha.c
    public boolean x() {
        return true;
    }

    @Override // ha.c
    public Bitmap.Config y() {
        return this.f10528a;
    }

    @d
    WebPImage(long j10) {
        this.mNativeContext = j10;
    }
}
