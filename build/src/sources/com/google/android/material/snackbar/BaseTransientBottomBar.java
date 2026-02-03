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
    private final int f14932a;

    /* renamed from: b  reason: collision with root package name */
    private final int f14933b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14934c;

    /* renamed from: d  reason: collision with root package name */
    private final TimeInterpolator f14935d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f14936e;

    /* renamed from: f  reason: collision with root package name */
    private final TimeInterpolator f14937f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f14938g;

    /* renamed from: h  reason: collision with root package name */
    private final Context f14939h;

    /* renamed from: i  reason: collision with root package name */
    protected final t f14940i;

    /* renamed from: j  reason: collision with root package name */
    private final com.google.android.material.snackbar.a f14941j;

    /* renamed from: k  reason: collision with root package name */
    private int f14942k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f14943l;

    /* renamed from: m  reason: collision with root package name */
    private q f14944m;

    /* renamed from: p  reason: collision with root package name */
    private int f14947p;

    /* renamed from: q  reason: collision with root package name */
    private int f14948q;

    /* renamed from: r  reason: collision with root package name */
    private int f14949r;

    /* renamed from: s  reason: collision with root package name */
    private int f14950s;

    /* renamed from: t  reason: collision with root package name */
    private int f14951t;

    /* renamed from: u  reason: collision with root package name */
    private int f14952u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f14953v;

    /* renamed from: w  reason: collision with root package name */
    private List f14954w;

    /* renamed from: x  reason: collision with root package name */
    private Behavior f14955x;

    /* renamed from: y  reason: collision with root package name */
    private final AccessibilityManager f14956y;
    private static final TimeInterpolator A = zg.a.f55945b;
    private static final TimeInterpolator B = zg.a.f55944a;
    private static final TimeInterpolator C = zg.a.f55947d;
    private static final boolean E = false;
    private static final int[] F = {yg.b.W};
    private static final String G = BaseTransientBottomBar.class.getSimpleName();
    static final Handler D = new Handler(Looper.getMainLooper(), new h());

    /* renamed from: n  reason: collision with root package name */
    private boolean f14945n = false;

    /* renamed from: o  reason: collision with root package name */
    private final Runnable f14946o = new i();

    /* renamed from: z  reason: collision with root package name */
    b.InterfaceC0173b f14957z = new l();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends SwipeDismissBehavior<View> {

        /* renamed from: w  reason: collision with root package name */
        private final s f14958w = new s(this);

        /* JADX INFO: Access modifiers changed from: private */
        public void U(BaseTransientBottomBar baseTransientBottomBar) {
            this.f14958w.c(baseTransientBottomBar);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior
        public boolean J(View view) {
            return this.f14958w.a(view);
        }

        @Override // com.google.android.material.behavior.SwipeDismissBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            this.f14958w.b(coordinatorLayout, view, motionEvent);
            return super.o(coordinatorLayout, view, motionEvent);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f14959a;

        a(int i10) {
            this.f14959a = i10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.R(this.f14959a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements ValueAnimator.AnimatorUpdateListener {
        b() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            BaseTransientBottomBar.this.f14940i.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
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
            BaseTransientBottomBar.this.f14940i.setScaleX(floatValue);
            BaseTransientBottomBar.this.f14940i.setScaleY(floatValue);
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
            BaseTransientBottomBar.this.f14941j.a(BaseTransientBottomBar.this.f14934c - BaseTransientBottomBar.this.f14932a, BaseTransientBottomBar.this.f14932a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private int f14964a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f14965b;

        e(int i10) {
            this.f14965b = i10;
            this.f14964a = i10;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            int intValue = ((Integer) valueAnimator.getAnimatedValue()).intValue();
            if (BaseTransientBottomBar.E) {
                h0.Y(BaseTransientBottomBar.this.f14940i, intValue - this.f14964a);
            } else {
                BaseTransientBottomBar.this.f14940i.setTranslationY(intValue);
            }
            this.f14964a = intValue;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f14967a;

        f(int i10) {
            this.f14967a = i10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            BaseTransientBottomBar.this.R(this.f14967a);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            BaseTransientBottomBar.this.f14941j.b(0, BaseTransientBottomBar.this.f14933b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private int f14969a = 0;

        g() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            int intValue = ((Integer) valueAnimator.getAnimatedValue()).intValue();
            if (BaseTransientBottomBar.E) {
                h0.Y(BaseTransientBottomBar.this.f14940i, intValue - this.f14969a);
            } else {
                BaseTransientBottomBar.this.f14940i.setTranslationY(intValue);
            }
            this.f14969a = intValue;
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
            if (baseTransientBottomBar.f14940i != null && baseTransientBottomBar.f14939h != null) {
                int height = (com.google.android.material.internal.q.a(BaseTransientBottomBar.this.f14939h).height() - BaseTransientBottomBar.this.J()) + ((int) BaseTransientBottomBar.this.f14940i.getTranslationY());
                if (height >= BaseTransientBottomBar.this.f14951t) {
                    BaseTransientBottomBar baseTransientBottomBar2 = BaseTransientBottomBar.this;
                    baseTransientBottomBar2.f14952u = baseTransientBottomBar2.f14951t;
                    return;
                }
                ViewGroup.LayoutParams layoutParams = BaseTransientBottomBar.this.f14940i.getLayoutParams();
                if (!(layoutParams instanceof ViewGroup.MarginLayoutParams)) {
                    Log.w(BaseTransientBottomBar.G, "Unable to apply gesture inset because layout params are not MarginLayoutParams");
                    return;
                }
                BaseTransientBottomBar baseTransientBottomBar3 = BaseTransientBottomBar.this;
                baseTransientBottomBar3.f14952u = baseTransientBottomBar3.f14951t;
                ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin += BaseTransientBottomBar.this.f14951t - height;
                BaseTransientBottomBar.this.f14940i.requestLayout();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class j implements v {
        j() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            BaseTransientBottomBar.this.f14947p = windowInsetsCompat.n();
            BaseTransientBottomBar.this.f14948q = windowInsetsCompat.o();
            BaseTransientBottomBar.this.f14949r = windowInsetsCompat.p();
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
    class l implements b.InterfaceC0173b {
        l() {
        }

        @Override // com.google.android.material.snackbar.b.InterfaceC0173b
        public void a(int i10) {
            Handler handler = BaseTransientBottomBar.D;
            handler.sendMessage(handler.obtainMessage(1, i10, 0, BaseTransientBottomBar.this));
        }

        @Override // com.google.android.material.snackbar.b.InterfaceC0173b
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
                com.google.android.material.snackbar.b.c().j(BaseTransientBottomBar.this.f14957z);
                return;
            }
            com.google.android.material.snackbar.b.c().k(BaseTransientBottomBar.this.f14957z);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements Runnable {
        o() {
        }

        @Override // java.lang.Runnable
        public void run() {
            t tVar = BaseTransientBottomBar.this.f14940i;
            if (tVar == null) {
                return;
            }
            if (tVar.getParent() != null) {
                BaseTransientBottomBar.this.f14940i.setVisibility(0);
            }
            if (BaseTransientBottomBar.this.f14940i.getAnimationMode() == 1) {
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
        private final WeakReference f14979d;

        /* renamed from: e  reason: collision with root package name */
        private final WeakReference f14980e;

        private q(BaseTransientBottomBar baseTransientBottomBar, View view) {
            this.f14979d = new WeakReference(baseTransientBottomBar);
            this.f14980e = new WeakReference(view);
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
            if (this.f14979d.get() == null) {
                c();
                return true;
            }
            return false;
        }

        View b() {
            return (View) this.f14980e.get();
        }

        void c() {
            if (this.f14980e.get() != null) {
                ((View) this.f14980e.get()).removeOnAttachStateChangeListener(this);
                com.google.android.material.internal.o.j((View) this.f14980e.get(), this);
            }
            this.f14980e.clear();
            this.f14979d.clear();
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (!d() && ((BaseTransientBottomBar) this.f14979d.get()).f14945n) {
                ((BaseTransientBottomBar) this.f14979d.get()).T();
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
        private b.InterfaceC0173b f14981a;

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
                    com.google.android.material.snackbar.b.c().k(this.f14981a);
                }
            } else if (coordinatorLayout.w(view, (int) motionEvent.getX(), (int) motionEvent.getY())) {
                com.google.android.material.snackbar.b.c().j(this.f14981a);
            }
        }

        public void c(BaseTransientBottomBar baseTransientBottomBar) {
            this.f14981a = baseTransientBottomBar.f14957z;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class t extends FrameLayout {

        /* renamed from: w  reason: collision with root package name */
        private static final View.OnTouchListener f14982w = new a();

        /* renamed from: d  reason: collision with root package name */
        private BaseTransientBottomBar f14983d;

        /* renamed from: e  reason: collision with root package name */
        oh.k f14984e;

        /* renamed from: i  reason: collision with root package name */
        private int f14985i;

        /* renamed from: o  reason: collision with root package name */
        private final float f14986o;

        /* renamed from: p  reason: collision with root package name */
        private final float f14987p;

        /* renamed from: q  reason: collision with root package name */
        private final int f14988q;

        /* renamed from: r  reason: collision with root package name */
        private final int f14989r;

        /* renamed from: s  reason: collision with root package name */
        private ColorStateList f14990s;

        /* renamed from: t  reason: collision with root package name */
        private PorterDuff.Mode f14991t;

        /* renamed from: u  reason: collision with root package name */
        private Rect f14992u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f14993v;

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
            super(rh.a.c(context, attributeSet, 0, 0), attributeSet);
            Context context2 = getContext();
            TypedArray obtainStyledAttributes = context2.obtainStyledAttributes(attributeSet, yg.k.U5);
            if (obtainStyledAttributes.hasValue(yg.k.f54290b6)) {
                h0.v0(this, obtainStyledAttributes.getDimensionPixelSize(yg.k.f54290b6, 0));
            }
            this.f14985i = obtainStyledAttributes.getInt(yg.k.X5, 0);
            if (obtainStyledAttributes.hasValue(yg.k.f54310d6) || obtainStyledAttributes.hasValue(yg.k.f54320e6)) {
                this.f14984e = oh.k.e(context2, attributeSet, 0, 0).m();
            }
            this.f14986o = obtainStyledAttributes.getFloat(yg.k.Y5, 1.0f);
            setBackgroundTintList(lh.c.a(context2, obtainStyledAttributes, yg.k.Z5));
            setBackgroundTintMode(com.google.android.material.internal.o.i(obtainStyledAttributes.getInt(yg.k.f54280a6, -1), PorterDuff.Mode.SRC_IN));
            this.f14987p = obtainStyledAttributes.getFloat(yg.k.W5, 1.0f);
            this.f14988q = obtainStyledAttributes.getDimensionPixelSize(yg.k.V5, -1);
            this.f14989r = obtainStyledAttributes.getDimensionPixelSize(yg.k.f54300c6, -1);
            obtainStyledAttributes.recycle();
            setOnTouchListener(f14982w);
            setFocusable(true);
            if (getBackground() == null) {
                h0.r0(this, d());
            }
        }

        private Drawable d() {
            int k10 = eh.a.k(this, yg.b.f54103o, yg.b.f54099k, getBackgroundOverlayColorAlpha());
            oh.k kVar = this.f14984e;
            Drawable z10 = kVar != null ? BaseTransientBottomBar.z(k10, kVar) : BaseTransientBottomBar.y(k10, getResources());
            if (this.f14990s != null) {
                Drawable r10 = s1.a.r(z10);
                s1.a.o(r10, this.f14990s);
                return r10;
            }
            return s1.a.r(z10);
        }

        private void e(ViewGroup.MarginLayoutParams marginLayoutParams) {
            this.f14992u = new Rect(marginLayoutParams.leftMargin, marginLayoutParams.topMargin, marginLayoutParams.rightMargin, marginLayoutParams.bottomMargin);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void setBaseTransientBottomBar(BaseTransientBottomBar baseTransientBottomBar) {
            this.f14983d = baseTransientBottomBar;
        }

        void c(ViewGroup viewGroup) {
            this.f14993v = true;
            viewGroup.addView(this);
            this.f14993v = false;
        }

        float getActionTextColorAlpha() {
            return this.f14987p;
        }

        int getAnimationMode() {
            return this.f14985i;
        }

        float getBackgroundOverlayColorAlpha() {
            return this.f14986o;
        }

        int getMaxInlineActionWidth() {
            return this.f14989r;
        }

        int getMaxWidth() {
            return this.f14988q;
        }

        @Override // android.view.ViewGroup, android.view.View
        protected void onAttachedToWindow() {
            super.onAttachedToWindow();
            BaseTransientBottomBar baseTransientBottomBar = this.f14983d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.O();
            }
            h0.k0(this);
        }

        @Override // android.view.ViewGroup, android.view.View
        protected void onDetachedFromWindow() {
            super.onDetachedFromWindow();
            BaseTransientBottomBar baseTransientBottomBar = this.f14983d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.P();
            }
        }

        @Override // android.widget.FrameLayout, android.view.ViewGroup, android.view.View
        protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
            super.onLayout(z10, i10, i11, i12, i13);
            BaseTransientBottomBar baseTransientBottomBar = this.f14983d;
            if (baseTransientBottomBar != null) {
                baseTransientBottomBar.Q();
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // android.widget.FrameLayout, android.view.View
        public void onMeasure(int i10, int i11) {
            super.onMeasure(i10, i11);
            if (this.f14988q > 0) {
                int measuredWidth = getMeasuredWidth();
                int i12 = this.f14988q;
                if (measuredWidth > i12) {
                    super.onMeasure(View.MeasureSpec.makeMeasureSpec(i12, 1073741824), i11);
                }
            }
        }

        void setAnimationMode(int i10) {
            this.f14985i = i10;
        }

        @Override // android.view.View
        public void setBackground(Drawable drawable) {
            setBackgroundDrawable(drawable);
        }

        @Override // android.view.View
        public void setBackgroundDrawable(Drawable drawable) {
            if (drawable != null && this.f14990s != null) {
                drawable = s1.a.r(drawable.mutate());
                s1.a.o(drawable, this.f14990s);
                s1.a.p(drawable, this.f14991t);
            }
            super.setBackgroundDrawable(drawable);
        }

        @Override // android.view.View
        public void setBackgroundTintList(ColorStateList colorStateList) {
            this.f14990s = colorStateList;
            if (getBackground() != null) {
                Drawable r10 = s1.a.r(getBackground().mutate());
                s1.a.o(r10, colorStateList);
                s1.a.p(r10, this.f14991t);
                if (r10 != getBackground()) {
                    super.setBackgroundDrawable(r10);
                }
            }
        }

        @Override // android.view.View
        public void setBackgroundTintMode(PorterDuff.Mode mode) {
            this.f14991t = mode;
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
            if (!this.f14993v && (layoutParams instanceof ViewGroup.MarginLayoutParams)) {
                e((ViewGroup.MarginLayoutParams) layoutParams);
                BaseTransientBottomBar baseTransientBottomBar = this.f14983d;
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
                onTouchListener = f14982w;
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
                    this.f14938g = viewGroup;
                    this.f14941j = aVar;
                    this.f14939h = context;
                    com.google.android.material.internal.l.a(context);
                    t tVar = (t) LayoutInflater.from(context).inflate(H(), viewGroup, false);
                    this.f14940i = tVar;
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
                    this.f14956y = (AccessibilityManager) context.getSystemService("accessibility");
                    this.f14934c = jh.g.f(context, yg.b.F, androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION);
                    this.f14932a = jh.g.f(context, yg.b.F, 150);
                    this.f14933b = jh.g.f(context, yg.b.G, 75);
                    this.f14935d = jh.g.g(context, yg.b.P, B);
                    this.f14937f = jh.g.g(context, yg.b.P, C);
                    this.f14936e = jh.g.g(context, yg.b.P, A);
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
        ofFloat.setInterpolator(this.f14935d);
        ofFloat.addUpdateListener(new b());
        return ofFloat;
    }

    private ValueAnimator G(float... fArr) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(fArr);
        ofFloat.setInterpolator(this.f14937f);
        ofFloat.addUpdateListener(new c());
        return ofFloat;
    }

    private int I() {
        int height = this.f14940i.getHeight();
        ViewGroup.LayoutParams layoutParams = this.f14940i.getLayoutParams();
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return height + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }
        return height;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int J() {
        int[] iArr = new int[2];
        this.f14940i.getLocationInWindow(iArr);
        return iArr[1] + this.f14940i.getHeight();
    }

    private boolean N() {
        ViewGroup.LayoutParams layoutParams = this.f14940i.getLayoutParams();
        if ((layoutParams instanceof CoordinatorLayout.f) && (((CoordinatorLayout.f) layoutParams).f() instanceof SwipeDismissBehavior)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void T() {
        this.f14950s = x();
        g0();
    }

    private void W(CoordinatorLayout.f fVar) {
        SwipeDismissBehavior swipeDismissBehavior = this.f14955x;
        if (swipeDismissBehavior == null) {
            swipeDismissBehavior = F();
        }
        if (swipeDismissBehavior instanceof Behavior) {
            ((Behavior) swipeDismissBehavior).U(this);
        }
        swipeDismissBehavior.P(new n());
        fVar.o(swipeDismissBehavior);
        if (D() == null) {
            fVar.f2867g = 80;
        }
    }

    private boolean Y() {
        if (this.f14951t > 0 && !this.f14943l && N()) {
            return true;
        }
        return false;
    }

    private void b0() {
        if (X()) {
            v();
            return;
        }
        if (this.f14940i.getParent() != null) {
            this.f14940i.setVisibility(0);
        }
        S();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c0() {
        ValueAnimator C2 = C(0.0f, 1.0f);
        ValueAnimator G2 = G(0.8f, 1.0f);
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(C2, G2);
        animatorSet.setDuration(this.f14932a);
        animatorSet.addListener(new p());
        animatorSet.start();
    }

    private void d0(int i10) {
        ValueAnimator C2 = C(1.0f, 0.0f);
        C2.setDuration(this.f14933b);
        C2.addListener(new a(i10));
        C2.start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e0() {
        int I = I();
        if (E) {
            h0.Y(this.f14940i, I);
        } else {
            this.f14940i.setTranslationY(I);
        }
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setIntValues(I, 0);
        valueAnimator.setInterpolator(this.f14936e);
        valueAnimator.setDuration(this.f14934c);
        valueAnimator.addListener(new d());
        valueAnimator.addUpdateListener(new e(I));
        valueAnimator.start();
    }

    private void f0(int i10) {
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setIntValues(0, I());
        valueAnimator.setInterpolator(this.f14936e);
        valueAnimator.setDuration(this.f14934c);
        valueAnimator.addListener(new f(i10));
        valueAnimator.addUpdateListener(new g());
        valueAnimator.start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g0() {
        int i10;
        boolean z10;
        ViewGroup.LayoutParams layoutParams = this.f14940i.getLayoutParams();
        if (!(layoutParams instanceof ViewGroup.MarginLayoutParams)) {
            Log.w(G, "Unable to update margins because layout params are not MarginLayoutParams");
        } else if (this.f14940i.f14992u == null) {
            Log.w(G, "Unable to update margins because original view margins are not set");
        } else if (this.f14940i.getParent() != null) {
            if (D() != null) {
                i10 = this.f14950s;
            } else {
                i10 = this.f14947p;
            }
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
            int i11 = this.f14940i.f14992u.bottom + i10;
            int i12 = this.f14940i.f14992u.left + this.f14948q;
            int i13 = this.f14940i.f14992u.right + this.f14949r;
            int i14 = this.f14940i.f14992u.top;
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
                this.f14940i.requestLayout();
            }
            if ((z10 || this.f14952u != this.f14951t) && Build.VERSION.SDK_INT >= 29 && Y()) {
                this.f14940i.removeCallbacks(this.f14946o);
                this.f14940i.post(this.f14946o);
            }
        }
    }

    private void w(int i10) {
        if (this.f14940i.getAnimationMode() == 1) {
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
        this.f14938g.getLocationOnScreen(iArr2);
        return (iArr2[1] + this.f14938g.getHeight()) - i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static GradientDrawable y(int i10, Resources resources) {
        float dimension = resources.getDimension(yg.d.f54132d0);
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setShape(0);
        gradientDrawable.setCornerRadius(dimension);
        gradientDrawable.setColor(i10);
        return gradientDrawable;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static oh.g z(int i10, oh.k kVar) {
        oh.g gVar = new oh.g(kVar);
        gVar.X(ColorStateList.valueOf(i10));
        return gVar;
    }

    public void A() {
        B(3);
    }

    protected void B(int i10) {
        com.google.android.material.snackbar.b.c().b(this.f14957z, i10);
    }

    public View D() {
        q qVar = this.f14944m;
        if (qVar == null) {
            return null;
        }
        return qVar.b();
    }

    public int E() {
        return this.f14942k;
    }

    protected SwipeDismissBehavior F() {
        return new Behavior();
    }

    protected int H() {
        if (K()) {
            return yg.h.f54220t;
        }
        return yg.h.f54202b;
    }

    protected boolean K() {
        TypedArray obtainStyledAttributes = this.f14939h.obtainStyledAttributes(F);
        int resourceId = obtainStyledAttributes.getResourceId(0, -1);
        obtainStyledAttributes.recycle();
        if (resourceId == -1) {
            return false;
        }
        return true;
    }

    final void L(int i10) {
        if (X() && this.f14940i.getVisibility() == 0) {
            w(i10);
        } else {
            R(i10);
        }
    }

    public boolean M() {
        return com.google.android.material.snackbar.b.c().e(this.f14957z);
    }

    void O() {
        WindowInsets rootWindowInsets;
        int i10;
        if (Build.VERSION.SDK_INT >= 29 && (rootWindowInsets = this.f14940i.getRootWindowInsets()) != null) {
            i10 = rootWindowInsets.getMandatorySystemGestureInsets().bottom;
            this.f14951t = i10;
            g0();
        }
    }

    void P() {
        if (M()) {
            D.post(new m());
        }
    }

    void Q() {
        if (this.f14953v) {
            b0();
            this.f14953v = false;
        }
    }

    void R(int i10) {
        com.google.android.material.snackbar.b.c().h(this.f14957z);
        List list = this.f14954w;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                ((r) this.f14954w.get(size)).a(this, i10);
            }
        }
        ViewParent parent = this.f14940i.getParent();
        if (parent instanceof ViewGroup) {
            ((ViewGroup) parent).removeView(this.f14940i);
        }
    }

    void S() {
        com.google.android.material.snackbar.b.c().i(this.f14957z);
        List list = this.f14954w;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                ((r) this.f14954w.get(size)).b(this);
            }
        }
    }

    public BaseTransientBottomBar U(View view) {
        q a10;
        q qVar = this.f14944m;
        if (qVar != null) {
            qVar.c();
        }
        if (view == null) {
            a10 = null;
        } else {
            a10 = q.a(this, view);
        }
        this.f14944m = a10;
        return this;
    }

    public BaseTransientBottomBar V(int i10) {
        this.f14942k = i10;
        return this;
    }

    boolean X() {
        AccessibilityManager accessibilityManager = this.f14956y;
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
        com.google.android.material.snackbar.b.c().m(E(), this.f14957z);
    }

    final void a0() {
        if (this.f14940i.getParent() == null) {
            ViewGroup.LayoutParams layoutParams = this.f14940i.getLayoutParams();
            if (layoutParams instanceof CoordinatorLayout.f) {
                W((CoordinatorLayout.f) layoutParams);
            }
            this.f14940i.c(this.f14938g);
            T();
            this.f14940i.setVisibility(4);
        }
        if (h0.S(this.f14940i)) {
            b0();
        } else {
            this.f14953v = true;
        }
    }

    public BaseTransientBottomBar u(r rVar) {
        if (rVar == null) {
            return this;
        }
        if (this.f14954w == null) {
            this.f14954w = new ArrayList();
        }
        this.f14954w.add(rVar);
        return this;
    }

    void v() {
        this.f14940i.post(new o());
    }
}
