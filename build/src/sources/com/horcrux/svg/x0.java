package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class x0 extends j1 {
    private String B;
    private h1 C;
    private g1 D;
    private SVGLength E;
    private f1 F;
    private i1 G;

    public x0(ReactContext reactContext) {
        super(reactContext);
        this.F = f1.align;
        this.G = i1.exact;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g1 F() {
        return this.D;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1 G() {
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SVGLength H() {
        return this.E;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path I(Canvas canvas, Paint paint) {
        VirtualView definedTemplate = getSvgView().getDefinedTemplate(this.B);
        if (!(definedTemplate instanceof RenderableView)) {
            return null;
        }
        return ((RenderableView) definedTemplate).getPath(canvas, paint);
    }

    public void J(String str) {
        this.B = str;
        invalidate();
    }

    public void K(String str) {
        this.D = g1.valueOf(str);
        invalidate();
    }

    public void L(String str) {
        this.C = h1.valueOf(str);
        invalidate();
    }

    public void M(String str) {
        this.G = i1.valueOf(str);
        invalidate();
    }

    public void N(Dynamic dynamic) {
        this.E = SVGLength.b(dynamic);
        invalidate();
    }

    @Override // com.horcrux.svg.j1, com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    void draw(Canvas canvas, Paint paint, float f10) {
        d(canvas, paint, f10);
    }

    @Override // com.horcrux.svg.j1, com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    Path getPath(Canvas canvas, Paint paint) {
        return q(canvas, paint);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0
    public void i() {
    }

    @Override // com.horcrux.svg.j1, com.horcrux.svg.c0
    void j() {
    }

    @Override // com.horcrux.svg.j1
    public void z(String str) {
        this.F = f1.valueOf(str);
        invalidate();
    }
}
