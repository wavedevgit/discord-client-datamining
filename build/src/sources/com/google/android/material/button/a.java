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
    private static final boolean f14295u = true;

    /* renamed from: v  reason: collision with root package name */
    private static final boolean f14296v = false;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialButton f14297a;

    /* renamed from: b  reason: collision with root package name */
    private k f14298b;

    /* renamed from: c  reason: collision with root package name */
    private int f14299c;

    /* renamed from: d  reason: collision with root package name */
    private int f14300d;

    /* renamed from: e  reason: collision with root package name */
    private int f14301e;

    /* renamed from: f  reason: collision with root package name */
    private int f14302f;

    /* renamed from: g  reason: collision with root package name */
    private int f14303g;

    /* renamed from: h  reason: collision with root package name */
    private int f14304h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f14305i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f14306j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f14307k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f14308l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f14309m;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14313q;

    /* renamed from: s  reason: collision with root package name */
    private LayerDrawable f14315s;

    /* renamed from: t  reason: collision with root package name */
    private int f14316t;

    /* renamed from: n  reason: collision with root package name */
    private boolean f14310n = false;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14311o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f14312p = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14314r = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(MaterialButton materialButton, k kVar) {
        this.f14297a = materialButton;
        this.f14298b = kVar;
    }

    private void G(int i10, int i11) {
        int E = h0.E(this.f14297a);
        int paddingTop = this.f14297a.getPaddingTop();
        int D = h0.D(this.f14297a);
        int paddingBottom = this.f14297a.getPaddingBottom();
        int i12 = this.f14301e;
        int i13 = this.f14302f;
        this.f14302f = i11;
        this.f14301e = i10;
        if (!this.f14311o) {
            H();
        }
        h0.F0(this.f14297a, E, (paddingTop + i10) - i12, D, (paddingBottom + i11) - i13);
    }

    private void H() {
        this.f14297a.setInternalBackground(a());
        g f10 = f();
        if (f10 != null) {
            f10.W(this.f14316t);
            f10.setState(this.f14297a.getDrawableState());
        }
    }

    private void I(k kVar) {
        if (f14296v && !this.f14311o) {
            int E = h0.E(this.f14297a);
            int paddingTop = this.f14297a.getPaddingTop();
            int D = h0.D(this.f14297a);
            int paddingBottom = this.f14297a.getPaddingBottom();
            H();
            h0.F0(this.f14297a, E, paddingTop, D, paddingBottom);
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
            f10.e0(this.f14304h, this.f14307k);
            if (n10 != null) {
                float f11 = this.f14304h;
                if (this.f14310n) {
                    i10 = eh.a.d(this.f14297a, b.f54100o);
                } else {
                    i10 = 0;
                }
                n10.d0(f11, i10);
            }
        }
    }

    private InsetDrawable K(Drawable drawable) {
        return new InsetDrawable(drawable, this.f14299c, this.f14301e, this.f14300d, this.f14302f);
    }

    private Drawable a() {
        int i10;
        g gVar = new g(this.f14298b);
        gVar.N(this.f14297a.getContext());
        s1.a.o(gVar, this.f14306j);
        PorterDuff.Mode mode = this.f14305i;
        if (mode != null) {
            s1.a.p(gVar, mode);
        }
        gVar.e0(this.f14304h, this.f14307k);
        g gVar2 = new g(this.f14298b);
        gVar2.setTint(0);
        float f10 = this.f14304h;
        if (this.f14310n) {
            i10 = eh.a.d(this.f14297a, b.f54100o);
        } else {
            i10 = 0;
        }
        gVar2.d0(f10, i10);
        if (f14295u) {
            g gVar3 = new g(this.f14298b);
            this.f14309m = gVar3;
            s1.a.n(gVar3, -1);
            RippleDrawable rippleDrawable = new RippleDrawable(mh.b.a(this.f14308l), K(new LayerDrawable(new Drawable[]{gVar2, gVar})), this.f14309m);
            this.f14315s = rippleDrawable;
            return rippleDrawable;
        }
        mh.a aVar = new mh.a(this.f14298b);
        this.f14309m = aVar;
        s1.a.o(aVar, mh.b.a(this.f14308l));
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gVar2, gVar, this.f14309m});
        this.f14315s = layerDrawable;
        return K(layerDrawable);
    }

    private g g(boolean z10) {
        LayerDrawable layerDrawable = this.f14315s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            if (f14295u) {
                return (g) ((LayerDrawable) ((InsetDrawable) this.f14315s.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
            }
            return (g) this.f14315s.getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private g n() {
        return g(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(boolean z10) {
        this.f14310n = z10;
        J();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(ColorStateList colorStateList) {
        if (this.f14307k != colorStateList) {
            this.f14307k = colorStateList;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(int i10) {
        if (this.f14304h != i10) {
            this.f14304h = i10;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(ColorStateList colorStateList) {
        if (this.f14306j != colorStateList) {
            this.f14306j = colorStateList;
            if (f() != null) {
                s1.a.o(f(), this.f14306j);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(PorterDuff.Mode mode) {
        if (this.f14305i != mode) {
            this.f14305i = mode;
            if (f() != null && this.f14305i != null) {
                s1.a.p(f(), this.f14305i);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(boolean z10) {
        this.f14314r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f14303g;
    }

    public int c() {
        return this.f14302f;
    }

    public int d() {
        return this.f14301e;
    }

    public n e() {
        LayerDrawable layerDrawable = this.f14315s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f14315s.getNumberOfLayers() > 2) {
                return (n) this.f14315s.getDrawable(2);
            }
            return (n) this.f14315s.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f() {
        return g(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList h() {
        return this.f14308l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k i() {
        return this.f14298b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        return this.f14307k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f14304h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f14306j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode m() {
        return this.f14305i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f14311o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        return this.f14313q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f14314r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(TypedArray typedArray) {
        this.f14299c = typedArray.getDimensionPixelOffset(yg.k.Q2, 0);
        this.f14300d = typedArray.getDimensionPixelOffset(yg.k.R2, 0);
        this.f14301e = typedArray.getDimensionPixelOffset(yg.k.S2, 0);
        this.f14302f = typedArray.getDimensionPixelOffset(yg.k.T2, 0);
        if (typedArray.hasValue(yg.k.X2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(yg.k.X2, -1);
            this.f14303g = dimensionPixelSize;
            z(this.f14298b.w(dimensionPixelSize));
            this.f14312p = true;
        }
        this.f14304h = typedArray.getDimensionPixelSize(yg.k.f54344h3, 0);
        this.f14305i = o.i(typedArray.getInt(yg.k.W2, -1), PorterDuff.Mode.SRC_IN);
        this.f14306j = c.a(this.f14297a.getContext(), typedArray, yg.k.V2);
        this.f14307k = c.a(this.f14297a.getContext(), typedArray, yg.k.f54334g3);
        this.f14308l = c.a(this.f14297a.getContext(), typedArray, yg.k.f54324f3);
        this.f14313q = typedArray.getBoolean(yg.k.U2, false);
        this.f14316t = typedArray.getDimensionPixelSize(yg.k.Y2, 0);
        this.f14314r = typedArray.getBoolean(yg.k.f54354i3, true);
        int E = h0.E(this.f14297a);
        int paddingTop = this.f14297a.getPaddingTop();
        int D = h0.D(this.f14297a);
        int paddingBottom = this.f14297a.getPaddingBottom();
        if (typedArray.hasValue(yg.k.P2)) {
            t();
        } else {
            H();
        }
        h0.F0(this.f14297a, E + this.f14299c, paddingTop + this.f14301e, D + this.f14300d, paddingBottom + this.f14302f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        if (f() != null) {
            f().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t() {
        this.f14311o = true;
        this.f14297a.setSupportBackgroundTintList(this.f14306j);
        this.f14297a.setSupportBackgroundTintMode(this.f14305i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(boolean z10) {
        this.f14313q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        if (this.f14312p && this.f14303g == i10) {
            return;
        }
        this.f14303g = i10;
        this.f14312p = true;
        z(this.f14298b.w(i10));
    }

    public void w(int i10) {
        G(this.f14301e, i10);
    }

    public void x(int i10) {
        G(i10, this.f14302f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(ColorStateList colorStateList) {
        if (this.f14308l != colorStateList) {
            this.f14308l = colorStateList;
            boolean z10 = f14295u;
            if (z10 && (this.f14297a.getBackground() instanceof RippleDrawable)) {
                ((RippleDrawable) this.f14297a.getBackground()).setColor(mh.b.a(colorStateList));
            } else if (!z10 && (this.f14297a.getBackground() instanceof mh.a)) {
                ((mh.a) this.f14297a.getBackground()).setTintList(mh.b.a(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(k kVar) {
        this.f14298b = kVar;
        I(kVar);
    }
}
