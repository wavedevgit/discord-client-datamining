package in;

import android.content.Context;
import android.os.SystemClock;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.widget.ScrollView;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.views.scroll.ReactHorizontalScrollView;
import com.facebook.react.views.scroll.ReactScrollView;
import com.facebook.react.views.swiperefresh.ReactSwipeRefreshLayout;
import com.facebook.react.views.text.ReactTextView;
import com.facebook.react.views.textinput.ReactEditText;
import com.facebook.react.views.view.ReactViewGroup;
import com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager;
import in.d;
import java.util.ArrayList;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q extends in.d {
    public static final b R = new b(null);
    private static final a S = new a();
    private boolean O;
    private boolean P;
    private e Q = S;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements e {
        a() {
        }

        @Override // in.q.e
        public boolean a() {
            return e.a.f(this);
        }

        @Override // in.q.e
        public boolean b(MotionEvent motionEvent) {
            return e.a.c(this, motionEvent);
        }

        @Override // in.q.e
        public boolean c() {
            return e.a.h(this);
        }

        @Override // in.q.e
        public boolean d(View view) {
            return e.a.b(this, view);
        }

        @Override // in.q.e
        public Boolean e(in.d dVar) {
            return e.a.g(this, dVar);
        }

        @Override // in.q.e
        public Boolean f(View view, MotionEvent motionEvent) {
            return e.a.e(this, view, motionEvent);
        }

        @Override // in.q.e
        public void g(MotionEvent motionEvent) {
            e.a.d(this, motionEvent);
        }

        @Override // in.q.e
        public void h(MotionEvent motionEvent) {
            e.a.a(this, motionEvent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean b(View view, MotionEvent motionEvent) {
            if ((view instanceof ViewGroup) && ((ViewGroup) view).onInterceptTouchEvent(motionEvent)) {
                return true;
            }
            return false;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements e {

        /* renamed from: d  reason: collision with root package name */
        private final q f27566d;

        /* renamed from: e  reason: collision with root package name */
        private final ReactEditText f27567e;

        /* renamed from: i  reason: collision with root package name */
        private float f27568i;

        /* renamed from: o  reason: collision with root package name */
        private float f27569o;

        /* renamed from: p  reason: collision with root package name */
        private int f27570p;

        public c(q handler, ReactEditText editText) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(editText, "editText");
            this.f27566d = handler;
            this.f27567e = editText;
            ViewConfiguration viewConfiguration = ViewConfiguration.get(editText.getContext());
            this.f27570p = viewConfiguration.getScaledTouchSlop() * viewConfiguration.getScaledTouchSlop();
        }

        @Override // in.q.e
        public boolean a() {
            return true;
        }

        @Override // in.q.e
        public boolean b(MotionEvent motionEvent) {
            return e.a.c(this, motionEvent);
        }

        @Override // in.q.e
        public boolean c() {
            return true;
        }

        @Override // in.q.e
        public boolean d(View view) {
            return e.a.b(this, view);
        }

        @Override // in.q.e
        public Boolean e(in.d handler) {
            boolean z10;
            Intrinsics.checkNotNullParameter(handler, "handler");
            if (handler.T() > 0 && !(handler instanceof q)) {
                z10 = true;
            } else {
                z10 = false;
            }
            return Boolean.valueOf(z10);
        }

        @Override // in.q.e
        public Boolean f(View view, MotionEvent motionEvent) {
            return e.a.e(this, view, motionEvent);
        }

        @Override // in.q.e
        public void g(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            this.f27566d.k();
            this.f27567e.onTouchEvent(event);
            this.f27568i = event.getX();
            this.f27569o = event.getY();
        }

        @Override // in.q.e
        public void h(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            if (((event.getX() - this.f27568i) * (event.getX() - this.f27568i)) + ((event.getY() - this.f27569o) * (event.getY() - this.f27569o)) < this.f27570p) {
                this.f27567e.requestFocusFromJS();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends d.c {

        /* renamed from: d  reason: collision with root package name */
        public static final a f27571d = new a(null);

        /* renamed from: b  reason: collision with root package name */
        private final Class f27572b = q.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f27573c = "NativeViewGestureHandler";

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        @Override // in.d.c
        public String d() {
            return this.f27573c;
        }

        @Override // in.d.c
        public Class e() {
            return this.f27572b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // in.d.c
        /* renamed from: g */
        public q a(Context context) {
            return new q();
        }

        @Override // in.d.c
        /* renamed from: h */
        public jn.f c(q handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new jn.f(handler);
        }

        @Override // in.d.c
        /* renamed from: i */
        public void f(q handler, ReadableMap config) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(config, "config");
            super.f(handler, config);
            if (config.hasKey("shouldActivateOnStart")) {
                handler.O = config.getBoolean("shouldActivateOnStart");
            }
            if (config.hasKey("disallowInterruption")) {
                handler.P = config.getBoolean("disallowInterruption");
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface e {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public static void a(e eVar, MotionEvent event) {
                Intrinsics.checkNotNullParameter(event, "event");
            }

            public static boolean b(e eVar, View view) {
                Intrinsics.checkNotNullParameter(view, "view");
                return view.isPressed();
            }

            public static boolean c(e eVar, MotionEvent event) {
                Intrinsics.checkNotNullParameter(event, "event");
                return true;
            }

            public static void d(e eVar, MotionEvent event) {
                Intrinsics.checkNotNullParameter(event, "event");
            }

            public static Boolean e(e eVar, View view, MotionEvent event) {
                Intrinsics.checkNotNullParameter(event, "event");
                if (view != null) {
                    return Boolean.valueOf(view.onTouchEvent(event));
                }
                return null;
            }

            public static boolean f(e eVar) {
                return false;
            }

            public static Boolean g(e eVar, in.d handler) {
                Intrinsics.checkNotNullParameter(handler, "handler");
                return null;
            }

            public static boolean h(e eVar) {
                return false;
            }
        }

        boolean a();

        boolean b(MotionEvent motionEvent);

        boolean c();

        boolean d(View view);

        Boolean e(in.d dVar);

        Boolean f(View view, MotionEvent motionEvent);

        void g(MotionEvent motionEvent);

        void h(MotionEvent motionEvent);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class f implements e {
        @Override // in.q.e
        public boolean a() {
            return e.a.f(this);
        }

        @Override // in.q.e
        public boolean b(MotionEvent motionEvent) {
            return e.a.c(this, motionEvent);
        }

        @Override // in.q.e
        public boolean c() {
            return e.a.h(this);
        }

        @Override // in.q.e
        public boolean d(View view) {
            return e.a.b(this, view);
        }

        @Override // in.q.e
        public Boolean e(in.d dVar) {
            return e.a.g(this, dVar);
        }

        @Override // in.q.e
        public Boolean f(View view, MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            if (view != null) {
                return Boolean.valueOf(view.dispatchTouchEvent(event));
            }
            return null;
        }

        @Override // in.q.e
        public void g(MotionEvent motionEvent) {
            e.a.d(this, motionEvent);
        }

        @Override // in.q.e
        public void h(MotionEvent motionEvent) {
            e.a.a(this, motionEvent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class g implements e {
        @Override // in.q.e
        public boolean a() {
            return true;
        }

        @Override // in.q.e
        public boolean b(MotionEvent motionEvent) {
            return e.a.c(this, motionEvent);
        }

        @Override // in.q.e
        public boolean c() {
            return e.a.h(this);
        }

        @Override // in.q.e
        public boolean d(View view) {
            return e.a.b(this, view);
        }

        @Override // in.q.e
        public Boolean e(in.d dVar) {
            return e.a.g(this, dVar);
        }

        @Override // in.q.e
        public Boolean f(View view, MotionEvent motionEvent) {
            return e.a.e(this, view, motionEvent);
        }

        @Override // in.q.e
        public void g(MotionEvent motionEvent) {
            e.a.d(this, motionEvent);
        }

        @Override // in.q.e
        public void h(MotionEvent motionEvent) {
            e.a.a(this, motionEvent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class h implements e {

        /* renamed from: d  reason: collision with root package name */
        private final q f27574d;

        /* renamed from: e  reason: collision with root package name */
        private final ReactSwipeRefreshLayout f27575e;

        public h(q handler, ReactSwipeRefreshLayout swipeRefreshLayout) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(swipeRefreshLayout, "swipeRefreshLayout");
            this.f27574d = handler;
            this.f27575e = swipeRefreshLayout;
        }

        @Override // in.q.e
        public boolean a() {
            return e.a.f(this);
        }

        @Override // in.q.e
        public boolean b(MotionEvent motionEvent) {
            return e.a.c(this, motionEvent);
        }

        @Override // in.q.e
        public boolean c() {
            return true;
        }

        @Override // in.q.e
        public boolean d(View view) {
            return e.a.b(this, view);
        }

        @Override // in.q.e
        public Boolean e(in.d dVar) {
            return e.a.g(this, dVar);
        }

        @Override // in.q.e
        public Boolean f(View view, MotionEvent motionEvent) {
            return e.a.e(this, view, motionEvent);
        }

        @Override // in.q.e
        public void g(MotionEvent event) {
            ScrollView scrollView;
            ArrayList<in.d> s10;
            Intrinsics.checkNotNullParameter(event, "event");
            View childAt = this.f27575e.getChildAt(0);
            r1 = null;
            if (childAt instanceof ScrollView) {
                scrollView = (ScrollView) childAt;
            } else {
                scrollView = null;
            }
            if (scrollView != null) {
                in.i P = this.f27574d.P();
                if (P != null && (s10 = P.s(scrollView)) != null) {
                    for (in.d dVar : s10) {
                        if (dVar instanceof q) {
                            if (dVar == null) {
                                return;
                            }
                            return;
                        }
                    }
                    throw new NoSuchElementException("Collection contains no element matching the predicate.");
                } else if (dVar == null && dVar.S() == 4 && scrollView.getScrollY() > 0) {
                    this.f27574d.D();
                }
            }
        }

        @Override // in.q.e
        public void h(MotionEvent motionEvent) {
            e.a.a(this, motionEvent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class i implements e {
        @Override // in.q.e
        public boolean a() {
            return e.a.f(this);
        }

        @Override // in.q.e
        public boolean b(MotionEvent motionEvent) {
            return e.a.c(this, motionEvent);
        }

        @Override // in.q.e
        public boolean c() {
            return e.a.h(this);
        }

        @Override // in.q.e
        public boolean d(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            return view instanceof ReactTextView;
        }

        @Override // in.q.e
        public Boolean e(in.d handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return Boolean.FALSE;
        }

        @Override // in.q.e
        public Boolean f(View view, MotionEvent motionEvent) {
            return e.a.e(this, view, motionEvent);
        }

        @Override // in.q.e
        public void g(MotionEvent motionEvent) {
            e.a.d(this, motionEvent);
        }

        @Override // in.q.e
        public void h(MotionEvent motionEvent) {
            e.a.a(this, motionEvent);
        }
    }

    public q() {
        G0(true);
    }

    private final void W0() {
        long uptimeMillis = SystemClock.uptimeMillis();
        MotionEvent obtain = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
        obtain.setAction(3);
        e eVar = this.Q;
        View W = W();
        Intrinsics.checkNotNull(obtain);
        eVar.f(W, obtain);
        obtain.recycle();
    }

    @Override // in.d
    public boolean K0(in.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        return !this.P;
    }

    @Override // in.d
    public boolean L0(in.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        Boolean e10 = this.Q.e(handler);
        if (e10 != null) {
            return e10.booleanValue();
        }
        if (super.L0(handler)) {
            return true;
        }
        if ((handler instanceof q) && handler.S() == 4 && ((q) handler).P) {
            return false;
        }
        boolean z10 = this.P;
        int S2 = handler.S();
        if ((S() != 4 || S2 != 4 || z10) && S() == 4 && !z10 && (!this.Q.a() || handler.T() > 0)) {
            return true;
        }
        return false;
    }

    public final boolean X0() {
        return this.P;
    }

    @Override // in.d
    protected void j0() {
        W0();
    }

    @Override // in.d
    protected void k0() {
        W0();
    }

    @Override // in.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        View W = W();
        Intrinsics.checkNotNull(W);
        Context context = W.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        boolean d10 = com.swmansion.gesturehandler.react.a.d(context);
        if (!(W instanceof RNGestureHandlerButtonViewManager.a) || !d10) {
            if (event.getActionMasked() == 1) {
                if (S() == 0 && !this.Q.b(event)) {
                    q();
                } else {
                    this.Q.f(W, event);
                    if ((S() == 0 || S() == 2) && this.Q.d(W)) {
                        k();
                    }
                    if (S() == 0) {
                        q();
                    } else {
                        B();
                    }
                }
                this.Q.h(event);
            } else if (S() != 0 && S() != 2) {
                if (S() == 4) {
                    this.Q.f(W, event);
                }
            } else if (this.O) {
                R.b(W, event);
                this.Q.f(W, event);
                k();
            } else if (R.b(W, event)) {
                this.Q.f(W, event);
                k();
            } else if (this.Q.c()) {
                this.Q.g(event);
            } else if (S() != 2 && this.Q.b(event)) {
                p();
            }
        }
    }

    @Override // in.d
    protected void n0() {
        View W = W();
        if (W instanceof e) {
            this.Q = (e) W;
        } else if (W instanceof ReactEditText) {
            this.Q = new c(this, (ReactEditText) W);
        } else if (W instanceof ReactSwipeRefreshLayout) {
            this.Q = new h(this, (ReactSwipeRefreshLayout) W);
        } else if (W instanceof ReactScrollView) {
            this.Q = new g();
        } else if (W instanceof ReactHorizontalScrollView) {
            this.Q = new g();
        } else if (W instanceof ReactTextView) {
            this.Q = new i();
        } else if (W instanceof ReactViewGroup) {
            this.Q = new f();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // in.d
    public void o0() {
        this.Q = S;
    }

    @Override // in.d
    public void s0() {
        super.s0();
        this.O = false;
        this.P = false;
        G0(true);
    }
}
