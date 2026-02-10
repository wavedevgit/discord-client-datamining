package com.google.android.material.card;

import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import android.graphics.drawable.StateListDrawable;
import android.os.Build;
import android.util.AttributeSet;
import android.view.View;
import androidx.core.view.h0;
import bh.f;
import bh.j;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import oh.c;
import rh.d;
import rh.e;
import rh.g;
import rh.k;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {
    private static final Drawable A;

    /* renamed from: z  reason: collision with root package name */
    private static final double f14840z = Math.cos(Math.toRadians(45.0d));

    /* renamed from: a  reason: collision with root package name */
    private final MaterialCardView f14841a;

    /* renamed from: c  reason: collision with root package name */
    private final g f14843c;

    /* renamed from: d  reason: collision with root package name */
    private final g f14844d;

    /* renamed from: e  reason: collision with root package name */
    private int f14845e;

    /* renamed from: f  reason: collision with root package name */
    private int f14846f;

    /* renamed from: g  reason: collision with root package name */
    private int f14847g;

    /* renamed from: h  reason: collision with root package name */
    private int f14848h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f14849i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f14850j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f14851k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f14852l;

    /* renamed from: m  reason: collision with root package name */
    private k f14853m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f14854n;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f14855o;

    /* renamed from: p  reason: collision with root package name */
    private LayerDrawable f14856p;

    /* renamed from: q  reason: collision with root package name */
    private g f14857q;

    /* renamed from: r  reason: collision with root package name */
    private g f14858r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f14860t;

    /* renamed from: u  reason: collision with root package name */
    private ValueAnimator f14861u;

    /* renamed from: v  reason: collision with root package name */
    private final TimeInterpolator f14862v;

    /* renamed from: w  reason: collision with root package name */
    private final int f14863w;

    /* renamed from: x  reason: collision with root package name */
    private final int f14864x;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f14842b = new Rect();

    /* renamed from: s  reason: collision with root package name */
    private boolean f14859s = false;

    /* renamed from: y  reason: collision with root package name */
    private float f14865y = 0.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends InsetDrawable {
        a(Drawable drawable, int i10, int i11, int i12, int i13) {
            super(drawable, i10, i11, i12, i13);
        }

        @Override // android.graphics.drawable.Drawable
        public int getMinimumHeight() {
            return -1;
        }

        @Override // android.graphics.drawable.Drawable
        public int getMinimumWidth() {
            return -1;
        }

        @Override // android.graphics.drawable.InsetDrawable, android.graphics.drawable.DrawableWrapper, android.graphics.drawable.Drawable
        public boolean getPadding(Rect rect) {
            return false;
        }
    }

    static {
        ColorDrawable colorDrawable;
        if (Build.VERSION.SDK_INT <= 28) {
            colorDrawable = new ColorDrawable();
        } else {
            colorDrawable = null;
        }
        A = colorDrawable;
    }

    public b(MaterialCardView materialCardView, AttributeSet attributeSet, int i10, int i11) {
        this.f14841a = materialCardView;
        g gVar = new g(materialCardView.getContext(), attributeSet, i10, i11);
        this.f14843c = gVar;
        gVar.N(materialCardView.getContext());
        gVar.c0(-12303292);
        k.b v10 = gVar.D().v();
        TypedArray obtainStyledAttributes = materialCardView.getContext().obtainStyledAttributes(attributeSet, bh.k.f6986s0, i10, j.f6785a);
        if (obtainStyledAttributes.hasValue(bh.k.f6995t0)) {
            v10.o(obtainStyledAttributes.getDimension(bh.k.f6995t0, 0.0f));
        }
        this.f14844d = new g();
        Y(v10.m());
        this.f14862v = mh.g.g(materialCardView.getContext(), bh.b.Q, ch.a.f7595a);
        this.f14863w = mh.g.f(materialCardView.getContext(), bh.b.K, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f14864x = mh.g.f(materialCardView.getContext(), bh.b.J, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        obtainStyledAttributes.recycle();
    }

    private Drawable D(Drawable drawable) {
        int i10;
        int i11;
        if (this.f14841a.getUseCompatPadding()) {
            i11 = (int) Math.ceil(f());
            i10 = (int) Math.ceil(e());
        } else {
            i10 = 0;
            i11 = 0;
        }
        return new a(drawable, i10, i11, i10, i11);
    }

    private boolean G() {
        if ((this.f14847g & 80) == 80) {
            return true;
        }
        return false;
    }

    private boolean H() {
        if ((this.f14847g & 8388613) == 8388613) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void a(b bVar, ValueAnimator valueAnimator) {
        bVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        bVar.f14850j.setAlpha((int) (255.0f * floatValue));
        bVar.f14865y = floatValue;
    }

    private float c() {
        return Math.max(Math.max(d(this.f14853m.q(), this.f14843c.G()), d(this.f14853m.s(), this.f14843c.H())), Math.max(d(this.f14853m.k(), this.f14843c.t()), d(this.f14853m.i(), this.f14843c.s())));
    }

    private boolean c0() {
        if (this.f14841a.getPreventCornerOverlap() && !g()) {
            return true;
        }
        return false;
    }

    private float d(d dVar, float f10) {
        if (dVar instanceof rh.j) {
            return (float) ((1.0d - f14840z) * f10);
        }
        if (dVar instanceof e) {
            return f10 / 2.0f;
        }
        return 0.0f;
    }

    private boolean d0() {
        if (this.f14841a.getPreventCornerOverlap() && g() && this.f14841a.getUseCompatPadding()) {
            return true;
        }
        return false;
    }

    private float e() {
        float f10;
        float maxCardElevation = this.f14841a.getMaxCardElevation();
        if (d0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean e0() {
        if (this.f14841a.isClickable()) {
            return true;
        }
        View view = this.f14841a;
        while (view.isDuplicateParentStateEnabled() && (view.getParent() instanceof View)) {
            view = (View) view.getParent();
        }
        return view.isClickable();
    }

    private float f() {
        float f10;
        float maxCardElevation = this.f14841a.getMaxCardElevation() * 1.5f;
        if (d0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean g() {
        if (this.f14843c.Q()) {
            return true;
        }
        return false;
    }

    private Drawable h() {
        StateListDrawable stateListDrawable = new StateListDrawable();
        g j10 = j();
        this.f14857q = j10;
        j10.X(this.f14851k);
        stateListDrawable.addState(new int[]{16842919}, this.f14857q);
        return stateListDrawable;
    }

    private Drawable i() {
        if (ph.b.f44266a) {
            this.f14858r = j();
            return new RippleDrawable(this.f14851k, null, this.f14858r);
        }
        return h();
    }

    private void i0(Drawable drawable) {
        if (this.f14841a.getForeground() instanceof InsetDrawable) {
            ((InsetDrawable) this.f14841a.getForeground()).setDrawable(drawable);
        } else {
            this.f14841a.setForeground(D(drawable));
        }
    }

    private g j() {
        return new g(this.f14853m);
    }

    private void k0() {
        Drawable drawable;
        if (ph.b.f44266a && (drawable = this.f14855o) != null) {
            ((RippleDrawable) drawable).setColor(this.f14851k);
            return;
        }
        g gVar = this.f14857q;
        if (gVar != null) {
            gVar.X(this.f14851k);
        }
    }

    private Drawable t() {
        if (this.f14855o == null) {
            this.f14855o = i();
        }
        if (this.f14856p == null) {
            LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{this.f14855o, this.f14844d, this.f14850j});
            this.f14856p = layerDrawable;
            layerDrawable.setId(2, f.D);
        }
        return this.f14856p;
    }

    private float v() {
        if (this.f14841a.getPreventCornerOverlap() && this.f14841a.getUseCompatPadding()) {
            return (float) ((1.0d - f14840z) * this.f14841a.getCardViewRadius());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList A() {
        return this.f14854n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int B() {
        return this.f14848h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect C() {
        return this.f14842b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean E() {
        return this.f14859s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        return this.f14860t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(TypedArray typedArray) {
        Drawable drawable;
        ColorStateList a10 = c.a(this.f14841a.getContext(), typedArray, bh.k.S3);
        this.f14854n = a10;
        if (a10 == null) {
            this.f14854n = ColorStateList.valueOf(-1);
        }
        this.f14848h = typedArray.getDimensionPixelSize(bh.k.T3, 0);
        boolean z10 = typedArray.getBoolean(bh.k.K3, false);
        this.f14860t = z10;
        this.f14841a.setLongClickable(z10);
        this.f14852l = c.a(this.f14841a.getContext(), typedArray, bh.k.Q3);
        Q(c.d(this.f14841a.getContext(), typedArray, bh.k.M3));
        T(typedArray.getDimensionPixelSize(bh.k.P3, 0));
        S(typedArray.getDimensionPixelSize(bh.k.O3, 0));
        this.f14847g = typedArray.getInteger(bh.k.N3, 8388661);
        ColorStateList a11 = c.a(this.f14841a.getContext(), typedArray, bh.k.R3);
        this.f14851k = a11;
        if (a11 == null) {
            this.f14851k = ColorStateList.valueOf(hh.a.d(this.f14841a, bh.b.f6633i));
        }
        M(c.a(this.f14841a.getContext(), typedArray, bh.k.L3));
        k0();
        h0();
        l0();
        this.f14841a.setBackgroundInternal(D(this.f14843c));
        if (e0()) {
            drawable = t();
        } else {
            drawable = this.f14844d;
        }
        this.f14849i = drawable;
        this.f14841a.setForeground(D(drawable));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(int i10, int i11) {
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        if (this.f14856p != null) {
            if (this.f14841a.getUseCompatPadding()) {
                i12 = (int) Math.ceil(f() * 2.0f);
                i13 = (int) Math.ceil(e() * 2.0f);
            } else {
                i12 = 0;
                i13 = 0;
            }
            if (H()) {
                i14 = ((i10 - this.f14845e) - this.f14846f) - i13;
            } else {
                i14 = this.f14845e;
            }
            if (G()) {
                i15 = this.f14845e;
            } else {
                i15 = ((i11 - this.f14845e) - this.f14846f) - i12;
            }
            int i20 = i15;
            if (H()) {
                i16 = this.f14845e;
            } else {
                i16 = ((i10 - this.f14845e) - this.f14846f) - i13;
            }
            if (G()) {
                i17 = ((i11 - this.f14845e) - this.f14846f) - i12;
            } else {
                i17 = this.f14845e;
            }
            int i21 = i17;
            if (h0.z(this.f14841a) == 1) {
                i19 = i16;
                i18 = i14;
            } else {
                i18 = i16;
                i19 = i14;
            }
            this.f14856p.setLayerInset(2, i19, i21, i18, i20);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        this.f14859s = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.f14843c.X(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(ColorStateList colorStateList) {
        g gVar = this.f14844d;
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(0);
        }
        gVar.X(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(boolean z10) {
        this.f14860t = z10;
    }

    public void O(boolean z10) {
        P(z10, false);
    }

    public void P(boolean z10, boolean z11) {
        int i10;
        float f10;
        Drawable drawable = this.f14850j;
        if (drawable != null) {
            if (z11) {
                b(z10);
                return;
            }
            if (z10) {
                i10 = SetSpanOperation.SPAN_MAX_PRIORITY;
            } else {
                i10 = 0;
            }
            drawable.setAlpha(i10);
            if (z10) {
                f10 = 1.0f;
            } else {
                f10 = 0.0f;
            }
            this.f14865y = f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(Drawable drawable) {
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f14850j = mutate;
            s1.a.o(mutate, this.f14852l);
            O(this.f14841a.isChecked());
        } else {
            this.f14850j = A;
        }
        LayerDrawable layerDrawable = this.f14856p;
        if (layerDrawable != null) {
            layerDrawable.setDrawableByLayerId(f.D, this.f14850j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(int i10) {
        this.f14847g = i10;
        J(this.f14841a.getMeasuredWidth(), this.f14841a.getMeasuredHeight());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(int i10) {
        this.f14845e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(int i10) {
        this.f14846f = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(ColorStateList colorStateList) {
        this.f14852l = colorStateList;
        Drawable drawable = this.f14850j;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(float f10) {
        Y(this.f14853m.w(f10));
        this.f14849i.invalidateSelf();
        if (d0() || c0()) {
            g0();
        }
        if (d0()) {
            j0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(float f10) {
        this.f14843c.Y(f10);
        g gVar = this.f14844d;
        if (gVar != null) {
            gVar.Y(f10);
        }
        g gVar2 = this.f14858r;
        if (gVar2 != null) {
            gVar2.Y(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ColorStateList colorStateList) {
        this.f14851k = colorStateList;
        k0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(k kVar) {
        this.f14853m = kVar;
        this.f14843c.setShapeAppearanceModel(kVar);
        g gVar = this.f14843c;
        gVar.b0(!gVar.Q());
        g gVar2 = this.f14844d;
        if (gVar2 != null) {
            gVar2.setShapeAppearanceModel(kVar);
        }
        g gVar3 = this.f14858r;
        if (gVar3 != null) {
            gVar3.setShapeAppearanceModel(kVar);
        }
        g gVar4 = this.f14857q;
        if (gVar4 != null) {
            gVar4.setShapeAppearanceModel(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(ColorStateList colorStateList) {
        if (this.f14854n == colorStateList) {
            return;
        }
        this.f14854n = colorStateList;
        l0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(int i10) {
        if (i10 == this.f14848h) {
            return;
        }
        this.f14848h = i10;
        l0();
    }

    public void b(boolean z10) {
        float f10;
        float f11;
        int i10;
        if (z10) {
            f10 = 1.0f;
        } else {
            f10 = 0.0f;
        }
        if (z10) {
            f11 = 1.0f - this.f14865y;
        } else {
            f11 = this.f14865y;
        }
        ValueAnimator valueAnimator = this.f14861u;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            this.f14861u = null;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(this.f14865y, f10);
        this.f14861u = ofFloat;
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.card.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                b.a(b.this, valueAnimator2);
            }
        });
        this.f14861u.setInterpolator(this.f14862v);
        ValueAnimator valueAnimator2 = this.f14861u;
        if (z10) {
            i10 = this.f14863w;
        } else {
            i10 = this.f14864x;
        }
        valueAnimator2.setDuration(i10 * f11);
        this.f14861u.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0(int i10, int i11, int i12, int i13) {
        this.f14842b.set(i10, i11, i12, i13);
        g0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0() {
        Drawable drawable;
        Drawable drawable2 = this.f14849i;
        if (e0()) {
            drawable = t();
        } else {
            drawable = this.f14844d;
        }
        this.f14849i = drawable;
        if (drawable2 != drawable) {
            i0(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0() {
        float c10;
        if (!c0() && !d0()) {
            c10 = 0.0f;
        } else {
            c10 = c();
        }
        int v10 = (int) (c10 - v());
        MaterialCardView materialCardView = this.f14841a;
        Rect rect = this.f14842b;
        materialCardView.e(rect.left + v10, rect.top + v10, rect.right + v10, rect.bottom + v10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h0() {
        this.f14843c.W(this.f14841a.getCardElevation());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j0() {
        if (!E()) {
            this.f14841a.setBackgroundInternal(D(this.f14843c));
        }
        this.f14841a.setForeground(D(this.f14849i));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        Drawable drawable = this.f14855o;
        if (drawable != null) {
            Rect bounds = drawable.getBounds();
            int i10 = bounds.bottom;
            this.f14855o.setBounds(bounds.left, bounds.top, bounds.right, i10 - 1);
            this.f14855o.setBounds(bounds.left, bounds.top, bounds.right, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g l() {
        return this.f14843c;
    }

    void l0() {
        this.f14844d.e0(this.f14848h, this.f14854n);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList m() {
        return this.f14843c.x();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList n() {
        return this.f14844d.x();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable o() {
        return this.f14850j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f14847g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f14845e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f14846f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList s() {
        return this.f14852l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float u() {
        return this.f14843c.G();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f14843c.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList x() {
        return this.f14851k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k y() {
        return this.f14853m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int z() {
        ColorStateList colorStateList = this.f14854n;
        if (colorStateList == null) {
            return -1;
        }
        return colorStateList.getDefaultColor();
    }
}
