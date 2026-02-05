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
import ph.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    static final TimeInterpolator D = ah.a.f627c;
    private static final int E = zg.b.F;
    private static final int F = zg.b.P;
    private static final int G = zg.b.G;
    private static final int H = zg.b.N;
    static final int[] I = {16842919, 16842910};
    static final int[] J = {16843623, 16842908, 16842910};
    static final int[] K = {16842908, 16842910};
    static final int[] L = {16843623, 16842910};
    static final int[] M = {16842910};
    static final int[] N = new int[0];
    private ViewTreeObserver.OnPreDrawListener C;

    /* renamed from: a  reason: collision with root package name */
    ph.k f15035a;

    /* renamed from: b  reason: collision with root package name */
    ph.g f15036b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f15037c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f15038d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f15039e;

    /* renamed from: f  reason: collision with root package name */
    boolean f15040f;

    /* renamed from: h  reason: collision with root package name */
    float f15042h;

    /* renamed from: i  reason: collision with root package name */
    float f15043i;

    /* renamed from: j  reason: collision with root package name */
    float f15044j;

    /* renamed from: k  reason: collision with root package name */
    int f15045k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.material.internal.g f15046l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f15047m;

    /* renamed from: n  reason: collision with root package name */
    private ah.g f15048n;

    /* renamed from: o  reason: collision with root package name */
    private ah.g f15049o;

    /* renamed from: p  reason: collision with root package name */
    private float f15050p;

    /* renamed from: r  reason: collision with root package name */
    private int f15052r;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f15054t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f15055u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f15056v;

    /* renamed from: w  reason: collision with root package name */
    final FloatingActionButton f15057w;

    /* renamed from: x  reason: collision with root package name */
    final oh.b f15058x;

    /* renamed from: g  reason: collision with root package name */
    boolean f15041g = true;

    /* renamed from: q  reason: collision with root package name */
    private float f15051q = 1.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f15053s = 0;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f15059y = new Rect();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f15060z = new RectF();
    private final RectF A = new RectF();
    private final Matrix B = new Matrix();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15061a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f15062b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f15063c;

        a(boolean z10, k kVar) {
            this.f15062b = z10;
            this.f15063c = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f15061a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            b.this.f15053s = 0;
            b.this.f15047m = null;
            if (!this.f15061a) {
                FloatingActionButton floatingActionButton = b.this.f15057w;
                boolean z10 = this.f15062b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                k kVar = this.f15063c;
                if (kVar != null) {
                    kVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15057w.b(0, this.f15062b);
            b.this.f15053s = 1;
            b.this.f15047m = animator;
            this.f15061a = false;
        }
    }

    /* renamed from: com.google.android.material.floatingactionbutton.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0185b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f15065a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f15066b;

        C0185b(boolean z10, k kVar) {
            this.f15065a = z10;
            this.f15066b = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.f15053s = 0;
            b.this.f15047m = null;
            k kVar = this.f15066b;
            if (kVar != null) {
                kVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15057w.b(0, this.f15065a);
            b.this.f15053s = 2;
            b.this.f15047m = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends ah.f {
        c() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            b.this.f15051q = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f15069a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ float f15070b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ float f15071c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f15072d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f15073e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ float f15074f;

        /* renamed from: g  reason: collision with root package name */
        final /* synthetic */ float f15075g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ Matrix f15076h;

        d(float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix) {
            this.f15069a = f10;
            this.f15070b = f11;
            this.f15071c = f12;
            this.f15072d = f13;
            this.f15073e = f14;
            this.f15074f = f15;
            this.f15075g = f16;
            this.f15076h = matrix;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            b.this.f15057w.setAlpha(ah.a.b(this.f15069a, this.f15070b, 0.0f, 0.2f, floatValue));
            b.this.f15057w.setScaleX(ah.a.a(this.f15071c, this.f15072d, floatValue));
            b.this.f15057w.setScaleY(ah.a.a(this.f15073e, this.f15072d, floatValue));
            b.this.f15051q = ah.a.a(this.f15074f, this.f15075g, floatValue);
            b.this.e(ah.a.a(this.f15074f, this.f15075g, floatValue), this.f15076h);
            b.this.f15057w.setImageMatrix(this.f15076h);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        FloatEvaluator f15078a = new FloatEvaluator();

        e() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f15078a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
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
            return bVar.f15042h + bVar.f15043i;
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
            return bVar.f15042h + bVar.f15044j;
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
            return b.this.f15042h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class m extends AnimatorListenerAdapter implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15085a;

        /* renamed from: b  reason: collision with root package name */
        private float f15086b;

        /* renamed from: c  reason: collision with root package name */
        private float f15087c;

        private m() {
        }

        protected abstract float a();

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.d0((int) this.f15087c);
            this.f15085a = false;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float w10;
            if (!this.f15085a) {
                ph.g gVar = b.this.f15036b;
                if (gVar == null) {
                    w10 = 0.0f;
                } else {
                    w10 = gVar.w();
                }
                this.f15086b = w10;
                this.f15087c = a();
                this.f15085a = true;
            }
            b bVar = b.this;
            float f10 = this.f15086b;
            bVar.d0((int) (f10 + ((this.f15087c - f10) * valueAnimator.getAnimatedFraction())));
        }

        /* synthetic */ m(b bVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(FloatingActionButton floatingActionButton, oh.b bVar) {
        this.f15057w = floatingActionButton;
        this.f15058x = bVar;
        com.google.android.material.internal.g gVar = new com.google.android.material.internal.g();
        this.f15046l = gVar;
        gVar.a(I, h(new i()));
        gVar.a(J, h(new h()));
        gVar.a(K, h(new h()));
        gVar.a(L, h(new h()));
        gVar.a(M, h(new l()));
        gVar.a(N, h(new g()));
        this.f15050p = floatingActionButton.getRotation();
    }

    private boolean X() {
        if (h0.S(this.f15057w) && !this.f15057w.isInEditMode()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f15057w.getDrawable();
        if (drawable != null && this.f15052r != 0) {
            RectF rectF = this.f15060z;
            RectF rectF2 = this.A;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f15052r;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f15052r;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private void e0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new e());
    }

    private AnimatorSet f(ah.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f15057w, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f15057w, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        e0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f15057w, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        e0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.B);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f15057w, new ah.e(), new c(), new Matrix(this.B));
        gVar.e("iconScale").a(ofObject);
        arrayList.add(ofObject);
        AnimatorSet animatorSet = new AnimatorSet();
        ah.b.a(animatorSet, arrayList);
        return animatorSet;
    }

    private AnimatorSet g(float f10, float f11, float f12, int i10, int i11) {
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new d(this.f15057w.getAlpha(), f10, this.f15057w.getScaleX(), f11, this.f15057w.getScaleY(), this.f15051q, f12, new Matrix(this.B)));
        arrayList.add(ofFloat);
        ah.b.a(animatorSet, arrayList);
        animatorSet.setDuration(kh.g.f(this.f15057w.getContext(), i10, this.f15057w.getContext().getResources().getInteger(zg.g.f55652b)));
        animatorSet.setInterpolator(kh.g.g(this.f15057w.getContext(), i11, ah.a.f626b));
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
        ViewTreeObserver viewTreeObserver = this.f15057w.getViewTreeObserver();
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
        b2.e.h(this.f15039e, "Didn't initialize content background");
        if (W()) {
            this.f15058x.b(new InsetDrawable(this.f15039e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f15058x.b(this.f15039e);
    }

    void E() {
        float rotation = this.f15057w.getRotation();
        if (this.f15050p != rotation) {
            this.f15050p = rotation;
            a0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f15056v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f15056v;
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
        ph.g gVar = this.f15036b;
        if (gVar != null) {
            gVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15038d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        ph.g gVar = this.f15036b;
        if (gVar != null) {
            gVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K(float f10) {
        if (this.f15042h != f10) {
            this.f15042h = f10;
            C(f10, this.f15043i, this.f15044j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f15040f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(ah.g gVar) {
        this.f15049o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(float f10) {
        if (this.f15043i != f10) {
            this.f15043i = f10;
            C(this.f15042h, f10, this.f15044j);
        }
    }

    final void O(float f10) {
        this.f15051q = f10;
        Matrix matrix = this.B;
        e(f10, matrix);
        this.f15057w.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void P(int i10) {
        if (this.f15052r != i10) {
            this.f15052r = i10;
            b0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f15045k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void R(float f10) {
        if (this.f15044j != f10) {
            this.f15044j = f10;
            C(this.f15042h, this.f15043i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        Drawable drawable = this.f15037c;
        if (drawable != null) {
            s1.a.o(drawable, nh.b.a(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(boolean z10) {
        this.f15041g = z10;
        c0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(ph.k kVar) {
        this.f15035a = kVar;
        ph.g gVar = this.f15036b;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        Drawable drawable = this.f15037c;
        if (drawable instanceof n) {
            ((n) drawable).setShapeAppearanceModel(kVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15038d;
        if (aVar != null) {
            aVar.f(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void V(ah.g gVar) {
        this.f15048n = gVar;
    }

    abstract boolean W();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean Y() {
        if (this.f15040f && this.f15057w.getSizeDimension() < this.f15045k) {
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
            Animator animator = this.f15047m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f15048n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (X()) {
                if (this.f15057w.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f15057w.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f15057w;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f15057w;
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
                ah.g gVar = this.f15048n;
                if (gVar != null) {
                    g10 = f(gVar, 1.0f, 1.0f, 1.0f);
                    bVar = this;
                } else {
                    g10 = g(1.0f, 1.0f, 1.0f, E, F);
                    bVar = this;
                }
                g10.addListener(new C0185b(z10, kVar));
                ArrayList arrayList = bVar.f15054t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            this.f15057w.b(0, z10);
            this.f15057w.setAlpha(1.0f);
            this.f15057w.setScaleY(1.0f);
            this.f15057w.setScaleX(1.0f);
            O(1.0f);
            if (kVar != null) {
                kVar.a();
            }
        }
    }

    abstract void a0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b0() {
        O(this.f15051q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c0() {
        Rect rect = this.f15059y;
        o(rect);
        D(rect);
        this.f15058x.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(float f10) {
        ph.g gVar = this.f15036b;
        if (gVar != null) {
            gVar.W(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable i() {
        return this.f15039e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f15040f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ah.g l() {
        return this.f15049o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f15043i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Rect rect) {
        float f10;
        int s10 = s();
        if (this.f15041g) {
            f10 = j() + this.f15044j;
        } else {
            f10 = 0.0f;
        }
        int max = Math.max(s10, (int) Math.ceil(f10));
        int max2 = Math.max(s10, (int) Math.ceil(f10 * 1.5f));
        rect.set(max, max2, max, max2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f15044j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ph.k q() {
        return this.f15035a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ah.g r() {
        return this.f15048n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int s() {
        if (!this.f15040f) {
            return 0;
        }
        return Math.max((this.f15045k - this.f15057w.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(k kVar, boolean z10) {
        int i10;
        b bVar;
        AnimatorSet g10;
        if (!v()) {
            Animator animator = this.f15047m;
            if (animator != null) {
                animator.cancel();
            }
            if (X()) {
                ah.g gVar = this.f15049o;
                if (gVar != null) {
                    g10 = f(gVar, 0.0f, 0.0f, 0.0f);
                    bVar = this;
                } else {
                    bVar = this;
                    g10 = bVar.g(0.0f, 0.4f, 0.4f, G, H);
                }
                g10.addListener(new a(z10, kVar));
                ArrayList arrayList = bVar.f15055u;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f15057w;
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
        if (this.f15057w.getVisibility() == 0) {
            if (this.f15053s != 1) {
                return false;
            }
            return true;
        } else if (this.f15053s == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean w() {
        if (this.f15057w.getVisibility() != 0) {
            if (this.f15053s != 2) {
                return false;
            }
            return true;
        } else if (this.f15053s == 1) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void x();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        ph.g gVar = this.f15036b;
        if (gVar != null) {
            ph.h.f(this.f15057w, gVar);
        }
        if (H()) {
            this.f15057w.getViewTreeObserver().addOnPreDrawListener(n());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void z();
}
