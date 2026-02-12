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
    String f17839i;

    /* renamed from: o  reason: collision with root package name */
    String f17840o;

    /* renamed from: p  reason: collision with root package name */
    float f17841p;

    /* renamed from: q  reason: collision with root package name */
    float f17842q;

    /* renamed from: r  reason: collision with root package name */
    float f17843r;

    /* renamed from: s  reason: collision with root package name */
    float f17844s;

    /* renamed from: t  reason: collision with root package name */
    v f17845t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17846a;

        static {
            int[] iArr = new int[v.values().length];
            f17846a = iArr;
            try {
                iArr[v.OVER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17846a[v.IN.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17846a[v.OUT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17846a[v.ATOP.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17846a[v.XOR.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f17846a[v.ARITHMETIC.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    public l(ReactContext reactContext) {
        super(reactContext);
    }

    @Override // com.horcrux.svg.q
    public Bitmap d(HashMap hashMap, Bitmap bitmap) {
        Bitmap f10 = q.f(hashMap, bitmap, this.f17839i);
        Bitmap f11 = q.f(hashMap, bitmap, this.f17840o);
        Bitmap createBitmap = Bitmap.createBitmap(f10.getWidth(), f10.getHeight(), Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        Paint paint = new Paint(1);
        canvas.drawBitmap(f10, 0.0f, 0.0f, paint);
        switch (a.f17846a[this.f17845t.ordinal()]) {
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
                f11.getPixels(iArr2, 0, width2, 0, 0, width3, height);
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
                    float f12 = this.f17841p;
                    float f13 = i13;
                    float f14 = i16;
                    float f15 = this.f17842q;
                    float f16 = (f12 * f13 * f14) + (f13 * f15);
                    float f17 = this.f17843r;
                    float f18 = f16 + (f14 * f17);
                    float f19 = this.f17844s;
                    float f20 = i14;
                    float f21 = i18;
                    float f22 = i15;
                    float f23 = i19;
                    float f24 = i11 >>> 24;
                    float f25 = i12 >>> 24;
                    int min = Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) (f18 + f19)));
                    iArr[i10] = (Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) (((((f12 * f20) * f21) + (f20 * f15)) + (f21 * f17)) + f19))) << 8) | (min << 16) | (Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) (((((f12 * f24) * f25) + (f24 * f15)) + (f17 * f25)) + f19))) << 24) | Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, Math.max(0, (int) ((f12 * f22 * f23) + (f22 * f15) + (f23 * f17) + f19)));
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
        if (this.f17845t != v.ARITHMETIC) {
            canvas.drawBitmap(f11, 0.0f, 0.0f, paint);
        }
        return createBitmap;
    }

    public void l(String str) {
        this.f17839i = str;
        invalidate();
    }

    public void m(String str) {
        this.f17840o = str;
        invalidate();
    }

    public void n(Float f10) {
        this.f17841p = f10.floatValue();
        invalidate();
    }

    public void o(Float f10) {
        this.f17842q = f10.floatValue();
        invalidate();
    }

    public void p(Float f10) {
        this.f17843r = f10.floatValue();
        invalidate();
    }

    public void q(Float f10) {
        this.f17844s = f10.floatValue();
        invalidate();
    }

    public void r(String str) {
        this.f17845t = v.d(str);
        invalidate();
    }
}
