package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class p extends q {

    /* renamed from: i  reason: collision with root package name */
    String f17879i;

    /* renamed from: o  reason: collision with root package name */
    SVGLength f17880o;

    /* renamed from: p  reason: collision with root package name */
    SVGLength f17881p;

    public p(ReactContext reactContext) {
        super(reactContext);
    }

    @Override // com.horcrux.svg.q
    public Bitmap d(HashMap hashMap, Bitmap bitmap) {
        float f10;
        float f11;
        Bitmap f12 = q.f(hashMap, bitmap, this.f17879i);
        Bitmap createBitmap = Bitmap.createBitmap(bitmap.getWidth(), bitmap.getHeight(), Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        SVGLength sVGLength = this.f17880o;
        if (sVGLength != null) {
            f10 = (float) relativeOnWidth(sVGLength);
        } else {
            f10 = 0.0f;
        }
        SVGLength sVGLength2 = this.f17881p;
        if (sVGLength2 != null) {
            f11 = (float) relativeOnHeight(sVGLength2);
        } else {
            f11 = 0.0f;
        }
        RectF rectF = new RectF(0.0f, 0.0f, f10, f11);
        getSvgView().getCtm().mapRect(rectF);
        float f13 = rectF.left;
        if (f13 >= 0.0f) {
            f13 = rectF.width();
        }
        float f14 = rectF.top;
        if (f14 >= 0.0f) {
            f14 = rectF.height();
        }
        canvas.drawBitmap(f12, f13, f14, (Paint) null);
        return createBitmap;
    }

    public void l(Dynamic dynamic) {
        this.f17880o = SVGLength.b(dynamic);
        invalidate();
    }

    public void m(Dynamic dynamic) {
        this.f17881p = SVGLength.b(dynamic);
        invalidate();
    }

    public void n(String str) {
        this.f17879i = str;
        invalidate();
    }
}
