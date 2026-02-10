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
    private final View f1574a;

    /* renamed from: d  reason: collision with root package name */
    private t0 f1577d;

    /* renamed from: e  reason: collision with root package name */
    private t0 f1578e;

    /* renamed from: f  reason: collision with root package name */
    private t0 f1579f;

    /* renamed from: c  reason: collision with root package name */
    private int f1576c = -1;

    /* renamed from: b  reason: collision with root package name */
    private final j f1575b = j.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatBackgroundHelper(View view) {
        this.f1574a = view;
    }

    private boolean a(Drawable drawable) {
        if (this.f1579f == null) {
            this.f1579f = new t0();
        }
        t0 t0Var = this.f1579f;
        t0Var.a();
        ColorStateList q10 = androidx.core.view.i0.q(this.f1574a);
        if (q10 != null) {
            t0Var.f1949d = true;
            t0Var.f1946a = q10;
        }
        PorterDuff.Mode r10 = androidx.core.view.i0.r(this.f1574a);
        if (r10 != null) {
            t0Var.f1948c = true;
            t0Var.f1947b = r10;
        }
        if (!t0Var.f1949d && !t0Var.f1948c) {
            return false;
        }
        j.i(drawable, t0Var, this.f1574a.getDrawableState());
        return true;
    }

    private boolean k() {
        if (this.f1577d != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        Drawable background = this.f1574a.getBackground();
        if (background != null) {
            if (!k() || !a(background)) {
                t0 t0Var = this.f1578e;
                if (t0Var != null) {
                    j.i(background, t0Var, this.f1574a.getDrawableState());
                    return;
                }
                t0 t0Var2 = this.f1577d;
                if (t0Var2 != null) {
                    j.i(background, t0Var2, this.f1574a.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList c() {
        t0 t0Var = this.f1578e;
        if (t0Var != null) {
            return t0Var.f1946a;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode d() {
        t0 t0Var = this.f1578e;
        if (t0Var != null) {
            return t0Var.f1947b;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(AttributeSet attributeSet, int i10) {
        v0 v10 = v0.v(this.f1574a.getContext(), attributeSet, f.j.Q3, i10, 0);
        View view = this.f1574a;
        androidx.core.view.i0.i0(view, view.getContext(), f.j.Q3, attributeSet, v10.r(), i10, 0);
        try {
            if (v10.s(f.j.R3)) {
                this.f1576c = v10.n(f.j.R3, -1);
                ColorStateList f10 = this.f1575b.f(this.f1574a.getContext(), this.f1576c);
                if (f10 != null) {
                    h(f10);
                }
            }
            if (v10.s(f.j.S3)) {
                androidx.core.view.i0.p0(this.f1574a, v10.c(f.j.S3));
            }
            if (v10.s(f.j.T3)) {
                androidx.core.view.i0.q0(this.f1574a, e0.e(v10.k(f.j.T3, -1), null));
            }
            v10.x();
        } catch (Throwable th2) {
            v10.x();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Drawable drawable) {
        this.f1576c = -1;
        h(null);
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(int i10) {
        ColorStateList colorStateList;
        this.f1576c = i10;
        j jVar = this.f1575b;
        if (jVar != null) {
            colorStateList = jVar.f(this.f1574a.getContext(), i10);
        } else {
            colorStateList = null;
        }
        h(colorStateList);
        b();
    }

    void h(ColorStateList colorStateList) {
        if (colorStateList != null) {
            if (this.f1577d == null) {
                this.f1577d = new t0();
            }
            t0 t0Var = this.f1577d;
            t0Var.f1946a = colorStateList;
            t0Var.f1949d = true;
        } else {
            this.f1577d = null;
        }
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(ColorStateList colorStateList) {
        if (this.f1578e == null) {
            this.f1578e = new t0();
        }
        t0 t0Var = this.f1578e;
        t0Var.f1946a = colorStateList;
        t0Var.f1949d = true;
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(PorterDuff.Mode mode) {
        if (this.f1578e == null) {
            this.f1578e = new t0();
        }
        t0 t0Var = this.f1578e;
        t0Var.f1947b = mode;
        t0Var.f1948c = true;
        b();
    }
}
