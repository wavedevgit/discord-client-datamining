package com.facebook.imagepipeline.nativecode;

import android.graphics.Bitmap;
import o8.j;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeBlurFilter {
    static {
        c.a();
    }

    public static void a(Bitmap bitmap, int i10, int i11) {
        boolean z10;
        j.g(bitmap);
        boolean z11 = false;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        if (i11 > 0) {
            z11 = true;
        }
        j.b(Boolean.valueOf(z11));
        nativeIterativeBoxBlur(bitmap, i10, i11);
    }

    @o8.d
    private static native void nativeIterativeBoxBlur(Bitmap bitmap, int i10, int i11);
}
