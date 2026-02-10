package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Region;
import android.view.View;
import android.view.ViewParent;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j1 extends c0 {
    double A;

    /* renamed from: q  reason: collision with root package name */
    SVGLength f17818q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f17819r;

    /* renamed from: s  reason: collision with root package name */
    private String f17820s;

    /* renamed from: t  reason: collision with root package name */
    e1 f17821t;

    /* renamed from: u  reason: collision with root package name */
    private y0 f17822u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f17823v;

    /* renamed from: w  reason: collision with root package name */
    private ArrayList f17824w;

    /* renamed from: x  reason: collision with root package name */
    private ArrayList f17825x;

    /* renamed from: y  reason: collision with root package name */
    private ArrayList f17826y;

    /* renamed from: z  reason: collision with root package name */
    private ArrayList f17827z;

    public j1(ReactContext reactContext) {
        super(reactContext);
        this.f17818q = null;
        this.f17819r = null;
        this.f17820s = null;
        this.f17821t = e1.spacing;
        this.A = Double.NaN;
    }

    public void A(Dynamic dynamic) {
        this.f17823v = SVGLength.a(dynamic);
        invalidate();
    }

    public void B(Dynamic dynamic) {
        this.f17824w = SVGLength.a(dynamic);
        invalidate();
    }

    public void C(Dynamic dynamic) {
        this.f17825x = SVGLength.a(dynamic);
        invalidate();
    }

    public void D(Dynamic dynamic) {
        this.f17819r = SVGLength.b(dynamic);
        invalidate();
    }

    public void E(Dynamic dynamic) {
        String c10 = SVGLength.c(dynamic);
        if (c10 != null) {
            String trim = c10.trim();
            int lastIndexOf = trim.lastIndexOf(32);
            try {
                this.f17822u = y0.d(trim.substring(lastIndexOf));
            } catch (IllegalArgumentException unused) {
                this.f17822u = y0.baseline;
            }
            try {
                this.f17820s = trim.substring(0, lastIndexOf);
            } catch (IndexOutOfBoundsException unused2) {
                this.f17820s = null;
            }
        } else {
            this.f17822u = y0.baseline;
            this.f17820s = null;
        }
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void clearCache() {
        this.A = Double.NaN;
        super.clearCache();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public void draw(Canvas canvas, Paint paint, float f10) {
        n(canvas);
        clip(canvas, paint);
        q(canvas, paint);
        j();
        d(canvas, paint, f10);
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0
    public Path g(Canvas canvas, Paint paint, Region.Op op2) {
        return getPath(canvas, paint);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = this.mPath;
        if (path != null) {
            return path;
        }
        n(canvas);
        return q(canvas, paint);
    }

    @Override // com.horcrux.svg.VirtualView, android.view.View
    public void invalidate() {
        if (this.mPath == null) {
            return;
        }
        super.invalidate();
        t().clearChildCache();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0
    public void j() {
        boolean z10;
        if (!(this instanceof x0) && !(this instanceof w0)) {
            z10 = true;
        } else {
            z10 = false;
        }
        h().p(z10, this, this.f17712d, this.f17823v, this.f17824w, this.f17826y, this.f17827z, this.f17825x);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0 o() {
        y0 y0Var;
        if (this.f17822u == null) {
            for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
                if ((parent instanceof j1) && (y0Var = ((j1) parent).f17822u) != null) {
                    this.f17822u = y0Var;
                    return y0Var;
                }
            }
        }
        if (this.f17822u == null) {
            this.f17822u = y0.baseline;
        }
        return this.f17822u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String p() {
        String str;
        if (this.f17820s == null) {
            for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
                if ((parent instanceof j1) && (str = ((j1) parent).f17820s) != null) {
                    this.f17820s = str;
                    return str;
                }
            }
        }
        return this.f17820s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path q(Canvas canvas, Paint paint) {
        Path path = this.mPath;
        if (path != null) {
            return path;
        }
        j();
        this.mPath = super.getPath(canvas, paint);
        i();
        return this.mPath;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double r(Paint paint) {
        if (!Double.isNaN(this.A)) {
            return this.A;
        }
        double d10 = 0.0d;
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (childAt instanceof j1) {
                d10 += ((j1) childAt).r(paint);
            }
        }
        this.A = d10;
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1 s() {
        ArrayList arrayList = h().f17662a;
        ViewParent parent = getParent();
        j1 j1Var = this;
        for (int size = arrayList.size() - 1; size >= 0 && (parent instanceof j1) && ((y) arrayList.get(size)).f17967j != c1.start && j1Var.f17823v == null; size--) {
            j1Var = (j1) parent;
            parent = j1Var.getParent();
        }
        return j1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1 t() {
        ViewParent parent = getParent();
        j1 j1Var = this;
        while (parent instanceof j1) {
            j1Var = (j1) parent;
            parent = j1Var.getParent();
        }
        return j1Var;
    }

    public void u(Dynamic dynamic) {
        this.f17820s = SVGLength.c(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f17826y = SVGLength.a(dynamic);
        invalidate();
    }

    public void w(Dynamic dynamic) {
        this.f17827z = SVGLength.a(dynamic);
        invalidate();
    }

    public void x(Dynamic dynamic) {
        this.f17818q = SVGLength.b(dynamic);
        invalidate();
    }

    public void y(String str) {
        this.f17821t = e1.valueOf(str);
        invalidate();
    }

    public void z(String str) {
        this.f17822u = y0.d(str);
        invalidate();
    }
}
