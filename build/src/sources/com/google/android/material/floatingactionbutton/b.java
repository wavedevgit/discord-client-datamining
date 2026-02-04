package com.google.android.material.floatingactionbutton;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.FloatEvaluator;
import android.animation.ObjectAnimator;
import android.animation.TimeInterpolator;
import android.animation.TypeEvaluator;
import android.animation.ValueAnimator;
import android.content.res.ColorStateList;
import android.graphics.Matrix;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewTreeObserver;
import androidx.core.view.h0;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Iterator;
import oh.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    static final TimeInterpolator D = zg.a.f55943c;
    private static final int E = yg.b.F;
    private static final int F = yg.b.P;
    private static final int G = yg.b.G;
    private static final int H = yg.b.N;
    static final int[] I = {16842919, 16842910};
    static final int[] J = {16843623, 16842908, 16842910};
    static final int[] K = {16842908, 16842910};
    static final int[] L = {16843623, 16842910};
    static final int[] M = {16842910};
    static final int[] N = new int[0];
    private ViewTreeObserver.OnPreDrawListener C;

    /* renamed from: a  reason: collision with root package name */
    oh.k f14641a;

    /* renamed from: b  reason: collision with root package name */
    oh.g f14642b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f14643c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f14644d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f14645e;

    /* renamed from: f  reason: collision with root package name */
    boolean f14646f;

    /* renamed from: h  reason: collision with root package name */
    float f14648h;

    /* renamed from: i  reason: collision with root package name */
    float f14649i;

    /* renamed from: j  reason: collision with root package name */
    float f14650j;

    /* renamed from: k  reason: collision with root package name */
    int f14651k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.material.internal.g f14652l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f14653m;

    /* renamed from: n  reason: collision with root package name */
    private zg.g f14654n;

    /* renamed from: o  reason: collision with root package name */
    private zg.g f14655o;

    /* renamed from: p  reason: collision with root package name */
    private float f14656p;

    /* renamed from: r  reason: collision with root package name */
    private int f14658r;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f14660t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f14661u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f14662v;

    /* renamed from: w  reason: collision with root package name */
    final FloatingActionButton f14663w;

    /* renamed from: x  reason: collision with root package name */
    final nh.b f14664x;

    /* renamed from: g  reason: collision with root package name */
    boolean f14647g = true;

    /* renamed from: q  reason: collision with root package name */
    private float f14657q = 1.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f14659s = 0;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f14665y = new Rect();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f14666z = new RectF();
    private final RectF A = new RectF();
    private final Matrix B = new Matrix();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f14667a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f14668b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f14669c;

        a(boolean z10, k kVar) {
            this.f14668b = z10;
            this.f14669c = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f14667a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            b.this.f14659s = 0;
            b.this.f14653m = null;
            if (!this.f14667a) {
                FloatingActionButton floatingActionButton = b.this.f14663w;
                boolean z10 = this.f14668b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                k kVar = this.f14669c;
                if (kVar != null) {
                    kVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f14663w.b(0, this.f14668b);
            b.this.f14659s = 1;
            b.this.f14653m = animator;
            this.f14667a = false;
        }
    }

    /* renamed from: com.google.android.material.floatingactionbutton.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0169b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f14671a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f14672b;

        C0169b(boolean z10, k kVar) {
            this.f14671a = z10;
            this.f14672b = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.f14659s = 0;
            b.this.f14653m = null;
            k kVar = this.f14672b;
            if (kVar != null) {
                kVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f14663w.b(0, this.f14671a);
            b.this.f14659s = 2;
            b.this.f14653m = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends zg.f {
        c() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            b.this.f14657q = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f14675a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ float f14676b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ float f14677c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f14678d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f14679e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ float f14680f;

        /* renamed from: g  reason: collision with root package name */
        final /* synthetic */ float f14681g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ Matrix f14682h;

        d(float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix) {
            this.f14675a = f10;
            this.f14676b = f11;
            this.f14677c = f12;
            this.f14678d = f13;
            this.f14679e = f14;
            this.f14680f = f15;
            this.f14681g = f16;
            this.f14682h = matrix;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            b.this.f14663w.setAlpha(zg.a.b(this.f14675a, this.f14676b, 0.0f, 0.2f, floatValue));
            b.this.f14663w.setScaleX(zg.a.a(this.f14677c, this.f14678d, floatValue));
            b.this.f14663w.setScaleY(zg.a.a(this.f14679e, this.f14678d, floatValue));
            b.this.f14657q = zg.a.a(this.f14680f, this.f14681g, floatValue);
            b.this.e(zg.a.a(this.f14680f, this.f14681g, floatValue), this.f14682h);
            b.this.f14663w.setImageMatrix(this.f14682h);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        FloatEvaluator f14684a = new FloatEvaluator();

        e() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f14684a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
            if (floatValue < 0.1f) {
                floatValue = 0.0f;
            }
            return Float.valueOf(floatValue);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements ViewTreeObserver.OnPreDrawListener {
        f() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            b.this.E();
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class g extends m {
        g() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            return 0.0f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class h extends m {
        h() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            b bVar = b.this;
            return bVar.f14648h + bVar.f14649i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class i extends m {
        i() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            b bVar = b.this;
            return bVar.f14648h + bVar.f14650j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface j {
        void a();

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface k {
        void a();

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class l extends m {
        l() {
            super(b.this, null);
        }

        @Override // com.google.android.material.floatingactionbutton.b.m
        protected float a() {
            return b.this.f14648h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class m extends AnimatorListenerAdapter implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private boolean f14691a;

        /* renamed from: b  reason: collision with root package name */
        private float f14692b;

        /* renamed from: c  reason: collision with root package name */
        private float f14693c;

        private m() {
        }

        protected abstract float a();

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.d0((int) this.f14693c);
            this.f14691a = false;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float w10;
            if (!this.f14691a) {
                oh.g gVar = b.this.f14642b;
                if (gVar == null) {
                    w10 = 0.0f;
                } else {
                    w10 = gVar.w();
                }
                this.f14692b = w10;
                this.f14693c = a();
                this.f14691a = true;
            }
            b bVar = b.this;
            float f10 = this.f14692b;
            bVar.d0((int) (f10 + ((this.f14693c - f10) * valueAnimator.getAnimatedFraction())));
        }

        /* synthetic */ m(b bVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(FloatingActionButton floatingActionButton, nh.b bVar) {
        this.f14663w = floatingActionButton;
        this.f14664x = bVar;
        com.google.android.material.internal.g gVar = new com.google.android.material.internal.g();
        this.f14652l = gVar;
        gVar.a(I, h(new i()));
        gVar.a(J, h(new h()));
        gVar.a(K, h(new h()));
        gVar.a(L, h(new h()));
        gVar.a(M, h(new l()));
        gVar.a(N, h(new g()));
        this.f14656p = floatingActionButton.getRotation();
    }

    private boolean X() {
        if (h0.S(this.f14663w) && !this.f14663w.isInEditMode()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f14663w.getDrawable();
        if (drawable != null && this.f14658r != 0) {
            RectF rectF = this.f14666z;
            RectF rectF2 = this.A;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f14658r;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f14658r;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private void e0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new e());
    }

    private AnimatorSet f(zg.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f14663w, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f14663w, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        e0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f14663w, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        e0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.B);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f14663w, new zg.e(), new c(), new Matrix(this.B));
        gVar.e("iconScale").a(ofObject);
        arrayList.add(ofObject);
        AnimatorSet animatorSet = new AnimatorSet();
        zg.b.a(animatorSet, arrayList);
        return animatorSet;
    }

    private AnimatorSet g(float f10, float f11, float f12, int i10, int i11) {
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new d(this.f14663w.getAlpha(), f10, this.f14663w.getScaleX(), f11, this.f14663w.getScaleY(), this.f14657q, f12, new Matrix(this.B)));
        arrayList.add(ofFloat);
        zg.b.a(animatorSet, arrayList);
        animatorSet.setDuration(jh.g.f(this.f14663w.getContext(), i10, this.f14663w.getContext().getResources().getInteger(yg.g.f54194b)));
        animatorSet.setInterpolator(jh.g.g(this.f14663w.getContext(), i11, zg.a.f55942b));
        return animatorSet;
    }

    private ValueAnimator h(m mVar) {
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setInterpolator(D);
        valueAnimator.setDuration(100L);
        valueAnimator.addListener(mVar);
        valueAnimator.addUpdateListener(mVar);
        valueAnimator.setFloatValues(0.0f, 1.0f);
        return valueAnimator;
    }

    private ViewTreeObserver.OnPreDrawListener n() {
        if (this.C == null) {
            this.C = new f();
        }
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A() {
        ViewTreeObserver viewTreeObserver = this.f14663w.getViewTreeObserver();
        ViewTreeObserver.OnPreDrawListener onPreDrawListener = this.C;
        if (onPreDrawListener != null) {
            viewTreeObserver.removeOnPreDrawListener(onPreDrawListener);
            this.C = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void B(int[] iArr);

    abstract void C(float f10, float f11, float f12);

    void D(Rect rect) {
        b2.e.h(this.f14645e, "Didn't initialize content background");
        if (W()) {
            this.f14664x.b(new InsetDrawable(this.f14645e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f14664x.b(this.f14645e);
    }

    void E() {
        float rotation = this.f14663w.getRotation();
        if (this.f14656p != rotation) {
            this.f14656p = rotation;
            a0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f14662v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f14662v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).a();
            }
        }
    }

    abstract boolean H();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(ColorStateList colorStateList) {
        oh.g gVar = this.f14642b;
        if (gVar != null) {
            gVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f14644d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        oh.g gVar = this.f14642b;
        if (gVar != null) {
            gVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K(float f10) {
        if (this.f14648h != f10) {
            this.f14648h = f10;
            C(f10, this.f14649i, this.f14650j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f14646f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(zg.g gVar) {
        this.f14655o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(float f10) {
        if (this.f14649i != f10) {
            this.f14649i = f10;
            C(this.f14648h, f10, this.f14650j);
        }
    }

    final void O(float f10) {
        this.f14657q = f10;
        Matrix matrix = this.B;
        e(f10, matrix);
        this.f14663w.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void P(int i10) {
        if (this.f14658r != i10) {
            this.f14658r = i10;
            b0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f14651k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void R(float f10) {
        if (this.f14650j != f10) {
            this.f14650j = f10;
            C(this.f14648h, this.f14649i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        Drawable drawable = this.f14643c;
        if (drawable != null) {
            s1.a.o(drawable, mh.b.a(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(boolean z10) {
        this.f14647g = z10;
        c0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(oh.k kVar) {
        this.f14641a = kVar;
        oh.g gVar = this.f14642b;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        Drawable drawable = this.f14643c;
        if (drawable instanceof n) {
            ((n) drawable).setShapeAppearanceModel(kVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f14644d;
        if (aVar != null) {
            aVar.f(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void V(zg.g gVar) {
        this.f14654n = gVar;
    }

    abstract boolean W();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean Y() {
        if (this.f14646f && this.f14663w.getSizeDimension() < this.f14651k) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(k kVar, boolean z10) {
        boolean z11;
        AnimatorSet g10;
        b bVar;
        float f10;
        float f11;
        if (!w()) {
            Animator animator = this.f14653m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f14654n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (X()) {
                if (this.f14663w.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f14663w.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f14663w;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f14663w;
                    if (z11) {
                        f11 = 0.4f;
                    } else {
                        f11 = 0.0f;
                    }
                    floatingActionButton2.setScaleX(f11);
                    if (z11) {
                        f12 = 0.4f;
                    }
                    O(f12);
                }
                zg.g gVar = this.f14654n;
                if (gVar != null) {
                    g10 = f(gVar, 1.0f, 1.0f, 1.0f);
                    bVar = this;
                } else {
                    g10 = g(1.0f, 1.0f, 1.0f, E, F);
                    bVar = this;
                }
                g10.addListener(new C0169b(z10, kVar));
                ArrayList arrayList = bVar.f14660t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            this.f14663w.b(0, z10);
            this.f14663w.setAlpha(1.0f);
            this.f14663w.setScaleY(1.0f);
            this.f14663w.setScaleX(1.0f);
            O(1.0f);
            if (kVar != null) {
                kVar.a();
            }
        }
    }

    abstract void a0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b0() {
        O(this.f14657q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c0() {
        Rect rect = this.f14665y;
        o(rect);
        D(rect);
        this.f14664x.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(float f10) {
        oh.g gVar = this.f14642b;
        if (gVar != null) {
            gVar.W(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable i() {
        return this.f14645e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f14646f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.g l() {
        return this.f14655o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f14649i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Rect rect) {
        float f10;
        int s10 = s();
        if (this.f14647g) {
            f10 = j() + this.f14650j;
        } else {
            f10 = 0.0f;
        }
        int max = Math.max(s10, (int) Math.ceil(f10));
        int max2 = Math.max(s10, (int) Math.ceil(f10 * 1.5f));
        rect.set(max, max2, max, max2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f14650j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final oh.k q() {
        return this.f14641a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.g r() {
        return this.f14654n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int s() {
        if (!this.f14646f) {
            return 0;
        }
        return Math.max((this.f14651k - this.f14663w.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(k kVar, boolean z10) {
        int i10;
        b bVar;
        AnimatorSet g10;
        if (!v()) {
            Animator animator = this.f14653m;
            if (animator != null) {
                animator.cancel();
            }
            if (X()) {
                zg.g gVar = this.f14655o;
                if (gVar != null) {
                    g10 = f(gVar, 0.0f, 0.0f, 0.0f);
                    bVar = this;
                } else {
                    bVar = this;
                    g10 = bVar.g(0.0f, 0.4f, 0.4f, G, H);
                }
                g10.addListener(new a(z10, kVar));
                ArrayList arrayList = bVar.f14661u;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f14663w;
            if (z10) {
                i10 = 8;
            } else {
                i10 = 4;
            }
            floatingActionButton.b(i10, z10);
            if (kVar != null) {
                kVar.b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void u(ColorStateList colorStateList, PorterDuff.Mode mode, ColorStateList colorStateList2, int i10);

    boolean v() {
        if (this.f14663w.getVisibility() == 0) {
            if (this.f14659s != 1) {
                return false;
            }
            return true;
        } else if (this.f14659s == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean w() {
        if (this.f14663w.getVisibility() != 0) {
            if (this.f14659s != 2) {
                return false;
            }
            return true;
        } else if (this.f14659s == 1) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void x();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        oh.g gVar = this.f14642b;
        if (gVar != null) {
            oh.h.f(this.f14663w, gVar);
        }
        if (H()) {
            this.f14663w.getViewTreeObserver().addOnPreDrawListener(n());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void z();
}
