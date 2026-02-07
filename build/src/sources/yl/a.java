package yl;

import android.view.MotionEvent;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final b f55516c = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private static final String f55517d;

    /* renamed from: e  reason: collision with root package name */
    private static final ZoomLogger f55518e;

    /* renamed from: a  reason: collision with root package name */
    private final InterfaceC0752a f55519a;

    /* renamed from: b  reason: collision with root package name */
    private int f55520b;

    /* renamed from: yl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0752a {
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
        f55517d = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f55518e = aVar.a(TAG);
    }

    public a(InterfaceC0752a callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f55519a = callback;
    }

    private final boolean g(int i10) {
        if (i10 == 3) {
            return true;
        }
        return false;
    }

    private final int j(MotionEvent motionEvent) {
        int actionMasked;
        ZoomLogger zoomLogger = f55518e;
        zoomLogger.f("processTouchEvent:", "start.");
        if (a()) {
            return 2;
        }
        boolean g10 = this.f55519a.g(motionEvent);
        zoomLogger.f("processTouchEvent:", "scaleResult:", Boolean.valueOf(g10));
        if (!d()) {
            g10 |= this.f55519a.f(motionEvent);
            zoomLogger.f("processTouchEvent:", "flingResult:", Boolean.valueOf(g10));
        }
        if (e() && ((actionMasked = motionEvent.getActionMasked()) == 1 || actionMasked == 3)) {
            zoomLogger.b("processTouchEvent:", "up event while scrolling, dispatching endScrollGesture.");
            this.f55519a.e();
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
        ZoomLogger zoomLogger = f55518e;
        zoomLogger.f("trySetState:", p(i10));
        if (!this.f55519a.h(i10)) {
            return false;
        }
        if (i10 == this.f55520b && !g(i10)) {
            return true;
        }
        int i11 = this.f55520b;
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
            this.f55519a.b();
        }
        this.f55519a.a(i11);
        zoomLogger.b("setState:", p(i10));
        this.f55520b = i10;
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
        if (this.f55520b == 3) {
            return true;
        }
        return false;
    }

    public final boolean b() {
        if (this.f55520b == 4) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        if (this.f55520b == 0) {
            return true;
        }
        return false;
    }

    public final boolean d() {
        if (this.f55520b == 2) {
            return true;
        }
        return false;
    }

    public final boolean e() {
        if (this.f55520b == 1) {
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
