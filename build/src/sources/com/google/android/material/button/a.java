package com.google.android.material.button;

import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import androidx.core.view.h0;
import com.google.android.material.internal.o;
import lh.c;
import oh.g;
import oh.k;
import oh.n;
import yg.b;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: u  reason: collision with root package name */
    private static final boolean f15327u = true;

    /* renamed from: v  reason: collision with root package name */
    private static final boolean f15328v = false;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialButton f15329a;

    /* renamed from: b  reason: collision with root package name */
    private k f15330b;

    /* renamed from: c  reason: collision with root package name */
    private int f15331c;

    /* renamed from: d  reason: collision with root package name */
    private int f15332d;

    /* renamed from: e  reason: collision with root package name */
    private int f15333e;

    /* renamed from: f  reason: collision with root package name */
    private int f15334f;

    /* renamed from: g  reason: collision with root package name */
    private int f15335g;

    /* renamed from: h  reason: collision with root package name */
    private int f15336h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f15337i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f15338j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f15339k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f15340l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f15341m;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15345q;

    /* renamed from: s  reason: collision with root package name */
    private LayerDrawable f15347s;

    /* renamed from: t  reason: collision with root package name */
    private int f15348t;

    /* renamed from: n  reason: collision with root package name */
    private boolean f15342n = false;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15343o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f15344p = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f15346r = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(MaterialButton materialButton, k kVar) {
        this.f15329a = materialButton;
        this.f15330b = kVar;
    }

    private void G(int i10, int i11) {
        int E = h0.E(this.f15329a);
        int paddingTop = this.f15329a.getPaddingTop();
        int D = h0.D(this.f15329a);
        int paddingBottom = this.f15329a.getPaddingBottom();
        int i12 = this.f15333e;
        int i13 = this.f15334f;
        this.f15334f = i11;
        this.f15333e = i10;
        if (!this.f15343o) {
            H();
        }
        h0.F0(this.f15329a, E, (paddingTop + i10) - i12, D, (paddingBottom + i11) - i13);
    }

    private void H() {
        this.f15329a.setInternalBackground(a());
        g f10 = f();
        if (f10 != null) {
            f10.W(this.f15348t);
            f10.setState(this.f15329a.getDrawableState());
        }
    }

    private void I(k kVar) {
        if (f15328v && !this.f15343o) {
            int E = h0.E(this.f15329a);
            int paddingTop = this.f15329a.getPaddingTop();
            int D = h0.D(this.f15329a);
            int paddingBottom = this.f15329a.getPaddingBottom();
            H();
            h0.F0(this.f15329a, E, paddingTop, D, paddingBottom);
            return;
        }
        if (f() != null) {
            f().setShapeAppearanceModel(kVar);
        }
        if (n() != null) {
            n().setShapeAppearanceModel(kVar);
        }
        if (e() != null) {
            e().setShapeAppearanceModel(kVar);
        }
    }

    private void J() {
        int i10;
        g f10 = f();
        g n10 = n();
        if (f10 != null) {
            f10.e0(this.f15336h, this.f15339k);
            if (n10 != null) {
                float f11 = this.f15336h;
                if (this.f15342n) {
                    i10 = eh.a.d(this.f15329a, b.f54345o);
                } else {
                    i10 = 0;
                }
                n10.d0(f11, i10);
            }
        }
    }

    private InsetDrawable K(Drawable drawable) {
        return new InsetDrawable(drawable, this.f15331c, this.f15333e, this.f15332d, this.f15334f);
    }

    private Drawable a() {
        int i10;
        g gVar = new g(this.f15330b);
        gVar.N(this.f15329a.getContext());
        s1.a.o(gVar, this.f15338j);
        PorterDuff.Mode mode = this.f15337i;
        if (mode != null) {
            s1.a.p(gVar, mode);
        }
        gVar.e0(this.f15336h, this.f15339k);
        g gVar2 = new g(this.f15330b);
        gVar2.setTint(0);
        float f10 = this.f15336h;
        if (this.f15342n) {
            i10 = eh.a.d(this.f15329a, b.f54345o);
        } else {
            i10 = 0;
        }
        gVar2.d0(f10, i10);
        if (f15327u) {
            g gVar3 = new g(this.f15330b);
            this.f15341m = gVar3;
            s1.a.n(gVar3, -1);
            RippleDrawable rippleDrawable = new RippleDrawable(mh.b.a(this.f15340l), K(new LayerDrawable(new Drawable[]{gVar2, gVar})), this.f15341m);
            this.f15347s = rippleDrawable;
            return rippleDrawable;
        }
        mh.a aVar = new mh.a(this.f15330b);
        this.f15341m = aVar;
        s1.a.o(aVar, mh.b.a(this.f15340l));
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gVar2, gVar, this.f15341m});
        this.f15347s = layerDrawable;
        return K(layerDrawable);
    }

    private g g(boolean z10) {
        LayerDrawable layerDrawable = this.f15347s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            if (f15327u) {
                return (g) ((LayerDrawable) ((InsetDrawable) this.f15347s.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
            }
            return (g) this.f15347s.getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private g n() {
        return g(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(boolean z10) {
        this.f15342n = z10;
        J();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(ColorStateList colorStateList) {
        if (this.f15339k != colorStateList) {
            this.f15339k = colorStateList;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(int i10) {
        if (this.f15336h != i10) {
            this.f15336h = i10;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(ColorStateList colorStateList) {
        if (this.f15338j != colorStateList) {
            this.f15338j = colorStateList;
            if (f() != null) {
                s1.a.o(f(), this.f15338j);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(PorterDuff.Mode mode) {
        if (this.f15337i != mode) {
            this.f15337i = mode;
            if (f() != null && this.f15337i != null) {
                s1.a.p(f(), this.f15337i);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(boolean z10) {
        this.f15346r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f15335g;
    }

    public int c() {
        return this.f15334f;
    }

    public int d() {
        return this.f15333e;
    }

    public n e() {
        LayerDrawable layerDrawable = this.f15347s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f15347s.getNumberOfLayers() > 2) {
                return (n) this.f15347s.getDrawable(2);
            }
            return (n) this.f15347s.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f() {
        return g(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList h() {
        return this.f15340l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k i() {
        return this.f15330b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        return this.f15339k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f15336h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f15338j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode m() {
        return this.f15337i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f15343o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        return this.f15345q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f15346r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(TypedArray typedArray) {
        this.f15331c = typedArray.getDimensionPixelOffset(yg.k.Q2, 0);
        this.f15332d = typedArray.getDimensionPixelOffset(yg.k.R2, 0);
        this.f15333e = typedArray.getDimensionPixelOffset(yg.k.S2, 0);
        this.f15334f = typedArray.getDimensionPixelOffset(yg.k.T2, 0);
        if (typedArray.hasValue(yg.k.X2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(yg.k.X2, -1);
            this.f15335g = dimensionPixelSize;
            z(this.f15330b.w(dimensionPixelSize));
            this.f15344p = true;
        }
        this.f15336h = typedArray.getDimensionPixelSize(yg.k.f54589h3, 0);
        this.f15337i = o.i(typedArray.getInt(yg.k.W2, -1), PorterDuff.Mode.SRC_IN);
        this.f15338j = c.a(this.f15329a.getContext(), typedArray, yg.k.V2);
        this.f15339k = c.a(this.f15329a.getContext(), typedArray, yg.k.f54579g3);
        this.f15340l = c.a(this.f15329a.getContext(), typedArray, yg.k.f54569f3);
        this.f15345q = typedArray.getBoolean(yg.k.U2, false);
        this.f15348t = typedArray.getDimensionPixelSize(yg.k.Y2, 0);
        this.f15346r = typedArray.getBoolean(yg.k.f54599i3, true);
        int E = h0.E(this.f15329a);
        int paddingTop = this.f15329a.getPaddingTop();
        int D = h0.D(this.f15329a);
        int paddingBottom = this.f15329a.getPaddingBottom();
        if (typedArray.hasValue(yg.k.P2)) {
            t();
        } else {
            H();
        }
        h0.F0(this.f15329a, E + this.f15331c, paddingTop + this.f15333e, D + this.f15332d, paddingBottom + this.f15334f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        if (f() != null) {
            f().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t() {
        this.f15343o = true;
        this.f15329a.setSupportBackgroundTintList(this.f15338j);
        this.f15329a.setSupportBackgroundTintMode(this.f15337i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(boolean z10) {
        this.f15345q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        if (this.f15344p && this.f15335g == i10) {
            return;
        }
        this.f15335g = i10;
        this.f15344p = true;
        z(this.f15330b.w(i10));
    }

    public void w(int i10) {
        G(this.f15333e, i10);
    }

    public void x(int i10) {
        G(i10, this.f15334f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(ColorStateList colorStateList) {
        if (this.f15340l != colorStateList) {
            this.f15340l = colorStateList;
            boolean z10 = f15327u;
            if (z10 && (this.f15329a.getBackground() instanceof RippleDrawable)) {
                ((RippleDrawable) this.f15329a.getBackground()).setColor(mh.b.a(colorStateList));
            } else if (!z10 && (this.f15329a.getBackground() instanceof mh.a)) {
                ((mh.a) this.f15329a.getBackground()).setTintList(mh.b.a(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(k kVar) {
        this.f15330b = kVar;
        I(kVar);
    }
}
