package com.swmansion.gesturehandler.react;

import android.os.SystemClock;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.RootView;
import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RNGestureHandlerRootHelper {

    /* renamed from: g  reason: collision with root package name */
    public static final a f18961g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactContext f18962a;

    /* renamed from: b  reason: collision with root package name */
    private final nn.i f18963b;

    /* renamed from: c  reason: collision with root package name */
    private final nn.d f18964c;

    /* renamed from: d  reason: collision with root package name */
    private final ViewGroup f18965d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f18966e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f18967f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final ViewGroup b(ViewGroup viewGroup) {
            UiThreadUtil.assertOnUiThread();
            ViewParent viewParent = viewGroup;
            while (viewParent != null && !(viewParent instanceof RootView)) {
                viewParent = viewParent.getParent();
            }
            if (viewParent != null) {
                return (ViewGroup) viewParent;
            }
            throw new IllegalStateException(("View " + viewGroup + " has not been mounted under ReactRootView").toString());
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b extends nn.d {
        public b(int i10) {
            I0(i10);
        }

        private final void U0(MotionEvent motionEvent) {
            nn.i P;
            if (S() == 0 && (!RNGestureHandlerRootHelper.this.f18966e || (P = P()) == null || !P.v())) {
                p();
                RNGestureHandlerRootHelper.this.f18966e = false;
            }
            if (motionEvent.getActionMasked() != 1 && motionEvent.getActionMasked() != 10) {
                return;
            }
            B();
        }

        @Override // nn.d
        protected void j0() {
            RNGestureHandlerRootHelper.this.f18966e = true;
            long uptimeMillis = SystemClock.uptimeMillis();
            MotionEvent obtain = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
            obtain.setAction(3);
            if (RNGestureHandlerRootHelper.this.f() instanceof RootView) {
                ViewGroup f10 = RNGestureHandlerRootHelper.this.f();
                Intrinsics.checkNotNull(obtain);
                ((RootView) RNGestureHandlerRootHelper.this.f()).onChildStartedNativeGesture(f10, obtain);
            }
            obtain.recycle();
        }

        @Override // nn.d
        protected void l0(MotionEvent event, MotionEvent sourceEvent) {
            Intrinsics.checkNotNullParameter(event, "event");
            Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
            U0(event);
        }

        @Override // nn.d
        protected void m0(MotionEvent event, MotionEvent sourceEvent) {
            Intrinsics.checkNotNullParameter(event, "event");
            Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
            U0(event);
        }
    }

    public RNGestureHandlerRootHelper(ReactContext context, ViewGroup wrappedView) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(wrappedView, "wrappedView");
        this.f18962a = context;
        UiThreadUtil.assertOnUiThread();
        int id2 = wrappedView.getId();
        NativeModule nativeModule = context.getNativeModule(RNGestureHandlerModule.class);
        Intrinsics.checkNotNull(nativeModule);
        RNGestureHandlerModule rNGestureHandlerModule = (RNGestureHandlerModule) nativeModule;
        i registry = rNGestureHandlerModule.getRegistry();
        ViewGroup b10 = f18961g.b(wrappedView);
        this.f18965d = b10;
        Log.i(ReactConstants.TAG, "[GESTURE HANDLER] Initialize gesture handler for root view " + b10);
        nn.i iVar = new nn.i(wrappedView, registry, new m(), b10);
        iVar.F(0.1f);
        this.f18963b = iVar;
        b bVar = new b(-id2);
        this.f18964c = bVar;
        registry.j(bVar);
        registry.c(bVar.T(), id2, 3);
        rNGestureHandlerModule.registerRootHelper(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(RNGestureHandlerRootHelper rNGestureHandlerRootHelper) {
        rNGestureHandlerRootHelper.k();
    }

    private final void k() {
        nn.d dVar = this.f18964c;
        if (dVar != null && dVar.S() == 2) {
            dVar.k();
            dVar.B();
        }
    }

    public final void d(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        nn.i iVar = this.f18963b;
        if (iVar != null) {
            iVar.f(view);
        }
    }

    public final boolean e(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        this.f18967f = true;
        nn.i iVar = this.f18963b;
        Intrinsics.checkNotNull(iVar);
        iVar.B(event);
        this.f18967f = false;
        return this.f18966e;
    }

    public final ViewGroup f() {
        return this.f18965d;
    }

    public final void g(int i10, boolean z10) {
        if (z10) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.swmansion.gesturehandler.react.j
                @Override // java.lang.Runnable
                public final void run() {
                    RNGestureHandlerRootHelper.h(RNGestureHandlerRootHelper.this);
                }
            });
        }
    }

    public final void i() {
        if (this.f18963b != null && !this.f18967f) {
            k();
        }
    }

    public final void j() {
        ViewGroup viewGroup = this.f18965d;
        Log.i(ReactConstants.TAG, "[GESTURE HANDLER] Tearing down gesture handler registered for root view " + viewGroup);
        ReactContext reactContext = this.f18962a;
        Intrinsics.checkNotNull(reactContext, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        NativeModule nativeModule = ((ThemedReactContext) reactContext).getReactApplicationContext().getNativeModule(RNGestureHandlerModule.class);
        Intrinsics.checkNotNull(nativeModule);
        RNGestureHandlerModule rNGestureHandlerModule = (RNGestureHandlerModule) nativeModule;
        i registry = rNGestureHandlerModule.getRegistry();
        nn.d dVar = this.f18964c;
        Intrinsics.checkNotNull(dVar);
        registry.g(dVar.T());
        rNGestureHandlerModule.unregisterRootHelper(this);
    }
}
