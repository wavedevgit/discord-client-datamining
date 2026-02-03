package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import com.facebook.react.bridge.ReactContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class t0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    private float f17692q;

    /* renamed from: r  reason: collision with root package name */
    private float f17693r;

    /* renamed from: s  reason: collision with root package name */
    private float f17694s;

    /* renamed from: t  reason: collision with root package name */
    private float f17695t;

    /* renamed from: u  reason: collision with root package name */
    private String f17696u;

    /* renamed from: v  reason: collision with root package name */
    private int f17697v;

    public t0(ReactContext reactContext) {
        super(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public void draw(Canvas canvas, Paint paint, float f10) {
        saveDefinition();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(Canvas canvas, Paint paint, float f10, float f11, float f12) {
        if (this.f17696u != null) {
            float f13 = this.f17692q;
            float f14 = this.mScale;
            float f15 = this.f17693r;
            canvas.concat(l1.a(new RectF(f13 * f14, f15 * f14, (f13 + this.f17694s) * f14, (f15 + this.f17695t) * f14), new RectF(0.0f, 0.0f, f11, f12), this.f17696u, this.f17697v));
            super.draw(canvas, paint, f10);
        }
    }

    public void setAlign(String str) {
        this.f17696u = str;
        invalidate();
    }

    public void setMeetOrSlice(int i10) {
        this.f17697v = i10;
        invalidate();
    }

    public void setMinX(float f10) {
        this.f17692q = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f17693r = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f17695t = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f17694s = f10;
        invalidate();
    }
}
