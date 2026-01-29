package com.facebook.animated.webp;

import android.graphics.Bitmap;
import ga.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class WebPFrame implements d {
    @o8.d
    private long mNativeContext;

    @o8.d
    WebPFrame(long j10) {
        this.mNativeContext = j10;
    }

    private native void nativeDispose();

    private native void nativeFinalize();

    private native int nativeGetDurationMs();

    private native int nativeGetHeight();

    private native int nativeGetWidth();

    private native int nativeGetXOffset();

    private native int nativeGetYOffset();

    private native boolean nativeIsBlendWithPreviousFrame();

    private native void nativeRenderFrame(int i10, int i11, Bitmap bitmap);

    private native boolean nativeShouldDisposeToBackgroundColor();

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

    public boolean d() {
        return nativeIsBlendWithPreviousFrame();
    }

    @Override // ga.d
    public void dispose() {
        nativeDispose();
    }

    public boolean e() {
        return nativeShouldDisposeToBackgroundColor();
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
