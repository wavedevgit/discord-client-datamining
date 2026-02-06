package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f16802d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16803e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16804i;

    public b(ReactContext reactContext) {
        super(reactContext);
    }

    public void c(Dynamic dynamic) {
        this.f16802d = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f16803e = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f16804i = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = new Path();
        double relativeOnWidth = relativeOnWidth(this.f16802d);
        double relativeOnHeight = relativeOnHeight(this.f16803e);
        double relativeOnOther = relativeOnOther(this.f16804i);
        path.addCircle((float) relativeOnWidth, (float) relativeOnHeight, (float) relativeOnOther, Path.Direction.CW);
        ArrayList<i0> arrayList = new ArrayList<>();
        this.elements = arrayList;
        double d10 = relativeOnHeight - relativeOnOther;
        arrayList.add(new i0(g.kCGPathElementMoveToPoint, new m0[]{new m0(relativeOnWidth, d10)}));
        ArrayList<i0> arrayList2 = this.elements;
        g gVar = g.kCGPathElementAddLineToPoint;
        double d11 = relativeOnWidth + relativeOnOther;
        arrayList2.add(new i0(gVar, new m0[]{new m0(relativeOnWidth, d10), new m0(d11, relativeOnHeight)}));
        double d12 = relativeOnHeight + relativeOnOther;
        this.elements.add(new i0(gVar, new m0[]{new m0(d11, relativeOnHeight), new m0(relativeOnWidth, d12)}));
        ArrayList<i0> arrayList3 = this.elements;
        m0 m0Var = new m0(relativeOnWidth, d12);
        double d13 = relativeOnWidth - relativeOnOther;
        arrayList3.add(new i0(gVar, new m0[]{m0Var, new m0(d13, relativeOnHeight)}));
        this.elements.add(new i0(gVar, new m0[]{new m0(d13, relativeOnHeight), new m0(relativeOnWidth, d10)}));
        return path;
    }
}
