package com.facebook.animated.gif;

import android.graphics.Bitmap;
import ha.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GifFrame implements d {
    @p8.d
    private long mNativeContext;

    @p8.d
    GifFrame(long j10) {
        this.mNativeContext = j10;
    }

    @p8.d
    private native void nativeDispose();

    @p8.d
    private native void nativeFinalize();

    @p8.d
    private native int nativeGetDisposalMode();

    @p8.d
    private native int nativeGetDurationMs();

    @p8.d
    private native int nativeGetHeight();

    @p8.d
    private native int nativeGetTransparentPixelColor();

    @p8.d
    private native int nativeGetWidth();

    @p8.d
    private native int nativeGetXOffset();

    @p8.d
    private native int nativeGetYOffset();

    @p8.d
    private native boolean nativeHasTransparency();

    @p8.d
    private native void nativeRenderFrame(int i10, int i11, Bitmap bitmap);

    @Override // ha.d
    public void a(int i10, int i11, Bitmap bitmap) {
        nativeRenderFrame(i10, i11, bitmap);
    }

    @Override // ha.d
    public int b() {
        return nativeGetXOffset();
    }

    @Override // ha.d
    public int c() {
        return nativeGetYOffset();
    }

    public int d() {
        return nativeGetDisposalMode();
    }

    @Override // ha.d
    public void dispose() {
        nativeDispose();
    }

    protected void finalize() {
        nativeFinalize();
    }

    @Override // ha.d
    public int getHeight() {
        return nativeGetHeight();
    }

    @Override // ha.d
    public int getWidth() {
        return nativeGetWidth();
    }
}
