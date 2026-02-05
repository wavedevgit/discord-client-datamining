package tm;

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
import jm.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup {

    /* renamed from: y  reason: collision with root package name */
    public static final a f50826y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f50827d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f50828e;

    /* renamed from: i  reason: collision with root package name */
    private float f50829i;

    /* renamed from: o  reason: collision with root package name */
    private float f50830o;

    /* renamed from: p  reason: collision with root package name */
    private int f50831p;

    /* renamed from: q  reason: collision with root package name */
    private int f50832q;

    /* renamed from: r  reason: collision with root package name */
    private int f50833r;

    /* renamed from: s  reason: collision with root package name */
    private lm.a f50834s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f50835t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f50836u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f50837v;

    /* renamed from: w  reason: collision with root package name */
    private final km.f f50838w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f50839x;

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
        this.f50827d = reactContext;
        this.f50834s = new lm.c();
        this.f50836u = true;
        this.f50837v = new Rect();
        this.f50838w = new km.f();
    }

    private final void c() {
        this.f50838w.n();
        g();
    }

    private final void d(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f50839x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f50829i = motionEvent.getX();
        this.f50830o = motionEvent.getY();
        i.a(this, this.f50837v);
        this.f50831p = this.f50837v.top;
    }

    private final void e(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f50837v);
        int i10 = this.f50837v.top - this.f50831p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f50839x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f50829i;
        float y10 = obtain.getY() - this.f50830o;
        boolean z11 = false;
        if (!this.f50828e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f50828e = z10;
        }
        if (this.f50828e) {
            if (this.f50838w.t()) {
                if (this.f50832q == 0) {
                    this.f50832q = this.f50838w.q();
                }
                int a10 = this.f50834s.a(ds.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f50838w.q(), this.f50833r);
                if (a10 != 0) {
                    this.f50838w.r(a10);
                }
            } else if (!this.f50838w.u()) {
                WindowInsetsCompat G = h0.G(this);
                if (G != null && G.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (h(y10, z11)) {
                    km.f.y(this.f50838w, this, null, 2, null);
                }
            }
            this.f50830o = motionEvent.getY();
            this.f50829i = motionEvent.getX();
            this.f50831p = this.f50837v.top;
        }
    }

    private final void f(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f50839x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f50839x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f50839x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f50838w.t() || this.f50832q != this.f50838w.q()) {
            f11 = f10;
        }
        this.f50838w.l(f11);
        g();
    }

    private final void g() {
        this.f50828e = false;
        this.f50829i = 0.0f;
        this.f50830o = 0.0f;
        this.f50831p = 0;
        this.f50832q = 0;
        this.f50837v.setEmpty();
        VelocityTracker velocityTracker = this.f50839x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f50839x = null;
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        if (Build.VERSION.SDK_INT >= 30) {
            Activity currentActivity = this.f50827d.getCurrentActivity();
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
            if (!z10 && this.f50835t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f50836u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f50839x == null) {
            this.f50839x = VelocityTracker.obtain();
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
        lm.a aVar = (lm.a) g.a().get(interpolator);
        if (aVar == null) {
            aVar = new lm.c();
        }
        this.f50834s = aVar;
    }

    public final void setOffset(double d10) {
        this.f50833r = (int) jm.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f50836u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f50835t = z10;
    }
}
