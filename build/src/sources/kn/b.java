package kn;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import com.facebook.react.bridge.ReadableMap;
import java.util.ArrayList;
import kn.c0;
import kn.d;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends d {
    public static final a W = new a(null);
    private static final double X;
    private static final double Y;
    private Handler S;
    private int T;
    private VelocityTracker V;
    private int O = 1;
    private int P = 1;
    private final long Q = 800;
    private final long R = 2000;
    private final Runnable U = new Runnable() { // from class: kn.a
        @Override // java.lang.Runnable
        public final void run() {
            b.X0(b.this);
        }
    };

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: kn.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0450b extends d.c {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31813d = new a(null);

        /* renamed from: b  reason: collision with root package name */
        private final Class f31814b = b.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f31815c = "FlingGestureHandler";

        /* renamed from: kn.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        @Override // kn.d.c
        public String d() {
            return this.f31815c;
        }

        @Override // kn.d.c
        public Class e() {
            return this.f31814b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kn.d.c
        /* renamed from: g */
        public b a(Context context) {
            return new b();
        }

        @Override // kn.d.c
        /* renamed from: h */
        public ln.a c(b handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new ln.a(handler);
        }

        @Override // kn.d.c
        /* renamed from: i */
        public void f(b handler, ReadableMap config) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(config, "config");
            super.f(handler, config);
            if (config.hasKey("numberOfPointers")) {
                handler.Z0(config.getInt("numberOfPointers"));
            }
            if (config.hasKey("direction")) {
                handler.Y0(config.getInt("direction"));
            }
        }
    }

    static {
        k kVar = k.f31894a;
        X = kVar.a(30.0d);
        Y = kVar.a(60.0d);
    }

    private final void V0(VelocityTracker velocityTracker, MotionEvent motionEvent) {
        float rawX = motionEvent.getRawX() - motionEvent.getX();
        float rawY = motionEvent.getRawY() - motionEvent.getY();
        motionEvent.offsetLocation(rawX, rawY);
        Intrinsics.checkNotNull(velocityTracker);
        velocityTracker.addMovement(motionEvent);
        motionEvent.offsetLocation(-rawX, -rawY);
    }

    private final void W0(MotionEvent motionEvent) {
        if (!b1(motionEvent)) {
            D();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X0(b bVar) {
        bVar.D();
    }

    private final void a1(MotionEvent motionEvent) {
        this.V = VelocityTracker.obtain();
        p();
        this.T = 1;
        Handler handler = this.S;
        if (handler == null) {
            this.S = new Handler(Looper.getMainLooper());
        } else {
            Intrinsics.checkNotNull(handler);
            handler.removeCallbacksAndMessages(null);
        }
        Handler handler2 = this.S;
        Intrinsics.checkNotNull(handler2);
        handler2.postDelayed(this.U, this.Q);
    }

    private final boolean b1(MotionEvent motionEvent) {
        boolean z10;
        boolean z11;
        boolean z12;
        V0(this.V, motionEvent);
        c0.a aVar = c0.f31826f;
        VelocityTracker velocityTracker = this.V;
        Intrinsics.checkNotNull(velocityTracker);
        c0 b10 = aVar.b(velocityTracker);
        Integer[] numArr = {2, 1, 4, 8};
        ArrayList<Boolean> arrayList = new ArrayList(4);
        for (int i10 = 0; i10 < 4; i10++) {
            arrayList.add(Boolean.valueOf(c1(this, b10, numArr[i10].intValue(), X)));
        }
        Integer[] numArr2 = {5, 9, 6, 10};
        ArrayList<Boolean> arrayList2 = new ArrayList(4);
        for (int i11 = 0; i11 < 4; i11++) {
            arrayList2.add(Boolean.valueOf(c1(this, b10, numArr2[i11].intValue(), Y)));
        }
        if (!arrayList.isEmpty()) {
            for (Boolean bool : arrayList) {
                if (bool.booleanValue()) {
                    z10 = true;
                    break;
                }
            }
        }
        z10 = false;
        if (!arrayList2.isEmpty()) {
            for (Boolean bool2 : arrayList2) {
                if (bool2.booleanValue()) {
                    z11 = true;
                    break;
                }
            }
        }
        z11 = false;
        boolean z13 = z10 | z11;
        if (b10.k() > this.R) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (this.T != this.O || !z13 || !z12) {
            return false;
        }
        Handler handler = this.S;
        Intrinsics.checkNotNull(handler);
        handler.removeCallbacksAndMessages(null);
        k();
        return true;
    }

    private static final boolean c1(b bVar, c0 c0Var, int i10, double d10) {
        if ((bVar.P & i10) == i10 && c0Var.l(c0.f31826f.a(i10), d10)) {
            return true;
        }
        return false;
    }

    public final void Y0(int i10) {
        this.P = i10;
    }

    public final void Z0(int i10) {
        this.O = i10;
    }

    @Override // kn.d
    protected void j0() {
        Handler handler = this.S;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
        }
    }

    @Override // kn.d
    public void l(boolean z10) {
        super.l(z10);
        B();
    }

    @Override // kn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (J0(sourceEvent)) {
            int S = S();
            if (S == 0) {
                a1(sourceEvent);
            }
            if (S == 2) {
                b1(sourceEvent);
                if (sourceEvent.getPointerCount() > this.T) {
                    this.T = sourceEvent.getPointerCount();
                }
                if (sourceEvent.getActionMasked() == 1) {
                    W0(sourceEvent);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kn.d
    public void o0() {
        VelocityTracker velocityTracker = this.V;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.V = null;
        Handler handler = this.S;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
        }
    }

    @Override // kn.d
    public void s0() {
        super.s0();
        this.O = 1;
        this.P = 1;
    }
}
