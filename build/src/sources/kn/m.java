package kn;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootHelper;
import kn.d;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends d {
    public static final a R = new a(null);
    private static final com.swmansion.gesturehandler.react.m S = new com.swmansion.gesturehandler.react.m();
    private Handler O;
    private Runnable P = new Runnable() { // from class: kn.l
        @Override // java.lang.Runnable
        public final void run() {
            m.W0(m.this);
        }
    };
    private z Q = new z(0.0d, 0.0d, 0.0d, 0.0d, 0.0d, 31, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f31848b = m.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f31849c = "HoverGestureHandler";

        @Override // kn.d.c
        public String d() {
            return this.f31849c;
        }

        @Override // kn.d.c
        public Class e() {
            return this.f31848b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kn.d.c
        /* renamed from: g */
        public m a(Context context) {
            return new m();
        }

        @Override // kn.d.c
        /* renamed from: h */
        public ln.c c(m handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new ln.c(handler);
        }
    }

    private final void V0() {
        int S2 = S();
        if (S2 != 0) {
            if (S2 != 2) {
                if (S2 != 4) {
                    return;
                }
                B();
                return;
            }
            D();
            return;
        }
        q();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void W0(m mVar) {
        mVar.V0();
    }

    private final boolean Y0(d dVar) {
        View W = dVar.W();
        while (W != null) {
            if (Intrinsics.areEqual(W, W())) {
                return true;
            }
            ViewParent parent = W.getParent();
            if (parent instanceof View) {
                W = (View) parent;
            } else {
                W = null;
            }
        }
        return false;
    }

    private final Boolean Z0(View view, View view2, View view3) {
        if (Intrinsics.areEqual(view3, view2)) {
            return Boolean.TRUE;
        }
        if (Intrinsics.areEqual(view3, view)) {
            return Boolean.FALSE;
        }
        if (view3 instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view3;
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                Boolean Z0 = Z0(view, view2, S.c(viewGroup, i10));
                if (Z0 != null) {
                    return Z0;
                }
            }
            return null;
        }
        return null;
    }

    static /* synthetic */ Boolean a1(m mVar, View view, View view2, View view3, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            view3 = view.getRootView();
        }
        return mVar.Z0(view, view2, view3);
    }

    @Override // kn.d
    public boolean K0(d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if ((handler instanceof m) && !((m) handler).Y0(this)) {
            View W = handler.W();
            Intrinsics.checkNotNull(W);
            View W2 = W();
            Intrinsics.checkNotNull(W2);
            Boolean a12 = a1(this, W, W2, null, 4, null);
            Intrinsics.checkNotNull(a12);
            return a12.booleanValue();
        }
        return super.K0(handler);
    }

    @Override // kn.d
    public boolean L0(d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (((handler instanceof m) && (Y0(handler) || ((m) handler).Y0(this))) || (handler instanceof RNGestureHandlerRootHelper.b)) {
            return true;
        }
        return super.L0(handler);
    }

    @Override // kn.d
    public boolean M0(d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if ((handler instanceof m) && !Y0(handler) && !((m) handler).Y0(this)) {
            View W = W();
            Intrinsics.checkNotNull(W);
            View W2 = handler.W();
            Intrinsics.checkNotNull(W2);
            Boolean a12 = a1(this, W, W2, null, 4, null);
            if (a12 != null) {
                return a12.booleanValue();
            }
        }
        return super.M0(handler);
    }

    public final z X0() {
        return this.Q;
    }

    @Override // kn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (event.getAction() == 0) {
            Handler handler = this.O;
            if (handler != null) {
                handler.removeCallbacksAndMessages(null);
            }
            this.O = null;
        } else if (event.getAction() == 1 && !f0()) {
            V0();
        }
    }

    @Override // kn.d
    protected void m0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (event.getAction() == 10) {
            if (this.O == null) {
                this.O = new Handler(Looper.getMainLooper());
            }
            Handler handler = this.O;
            Intrinsics.checkNotNull(handler);
            handler.postDelayed(this.P, 4L);
        } else if (!f0()) {
            V0();
        } else if (S() == 4 && event.getToolType(0) == 2) {
            this.Q = z.f31935f.a(event);
        } else if (S() == 0) {
            if (event.getAction() == 7 || event.getAction() == 9) {
                p();
                k();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kn.d
    public void o0() {
        super.o0();
        this.Q = new z(0.0d, 0.0d, 0.0d, 0.0d, 0.0d, 31, null);
    }
}
