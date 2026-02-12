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
    private final MaterialButton f15415a;

    /* renamed from: b  reason: collision with root package name */
    private l f15416b;

    /* renamed from: c  reason: collision with root package name */
    private q f15417c;

    /* renamed from: d  reason: collision with root package name */
    private androidx.dynamicanimation.animation.d f15418d;

    /* renamed from: e  reason: collision with root package name */
    private h.d f15419e;

    /* renamed from: f  reason: collision with root package name */
    private int f15420f;

    /* renamed from: g  reason: collision with root package name */
    private int f15421g;

    /* renamed from: h  reason: collision with root package name */
    private int f15422h;

    /* renamed from: i  reason: collision with root package name */
    private int f15423i;

    /* renamed from: j  reason: collision with root package name */
    private int f15424j;

    /* renamed from: k  reason: collision with root package name */
    private int f15425k;

    /* renamed from: l  reason: collision with root package name */
    private PorterDuff.Mode f15426l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f15427m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f15428n;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15429o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f15430p;

    /* renamed from: t  reason: collision with root package name */
    private boolean f15434t;

    /* renamed from: v  reason: collision with root package name */
    private LayerDrawable f15436v;

    /* renamed from: w  reason: collision with root package name */
    private int f15437w;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15431q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f15432r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f15433s = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f15435u = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(MaterialButton materialButton, l lVar) {
        this.f15415a = materialButton;
        this.f15416b = lVar;
    }

    private void L(int i10, int i11) {
        int paddingStart = this.f15415a.getPaddingStart();
        int paddingTop = this.f15415a.getPaddingTop();
        int paddingEnd = this.f15415a.getPaddingEnd();
        int paddingBottom = this.f15415a.getPaddingBottom();
        int i12 = this.f15422h;
        int i13 = this.f15423i;
        this.f15423i = i11;
        this.f15422h = i10;
        if (!this.f15432r) {
            M();
        }
        this.f15415a.setPaddingRelative(paddingStart, (paddingTop + i10) - i12, paddingEnd, (paddingBottom + i11) - i13);
    }

    private void M() {
        this.f15415a.setInternalBackground(a());
        h g10 = g();
        if (g10 != null) {
            g10.e0(this.f15437w);
            g10.setState(this.f15415a.getDrawableState());
        }
    }

    private void N() {
        h g10 = g();
        if (g10 != null) {
            q qVar = this.f15417c;
            if (qVar != null) {
                g10.m0(qVar);
            } else {
                g10.setShapeAppearanceModel(this.f15416b);
            }
            androidx.dynamicanimation.animation.d dVar = this.f15418d;
            if (dVar != null) {
                g10.d0(dVar);
            }
        }
        h p10 = p();
        if (p10 != null) {
            q qVar2 = this.f15417c;
            if (qVar2 != null) {
                p10.m0(qVar2);
            } else {
                p10.setShapeAppearanceModel(this.f15416b);
            }
            androidx.dynamicanimation.animation.d dVar2 = this.f15418d;
            if (dVar2 != null) {
                p10.d0(dVar2);
            }
        }
        o f10 = f();
        if (f10 != null) {
            f10.setShapeAppearanceModel(this.f15416b);
            if (f10 instanceof h) {
                h hVar = (h) f10;
                q qVar3 = this.f15417c;
                if (qVar3 != null) {
                    hVar.m0(qVar3);
                }
                androidx.dynamicanimation.animation.d dVar3 = this.f15418d;
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
            g10.o0(this.f15425k, this.f15428n);
            if (p10 != null) {
                float f10 = this.f15425k;
                if (this.f15431q) {
                    i10 = jh.a.d(this.f15415a, bh.b.f6751o);
                } else {
                    i10 = 0;
                }
                p10.n0(f10, i10);
            }
        }
    }

    private InsetDrawable P(Drawable drawable) {
        return new InsetDrawable(drawable, this.f15420f, this.f15422h, this.f15421g, this.f15423i);
    }

    private Drawable a() {
        int i10;
        h hVar = new h(this.f15416b);
        q qVar = this.f15417c;
        if (qVar != null) {
            hVar.m0(qVar);
        }
        androidx.dynamicanimation.animation.d dVar = this.f15418d;
        if (dVar != null) {
            hVar.d0(dVar);
        }
        h.d dVar2 = this.f15419e;
        if (dVar2 != null) {
            hVar.h0(dVar2);
        }
        hVar.T(this.f15415a.getContext());
        hVar.setTintList(this.f15427m);
        PorterDuff.Mode mode = this.f15426l;
        if (mode != null) {
            hVar.setTintMode(mode);
        }
        hVar.o0(this.f15425k, this.f15428n);
        h hVar2 = new h(this.f15416b);
        q qVar2 = this.f15417c;
        if (qVar2 != null) {
            hVar2.m0(qVar2);
        }
        androidx.dynamicanimation.animation.d dVar3 = this.f15418d;
        if (dVar3 != null) {
            hVar2.d0(dVar3);
        }
        hVar2.setTint(0);
        float f10 = this.f15425k;
        if (this.f15431q) {
            i10 = jh.a.d(this.f15415a, bh.b.f6751o);
        } else {
            i10 = 0;
        }
        hVar2.n0(f10, i10);
        h hVar3 = new h(this.f15416b);
        this.f15430p = hVar3;
        q qVar3 = this.f15417c;
        if (qVar3 != null) {
            hVar3.m0(qVar3);
        }
        androidx.dynamicanimation.animation.d dVar4 = this.f15418d;
        if (dVar4 != null) {
            ((h) this.f15430p).d0(dVar4);
        }
        this.f15430p.setTint(-1);
        RippleDrawable rippleDrawable = new RippleDrawable(rh.a.d(this.f15429o), P(new LayerDrawable(new Drawable[]{hVar2, hVar})), this.f15430p);
        this.f15436v = rippleDrawable;
        return rippleDrawable;
    }

    private h h(boolean z10) {
        LayerDrawable layerDrawable = this.f15436v;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            return (h) ((LayerDrawable) ((InsetDrawable) this.f15436v.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private h p() {
        return h(true);
    }

    public void A(int i10) {
        L(this.f15422h, i10);
    }

    public void B(int i10) {
        L(i10, this.f15423i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(ColorStateList colorStateList) {
        if (this.f15429o != colorStateList) {
            this.f15429o = colorStateList;
            if (this.f15415a.getBackground() instanceof RippleDrawable) {
                ((RippleDrawable) this.f15415a.getBackground()).setColor(rh.a.d(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(l lVar) {
        this.f15416b = lVar;
        this.f15417c = null;
        N();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(boolean z10) {
        this.f15431q = z10;
        O();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(q qVar) {
        this.f15417c = qVar;
        N();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(ColorStateList colorStateList) {
        if (this.f15428n != colorStateList) {
            this.f15428n = colorStateList;
            O();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H(int i10) {
        if (this.f15425k != i10) {
            this.f15425k = i10;
            O();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        if (this.f15427m != colorStateList) {
            this.f15427m = colorStateList;
            if (g() != null) {
                g().setTintList(this.f15427m);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        if (this.f15426l != mode) {
            this.f15426l = mode;
            if (g() != null && this.f15426l != null) {
                g().setTintMode(this.f15426l);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        this.f15435u = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f15424j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public androidx.dynamicanimation.animation.d c() {
        return this.f15418d;
    }

    public int d() {
        return this.f15423i;
    }

    public int e() {
        return this.f15422h;
    }

    public o f() {
        LayerDrawable layerDrawable = this.f15436v;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f15436v.getNumberOfLayers() > 2) {
                return (o) this.f15436v.getDrawable(2);
            }
            return (o) this.f15436v.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h g() {
        return h(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList i() {
        return this.f15429o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l j() {
        return this.f15416b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q k() {
        return this.f15417c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f15428n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m() {
        return this.f15425k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList n() {
        return this.f15427m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode o() {
        return this.f15426l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f15432r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r() {
        return this.f15434t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean s() {
        return this.f15435u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(TypedArray typedArray) {
        this.f15420f = typedArray.getDimensionPixelOffset(bh.l.L2, 0);
        this.f15421g = typedArray.getDimensionPixelOffset(bh.l.M2, 0);
        this.f15422h = typedArray.getDimensionPixelOffset(bh.l.N2, 0);
        this.f15423i = typedArray.getDimensionPixelOffset(bh.l.O2, 0);
        if (typedArray.hasValue(bh.l.S2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(bh.l.S2, -1);
            this.f15424j = dimensionPixelSize;
            D(this.f15416b.x(dimensionPixelSize));
            this.f15433s = true;
        }
        this.f15425k = typedArray.getDimensionPixelSize(bh.l.f6996e3, 0);
        this.f15426l = p.i(typedArray.getInt(bh.l.R2, -1), PorterDuff.Mode.SRC_IN);
        this.f15427m = qh.c.a(this.f15415a.getContext(), typedArray, bh.l.Q2);
        this.f15428n = qh.c.a(this.f15415a.getContext(), typedArray, bh.l.f6986d3);
        this.f15429o = qh.c.a(this.f15415a.getContext(), typedArray, bh.l.f6966b3);
        this.f15434t = typedArray.getBoolean(bh.l.P2, false);
        this.f15437w = typedArray.getDimensionPixelSize(bh.l.T2, 0);
        this.f15435u = typedArray.getBoolean(bh.l.f7006f3, true);
        int paddingStart = this.f15415a.getPaddingStart();
        int paddingTop = this.f15415a.getPaddingTop();
        int paddingEnd = this.f15415a.getPaddingEnd();
        int paddingBottom = this.f15415a.getPaddingBottom();
        if (typedArray.hasValue(bh.l.J2)) {
            v();
        } else {
            M();
        }
        this.f15415a.setPaddingRelative(paddingStart + this.f15420f, paddingTop + this.f15422h, paddingEnd + this.f15421g, paddingBottom + this.f15423i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int i10) {
        if (g() != null) {
            g().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v() {
        this.f15432r = true;
        this.f15415a.setSupportBackgroundTintList(this.f15427m);
        this.f15415a.setSupportBackgroundTintMode(this.f15426l);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(boolean z10) {
        this.f15434t = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(int i10) {
        if (this.f15433s && this.f15424j == i10) {
            return;
        }
        this.f15424j = i10;
        this.f15433s = true;
        D(this.f15416b.x(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(h.d dVar) {
        this.f15419e = dVar;
        h g10 = g();
        if (g10 != null) {
            g10.h0(dVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(androidx.dynamicanimation.animation.d dVar) {
        this.f15418d = dVar;
        if (this.f15417c != null) {
            N();
        }
    }
}
