package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class l extends q {

    /* renamed from: i  reason: collision with root package name */
    String f16969i;

    /* renamed from: o  reason: collision with root package name */
    String f16970o;

    /* renamed from: p  reason: collision with root package name */
    float f16971p;

    /* renamed from: q  reason: collision with root package name */
    float f16972q;

    /* renamed from: r  reason: collision with root package name */
    float f16973r;

    /* renamed from: s  reason: collision with root package name */
    float f16974s;

    /* renamed from: t  reason: collision with root package name */
    v f16975t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16976a;

        static {
            int[] iArr = new int[v.values().length];
            f16976a = iArr;
            try {
                iArr[v.OVER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16976a[v.IN.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16976a[v.OUT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f16976a[v.ATOP.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f16976a[v.XOR.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f16976a[v.ARITHMETIC.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    public l(ReactContext reactContext) {
        super(reactContext);
    }

    @Override // com.horcrux.svg.q
    public Bitmap c(HashMap hashMap, Bitmap bitmap) {
        Bitmap e10 = q.e(hashMap, bitmap, this.f16969i);
        Bitmap e11 = q.e(hashMap, bitmap, this.f16970o);
        Bitmap createBitmap = Bitmap.createBitmap(e10.getWidth(), e10.getHeight(), Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        Paint paint = new Paint(1);
        canvas.drawBitmap(e10, 0.0f, 0.0f, paint);
        switch (a.f16976a[this.f16975t.ordinal()]) {
            case 1:
                paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_OVER));
                break;
            case 2:
                paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_IN));
                break;
            case 3:
                paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_OUT));
                break;
            case 4:
                paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_ATOP));
                break;
            case 5:
                paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.XOR));
                break;
            case 6:
                int width = createBitmap.getWidth() * createBitmap.getHeight();
                int[] iArr = new int[width];
                createBitmap.getPixels(iArr, 0, createBitmap.getWidth(), 0, 0, createBitmap.getWidth(), createBitmap.getHeight());
                int width2 = createBitmap.getWidth();
                int width3 = createBitmap.getWidth();
                int height = createBitmap.getHeight();
                int[] iArr2 = new int[width];
                e11.getPixels(iArr2, 0, width2, 0, 0, width3, height);
                int i10 = 0;
                while (i10 < width) {
                    int i11 = iArr[i10];
                    int i12 = iArr2[i10];
                    int i13 = (i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY;
                    int i14 = (i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY;
                    int i15 = i11 & SetSpanOperation.SPAN_MAX_PRIORITY;
                    int i16 = (i12 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY;
                    int i17 = width;
                    int i18 = (i12 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY;
                    int i19 = i12 & SetSpanOperation.SPAN_MAX_PRIORITY;
                    int[] iArr3 = iArr2;
                    float f10 = this.f16971p;
                    float f11 = i13;
                    float f12 = i16;
                    float f13 = this.f16972q;
                    float f14 = (f10 * f11 * f12) + (f11 * f13);
                    float f15 = this.f16973r;
                    float f16 = f14 + (f12 * f15);
                    float f17 = this.f16974s;
                    float f18 = i14;
                    float f19 = i18;
                    float f20 = i15;
                    float f21 = i19;
                    float f22 = i11 >>> 24;
                    float f23 = i12 >>> 24;
                    int min = Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) (f16 + f17)));
                    iArr[i10] = (Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) (((((f10 * f18) * f19) + (f18 * f13)) + (f19 * f15)) + f17))) << 8) | (min << 16) | (Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) (((((f10 * f22) * f23) + (f22 * f13)) + (f15 * f23)) + f17))) << 24) | Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) ((f10 * f20 * f21) + (f20 * f13) + (f21 * f15) + f17)));
                    i10++;
                    width = i17;
                    iArr2 = iArr3;
                }
                int width4 = createBitmap.getWidth();
                int width5 = createBitmap.getWidth();
                createBitmap = createBitmap;
                createBitmap.setPixels(iArr, 0, width4, 0, 0, width5, createBitmap.getHeight());
                break;
        }
        if (this.f16975t != v.ARITHMETIC) {
            canvas.drawBitmap(e11, 0.0f, 0.0f, paint);
        }
        return createBitmap;
    }

    public void k(String str) {
        this.f16969i = str;
        invalidate();
    }

    public void l(String str) {
        this.f16970o = str;
        invalidate();
    }

    public void m(Float f10) {
        this.f16971p = f10.floatValue();
        invalidate();
    }

    public void n(Float f10) {
        this.f16972q = f10.floatValue();
        invalidate();
    }

    public void o(Float f10) {
        this.f16973r = f10.floatValue();
        invalidate();
    }

    public void p(Float f10) {
        this.f16974s = f10.floatValue();
        invalidate();
    }

    public void q(String str) {
        this.f16975t = v.d(str);
        invalidate();
    }
}
