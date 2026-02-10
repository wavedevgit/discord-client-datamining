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
    private final View f1572a;

    /* renamed from: d  reason: collision with root package name */
    private t0 f1575d;

    /* renamed from: e  reason: collision with root package name */
    private t0 f1576e;

    /* renamed from: f  reason: collision with root package name */
    private t0 f1577f;

    /* renamed from: c  reason: collision with root package name */
    private int f1574c = -1;

    /* renamed from: b  reason: collision with root package name */
    private final j f1573b = j.b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatBackgroundHelper(View view) {
        this.f1572a = view;
    }

    private boolean a(Drawable drawable) {
        if (this.f1577f == null) {
            this.f1577f = new t0();
        }
        t0 t0Var = this.f1577f;
        t0Var.a();
        ColorStateList r10 = androidx.core.view.h0.r(this.f1572a);
        if (r10 != null) {
            t0Var.f1946d = true;
            t0Var.f1943a = r10;
        }
        PorterDuff.Mode s10 = androidx.core.view.h0.s(this.f1572a);
        if (s10 != null) {
            t0Var.f1945c = true;
            t0Var.f1944b = s10;
        }
        if (!t0Var.f1946d && !t0Var.f1945c) {
            return false;
        }
        j.i(drawable, t0Var, this.f1572a.getDrawableState());
        return true;
    }

    private boolean k() {
        if (this.f1575d != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        Drawable background = this.f1572a.getBackground();
        if (background != null) {
            if (!k() || !a(background)) {
                t0 t0Var = this.f1576e;
                if (t0Var != null) {
                    j.i(background, t0Var, this.f1572a.getDrawableState());
                    return;
                }
                t0 t0Var2 = this.f1575d;
                if (t0Var2 != null) {
                    j.i(background, t0Var2, this.f1572a.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList c() {
        t0 t0Var = this.f1576e;
        if (t0Var != null) {
            return t0Var.f1943a;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode d() {
        t0 t0Var = this.f1576e;
        if (t0Var != null) {
            return t0Var.f1944b;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(AttributeSet attributeSet, int i10) {
        v0 v10 = v0.v(this.f1572a.getContext(), attributeSet, f.j.K3, i10, 0);
        View view = this.f1572a;
        androidx.core.view.h0.l0(view, view.getContext(), f.j.K3, attributeSet, v10.r(), i10, 0);
        try {
            if (v10.s(f.j.L3)) {
                this.f1574c = v10.n(f.j.L3, -1);
                ColorStateList f10 = this.f1573b.f(this.f1572a.getContext(), this.f1574c);
                if (f10 != null) {
                    h(f10);
                }
            }
            if (v10.s(f.j.M3)) {
                androidx.core.view.h0.s0(this.f1572a, v10.c(f.j.M3));
            }
            if (v10.s(f.j.N3)) {
                androidx.core.view.h0.t0(this.f1572a, e0.e(v10.k(f.j.N3, -1), null));
            }
            v10.x();
        } catch (Throwable th2) {
            v10.x();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Drawable drawable) {
        this.f1574c = -1;
        h(null);
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(int i10) {
        ColorStateList colorStateList;
        this.f1574c = i10;
        j jVar = this.f1573b;
        if (jVar != null) {
            colorStateList = jVar.f(this.f1572a.getContext(), i10);
        } else {
            colorStateList = null;
        }
        h(colorStateList);
        b();
    }

    void h(ColorStateList colorStateList) {
        if (colorStateList != null) {
            if (this.f1575d == null) {
                this.f1575d = new t0();
            }
            t0 t0Var = this.f1575d;
            t0Var.f1943a = colorStateList;
            t0Var.f1946d = true;
        } else {
            this.f1575d = null;
        }
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(ColorStateList colorStateList) {
        if (this.f1576e == null) {
            this.f1576e = new t0();
        }
        t0 t0Var = this.f1576e;
        t0Var.f1943a = colorStateList;
        t0Var.f1946d = true;
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(PorterDuff.Mode mode) {
        if (this.f1576e == null) {
            this.f1576e = new t0();
        }
        t0 t0Var = this.f1576e;
        t0Var.f1944b = mode;
        t0Var.f1945c = true;
        b();
    }
}
