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
    String f17828i;

    /* renamed from: o  reason: collision with root package name */
    u f17829o;

    /* renamed from: p  reason: collision with root package name */
    ReadableArray f17830p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17831a;

        static {
            int[] iArr = new int[u.values().length];
            f17831a = iArr;
            try {
                iArr[u.MATRIX.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17831a[u.SATURATE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17831a[u.HUE_ROTATE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17831a[u.LUMINANCE_TO_ALPHA.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public k(ReactContext reactContext) {
        super(reactContext);
    }

    @Override // com.horcrux.svg.q
    public Bitmap d(HashMap hashMap, Bitmap bitmap) {
        int i10;
        Bitmap f10 = q.f(hashMap, bitmap, this.f17828i);
        ColorMatrix colorMatrix = new ColorMatrix();
        int i11 = a.f17831a[this.f17829o.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 == 4) {
                        colorMatrix.set(new float[]{0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.2125f, 0.7154f, 0.0721f, 0.0f, 0.0f});
                    }
                } else {
                    if (this.f17830p.size() == 1) {
                        double d10 = (((float) this.f17830p.getDouble(0)) * 3.141592653589793d) / 180.0d;
                        float cos = (float) Math.cos(d10);
                        float sin = (float) Math.sin(d10);
                        float f11 = 0.715f - (cos * 0.715f);
                        float f12 = sin * 0.715f;
                        float f13 = 0.072f - (cos * 0.072f);
                        float f14 = 0.213f - (cos * 0.213f);
                        colorMatrix.set(new float[]{((cos * 0.787f) + 0.213f) - (sin * 0.213f), f11 - f12, f13 + (sin * 0.928f), 0.0f, 0.0f, f14 + (0.143f * sin), (0.285f * cos) + 0.715f + (0.14f * sin), f13 - (0.283f * sin), 0.0f, 0.0f, f14 - (0.787f * sin), f11 + f12, (cos * 0.928f) + 0.072f + (sin * 0.072f), 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f});
                    }
                    return f10;
                }
                return FilterUtils.getBitmapWithColorMatrix(colorMatrix, f10);
            }
            if (this.f17830p.size() == 1) {
                colorMatrix.setSaturation((float) this.f17830p.getDouble(0));
                return FilterUtils.getBitmapWithColorMatrix(colorMatrix, f10);
            }
            return f10;
        }
        if (this.f17830p.size() >= 20) {
            float[] fArr = new float[this.f17830p.size()];
            for (int i12 = 0; i12 < this.f17830p.size(); i12++) {
                float f15 = (float) this.f17830p.getDouble(i12);
                if (i12 % 5 == 4) {
                    i10 = SetSpanOperation.SPAN_MAX_PRIORITY;
                } else {
                    i10 = 1;
                }
                fArr[i12] = f15 * i10;
            }
            colorMatrix.set(fArr);
            return FilterUtils.getBitmapWithColorMatrix(colorMatrix, f10);
        }
        return f10;
    }

    public void l(String str) {
        this.f17828i = str;
        invalidate();
    }

    public void m(String str) {
        this.f17829o = u.d(str);
        invalidate();
    }

    public void n(ReadableArray readableArray) {
        this.f17830p = readableArray;
        invalidate();
    }
}
