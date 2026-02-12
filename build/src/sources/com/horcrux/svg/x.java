package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Log;
import android.view.View;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class x extends e {

    /* renamed from: d  reason: collision with root package name */
    private final HashMap f17954d;

    /* renamed from: e  reason: collision with root package name */
    private w f17955e;

    /* renamed from: i  reason: collision with root package name */
    private w f17956i;

    /* renamed from: o  reason: collision with root package name */
    private final FilterRegion f17957o;

    public x(ReactContext reactContext) {
        super(reactContext);
        this.f17954d = new HashMap();
        this.f17957o = new FilterRegion();
    }

    public Bitmap d(Bitmap bitmap, Bitmap bitmap2, RectF rectF) {
        RectF rectF2;
        this.f17954d.clear();
        this.f17954d.put("SourceGraphic", bitmap);
        this.f17954d.put("SourceAlpha", FilterUtils.applySourceAlphaFilter(bitmap));
        this.f17954d.put("BackgroundImage", bitmap2);
        this.f17954d.put("BackgroundAlpha", FilterUtils.applySourceAlphaFilter(bitmap2));
        Bitmap createBitmap = Bitmap.createBitmap(bitmap.getWidth(), bitmap.getHeight(), bitmap.getConfig());
        Canvas canvas = new Canvas(createBitmap);
        Rect cropRect = this.f17957o.getCropRect(this, this.f17955e, rectF);
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (childAt instanceof q) {
                q qVar = (q) childAt;
                createBitmap.eraseColor(0);
                FilterRegion filterRegion = qVar.f17888e;
                w wVar = this.f17956i;
                if (wVar == w.USER_SPACE_ON_USE) {
                    rectF2 = new RectF(cropRect);
                } else {
                    rectF2 = rectF;
                }
                Rect cropRect2 = filterRegion.getCropRect(qVar, wVar, rectF2);
                canvas.drawBitmap(qVar.d(this.f17954d, bitmap), cropRect2, cropRect2, (Paint) null);
                bitmap = createBitmap.copy(Bitmap.Config.ARGB_8888, true);
                String e10 = qVar.e();
                if (e10 != null) {
                    this.f17954d.put(e10, bitmap);
                }
            } else {
                Log.e("RNSVG", "Invalid `Filter` child: Filter children can only be `Fe...` components");
            }
        }
        createBitmap.eraseColor(0);
        canvas.drawBitmap(bitmap, cropRect, cropRect, (Paint) null);
        return createBitmap;
    }

    public void e(String str) {
        this.f17955e = w.d(str);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17957o.setHeight(dynamic);
        invalidate();
    }

    public void g(String str) {
        this.f17956i = w.d(str);
        invalidate();
    }

    public void h(Dynamic dynamic) {
        this.f17957o.setWidth(dynamic);
        invalidate();
    }

    public void i(Dynamic dynamic) {
        this.f17957o.setX(dynamic);
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f17957o.setY(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        SvgView svgView;
        if (this.mName != null && (svgView = getSvgView()) != null) {
            svgView.defineFilter(this, this.mName);
        }
    }
}
