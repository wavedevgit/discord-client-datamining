package nn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f38148a;

    /* renamed from: b  reason: collision with root package name */
    private final b f38149b;

    /* renamed from: c  reason: collision with root package name */
    private float f38150c;

    /* renamed from: d  reason: collision with root package name */
    private float f38151d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38152e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f38153f;

    /* renamed from: g  reason: collision with root package name */
    private float f38154g;

    /* renamed from: h  reason: collision with root package name */
    private float f38155h;

    /* renamed from: i  reason: collision with root package name */
    private float f38156i;

    /* renamed from: j  reason: collision with root package name */
    private float f38157j;

    /* renamed from: k  reason: collision with root package name */
    private float f38158k;

    /* renamed from: l  reason: collision with root package name */
    private float f38159l;

    /* renamed from: m  reason: collision with root package name */
    private float f38160m;

    /* renamed from: n  reason: collision with root package name */
    private long f38161n;

    /* renamed from: o  reason: collision with root package name */
    private long f38162o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f38163p;

    /* renamed from: q  reason: collision with root package name */
    private int f38164q;

    /* renamed from: r  reason: collision with root package name */
    private int f38165r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f38166s;

    /* renamed from: t  reason: collision with root package name */
    private float f38167t;

    /* renamed from: u  reason: collision with root package name */
    private float f38168u;

    /* renamed from: v  reason: collision with root package name */
    private int f38169v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f38170w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f38171x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f38167t = motionEvent.getX();
            y.this.f38168u = motionEvent.getY();
            y.this.f38169v = 1;
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        boolean a(y yVar);

        void b(y yVar);

        boolean c(y yVar);
    }

    public y(Context context, b bVar) {
        this(context, bVar, null);
    }

    private boolean j() {
        if (this.f38169v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f38154g;
    }

    public float e() {
        return this.f38150c;
    }

    public float f() {
        return this.f38151d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f38171x;
            if ((z11 && this.f38154g < this.f38155h) || (!z11 && this.f38154g > this.f38155h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f38154g / this.f38155h)) * 0.5f;
            if (this.f38155h <= this.f38164q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f38155h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f38154g / f10;
    }

    public long h() {
        return this.f38161n - this.f38162o;
    }

    public double i() {
        return h() / 1000.0d;
    }

    public boolean k(MotionEvent motionEvent) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        int i10;
        float f10;
        float f11;
        float hypot;
        int i11;
        boolean z15;
        this.f38161n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f38152e) {
            this.f38170w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f38169v == 2 && !z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (actionMasked != 1 && actionMasked != 3 && !z11) {
            z12 = false;
        } else {
            z12 = true;
        }
        float f12 = 0.0f;
        if (actionMasked == 0 || z12) {
            if (this.f38163p) {
                this.f38149b.b(this);
                this.f38163p = false;
                this.f38156i = 0.0f;
                this.f38169v = 0;
            } else if (j() && z12) {
                this.f38163p = false;
                this.f38156i = 0.0f;
                this.f38169v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f38163p && this.f38153f && !j() && !z12 && z10) {
            this.f38167t = motionEvent.getX();
            this.f38168u = motionEvent.getY();
            this.f38169v = 2;
            this.f38156i = 0.0f;
        }
        if (actionMasked != 0 && actionMasked != 6 && actionMasked != 5 && !z11) {
            z13 = false;
        } else {
            z13 = true;
        }
        if (actionMasked == 6) {
            z14 = true;
        } else {
            z14 = false;
        }
        if (z14) {
            i10 = motionEvent.getActionIndex();
        } else {
            i10 = -1;
        }
        int i12 = z14 ? pointerCount - 1 : pointerCount;
        if (j()) {
            f11 = this.f38167t;
            f10 = this.f38168u;
            if (motionEvent.getY() < f10) {
                this.f38171x = true;
            } else {
                this.f38171x = false;
            }
        } else {
            float f13 = 0.0f;
            float f14 = 0.0f;
            for (int i13 = 0; i13 < pointerCount; i13++) {
                if (i10 != i13) {
                    f13 += motionEvent.getX(i13);
                    f14 += motionEvent.getY(i13);
                }
            }
            float f15 = i12;
            float f16 = f13 / f15;
            f10 = f14 / f15;
            f11 = f16;
        }
        float f17 = 0.0f;
        for (int i14 = 0; i14 < pointerCount; i14++) {
            if (i10 != i14) {
                f12 += Math.abs(motionEvent.getX(i14) - f11);
                f17 += Math.abs(motionEvent.getY(i14) - f10);
            }
        }
        float f18 = i12;
        float f19 = (f12 / f18) * 2.0f;
        float f20 = (f17 / f18) * 2.0f;
        if (j()) {
            hypot = f20;
        } else {
            hypot = (float) Math.hypot(f19, f20);
        }
        boolean z16 = this.f38163p;
        this.f38150c = f11;
        this.f38151d = f10;
        if (!j() && this.f38163p && (hypot < this.f38165r || z13)) {
            this.f38149b.b(this);
            this.f38163p = false;
            this.f38156i = hypot;
        }
        if (z13) {
            this.f38157j = f19;
            this.f38159l = f19;
            this.f38158k = f20;
            this.f38160m = f20;
            this.f38154g = hypot;
            this.f38155h = hypot;
            this.f38156i = hypot;
        }
        if (j()) {
            i11 = this.f38164q;
        } else {
            i11 = this.f38165r;
        }
        if (!this.f38163p && hypot >= i11 && (z16 || Math.abs(hypot - this.f38156i) > this.f38164q)) {
            this.f38157j = f19;
            this.f38159l = f19;
            this.f38158k = f20;
            this.f38160m = f20;
            this.f38154g = hypot;
            this.f38155h = hypot;
            this.f38162o = this.f38161n;
            this.f38163p = this.f38149b.c(this);
        }
        if (actionMasked == 2) {
            this.f38157j = f19;
            this.f38158k = f20;
            this.f38154g = hypot;
            if (this.f38163p) {
                z15 = this.f38149b.a(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f38159l = this.f38157j;
                this.f38160m = this.f38158k;
                this.f38155h = this.f38154g;
                this.f38162o = this.f38161n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f38152e = z10;
        if (z10 && this.f38170w == null) {
            this.f38170w = new GestureDetector(this.f38148a, new a(), this.f38166s);
        }
    }

    public void m(boolean z10) {
        this.f38153f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f38169v = 0;
        this.f38148a = context;
        this.f38149b = bVar;
        this.f38164q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f38165r = 0;
        this.f38166s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
