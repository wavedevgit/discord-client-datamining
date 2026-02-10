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
import androidx.core.view.i0;
import androidx.core.view.w;
import com.google.android.material.behavior.SwipeDismissBehavior;
import com.google.android.material.snackbar.b;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class BaseTransientBottomBar {

    /* renamed from: a  reason: collision with root package name */
    private final int f16197a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16198b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16199c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f16200d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f16201e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f16202f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f16203g;

    /* renamed from: h  reason: collision with root package name */
    private final Context f16204h;

    /* renamed from: i  reason: collision with root package name */
    protected final t f16205i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.material.snackbar.a f16206j;

    /* renamed from: k  reason: collision with root package name */
    private int f16207k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f16208l;

    /* renamed from: m  reason: collision with root package name */
    private q f16209m;

    /* renamed from: p  reason: collision with root package name */
    private int f16212p;

    /* renamed from: q  reason: collision with root package name */
    private int f16213q;

    /* renamed from: r  reason: collision with root package name */
    private int f16214r;

    /* renamed from: s  reason: collision with root package name */
    private int f16215s;

    /* renamed from: t  reason: collision with root package name */
    private int f16216t;

    /* renamed from: u  reason: collision with root package name */
    private int f16217u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f16218v;

    /* renamed from: w  reason: collision with root package name */
    private List f16219w;

    /* renamed from: x  reason: collision with root package name */
    private Behavior f16220x;

    /* renamed from: y  reason: collision with root package name */
    private final AccessibilityManager f16221y;
    private static final TimeInterpolator A = ch.a.f8277b;
    private static final TimeInterpolator B = ch.a.f8276a;
    private static final TimeInterpolator C = ch.a.f8279d;
    private static final int[] E = {bh.b.f6728c0};
    private static final String F = BaseTransientBottomBar.class.getSimpleName();
    static final Handler D = new Handler(Looper.getMainLooper(), new h());

    /* renamed from: n  reason: collision with root package name */
    private boolean f16210n = false;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f16211o = new i();

    /* renamed from: z  reason: collision with root package name */
    b.InterfaceC0189b f16222z = new l();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends SwipeDismissBehavior<View> {

        /* renamed from: w  reason: collision with root package name */
        private final s f16223w = new s(this);

        /* JADX INFO: Access modifiers changed from: private */
        public void U(BaseTransientBottomBar baseTransientBottomBar) {
            this.f16223w.c(baseTransientBottomBar);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior
        public boolean J(View view) {
            return this.f16223w.a(view);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            this.f16223w.b(coordinatorLayout, view, motionEvent);
            return super.o(coordinatorLayout, view, motionEvent);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f16224a;

        a(int i10) {
            this.f16224a = i10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.Q(this.f16224a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements ValueAnimator.AnimatorUpdateListener {
        b() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            BaseTransientBottomBar.this.f16205i.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
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
            BaseTransientBottomBar.this.f16205i.setScaleX(floatValue);
            BaseTransientBottomBar.this.f16205i.setScaleY(floatValue);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d extends AnimatorListenerAdapter {
        d() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.R();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            BaseTransientBottomBar.this.f16206j.a(BaseTransientBottomBar.this.f16199c - BaseTransientBottomBar.this.f16197a, BaseTransientBottomBar.this.f16197a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements ValueAnimator.AnimatorUpdateListener {
        e() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            BaseTransientBottomBar.this.f16205i.setTranslationY(((Integer) valueAnimator.getAnimatedValue()).intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f16230a;

        f(int i10) {
            this.f16230a = i10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.Q(this.f16230a);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            BaseTransientBottomBar.this.f16206j.b(0, BaseTransientBottomBar.this.f16198b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements ValueAnimator.AnimatorUpdateListener {
        g() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            BaseTransientBottomBar.this.f16205i.setTranslationY(((Integer) valueAnimator.getAnimatedValue()).intValue());
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
                ((BaseTransientBottomBar) message.obj).K(message.arg1);
                return true;
            }
            ((BaseTransientBottomBar) message.obj).Z();
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
            if (baseTransientBottomBar.f16205i != null && baseTransientBottomBar.f16204h != null) {
                int height = (com.google.android.material.internal.r.a(BaseTransientBottomBar.this.f16204h).height() - BaseTransientBottomBar.this.I()) + ((int) BaseTransientBottomBar.this.f16205i.getTranslationY());
                if (height >= BaseTransientBottomBar.this.f16216t) {
                    BaseTransientBottomBar baseTransientBottomBar2 = BaseTransientBottomBar.this;
                    baseTransientBottomBar2.f16217u = baseTransientBottomBar2.f16216t;
                    return;
                }
                ViewGroup.LayoutParams layoutParams = BaseTransientBottomBar.this.f16205i.getLayoutParams();
                if (!(layoutParams instanceof ViewGroup.MarginLayoutParams)) {
                    Log.w(BaseTransientBottomBar.F, "Unable to apply gesture inset because layout params are not MarginLayoutParams");
                    return;
                }
                BaseTransientBottomBar baseTransientBottomBar3 = BaseTransientBottomBar.this;
                baseTransientBottomBar3.f16217u = baseTransientBottomBar3.f16216t;
                ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin += BaseTransientBottomBar.this.f16216t - height;
                BaseTransientBottomBar.this.f16205i.requestLayout();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class j implements w {
        j() {
        }

        @Override // androidx.core.view.w
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            BaseTransientBottomBar.this.f16212p = windowInsetsCompat.n();
            BaseTransientBottomBar.this.f16213q = windowInsetsCompat.o();
            BaseTransientBottomBar.this.f16214r = windowInsetsCompat.p();
            BaseTransientBottomBar.this.f0();
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
                BaseTransientBottomBar.this.z();
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
            BaseTransientBottomBar.this.Q(3);
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
            BaseTransientBottomBar.this.A(0);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior.c
        public void b(int i10) {
            if (i10 != 0) {
                if (i10 != 1 && i10 != 2) {
                    return;
                }
                com.google.android.material.snackbar.b.c().j(BaseTransientBottomBar.this.f16222z);
                return;
            }
            com.google.android.material.snackbar.b.c().k(BaseTransientBottomBar.this.f16222z);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements Runnable {
        o() {
        }

        @Override // java.lang.Runnable
        public void run() {
            t tVar = BaseTransientBottomBar.this.f16205i;
            if (tVar == null) {
                return;
            }
            if (tVar.getParent() != null) {
                BaseTransientBottomBar.this.f16205i.setVisibility(0);
            }
            if (BaseTransientBottomBar.this.f16205i.getAnimationMode() == 1) {
                BaseTransientBottomBar.this.b0();
            } else {
                BaseTransientBottomBar.this.d0();
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
            BaseTransientBottomBar.this.R();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class q implements View.OnAttachStateChangeListener, ViewTreeObserver.OnGlobalLayoutListener {

        /* renamed from: d  reason: collision with root package name */
        private final WeakReference f16241d;

        /* renamed from: e  reason: collision with root package name */
        private final WeakReference f16242e;

        private q(BaseTransientBottomBar baseTransientBottomBar, View view) {
            this.f16241d = new WeakReference(baseTransientBottomBar);
            this.f16242e = new WeakReference(view);
        }

        static q a(BaseTransientBottomBar baseTransientBottomBar, View view) {
            q qVar = new q(baseTransientBottomBar, view);
            if (view.isAttachedToWindow()) {
                com.google.android.material.internal.p.b(view, qVar);
            }
            view.addOnAttachStateChangeListener(qVar);
            return qVar;
        }

        private boolean d() {
            if (this.f16241d.get() == null) {
                c();
                return true;
            }
            return false;
        }

        View b() {
            return (View) this.f16242e.get();
        }

        void c() {
            if (this.f16242e.get() != null) {
                ((View) this.f16242e.get()).removeOnAttachStateChangeListener(this);
                com.google.android.material.internal.p.j((View) this.f16242e.get(), this);
            }
            this.f16242e.clear();
            this.f16241d.clear();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (!d() && ((BaseTransientBottomBar) this.f16241d.get()).f16210n) {
                ((BaseTransientBottomBar) this.f16241d.get()).S();
            }
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            if (d()) {
                return;
            }
            com.google.android.material.internal.p.b(view, this);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            if (d()) {
                return;
            }
            com.google.android.material.internal.p.j(view, this);
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
        private b.InterfaceC0189b f16243a;

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
                    com.google.android.material.snackbar.b.c().k(this.f16243a);
                }
            } else if (coordinatorLayout.A(view, (int) motionEvent.getX(), (int) motionEvent.getY())) {
                com.google.android.material.snackbar.b.c().j(this.f16243a);
            }
        }

        public void c(BaseTransientBottomBar baseTransientBottomBar) {
            this.f16243a = baseTransientBottomBar.f16222z;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class t extends FrameLayout {

        /* renamed from: w  reason: collision with root package name */
        private static final View.OnTouchListener f16244w = new a();

        /* renamed from: d  reason: collision with root package name */
        private BaseTransientBottomBar f16245d;

        /* renamed from: e  reason: collision with root package name */
        th.l f16246e;

        /* renamed from: i  reason: collision with root package name */
        private int f16247i;

        /* renamed from: o  reason: collision with root package name */
        private final float f16248o;

        /* renamed from: p  reason: collision with root package name */
        private final float f16249p;

        /* renamed from: q  reason: collision with root package name */
        private final int f16250q;

        /* renamed from: r  reason: collision with root package name */
        private final int f16251r;

        /* renamed from: s  reason: collision with root package name */
        private ColorStateList f16252s;

        /* renamed from: t  reason: collision with root package name */
        private PorterDuff.Mode f16253t;

        /* renamed from: u  reason: collision with root package name */
        private Rect f16254u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f16255v;

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
            super(wh.a.d(context, attributeSet, 0, 0), attributeSet);
            Context context2 = getContext();
            TypedArray obtainStyledAttributes = context2.obtainStyledAttributes(attributeSet, bh.l.f7172w6);
            if (obtainStyledAttributes.hasValue(bh.l.D6)) {
                setElevation(obtainStyledAttributes.getDimensionPixelSize(bh.l.D6, 0));
            }
            this.f16247i = obtainStyledAttributes.getInt(bh.l.f7199z6, 0);
            if (obtainStyledAttributes.hasValue(bh.l.F6) || obtainStyledAttributes.hasValue(bh.l.G6)) {
                this.f16246e = th.l.e(context2, attributeSet, 0, 0).m();
            }
            this.f16248o = obtainStyledAttributes.getFloat(bh.l.A6, 1.0f);
            setBackgroundTintList(qh.c.a(context2, obtainStyledAttributes, bh.l.B6));
            setBackgroundTintMode(com.google.android.material.internal.p.i(obtainStyledAttributes.getInt(bh.l.C6, -1), PorterDuff.Mode.SRC_IN));
            this.f16249p = obtainStyledAttributes.getFloat(bh.l.f7190y6, 1.0f);
            this.f16250q = obtainStyledAttributes.getDimensionPixelSize(bh.l.f7181x6, -1);
            this.f16251r = obtainStyledAttributes.getDimensionPixelSize(bh.l.E6, -1);
            obtainStyledAttributes.recycle();
            setOnTouchListener(f16244w);
            setFocusable(true);
            if (getBackground() == null) {
                setBackground(d());
            }
        }

        private Drawable d() {
            int k10 = jh.a.k(this, bh.b.f6751o, bh.b.f6741j, getBackgroundOverlayColorAlpha());
            th.l lVar = this.f16246e;
            Drawable y10 = lVar != null ? BaseTransientBottomBar.y(k10, lVar) : BaseTransientBottomBar.x(k10, getResources());
            if (this.f16252s != null) {
                Drawable r10 = s1.a.r(y10);
                r10.setTintList(this.f16252s);
                return r10;
            }
            return s1.a.r(y10);
        }

        private void e(ViewGroup.MarginLayoutParams marginLayoutParams) {
            this.f16254u = new Rect(marginLayoutParams.leftMargin, marginLayoutParams.topMargin, marginLayoutParams.rightMargin, marginLayoutParams.bottomMargin);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void setBaseTransientBottomBar(BaseTransientBottomBar baseTransientBottomBar) {
            this.f16245d = baseTransientBottomBar;
        }

        void c(ViewGroup viewGroup) {
            this.f16255v = true;
            viewGroup.addView(this);
            this.f16255v = false;
        }

        float getActionTextColorAlpha() {
            return this.f16249p;
        }

        int getAnimationMode() {
            return this.f16247i;
        }

        float getBackgroundOverlayColorAlpha() {
            return this.f16248o;
        }

        int getMaxInlineActionWidth() {
            return this.f16251r;
        }

        int getMaxWidth() {
            return this.f16250q;
        }

        @Override // android.view.ViewGroup, android.view.View
        protected void onAttachedToWindow() {
            super.onAttachedToWindow();
            BaseTransientBottomBar baseTransientBottomBar = this.f16245d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.N();
            }
            requestApplyInsets();
        }

        @Override // android.view.ViewGroup, android.view.View
        protected void onDetachedFromWindow() {
            super.onDetachedFromWindow();
            BaseTransientBottomBar baseTransientBottomBar = this.f16245d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.O();
            }
        }

        @Override // android.widget.FrameLayout, android.view.ViewGroup, android.view.View
        protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
            super.onLayout(z10, i10, i11, i12, i13);
            BaseTransientBottomBar baseTransientBottomBar = this.f16245d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.P();
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // android.widget.FrameLayout, android.view.View
        public void onMeasure(int i10, int i11) {
            super.onMeasure(i10, i11);
            if (this.f16250q > 0) {
                int measuredWidth = getMeasuredWidth();
                int i12 = this.f16250q;
                if (measuredWidth > i12) {
                    super.onMeasure(View.MeasureSpec.makeMeasureSpec(i12, 1073741824), i11);
                }
            }
        }

        void setAnimationMode(int i10) {
            this.f16247i = i10;
        }

        @Override // android.view.View
        public void setBackground(Drawable drawable) {
            setBackgroundDrawable(drawable);
        }

        @Override // android.view.View
        public void setBackgroundDrawable(Drawable drawable) {
            if (drawable != null && this.f16252s != null) {
                drawable = s1.a.r(drawable.mutate());
                drawable.setTintList(this.f16252s);
                drawable.setTintMode(this.f16253t);
            }
            super.setBackgroundDrawable(drawable);
        }

        @Override // android.view.View
        public void setBackgroundTintList(ColorStateList colorStateList) {
            this.f16252s = colorStateList;
            if (getBackground() != null) {
                Drawable r10 = s1.a.r(getBackground().mutate());
                r10.setTintList(colorStateList);
                r10.setTintMode(this.f16253t);
                if (r10 != getBackground()) {
                    super.setBackgroundDrawable(r10);
                }
            }
        }

        @Override // android.view.View
        public void setBackgroundTintMode(PorterDuff.Mode mode) {
            this.f16253t = mode;
            if (getBackground() != null) {
                Drawable r10 = s1.a.r(getBackground().mutate());
                r10.setTintMode(mode);
                if (r10 != getBackground()) {
                    super.setBackgroundDrawable(r10);
                }
            }
        }

        @Override // android.view.View
        public void setLayoutParams(ViewGroup.LayoutParams layoutParams) {
            super.setLayoutParams(layoutParams);
            if (!this.f16255v && (layoutParams instanceof ViewGroup.MarginLayoutParams)) {
                e((ViewGroup.MarginLayoutParams) layoutParams);
                BaseTransientBottomBar baseTransientBottomBar = this.f16245d;
                if (baseTransientBottomBar != null) {
                    baseTransientBottomBar.f0();
                }
            }
        }

        @Override // android.view.View
        public void setOnClickListener(View.OnClickListener onClickListener) {
            View.OnTouchListener onTouchListener;
            if (onClickListener != null) {
                onTouchListener = null;
            } else {
                onTouchListener = f16244w;
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
                    this.f16203g = viewGroup;
                    this.f16206j = aVar;
                    this.f16204h = context;
                    com.google.android.material.internal.m.a(context);
                    t tVar = (t) LayoutInflater.from(context).inflate(G(), viewGroup, false);
                    this.f16205i = tVar;
                    tVar.setBaseTransientBottomBar(this);
                    if (view instanceof SnackbarContentLayout) {
                        SnackbarContentLayout snackbarContentLayout = (SnackbarContentLayout) view;
                        snackbarContentLayout.c(tVar.getActionTextColorAlpha());
                        snackbarContentLayout.setMaxInlineActionWidth(tVar.getMaxInlineActionWidth());
                    }
                    tVar.addView(view);
                    tVar.setAccessibilityLiveRegion(1);
                    tVar.setImportantForAccessibility(1);
                    tVar.setFitsSystemWindows(true);
                    i0.x0(tVar, new j());
                    i0.k0(tVar, new k());
                    this.f16221y = (AccessibilityManager) context.getSystemService("accessibility");
                    this.f16199c = oh.g.f(context, bh.b.J, androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION);
                    this.f16197a = oh.g.f(context, bh.b.J, 150);
                    this.f16198b = oh.g.f(context, bh.b.K, 75);
                    this.f16200d = oh.g.g(context, bh.b.T, B);
                    this.f16202f = oh.g.g(context, bh.b.T, C);
                    this.f16201e = oh.g.g(context, bh.b.T, A);
                    return;
                }
                throw new IllegalArgumentException("Transient bottom bar must have non-null callback");
            }
            throw new IllegalArgumentException("Transient bottom bar must have non-null content");
        }
        throw new IllegalArgumentException("Transient bottom bar must have non-null parent");
    }

    private ValueAnimator B(float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f16200d);
        ofFloat.addUpdateListener(new b());
        return ofFloat;
    }

    private ValueAnimator F(float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f16202f);
        ofFloat.addUpdateListener(new c());
        return ofFloat;
    }

    private int H() {
        int height = this.f16205i.getHeight();
        ViewGroup.LayoutParams layoutParams = this.f16205i.getLayoutParams();
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return height + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }
        return height;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int I() {
        int[] iArr = new int[2];
        this.f16205i.getLocationInWindow(iArr);
        return iArr[1] + this.f16205i.getHeight();
    }

    private boolean M() {
        ViewGroup.LayoutParams layoutParams = this.f16205i.getLayoutParams();
        if ((layoutParams instanceof CoordinatorLayout.f) && (((CoordinatorLayout.f) layoutParams).f() instanceof SwipeDismissBehavior)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void S() {
        this.f16215s = w();
        f0();
    }

    private void V(CoordinatorLayout.f fVar) {
        SwipeDismissBehavior swipeDismissBehavior = this.f16220x;
        if (swipeDismissBehavior == null) {
            swipeDismissBehavior = E();
        }
        if (swipeDismissBehavior instanceof Behavior) {
            ((Behavior) swipeDismissBehavior).U(this);
        }
        swipeDismissBehavior.P(new n());
        fVar.o(swipeDismissBehavior);
        if (C() == null) {
            fVar.f3008g = 80;
        }
    }

    private boolean X() {
        if (this.f16216t > 0 && !this.f16208l && M()) {
            return true;
        }
        return false;
    }

    private void a0() {
        if (W()) {
            u();
            return;
        }
        if (this.f16205i.getParent() != null) {
            this.f16205i.setVisibility(0);
        }
        R();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void b0() {
        ValueAnimator B2 = B(0.0f, 1.0f);
        ValueAnimator F2 = F(0.8f, 1.0f);
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(B2, F2);
        animatorSet.setDuration(this.f16197a);
        animatorSet.addListener(new p());
        animatorSet.start();
    }

    private void c0(int i10) {
        ValueAnimator B2 = B(1.0f, 0.0f);
        B2.setDuration(this.f16198b);
        B2.addListener(new a(i10));
        B2.start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void d0() {
        int H = H();
        this.f16205i.setTranslationY(H);
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setIntValues(H, 0);
        valueAnimator.setInterpolator(this.f16201e);
        valueAnimator.setDuration(this.f16199c);
        valueAnimator.addListener(new d());
        valueAnimator.addUpdateListener(new e());
        valueAnimator.start();
    }

    private void e0(int i10) {
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setIntValues(0, H());
        valueAnimator.setInterpolator(this.f16201e);
        valueAnimator.setDuration(this.f16199c);
        valueAnimator.addListener(new f(i10));
        valueAnimator.addUpdateListener(new g());
        valueAnimator.start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void f0() {
        int i10;
        boolean z10;
        ViewGroup.LayoutParams layoutParams = this.f16205i.getLayoutParams();
        if (!(layoutParams instanceof ViewGroup.MarginLayoutParams)) {
            Log.w(F, "Unable to update margins because layout params are not MarginLayoutParams");
        } else if (this.f16205i.f16254u == null) {
            Log.w(F, "Unable to update margins because original view margins are not set");
        } else if (this.f16205i.getParent() != null) {
            if (C() != null) {
                i10 = this.f16215s;
            } else {
                i10 = this.f16212p;
            }
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
            int i11 = this.f16205i.f16254u.bottom + i10;
            int i12 = this.f16205i.f16254u.left + this.f16213q;
            int i13 = this.f16205i.f16254u.right + this.f16214r;
            int i14 = this.f16205i.f16254u.top;
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
                this.f16205i.requestLayout();
            }
            if ((z10 || this.f16217u != this.f16216t) && Build.VERSION.SDK_INT >= 29 && X()) {
                this.f16205i.removeCallbacks(this.f16211o);
                this.f16205i.post(this.f16211o);
            }
        }
    }

    private void v(int i10) {
        if (this.f16205i.getAnimationMode() == 1) {
            c0(i10);
        } else {
            e0(i10);
        }
    }

    private int w() {
        if (C() == null) {
            return 0;
        }
        int[] iArr = new int[2];
        C().getLocationOnScreen(iArr);
        int i10 = iArr[1];
        int[] iArr2 = new int[2];
        this.f16203g.getLocationOnScreen(iArr2);
        return (iArr2[1] + this.f16203g.getHeight()) - i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static GradientDrawable x(int i10, Resources resources) {
        float dimension = resources.getDimension(bh.d.f6819w0);
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setShape(0);
        gradientDrawable.setCornerRadius(dimension);
        gradientDrawable.setColor(i10);
        return gradientDrawable;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static th.h y(int i10, th.l lVar) {
        th.h hVar = new th.h(lVar);
        hVar.f0(ColorStateList.valueOf(i10));
        return hVar;
    }

    protected void A(int i10) {
        com.google.android.material.snackbar.b.c().b(this.f16222z, i10);
    }

    public View C() {
        q qVar = this.f16209m;
        if (qVar == null) {
            return null;
        }
        return qVar.b();
    }

    public int D() {
        return this.f16207k;
    }

    protected SwipeDismissBehavior E() {
        return new Behavior();
    }

    protected int G() {
        if (J()) {
            return bh.h.f6895w;
        }
        return bh.h.f6875c;
    }

    protected boolean J() {
        TypedArray obtainStyledAttributes = this.f16204h.obtainStyledAttributes(E);
        int resourceId = obtainStyledAttributes.getResourceId(0, -1);
        obtainStyledAttributes.recycle();
        if (resourceId == -1) {
            return false;
        }
        return true;
    }

    final void K(int i10) {
        if (W() && this.f16205i.getVisibility() == 0) {
            v(i10);
        } else {
            Q(i10);
        }
    }

    public boolean L() {
        return com.google.android.material.snackbar.b.c().e(this.f16222z);
    }

    void N() {
        WindowInsets rootWindowInsets;
        int i10;
        if (Build.VERSION.SDK_INT >= 29 && (rootWindowInsets = this.f16205i.getRootWindowInsets()) != null) {
            i10 = rootWindowInsets.getMandatorySystemGestureInsets().bottom;
            this.f16216t = i10;
            f0();
        }
    }

    void O() {
        if (L()) {
            D.post(new m());
        }
    }

    void P() {
        if (this.f16218v) {
            a0();
            this.f16218v = false;
        }
    }

    void Q(int i10) {
        com.google.android.material.snackbar.b.c().h(this.f16222z);
        List list = this.f16219w;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                ((r) this.f16219w.get(size)).a(this, i10);
            }
        }
        ViewParent parent = this.f16205i.getParent();
        if (parent instanceof ViewGroup) {
            ((ViewGroup) parent).removeView(this.f16205i);
        }
    }

    void R() {
        com.google.android.material.snackbar.b.c().i(this.f16222z);
        List list = this.f16219w;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                ((r) this.f16219w.get(size)).b(this);
            }
        }
    }

    public BaseTransientBottomBar T(View view) {
        q a10;
        q qVar = this.f16209m;
        if (qVar != null) {
            qVar.c();
        }
        if (view == null) {
            a10 = null;
        } else {
            a10 = q.a(this, view);
        }
        this.f16209m = a10;
        return this;
    }

    public BaseTransientBottomBar U(int i10) {
        this.f16207k = i10;
        return this;
    }

    boolean W() {
        AccessibilityManager accessibilityManager = this.f16221y;
        if (accessibilityManager == null) {
            return true;
        }
        List<AccessibilityServiceInfo> enabledAccessibilityServiceList = accessibilityManager.getEnabledAccessibilityServiceList(1);
        if (enabledAccessibilityServiceList != null && enabledAccessibilityServiceList.isEmpty()) {
            return true;
        }
        return false;
    }

    public void Y() {
        com.google.android.material.snackbar.b.c().m(D(), this.f16222z);
    }

    final void Z() {
        if (this.f16205i.getParent() == null) {
            ViewGroup.LayoutParams layoutParams = this.f16205i.getLayoutParams();
            if (layoutParams instanceof CoordinatorLayout.f) {
                V((CoordinatorLayout.f) layoutParams);
            }
            this.f16205i.c(this.f16203g);
            S();
            this.f16205i.setVisibility(4);
        }
        if (this.f16205i.isLaidOut()) {
            a0();
        } else {
            this.f16218v = true;
        }
    }

    public BaseTransientBottomBar t(r rVar) {
        if (rVar == null) {
            return this;
        }
        if (this.f16219w == null) {
            this.f16219w = new ArrayList();
        }
        this.f16219w.add(rVar);
        return this;
    }

    void u() {
        this.f16205i.post(new o());
    }

    public void z() {
        A(3);
    }
}
