package za;

import android.graphics.Matrix;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import kotlin.jvm.internal.Intrinsics;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f55426a = new e();

    /* renamed from: b  reason: collision with root package name */
    public static final o8.e f55427b;

    static {
        o8.e c10 = o8.e.c(2, 7, 4, 5);
        Intrinsics.checkNotNullExpressionValue(c10, "of(...)");
        f55427b = c10;
    }

    private e() {
    }

    public static final int a(int i10) {
        return Math.max(1, 8 / i10);
    }

    public static final float b(ResizeOptions resizeOptions, int i10, int i11) {
        if (resizeOptions == null) {
            return 1.0f;
        }
        float f10 = i10;
        float f11 = i11;
        float max = Math.max(resizeOptions.f11465a / f10, resizeOptions.f11466b / f11);
        float f12 = resizeOptions.f11467c;
        if (f10 * max > f12) {
            max = f12 / f10;
        }
        if (f11 * max > f12) {
            return f12 / f11;
        }
        return max;
    }

    private final int c(k kVar) {
        int q12 = kVar.q1();
        if (q12 != 90 && q12 != 180 && q12 != 270) {
            return 0;
        }
        return kVar.q1();
    }

    public static final int d(RotationOptions rotationOptions, k encodedImage) {
        int i10;
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        int a12 = encodedImage.a1();
        o8.e eVar = f55427b;
        int indexOf = eVar.indexOf(Integer.valueOf(a12));
        if (indexOf >= 0) {
            if (!rotationOptions.j()) {
                i10 = rotationOptions.h();
            } else {
                i10 = 0;
            }
            E e10 = eVar.get((indexOf + (i10 / 90)) % eVar.size());
            Intrinsics.checkNotNullExpressionValue(e10, "get(...)");
            return ((Number) e10).intValue();
        }
        throw new IllegalArgumentException("Only accepts inverted exif orientations");
    }

    public static final int e(RotationOptions rotationOptions, k encodedImage) {
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        if (!rotationOptions.i()) {
            return 0;
        }
        int c10 = f55426a.c(encodedImage);
        if (rotationOptions.j()) {
            return c10;
        }
        return (c10 + rotationOptions.h()) % 360;
    }

    public static final int f(RotationOptions rotationOptions, ResizeOptions resizeOptions, k encodedImage, boolean z10) {
        int i10;
        int width;
        int height;
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        if (!z10 || resizeOptions == null) {
            return 8;
        }
        int e10 = e(rotationOptions, encodedImage);
        boolean z11 = false;
        if (f55427b.contains(Integer.valueOf(encodedImage.a1()))) {
            i10 = d(rotationOptions, encodedImage);
        } else {
            i10 = 0;
        }
        if (e10 == 90 || e10 == 270 || i10 == 5 || i10 == 7) {
            z11 = true;
        }
        if (z11) {
            width = encodedImage.getHeight();
        } else {
            width = encodedImage.getWidth();
        }
        if (z11) {
            height = encodedImage.getWidth();
        } else {
            height = encodedImage.getHeight();
        }
        int k10 = k(b(resizeOptions, width, height), resizeOptions.f11468d);
        if (k10 > 8) {
            return 8;
        }
        if (k10 < 1) {
            return 1;
        }
        return k10;
    }

    public static final Matrix g(k encodedImage, RotationOptions rotationOptions) {
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        if (f55427b.contains(Integer.valueOf(encodedImage.a1()))) {
            return f55426a.h(d(rotationOptions, encodedImage));
        }
        int e10 = e(rotationOptions, encodedImage);
        if (e10 != 0) {
            Matrix matrix = new Matrix();
            matrix.setRotate(e10);
            return matrix;
        }
        return null;
    }

    private final Matrix h(int i10) {
        Matrix matrix = new Matrix();
        if (i10 != 2) {
            if (i10 != 7) {
                if (i10 != 4) {
                    if (i10 != 5) {
                        return null;
                    }
                    matrix.setRotate(90.0f);
                    matrix.postScale(-1.0f, 1.0f);
                    return matrix;
                }
                matrix.setRotate(180.0f);
                matrix.postScale(-1.0f, 1.0f);
                return matrix;
            }
            matrix.setRotate(-90.0f);
            matrix.postScale(-1.0f, 1.0f);
            return matrix;
        }
        matrix.setScale(-1.0f, 1.0f);
        return matrix;
    }

    public static final boolean i(int i10) {
        switch (i10) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                return true;
            default:
                return false;
        }
    }

    public static final boolean j(int i10) {
        if (i10 >= 0 && i10 <= 270 && i10 % 90 == 0) {
            return true;
        }
        return false;
    }

    public static final int k(float f10, float f11) {
        return (int) (f11 + (f10 * 8));
    }
}
