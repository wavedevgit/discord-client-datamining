package ym;

import android.app.Activity;
import android.graphics.Rect;
import android.os.Build;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.ViewConfiguration;
import android.view.WindowManager;
import android.view.WindowMetrics;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import om.i;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup {

    /* renamed from: y  reason: collision with root package name */
    public static final a f55651y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f55652d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f55653e;

    /* renamed from: i  reason: collision with root package name */
    private float f55654i;

    /* renamed from: o  reason: collision with root package name */
    private float f55655o;

    /* renamed from: p  reason: collision with root package name */
    private int f55656p;

    /* renamed from: q  reason: collision with root package name */
    private int f55657q;

    /* renamed from: r  reason: collision with root package name */
    private int f55658r;

    /* renamed from: s  reason: collision with root package name */
    private qm.a f55659s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f55660t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f55661u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f55662v;

    /* renamed from: w  reason: collision with root package name */
    private final pm.f f55663w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f55664x;

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
        this.f55652d = reactContext;
        this.f55659s = new qm.c();
        this.f55661u = true;
        this.f55662v = new Rect();
        this.f55663w = new pm.f();
    }

    private final void d() {
        this.f55663w.n();
        h();
    }

    private final void e(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f55664x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f55654i = motionEvent.getX();
        this.f55655o = motionEvent.getY();
        i.a(this, this.f55662v);
        this.f55656p = this.f55662v.top;
    }

    private final void f(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f55662v);
        int i10 = this.f55662v.top - this.f55656p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f55664x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f55654i;
        float y10 = obtain.getY() - this.f55655o;
        boolean z11 = false;
        if (!this.f55653e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f55653e = z10;
        }
        if (this.f55653e) {
            if (this.f55663w.t()) {
                if (this.f55657q == 0) {
                    this.f55657q = this.f55663w.q();
                }
                int a10 = this.f55659s.a(ps.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f55663w.q(), this.f55658r);
                if (a10 != 0) {
                    this.f55663w.r(a10);
                }
            } else if (!this.f55663w.u()) {
                WindowInsetsCompat F = i0.F(this);
                if (F != null && F.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (i(y10, z11)) {
                    pm.f.y(this.f55663w, this, null, 2, null);
                }
            }
            this.f55655o = motionEvent.getY();
            this.f55654i = motionEvent.getX();
            this.f55656p = this.f55662v.top;
        }
    }

    private final void g(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f55664x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f55664x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f55664x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f55663w.t() || this.f55657q != this.f55663w.q()) {
            f11 = f10;
        }
        this.f55663w.l(f11);
        h();
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        if (Build.VERSION.SDK_INT >= 30) {
            Activity currentActivity = this.f55652d.getCurrentActivity();
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

    private final void h() {
        this.f55653e = false;
        this.f55654i = 0.0f;
        this.f55655o = 0.0f;
        this.f55656p = 0;
        this.f55657q = 0;
        this.f55662v.setEmpty();
        VelocityTracker velocityTracker = this.f55664x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f55664x = null;
    }

    private final boolean i(float f10, boolean z10) {
        if (f10 < 0.0f) {
            if (!z10 && this.f55660t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f55661u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f55664x == null) {
            this.f55664x = VelocityTracker.obtain();
        }
        if (motionEvent != null) {
            num = Integer.valueOf(motionEvent.getAction());
        } else {
            num = null;
        }
        if (num != null && num.intValue() == 0) {
            e(motionEvent);
        } else if (num != null && num.intValue() == 2) {
            f(motionEvent);
        } else if (num != null && num.intValue() == 1) {
            g(motionEvent);
        } else if (num != null && num.intValue() == 3) {
            d();
        }
        return super.dispatchTouchEvent(motionEvent);
    }

    public final void setInterpolator(@NotNull String interpolator) {
        Intrinsics.checkNotNullParameter(interpolator, "interpolator");
        qm.a aVar = (qm.a) g.a().get(interpolator);
        if (aVar == null) {
            aVar = new qm.c();
        }
        this.f55659s = aVar;
    }

    public final void setOffset(double d10) {
        this.f55658r = (int) om.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f55661u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f55660t = z10;
    }
}
