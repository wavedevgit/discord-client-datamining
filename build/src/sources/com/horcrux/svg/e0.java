package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e0 extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f16871d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16872e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16873i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f16874o;

    public e0(ReactContext reactContext) {
        super(reactContext);
    }

    public void c(Dynamic dynamic) {
        this.f16871d = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f16873i = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f16872e = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f16874o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = new Path();
        double relativeOnWidth = relativeOnWidth(this.f16871d);
        double relativeOnHeight = relativeOnHeight(this.f16872e);
        double relativeOnWidth2 = relativeOnWidth(this.f16873i);
        double relativeOnHeight2 = relativeOnHeight(this.f16874o);
        path.moveTo((float) relativeOnWidth, (float) relativeOnHeight);
        path.lineTo((float) relativeOnWidth2, (float) relativeOnHeight2);
        ArrayList<i0> arrayList = new ArrayList<>();
        this.elements = arrayList;
        arrayList.add(new i0(g.kCGPathElementMoveToPoint, new m0[]{new m0(relativeOnWidth, relativeOnHeight)}));
        this.elements.add(new i0(g.kCGPathElementAddLineToPoint, new m0[]{new m0(relativeOnWidth2, relativeOnHeight2)}));
        return path;
    }
}
