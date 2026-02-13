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
    public static final a f56220y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f56221d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56222e;

    /* renamed from: i  reason: collision with root package name */
    private float f56223i;

    /* renamed from: o  reason: collision with root package name */
    private float f56224o;

    /* renamed from: p  reason: collision with root package name */
    private int f56225p;

    /* renamed from: q  reason: collision with root package name */
    private int f56226q;

    /* renamed from: r  reason: collision with root package name */
    private int f56227r;

    /* renamed from: s  reason: collision with root package name */
    private qm.a f56228s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f56229t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f56230u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f56231v;

    /* renamed from: w  reason: collision with root package name */
    private final pm.f f56232w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f56233x;

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
        this.f56221d = reactContext;
        this.f56228s = new qm.c();
        this.f56230u = true;
        this.f56231v = new Rect();
        this.f56232w = new pm.f();
    }

    private final void d() {
        this.f56232w.n();
        h();
    }

    private final void e(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f56233x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f56223i = motionEvent.getX();
        this.f56224o = motionEvent.getY();
        i.a(this, this.f56231v);
        this.f56225p = this.f56231v.top;
    }

    private final void f(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f56231v);
        int i10 = this.f56231v.top - this.f56225p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f56233x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f56223i;
        float y10 = obtain.getY() - this.f56224o;
        boolean z11 = false;
        if (!this.f56222e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f56222e = z10;
        }
        if (this.f56222e) {
            if (this.f56232w.t()) {
                if (this.f56226q == 0) {
                    this.f56226q = this.f56232w.q();
                }
                int a10 = this.f56228s.a(ps.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f56232w.q(), this.f56227r);
                if (a10 != 0) {
                    this.f56232w.r(a10);
                }
            } else if (!this.f56232w.u()) {
                WindowInsetsCompat F = i0.F(this);
                if (F != null && F.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (i(y10, z11)) {
                    pm.f.y(this.f56232w, this, null, 2, null);
                }
            }
            this.f56224o = motionEvent.getY();
            this.f56223i = motionEvent.getX();
            this.f56225p = this.f56231v.top;
        }
    }

    private final void g(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f56233x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f56233x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f56233x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f56232w.t() || this.f56226q != this.f56232w.q()) {
            f11 = f10;
        }
        this.f56232w.l(f11);
        h();
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        if (Build.VERSION.SDK_INT >= 30) {
            Activity currentActivity = this.f56221d.getCurrentActivity();
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
        this.f56222e = false;
        this.f56223i = 0.0f;
        this.f56224o = 0.0f;
        this.f56225p = 0;
        this.f56226q = 0;
        this.f56231v.setEmpty();
        VelocityTracker velocityTracker = this.f56233x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f56233x = null;
    }

    private final boolean i(float f10, boolean z10) {
        if (f10 < 0.0f) {
            if (!z10 && this.f56229t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f56230u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f56233x == null) {
            this.f56233x = VelocityTracker.obtain();
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
        this.f56228s = aVar;
    }

    public final void setOffset(double d10) {
        this.f56227r = (int) om.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f56230u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f56229t = z10;
    }
}
