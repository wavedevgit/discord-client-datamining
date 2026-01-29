package e0;

import a0.m2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Rational;
import java.util.HashMap;
import java.util.Map;
import x.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o {
    public static Map a(Rect rect, boolean z10, Rational rational, int i10, int i11, int i12, Map map) {
        boolean z11;
        if (rect.width() > 0 && rect.height() > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        b2.e.b(z11, "Cannot compute viewport crop rects zero sized sensor rect.");
        RectF rectF = new RectF(rect);
        HashMap hashMap = new HashMap();
        RectF rectF2 = new RectF(rect);
        for (Map.Entry entry : map.entrySet()) {
            Matrix matrix = new Matrix();
            RectF rectF3 = new RectF(0.0f, 0.0f, ((m2) entry.getValue()).e().getWidth(), ((m2) entry.getValue()).e().getHeight());
            matrix.setRectToRect(rectF3, rectF, Matrix.ScaleToFit.CENTER);
            hashMap.put((x1) entry.getKey(), matrix);
            RectF rectF4 = new RectF();
            matrix.mapRect(rectF4, rectF3);
            rectF2.intersect(rectF4);
        }
        RectF g10 = g(rectF2, i0.b.f(i10, rational), i11, z10, i12, i10);
        HashMap hashMap2 = new HashMap();
        RectF rectF5 = new RectF();
        Matrix matrix2 = new Matrix();
        for (Map.Entry entry2 : hashMap.entrySet()) {
            ((Matrix) entry2.getValue()).invert(matrix2);
            matrix2.mapRect(rectF5, g10);
            Rect rect2 = new Rect();
            rectF5.round(rect2);
            hashMap2.put((x1) entry2.getKey(), rect2);
        }
        return hashMap2;
    }

    private static RectF b(boolean z10, int i10, RectF rectF, RectF rectF2) {
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        boolean z15;
        boolean z16;
        boolean z17;
        boolean z18 = false;
        if (i10 == 0 && !z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (i10 == 90 && z10) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (!z11 && !z12) {
            if (i10 == 0 && z10) {
                z13 = true;
            } else {
                z13 = false;
            }
            if (i10 == 270 && !z10) {
                z14 = true;
            } else {
                z14 = false;
            }
            if (!z13 && !z14) {
                if (i10 == 90 && !z10) {
                    z15 = true;
                } else {
                    z15 = false;
                }
                if (i10 == 180 && z10) {
                    z16 = true;
                } else {
                    z16 = false;
                }
                if (!z15 && !z16) {
                    if (i10 == 180 && !z10) {
                        z17 = true;
                    } else {
                        z17 = false;
                    }
                    if (i10 == 270 && z10) {
                        z18 = true;
                    }
                    if (!z17 && !z18) {
                        throw new IllegalArgumentException("Invalid argument: mirrored " + z10 + " rotation " + i10);
                    }
                    return c(d(rectF2, rectF.centerY()), rectF.centerX());
                }
                return d(rectF2, rectF.centerY());
            }
            return c(rectF2, rectF.centerX());
        }
        return rectF2;
    }

    private static RectF c(RectF rectF, float f10) {
        return new RectF(e(rectF.right, f10), rectF.top, e(rectF.left, f10), rectF.bottom);
    }

    private static RectF d(RectF rectF, float f10) {
        return new RectF(rectF.left, f(rectF.bottom, f10), rectF.right, f(rectF.top, f10));
    }

    private static float e(float f10, float f11) {
        return (f11 + f11) - f10;
    }

    private static float f(float f10, float f11) {
        return (f11 + f11) - f10;
    }

    public static RectF g(RectF rectF, Rational rational, int i10, boolean z10, int i11, int i12) {
        if (i10 == 3) {
            return rectF;
        }
        Matrix matrix = new Matrix();
        RectF rectF2 = new RectF(0.0f, 0.0f, rational.getNumerator(), rational.getDenominator());
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    matrix.setRectToRect(rectF2, rectF, Matrix.ScaleToFit.END);
                } else {
                    throw new IllegalStateException("Unexpected scale type: " + i10);
                }
            } else {
                matrix.setRectToRect(rectF2, rectF, Matrix.ScaleToFit.CENTER);
            }
        } else {
            matrix.setRectToRect(rectF2, rectF, Matrix.ScaleToFit.START);
        }
        RectF rectF3 = new RectF();
        matrix.mapRect(rectF3, rectF2);
        return b(h(z10, i11), i12, rectF, rectF3);
    }

    private static boolean h(boolean z10, int i10) {
        boolean z11 = true;
        if (i10 != 1) {
            z11 = false;
        }
        return z10 ^ z11;
    }
}
