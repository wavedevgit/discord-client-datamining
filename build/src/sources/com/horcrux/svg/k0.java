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
    private Path f16569d;

    public k0(ReactContext reactContext) {
        super(reactContext);
        j0.f16542a = this.mScale;
        this.f16569d = new Path();
    }

    public void c(String str) {
        m0[] m0VarArr;
        this.f16569d = j0.o(str);
        ArrayList<i0> arrayList = j0.f16547f;
        this.elements = arrayList;
        Iterator<i0> it = arrayList.iterator();
        while (it.hasNext()) {
            for (m0 m0Var : it.next().f16534b) {
                double d10 = m0Var.f16596a;
                float f10 = this.mScale;
                m0Var.f16596a = d10 * f10;
                m0Var.f16597b *= f10;
            }
        }
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        return this.f16569d;
    }
}
