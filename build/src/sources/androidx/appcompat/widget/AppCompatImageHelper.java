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
    private final ImageView f1432a;

    /* renamed from: b  reason: collision with root package name */
    private t0 f1433b;

    /* renamed from: c  reason: collision with root package name */
    private t0 f1434c;

    /* renamed from: d  reason: collision with root package name */
    private t0 f1435d;

    /* renamed from: e  reason: collision with root package name */
    private int f1436e = 0;

    public AppCompatImageHelper(ImageView imageView) {
        this.f1432a = imageView;
    }

    private boolean a(Drawable drawable) {
        if (this.f1435d == null) {
            this.f1435d = new t0();
        }
        t0 t0Var = this.f1435d;
        t0Var.a();
        ColorStateList a10 = androidx.core.widget.f.a(this.f1432a);
        if (a10 != null) {
            t0Var.f1795d = true;
            t0Var.f1792a = a10;
        }
        PorterDuff.Mode b10 = androidx.core.widget.f.b(this.f1432a);
        if (b10 != null) {
            t0Var.f1794c = true;
            t0Var.f1793b = b10;
        }
        if (!t0Var.f1795d && !t0Var.f1794c) {
            return false;
        }
        j.i(drawable, t0Var, this.f1432a.getDrawableState());
        return true;
    }

    private boolean l() {
        if (this.f1433b != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        if (this.f1432a.getDrawable() != null) {
            this.f1432a.getDrawable().setLevel(this.f1436e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        Drawable drawable = this.f1432a.getDrawable();
        if (drawable != null) {
            e0.b(drawable);
        }
        if (drawable != null) {
            if (!l() || !a(drawable)) {
                t0 t0Var = this.f1434c;
                if (t0Var != null) {
                    j.i(drawable, t0Var, this.f1432a.getDrawableState());
                    return;
                }
                t0 t0Var2 = this.f1433b;
                if (t0Var2 != null) {
                    j.i(drawable, t0Var2, this.f1432a.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList d() {
        t0 t0Var = this.f1434c;
        if (t0Var != null) {
            return t0Var.f1792a;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode e() {
        t0 t0Var = this.f1434c;
        if (t0Var != null) {
            return t0Var.f1793b;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f() {
        if (this.f1432a.getBackground() instanceof RippleDrawable) {
            return false;
        }
        return true;
    }

    public void g(AttributeSet attributeSet, int i10) {
        int n10;
        v0 v10 = v0.v(this.f1432a.getContext(), attributeSet, f.j.P, i10, 0);
        ImageView imageView = this.f1432a;
        androidx.core.view.h0.l0(imageView, imageView.getContext(), f.j.P, attributeSet, v10.r(), i10, 0);
        try {
            Drawable drawable = this.f1432a.getDrawable();
            if (drawable == null && (n10 = v10.n(f.j.Q, -1)) != -1 && (drawable = g.a.b(this.f1432a.getContext(), n10)) != null) {
                this.f1432a.setImageDrawable(drawable);
            }
            if (drawable != null) {
                e0.b(drawable);
            }
            if (v10.s(f.j.R)) {
                androidx.core.widget.f.c(this.f1432a, v10.c(f.j.R));
            }
            if (v10.s(f.j.S)) {
                androidx.core.widget.f.d(this.f1432a, e0.e(v10.k(f.j.S, -1), null));
            }
            v10.x();
        } catch (Throwable th2) {
            v10.x();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Drawable drawable) {
        this.f1436e = drawable.getLevel();
    }

    public void i(int i10) {
        if (i10 != 0) {
            Drawable b10 = g.a.b(this.f1432a.getContext(), i10);
            if (b10 != null) {
                e0.b(b10);
            }
            this.f1432a.setImageDrawable(b10);
        } else {
            this.f1432a.setImageDrawable(null);
        }
        c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(ColorStateList colorStateList) {
        if (this.f1434c == null) {
            this.f1434c = new t0();
        }
        t0 t0Var = this.f1434c;
        t0Var.f1792a = colorStateList;
        t0Var.f1795d = true;
        c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(PorterDuff.Mode mode) {
        if (this.f1434c == null) {
            this.f1434c = new t0();
        }
        t0 t0Var = this.f1434c;
        t0Var.f1793b = mode;
        t0Var.f1794c = true;
        c();
    }
}
