package bm;

import android.view.MotionEvent;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final b f7295c = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private static final String f7296d;

    /* renamed from: e  reason: collision with root package name */
    private static final ZoomLogger f7297e;

    /* renamed from: a  reason: collision with root package name */
    private final InterfaceC0100a f7298a;

    /* renamed from: b  reason: collision with root package name */
    private int f7299b;

    /* renamed from: bm.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0100a {
        void a(int i10);

        void b();

        void e();

        boolean f(MotionEvent motionEvent);

        boolean g(MotionEvent motionEvent);

        boolean h(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f7296d = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18183b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f7297e = aVar.a(TAG);
    }

    public a(InterfaceC0100a callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f7298a = callback;
    }

    private final boolean g(int i10) {
        if (i10 == 3) {
            return true;
        }
        return false;
    }

    private final int j(MotionEvent motionEvent) {
        int actionMasked;
        ZoomLogger zoomLogger = f7297e;
        zoomLogger.f("processTouchEvent:", "start.");
        if (a()) {
            return 2;
        }
        boolean g10 = this.f7298a.g(motionEvent);
        zoomLogger.f("processTouchEvent:", "scaleResult:", Boolean.valueOf(g10));
        if (!d()) {
            g10 |= this.f7298a.f(motionEvent);
            zoomLogger.f("processTouchEvent:", "flingResult:", Boolean.valueOf(g10));
        }
        if (e() && ((actionMasked = motionEvent.getActionMasked()) == 1 || actionMasked == 3)) {
            zoomLogger.b("processTouchEvent:", "up event while scrolling, dispatching endScrollGesture.");
            this.f7298a.e();
        }
        if (g10 && !c()) {
            zoomLogger.f("processTouchEvent:", "returning: TOUCH_STEAL");
            return 2;
        } else if (g10) {
            zoomLogger.f("processTouchEvent:", "returning: TOUCH_LISTEN");
            return 1;
        } else {
            zoomLogger.f("processTouchEvent:", "returning: TOUCH_NO");
            f();
            return 0;
        }
    }

    private final boolean o(int i10) {
        ZoomLogger zoomLogger = f7297e;
        zoomLogger.f("trySetState:", p(i10));
        if (!this.f7298a.h(i10)) {
            return false;
        }
        if (i10 == this.f7299b && !g(i10)) {
            return true;
        }
        int i11 = this.f7299b;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 4 && i11 == 3) {
                        return false;
                    }
                } else if (i11 == 3) {
                    return false;
                }
            } else if (i11 == 2 || i11 == 3) {
                return false;
            }
        } else {
            this.f7298a.b();
        }
        this.f7298a.a(i11);
        zoomLogger.b("setState:", p(i10));
        this.f7299b = i10;
        return true;
    }

    private final String p(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            return "";
                        }
                        return "FLINGING";
                    }
                    return "ANIMATING";
                }
                return "PINCHING";
            }
            return "SCROLLING";
        }
        return "IDLE";
    }

    public final boolean a() {
        if (this.f7299b == 3) {
            return true;
        }
        return false;
    }

    public final boolean b() {
        if (this.f7299b == 4) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        if (this.f7299b == 0) {
            return true;
        }
        return false;
    }

    public final boolean d() {
        if (this.f7299b == 2) {
            return true;
        }
        return false;
    }

    public final boolean e() {
        if (this.f7299b == 1) {
            return true;
        }
        return false;
    }

    public final boolean f() {
        return o(0);
    }

    public final boolean h(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        if (j(ev2) > 1) {
            return true;
        }
        return false;
    }

    public final boolean i(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        if (j(ev2) > 0) {
            return true;
        }
        return false;
    }

    public final boolean k() {
        return o(3);
    }

    public final boolean l() {
        return o(4);
    }

    public final boolean m() {
        return o(2);
    }

    public final boolean n() {
        return o(1);
    }
}
