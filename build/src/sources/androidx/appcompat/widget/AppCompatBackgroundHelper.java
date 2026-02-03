package androidx.appcompat.widget;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AppCompatBackgroundHelper {

    /* renamed from: a  reason: collision with root package name */
    private final View f1434a;

    /* renamed from: d  reason: collision with root package name */
    private t0 f1437d;

    /* renamed from: e  reason: collision with root package name */
    private t0 f1438e;

    /* renamed from: f  reason: collision with root package name */
    private t0 f1439f;

    /* renamed from: c  reason: collision with root package name */
    private int f1436c = -1;

    /* renamed from: b  reason: collision with root package name */
    private final j f1435b = j.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatBackgroundHelper(View view) {
        this.f1434a = view;
    }

    private boolean a(Drawable drawable) {
        if (this.f1439f == null) {
            this.f1439f = new t0();
        }
        t0 t0Var = this.f1439f;
        t0Var.a();
        ColorStateList r10 = androidx.core.view.h0.r(this.f1434a);
        if (r10 != null) {
            t0Var.f1808d = true;
            t0Var.f1805a = r10;
        }
        PorterDuff.Mode s10 = androidx.core.view.h0.s(this.f1434a);
        if (s10 != null) {
            t0Var.f1807c = true;
            t0Var.f1806b = s10;
        }
        if (!t0Var.f1808d && !t0Var.f1807c) {
            return false;
        }
        j.i(drawable, t0Var, this.f1434a.getDrawableState());
        return true;
    }

    private boolean k() {
        if (this.f1437d != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        Drawable background = this.f1434a.getBackground();
        if (background != null) {
            if (!k() || !a(background)) {
                t0 t0Var = this.f1438e;
                if (t0Var != null) {
                    j.i(background, t0Var, this.f1434a.getDrawableState());
                    return;
                }
                t0 t0Var2 = this.f1437d;
                if (t0Var2 != null) {
                    j.i(background, t0Var2, this.f1434a.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList c() {
        t0 t0Var = this.f1438e;
        if (t0Var != null) {
            return t0Var.f1805a;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode d() {
        t0 t0Var = this.f1438e;
        if (t0Var != null) {
            return t0Var.f1806b;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(AttributeSet attributeSet, int i10) {
        v0 v10 = v0.v(this.f1434a.getContext(), attributeSet, f.j.K3, i10, 0);
        View view = this.f1434a;
        androidx.core.view.h0.l0(view, view.getContext(), f.j.K3, attributeSet, v10.r(), i10, 0);
        try {
            if (v10.s(f.j.L3)) {
                this.f1436c = v10.n(f.j.L3, -1);
                ColorStateList f10 = this.f1435b.f(this.f1434a.getContext(), this.f1436c);
                if (f10 != null) {
                    h(f10);
                }
            }
            if (v10.s(f.j.M3)) {
                androidx.core.view.h0.s0(this.f1434a, v10.c(f.j.M3));
            }
            if (v10.s(f.j.N3)) {
                androidx.core.view.h0.t0(this.f1434a, e0.e(v10.k(f.j.N3, -1), null));
            }
            v10.x();
        } catch (Throwable th2) {
            v10.x();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Drawable drawable) {
        this.f1436c = -1;
        h(null);
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(int i10) {
        ColorStateList colorStateList;
        this.f1436c = i10;
        j jVar = this.f1435b;
        if (jVar != null) {
            colorStateList = jVar.f(this.f1434a.getContext(), i10);
        } else {
            colorStateList = null;
        }
        h(colorStateList);
        b();
    }

    void h(ColorStateList colorStateList) {
        if (colorStateList != null) {
            if (this.f1437d == null) {
                this.f1437d = new t0();
            }
            t0 t0Var = this.f1437d;
            t0Var.f1805a = colorStateList;
            t0Var.f1808d = true;
        } else {
            this.f1437d = null;
        }
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(ColorStateList colorStateList) {
        if (this.f1438e == null) {
            this.f1438e = new t0();
        }
        t0 t0Var = this.f1438e;
        t0Var.f1805a = colorStateList;
        t0Var.f1808d = true;
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(PorterDuff.Mode mode) {
        if (this.f1438e == null) {
            this.f1438e = new t0();
        }
        t0 t0Var = this.f1438e;
        t0Var.f1806b = mode;
        t0Var.f1807c = true;
        b();
    }
}
