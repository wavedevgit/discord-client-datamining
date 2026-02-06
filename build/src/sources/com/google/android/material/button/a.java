package com.google.android.material.button;

import ah.b;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import androidx.core.view.h0;
import com.google.android.material.internal.o;
import nh.c;
import qh.g;
import qh.k;
import qh.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: u  reason: collision with root package name */
    private static final boolean f14669u = true;

    /* renamed from: v  reason: collision with root package name */
    private static final boolean f14670v = false;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialButton f14671a;

    /* renamed from: b  reason: collision with root package name */
    private k f14672b;

    /* renamed from: c  reason: collision with root package name */
    private int f14673c;

    /* renamed from: d  reason: collision with root package name */
    private int f14674d;

    /* renamed from: e  reason: collision with root package name */
    private int f14675e;

    /* renamed from: f  reason: collision with root package name */
    private int f14676f;

    /* renamed from: g  reason: collision with root package name */
    private int f14677g;

    /* renamed from: h  reason: collision with root package name */
    private int f14678h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f14679i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f14680j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f14681k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f14682l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f14683m;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14687q;

    /* renamed from: s  reason: collision with root package name */
    private LayerDrawable f14689s;

    /* renamed from: t  reason: collision with root package name */
    private int f14690t;

    /* renamed from: n  reason: collision with root package name */
    private boolean f14684n = false;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14685o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f14686p = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14688r = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(MaterialButton materialButton, k kVar) {
        this.f14671a = materialButton;
        this.f14672b = kVar;
    }

    private void G(int i10, int i11) {
        int E = h0.E(this.f14671a);
        int paddingTop = this.f14671a.getPaddingTop();
        int D = h0.D(this.f14671a);
        int paddingBottom = this.f14671a.getPaddingBottom();
        int i12 = this.f14675e;
        int i13 = this.f14676f;
        this.f14676f = i11;
        this.f14675e = i10;
        if (!this.f14685o) {
            H();
        }
        h0.F0(this.f14671a, E, (paddingTop + i10) - i12, D, (paddingBottom + i11) - i13);
    }

    private void H() {
        this.f14671a.setInternalBackground(a());
        g f10 = f();
        if (f10 != null) {
            f10.W(this.f14690t);
            f10.setState(this.f14671a.getDrawableState());
        }
    }

    private void I(k kVar) {
        if (f14670v && !this.f14685o) {
            int E = h0.E(this.f14671a);
            int paddingTop = this.f14671a.getPaddingTop();
            int D = h0.D(this.f14671a);
            int paddingBottom = this.f14671a.getPaddingBottom();
            H();
            h0.F0(this.f14671a, E, paddingTop, D, paddingBottom);
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
            f10.e0(this.f14678h, this.f14681k);
            if (n10 != null) {
                float f11 = this.f14678h;
                if (this.f14684n) {
                    i10 = gh.a.d(this.f14671a, b.f653o);
                } else {
                    i10 = 0;
                }
                n10.d0(f11, i10);
            }
        }
    }

    private InsetDrawable K(Drawable drawable) {
        return new InsetDrawable(drawable, this.f14673c, this.f14675e, this.f14674d, this.f14676f);
    }

    private Drawable a() {
        int i10;
        g gVar = new g(this.f14672b);
        gVar.N(this.f14671a.getContext());
        s1.a.o(gVar, this.f14680j);
        PorterDuff.Mode mode = this.f14679i;
        if (mode != null) {
            s1.a.p(gVar, mode);
        }
        gVar.e0(this.f14678h, this.f14681k);
        g gVar2 = new g(this.f14672b);
        gVar2.setTint(0);
        float f10 = this.f14678h;
        if (this.f14684n) {
            i10 = gh.a.d(this.f14671a, b.f653o);
        } else {
            i10 = 0;
        }
        gVar2.d0(f10, i10);
        if (f14669u) {
            g gVar3 = new g(this.f14672b);
            this.f14683m = gVar3;
            s1.a.n(gVar3, -1);
            RippleDrawable rippleDrawable = new RippleDrawable(oh.b.a(this.f14682l), K(new LayerDrawable(new Drawable[]{gVar2, gVar})), this.f14683m);
            this.f14689s = rippleDrawable;
            return rippleDrawable;
        }
        oh.a aVar = new oh.a(this.f14672b);
        this.f14683m = aVar;
        s1.a.o(aVar, oh.b.a(this.f14682l));
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gVar2, gVar, this.f14683m});
        this.f14689s = layerDrawable;
        return K(layerDrawable);
    }

    private g g(boolean z10) {
        LayerDrawable layerDrawable = this.f14689s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            if (f14669u) {
                return (g) ((LayerDrawable) ((InsetDrawable) this.f14689s.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
            }
            return (g) this.f14689s.getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private g n() {
        return g(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(boolean z10) {
        this.f14684n = z10;
        J();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(ColorStateList colorStateList) {
        if (this.f14681k != colorStateList) {
            this.f14681k = colorStateList;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(int i10) {
        if (this.f14678h != i10) {
            this.f14678h = i10;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(ColorStateList colorStateList) {
        if (this.f14680j != colorStateList) {
            this.f14680j = colorStateList;
            if (f() != null) {
                s1.a.o(f(), this.f14680j);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(PorterDuff.Mode mode) {
        if (this.f14679i != mode) {
            this.f14679i = mode;
            if (f() != null && this.f14679i != null) {
                s1.a.p(f(), this.f14679i);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(boolean z10) {
        this.f14688r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f14677g;
    }

    public int c() {
        return this.f14676f;
    }

    public int d() {
        return this.f14675e;
    }

    public n e() {
        LayerDrawable layerDrawable = this.f14689s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f14689s.getNumberOfLayers() > 2) {
                return (n) this.f14689s.getDrawable(2);
            }
            return (n) this.f14689s.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f() {
        return g(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList h() {
        return this.f14682l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k i() {
        return this.f14672b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        return this.f14681k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f14678h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f14680j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode m() {
        return this.f14679i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f14685o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        return this.f14687q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f14688r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(TypedArray typedArray) {
        this.f14673c = typedArray.getDimensionPixelOffset(ah.k.Q2, 0);
        this.f14674d = typedArray.getDimensionPixelOffset(ah.k.R2, 0);
        this.f14675e = typedArray.getDimensionPixelOffset(ah.k.S2, 0);
        this.f14676f = typedArray.getDimensionPixelOffset(ah.k.T2, 0);
        if (typedArray.hasValue(ah.k.X2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(ah.k.X2, -1);
            this.f14677g = dimensionPixelSize;
            z(this.f14672b.w(dimensionPixelSize));
            this.f14686p = true;
        }
        this.f14678h = typedArray.getDimensionPixelSize(ah.k.f897h3, 0);
        this.f14679i = o.i(typedArray.getInt(ah.k.W2, -1), PorterDuff.Mode.SRC_IN);
        this.f14680j = c.a(this.f14671a.getContext(), typedArray, ah.k.V2);
        this.f14681k = c.a(this.f14671a.getContext(), typedArray, ah.k.f887g3);
        this.f14682l = c.a(this.f14671a.getContext(), typedArray, ah.k.f877f3);
        this.f14687q = typedArray.getBoolean(ah.k.U2, false);
        this.f14690t = typedArray.getDimensionPixelSize(ah.k.Y2, 0);
        this.f14688r = typedArray.getBoolean(ah.k.f907i3, true);
        int E = h0.E(this.f14671a);
        int paddingTop = this.f14671a.getPaddingTop();
        int D = h0.D(this.f14671a);
        int paddingBottom = this.f14671a.getPaddingBottom();
        if (typedArray.hasValue(ah.k.P2)) {
            t();
        } else {
            H();
        }
        h0.F0(this.f14671a, E + this.f14673c, paddingTop + this.f14675e, D + this.f14674d, paddingBottom + this.f14676f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        if (f() != null) {
            f().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t() {
        this.f14685o = true;
        this.f14671a.setSupportBackgroundTintList(this.f14680j);
        this.f14671a.setSupportBackgroundTintMode(this.f14679i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(boolean z10) {
        this.f14687q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        if (this.f14686p && this.f14677g == i10) {
            return;
        }
        this.f14677g = i10;
        this.f14686p = true;
        z(this.f14672b.w(i10));
    }

    public void w(int i10) {
        G(this.f14675e, i10);
    }

    public void x(int i10) {
        G(i10, this.f14676f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(ColorStateList colorStateList) {
        if (this.f14682l != colorStateList) {
            this.f14682l = colorStateList;
            boolean z10 = f14669u;
            if (z10 && (this.f14671a.getBackground() instanceof RippleDrawable)) {
                ((RippleDrawable) this.f14671a.getBackground()).setColor(oh.b.a(colorStateList));
            } else if (!z10 && (this.f14671a.getBackground() instanceof oh.a)) {
                ((oh.a) this.f14671a.getBackground()).setTintList(oh.b.a(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(k kVar) {
        this.f14672b = kVar;
        I(kVar);
    }
}
