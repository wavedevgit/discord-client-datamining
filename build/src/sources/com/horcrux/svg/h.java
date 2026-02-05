package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f16910d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16911e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16912i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f16913o;

    public h(ReactContext reactContext) {
        super(reactContext);
    }

    public void c(Dynamic dynamic) {
        this.f16910d = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f16911e = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f16912i = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f16913o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = new Path();
        double relativeOnWidth = relativeOnWidth(this.f16910d);
        double relativeOnHeight = relativeOnHeight(this.f16911e);
        double relativeOnWidth2 = relativeOnWidth(this.f16912i);
        double relativeOnHeight2 = relativeOnHeight(this.f16913o);
        double d10 = relativeOnWidth - relativeOnWidth2;
        double d11 = relativeOnHeight - relativeOnHeight2;
        double d12 = relativeOnWidth + relativeOnWidth2;
        double d13 = relativeOnHeight + relativeOnHeight2;
        path.addOval(new RectF((float) d10, (float) d11, (float) d12, (float) d13), Path.Direction.CW);
        ArrayList<i0> arrayList = new ArrayList<>();
        this.elements = arrayList;
        arrayList.add(new i0(g.kCGPathElementMoveToPoint, new m0[]{new m0(relativeOnWidth, d11)}));
        ArrayList<i0> arrayList2 = this.elements;
        g gVar = g.kCGPathElementAddLineToPoint;
        arrayList2.add(new i0(gVar, new m0[]{new m0(relativeOnWidth, d11), new m0(d12, relativeOnHeight)}));
        this.elements.add(new i0(gVar, new m0[]{new m0(d12, relativeOnHeight), new m0(relativeOnWidth, d13)}));
        this.elements.add(new i0(gVar, new m0[]{new m0(relativeOnWidth, d13), new m0(d10, relativeOnHeight)}));
        this.elements.add(new i0(gVar, new m0[]{new m0(d10, relativeOnHeight), new m0(relativeOnWidth, d11)}));
        return path;
    }
}
