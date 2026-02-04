package qm;

import android.app.Activity;
import android.graphics.Rect;
import android.os.Build;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.ViewConfiguration;
import android.view.WindowManager;
import android.view.WindowMetrics;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import gm.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup {

    /* renamed from: y  reason: collision with root package name */
    public static final a f47959y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f47960d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f47961e;

    /* renamed from: i  reason: collision with root package name */
    private float f47962i;

    /* renamed from: o  reason: collision with root package name */
    private float f47963o;

    /* renamed from: p  reason: collision with root package name */
    private int f47964p;

    /* renamed from: q  reason: collision with root package name */
    private int f47965q;

    /* renamed from: r  reason: collision with root package name */
    private int f47966r;

    /* renamed from: s  reason: collision with root package name */
    private im.a f47967s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f47968t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f47969u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f47970v;

    /* renamed from: w  reason: collision with root package name */
    private final hm.f f47971w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f47972x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f47960d = reactContext;
        this.f47967s = new im.c();
        this.f47969u = true;
        this.f47970v = new Rect();
        this.f47971w = new hm.f();
    }

    private final void c() {
        this.f47971w.n();
        g();
    }

    private final void d(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f47972x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f47962i = motionEvent.getX();
        this.f47963o = motionEvent.getY();
        i.a(this, this.f47970v);
        this.f47964p = this.f47970v.top;
    }

    private final void e(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f47970v);
        int i10 = this.f47970v.top - this.f47964p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f47972x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f47962i;
        float y10 = obtain.getY() - this.f47963o;
        boolean z11 = false;
        if (!this.f47961e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f47961e = z10;
        }
        if (this.f47961e) {
            if (this.f47971w.t()) {
                if (this.f47965q == 0) {
                    this.f47965q = this.f47971w.q();
                }
                int a10 = this.f47967s.a(as.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f47971w.q(), this.f47966r);
                if (a10 != 0) {
                    this.f47971w.r(a10);
                }
            } else if (!this.f47971w.u()) {
                WindowInsetsCompat G = h0.G(this);
                if (G != null && G.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (h(y10, z11)) {
                    hm.f.y(this.f47971w, this, null, 2, null);
                }
            }
            this.f47963o = motionEvent.getY();
            this.f47962i = motionEvent.getX();
            this.f47964p = this.f47970v.top;
        }
    }

    private final void f(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f47972x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f47972x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f47972x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f47971w.t() || this.f47965q != this.f47971w.q()) {
            f11 = f10;
        }
        this.f47971w.l(f11);
        g();
    }

    private final void g() {
        this.f47961e = false;
        this.f47962i = 0.0f;
        this.f47963o = 0.0f;
        this.f47964p = 0;
        this.f47965q = 0;
        this.f47970v.setEmpty();
        VelocityTracker velocityTracker = this.f47972x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f47972x = null;
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        if (Build.VERSION.SDK_INT >= 30) {
            Activity currentActivity = this.f47960d.getCurrentActivity();
            if (currentActivity != null && (windowManager = currentActivity.getWindowManager()) != null) {
                windowMetrics = windowManager.getCurrentWindowMetrics();
            } else {
                windowMetrics = null;
            }
            if (windowMetrics != null && (bounds = windowMetrics.getBounds()) != null) {
                return bounds.height();
            }
        }
        return 0;
    }

    private final boolean h(float f10, boolean z10) {
        if (f10 < 0.0f) {
            if (!z10 && this.f47968t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f47969u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f47972x == null) {
            this.f47972x = VelocityTracker.obtain();
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
        im.a aVar = (im.a) g.a().get(interpolator);
        if (aVar == null) {
            aVar = new im.c();
        }
        this.f47967s = aVar;
    }

    public final void setOffset(double d10) {
        this.f47966r = (int) gm.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f47969u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f47968t = z10;
    }
}
