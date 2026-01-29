package com.facebook.drawee.generic;

import android.content.res.Resources;
import android.graphics.ColorFilter;
import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.drawable.c;
import com.facebook.drawee.drawable.e;
import com.facebook.drawee.drawable.f;
import com.facebook.drawee.drawable.n;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GenericDraweeHierarchy implements n9.a {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f11138a;

    /* renamed from: b  reason: collision with root package name */
    private final Resources f11139b;

    /* renamed from: c  reason: collision with root package name */
    private a f11140c;

    /* renamed from: d  reason: collision with root package name */
    private final l9.b f11141d;

    /* renamed from: e  reason: collision with root package name */
    private final e f11142e;

    /* renamed from: f  reason: collision with root package name */
    private final f f11143f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public GenericDraweeHierarchy(GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder) {
        int i10;
        int i11;
        ColorDrawable colorDrawable = new ColorDrawable(0);
        this.f11138a = colorDrawable;
        if (ya.b.d()) {
            ya.b.a("GenericDraweeHierarchy()");
        }
        this.f11139b = genericDraweeHierarchyBuilder.p();
        this.f11140c = genericDraweeHierarchyBuilder.s();
        f fVar = new f(colorDrawable);
        this.f11143f = fVar;
        int i12 = 1;
        if (genericDraweeHierarchyBuilder.j() != null) {
            i10 = genericDraweeHierarchyBuilder.j().size();
        } else {
            i10 = 1;
        }
        i10 = i10 == 0 ? 1 : i10;
        if (genericDraweeHierarchyBuilder.m() != null) {
            i11 = 1;
        } else {
            i11 = 0;
        }
        int i13 = i10 + i11;
        Drawable[] drawableArr = new Drawable[i13 + 6];
        drawableArr[0] = h(genericDraweeHierarchyBuilder.e(), null);
        drawableArr[1] = h(genericDraweeHierarchyBuilder.k(), genericDraweeHierarchyBuilder.l());
        drawableArr[2] = g(fVar, genericDraweeHierarchyBuilder.d(), genericDraweeHierarchyBuilder.c(), genericDraweeHierarchyBuilder.b());
        drawableArr[3] = h(genericDraweeHierarchyBuilder.n(), genericDraweeHierarchyBuilder.o());
        drawableArr[4] = h(genericDraweeHierarchyBuilder.q(), genericDraweeHierarchyBuilder.r());
        drawableArr[5] = h(genericDraweeHierarchyBuilder.h(), genericDraweeHierarchyBuilder.i());
        if (i13 > 0) {
            if (genericDraweeHierarchyBuilder.j() != null) {
                i12 = 0;
                for (Drawable drawable : genericDraweeHierarchyBuilder.j()) {
                    drawableArr[i12 + 6] = h(drawable, null);
                    i12++;
                }
            }
            if (genericDraweeHierarchyBuilder.m() != null) {
                drawableArr[i12 + 6] = h(genericDraweeHierarchyBuilder.m(), null);
            }
        }
        e eVar = new e(drawableArr, false, 2);
        this.f11142e = eVar;
        eVar.r(genericDraweeHierarchyBuilder.g());
        l9.b bVar = new l9.b(b.e(eVar, this.f11140c));
        this.f11141d = bVar;
        bVar.mutate();
        s();
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    private void B(float f10) {
        Drawable b10 = this.f11142e.b(3);
        if (b10 == null) {
            return;
        }
        if (f10 >= 0.999f) {
            if (b10 instanceof Animatable) {
                ((Animatable) b10).stop();
            }
            k(3);
        } else {
            if (b10 instanceof Animatable) {
                ((Animatable) b10).start();
            }
            i(3);
        }
        b10.setLevel(Math.round(f10 * 10000.0f));
    }

    private Drawable g(Drawable drawable, ScalingUtils$ScaleType scalingUtils$ScaleType, PointF pointF, ColorFilter colorFilter) {
        drawable.setColorFilter(colorFilter);
        return b.g(drawable, scalingUtils$ScaleType, pointF);
    }

    private Drawable h(Drawable drawable, ScalingUtils$ScaleType scalingUtils$ScaleType) {
        return b.f(b.d(drawable, this.f11140c, this.f11139b), scalingUtils$ScaleType);
    }

    private void i(int i10) {
        if (i10 >= 0) {
            this.f11142e.j(i10);
        }
    }

    private void j() {
        k(1);
        k(2);
        k(3);
        k(4);
        k(5);
    }

    private void k(int i10) {
        if (i10 >= 0) {
            this.f11142e.k(i10);
        }
    }

    private c n(int i10) {
        c c10 = this.f11142e.c(i10);
        c10.getDrawable();
        if (c10.getDrawable() instanceof n) {
            return (n) c10.getDrawable();
        }
        return c10;
    }

    private n p(int i10) {
        c n10 = n(i10);
        if (n10 instanceof n) {
            return (n) n10;
        }
        return b.k(n10, ScalingUtils$ScaleType.f11033a);
    }

    private boolean q(int i10) {
        return n(i10) instanceof n;
    }

    private void r() {
        this.f11143f.setDrawable(this.f11138a);
    }

    private void s() {
        e eVar = this.f11142e;
        if (eVar != null) {
            eVar.f();
            this.f11142e.i();
            j();
            i(1);
            this.f11142e.l();
            this.f11142e.h();
        }
    }

    private void v(int i10, Drawable drawable) {
        if (drawable == null) {
            this.f11142e.e(i10, null);
            return;
        }
        n(i10).setDrawable(b.d(drawable, this.f11140c, this.f11139b));
    }

    public void A(Drawable drawable, ScalingUtils$ScaleType scalingUtils$ScaleType) {
        v(1, drawable);
        p(1).n(scalingUtils$ScaleType);
    }

    public void C(Drawable drawable) {
        v(3, drawable);
    }

    public void D(a aVar) {
        this.f11140c = aVar;
        b.j(this.f11141d, aVar);
        for (int i10 = 0; i10 < this.f11142e.d(); i10++) {
            b.i(n(i10), this.f11140c, this.f11139b);
        }
    }

    @Override // n9.a
    public void a(Throwable th2) {
        this.f11142e.f();
        j();
        if (this.f11142e.b(4) != null) {
            i(4);
        } else {
            i(1);
        }
        this.f11142e.h();
    }

    @Override // n9.a
    public void b(Throwable th2) {
        this.f11142e.f();
        j();
        if (this.f11142e.b(5) != null) {
            i(5);
        } else {
            i(1);
        }
        this.f11142e.h();
    }

    @Override // n9.a
    public void c(float f10, boolean z10) {
        if (this.f11142e.b(3) == null) {
            return;
        }
        this.f11142e.f();
        B(f10);
        if (z10) {
            this.f11142e.l();
        }
        this.f11142e.h();
    }

    @Override // com.facebook.drawee.interfaces.DraweeHierarchy
    public Drawable d() {
        return this.f11141d;
    }

    @Override // n9.a
    public void e(Drawable drawable, float f10, boolean z10) {
        Drawable d10 = b.d(drawable, this.f11140c, this.f11139b);
        d10.mutate();
        this.f11143f.setDrawable(d10);
        this.f11142e.f();
        j();
        i(2);
        B(f10);
        if (z10) {
            this.f11142e.l();
        }
        this.f11142e.h();
    }

    @Override // n9.a
    public void f(Drawable drawable) {
        this.f11141d.i(drawable);
    }

    @Override // com.facebook.drawee.interfaces.DraweeHierarchy
    public Rect getBounds() {
        return this.f11141d.getBounds();
    }

    public PointF l() {
        if (!q(2)) {
            return null;
        }
        return p(2).k();
    }

    public ScalingUtils$ScaleType m() {
        if (!q(2)) {
            return null;
        }
        return p(2).l();
    }

    public a o() {
        return this.f11140c;
    }

    @Override // n9.a
    public void reset() {
        r();
        s();
    }

    public void t(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        j.g(scalingUtils$ScaleType);
        p(2).n(scalingUtils$ScaleType);
    }

    public void u(Drawable drawable) {
        v(0, drawable);
    }

    public void w(int i10) {
        this.f11142e.r(i10);
    }

    public void x(int i10, Drawable drawable) {
        boolean z10;
        if (i10 >= 0 && i10 + 6 < this.f11142e.d()) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.c(z10, "The given index does not correspond to an overlay image.");
        v(i10 + 6, drawable);
    }

    public void y(Drawable drawable) {
        x(0, drawable);
    }

    public void z(Drawable drawable) {
        v(1, drawable);
    }
}
