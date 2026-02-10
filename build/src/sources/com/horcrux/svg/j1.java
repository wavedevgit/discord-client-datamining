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
    SVGLength f17069q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f17070r;

    /* renamed from: s  reason: collision with root package name */
    private String f17071s;

    /* renamed from: t  reason: collision with root package name */
    e1 f17072t;

    /* renamed from: u  reason: collision with root package name */
    private y0 f17073u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f17074v;

    /* renamed from: w  reason: collision with root package name */
    private ArrayList f17075w;

    /* renamed from: x  reason: collision with root package name */
    private ArrayList f17076x;

    /* renamed from: y  reason: collision with root package name */
    private ArrayList f17077y;

    /* renamed from: z  reason: collision with root package name */
    private ArrayList f17078z;

    public j1(ReactContext reactContext) {
        super(reactContext);
        this.f17069q = null;
        this.f17070r = null;
        this.f17071s = null;
        this.f17072t = e1.spacing;
        this.A = Double.NaN;
    }

    public void A(Dynamic dynamic) {
        this.f17075w = SVGLength.a(dynamic);
        invalidate();
    }

    public void B(Dynamic dynamic) {
        this.f17076x = SVGLength.a(dynamic);
        invalidate();
    }

    public void C(Dynamic dynamic) {
        this.f17070r = SVGLength.b(dynamic);
        invalidate();
    }

    public void D(Dynamic dynamic) {
        String c10 = SVGLength.c(dynamic);
        if (c10 != null) {
            String trim = c10.trim();
            int lastIndexOf = trim.lastIndexOf(32);
            try {
                this.f17073u = y0.d(trim.substring(lastIndexOf));
            } catch (IllegalArgumentException unused) {
                this.f17073u = y0.baseline;
            }
            try {
                this.f17071s = trim.substring(0, lastIndexOf);
            } catch (IndexOutOfBoundsException unused2) {
                this.f17071s = null;
            }
        } else {
            this.f17073u = y0.baseline;
            this.f17071s = null;
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
        m(canvas);
        clip(canvas, paint);
        p(canvas, paint);
        i();
        c(canvas, paint, f10);
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0
    public Path f(Canvas canvas, Paint paint, Region.Op op2) {
        return getPath(canvas, paint);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = this.mPath;
        if (path != null) {
            return path;
        }
        m(canvas);
        return p(canvas, paint);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0
    public void i() {
        boolean z10;
        if (!(this instanceof x0) && !(this instanceof w0)) {
            z10 = true;
        } else {
            z10 = false;
        }
        g().p(z10, this, this.f16963d, this.f17074v, this.f17075w, this.f17077y, this.f17078z, this.f17076x);
    }

    @Override // com.horcrux.svg.VirtualView, android.view.View
    public void invalidate() {
        if (this.mPath == null) {
            return;
        }
        super.invalidate();
        s().clearChildCache();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0 n() {
        y0 y0Var;
        if (this.f17073u == null) {
            for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
                if ((parent instanceof j1) && (y0Var = ((j1) parent).f17073u) != null) {
                    this.f17073u = y0Var;
                    return y0Var;
                }
            }
        }
        if (this.f17073u == null) {
            this.f17073u = y0.baseline;
        }
        return this.f17073u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String o() {
        String str;
        if (this.f17071s == null) {
            for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
                if ((parent instanceof j1) && (str = ((j1) parent).f17071s) != null) {
                    this.f17071s = str;
                    return str;
                }
            }
        }
        return this.f17071s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path p(Canvas canvas, Paint paint) {
        Path path = this.mPath;
        if (path != null) {
            return path;
        }
        i();
        this.mPath = super.getPath(canvas, paint);
        h();
        return this.mPath;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public double q(Paint paint) {
        if (!Double.isNaN(this.A)) {
            return this.A;
        }
        double d10 = 0.0d;
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (childAt instanceof j1) {
                d10 += ((j1) childAt).q(paint);
            }
        }
        this.A = d10;
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1 r() {
        ArrayList arrayList = g().f16913a;
        ViewParent parent = getParent();
        j1 j1Var = this;
        for (int size = arrayList.size() - 1; size >= 0 && (parent instanceof j1) && ((y) arrayList.get(size)).f17218j != c1.start && j1Var.f17074v == null; size--) {
            j1Var = (j1) parent;
            parent = j1Var.getParent();
        }
        return j1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1 s() {
        ViewParent parent = getParent();
        j1 j1Var = this;
        while (parent instanceof j1) {
            j1Var = (j1) parent;
            parent = j1Var.getParent();
        }
        return j1Var;
    }

    public void t(Dynamic dynamic) {
        this.f17071s = SVGLength.c(dynamic);
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f17077y = SVGLength.a(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f17078z = SVGLength.a(dynamic);
        invalidate();
    }

    public void w(Dynamic dynamic) {
        this.f17069q = SVGLength.b(dynamic);
        invalidate();
    }

    public void x(String str) {
        this.f17072t = e1.valueOf(str);
        invalidate();
    }

    public void y(String str) {
        this.f17073u = y0.d(str);
        invalidate();
    }

    public void z(Dynamic dynamic) {
        this.f17074v = SVGLength.a(dynamic);
        invalidate();
    }
}
