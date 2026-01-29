package com.facebook.imagepipeline.nativecode;

import android.graphics.Bitmap;
import o8.j;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeRoundingFilter {
    static {
        c.a();
    }

    @o8.d
    private static native void nativeAddRoundedCornersFilter(Bitmap bitmap, int i10, int i11, int i12, int i13);

    @o8.d
    private static native void nativeToCircleFastFilter(Bitmap bitmap, boolean z10);

    @o8.d
    private static native void nativeToCircleFilter(Bitmap bitmap, boolean z10);

    @o8.d
    private static native void nativeToCircleWithBorderFilter(Bitmap bitmap, int i10, int i11, boolean z10);

    @o8.d
    public static void toCircle(Bitmap bitmap, boolean z10) {
        j.g(bitmap);
        if (bitmap.getWidth() >= 3 && bitmap.getHeight() >= 3) {
            nativeToCircleFilter(bitmap, z10);
        }
    }

    @o8.d
    public static void toCircleFast(Bitmap bitmap, boolean z10) {
        j.g(bitmap);
        if (bitmap.getWidth() >= 3 && bitmap.getHeight() >= 3) {
            nativeToCircleFastFilter(bitmap, z10);
        }
    }
}
