package za;

import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import kotlin.jvm.internal.Intrinsics;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f55556a = new a();

    private a() {
    }

    public static final float a(RotationOptions rotationOptions, ResizeOptions resizeOptions, k encodedImage) {
        boolean z10;
        int width;
        int height;
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        if (k.K0(encodedImage)) {
            if (resizeOptions != null && resizeOptions.f11095b > 0 && resizeOptions.f11094a > 0 && encodedImage.getWidth() != 0 && encodedImage.getHeight() != 0) {
                int d10 = f55556a.d(rotationOptions, encodedImage);
                if (d10 != 90 && d10 != 270) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                if (z10) {
                    width = encodedImage.getHeight();
                } else {
                    width = encodedImage.getWidth();
                }
                if (z10) {
                    height = encodedImage.getWidth();
                } else {
                    height = encodedImage.getHeight();
                }
                float f10 = resizeOptions.f11094a / width;
                float f11 = resizeOptions.f11095b / height;
                float c10 = kotlin.ranges.d.c(f10, f11);
                p8.a.E("DownsampleUtil", "Downsample - Specified size: %dx%d, image size: %dx%d ratio: %.1f x %.1f, ratio: %.3f", Integer.valueOf(resizeOptions.f11094a), Integer.valueOf(resizeOptions.f11095b), Integer.valueOf(width), Integer.valueOf(height), Float.valueOf(f10), Float.valueOf(f11), Float.valueOf(c10));
                return c10;
            }
            return 1.0f;
        }
        throw new IllegalStateException("Check failed.");
    }

    public static final int b(RotationOptions rotationOptions, ResizeOptions resizeOptions, k encodedImage, int i10) {
        int e10;
        float f10;
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        if (!k.K0(encodedImage)) {
            return 1;
        }
        float a10 = a(rotationOptions, resizeOptions, encodedImage);
        if (encodedImage.L() == fa.b.f24079b) {
            e10 = f(a10);
        } else {
            e10 = e(a10);
        }
        int max = Math.max(encodedImage.getHeight(), encodedImage.getWidth());
        if (resizeOptions != null) {
            f10 = resizeOptions.f11096c;
        } else {
            f10 = i10;
        }
        while (max / e10 > f10) {
            if (encodedImage.L() == fa.b.f24079b) {
                e10 *= 2;
            } else {
                e10++;
            }
        }
        return e10;
    }

    public static final int c(k encodedImage, int i10, int i11) {
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        int t02 = encodedImage.t0();
        while ((((encodedImage.getWidth() * encodedImage.getHeight()) * i10) / t02) / t02 > i11) {
            t02 *= 2;
        }
        return t02;
    }

    private final int d(RotationOptions rotationOptions, k kVar) {
        if (!rotationOptions.j()) {
            return 0;
        }
        int q12 = kVar.q1();
        if (q12 != 0 && q12 != 90 && q12 != 180 && q12 != 270) {
            throw new IllegalStateException("Check failed.");
        }
        return q12;
    }

    public static final int e(float f10) {
        if (f10 > 0.6666667f) {
            return 1;
        }
        int i10 = 2;
        while (true) {
            double d10 = i10;
            if ((1.0d / d10) + ((1.0d / (Math.pow(d10, 2.0d) - d10)) * 0.33333334f) <= f10) {
                return i10 - 1;
            }
            i10++;
        }
    }

    public static final int f(float f10) {
        if (f10 > 0.6666667f) {
            return 1;
        }
        int i10 = 2;
        while (true) {
            int i11 = i10 * 2;
            double d10 = 1.0d / i11;
            if (d10 + (0.33333334f * d10) <= f10) {
                return i10;
            }
            i10 = i11;
        }
    }
}
