package wm;

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
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mm.i;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup {

    /* renamed from: y  reason: collision with root package name */
    public static final a f53829y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f53830d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53831e;

    /* renamed from: i  reason: collision with root package name */
    private float f53832i;

    /* renamed from: o  reason: collision with root package name */
    private float f53833o;

    /* renamed from: p  reason: collision with root package name */
    private int f53834p;

    /* renamed from: q  reason: collision with root package name */
    private int f53835q;

    /* renamed from: r  reason: collision with root package name */
    private int f53836r;

    /* renamed from: s  reason: collision with root package name */
    private om.a f53837s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f53838t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f53839u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f53840v;

    /* renamed from: w  reason: collision with root package name */
    private final nm.f f53841w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f53842x;

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
        this.f53830d = reactContext;
        this.f53837s = new om.c();
        this.f53839u = true;
        this.f53840v = new Rect();
        this.f53841w = new nm.f();
    }

    private final void c() {
        this.f53841w.n();
        g();
    }

    private final void d(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f53842x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f53832i = motionEvent.getX();
        this.f53833o = motionEvent.getY();
        i.a(this, this.f53840v);
        this.f53834p = this.f53840v.top;
    }

    private final void e(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f53840v);
        int i10 = this.f53840v.top - this.f53834p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f53842x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f53832i;
        float y10 = obtain.getY() - this.f53833o;
        boolean z11 = false;
        if (!this.f53831e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f53831e = z10;
        }
        if (this.f53831e) {
            if (this.f53841w.t()) {
                if (this.f53835q == 0) {
                    this.f53835q = this.f53841w.q();
                }
                int a10 = this.f53837s.a(gs.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f53841w.q(), this.f53836r);
                if (a10 != 0) {
                    this.f53841w.r(a10);
                }
            } else if (!this.f53841w.u()) {
                WindowInsetsCompat G = h0.G(this);
                if (G != null && G.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (h(y10, z11)) {
                    nm.f.y(this.f53841w, this, null, 2, null);
                }
            }
            this.f53833o = motionEvent.getY();
            this.f53832i = motionEvent.getX();
            this.f53834p = this.f53840v.top;
        }
    }

    private final void f(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f53842x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f53842x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f53842x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f53841w.t() || this.f53835q != this.f53841w.q()) {
            f11 = f10;
        }
        this.f53841w.l(f11);
        g();
    }

    private final void g() {
        this.f53831e = false;
        this.f53832i = 0.0f;
        this.f53833o = 0.0f;
        this.f53834p = 0;
        this.f53835q = 0;
        this.f53840v.setEmpty();
        VelocityTracker velocityTracker = this.f53842x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f53842x = null;
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        if (Build.VERSION.SDK_INT >= 30) {
            Activity currentActivity = this.f53830d.getCurrentActivity();
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
            if (!z10 && this.f53838t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f53839u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f53842x == null) {
            this.f53842x = VelocityTracker.obtain();
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
        om.a aVar = (om.a) g.a().get(interpolator);
        if (aVar == null) {
            aVar = new om.c();
        }
        this.f53837s = aVar;
    }

    public final void setOffset(double d10) {
        this.f53836r = (int) mm.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f53839u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f53838t = z10;
    }
}
