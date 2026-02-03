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
    public static final a f17686g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactContext f17687a;

    /* renamed from: b  reason: collision with root package name */
    private final fn.i f17688b;

    /* renamed from: c  reason: collision with root package name */
    private final fn.d f17689c;

    /* renamed from: d  reason: collision with root package name */
    private final ViewGroup f17690d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f17691e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f17692f;

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
    public final class b extends fn.d {
        public b(int i10) {
            I0(i10);
        }

        private final void U0(MotionEvent motionEvent) {
            fn.i P;
            if (S() == 0 && (!RNGestureHandlerRootHelper.this.f17691e || (P = P()) == null || !P.v())) {
                p();
                RNGestureHandlerRootHelper.this.f17691e = false;
            }
            if (motionEvent.getActionMasked() != 1 && motionEvent.getActionMasked() != 10) {
                return;
            }
            B();
        }

        @Override // fn.d
        protected void j0() {
            RNGestureHandlerRootHelper.this.f17691e = true;
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

        @Override // fn.d
        protected void l0(MotionEvent event, MotionEvent sourceEvent) {
            Intrinsics.checkNotNullParameter(event, "event");
            Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
            U0(event);
        }

        @Override // fn.d
        protected void m0(MotionEvent event, MotionEvent sourceEvent) {
            Intrinsics.checkNotNullParameter(event, "event");
            Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
            U0(event);
        }
    }

    public RNGestureHandlerRootHelper(ReactContext context, ViewGroup wrappedView) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(wrappedView, "wrappedView");
        this.f17687a = context;
        UiThreadUtil.assertOnUiThread();
        int id2 = wrappedView.getId();
        NativeModule nativeModule = context.getNativeModule(RNGestureHandlerModule.class);
        Intrinsics.checkNotNull(nativeModule);
        RNGestureHandlerModule rNGestureHandlerModule = (RNGestureHandlerModule) nativeModule;
        i registry = rNGestureHandlerModule.getRegistry();
        ViewGroup b10 = f17686g.b(wrappedView);
        this.f17690d = b10;
        Log.i(ReactConstants.TAG, "[GESTURE HANDLER] Initialize gesture handler for root view " + b10);
        fn.i iVar = new fn.i(wrappedView, registry, new m(), b10);
        iVar.F(0.1f);
        this.f17688b = iVar;
        b bVar = new b(-id2);
        this.f17689c = bVar;
        registry.j(bVar);
        registry.c(bVar.T(), id2, 3);
        rNGestureHandlerModule.registerRootHelper(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(RNGestureHandlerRootHelper rNGestureHandlerRootHelper) {
        rNGestureHandlerRootHelper.k();
    }

    private final void k() {
        fn.d dVar = this.f17689c;
        if (dVar != null && dVar.S() == 2) {
            dVar.k();
            dVar.B();
        }
    }

    public final void d(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        fn.i iVar = this.f17688b;
        if (iVar != null) {
            iVar.f(view);
        }
    }

    public final boolean e(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        this.f17692f = true;
        fn.i iVar = this.f17688b;
        Intrinsics.checkNotNull(iVar);
        iVar.B(event);
        this.f17692f = false;
        return this.f17691e;
    }

    public final ViewGroup f() {
        return this.f17690d;
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
        if (this.f17688b != null && !this.f17692f) {
            k();
        }
    }

    public final void j() {
        ViewGroup viewGroup = this.f17690d;
        Log.i(ReactConstants.TAG, "[GESTURE HANDLER] Tearing down gesture handler registered for root view " + viewGroup);
        ReactContext reactContext = this.f17687a;
        Intrinsics.checkNotNull(reactContext, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        NativeModule nativeModule = ((ThemedReactContext) reactContext).getReactApplicationContext().getNativeModule(RNGestureHandlerModule.class);
        Intrinsics.checkNotNull(nativeModule);
        RNGestureHandlerModule rNGestureHandlerModule = (RNGestureHandlerModule) nativeModule;
        i registry = rNGestureHandlerModule.getRegistry();
        fn.d dVar = this.f17689c;
        Intrinsics.checkNotNull(dVar);
        registry.g(dVar.T());
        rNGestureHandlerModule.unregisterRootHelper(this);
    }
}
