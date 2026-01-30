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
    public static final a f44434y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f44435d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f44436e;

    /* renamed from: i  reason: collision with root package name */
    private float f44437i;

    /* renamed from: o  reason: collision with root package name */
    private float f44438o;

    /* renamed from: p  reason: collision with root package name */
    private int f44439p;

    /* renamed from: q  reason: collision with root package name */
    private int f44440q;

    /* renamed from: r  reason: collision with root package name */
    private int f44441r;

    /* renamed from: s  reason: collision with root package name */
    private hm.a f44442s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f44443t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f44444u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f44445v;

    /* renamed from: w  reason: collision with root package name */
    private final gm.f f44446w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f44447x;

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
        this.f44435d = reactContext;
        this.f44442s = new hm.c();
        this.f44444u = true;
        this.f44445v = new Rect();
        this.f44446w = new gm.f();
    }

    private final void c() {
        this.f44446w.n();
        g();
    }

    private final void d(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f44447x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f44437i = motionEvent.getX();
        this.f44438o = motionEvent.getY();
        i.a(this, this.f44445v);
        this.f44439p = this.f44445v.top;
    }

    private final void e(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f44445v);
        int i10 = this.f44445v.top - this.f44439p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f44447x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f44437i;
        float y10 = obtain.getY() - this.f44438o;
        boolean z11 = false;
        if (!this.f44436e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f44436e = z10;
        }
        if (this.f44436e) {
            if (this.f44446w.t()) {
                if (this.f44440q == 0) {
                    this.f44440q = this.f44446w.q();
                }
                int a10 = this.f44442s.a(xr.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f44446w.q(), this.f44441r);
                if (a10 != 0) {
                    this.f44446w.r(a10);
                }
            } else if (!this.f44446w.u()) {
                WindowInsetsCompat G = h0.G(this);
                if (G != null && G.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (h(y10, z11)) {
                    gm.f.y(this.f44446w, this, null, 2, null);
                }
            }
            this.f44438o = motionEvent.getY();
            this.f44437i = motionEvent.getX();
            this.f44439p = this.f44445v.top;
        }
    }

    private final void f(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f44447x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f44447x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f44447x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f44446w.t() || this.f44440q != this.f44446w.q()) {
            f11 = f10;
        }
        this.f44446w.l(f11);
        g();
    }

    private final void g() {
        this.f44436e = false;
        this.f44437i = 0.0f;
        this.f44438o = 0.0f;
        this.f44439p = 0;
        this.f44440q = 0;
        this.f44445v.setEmpty();
        VelocityTracker velocityTracker = this.f44447x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f44447x = null;
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        Activity currentActivity = this.f44435d.getCurrentActivity();
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
            if (!z10 && this.f44443t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f44444u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f44447x == null) {
            this.f44447x = VelocityTracker.obtain();
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
        this.f44442s = aVar;
    }

    public final void setOffset(double d10) {
        this.f44441r = (int) fm.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f44444u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f44443t = z10;
    }
}
