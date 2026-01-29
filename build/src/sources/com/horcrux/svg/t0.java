package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import com.facebook.react.bridge.ReactContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class t0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    private float f18063q;

    /* renamed from: r  reason: collision with root package name */
    private float f18064r;

    /* renamed from: s  reason: collision with root package name */
    private float f18065s;

    /* renamed from: t  reason: collision with root package name */
    private float f18066t;

    /* renamed from: u  reason: collision with root package name */
    private String f18067u;

    /* renamed from: v  reason: collision with root package name */
    private int f18068v;

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
        if (this.f18067u != null) {
            float f13 = this.f18063q;
            float f14 = this.mScale;
            float f15 = this.f18064r;
            canvas.concat(l1.a(new RectF(f13 * f14, f15 * f14, (f13 + this.f18065s) * f14, (f15 + this.f18066t) * f14), new RectF(0.0f, 0.0f, f11, f12), this.f18067u, this.f18068v));
            super.draw(canvas, paint, f10);
        }
    }

    public void setAlign(String str) {
        this.f18067u = str;
        invalidate();
    }

    public void setMeetOrSlice(int i10) {
        this.f18068v = i10;
        invalidate();
    }

    public void setMinX(float f10) {
        this.f18063q = f10;
        invalidate();
    }

    public void setMinY(float f10) {
        this.f18064r = f10;
        invalidate();
    }

    public void setVbHeight(float f10) {
        this.f18066t = f10;
        invalidate();
    }

    public void setVbWidth(float f10) {
        this.f18065s = f10;
        invalidate();
    }
}
