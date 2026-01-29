package com.facebook.animated.gif;

import android.graphics.Bitmap;
import ga.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GifFrame implements d {
    @o8.d
    private long mNativeContext;

    @o8.d
    GifFrame(long j10) {
        this.mNativeContext = j10;
    }

    @o8.d
    private native void nativeDispose();

    @o8.d
    private native void nativeFinalize();

    @o8.d
    private native int nativeGetDisposalMode();

    @o8.d
    private native int nativeGetDurationMs();

    @o8.d
    private native int nativeGetHeight();

    @o8.d
    private native int nativeGetTransparentPixelColor();

    @o8.d
    private native int nativeGetWidth();

    @o8.d
    private native int nativeGetXOffset();

    @o8.d
    private native int nativeGetYOffset();

    @o8.d
    private native boolean nativeHasTransparency();

    @o8.d
    private native void nativeRenderFrame(int i10, int i11, Bitmap bitmap);

    @Override // ga.d
    public void a(int i10, int i11, Bitmap bitmap) {
        nativeRenderFrame(i10, i11, bitmap);
    }

    @Override // ga.d
    public int b() {
        return nativeGetXOffset();
    }

    @Override // ga.d
    public int c() {
        return nativeGetYOffset();
    }

    public int d() {
        return nativeGetDisposalMode();
    }

    @Override // ga.d
    public void dispose() {
        nativeDispose();
    }

    protected void finalize() {
        nativeFinalize();
    }

    @Override // ga.d
    public int getHeight() {
        return nativeGetHeight();
    }

    @Override // ga.d
    public int getWidth() {
        return nativeGetWidth();
    }
}
