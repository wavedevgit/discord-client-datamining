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
import qh.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    static final TimeInterpolator D = bh.a.f6756c;
    private static final int E = ah.b.F;
    private static final int F = ah.b.P;
    private static final int G = ah.b.G;
    private static final int H = ah.b.N;
    static final int[] I = {16842919, 16842910};
    static final int[] J = {16843623, 16842908, 16842910};
    static final int[] K = {16842908, 16842910};
    static final int[] L = {16843623, 16842910};
    static final int[] M = {16842910};
    static final int[] N = new int[0];
    private ViewTreeObserver.OnPreDrawListener C;

    /* renamed from: a  reason: collision with root package name */
    qh.k f15015a;

    /* renamed from: b  reason: collision with root package name */
    qh.g f15016b;

    /* renamed from: c  reason: collision with root package name */
    Drawable f15017c;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.floatingactionbutton.a f15018d;

    /* renamed from: e  reason: collision with root package name */
    Drawable f15019e;

    /* renamed from: f  reason: collision with root package name */
    boolean f15020f;

    /* renamed from: h  reason: collision with root package name */
    float f15022h;

    /* renamed from: i  reason: collision with root package name */
    float f15023i;

    /* renamed from: j  reason: collision with root package name */
    float f15024j;

    /* renamed from: k  reason: collision with root package name */
    int f15025k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.material.internal.g f15026l;

    /* renamed from: m  reason: collision with root package name */
    private Animator f15027m;

    /* renamed from: n  reason: collision with root package name */
    private bh.g f15028n;

    /* renamed from: o  reason: collision with root package name */
    private bh.g f15029o;

    /* renamed from: p  reason: collision with root package name */
    private float f15030p;

    /* renamed from: r  reason: collision with root package name */
    private int f15032r;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f15034t;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f15035u;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f15036v;

    /* renamed from: w  reason: collision with root package name */
    final FloatingActionButton f15037w;

    /* renamed from: x  reason: collision with root package name */
    final ph.b f15038x;

    /* renamed from: g  reason: collision with root package name */
    boolean f15021g = true;

    /* renamed from: q  reason: collision with root package name */
    private float f15031q = 1.0f;

    /* renamed from: s  reason: collision with root package name */
    private int f15033s = 0;

    /* renamed from: y  reason: collision with root package name */
    private final Rect f15039y = new Rect();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f15040z = new RectF();
    private final RectF A = new RectF();
    private final Matrix B = new Matrix();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15041a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f15042b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f15043c;

        a(boolean z10, k kVar) {
            this.f15042b = z10;
            this.f15043c = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f15041a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            int i10;
            b.this.f15033s = 0;
            b.this.f15027m = null;
            if (!this.f15041a) {
                FloatingActionButton floatingActionButton = b.this.f15037w;
                boolean z10 = this.f15042b;
                if (z10) {
                    i10 = 8;
                } else {
                    i10 = 4;
                }
                floatingActionButton.b(i10, z10);
                k kVar = this.f15043c;
                if (kVar != null) {
                    kVar.b();
                }
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15037w.b(0, this.f15042b);
            b.this.f15033s = 1;
            b.this.f15027m = animator;
            this.f15041a = false;
        }
    }

    /* renamed from: com.google.android.material.floatingactionbutton.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0177b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f15045a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f15046b;

        C0177b(boolean z10, k kVar) {
            this.f15045a = z10;
            this.f15046b = kVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.f15033s = 0;
            b.this.f15027m = null;
            k kVar = this.f15046b;
            if (kVar != null) {
                kVar.a();
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            b.this.f15037w.b(0, this.f15045a);
            b.this.f15033s = 2;
            b.this.f15027m = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends bh.f {
        c() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            b.this.f15031q = f10;
            return super.a(f10, matrix, matrix2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f15049a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ float f15050b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ float f15051c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f15052d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ float f15053e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ float f15054f;

        /* renamed from: g  reason: collision with root package name */
        final /* synthetic */ float f15055g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ Matrix f15056h;

        d(float f10, float f11, float f12, float f13, float f14, float f15, float f16, Matrix matrix) {
            this.f15049a = f10;
            this.f15050b = f11;
            this.f15051c = f12;
            this.f15052d = f13;
            this.f15053e = f14;
            this.f15054f = f15;
            this.f15055g = f16;
            this.f15056h = matrix;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            b.this.f15037w.setAlpha(bh.a.b(this.f15049a, this.f15050b, 0.0f, 0.2f, floatValue));
            b.this.f15037w.setScaleX(bh.a.a(this.f15051c, this.f15052d, floatValue));
            b.this.f15037w.setScaleY(bh.a.a(this.f15053e, this.f15052d, floatValue));
            b.this.f15031q = bh.a.a(this.f15054f, this.f15055g, floatValue);
            b.this.e(bh.a.a(this.f15054f, this.f15055g, floatValue), this.f15056h);
            b.this.f15037w.setImageMatrix(this.f15056h);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        FloatEvaluator f15058a = new FloatEvaluator();

        e() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Float evaluate(float f10, Float f11, Float f12) {
            float floatValue = this.f15058a.evaluate(f10, (Number) f11, (Number) f12).floatValue();
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
            return bVar.f15022h + bVar.f15023i;
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
            return bVar.f15022h + bVar.f15024j;
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
            return b.this.f15022h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class m extends AnimatorListenerAdapter implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private boolean f15065a;

        /* renamed from: b  reason: collision with root package name */
        private float f15066b;

        /* renamed from: c  reason: collision with root package name */
        private float f15067c;

        private m() {
        }

        protected abstract float a();

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            b.this.d0((int) this.f15067c);
            this.f15065a = false;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float w10;
            if (!this.f15065a) {
                qh.g gVar = b.this.f15016b;
                if (gVar == null) {
                    w10 = 0.0f;
                } else {
                    w10 = gVar.w();
                }
                this.f15066b = w10;
                this.f15067c = a();
                this.f15065a = true;
            }
            b bVar = b.this;
            float f10 = this.f15066b;
            bVar.d0((int) (f10 + ((this.f15067c - f10) * valueAnimator.getAnimatedFraction())));
        }

        /* synthetic */ m(b bVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(FloatingActionButton floatingActionButton, ph.b bVar) {
        this.f15037w = floatingActionButton;
        this.f15038x = bVar;
        com.google.android.material.internal.g gVar = new com.google.android.material.internal.g();
        this.f15026l = gVar;
        gVar.a(I, h(new i()));
        gVar.a(J, h(new h()));
        gVar.a(K, h(new h()));
        gVar.a(L, h(new h()));
        gVar.a(M, h(new l()));
        gVar.a(N, h(new g()));
        this.f15030p = floatingActionButton.getRotation();
    }

    private boolean X() {
        if (h0.S(this.f15037w) && !this.f15037w.isInEditMode()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(float f10, Matrix matrix) {
        matrix.reset();
        Drawable drawable = this.f15037w.getDrawable();
        if (drawable != null && this.f15032r != 0) {
            RectF rectF = this.f15040z;
            RectF rectF2 = this.A;
            rectF.set(0.0f, 0.0f, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
            int i10 = this.f15032r;
            rectF2.set(0.0f, 0.0f, i10, i10);
            matrix.setRectToRect(rectF, rectF2, Matrix.ScaleToFit.CENTER);
            int i11 = this.f15032r;
            matrix.postScale(f10, f10, i11 / 2.0f, i11 / 2.0f);
        }
    }

    private void e0(ObjectAnimator objectAnimator) {
        if (Build.VERSION.SDK_INT != 26) {
            return;
        }
        objectAnimator.setEvaluator(new e());
    }

    private AnimatorSet f(bh.g gVar, float f10, float f11, float f12) {
        ArrayList arrayList = new ArrayList();
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f15037w, View.ALPHA, f10);
        gVar.e(ViewProps.OPACITY).a(ofFloat);
        arrayList.add(ofFloat);
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this.f15037w, View.SCALE_X, f11);
        gVar.e("scale").a(ofFloat2);
        e0(ofFloat2);
        arrayList.add(ofFloat2);
        ObjectAnimator ofFloat3 = ObjectAnimator.ofFloat(this.f15037w, View.SCALE_Y, f11);
        gVar.e("scale").a(ofFloat3);
        e0(ofFloat3);
        arrayList.add(ofFloat3);
        e(f12, this.B);
        ObjectAnimator ofObject = ObjectAnimator.ofObject(this.f15037w, new bh.e(), new c(), new Matrix(this.B));
        gVar.e("iconScale").a(ofObject);
        arrayList.add(ofObject);
        AnimatorSet animatorSet = new AnimatorSet();
        bh.b.a(animatorSet, arrayList);
        return animatorSet;
    }

    private AnimatorSet g(float f10, float f11, float f12, int i10, int i11) {
        AnimatorSet animatorSet = new AnimatorSet();
        ArrayList arrayList = new ArrayList();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new d(this.f15037w.getAlpha(), f10, this.f15037w.getScaleX(), f11, this.f15037w.getScaleY(), this.f15031q, f12, new Matrix(this.B)));
        arrayList.add(ofFloat);
        bh.b.a(animatorSet, arrayList);
        animatorSet.setDuration(lh.g.f(this.f15037w.getContext(), i10, this.f15037w.getContext().getResources().getInteger(ah.g.f747b)));
        animatorSet.setInterpolator(lh.g.g(this.f15037w.getContext(), i11, bh.a.f6755b));
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
        ViewTreeObserver viewTreeObserver = this.f15037w.getViewTreeObserver();
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
        b2.e.h(this.f15019e, "Didn't initialize content background");
        if (W()) {
            this.f15038x.b(new InsetDrawable(this.f15019e, rect.left, rect.top, rect.right, rect.bottom));
            return;
        }
        this.f15038x.b(this.f15019e);
    }

    void E() {
        float rotation = this.f15037w.getRotation();
        if (this.f15030p != rotation) {
            this.f15030p = rotation;
            a0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void F() {
        ArrayList arrayList = this.f15036v;
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((j) it.next()).b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        ArrayList arrayList = this.f15036v;
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
        qh.g gVar = this.f15016b;
        if (gVar != null) {
            gVar.setTintList(colorStateList);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15018d;
        if (aVar != null) {
            aVar.c(colorStateList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(PorterDuff.Mode mode) {
        qh.g gVar = this.f15016b;
        if (gVar != null) {
            gVar.setTintMode(mode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K(float f10) {
        if (this.f15022h != f10) {
            this.f15022h = f10;
            C(f10, this.f15023i, this.f15024j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(boolean z10) {
        this.f15020f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void M(bh.g gVar) {
        this.f15029o = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(float f10) {
        if (this.f15023i != f10) {
            this.f15023i = f10;
            C(this.f15022h, f10, this.f15024j);
        }
    }

    final void O(float f10) {
        this.f15031q = f10;
        Matrix matrix = this.B;
        e(f10, matrix);
        this.f15037w.setImageMatrix(matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void P(int i10) {
        if (this.f15032r != i10) {
            this.f15032r = i10;
            b0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(int i10) {
        this.f15025k = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void R(float f10) {
        if (this.f15024j != f10) {
            this.f15024j = f10;
            C(this.f15022h, this.f15023i, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S(ColorStateList colorStateList) {
        Drawable drawable = this.f15017c;
        if (drawable != null) {
            s1.a.o(drawable, oh.b.a(colorStateList));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(boolean z10) {
        this.f15021g = z10;
        c0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void U(qh.k kVar) {
        this.f15015a = kVar;
        qh.g gVar = this.f15016b;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        Drawable drawable = this.f15017c;
        if (drawable instanceof n) {
            ((n) drawable).setShapeAppearanceModel(kVar);
        }
        com.google.android.material.floatingactionbutton.a aVar = this.f15018d;
        if (aVar != null) {
            aVar.f(kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void V(bh.g gVar) {
        this.f15028n = gVar;
    }

    abstract boolean W();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean Y() {
        if (this.f15020f && this.f15037w.getSizeDimension() < this.f15025k) {
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
            Animator animator = this.f15027m;
            if (animator != null) {
                animator.cancel();
            }
            if (this.f15028n == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (X()) {
                if (this.f15037w.getVisibility() != 0) {
                    float f12 = 0.0f;
                    this.f15037w.setAlpha(0.0f);
                    FloatingActionButton floatingActionButton = this.f15037w;
                    if (z11) {
                        f10 = 0.4f;
                    } else {
                        f10 = 0.0f;
                    }
                    floatingActionButton.setScaleY(f10);
                    FloatingActionButton floatingActionButton2 = this.f15037w;
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
                bh.g gVar = this.f15028n;
                if (gVar != null) {
                    g10 = f(gVar, 1.0f, 1.0f, 1.0f);
                    bVar = this;
                } else {
                    g10 = g(1.0f, 1.0f, 1.0f, E, F);
                    bVar = this;
                }
                g10.addListener(new C0177b(z10, kVar));
                ArrayList arrayList = bVar.f15034t;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            this.f15037w.b(0, z10);
            this.f15037w.setAlpha(1.0f);
            this.f15037w.setScaleY(1.0f);
            this.f15037w.setScaleX(1.0f);
            O(1.0f);
            if (kVar != null) {
                kVar.a();
            }
        }
    }

    abstract void a0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b0() {
        O(this.f15031q);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c0() {
        Rect rect = this.f15039y;
        o(rect);
        D(rect);
        this.f15038x.a(rect.left, rect.top, rect.right, rect.bottom);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(float f10) {
        qh.g gVar = this.f15016b;
        if (gVar != null) {
            gVar.W(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Drawable i() {
        return this.f15019e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f15020f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final bh.g l() {
        return this.f15029o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f15023i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Rect rect) {
        float f10;
        int s10 = s();
        if (this.f15021g) {
            f10 = j() + this.f15024j;
        } else {
            f10 = 0.0f;
        }
        int max = Math.max(s10, (int) Math.ceil(f10));
        int max2 = Math.max(s10, (int) Math.ceil(f10 * 1.5f));
        rect.set(max, max2, max, max2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float p() {
        return this.f15024j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final qh.k q() {
        return this.f15015a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final bh.g r() {
        return this.f15028n;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int s() {
        if (!this.f15020f) {
            return 0;
        }
        return Math.max((this.f15025k - this.f15037w.getSizeDimension()) / 2, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(k kVar, boolean z10) {
        int i10;
        b bVar;
        AnimatorSet g10;
        if (!v()) {
            Animator animator = this.f15027m;
            if (animator != null) {
                animator.cancel();
            }
            if (X()) {
                bh.g gVar = this.f15029o;
                if (gVar != null) {
                    g10 = f(gVar, 0.0f, 0.0f, 0.0f);
                    bVar = this;
                } else {
                    bVar = this;
                    g10 = bVar.g(0.0f, 0.4f, 0.4f, G, H);
                }
                g10.addListener(new a(z10, kVar));
                ArrayList arrayList = bVar.f15035u;
                if (arrayList != null) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        g10.addListener((Animator.AnimatorListener) it.next());
                    }
                }
                g10.start();
                return;
            }
            FloatingActionButton floatingActionButton = this.f15037w;
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
        if (this.f15037w.getVisibility() == 0) {
            if (this.f15033s != 1) {
                return false;
            }
            return true;
        } else if (this.f15033s == 2) {
            return false;
        } else {
            return true;
        }
    }

    boolean w() {
        if (this.f15037w.getVisibility() != 0) {
            if (this.f15033s != 2) {
                return false;
            }
            return true;
        } else if (this.f15033s == 1) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void x();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        qh.g gVar = this.f15016b;
        if (gVar != null) {
            qh.h.f(this.f15037w, gVar);
        }
        if (H()) {
            this.f15037w.getViewTreeObserver().addOnPreDrawListener(n());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void z();
}
