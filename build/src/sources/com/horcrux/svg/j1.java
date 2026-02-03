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
    SVGLength f16555q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f16556r;

    /* renamed from: s  reason: collision with root package name */
    private String f16557s;

    /* renamed from: t  reason: collision with root package name */
    e1 f16558t;

    /* renamed from: u  reason: collision with root package name */
    private y0 f16559u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f16560v;

    /* renamed from: w  reason: collision with root package name */
    private ArrayList f16561w;

    /* renamed from: x  reason: collision with root package name */
    private ArrayList f16562x;

    /* renamed from: y  reason: collision with root package name */
    private ArrayList f16563y;

    /* renamed from: z  reason: collision with root package name */
    private ArrayList f16564z;

    public j1(ReactContext reactContext) {
        super(reactContext);
        this.f16555q = null;
        this.f16556r = null;
        this.f16557s = null;
        this.f16558t = e1.spacing;
        this.A = Double.NaN;
    }

    public void A(Dynamic dynamic) {
        this.f16561w = SVGLength.a(dynamic);
        invalidate();
    }

    public void B(Dynamic dynamic) {
        this.f16562x = SVGLength.a(dynamic);
        invalidate();
    }

    public void C(Dynamic dynamic) {
        this.f16556r = SVGLength.b(dynamic);
        invalidate();
    }

    public void D(Dynamic dynamic) {
        String c10 = SVGLength.c(dynamic);
        if (c10 != null) {
            String trim = c10.trim();
            int lastIndexOf = trim.lastIndexOf(32);
            try {
                this.f16559u = y0.d(trim.substring(lastIndexOf));
            } catch (IllegalArgumentException unused) {
                this.f16559u = y0.baseline;
            }
            try {
                this.f16557s = trim.substring(0, lastIndexOf);
            } catch (IndexOutOfBoundsException unused2) {
                this.f16557s = null;
            }
        } else {
            this.f16559u = y0.baseline;
            this.f16557s = null;
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
        g().p(z10, this, this.f16449d, this.f16560v, this.f16561w, this.f16563y, this.f16564z, this.f16562x);
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
        if (this.f16559u == null) {
            for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
                if ((parent instanceof j1) && (y0Var = ((j1) parent).f16559u) != null) {
                    this.f16559u = y0Var;
                    return y0Var;
                }
            }
        }
        if (this.f16559u == null) {
            this.f16559u = y0.baseline;
        }
        return this.f16559u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String o() {
        String str;
        if (this.f16557s == null) {
            for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
                if ((parent instanceof j1) && (str = ((j1) parent).f16557s) != null) {
                    this.f16557s = str;
                    return str;
                }
            }
        }
        return this.f16557s;
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
        ArrayList arrayList = g().f16399a;
        ViewParent parent = getParent();
        j1 j1Var = this;
        for (int size = arrayList.size() - 1; size >= 0 && (parent instanceof j1) && ((y) arrayList.get(size)).f16704j != c1.start && j1Var.f16560v == null; size--) {
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
        this.f16557s = SVGLength.c(dynamic);
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f16563y = SVGLength.a(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f16564z = SVGLength.a(dynamic);
        invalidate();
    }

    public void w(Dynamic dynamic) {
        this.f16555q = SVGLength.b(dynamic);
        invalidate();
    }

    public void x(String str) {
        this.f16558t = e1.valueOf(str);
        invalidate();
    }

    public void y(String str) {
        this.f16559u = y0.d(str);
        invalidate();
    }

    public void z(Dynamic dynamic) {
        this.f16560v = SVGLength.a(dynamic);
        invalidate();
    }
}
