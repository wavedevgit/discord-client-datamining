package com.google.android.material.button;

import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import com.google.android.material.internal.p;
import th.h;
import th.l;
import th.o;
import th.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final MaterialButton f15414a;

    /* renamed from: b  reason: collision with root package name */
    private l f15415b;

    /* renamed from: c  reason: collision with root package name */
    private q f15416c;

    /* renamed from: d  reason: collision with root package name */
    private androidx.dynamicanimation.animation.d f15417d;

    /* renamed from: e  reason: collision with root package name */
    private h.d f15418e;

    /* renamed from: f  reason: collision with root package name */
    private int f15419f;

    /* renamed from: g  reason: collision with root package name */
    private int f15420g;

    /* renamed from: h  reason: collision with root package name */
    private int f15421h;

    /* renamed from: i  reason: collision with root package name */
    private int f15422i;

    /* renamed from: j  reason: collision with root package name */
    private int f15423j;

    /* renamed from: k  reason: collision with root package name */
    private int f15424k;

    /* renamed from: l  reason: collision with root package name */
    private PorterDuff.Mode f15425l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f15426m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f15427n;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15428o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15429p;

    /* renamed from: t  reason: collision with root package name */
    private boolean f15433t;

    /* renamed from: v  reason: collision with root package name */
    private LayerDrawable f15435v;

    /* renamed from: w  reason: collision with root package name */
    private int f15436w;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15430q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f15431r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15432s = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f15434u = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(MaterialButton materialButton, l lVar) {
        this.f15414a = materialButton;
        this.f15415b = lVar;
    }

    private void L(int i10, int i11) {
        int paddingStart = this.f15414a.getPaddingStart();
        int paddingTop = this.f15414a.getPaddingTop();
        int paddingEnd = this.f15414a.getPaddingEnd();
        int paddingBottom = this.f15414a.getPaddingBottom();
        int i12 = this.f15421h;
        int i13 = this.f15422i;
        this.f15422i = i11;
        this.f15421h = i10;
        if (!this.f15431r) {
            M();
        }
        this.f15414a.setPaddingRelative(paddingStart, (paddingTop + i10) - i12, paddingEnd, (paddingBottom + i11) - i13);
    }

    private void M() {
        this.f15414a.setInternalBackground(a());
        h g10 = g();
        if (g10 != null) {
            g10.e0(this.f15436w);
            g10.setState(this.f15414a.getDrawableState());
        }
    }

    private void N() {
        h g10 = g();
        if (g10 != null) {
            q qVar = this.f15416c;
            if (qVar != null) {
                g10.m0(qVar);
            } else {
                g10.setShapeAppearanceModel(this.f15415b);
            }
            androidx.dynamicanimation.animation.d dVar = this.f15417d;
            if (dVar != null) {
                g10.d0(dVar);
            }
        }
        h p10 = p();
        if (p10 != null) {
            q qVar2 = this.f15416c;
            if (qVar2 != null) {
                p10.m0(qVar2);
            } else {
                p10.setShapeAppearanceModel(this.f15415b);
            }
            androidx.dynamicanimation.animation.d dVar2 = this.f15417d;
            if (dVar2 != null) {
                p10.d0(dVar2);
            }
        }
        o f10 = f();
        if (f10 != null) {
            f10.setShapeAppearanceModel(this.f15415b);
            if (f10 instanceof h) {
                h hVar = (h) f10;
                q qVar3 = this.f15416c;
                if (qVar3 != null) {
                    hVar.m0(qVar3);
                }
                androidx.dynamicanimation.animation.d dVar3 = this.f15417d;
                if (dVar3 != null) {
                    hVar.d0(dVar3);
                }
            }
        }
    }

    private void O() {
        int i10;
        h g10 = g();
        h p10 = p();
        if (g10 != null) {
            g10.o0(this.f15424k, this.f15427n);
            if (p10 != null) {
                float f10 = this.f15424k;
                if (this.f15430q) {
                    i10 = jh.a.d(this.f15414a, bh.b.f6751o);
                } else {
                    i10 = 0;
                }
                p10.n0(f10, i10);
            }
        }
    }

    private InsetDrawable P(Drawable drawable) {
        return new InsetDrawable(drawable, this.f15419f, this.f15421h, this.f15420g, this.f15422i);
    }

    private Drawable a() {
        int i10;
        h hVar = new h(this.f15415b);
        q qVar = this.f15416c;
        if (qVar != null) {
            hVar.m0(qVar);
        }
        androidx.dynamicanimation.animation.d dVar = this.f15417d;
        if (dVar != null) {
            hVar.d0(dVar);
        }
        h.d dVar2 = this.f15418e;
        if (dVar2 != null) {
            hVar.h0(dVar2);
        }
        hVar.T(this.f15414a.getContext());
        hVar.setTintList(this.f15426m);
        PorterDuff.Mode mode = this.f15425l;
        if (mode != null) {
            hVar.setTintMode(mode);
        }
        hVar.o0(this.f15424k, this.f15427n);
        h hVar2 = new h(this.f15415b);
        q qVar2 = this.f15416c;
        if (qVar2 != null) {
            hVar2.m0(qVar2);
        }
        androidx.dynamicanimation.animation.d dVar3 = this.f15417d;
        if (dVar3 != null) {
            hVar2.d0(dVar3);
        }
        hVar2.setTint(0);
        float f10 = this.f15424k;
        if (this.f15430q) {
            i10 = jh.a.d(this.f15414a, bh.b.f6751o);
        } else {
            i10 = 0;
        }
        hVar2.n0(f10, i10);
        h hVar3 = new h(this.f15415b);
        this.f15429p = hVar3;
        q qVar3 = this.f15416c;
        if (qVar3 != null) {
            hVar3.m0(qVar3);
        }
        androidx.dynamicanimation.animation.d dVar4 = this.f15417d;
        if (dVar4 != null) {
            ((h) this.f15429p).d0(dVar4);
        }
        this.f15429p.setTint(-1);
        RippleDrawable rippleDrawable = new RippleDrawable(rh.a.d(this.f15428o), P(new LayerDrawable(new Drawable[]{hVar2, hVar})), this.f15429p);
        this.f15435v = rippleDrawable;
        return rippleDrawable;
    }

    private h h(boolean z10) {
        LayerDrawable layerDrawable = this.f15435v;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            return (h) ((LayerDrawable) ((InsetDrawable) this.f15435v.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private h p() {
        return h(true);
    }

    public void A(int i10) {
        L(this.f15421h, i10);
    }

    public void B(int i10) {
        L(i10, this.f15422i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(ColorStateList colorStateList) {
        if (this.f15428o != colorStateList) {
            this.f15428o = colorStateList;
            if (this.f15414a.getBackground() instanceof RippleDrawable) {
                ((RippleDrawable) this.f15414a.getBackground()).setColor(rh.a.d(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(l lVar) {
        this.f15415b = lVar;
        this.f15416c = null;
        N();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(boolean z10) {
        this.f15430q = z10;
        O();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(q qVar) {
        this.f15416c = qVar;
        N();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(ColorStateList colorStateList) {
        if (this.f15427n != colorStateList) {
            this.f15427n = colorStateList;
            O();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        if (this.f15424k != i10) {
            this.f15424k = i10;
            O();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        if (this.f15426m != colorStateList) {
            this.f15426m = colorStateList;
            if (g() != null) {
                g().setTintList(this.f15426m);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        if (this.f15425l != mode) {
            this.f15425l = mode;
            if (g() != null && this.f15425l != null) {
                g().setTintMode(this.f15425l);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        this.f15434u = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f15423j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public androidx.dynamicanimation.animation.d c() {
        return this.f15417d;
    }

    public int d() {
        return this.f15422i;
    }

    public int e() {
        return this.f15421h;
    }

    public o f() {
        LayerDrawable layerDrawable = this.f15435v;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f15435v.getNumberOfLayers() > 2) {
                return (o) this.f15435v.getDrawable(2);
            }
            return (o) this.f15435v.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h g() {
        return h(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList i() {
        return this.f15428o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l j() {
        return this.f15415b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q k() {
        return this.f15416c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f15427n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m() {
        return this.f15424k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList n() {
        return this.f15426m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode o() {
        return this.f15425l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f15431r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r() {
        return this.f15433t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean s() {
        return this.f15434u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(TypedArray typedArray) {
        this.f15419f = typedArray.getDimensionPixelOffset(bh.l.L2, 0);
        this.f15420g = typedArray.getDimensionPixelOffset(bh.l.M2, 0);
        this.f15421h = typedArray.getDimensionPixelOffset(bh.l.N2, 0);
        this.f15422i = typedArray.getDimensionPixelOffset(bh.l.O2, 0);
        if (typedArray.hasValue(bh.l.S2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(bh.l.S2, -1);
            this.f15423j = dimensionPixelSize;
            D(this.f15415b.x(dimensionPixelSize));
            this.f15432s = true;
        }
        this.f15424k = typedArray.getDimensionPixelSize(bh.l.f6996e3, 0);
        this.f15425l = p.i(typedArray.getInt(bh.l.R2, -1), PorterDuff.Mode.SRC_IN);
        this.f15426m = qh.c.a(this.f15414a.getContext(), typedArray, bh.l.Q2);
        this.f15427n = qh.c.a(this.f15414a.getContext(), typedArray, bh.l.f6986d3);
        this.f15428o = qh.c.a(this.f15414a.getContext(), typedArray, bh.l.f6966b3);
        this.f15433t = typedArray.getBoolean(bh.l.P2, false);
        this.f15436w = typedArray.getDimensionPixelSize(bh.l.T2, 0);
        this.f15434u = typedArray.getBoolean(bh.l.f7006f3, true);
        int paddingStart = this.f15414a.getPaddingStart();
        int paddingTop = this.f15414a.getPaddingTop();
        int paddingEnd = this.f15414a.getPaddingEnd();
        int paddingBottom = this.f15414a.getPaddingBottom();
        if (typedArray.hasValue(bh.l.J2)) {
            v();
        } else {
            M();
        }
        this.f15414a.setPaddingRelative(paddingStart + this.f15419f, paddingTop + this.f15421h, paddingEnd + this.f15420g, paddingBottom + this.f15422i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int i10) {
        if (g() != null) {
            g().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v() {
        this.f15431r = true;
        this.f15414a.setSupportBackgroundTintList(this.f15426m);
        this.f15414a.setSupportBackgroundTintMode(this.f15425l);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(boolean z10) {
        this.f15433t = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(int i10) {
        if (this.f15432s && this.f15423j == i10) {
            return;
        }
        this.f15423j = i10;
        this.f15432s = true;
        D(this.f15415b.x(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(h.d dVar) {
        this.f15418e = dVar;
        h g10 = g();
        if (g10 != null) {
            g10.h0(dVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(androidx.dynamicanimation.animation.d dVar) {
        this.f15417d = dVar;
        if (this.f15416c != null) {
            N();
        }
    }
}
