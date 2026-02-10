package com.google.android.material.button;

import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import androidx.core.view.h0;
import bh.b;
import com.google.android.material.internal.o;
import oh.c;
import rh.g;
import rh.k;
import rh.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: u  reason: collision with root package name */
    private static final boolean f14809u = true;

    /* renamed from: v  reason: collision with root package name */
    private static final boolean f14810v = false;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialButton f14811a;

    /* renamed from: b  reason: collision with root package name */
    private k f14812b;

    /* renamed from: c  reason: collision with root package name */
    private int f14813c;

    /* renamed from: d  reason: collision with root package name */
    private int f14814d;

    /* renamed from: e  reason: collision with root package name */
    private int f14815e;

    /* renamed from: f  reason: collision with root package name */
    private int f14816f;

    /* renamed from: g  reason: collision with root package name */
    private int f14817g;

    /* renamed from: h  reason: collision with root package name */
    private int f14818h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f14819i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f14820j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f14821k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f14822l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f14823m;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14827q;

    /* renamed from: s  reason: collision with root package name */
    private LayerDrawable f14829s;

    /* renamed from: t  reason: collision with root package name */
    private int f14830t;

    /* renamed from: n  reason: collision with root package name */
    private boolean f14824n = false;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14825o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f14826p = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14828r = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(MaterialButton materialButton, k kVar) {
        this.f14811a = materialButton;
        this.f14812b = kVar;
    }

    private void G(int i10, int i11) {
        int E = h0.E(this.f14811a);
        int paddingTop = this.f14811a.getPaddingTop();
        int D = h0.D(this.f14811a);
        int paddingBottom = this.f14811a.getPaddingBottom();
        int i12 = this.f14815e;
        int i13 = this.f14816f;
        this.f14816f = i11;
        this.f14815e = i10;
        if (!this.f14825o) {
            H();
        }
        h0.F0(this.f14811a, E, (paddingTop + i10) - i12, D, (paddingBottom + i11) - i13);
    }

    private void H() {
        this.f14811a.setInternalBackground(a());
        g f10 = f();
        if (f10 != null) {
            f10.W(this.f14830t);
            f10.setState(this.f14811a.getDrawableState());
        }
    }

    private void I(k kVar) {
        if (f14810v && !this.f14825o) {
            int E = h0.E(this.f14811a);
            int paddingTop = this.f14811a.getPaddingTop();
            int D = h0.D(this.f14811a);
            int paddingBottom = this.f14811a.getPaddingBottom();
            H();
            h0.F0(this.f14811a, E, paddingTop, D, paddingBottom);
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
            f10.e0(this.f14818h, this.f14821k);
            if (n10 != null) {
                float f11 = this.f14818h;
                if (this.f14824n) {
                    i10 = hh.a.d(this.f14811a, b.f6641o);
                } else {
                    i10 = 0;
                }
                n10.d0(f11, i10);
            }
        }
    }

    private InsetDrawable K(Drawable drawable) {
        return new InsetDrawable(drawable, this.f14813c, this.f14815e, this.f14814d, this.f14816f);
    }

    private Drawable a() {
        int i10;
        g gVar = new g(this.f14812b);
        gVar.N(this.f14811a.getContext());
        s1.a.o(gVar, this.f14820j);
        PorterDuff.Mode mode = this.f14819i;
        if (mode != null) {
            s1.a.p(gVar, mode);
        }
        gVar.e0(this.f14818h, this.f14821k);
        g gVar2 = new g(this.f14812b);
        gVar2.setTint(0);
        float f10 = this.f14818h;
        if (this.f14824n) {
            i10 = hh.a.d(this.f14811a, b.f6641o);
        } else {
            i10 = 0;
        }
        gVar2.d0(f10, i10);
        if (f14809u) {
            g gVar3 = new g(this.f14812b);
            this.f14823m = gVar3;
            s1.a.n(gVar3, -1);
            RippleDrawable rippleDrawable = new RippleDrawable(ph.b.a(this.f14822l), K(new LayerDrawable(new Drawable[]{gVar2, gVar})), this.f14823m);
            this.f14829s = rippleDrawable;
            return rippleDrawable;
        }
        ph.a aVar = new ph.a(this.f14812b);
        this.f14823m = aVar;
        s1.a.o(aVar, ph.b.a(this.f14822l));
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gVar2, gVar, this.f14823m});
        this.f14829s = layerDrawable;
        return K(layerDrawable);
    }

    private g g(boolean z10) {
        LayerDrawable layerDrawable = this.f14829s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            if (f14809u) {
                return (g) ((LayerDrawable) ((InsetDrawable) this.f14829s.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
            }
            return (g) this.f14829s.getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private g n() {
        return g(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(boolean z10) {
        this.f14824n = z10;
        J();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(ColorStateList colorStateList) {
        if (this.f14821k != colorStateList) {
            this.f14821k = colorStateList;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(int i10) {
        if (this.f14818h != i10) {
            this.f14818h = i10;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(ColorStateList colorStateList) {
        if (this.f14820j != colorStateList) {
            this.f14820j = colorStateList;
            if (f() != null) {
                s1.a.o(f(), this.f14820j);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(PorterDuff.Mode mode) {
        if (this.f14819i != mode) {
            this.f14819i = mode;
            if (f() != null && this.f14819i != null) {
                s1.a.p(f(), this.f14819i);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(boolean z10) {
        this.f14828r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f14817g;
    }

    public int c() {
        return this.f14816f;
    }

    public int d() {
        return this.f14815e;
    }

    public n e() {
        LayerDrawable layerDrawable = this.f14829s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f14829s.getNumberOfLayers() > 2) {
                return (n) this.f14829s.getDrawable(2);
            }
            return (n) this.f14829s.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f() {
        return g(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList h() {
        return this.f14822l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k i() {
        return this.f14812b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        return this.f14821k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f14818h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f14820j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode m() {
        return this.f14819i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f14825o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        return this.f14827q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f14828r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(TypedArray typedArray) {
        this.f14813c = typedArray.getDimensionPixelOffset(bh.k.Q2, 0);
        this.f14814d = typedArray.getDimensionPixelOffset(bh.k.R2, 0);
        this.f14815e = typedArray.getDimensionPixelOffset(bh.k.S2, 0);
        this.f14816f = typedArray.getDimensionPixelOffset(bh.k.T2, 0);
        if (typedArray.hasValue(bh.k.X2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(bh.k.X2, -1);
            this.f14817g = dimensionPixelSize;
            z(this.f14812b.w(dimensionPixelSize));
            this.f14826p = true;
        }
        this.f14818h = typedArray.getDimensionPixelSize(bh.k.f6885h3, 0);
        this.f14819i = o.i(typedArray.getInt(bh.k.W2, -1), PorterDuff.Mode.SRC_IN);
        this.f14820j = c.a(this.f14811a.getContext(), typedArray, bh.k.V2);
        this.f14821k = c.a(this.f14811a.getContext(), typedArray, bh.k.f6875g3);
        this.f14822l = c.a(this.f14811a.getContext(), typedArray, bh.k.f6865f3);
        this.f14827q = typedArray.getBoolean(bh.k.U2, false);
        this.f14830t = typedArray.getDimensionPixelSize(bh.k.Y2, 0);
        this.f14828r = typedArray.getBoolean(bh.k.f6895i3, true);
        int E = h0.E(this.f14811a);
        int paddingTop = this.f14811a.getPaddingTop();
        int D = h0.D(this.f14811a);
        int paddingBottom = this.f14811a.getPaddingBottom();
        if (typedArray.hasValue(bh.k.P2)) {
            t();
        } else {
            H();
        }
        h0.F0(this.f14811a, E + this.f14813c, paddingTop + this.f14815e, D + this.f14814d, paddingBottom + this.f14816f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        if (f() != null) {
            f().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t() {
        this.f14825o = true;
        this.f14811a.setSupportBackgroundTintList(this.f14820j);
        this.f14811a.setSupportBackgroundTintMode(this.f14819i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(boolean z10) {
        this.f14827q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        if (this.f14826p && this.f14817g == i10) {
            return;
        }
        this.f14817g = i10;
        this.f14826p = true;
        z(this.f14812b.w(i10));
    }

    public void w(int i10) {
        G(this.f14815e, i10);
    }

    public void x(int i10) {
        G(i10, this.f14816f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(ColorStateList colorStateList) {
        if (this.f14822l != colorStateList) {
            this.f14822l = colorStateList;
            boolean z10 = f14809u;
            if (z10 && (this.f14811a.getBackground() instanceof RippleDrawable)) {
                ((RippleDrawable) this.f14811a.getBackground()).setColor(ph.b.a(colorStateList));
            } else if (!z10 && (this.f14811a.getBackground() instanceof ph.a)) {
                ((ph.a) this.f14811a.getBackground()).setTintList(ph.b.a(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(k kVar) {
        this.f14812b = kVar;
        I(kVar);
    }
}
