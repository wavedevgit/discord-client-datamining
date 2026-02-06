package com.horcrux.svg;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class r0 extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17009d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17010e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17011i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17012o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17013p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f17014q;

    public r0(ReactContext reactContext) {
        super(reactContext);
    }

    public void c(Dynamic dynamic) {
        this.f17012o = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f17013p = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17014q = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17011i = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17009d = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:17:0x005e  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0066  */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public android.graphics.Path getPath(android.graphics.Canvas r20, android.graphics.Paint r21) {
        /*
            Method dump skipped, instructions count: 238
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.horcrux.svg.r0.getPath(android.graphics.Canvas, android.graphics.Paint):android.graphics.Path");
    }

    public void h(Dynamic dynamic) {
        this.f17010e = SVGLength.b(dynamic);
        invalidate();
    }
}
