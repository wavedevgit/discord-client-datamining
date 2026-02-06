package com.facebook.imagepipeline.nativecode;

import android.graphics.Bitmap;
import o8.j;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class Bitmaps {

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ int f10538a = 0;

    static {
        b.a();
    }

    @o8.d
    public static void copyBitmap(Bitmap bitmap, Bitmap bitmap2) {
        boolean z10;
        boolean z11;
        boolean z12 = false;
        if (bitmap2.getConfig() == bitmap.getConfig()) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        j.b(Boolean.valueOf(bitmap.isMutable()));
        if (bitmap.getWidth() == bitmap2.getWidth()) {
            z11 = true;
        } else {
            z11 = false;
        }
        j.b(Boolean.valueOf(z11));
        if (bitmap.getHeight() == bitmap2.getHeight()) {
            z12 = true;
        }
        j.b(Boolean.valueOf(z12));
        nativeCopyBitmap(bitmap, bitmap.getRowBytes(), bitmap2, bitmap2.getRowBytes(), bitmap.getHeight());
    }

    @o8.d
    private static native void nativeCopyBitmap(Bitmap bitmap, int i10, Bitmap bitmap2, int i11, int i12);
}
