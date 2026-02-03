package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import com.facebook.react.bridge.ReactContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class t0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    private float f16660q;

    /* renamed from: r  reason: collision with root package name */
    private float f16661r;

    /* renamed from: s  reason: collision with root package name */
    private float f16662s;

    /* renamed from: t  reason: collision with root package name */
    private float f16663t;

    /* renamed from: u  reason: collision with root package name */
    private String f16664u;

    /* renamed from: v  reason: collision with root package name */
    private int f16665v;

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
        if (this.f16664u != null) {
            float f13 = this.f16660q;
            float f14 = this.mScale;
            float f15 = this.f16661r;
            canvas.concat(l1.a(new RectF(f13 * f14, f15 * f14, (f13 + this.f16662s) * f14, (f15 + this.f16663t) * f14), new RectF(0.0f, 0.0f, f11, f12), this.f16664u, this.f16665v));
            super.draw(canvas, paint, f10);
        }
    }

    public void setAlign(String str) {
        this.f16664u = str;
        invalidate();
    }

    public void setMeetOrSlice(int i10) {
        this.f16665v = i10;
        invalidate();
    }

    public void setMinX(float f10) {
        this.f16660q = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f16661r = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f16663t = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f16662s = f10;
        invalidate();
    }
}
