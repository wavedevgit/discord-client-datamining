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
    private SVGLength f17740d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17741e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17742i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17743o;

    public e0(ReactContext reactContext) {
        super(reactContext);
    }

    public void d(Dynamic dynamic) {
        this.f17740d = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17742i = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17741e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17743o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = new Path();
        double relativeOnWidth = relativeOnWidth(this.f17740d);
        double relativeOnHeight = relativeOnHeight(this.f17741e);
        double relativeOnWidth2 = relativeOnWidth(this.f17742i);
        double relativeOnHeight2 = relativeOnHeight(this.f17743o);
        path.moveTo((float) relativeOnWidth, (float) relativeOnHeight);
        path.lineTo((float) relativeOnWidth2, (float) relativeOnHeight2);
        ArrayList<i0> arrayList = new ArrayList<>();
        this.elements = arrayList;
        arrayList.add(new i0(g.kCGPathElementMoveToPoint, new m0[]{new m0(relativeOnWidth, relativeOnHeight)}));
        this.elements.add(new i0(g.kCGPathElementAddLineToPoint, new m0[]{new m0(relativeOnWidth2, relativeOnHeight2)}));
        return path;
    }
}
