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
    private static final boolean f15698u = true;

    /* renamed from: v  reason: collision with root package name */
    private static final boolean f15699v = false;

    /* renamed from: a  reason: collision with root package name */
    private final MaterialButton f15700a;

    /* renamed from: b  reason: collision with root package name */
    private k f15701b;

    /* renamed from: c  reason: collision with root package name */
    private int f15702c;

    /* renamed from: d  reason: collision with root package name */
    private int f15703d;

    /* renamed from: e  reason: collision with root package name */
    private int f15704e;

    /* renamed from: f  reason: collision with root package name */
    private int f15705f;

    /* renamed from: g  reason: collision with root package name */
    private int f15706g;

    /* renamed from: h  reason: collision with root package name */
    private int f15707h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuff.Mode f15708i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f15709j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f15710k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f15711l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f15712m;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15716q;

    /* renamed from: s  reason: collision with root package name */
    private LayerDrawable f15718s;

    /* renamed from: t  reason: collision with root package name */
    private int f15719t;

    /* renamed from: n  reason: collision with root package name */
    private boolean f15713n = false;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15714o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f15715p = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f15717r = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(MaterialButton materialButton, k kVar) {
        this.f15700a = materialButton;
        this.f15701b = kVar;
    }

    private void G(int i10, int i11) {
        int E = h0.E(this.f15700a);
        int paddingTop = this.f15700a.getPaddingTop();
        int D = h0.D(this.f15700a);
        int paddingBottom = this.f15700a.getPaddingBottom();
        int i12 = this.f15704e;
        int i13 = this.f15705f;
        this.f15705f = i11;
        this.f15704e = i10;
        if (!this.f15714o) {
            H();
        }
        h0.F0(this.f15700a, E, (paddingTop + i10) - i12, D, (paddingBottom + i11) - i13);
    }

    private void H() {
        this.f15700a.setInternalBackground(a());
        g f10 = f();
        if (f10 != null) {
            f10.W(this.f15719t);
            f10.setState(this.f15700a.getDrawableState());
        }
    }

    private void I(k kVar) {
        if (f15699v && !this.f15714o) {
            int E = h0.E(this.f15700a);
            int paddingTop = this.f15700a.getPaddingTop();
            int D = h0.D(this.f15700a);
            int paddingBottom = this.f15700a.getPaddingBottom();
            H();
            h0.F0(this.f15700a, E, paddingTop, D, paddingBottom);
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
            f10.e0(this.f15707h, this.f15710k);
            if (n10 != null) {
                float f11 = this.f15707h;
                if (this.f15713n) {
                    i10 = eh.a.d(this.f15700a, b.f54354o);
                } else {
                    i10 = 0;
                }
                n10.d0(f11, i10);
            }
        }
    }

    private InsetDrawable K(Drawable drawable) {
        return new InsetDrawable(drawable, this.f15702c, this.f15704e, this.f15703d, this.f15705f);
    }

    private Drawable a() {
        int i10;
        g gVar = new g(this.f15701b);
        gVar.N(this.f15700a.getContext());
        s1.a.o(gVar, this.f15709j);
        PorterDuff.Mode mode = this.f15708i;
        if (mode != null) {
            s1.a.p(gVar, mode);
        }
        gVar.e0(this.f15707h, this.f15710k);
        g gVar2 = new g(this.f15701b);
        gVar2.setTint(0);
        float f10 = this.f15707h;
        if (this.f15713n) {
            i10 = eh.a.d(this.f15700a, b.f54354o);
        } else {
            i10 = 0;
        }
        gVar2.d0(f10, i10);
        if (f15698u) {
            g gVar3 = new g(this.f15701b);
            this.f15712m = gVar3;
            s1.a.n(gVar3, -1);
            RippleDrawable rippleDrawable = new RippleDrawable(mh.b.a(this.f15711l), K(new LayerDrawable(new Drawable[]{gVar2, gVar})), this.f15712m);
            this.f15718s = rippleDrawable;
            return rippleDrawable;
        }
        mh.a aVar = new mh.a(this.f15701b);
        this.f15712m = aVar;
        s1.a.o(aVar, mh.b.a(this.f15711l));
        LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{gVar2, gVar, this.f15712m});
        this.f15718s = layerDrawable;
        return K(layerDrawable);
    }

    private g g(boolean z10) {
        LayerDrawable layerDrawable = this.f15718s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 0) {
            if (f15698u) {
                return (g) ((LayerDrawable) ((InsetDrawable) this.f15718s.getDrawable(0)).getDrawable()).getDrawable(!z10 ? 1 : 0);
            }
            return (g) this.f15718s.getDrawable(!z10 ? 1 : 0);
        }
        return null;
    }

    private g n() {
        return g(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(boolean z10) {
        this.f15713n = z10;
        J();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(ColorStateList colorStateList) {
        if (this.f15710k != colorStateList) {
            this.f15710k = colorStateList;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(int i10) {
        if (this.f15707h != i10) {
            this.f15707h = i10;
            J();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D(ColorStateList colorStateList) {
        if (this.f15709j != colorStateList) {
            this.f15709j = colorStateList;
            if (f() != null) {
                s1.a.o(f(), this.f15709j);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E(PorterDuff.Mode mode) {
        if (this.f15708i != mode) {
            this.f15708i = mode;
            if (f() != null && this.f15708i != null) {
                s1.a.p(f(), this.f15708i);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F(boolean z10) {
        this.f15717r = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f15706g;
    }

    public int c() {
        return this.f15705f;
    }

    public int d() {
        return this.f15704e;
    }

    public n e() {
        LayerDrawable layerDrawable = this.f15718s;
        if (layerDrawable != null && layerDrawable.getNumberOfLayers() > 1) {
            if (this.f15718s.getNumberOfLayers() > 2) {
                return (n) this.f15718s.getDrawable(2);
            }
            return (n) this.f15718s.getDrawable(1);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f() {
        return g(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList h() {
        return this.f15711l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k i() {
        return this.f15701b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        return this.f15710k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int k() {
        return this.f15707h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList l() {
        return this.f15709j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode m() {
        return this.f15708i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o() {
        return this.f15714o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        return this.f15716q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        return this.f15717r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(TypedArray typedArray) {
        this.f15702c = typedArray.getDimensionPixelOffset(yg.k.Q2, 0);
        this.f15703d = typedArray.getDimensionPixelOffset(yg.k.R2, 0);
        this.f15704e = typedArray.getDimensionPixelOffset(yg.k.S2, 0);
        this.f15705f = typedArray.getDimensionPixelOffset(yg.k.T2, 0);
        if (typedArray.hasValue(yg.k.X2)) {
            int dimensionPixelSize = typedArray.getDimensionPixelSize(yg.k.X2, -1);
            this.f15706g = dimensionPixelSize;
            z(this.f15701b.w(dimensionPixelSize));
            this.f15715p = true;
        }
        this.f15707h = typedArray.getDimensionPixelSize(yg.k.f54598h3, 0);
        this.f15708i = o.i(typedArray.getInt(yg.k.W2, -1), PorterDuff.Mode.SRC_IN);
        this.f15709j = c.a(this.f15700a.getContext(), typedArray, yg.k.V2);
        this.f15710k = c.a(this.f15700a.getContext(), typedArray, yg.k.f54588g3);
        this.f15711l = c.a(this.f15700a.getContext(), typedArray, yg.k.f54578f3);
        this.f15716q = typedArray.getBoolean(yg.k.U2, false);
        this.f15719t = typedArray.getDimensionPixelSize(yg.k.Y2, 0);
        this.f15717r = typedArray.getBoolean(yg.k.f54608i3, true);
        int E = h0.E(this.f15700a);
        int paddingTop = this.f15700a.getPaddingTop();
        int D = h0.D(this.f15700a);
        int paddingBottom = this.f15700a.getPaddingBottom();
        if (typedArray.hasValue(yg.k.P2)) {
            t();
        } else {
            H();
        }
        h0.F0(this.f15700a, E + this.f15702c, paddingTop + this.f15704e, D + this.f15703d, paddingBottom + this.f15705f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        if (f() != null) {
            f().setTint(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t() {
        this.f15714o = true;
        this.f15700a.setSupportBackgroundTintList(this.f15709j);
        this.f15700a.setSupportBackgroundTintMode(this.f15708i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(boolean z10) {
        this.f15716q = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        if (this.f15715p && this.f15706g == i10) {
            return;
        }
        this.f15706g = i10;
        this.f15715p = true;
        z(this.f15701b.w(i10));
    }

    public void w(int i10) {
        G(this.f15704e, i10);
    }

    public void x(int i10) {
        G(i10, this.f15705f);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(ColorStateList colorStateList) {
        if (this.f15711l != colorStateList) {
            this.f15711l = colorStateList;
            boolean z10 = f15698u;
            if (z10 && (this.f15700a.getBackground() instanceof RippleDrawable)) {
                ((RippleDrawable) this.f15700a.getBackground()).setColor(mh.b.a(colorStateList));
            } else if (!z10 && (this.f15700a.getBackground() instanceof mh.a)) {
                ((mh.a) this.f15700a.getBackground()).setTintList(mh.b.a(colorStateList));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(k kVar) {
        this.f15701b = kVar;
        I(kVar);
    }
}
