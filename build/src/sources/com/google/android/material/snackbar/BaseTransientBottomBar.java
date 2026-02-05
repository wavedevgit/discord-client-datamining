package com.google.android.material.snackbar;

import android.accessibilityservice.AccessibilityServiceInfo;
import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.AttributeSet;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import android.view.WindowInsets;
import android.view.accessibility.AccessibilityManager;
import android.widget.FrameLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import com.google.android.material.behavior.SwipeDismissBehavior;
import com.google.android.material.snackbar.b;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class BaseTransientBottomBar {

    /* renamed from: a  reason: collision with root package name */
    private final int f15326a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15327b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15328c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f15329d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f15330e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f15331f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f15332g;

    /* renamed from: h  reason: collision with root package name */
    private final Context f15333h;

    /* renamed from: i  reason: collision with root package name */
    protected final t f15334i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.material.snackbar.a f15335j;

    /* renamed from: k  reason: collision with root package name */
    private int f15336k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f15337l;

    /* renamed from: m  reason: collision with root package name */
    private q f15338m;

    /* renamed from: p  reason: collision with root package name */
    private int f15341p;

    /* renamed from: q  reason: collision with root package name */
    private int f15342q;

    /* renamed from: r  reason: collision with root package name */
    private int f15343r;

    /* renamed from: s  reason: collision with root package name */
    private int f15344s;

    /* renamed from: t  reason: collision with root package name */
    private int f15345t;

    /* renamed from: u  reason: collision with root package name */
    private int f15346u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f15347v;

    /* renamed from: w  reason: collision with root package name */
    private List f15348w;

    /* renamed from: x  reason: collision with root package name */
    private Behavior f15349x;

    /* renamed from: y  reason: collision with root package name */
    private final AccessibilityManager f15350y;
    private static final TimeInterpolator A = ah.a.f626b;
    private static final TimeInterpolator B = ah.a.f625a;
    private static final TimeInterpolator C = ah.a.f628d;
    private static final boolean E = false;
    private static final int[] F = {zg.b.W};
    private static final String G = BaseTransientBottomBar.class.getSimpleName();
    static final Handler D = new Handler(Looper.getMainLooper(), new h());

    /* renamed from: n  reason: collision with root package name */
    private boolean f15339n = false;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f15340o = new i();

    /* renamed from: z  reason: collision with root package name */
    b.InterfaceC0189b f15351z = new l();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends SwipeDismissBehavior<View> {

        /* renamed from: w  reason: collision with root package name */
        private final s f15352w = new s(this);

        /* JADX INFO: Access modifiers changed from: private */
        public void U(BaseTransientBottomBar baseTransientBottomBar) {
            this.f15352w.c(baseTransientBottomBar);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior
        public boolean J(View view) {
            return this.f15352w.a(view);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            this.f15352w.b(coordinatorLayout, view, motionEvent);
            return super.o(coordinatorLayout, view, motionEvent);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f15353a;

        a(int i10) {
            this.f15353a = i10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.R(this.f15353a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements ValueAnimator.AnimatorUpdateListener {
        b() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            BaseTransientBottomBar.this.f15334i.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements ValueAnimator.AnimatorUpdateListener {
        c() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            BaseTransientBottomBar.this.f15334i.setScaleX(floatValue);
            BaseTransientBottomBar.this.f15334i.setScaleY(floatValue);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d extends AnimatorListenerAdapter {
        d() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.S();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            BaseTransientBottomBar.this.f15335j.a(BaseTransientBottomBar.this.f15328c - BaseTransientBottomBar.this.f15326a, BaseTransientBottomBar.this.f15326a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private int f15358a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f15359b;

        e(int i10) {
            this.f15359b = i10;
            this.f15358a = i10;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            int intValue = ((Integer) valueAnimator.getAnimatedValue()).intValue();
            if (BaseTransientBottomBar.E) {
                h0.Y(BaseTransientBottomBar.this.f15334i, intValue - this.f15358a);
            } else {
                BaseTransientBottomBar.this.f15334i.setTranslationY(intValue);
            }
            this.f15358a = intValue;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f15361a;

        f(int i10) {
            this.f15361a = i10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.R(this.f15361a);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            BaseTransientBottomBar.this.f15335j.b(0, BaseTransientBottomBar.this.f15327b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private int f15363a = 0;

        g() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            int intValue = ((Integer) valueAnimator.getAnimatedValue()).intValue();
            if (BaseTransientBottomBar.E) {
                h0.Y(BaseTransientBottomBar.this.f15334i, intValue - this.f15363a);
            } else {
                BaseTransientBottomBar.this.f15334i.setTranslationY(intValue);
            }
            this.f15363a = intValue;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class h implements Handler.Callback {
        h() {
        }

        @Override // android.os.Handler.Callback
        public boolean handleMessage(Message message) {
            int i10 = message.what;
            if (i10 != 0) {
                if (i10 != 1) {
                    return false;
                }
                ((BaseTransientBottomBar) message.obj).L(message.arg1);
                return true;
            }
            ((BaseTransientBottomBar) message.obj).a0();
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class i implements Runnable {
        i() {
        }

        @Override // java.lang.Runnable
        public void run() {
            BaseTransientBottomBar baseTransientBottomBar = BaseTransientBottomBar.this;
            if (baseTransientBottomBar.f15334i != null && baseTransientBottomBar.f15333h != null) {
                int height = (com.google.android.material.internal.q.a(BaseTransientBottomBar.this.f15333h).height() - BaseTransientBottomBar.this.J()) + ((int) BaseTransientBottomBar.this.f15334i.getTranslationY());
                if (height >= BaseTransientBottomBar.this.f15345t) {
                    BaseTransientBottomBar baseTransientBottomBar2 = BaseTransientBottomBar.this;
                    baseTransientBottomBar2.f15346u = baseTransientBottomBar2.f15345t;
                    return;
                }
                ViewGroup.LayoutParams layoutParams = BaseTransientBottomBar.this.f15334i.getLayoutParams();
                if (!(layoutParams instanceof ViewGroup.MarginLayoutParams)) {
                    Log.w(BaseTransientBottomBar.G, "Unable to apply gesture inset because layout params are not MarginLayoutParams");
                    return;
                }
                BaseTransientBottomBar baseTransientBottomBar3 = BaseTransientBottomBar.this;
                baseTransientBottomBar3.f15346u = baseTransientBottomBar3.f15345t;
                ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin += BaseTransientBottomBar.this.f15345t - height;
                BaseTransientBottomBar.this.f15334i.requestLayout();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class j implements v {
        j() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            BaseTransientBottomBar.this.f15341p = windowInsetsCompat.n();
            BaseTransientBottomBar.this.f15342q = windowInsetsCompat.o();
            BaseTransientBottomBar.this.f15343r = windowInsetsCompat.p();
            BaseTransientBottomBar.this.g0();
            return windowInsetsCompat;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class k extends androidx.core.view.a {
        k() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            accessibilityNodeInfoCompat.a(1048576);
            accessibilityNodeInfoCompat.B0(true);
        }

        @Override // androidx.core.view.a
        public boolean performAccessibilityAction(View view, int i10, Bundle bundle) {
            if (i10 == 1048576) {
                BaseTransientBottomBar.this.A();
                return true;
            }
            return super.performAccessibilityAction(view, i10, bundle);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class l implements b.InterfaceC0189b {
        l() {
        }

        @Override // com.google.android.material.snackbar.b.InterfaceC0189b
        public void a(int i10) {
            Handler handler = BaseTransientBottomBar.D;
            handler.sendMessage(handler.obtainMessage(1, i10, 0, BaseTransientBottomBar.this));
        }

        @Override // com.google.android.material.snackbar.b.InterfaceC0189b
        public void show() {
            Handler handler = BaseTransientBottomBar.D;
            handler.sendMessage(handler.obtainMessage(0, BaseTransientBottomBar.this));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements Runnable {
        m() {
        }

        @Override // java.lang.Runnable
        public void run() {
            BaseTransientBottomBar.this.R(3);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements SwipeDismissBehavior.c {
        n() {
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior.c
        public void a(View view) {
            if (view.getParent() != null) {
                view.setVisibility(8);
            }
            BaseTransientBottomBar.this.B(0);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior.c
        public void b(int i10) {
            if (i10 != 0) {
                if (i10 != 1 && i10 != 2) {
                    return;
                }
                com.google.android.material.snackbar.b.c().j(BaseTransientBottomBar.this.f15351z);
                return;
            }
            com.google.android.material.snackbar.b.c().k(BaseTransientBottomBar.this.f15351z);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements Runnable {
        o() {
        }

        @Override // java.lang.Runnable
        public void run() {
            t tVar = BaseTransientBottomBar.this.f15334i;
            if (tVar == null) {
                return;
            }
            if (tVar.getParent() != null) {
                BaseTransientBottomBar.this.f15334i.setVisibility(0);
            }
            if (BaseTransientBottomBar.this.f15334i.getAnimationMode() == 1) {
                BaseTransientBottomBar.this.c0();
            } else {
                BaseTransientBottomBar.this.e0();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class p extends AnimatorListenerAdapter {
        p() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.S();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class q implements View.OnAttachStateChangeListener, ViewTreeObserver.OnGlobalLayoutListener {

        /* renamed from: d  reason: collision with root package name */
        private final WeakReference f15373d;

        /* renamed from: e  reason: collision with root package name */
        private final WeakReference f15374e;

        private q(BaseTransientBottomBar baseTransientBottomBar, View view) {
            this.f15373d = new WeakReference(baseTransientBottomBar);
            this.f15374e = new WeakReference(view);
        }

        static q a(BaseTransientBottomBar baseTransientBottomBar, View view) {
            q qVar = new q(baseTransientBottomBar, view);
            if (h0.R(view)) {
                com.google.android.material.internal.o.b(view, qVar);
            }
            view.addOnAttachStateChangeListener(qVar);
            return qVar;
        }

        private boolean d() {
            if (this.f15373d.get() == null) {
                c();
                return true;
            }
            return false;
        }

        View b() {
            return (View) this.f15374e.get();
        }

        void c() {
            if (this.f15374e.get() != null) {
                ((View) this.f15374e.get()).removeOnAttachStateChangeListener(this);
                com.google.android.material.internal.o.j((View) this.f15374e.get(), this);
            }
            this.f15374e.clear();
            this.f15373d.clear();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (!d() && ((BaseTransientBottomBar) this.f15373d.get()).f15339n) {
                ((BaseTransientBottomBar) this.f15373d.get()).T();
            }
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            if (d()) {
                return;
            }
            com.google.android.material.internal.o.b(view, this);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            if (d()) {
                return;
            }
            com.google.android.material.internal.o.j(view, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class r {
        public abstract void a(Object obj, int i10);

        public abstract void b(Object obj);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class s {

        /* renamed from: a  reason: collision with root package name */
        private b.InterfaceC0189b f15375a;

        public s(SwipeDismissBehavior swipeDismissBehavior) {
            swipeDismissBehavior.Q(0.1f);
            swipeDismissBehavior.O(0.6f);
            swipeDismissBehavior.R(0);
        }

        public boolean a(View view) {
            return view instanceof t;
        }

        public void b(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            int actionMasked = motionEvent.getActionMasked();
            if (actionMasked != 0) {
                if (actionMasked == 1 || actionMasked == 3) {
                    com.google.android.material.snackbar.b.c().k(this.f15375a);
                }
            } else if (coordinatorLayout.w(view, (int) motionEvent.getX(), (int) motionEvent.getY())) {
                com.google.android.material.snackbar.b.c().j(this.f15375a);
            }
        }

        public void c(BaseTransientBottomBar baseTransientBottomBar) {
            this.f15375a = baseTransientBottomBar.f15351z;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class t extends FrameLayout {

        /* renamed from: w  reason: collision with root package name */
        private static final View.OnTouchListener f15376w = new a();

        /* renamed from: d  reason: collision with root package name */
        private BaseTransientBottomBar f15377d;

        /* renamed from: e  reason: collision with root package name */
        ph.k f15378e;

        /* renamed from: i  reason: collision with root package name */
        private int f15379i;

        /* renamed from: o  reason: collision with root package name */
        private final float f15380o;

        /* renamed from: p  reason: collision with root package name */
        private final float f15381p;

        /* renamed from: q  reason: collision with root package name */
        private final int f15382q;

        /* renamed from: r  reason: collision with root package name */
        private final int f15383r;

        /* renamed from: s  reason: collision with root package name */
        private ColorStateList f15384s;

        /* renamed from: t  reason: collision with root package name */
        private PorterDuff.Mode f15385t;

        /* renamed from: u  reason: collision with root package name */
        private Rect f15386u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f15387v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements View.OnTouchListener {
            a() {
            }

            @Override // android.view.View.OnTouchListener
            public boolean onTouch(View view, MotionEvent motionEvent) {
                return true;
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public t(Context context, AttributeSet attributeSet) {
            super(sh.a.c(context, attributeSet, 0, 0), attributeSet);
            Context context2 = getContext();
            TypedArray obtainStyledAttributes = context2.obtainStyledAttributes(attributeSet, zg.k.U5);
            if (obtainStyledAttributes.hasValue(zg.k.f55745b6)) {
                h0.v0(this, obtainStyledAttributes.getDimensionPixelSize(zg.k.f55745b6, 0));
            }
            this.f15379i = obtainStyledAttributes.getInt(zg.k.X5, 0);
            if (obtainStyledAttributes.hasValue(zg.k.f55765d6) || obtainStyledAttributes.hasValue(zg.k.f55775e6)) {
                this.f15378e = ph.k.e(context2, attributeSet, 0, 0).m();
            }
            this.f15380o = obtainStyledAttributes.getFloat(zg.k.Y5, 1.0f);
            setBackgroundTintList(mh.c.a(context2, obtainStyledAttributes, zg.k.Z5));
            setBackgroundTintMode(com.google.android.material.internal.o.i(obtainStyledAttributes.getInt(zg.k.f55735a6, -1), PorterDuff.Mode.SRC_IN));
            this.f15381p = obtainStyledAttributes.getFloat(zg.k.W5, 1.0f);
            this.f15382q = obtainStyledAttributes.getDimensionPixelSize(zg.k.V5, -1);
            this.f15383r = obtainStyledAttributes.getDimensionPixelSize(zg.k.f55755c6, -1);
            obtainStyledAttributes.recycle();
            setOnTouchListener(f15376w);
            setFocusable(true);
            if (getBackground() == null) {
                h0.r0(this, d());
            }
        }

        private Drawable d() {
            int k10 = fh.a.k(this, zg.b.f55558o, zg.b.f55554k, getBackgroundOverlayColorAlpha());
            ph.k kVar = this.f15378e;
            Drawable z10 = kVar != null ? BaseTransientBottomBar.z(k10, kVar) : BaseTransientBottomBar.y(k10, getResources());
            if (this.f15384s != null) {
                Drawable r10 = s1.a.r(z10);
                s1.a.o(r10, this.f15384s);
                return r10;
            }
            return s1.a.r(z10);
        }

        private void e(ViewGroup.MarginLayoutParams marginLayoutParams) {
            this.f15386u = new Rect(marginLayoutParams.leftMargin, marginLayoutParams.topMargin, marginLayoutParams.rightMargin, marginLayoutParams.bottomMargin);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void setBaseTransientBottomBar(BaseTransientBottomBar baseTransientBottomBar) {
            this.f15377d = baseTransientBottomBar;
        }

        void c(ViewGroup viewGroup) {
            this.f15387v = true;
            viewGroup.addView(this);
            this.f15387v = false;
        }

        float getActionTextColorAlpha() {
            return this.f15381p;
        }

        int getAnimationMode() {
            return this.f15379i;
        }

        float getBackgroundOverlayColorAlpha() {
            return this.f15380o;
        }

        int getMaxInlineActionWidth() {
            return this.f15383r;
        }

        int getMaxWidth() {
            return this.f15382q;
        }

        @Override // android.view.ViewGroup, android.view.View
        protected void onAttachedToWindow() {
            super.onAttachedToWindow();
            BaseTransientBottomBar baseTransientBottomBar = this.f15377d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.O();
            }
            h0.k0(this);
        }

        @Override // android.view.ViewGroup, android.view.View
        protected void onDetachedFromWindow() {
            super.onDetachedFromWindow();
            BaseTransientBottomBar baseTransientBottomBar = this.f15377d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.P();
            }
        }

        @Override // android.widget.FrameLayout, android.view.ViewGroup, android.view.View
        protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
            super.onLayout(z10, i10, i11, i12, i13);
            BaseTransientBottomBar baseTransientBottomBar = this.f15377d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.Q();
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // android.widget.FrameLayout, android.view.View
        public void onMeasure(int i10, int i11) {
            super.onMeasure(i10, i11);
            if (this.f15382q > 0) {
                int measuredWidth = getMeasuredWidth();
                int i12 = this.f15382q;
                if (measuredWidth > i12) {
                    super.onMeasure(View.MeasureSpec.makeMeasureSpec(i12, 1073741824), i11);
                }
            }
        }

        void setAnimationMode(int i10) {
            this.f15379i = i10;
        }

        @Override // android.view.View
        public void setBackground(Drawable drawable) {
            setBackgroundDrawable(drawable);
        }

        @Override // android.view.View
        public void setBackgroundDrawable(Drawable drawable) {
            if (drawable != null && this.f15384s != null) {
                drawable = s1.a.r(drawable.mutate());
                s1.a.o(drawable, this.f15384s);
                s1.a.p(drawable, this.f15385t);
            }
            super.setBackgroundDrawable(drawable);
        }

        @Override // android.view.View
        public void setBackgroundTintList(ColorStateList colorStateList) {
            this.f15384s = colorStateList;
            if (getBackground() != null) {
                Drawable r10 = s1.a.r(getBackground().mutate());
                s1.a.o(r10, colorStateList);
                s1.a.p(r10, this.f15385t);
                if (r10 != getBackground()) {
                    super.setBackgroundDrawable(r10);
                }
            }
        }

        @Override // android.view.View
        public void setBackgroundTintMode(PorterDuff.Mode mode) {
            this.f15385t = mode;
            if (getBackground() != null) {
                Drawable r10 = s1.a.r(getBackground().mutate());
                s1.a.p(r10, mode);
                if (r10 != getBackground()) {
                    super.setBackgroundDrawable(r10);
                }
            }
        }

        @Override // android.view.View
        public void setLayoutParams(ViewGroup.LayoutParams layoutParams) {
            super.setLayoutParams(layoutParams);
            if (!this.f15387v && (layoutParams instanceof ViewGroup.MarginLayoutParams)) {
                e((ViewGroup.MarginLayoutParams) layoutParams);
                BaseTransientBottomBar baseTransientBottomBar = this.f15377d;
                if (baseTransientBottomBar != null) {
                    baseTransientBottomBar.g0();
                }
            }
        }

        @Override // android.view.View
        public void setOnClickListener(View.OnClickListener onClickListener) {
            View.OnTouchListener onTouchListener;
            if (onClickListener != null) {
                onTouchListener = null;
            } else {
                onTouchListener = f15376w;
            }
            setOnTouchListener(onTouchListener);
            super.setOnClickListener(onClickListener);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BaseTransientBottomBar(Context context, ViewGroup viewGroup, View view, com.google.android.material.snackbar.a aVar) {
        if (viewGroup != null) {
            if (view != null) {
                if (aVar != null) {
                    this.f15332g = viewGroup;
                    this.f15335j = aVar;
                    this.f15333h = context;
                    com.google.android.material.internal.l.a(context);
                    t tVar = (t) LayoutInflater.from(context).inflate(H(), viewGroup, false);
                    this.f15334i = tVar;
                    tVar.setBaseTransientBottomBar(this);
                    if (view instanceof SnackbarContentLayout) {
                        SnackbarContentLayout snackbarContentLayout = (SnackbarContentLayout) view;
                        snackbarContentLayout.c(tVar.getActionTextColorAlpha());
                        snackbarContentLayout.setMaxInlineActionWidth(tVar.getMaxInlineActionWidth());
                    }
                    tVar.addView(view);
                    h0.p0(tVar, 1);
                    h0.x0(tVar, 1);
                    h0.w0(tVar, true);
                    h0.D0(tVar, new j());
                    h0.n0(tVar, new k());
                    this.f15350y = (AccessibilityManager) context.getSystemService("accessibility");
                    this.f15328c = kh.g.f(context, zg.b.F, androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION);
                    this.f15326a = kh.g.f(context, zg.b.F, 150);
                    this.f15327b = kh.g.f(context, zg.b.G, 75);
                    this.f15329d = kh.g.g(context, zg.b.P, B);
                    this.f15331f = kh.g.g(context, zg.b.P, C);
                    this.f15330e = kh.g.g(context, zg.b.P, A);
                    return;
                }
                throw new IllegalArgumentException("Transient bottom bar must have non-null callback");
            }
            throw new IllegalArgumentException("Transient bottom bar must have non-null content");
        }
        throw new IllegalArgumentException("Transient bottom bar must have non-null parent");
    }

    private ValueAnimator C(float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f15329d);
        ofFloat.addUpdateListener(new b());
        return ofFloat;
    }

    private ValueAnimator G(float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f15331f);
        ofFloat.addUpdateListener(new c());
        return ofFloat;
    }

    private int I() {
        int height = this.f15334i.getHeight();
        ViewGroup.LayoutParams layoutParams = this.f15334i.getLayoutParams();
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return height + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }
        return height;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int J() {
        int[] iArr = new int[2];
        this.f15334i.getLocationInWindow(iArr);
        return iArr[1] + this.f15334i.getHeight();
    }

    private boolean N() {
        ViewGroup.LayoutParams layoutParams = this.f15334i.getLayoutParams();
        if ((layoutParams instanceof CoordinatorLayout.f) && (((CoordinatorLayout.f) layoutParams).f() instanceof SwipeDismissBehavior)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void T() {
        this.f15344s = x();
        g0();
    }

    private void W(CoordinatorLayout.f fVar) {
        SwipeDismissBehavior swipeDismissBehavior = this.f15349x;
        if (swipeDismissBehavior == null) {
            swipeDismissBehavior = F();
        }
        if (swipeDismissBehavior instanceof Behavior) {
            ((Behavior) swipeDismissBehavior).U(this);
        }
        swipeDismissBehavior.P(new n());
        fVar.o(swipeDismissBehavior);
        if (D() == null) {
            fVar.f2979g = 80;
        }
    }

    private boolean Y() {
        if (this.f15345t > 0 && !this.f15337l && N()) {
            return true;
        }
        return false;
    }

    private void b0() {
        if (X()) {
            v();
            return;
        }
        if (this.f15334i.getParent() != null) {
            this.f15334i.setVisibility(0);
        }
        S();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c0() {
        ValueAnimator C2 = C(0.0f, 1.0f);
        ValueAnimator G2 = G(0.8f, 1.0f);
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(C2, G2);
        animatorSet.setDuration(this.f15326a);
        animatorSet.addListener(new p());
        animatorSet.start();
    }

    private void d0(int i10) {
        ValueAnimator C2 = C(1.0f, 0.0f);
        C2.setDuration(this.f15327b);
        C2.addListener(new a(i10));
        C2.start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e0() {
        int I = I();
        if (E) {
            h0.Y(this.f15334i, I);
        } else {
            this.f15334i.setTranslationY(I);
        }
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setIntValues(I, 0);
        valueAnimator.setInterpolator(this.f15330e);
        valueAnimator.setDuration(this.f15328c);
        valueAnimator.addListener(new d());
        valueAnimator.addUpdateListener(new e(I));
        valueAnimator.start();
    }

    private void f0(int i10) {
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setIntValues(0, I());
        valueAnimator.setInterpolator(this.f15330e);
        valueAnimator.setDuration(this.f15328c);
        valueAnimator.addListener(new f(i10));
        valueAnimator.addUpdateListener(new g());
        valueAnimator.start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g0() {
        int i10;
        boolean z10;
        ViewGroup.LayoutParams layoutParams = this.f15334i.getLayoutParams();
        if (!(layoutParams instanceof ViewGroup.MarginLayoutParams)) {
            Log.w(G, "Unable to update margins because layout params are not MarginLayoutParams");
        } else if (this.f15334i.f15386u == null) {
            Log.w(G, "Unable to update margins because original view margins are not set");
        } else if (this.f15334i.getParent() != null) {
            if (D() != null) {
                i10 = this.f15344s;
            } else {
                i10 = this.f15341p;
            }
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
            int i11 = this.f15334i.f15386u.bottom + i10;
            int i12 = this.f15334i.f15386u.left + this.f15342q;
            int i13 = this.f15334i.f15386u.right + this.f15343r;
            int i14 = this.f15334i.f15386u.top;
            if (marginLayoutParams.bottomMargin == i11 && marginLayoutParams.leftMargin == i12 && marginLayoutParams.rightMargin == i13 && marginLayoutParams.topMargin == i14) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (z10) {
                marginLayoutParams.bottomMargin = i11;
                marginLayoutParams.leftMargin = i12;
                marginLayoutParams.rightMargin = i13;
                marginLayoutParams.topMargin = i14;
                this.f15334i.requestLayout();
            }
            if ((z10 || this.f15346u != this.f15345t) && Build.VERSION.SDK_INT >= 29 && Y()) {
                this.f15334i.removeCallbacks(this.f15340o);
                this.f15334i.post(this.f15340o);
            }
        }
    }

    private void w(int i10) {
        if (this.f15334i.getAnimationMode() == 1) {
            d0(i10);
        } else {
            f0(i10);
        }
    }

    private int x() {
        if (D() == null) {
            return 0;
        }
        int[] iArr = new int[2];
        D().getLocationOnScreen(iArr);
        int i10 = iArr[1];
        int[] iArr2 = new int[2];
        this.f15332g.getLocationOnScreen(iArr2);
        return (iArr2[1] + this.f15332g.getHeight()) - i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static GradientDrawable y(int i10, Resources resources) {
        float dimension = resources.getDimension(zg.d.f55587d0);
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setShape(0);
        gradientDrawable.setCornerRadius(dimension);
        gradientDrawable.setColor(i10);
        return gradientDrawable;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static ph.g z(int i10, ph.k kVar) {
        ph.g gVar = new ph.g(kVar);
        gVar.X(ColorStateList.valueOf(i10));
        return gVar;
    }

    public void A() {
        B(3);
    }

    protected void B(int i10) {
        com.google.android.material.snackbar.b.c().b(this.f15351z, i10);
    }

    public View D() {
        q qVar = this.f15338m;
        if (qVar == null) {
            return null;
        }
        return qVar.b();
    }

    public int E() {
        return this.f15336k;
    }

    protected SwipeDismissBehavior F() {
        return new Behavior();
    }

    protected int H() {
        if (K()) {
            return zg.h.f55675t;
        }
        return zg.h.f55657b;
    }

    protected boolean K() {
        TypedArray obtainStyledAttributes = this.f15333h.obtainStyledAttributes(F);
        int resourceId = obtainStyledAttributes.getResourceId(0, -1);
        obtainStyledAttributes.recycle();
        if (resourceId == -1) {
            return false;
        }
        return true;
    }

    final void L(int i10) {
        if (X() && this.f15334i.getVisibility() == 0) {
            w(i10);
        } else {
            R(i10);
        }
    }

    public boolean M() {
        return com.google.android.material.snackbar.b.c().e(this.f15351z);
    }

    void O() {
        WindowInsets rootWindowInsets;
        int i10;
        if (Build.VERSION.SDK_INT >= 29 && (rootWindowInsets = this.f15334i.getRootWindowInsets()) != null) {
            i10 = rootWindowInsets.getMandatorySystemGestureInsets().bottom;
            this.f15345t = i10;
            g0();
        }
    }

    void P() {
        if (M()) {
            D.post(new m());
        }
    }

    void Q() {
        if (this.f15347v) {
            b0();
            this.f15347v = false;
        }
    }

    void R(int i10) {
        com.google.android.material.snackbar.b.c().h(this.f15351z);
        List list = this.f15348w;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                ((r) this.f15348w.get(size)).a(this, i10);
            }
        }
        ViewParent parent = this.f15334i.getParent();
        if (parent instanceof ViewGroup) {
            ((ViewGroup) parent).removeView(this.f15334i);
        }
    }

    void S() {
        com.google.android.material.snackbar.b.c().i(this.f15351z);
        List list = this.f15348w;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                ((r) this.f15348w.get(size)).b(this);
            }
        }
    }

    public BaseTransientBottomBar U(View view) {
        q a10;
        q qVar = this.f15338m;
        if (qVar != null) {
            qVar.c();
        }
        if (view == null) {
            a10 = null;
        } else {
            a10 = q.a(this, view);
        }
        this.f15338m = a10;
        return this;
    }

    public BaseTransientBottomBar V(int i10) {
        this.f15336k = i10;
        return this;
    }

    boolean X() {
        AccessibilityManager accessibilityManager = this.f15350y;
        if (accessibilityManager == null) {
            return true;
        }
        List<AccessibilityServiceInfo> enabledAccessibilityServiceList = accessibilityManager.getEnabledAccessibilityServiceList(1);
        if (enabledAccessibilityServiceList != null && enabledAccessibilityServiceList.isEmpty()) {
            return true;
        }
        return false;
    }

    public void Z() {
        com.google.android.material.snackbar.b.c().m(E(), this.f15351z);
    }

    final void a0() {
        if (this.f15334i.getParent() == null) {
            ViewGroup.LayoutParams layoutParams = this.f15334i.getLayoutParams();
            if (layoutParams instanceof CoordinatorLayout.f) {
                W((CoordinatorLayout.f) layoutParams);
            }
            this.f15334i.c(this.f15332g);
            T();
            this.f15334i.setVisibility(4);
        }
        if (h0.S(this.f15334i)) {
            b0();
        } else {
            this.f15347v = true;
        }
    }

    public BaseTransientBottomBar u(r rVar) {
        if (rVar == null) {
            return this;
        }
        if (this.f15348w == null) {
            this.f15348w = new ArrayList();
        }
        this.f15348w.add(rVar);
        return this;
    }

    void v() {
        this.f15334i.post(new o());
    }
}
