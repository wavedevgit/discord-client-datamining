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
import mh.c;
import ph.g;
import ph.k;
import ph.n;
import zg.b;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: u  reason: collision with root package name */
    private static final boolean f14689u = true;

    /* renamed from: v  reason: collision with root package name */
    private static final boolean f14690v = false;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialButton f14691a;

    /* renamed from: b  reason: collision with root package name */
    private k f14692b;

    /* renamed from: c  reason: collision with root package name */
    private int f14693c;

    /* renamed from: d  reason: collision with root package name */
    private int f14694d;

    /* renamed from: e  reason: collision with root package name */
    private int f14695e;

    /* renamed from: f  reason: collision with root package name */
    private int f14696f;

    /* renamed from: g  reason: collision with root package name */
    private int f14697g;

    /* renamed from: h  reason: collision with root package name */
    private int f14698h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f14699i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f14700j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f14701k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f14702l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f14703m;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14707q;

    /* renamed from: s  reason: collision with root package name */
    private LayerDrawable f14709s;

    /* renamed from: t  reason: collision with root package name */
    private int f14710t;

    /* renamed from: n  reason: collision with root package name */
    private boolean f14704n = false;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14705o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f14706p = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14708r = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(MaterialButton materialButton, k kVar) {
        this.f14691a = materialButton;
        this.f14692b = kVar;
    }

    private void G(int i10, int i11) {
        int E = h0.E(this.f14691a);
        int paddingTop = this.f14691a.getPaddingTop();
        int D = h0.D(this.f14691a);
        int paddingBottom = this.f14691a.getPaddingBottom();
        int i12 = this.f14695e;
        int i13 = this.f14696f;
        this.f14696f = i11;
        this.f14695e = i10;
        if (!this.f14705o) {
            H();
        }
        h0.F0(this.f14691a, E, (paddingTop + i10) - i12, D, (paddingBottom + i11) - i13);
    }

    private void H() {
        this.f14691a.setInternalBackground(a());
        g f10 = f();
        if (f10 != null) {
            f10.W(this.f14710t);
            f10.setState(this.f14691a.getDrawableState());
        }
    }

    private void I(k kVar) {
        if (f14690v && !this.f14705o) {
            int E = h0.E(this.f14691a);
            int paddingTop = this.f14691a.getPaddingTop();
            int D = h0.D(this.f14691a);
            int paddingBottom = this.f14691a.getPaddingBottom();
            H();
            h0.F0(this.f14691a, E, paddingTop, D, paddingBottom);
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
            f10.e0(this.f14698h, this.f14701k);
            if (n10 != null) {
                float f11 = this.f14698h;
                if (this.f14704n) {
                    i10 = fh.a.d(this.f14691a, b.f55558o);
                } else {
                    i10 = 0;
                }
                n10.d0(f11, i10);
            }
        }
    }

    private InsetDrawable K(Drawable drawable) {
        return new InsetDrawable(drawable, this.f14693c, this.f14695e, this.f14694d, this.f14696f);
    }

    private Drawable a() {
        int i10;
        g gVar = new g(this.f14692b);
        gVar.N(this.f14691a.getContext());
        s1.a.o(gVar, this.f14700j);
        PorterDuff.Mode mode = this.f14699i;
        if (mode != null) {
            s1.a.p(gVar, mode);
        }
        gVar.e0(this.f14698h, this.f14701k);
        g gVar2 = new g(this.f14692b);
        gVar2.setTint(0);
        float f10 = this.f14698h;
        if (this.f14704n) {
            i10 = fh.a.d(this.f14691a, b.f55558o);
        } else {
            i10 = 0;
        }
        gVar2.d0(f10, i10);
        if (f14689u) {
            g gVar3 = new g(this.f14692b);
            this.f14703m = gVar3;
            s1.a.n(gVar3, -1);
            RippleDrawable rippleDrawable = new RippleDrawable(nh.b.a(this.f14702l), K(new LayerDrawable(new Drawable[]{gVar2, gVar})), this.f14703m);
            this.f14709s = rippleDrawable;
            return rippleDrawable;
        }
        nh.a aVar = new nh.a(this.f14692b);
        this.f14703m = aVar;
        s1.a.o(aVar, nh.b.a(this.f14702l));
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gVar2, gVar, this.f14703m});
        this.f14709s = layerDrawable;
        return K(layerDrawable);
    }

    private g g(boolean z10) {
        LayerDrawable layerDrawable = this.f14709s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            if (f14689u) {
                return (g) ((LayerDrawable) ((InsetDrawable) this.f14709s.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
            }
            return (g) this.f14709s.getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private g n() {
        return g(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(boolean z10) {
        this.f14704n = z10;
        J();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(ColorStateList colorStateList) {
        if (this.f14701k != colorStateList) {
            this.f14701k = colorStateList;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(int i10) {
        if (this.f14698h != i10) {
            this.f14698h = i10;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(ColorStateList colorStateList) {
        if (this.f14700j != colorStateList) {
            this.f14700j = colorStateList;
            if (f() != null) {
                s1.a.o(f(), this.f14700j);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(PorterDuff.Mode mode) {
        if (this.f14699i != mode) {
            this.f14699i = mode;
            if (f() != null && this.f14699i != null) {
                s1.a.p(f(), this.f14699i);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(boolean z10) {
        this.f14708r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f14697g;
    }

    public int c() {
        return this.f14696f;
    }

    public int d() {
        return this.f14695e;
    }

    public n e() {
        LayerDrawable layerDrawable = this.f14709s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f14709s.getNumberOfLayers() > 2) {
                return (n) this.f14709s.getDrawable(2);
            }
            return (n) this.f14709s.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f() {
        return g(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList h() {
        return this.f14702l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k i() {
        return this.f14692b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        return this.f14701k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f14698h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f14700j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode m() {
        return this.f14699i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f14705o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        return this.f14707q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f14708r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(TypedArray typedArray) {
        this.f14693c = typedArray.getDimensionPixelOffset(zg.k.Q2, 0);
        this.f14694d = typedArray.getDimensionPixelOffset(zg.k.R2, 0);
        this.f14695e = typedArray.getDimensionPixelOffset(zg.k.S2, 0);
        this.f14696f = typedArray.getDimensionPixelOffset(zg.k.T2, 0);
        if (typedArray.hasValue(zg.k.X2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(zg.k.X2, -1);
            this.f14697g = dimensionPixelSize;
            z(this.f14692b.w(dimensionPixelSize));
            this.f14706p = true;
        }
        this.f14698h = typedArray.getDimensionPixelSize(zg.k.f55802h3, 0);
        this.f14699i = o.i(typedArray.getInt(zg.k.W2, -1), PorterDuff.Mode.SRC_IN);
        this.f14700j = c.a(this.f14691a.getContext(), typedArray, zg.k.V2);
        this.f14701k = c.a(this.f14691a.getContext(), typedArray, zg.k.f55792g3);
        this.f14702l = c.a(this.f14691a.getContext(), typedArray, zg.k.f55782f3);
        this.f14707q = typedArray.getBoolean(zg.k.U2, false);
        this.f14710t = typedArray.getDimensionPixelSize(zg.k.Y2, 0);
        this.f14708r = typedArray.getBoolean(zg.k.f55812i3, true);
        int E = h0.E(this.f14691a);
        int paddingTop = this.f14691a.getPaddingTop();
        int D = h0.D(this.f14691a);
        int paddingBottom = this.f14691a.getPaddingBottom();
        if (typedArray.hasValue(zg.k.P2)) {
            t();
        } else {
            H();
        }
        h0.F0(this.f14691a, E + this.f14693c, paddingTop + this.f14695e, D + this.f14694d, paddingBottom + this.f14696f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        if (f() != null) {
            f().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t() {
        this.f14705o = true;
        this.f14691a.setSupportBackgroundTintList(this.f14700j);
        this.f14691a.setSupportBackgroundTintMode(this.f14699i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(boolean z10) {
        this.f14707q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        if (this.f14706p && this.f14697g == i10) {
            return;
        }
        this.f14697g = i10;
        this.f14706p = true;
        z(this.f14692b.w(i10));
    }

    public void w(int i10) {
        G(this.f14695e, i10);
    }

    public void x(int i10) {
        G(i10, this.f14696f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(ColorStateList colorStateList) {
        if (this.f14702l != colorStateList) {
            this.f14702l = colorStateList;
            boolean z10 = f14689u;
            if (z10 && (this.f14691a.getBackground() instanceof RippleDrawable)) {
                ((RippleDrawable) this.f14691a.getBackground()).setColor(nh.b.a(colorStateList));
            } else if (!z10 && (this.f14691a.getBackground() instanceof nh.a)) {
                ((nh.a) this.f14691a.getBackground()).setTintList(nh.b.a(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(k kVar) {
        this.f14692b = kVar;
        I(kVar);
    }
}
