package vm;

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
import lm.i;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup {

    /* renamed from: y  reason: collision with root package name */
    public static final a f52754y = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f52755d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f52756e;

    /* renamed from: i  reason: collision with root package name */
    private float f52757i;

    /* renamed from: o  reason: collision with root package name */
    private float f52758o;

    /* renamed from: p  reason: collision with root package name */
    private int f52759p;

    /* renamed from: q  reason: collision with root package name */
    private int f52760q;

    /* renamed from: r  reason: collision with root package name */
    private int f52761r;

    /* renamed from: s  reason: collision with root package name */
    private nm.a f52762s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f52763t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f52764u;

    /* renamed from: v  reason: collision with root package name */
    private final Rect f52765v;

    /* renamed from: w  reason: collision with root package name */
    private final mm.f f52766w;

    /* renamed from: x  reason: collision with root package name */
    private VelocityTracker f52767x;

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
        this.f52755d = reactContext;
        this.f52762s = new nm.c();
        this.f52764u = true;
        this.f52765v = new Rect();
        this.f52766w = new mm.f();
    }

    private final void c() {
        this.f52766w.n();
        g();
    }

    private final void d(MotionEvent motionEvent) {
        VelocityTracker velocityTracker = this.f52767x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        this.f52757i = motionEvent.getX();
        this.f52758o = motionEvent.getY();
        i.a(this, this.f52765v);
        this.f52759p = this.f52765v.top;
    }

    private final void e(MotionEvent motionEvent) {
        boolean z10;
        i.a(this, this.f52765v);
        int i10 = this.f52765v.top - this.f52759p;
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(0.0f, i10);
        VelocityTracker velocityTracker = this.f52767x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(obtain);
        }
        float x10 = obtain.getX() - this.f52757i;
        float y10 = obtain.getY() - this.f52758o;
        boolean z11 = false;
        if (!this.f52756e) {
            if (Math.abs(y10) > Math.abs(x10) && Math.abs(y10) >= ViewConfiguration.get(getContext()).getScaledTouchSlop()) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f52756e = z10;
        }
        if (this.f52756e) {
            if (this.f52766w.t()) {
                if (this.f52760q == 0) {
                    this.f52760q = this.f52766w.q();
                }
                int a10 = this.f52762s.a(fs.a.c(y10), getWindowHeight() - ((int) motionEvent.getRawY()), this.f52766w.q(), this.f52761r);
                if (a10 != 0) {
                    this.f52766w.r(a10);
                }
            } else if (!this.f52766w.u()) {
                WindowInsetsCompat G = h0.G(this);
                if (G != null && G.u(WindowInsetsCompat.p.c())) {
                    z11 = true;
                }
                if (h(y10, z11)) {
                    mm.f.y(this.f52766w, this, null, 2, null);
                }
            }
            this.f52758o = motionEvent.getY();
            this.f52757i = motionEvent.getX();
            this.f52759p = this.f52765v.top;
        }
    }

    private final void f(MotionEvent motionEvent) {
        Float f10;
        VelocityTracker velocityTracker = this.f52767x;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        VelocityTracker velocityTracker2 = this.f52767x;
        if (velocityTracker2 != null) {
            velocityTracker2.computeCurrentVelocity(500);
        }
        VelocityTracker velocityTracker3 = this.f52767x;
        Float f11 = null;
        if (velocityTracker3 != null) {
            f10 = Float.valueOf(velocityTracker3.getYVelocity());
        } else {
            f10 = null;
        }
        if (!this.f52766w.t() || this.f52760q != this.f52766w.q()) {
            f11 = f10;
        }
        this.f52766w.l(f11);
        g();
    }

    private final void g() {
        this.f52756e = false;
        this.f52757i = 0.0f;
        this.f52758o = 0.0f;
        this.f52759p = 0;
        this.f52760q = 0;
        this.f52765v.setEmpty();
        VelocityTracker velocityTracker = this.f52767x;
        if (velocityTracker != null) {
            velocityTracker.recycle();
        }
        this.f52767x = null;
    }

    private final int getWindowHeight() {
        WindowMetrics windowMetrics;
        Rect bounds;
        WindowManager windowManager;
        if (Build.VERSION.SDK_INT >= 30) {
            Activity currentActivity = this.f52755d.getCurrentActivity();
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
            if (!z10 && this.f52763t) {
                return true;
            }
            return false;
        } else if (f10 > 0.0f && z10 && this.f52764u) {
            return true;
        } else {
            return false;
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        Integer num;
        if (this.f52767x == null) {
            this.f52767x = VelocityTracker.obtain();
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
        nm.a aVar = (nm.a) g.a().get(interpolator);
        if (aVar == null) {
            aVar = new nm.c();
        }
        this.f52762s = aVar;
    }

    public final void setOffset(double d10) {
        this.f52761r = (int) lm.d.b((float) d10);
    }

    public final void setScrollKeyboardOffScreenWhenVisible(boolean z10) {
        this.f52764u = z10;
    }

    public final void setScrollKeyboardOnScreenWhenNotVisible(boolean z10) {
        this.f52763t = z10;
    }
}
