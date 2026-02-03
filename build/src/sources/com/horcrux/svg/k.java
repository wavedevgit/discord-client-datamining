package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.ColorMatrix;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k extends q {

    /* renamed from: i  reason: collision with root package name */
    String f16565i;

    /* renamed from: o  reason: collision with root package name */
    u f16566o;

    /* renamed from: p  reason: collision with root package name */
    ReadableArray f16567p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16568a;

        static {
            int[] iArr = new int[u.values().length];
            f16568a = iArr;
            try {
                iArr[u.MATRIX.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16568a[u.SATURATE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16568a[u.HUE_ROTATE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f16568a[u.LUMINANCE_TO_ALPHA.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public k(ReactContext reactContext) {
        super(reactContext);
    }

    @Override // com.horcrux.svg.q
    public Bitmap c(HashMap hashMap, Bitmap bitmap) {
        int i10;
        Bitmap e10 = q.e(hashMap, bitmap, this.f16565i);
        ColorMatrix colorMatrix = new ColorMatrix();
        int i11 = a.f16568a[this.f16566o.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 == 4) {
                        colorMatrix.set(new float[]{0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.2125f, 0.7154f, 0.0721f, 0.0f, 0.0f});
                    }
                } else {
                    if (this.f16567p.size() == 1) {
                        double d10 = (((float) this.f16567p.getDouble(0)) * 3.141592653589793d) / 180.0d;
                        float cos = (float) Math.cos(d10);
                        float sin = (float) Math.sin(d10);
                        float f10 = 0.715f - (cos * 0.715f);
                        float f11 = sin * 0.715f;
                        float f12 = 0.072f - (cos * 0.072f);
                        float f13 = 0.213f - (cos * 0.213f);
                        colorMatrix.set(new float[]{((cos * 0.787f) + 0.213f) - (sin * 0.213f), f10 - f11, f12 + (sin * 0.928f), 0.0f, 0.0f, f13 + (0.143f * sin), (0.285f * cos) + 0.715f + (0.14f * sin), f12 - (0.283f * sin), 0.0f, 0.0f, f13 - (0.787f * sin), f10 + f11, (cos * 0.928f) + 0.072f + (sin * 0.072f), 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f});
                    }
                    return e10;
                }
                return FilterUtils.getBitmapWithColorMatrix(colorMatrix, e10);
            }
            if (this.f16567p.size() == 1) {
                colorMatrix.setSaturation((float) this.f16567p.getDouble(0));
                return FilterUtils.getBitmapWithColorMatrix(colorMatrix, e10);
            }
            return e10;
        }
        if (this.f16567p.size() >= 20) {
            float[] fArr = new float[this.f16567p.size()];
            for (int i12 = 0; i12 < this.f16567p.size(); i12++) {
                float f14 = (float) this.f16567p.getDouble(i12);
                if (i12 % 5 == 4) {
                    i10 = SetSpanOperation.SPAN_MAX_PRIORITY;
                } else {
                    i10 = 1;
                }
                fArr[i12] = f14 * i10;
            }
            colorMatrix.set(fArr);
            return FilterUtils.getBitmapWithColorMatrix(colorMatrix, e10);
        }
        return e10;
    }

    public void k(String str) {
        this.f16565i = str;
        invalidate();
    }

    public void l(String str) {
        this.f16566o = u.d(str);
        invalidate();
    }

    public void m(ReadableArray readableArray) {
        this.f16567p = readableArray;
        invalidate();
    }
}
