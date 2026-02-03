package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import com.facebook.react.bridge.ReactContext;
import java.util.ArrayList;
import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k0 extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    private Path f17601d;

    public k0(ReactContext reactContext) {
        super(reactContext);
        j0.f17574a = this.mScale;
        this.f17601d = new Path();
    }

    public void c(String str) {
        m0[] m0VarArr;
        this.f17601d = j0.o(str);
        ArrayList<i0> arrayList = j0.f17579f;
        this.elements = arrayList;
        Iterator<i0> it = arrayList.iterator();
        while (it.hasNext()) {
            for (m0 m0Var : it.next().f17566b) {
                double d10 = m0Var.f17628a;
                float f10 = this.mScale;
                m0Var.f17628a = d10 * f10;
                m0Var.f17629b *= f10;
            }
        }
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        return this.f17601d;
    }
}
