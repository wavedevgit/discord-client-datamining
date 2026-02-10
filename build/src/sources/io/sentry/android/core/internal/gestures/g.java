package io.sentry.android.core.internal.gestures;

import android.app.Activity;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import com.facebook.react.uimanager.ViewProps;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.IScope;
import io.sentry.SentryLevel;
import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.b4;
import io.sentry.e1;
import io.sentry.internal.gestures.b;
import io.sentry.l8;
import io.sentry.protocol.g0;
import io.sentry.t8;
import io.sentry.util.j0;
import io.sentry.v8;
import io.sentry.w0;
import io.sentry.z3;
import java.lang.ref.WeakReference;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements GestureDetector.OnGestureListener {

    /* renamed from: d  reason: collision with root package name */
    private final WeakReference f27353d;

    /* renamed from: e  reason: collision with root package name */
    private final w0 f27354e;

    /* renamed from: i  reason: collision with root package name */
    private final SentryAndroidOptions f27355i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.internal.gestures.b f27356o = null;

    /* renamed from: p  reason: collision with root package name */
    private e1 f27357p = null;

    /* renamed from: q  reason: collision with root package name */
    private b f27358q = b.Unknown;

    /* renamed from: r  reason: collision with root package name */
    private final c f27359r = new c(null);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f27360a;

        static {
            int[] iArr = new int[b.values().length];
            f27360a = iArr;
            try {
                iArr[b.Click.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f27360a[b.Scroll.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f27360a[b.Swipe.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f27360a[b.Unknown.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b {
        Click,
        Scroll,
        Swipe,
        Unknown
    }

    public g(Activity activity, w0 w0Var, SentryAndroidOptions sentryAndroidOptions) {
        this.f27353d = new WeakReference(activity);
        this.f27354e = w0Var;
        this.f27355i = sentryAndroidOptions;
    }

    public static /* synthetic */ void b(g gVar, IScope iScope, e1 e1Var, e1 e1Var2) {
        if (e1Var2 == null) {
            gVar.getClass();
            iScope.A(e1Var);
            return;
        }
        gVar.f27355i.getLogger().c(SentryLevel.DEBUG, "Transaction '%s' won't be bound to the Scope since there's one already in there.", e1Var.getName());
    }

    public static /* synthetic */ void d(g gVar, IScope iScope, e1 e1Var) {
        if (e1Var == gVar.f27357p) {
            iScope.E();
        }
    }

    private void e(io.sentry.internal.gestures.b bVar, b bVar2, Map map, MotionEvent motionEvent) {
        if (!this.f27355i.isEnableUserInteractionBreadcrumbs()) {
            return;
        }
        String j10 = j(bVar2);
        Hint hint = new Hint();
        hint.k("android:motionEvent", motionEvent);
        hint.k("android:view", bVar.f());
        this.f27354e.h(Breadcrumb.G(j10, bVar.d(), bVar.a(), bVar.e(), map), hint);
    }

    private View h(String str) {
        Activity activity = (Activity) this.f27353d.get();
        if (activity == null) {
            ILogger logger = this.f27355i.getLogger();
            SentryLevel sentryLevel = SentryLevel.DEBUG;
            logger.c(sentryLevel, "Activity is null in " + str + ". No breadcrumb captured.", new Object[0]);
            return null;
        }
        Window window = activity.getWindow();
        if (window == null) {
            ILogger logger2 = this.f27355i.getLogger();
            SentryLevel sentryLevel2 = SentryLevel.DEBUG;
            logger2.c(sentryLevel2, "Window is null in " + str + ". No breadcrumb captured.", new Object[0]);
            return null;
        }
        View decorView = window.getDecorView();
        if (decorView == null) {
            ILogger logger3 = this.f27355i.getLogger();
            SentryLevel sentryLevel3 = SentryLevel.DEBUG;
            logger3.c(sentryLevel3, "DecorView is null in " + str + ". No breadcrumb captured.", new Object[0]);
            return null;
        }
        return decorView;
    }

    private String i(Activity activity) {
        return activity.getClass().getSimpleName();
    }

    private static String j(b bVar) {
        int i10 = a.f27360a[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return "unknown";
                }
                return "swipe";
            }
            return ViewProps.SCROLL;
        }
        return "click";
    }

    private void l(io.sentry.internal.gestures.b bVar, b bVar2) {
        boolean z10;
        boolean z11;
        Activity activity;
        Long valueOf;
        if (bVar2 == this.f27358q && bVar.equals(this.f27356o)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (bVar2 == b.Click || !z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (this.f27355i.isTracingEnabled() && this.f27355i.isEnableUserInteractionTracing()) {
            if (((Activity) this.f27353d.get()) == null) {
                this.f27355i.getLogger().c(SentryLevel.DEBUG, "Activity is null, no transaction captured.", new Object[0]);
                return;
            }
            String b10 = bVar.b();
            e1 e1Var = this.f27357p;
            if (e1Var != null) {
                if (!z11 && !e1Var.isFinished()) {
                    this.f27355i.getLogger().c(SentryLevel.DEBUG, "The view with id: " + b10 + " already has an ongoing transaction assigned. Rescheduling finish", new Object[0]);
                    if (this.f27355i.getIdleTimeout() != null) {
                        this.f27357p.p();
                        return;
                    }
                    return;
                }
                m(l8.OK);
            }
            String str = i(activity) + "." + b10;
            String str2 = "ui.action." + j(bVar2);
            v8 v8Var = new v8();
            v8Var.v(true);
            long deadlineTimeout = this.f27355i.getDeadlineTimeout();
            if (deadlineTimeout <= 0) {
                valueOf = null;
            } else {
                valueOf = Long.valueOf(deadlineTimeout);
            }
            v8Var.s(valueOf);
            v8Var.t(this.f27355i.getIdleTimeout());
            v8Var.i(true);
            v8Var.g("auto.ui.gesture_listener." + bVar.c());
            final e1 z12 = this.f27354e.z(new t8(str, g0.COMPONENT, str2), v8Var);
            this.f27354e.o(new b4() { // from class: io.sentry.android.core.internal.gestures.d
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    g.this.f(iScope, z12);
                }
            });
            this.f27357p = z12;
            this.f27356o = bVar;
            this.f27358q = bVar2;
        } else if (z11) {
            if (this.f27355i.isEnableAutoTraceIdGeneration()) {
                j0.h(this.f27354e);
            }
            this.f27356o = bVar;
            this.f27358q = bVar2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(final IScope iScope, final e1 e1Var) {
        iScope.R(new z3.c() { // from class: io.sentry.android.core.internal.gestures.e
            @Override // io.sentry.z3.c
            public final void a(e1 e1Var2) {
                g.b(g.this, iScope, e1Var, e1Var2);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(final IScope iScope) {
        iScope.R(new z3.c() { // from class: io.sentry.android.core.internal.gestures.f
            @Override // io.sentry.z3.c
            public final void a(e1 e1Var) {
                g.d(g.this, iScope, e1Var);
            }
        });
    }

    public void k(MotionEvent motionEvent) {
        View h10 = h("onUp");
        io.sentry.internal.gestures.b bVar = this.f27359r.f27362b;
        if (h10 != null && bVar != null) {
            if (this.f27359r.f27361a != b.Unknown) {
                e(bVar, this.f27359r.f27361a, Collections.singletonMap("direction", this.f27359r.i(motionEvent)), motionEvent);
                l(bVar, this.f27359r.f27361a);
                this.f27359r.j();
                return;
            }
            this.f27355i.getLogger().c(SentryLevel.DEBUG, "Unable to define scroll type. No breadcrumb captured.", new Object[0]);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(l8 l8Var) {
        e1 e1Var = this.f27357p;
        if (e1Var != null) {
            if (e1Var.a() == null) {
                this.f27357p.k(l8Var);
            } else {
                this.f27357p.d();
            }
        }
        this.f27354e.o(new b4() { // from class: io.sentry.android.core.internal.gestures.c
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                g.this.g(iScope);
            }
        });
        this.f27357p = null;
        if (this.f27356o != null) {
            this.f27356o = null;
        }
        this.f27358q = b.Unknown;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onDown(MotionEvent motionEvent) {
        if (motionEvent == null) {
            return false;
        }
        this.f27359r.j();
        this.f27359r.f27363c = motionEvent.getX();
        this.f27359r.f27364d = motionEvent.getY();
        return false;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onFling(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        this.f27359r.f27361a = b.Swipe;
        return false;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public void onLongPress(MotionEvent motionEvent) {
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        View h10 = h("onScroll");
        if (h10 != null && motionEvent != null && this.f27359r.f27361a == b.Unknown) {
            io.sentry.internal.gestures.b a10 = i.a(this.f27355i, h10, motionEvent.getX(), motionEvent.getY(), b.a.SCROLLABLE);
            if (a10 == null) {
                this.f27355i.getLogger().c(SentryLevel.DEBUG, "Unable to find scroll target. No breadcrumb captured.", new Object[0]);
                this.f27359r.f27361a = b.Scroll;
                return false;
            }
            ILogger logger = this.f27355i.getLogger();
            SentryLevel sentryLevel = SentryLevel.DEBUG;
            logger.c(sentryLevel, "Scroll target found: " + a10.b(), new Object[0]);
            this.f27359r.k(a10);
            this.f27359r.f27361a = b.Scroll;
        }
        return false;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public void onShowPress(MotionEvent motionEvent) {
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onSingleTapUp(MotionEvent motionEvent) {
        View h10 = h("onSingleTapUp");
        if (h10 != null && motionEvent != null) {
            io.sentry.internal.gestures.b a10 = i.a(this.f27355i, h10, motionEvent.getX(), motionEvent.getY(), b.a.CLICKABLE);
            if (a10 == null) {
                this.f27355i.getLogger().c(SentryLevel.DEBUG, "Unable to find click target. No breadcrumb captured.", new Object[0]);
                return false;
            }
            b bVar = b.Click;
            e(a10, bVar, Collections.EMPTY_MAP, motionEvent);
            l(a10, bVar);
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c {

        /* renamed from: a  reason: collision with root package name */
        private b f27361a;

        /* renamed from: b  reason: collision with root package name */
        private io.sentry.internal.gestures.b f27362b;

        /* renamed from: c  reason: collision with root package name */
        private float f27363c;

        /* renamed from: d  reason: collision with root package name */
        private float f27364d;

        private c() {
            this.f27361a = b.Unknown;
            this.f27363c = 0.0f;
            this.f27364d = 0.0f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public String i(MotionEvent motionEvent) {
            float x10 = motionEvent.getX() - this.f27363c;
            float y10 = motionEvent.getY() - this.f27364d;
            if (Math.abs(x10) > Math.abs(y10)) {
                if (x10 > 0.0f) {
                    return ViewProps.RIGHT;
                }
                return ViewProps.LEFT;
            } else if (y10 > 0.0f) {
                return "down";
            } else {
                return "up";
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void j() {
            this.f27362b = null;
            this.f27361a = b.Unknown;
            this.f27363c = 0.0f;
            this.f27364d = 0.0f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void k(io.sentry.internal.gestures.b bVar) {
            this.f27362b = bVar;
        }

        /* synthetic */ c(a aVar) {
            this();
        }
    }
}
