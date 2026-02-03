package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import com.facebook.react.bridge.ReactContext;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class j extends q {

    /* renamed from: i  reason: collision with root package name */
    String f16538i;

    /* renamed from: o  reason: collision with root package name */
    String f16539o;

    /* renamed from: p  reason: collision with root package name */
    t f16540p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16541a;

        static {
            int[] iArr = new int[t.values().length];
            f16541a = iArr;
            try {
                iArr[t.UNKNOWN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16541a[t.NORMAL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16541a[t.SCREEN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f16541a[t.LIGHTEN.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f16541a[t.DARKEN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f16541a[t.MULTIPLY.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    public j(ReactContext reactContext) {
        super(reactContext);
        this.f16624e.mX = new SVGLength(0.0d);
        this.f16624e.mY = new SVGLength(0.0d);
        this.f16624e.mW = new SVGLength("100%");
        this.f16624e.mH = new SVGLength("100%");
    }

    public static /* synthetic */ float[] k(float[] fArr, float[] fArr2) {
        float f10 = fArr[0];
        float f11 = 1.0f - f10;
        float f12 = fArr2[0];
        float f13 = 1.0f - f12;
        float f14 = fArr[1] * f10;
        float f15 = fArr2[1];
        float f16 = fArr[2] * f10;
        float f17 = fArr2[2];
        float f18 = fArr[3] * f10;
        float f19 = fArr2[3];
        return new float[]{1.0f - (f11 * f13), (f14 * f13) + (f15 * f12 * f11) + (f14 * f15 * f12), (f16 * f13) + (f17 * f12 * f11) + (f16 * f17 * f12), (f13 * f18) + (f19 * f12 * f11) + (f18 * f19 * f12)};
    }

    @Override // com.horcrux.svg.q
    public Bitmap c(HashMap hashMap, Bitmap bitmap) {
        Bitmap e10 = q.e(hashMap, bitmap, this.f16538i);
        Bitmap e11 = q.e(hashMap, bitmap, this.f16539o);
        if (this.f16540p == t.MULTIPLY) {
            return CustomFilter.apply(e10, e11, new d() { // from class: com.horcrux.svg.i
                @Override // com.horcrux.svg.d
                public final float[] a(float[] fArr, float[] fArr2) {
                    return j.k(fArr, fArr2);
                }
            });
        }
        Bitmap createBitmap = Bitmap.createBitmap(e10.getWidth(), e10.getHeight(), Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        Paint paint = new Paint(1);
        canvas.drawBitmap(e10, 0.0f, 0.0f, paint);
        int i10 = a.f16541a[this.f16540p.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4) {
                    if (i10 == 5) {
                        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DARKEN));
                    }
                } else {
                    paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.LIGHTEN));
                }
            } else {
                paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SCREEN));
            }
        } else {
            paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_OVER));
        }
        canvas.drawBitmap(e11, 0.0f, 0.0f, paint);
        return createBitmap;
    }

    public void l(String str) {
        this.f16538i = str;
        invalidate();
    }

    public void m(String str) {
        this.f16539o = str;
        invalidate();
    }

    public void n(String str) {
        this.f16540p = t.d(str);
        invalidate();
    }
}
