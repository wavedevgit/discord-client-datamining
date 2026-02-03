package pm;

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
import gm.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends ReactViewGroup {

    /* renamed from: y  reason: collision with root package name */
    public static final a f46224y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f46225d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f46226e;

    /* renamed from: i  reason: collision with root package name */
    private float f46227i;

    /* renamed from: o  reason: collision with root package name */
    private float f46228o;

    /* renamed from: p  reason: collision with root package name */
    private int f46229p;

    /* renamed from: q  reason: collision with root package name */
    private int f46230q;

    /* renamed from: r  reason: collision with root package name */
    private int f46231r;

    /* renamed from: s  reason: collision with root package name */
    private im.a f46232s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f46233t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f46234u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f46235v;

    /* renamed from: w  reason: collision with root package name */
    private final hm.f f46236w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f46237x;

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
        this.f46225d = reactContext;
        this.f46232s = new im.c();
        this.f46234u = true;
        this.f46235v = new Rect();
        this.f46236w = new hm.f();
    }

    private final void c() {
        this.f46236w.n();
        g();
    }

    private final void d(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f46237x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f46227i = motionEvent.getX();
        this.f46228o = motionEvent.getY();
        i.a(this, this.f46235v);
        this.f46229p = this.f46235v.top;
    }

    private final void e(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f46235v);
        int i10 = this.f46235v.top - this.f46229p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f46237x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f46227i;
        float y10 = obtain.getY() - this.f46228o;
        boolean z11 = false;
        if (!this.f46226e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f46226e = z10;
        }
        if (this.f46226e) {
            if (this.f46236w.t()) {
                if (this.f46230q == 0) {
                    this.f46230q = this.f46236w.q();
                }
                int a10 = this.f46232s.a(yr.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f46236w.q(), this.f46231r);
                if (a10 != 0) {
                    this.f46236w.r(a10);
                }
            } else if (!this.f46236w.u()) {
                WindowInsetsCompat G = h0.G(this);
                if (G != null && G.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (h(y10, z11)) {
                    hm.f.y(this.f46236w, this, null, 2, null);
                }
            }
            this.f46228o = motionEvent.getY();
            this.f46227i = motionEvent.getX();
            this.f46229p = this.f46235v.top;
        }
    }

    private final void f(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f46237x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f46237x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f46237x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f46236w.t() || this.f46230q != this.f46236w.q()) {
            f11 = f10;
        }
        this.f46236w.l(f11);
        g();
    }

    private final void g() {
        this.f46226e = false;
        this.f46227i = 0.0f;
        this.f46228o = 0.0f;
        this.f46229p = 0;
        this.f46230q = 0;
        this.f46235v.setEmpty();
        VelocityTracker velocityTracker = this.f46237x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f46237x = null;
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        Activity currentActivity = this.f46225d.getCurrentActivity();
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
            if (!z10 && this.f46233t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f46234u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f46237x == null) {
            this.f46237x = VelocityTracker.obtain();
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
        im.a aVar = (im.a) f.a().get(interpolator);
        if (aVar == null) {
            aVar = new im.c();
        }
        this.f46232s = aVar;
    }

    public final void setOffset(double d10) {
        this.f46231r = (int) gm.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f46234u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f46233t = z10;
    }
}
