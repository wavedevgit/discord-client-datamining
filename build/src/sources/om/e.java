package om;

import android.app.Activity;
import android.graphics.Rect;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.ViewConfiguration;
import android.view.WindowManager;
import android.view.WindowMetrics;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import fm.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends ReactViewGroup {

    /* renamed from: y  reason: collision with root package name */
    public static final a f44418y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f44419d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f44420e;

    /* renamed from: i  reason: collision with root package name */
    private float f44421i;

    /* renamed from: o  reason: collision with root package name */
    private float f44422o;

    /* renamed from: p  reason: collision with root package name */
    private int f44423p;

    /* renamed from: q  reason: collision with root package name */
    private int f44424q;

    /* renamed from: r  reason: collision with root package name */
    private int f44425r;

    /* renamed from: s  reason: collision with root package name */
    private hm.a f44426s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f44427t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f44428u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f44429v;

    /* renamed from: w  reason: collision with root package name */
    private final gm.f f44430w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f44431x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f44419d = reactContext;
        this.f44426s = new hm.c();
        this.f44428u = true;
        this.f44429v = new Rect();
        this.f44430w = new gm.f();
    }

    private final void c() {
        this.f44430w.n();
        g();
    }

    private final void d(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f44431x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f44421i = motionEvent.getX();
        this.f44422o = motionEvent.getY();
        i.a(this, this.f44429v);
        this.f44423p = this.f44429v.top;
    }

    private final void e(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f44429v);
        int i10 = this.f44429v.top - this.f44423p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f44431x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f44421i;
        float y10 = obtain.getY() - this.f44422o;
        boolean z11 = false;
        if (!this.f44420e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f44420e = z10;
        }
        if (this.f44420e) {
            if (this.f44430w.t()) {
                if (this.f44424q == 0) {
                    this.f44424q = this.f44430w.q();
                }
                int a10 = this.f44426s.a(xr.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f44430w.q(), this.f44425r);
                if (a10 != 0) {
                    this.f44430w.r(a10);
                }
            } else if (!this.f44430w.u()) {
                WindowInsetsCompat G = h0.G(this);
                if (G != null && G.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (h(y10, z11)) {
                    gm.f.y(this.f44430w, this, null, 2, null);
                }
            }
            this.f44422o = motionEvent.getY();
            this.f44421i = motionEvent.getX();
            this.f44423p = this.f44429v.top;
        }
    }

    private final void f(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f44431x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f44431x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f44431x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f44430w.t() || this.f44424q != this.f44430w.q()) {
            f11 = f10;
        }
        this.f44430w.l(f11);
        g();
    }

    private final void g() {
        this.f44420e = false;
        this.f44421i = 0.0f;
        this.f44422o = 0.0f;
        this.f44423p = 0;
        this.f44424q = 0;
        this.f44429v.setEmpty();
        VelocityTracker velocityTracker = this.f44431x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f44431x = null;
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        Activity currentActivity = this.f44419d.getCurrentActivity();
        if (currentActivity != null && (windowManager = currentActivity.getWindowManager()) != null) {
            windowMetrics = windowManager.getCurrentWindowMetrics();
        } else {
            windowMetrics = null;
        }
        if (windowMetrics != null && (bounds = windowMetrics.getBounds()) != null) {
            return bounds.height();
        }
        return 0;
    }

    private final boolean h(float f10, boolean z10) {
        if (f10 < 0.0f) {
            if (!z10 && this.f44427t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f44428u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f44431x == null) {
            this.f44431x = VelocityTracker.obtain();
        }
        if (motionEvent != null) {
            num = Integer.valueOf(motionEvent.getAction());
        } else {
            num = null;
        }
        if (num != null && num.intValue() == 0) {
            d(motionEvent);
        } else if (num != null && num.intValue() == 2) {
            e(motionEvent);
        } else if (num != null && num.intValue() == 1) {
            f(motionEvent);
        } else if (num != null && num.intValue() == 3) {
            c();
        }
        return super.dispatchTouchEvent(motionEvent);
    }

    public final void setInterpolator(@NotNull String interpolator) {
        Intrinsics.checkNotNullParameter(interpolator, "interpolator");
        hm.a aVar = (hm.a) f.a().get(interpolator);
        if (aVar == null) {
            aVar = new hm.c();
        }
        this.f44426s = aVar;
    }

    public final void setOffset(double d10) {
        this.f44425r = (int) fm.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f44428u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f44427t = z10;
    }
}
