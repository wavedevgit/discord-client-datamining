package com.facebook.animated.webp;

import android.graphics.Bitmap;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.nativecode.f;
import ga.b;
import ga.c;
import java.nio.ByteBuffer;
import o8.d;
import o8.j;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class WebPImage implements c, ha.c {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap.Config f9527a = null;
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
            nativeCreateFromDirectByteBuffer.f9527a = imageDecodeOptions.f10051i;
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
            nativeCreateFromNativeMemory.f9527a = imageDecodeOptions.f10051i;
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

    @Override // ga.c
    public int a() {
        return nativeGetFrameCount();
    }

    @Override // ga.c
    public int b() {
        return nativeGetLoopCount();
    }

    @Override // ga.c
    public b c(int i10) {
        b.a aVar;
        b.EnumC0336b enumC0336b;
        WebPFrame w10 = w(i10);
        try {
            int b10 = w10.b();
            int c10 = w10.c();
            int width = w10.getWidth();
            int height = w10.getHeight();
            if (w10.d()) {
                aVar = b.a.BLEND_WITH_PREVIOUS;
            } else {
                aVar = b.a.NO_BLEND;
            }
            b.a aVar2 = aVar;
            if (w10.e()) {
                enumC0336b = b.EnumC0336b.DISPOSE_TO_BACKGROUND;
            } else {
                enumC0336b = b.EnumC0336b.DISPOSE_DO_NOT;
            }
            b bVar = new b(i10, b10, c10, width, height, aVar2, enumC0336b);
            w10.dispose();
            return bVar;
        } catch (Throwable th2) {
            w10.dispose();
            throw th2;
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
    /* renamed from: h */
    public WebPFrame w(int i10) {
        return nativeGetFrame(i10);
    }

    @Override // ga.c
    public int t() {
        return nativeGetSizeInBytes();
    }

    @Override // ga.c
    public boolean u() {
        return true;
    }

    @Override // ga.c
    public Bitmap.Config v() {
        return this.f9527a;
    }

    @Override // ga.c
    public int[] x() {
        return nativeGetFrameDurations();
    }

    @d
    WebPImage(long j10) {
        this.mNativeContext = j10;
    }
}
