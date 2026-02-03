package androidx.appcompat.widget;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.RippleDrawable;
import android.util.AttributeSet;
import android.widget.ImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AppCompatImageHelper {

    /* renamed from: a  reason: collision with root package name */
    private final ImageView f1445a;

    /* renamed from: b  reason: collision with root package name */
    private t0 f1446b;

    /* renamed from: c  reason: collision with root package name */
    private t0 f1447c;

    /* renamed from: d  reason: collision with root package name */
    private t0 f1448d;

    /* renamed from: e  reason: collision with root package name */
    private int f1449e = 0;

    public AppCompatImageHelper(ImageView imageView) {
        this.f1445a = imageView;
    }

    private boolean a(Drawable drawable) {
        if (this.f1448d == null) {
            this.f1448d = new t0();
        }
        t0 t0Var = this.f1448d;
        t0Var.a();
        ColorStateList a10 = androidx.core.widget.f.a(this.f1445a);
        if (a10 != null) {
            t0Var.f1808d = true;
            t0Var.f1805a = a10;
        }
        PorterDuff.Mode b10 = androidx.core.widget.f.b(this.f1445a);
        if (b10 != null) {
            t0Var.f1807c = true;
            t0Var.f1806b = b10;
        }
        if (!t0Var.f1808d && !t0Var.f1807c) {
            return false;
        }
        j.i(drawable, t0Var, this.f1445a.getDrawableState());
        return true;
    }

    private boolean l() {
        if (this.f1446b != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        if (this.f1445a.getDrawable() != null) {
            this.f1445a.getDrawable().setLevel(this.f1449e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        Drawable drawable = this.f1445a.getDrawable();
        if (drawable != null) {
            e0.b(drawable);
        }
        if (drawable != null) {
            if (!l() || !a(drawable)) {
                t0 t0Var = this.f1447c;
                if (t0Var != null) {
                    j.i(drawable, t0Var, this.f1445a.getDrawableState());
                    return;
                }
                t0 t0Var2 = this.f1446b;
                if (t0Var2 != null) {
                    j.i(drawable, t0Var2, this.f1445a.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList d() {
        t0 t0Var = this.f1447c;
        if (t0Var != null) {
            return t0Var.f1805a;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode e() {
        t0 t0Var = this.f1447c;
        if (t0Var != null) {
            return t0Var.f1806b;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f() {
        if (this.f1445a.getBackground() instanceof RippleDrawable) {
            return false;
        }
        return true;
    }

    public void g(AttributeSet attributeSet, int i10) {
        int n10;
        v0 v10 = v0.v(this.f1445a.getContext(), attributeSet, f.j.P, i10, 0);
        ImageView imageView = this.f1445a;
        androidx.core.view.h0.l0(imageView, imageView.getContext(), f.j.P, attributeSet, v10.r(), i10, 0);
        try {
            Drawable drawable = this.f1445a.getDrawable();
            if (drawable == null && (n10 = v10.n(f.j.Q, -1)) != -1 && (drawable = g.a.b(this.f1445a.getContext(), n10)) != null) {
                this.f1445a.setImageDrawable(drawable);
            }
            if (drawable != null) {
                e0.b(drawable);
            }
            if (v10.s(f.j.R)) {
                androidx.core.widget.f.c(this.f1445a, v10.c(f.j.R));
            }
            if (v10.s(f.j.S)) {
                androidx.core.widget.f.d(this.f1445a, e0.e(v10.k(f.j.S, -1), null));
            }
            v10.x();
        } catch (Throwable th2) {
            v10.x();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Drawable drawable) {
        this.f1449e = drawable.getLevel();
    }

    public void i(int i10) {
        if (i10 != 0) {
            Drawable b10 = g.a.b(this.f1445a.getContext(), i10);
            if (b10 != null) {
                e0.b(b10);
            }
            this.f1445a.setImageDrawable(b10);
        } else {
            this.f1445a.setImageDrawable(null);
        }
        c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(ColorStateList colorStateList) {
        if (this.f1447c == null) {
            this.f1447c = new t0();
        }
        t0 t0Var = this.f1447c;
        t0Var.f1805a = colorStateList;
        t0Var.f1808d = true;
        c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(PorterDuff.Mode mode) {
        if (this.f1447c == null) {
            this.f1447c = new t0();
        }
        t0 t0Var = this.f1447c;
        t0Var.f1806b = mode;
        t0Var.f1807c = true;
        c();
    }
}
