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
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import lh.c;
import oh.d;
import oh.e;
import oh.g;
import oh.k;
import yg.f;
import yg.j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {
    private static final Drawable A;

    /* renamed from: z  reason: collision with root package name */
    private static final double f15729z = Math.cos(Math.toRadians(45.0d));

    /* renamed from: a  reason: collision with root package name */
    private final MaterialCardView f15730a;

    /* renamed from: c  reason: collision with root package name */
    private final g f15732c;

    /* renamed from: d  reason: collision with root package name */
    private final g f15733d;

    /* renamed from: e  reason: collision with root package name */
    private int f15734e;

    /* renamed from: f  reason: collision with root package name */
    private int f15735f;

    /* renamed from: g  reason: collision with root package name */
    private int f15736g;

    /* renamed from: h  reason: collision with root package name */
    private int f15737h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f15738i;

    /* renamed from: j  reason: collision with root package name */
    private Drawable f15739j;

    /* renamed from: k  reason: collision with root package name */
    private ColorStateList f15740k;

    /* renamed from: l  reason: collision with root package name */
    private ColorStateList f15741l;

    /* renamed from: m  reason: collision with root package name */
    private k f15742m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f15743n;

    /* renamed from: o  reason: collision with root package name */
    private Drawable f15744o;

    /* renamed from: p  reason: collision with root package name */
    private LayerDrawable f15745p;

    /* renamed from: q  reason: collision with root package name */
    private g f15746q;

    /* renamed from: r  reason: collision with root package name */
    private g f15747r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f15749t;

    /* renamed from: u  reason: collision with root package name */
    private ValueAnimator f15750u;

    /* renamed from: v  reason: collision with root package name */
    private final TimeInterpolator f15751v;

    /* renamed from: w  reason: collision with root package name */
    private final int f15752w;

    /* renamed from: x  reason: collision with root package name */
    private final int f15753x;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f15731b = new Rect();

    /* renamed from: s  reason: collision with root package name */
    private boolean f15748s = false;

    /* renamed from: y  reason: collision with root package name */
    private float f15754y = 0.0f;

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
        this.f15730a = materialCardView;
        g gVar = new g(materialCardView.getContext(), attributeSet, i10, i11);
        this.f15732c = gVar;
        gVar.N(materialCardView.getContext());
        gVar.c0(-12303292);
        k.b v10 = gVar.D().v();
        TypedArray obtainStyledAttributes = materialCardView.getContext().obtainStyledAttributes(attributeSet, yg.k.f54699s0, i10, j.f54498a);
        if (obtainStyledAttributes.hasValue(yg.k.f54708t0)) {
            v10.o(obtainStyledAttributes.getDimension(yg.k.f54708t0, 0.0f));
        }
        this.f15733d = new g();
        Y(v10.m());
        this.f15751v = jh.g.g(materialCardView.getContext(), yg.b.Q, zg.a.f55658a);
        this.f15752w = jh.g.f(materialCardView.getContext(), yg.b.K, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f15753x = jh.g.f(materialCardView.getContext(), yg.b.J, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        obtainStyledAttributes.recycle();
    }

    private Drawable D(Drawable drawable) {
        int i10;
        int i11;
        if (this.f15730a.getUseCompatPadding()) {
            i11 = (int) Math.ceil(f());
            i10 = (int) Math.ceil(e());
        } else {
            i10 = 0;
            i11 = 0;
        }
        return new a(drawable, i10, i11, i10, i11);
    }

    private boolean G() {
        if ((this.f15736g & 80) == 80) {
            return true;
        }
        return false;
    }

    private boolean H() {
        if ((this.f15736g & 8388613) == 8388613) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void a(b bVar, ValueAnimator valueAnimator) {
        bVar.getClass();
        float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        bVar.f15739j.setAlpha((int) (255.0f * floatValue));
        bVar.f15754y = floatValue;
    }

    private float c() {
        return Math.max(Math.max(d(this.f15742m.q(), this.f15732c.G()), d(this.f15742m.s(), this.f15732c.H())), Math.max(d(this.f15742m.k(), this.f15732c.t()), d(this.f15742m.i(), this.f15732c.s())));
    }

    private boolean c0() {
        if (this.f15730a.getPreventCornerOverlap() && !g()) {
            return true;
        }
        return false;
    }

    private float d(d dVar, float f10) {
        if (dVar instanceof oh.j) {
            return (float) ((1.0d - f15729z) * f10);
        }
        if (dVar instanceof e) {
            return f10 / 2.0f;
        }
        return 0.0f;
    }

    private boolean d0() {
        if (this.f15730a.getPreventCornerOverlap() && g() && this.f15730a.getUseCompatPadding()) {
            return true;
        }
        return false;
    }

    private float e() {
        float f10;
        float maxCardElevation = this.f15730a.getMaxCardElevation();
        if (d0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean e0() {
        if (this.f15730a.isClickable()) {
            return true;
        }
        View view = this.f15730a;
        while (view.isDuplicateParentStateEnabled() && (view.getParent() instanceof View)) {
            view = (View) view.getParent();
        }
        return view.isClickable();
    }

    private float f() {
        float f10;
        float maxCardElevation = this.f15730a.getMaxCardElevation() * 1.5f;
        if (d0()) {
            f10 = c();
        } else {
            f10 = 0.0f;
        }
        return maxCardElevation + f10;
    }

    private boolean g() {
        if (this.f15732c.Q()) {
            return true;
        }
        return false;
    }

    private Drawable h() {
        StateListDrawable stateListDrawable = new StateListDrawable();
        g j10 = j();
        this.f15746q = j10;
        j10.X(this.f15740k);
        stateListDrawable.addState(new int[]{16842919}, this.f15746q);
        return stateListDrawable;
    }

    private Drawable i() {
        if (mh.b.f39065a) {
            this.f15747r = j();
            return new RippleDrawable(this.f15740k, null, this.f15747r);
        }
        return h();
    }

    private void i0(Drawable drawable) {
        if (this.f15730a.getForeground() instanceof InsetDrawable) {
            ((InsetDrawable) this.f15730a.getForeground()).setDrawable(drawable);
        } else {
            this.f15730a.setForeground(D(drawable));
        }
    }

    private g j() {
        return new g(this.f15742m);
    }

    private void k0() {
        Drawable drawable;
        if (mh.b.f39065a && (drawable = this.f15744o) != null) {
            ((RippleDrawable) drawable).setColor(this.f15740k);
            return;
        }
        g gVar = this.f15746q;
        if (gVar != null) {
            gVar.X(this.f15740k);
        }
    }

    private Drawable t() {
        if (this.f15744o == null) {
            this.f15744o = i();
        }
        if (this.f15745p == null) {
            LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{this.f15744o, this.f15733d, this.f15739j});
            this.f15745p = layerDrawable;
            layerDrawable.setId(2, f.D);
        }
        return this.f15745p;
    }

    private float v() {
        if (this.f15730a.getPreventCornerOverlap() && this.f15730a.getUseCompatPadding()) {
            return (float) ((1.0d - f15729z) * this.f15730a.getCardViewRadius());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList A() {
        return this.f15743n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int B() {
        return this.f15737h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect C() {
        return this.f15731b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean E() {
        return this.f15748s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F() {
        return this.f15749t;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(TypedArray typedArray) {
        Drawable drawable;
        ColorStateList a10 = c.a(this.f15730a.getContext(), typedArray, yg.k.S3);
        this.f15743n = a10;
        if (a10 == null) {
            this.f15743n = ColorStateList.valueOf(-1);
        }
        this.f15737h = typedArray.getDimensionPixelSize(yg.k.T3, 0);
        boolean z10 = typedArray.getBoolean(yg.k.K3, false);
        this.f15749t = z10;
        this.f15730a.setLongClickable(z10);
        this.f15741l = c.a(this.f15730a.getContext(), typedArray, yg.k.Q3);
        Q(c.d(this.f15730a.getContext(), typedArray, yg.k.M3));
        T(typedArray.getDimensionPixelSize(yg.k.P3, 0));
        S(typedArray.getDimensionPixelSize(yg.k.O3, 0));
        this.f15736g = typedArray.getInteger(yg.k.N3, 8388661);
        ColorStateList a11 = c.a(this.f15730a.getContext(), typedArray, yg.k.R3);
        this.f15740k = a11;
        if (a11 == null) {
            this.f15740k = ColorStateList.valueOf(eh.a.d(this.f15730a, yg.b.f54346i));
        }
        M(c.a(this.f15730a.getContext(), typedArray, yg.k.L3));
        k0();
        h0();
        l0();
        this.f15730a.setBackgroundInternal(D(this.f15732c));
        if (e0()) {
            drawable = t();
        } else {
            drawable = this.f15733d;
        }
        this.f15738i = drawable;
        this.f15730a.setForeground(D(drawable));
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
        if (this.f15745p != null) {
            if (this.f15730a.getUseCompatPadding()) {
                i12 = (int) Math.ceil(f() * 2.0f);
                i13 = (int) Math.ceil(e() * 2.0f);
            } else {
                i12 = 0;
                i13 = 0;
            }
            if (H()) {
                i14 = ((i10 - this.f15734e) - this.f15735f) - i13;
            } else {
                i14 = this.f15734e;
            }
            if (G()) {
                i15 = this.f15734e;
            } else {
                i15 = ((i11 - this.f15734e) - this.f15735f) - i12;
            }
            int i20 = i15;
            if (H()) {
                i16 = this.f15734e;
            } else {
                i16 = ((i10 - this.f15734e) - this.f15735f) - i13;
            }
            if (G()) {
                i17 = ((i11 - this.f15734e) - this.f15735f) - i12;
            } else {
                i17 = this.f15734e;
            }
            int i21 = i17;
            if (h0.z(this.f15730a) == 1) {
                i19 = i16;
                i18 = i14;
            } else {
                i18 = i16;
                i19 = i14;
            }
            this.f15745p.setLayerInset(2, i19, i21, i18, i20);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        this.f15748s = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(ColorStateList colorStateList) {
        this.f15732c.X(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(ColorStateList colorStateList) {
        g gVar = this.f15733d;
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(0);
        }
        gVar.X(colorStateList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(boolean z10) {
        this.f15749t = z10;
    }

    public void O(boolean z10) {
        P(z10, false);
    }

    public void P(boolean z10, boolean z11) {
        int i10;
        float f10;
        Drawable drawable = this.f15739j;
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
            this.f15754y = f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(Drawable drawable) {
        if (drawable != null) {
            Drawable mutate = s1.a.r(drawable).mutate();
            this.f15739j = mutate;
            s1.a.o(mutate, this.f15741l);
            O(this.f15730a.isChecked());
        } else {
            this.f15739j = A;
        }
        LayerDrawable layerDrawable = this.f15745p;
        if (layerDrawable != null) {
            layerDrawable.setDrawableByLayerId(f.D, this.f15739j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(int i10) {
        this.f15736g = i10;
        J(this.f15730a.getMeasuredWidth(), this.f15730a.getMeasuredHeight());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(int i10) {
        this.f15734e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(int i10) {
        this.f15735f = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(ColorStateList colorStateList) {
        this.f15741l = colorStateList;
        Drawable drawable = this.f15739j;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(float f10) {
        Y(this.f15742m.w(f10));
        this.f15738i.invalidateSelf();
        if (d0() || c0()) {
            g0();
        }
        if (d0()) {
            j0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W(float f10) {
        this.f15732c.Y(f10);
        g gVar = this.f15733d;
        if (gVar != null) {
            gVar.Y(f10);
        }
        g gVar2 = this.f15747r;
        if (gVar2 != null) {
            gVar2.Y(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(ColorStateList colorStateList) {
        this.f15740k = colorStateList;
        k0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(k kVar) {
        this.f15742m = kVar;
        this.f15732c.setShapeAppearanceModel(kVar);
        g gVar = this.f15732c;
        gVar.b0(!gVar.Q());
        g gVar2 = this.f15733d;
        if (gVar2 != null) {
            gVar2.setShapeAppearanceModel(kVar);
        }
        g gVar3 = this.f15747r;
        if (gVar3 != null) {
            gVar3.setShapeAppearanceModel(kVar);
        }
        g gVar4 = this.f15746q;
        if (gVar4 != null) {
            gVar4.setShapeAppearanceModel(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(ColorStateList colorStateList) {
        if (this.f15743n == colorStateList) {
            return;
        }
        this.f15743n = colorStateList;
        l0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(int i10) {
        if (i10 == this.f15737h) {
            return;
        }
        this.f15737h = i10;
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
            f11 = 1.0f - this.f15754y;
        } else {
            f11 = this.f15754y;
        }
        ValueAnimator valueAnimator = this.f15750u;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            this.f15750u = null;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(this.f15754y, f10);
        this.f15750u = ofFloat;
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.card.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                b.a(b.this, valueAnimator2);
            }
        });
        this.f15750u.setInterpolator(this.f15751v);
        ValueAnimator valueAnimator2 = this.f15750u;
        if (z10) {
            i10 = this.f15752w;
        } else {
            i10 = this.f15753x;
        }
        valueAnimator2.setDuration(i10 * f11);
        this.f15750u.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0(int i10, int i11, int i12, int i13) {
        this.f15731b.set(i10, i11, i12, i13);
        g0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0() {
        Drawable drawable;
        Drawable drawable2 = this.f15738i;
        if (e0()) {
            drawable = t();
        } else {
            drawable = this.f15733d;
        }
        this.f15738i = drawable;
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
        MaterialCardView materialCardView = this.f15730a;
        Rect rect = this.f15731b;
        materialCardView.e(rect.left + v10, rect.top + v10, rect.right + v10, rect.bottom + v10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h0() {
        this.f15732c.W(this.f15730a.getCardElevation());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j0() {
        if (!E()) {
            this.f15730a.setBackgroundInternal(D(this.f15732c));
        }
        this.f15730a.setForeground(D(this.f15738i));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        Drawable drawable = this.f15744o;
        if (drawable != null) {
            Rect bounds = drawable.getBounds();
            int i10 = bounds.bottom;
            this.f15744o.setBounds(bounds.left, bounds.top, bounds.right, i10 - 1);
            this.f15744o.setBounds(bounds.left, bounds.top, bounds.right, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g l() {
        return this.f15732c;
    }

    void l0() {
        this.f15733d.e0(this.f15737h, this.f15743n);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList m() {
        return this.f15732c.x();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList n() {
        return this.f15733d.x();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Drawable o() {
        return this.f15739j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f15736g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f15734e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f15735f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList s() {
        return this.f15741l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float u() {
        return this.f15732c.G();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f15732c.y();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList x() {
        return this.f15740k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k y() {
        return this.f15742m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int z() {
        ColorStateList colorStateList = this.f15743n;
        if (colorStateList == null) {
            return -1;
        }
        return colorStateList.getDefaultColor();
    }
}
