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
    public static final a f19071g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactContext f19072a;

    /* renamed from: b  reason: collision with root package name */
    private final cn.i f19073b;

    /* renamed from: c  reason: collision with root package name */
    private final cn.d f19074c;

    /* renamed from: d  reason: collision with root package name */
    private final ViewGroup f19075d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f19076e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f19077f;

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
    public final class b extends cn.d {
        public b(int i10) {
            I0(i10);
        }

        private final void U0(MotionEvent motionEvent) {
            cn.i P;
            if (S() == 0 && (!RNGestureHandlerRootHelper.this.f19076e || (P = P()) == null || !P.v())) {
                p();
                RNGestureHandlerRootHelper.this.f19076e = false;
            }
            if (motionEvent.getActionMasked() != 1 && motionEvent.getActionMasked() != 10) {
                return;
            }
            B();
        }

        @Override // cn.d
        protected void j0() {
            RNGestureHandlerRootHelper.this.f19076e = true;
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

        @Override // cn.d
        protected void l0(MotionEvent event, MotionEvent sourceEvent) {
            Intrinsics.checkNotNullParameter(event, "event");
            Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
            U0(event);
        }

        @Override // cn.d
        protected void m0(MotionEvent event, MotionEvent sourceEvent) {
            Intrinsics.checkNotNullParameter(event, "event");
            Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
            U0(event);
        }
    }

    public RNGestureHandlerRootHelper(ReactContext context, ViewGroup wrappedView) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(wrappedView, "wrappedView");
        this.f19072a = context;
        UiThreadUtil.assertOnUiThread();
        int id2 = wrappedView.getId();
        NativeModule nativeModule = context.getNativeModule(RNGestureHandlerModule.class);
        Intrinsics.checkNotNull(nativeModule);
        RNGestureHandlerModule rNGestureHandlerModule = (RNGestureHandlerModule) nativeModule;
        i registry = rNGestureHandlerModule.getRegistry();
        ViewGroup b10 = f19071g.b(wrappedView);
        this.f19075d = b10;
        Log.i(ReactConstants.TAG, "[GESTURE HANDLER] Initialize gesture handler for root view " + b10);
        cn.i iVar = new cn.i(wrappedView, registry, new m(), b10);
        iVar.F(0.1f);
        this.f19073b = iVar;
        b bVar = new b(-id2);
        this.f19074c = bVar;
        registry.j(bVar);
        registry.c(bVar.T(), id2, 3);
        rNGestureHandlerModule.registerRootHelper(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(RNGestureHandlerRootHelper rNGestureHandlerRootHelper) {
        rNGestureHandlerRootHelper.k();
    }

    private final void k() {
        cn.d dVar = this.f19074c;
        if (dVar != null && dVar.S() == 2) {
            dVar.k();
            dVar.B();
        }
    }

    public final void d(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        cn.i iVar = this.f19073b;
        if (iVar != null) {
            iVar.f(view);
        }
    }

    public final boolean e(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        this.f19077f = true;
        cn.i iVar = this.f19073b;
        Intrinsics.checkNotNull(iVar);
        iVar.B(event);
        this.f19077f = false;
        return this.f19076e;
    }

    public final ViewGroup f() {
        return this.f19075d;
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
        if (this.f19073b != null && !this.f19077f) {
            k();
        }
    }

    public final void j() {
        ViewGroup viewGroup = this.f19075d;
        Log.i(ReactConstants.TAG, "[GESTURE HANDLER] Tearing down gesture handler registered for root view " + viewGroup);
        ReactContext reactContext = this.f19072a;
        Intrinsics.checkNotNull(reactContext, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        NativeModule nativeModule = ((ThemedReactContext) reactContext).getReactApplicationContext().getNativeModule(RNGestureHandlerModule.class);
        Intrinsics.checkNotNull(nativeModule);
        RNGestureHandlerModule rNGestureHandlerModule = (RNGestureHandlerModule) nativeModule;
        i registry = rNGestureHandlerModule.getRegistry();
        cn.d dVar = this.f19074c;
        Intrinsics.checkNotNull(dVar);
        registry.g(dVar.T());
        rNGestureHandlerModule.unregisterRootHelper(this);
    }
}
