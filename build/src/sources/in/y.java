package in;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27620a;

    /* renamed from: b  reason: collision with root package name */
    private final b f27621b;

    /* renamed from: c  reason: collision with root package name */
    private float f27622c;

    /* renamed from: d  reason: collision with root package name */
    private float f27623d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f27624e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f27625f;

    /* renamed from: g  reason: collision with root package name */
    private float f27626g;

    /* renamed from: h  reason: collision with root package name */
    private float f27627h;

    /* renamed from: i  reason: collision with root package name */
    private float f27628i;

    /* renamed from: j  reason: collision with root package name */
    private float f27629j;

    /* renamed from: k  reason: collision with root package name */
    private float f27630k;

    /* renamed from: l  reason: collision with root package name */
    private float f27631l;

    /* renamed from: m  reason: collision with root package name */
    private float f27632m;

    /* renamed from: n  reason: collision with root package name */
    private long f27633n;

    /* renamed from: o  reason: collision with root package name */
    private long f27634o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f27635p;

    /* renamed from: q  reason: collision with root package name */
    private int f27636q;

    /* renamed from: r  reason: collision with root package name */
    private int f27637r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f27638s;

    /* renamed from: t  reason: collision with root package name */
    private float f27639t;

    /* renamed from: u  reason: collision with root package name */
    private float f27640u;

    /* renamed from: v  reason: collision with root package name */
    private int f27641v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f27642w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f27643x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f27639t = motionEvent.getX();
            y.this.f27640u = motionEvent.getY();
            y.this.f27641v = 1;
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(y yVar);

        boolean b(y yVar);

        boolean c(y yVar);
    }

    public y(Context context, b bVar) {
        this(context, bVar, null);
    }

    private boolean j() {
        if (this.f27641v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f27626g;
    }

    public float e() {
        return this.f27622c;
    }

    public float f() {
        return this.f27623d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f27643x;
            if ((z11 && this.f27626g < this.f27627h) || (!z11 && this.f27626g > this.f27627h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f27626g / this.f27627h)) * 0.5f;
            if (this.f27627h <= this.f27636q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f27627h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f27626g / f10;
    }

    public long h() {
        return this.f27633n - this.f27634o;
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
        this.f27633n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f27624e) {
            this.f27642w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f27641v == 2 && !z10) {
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
            if (this.f27635p) {
                this.f27621b.a(this);
                this.f27635p = false;
                this.f27628i = 0.0f;
                this.f27641v = 0;
            } else if (j() && z12) {
                this.f27635p = false;
                this.f27628i = 0.0f;
                this.f27641v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f27635p && this.f27625f && !j() && !z12 && z10) {
            this.f27639t = motionEvent.getX();
            this.f27640u = motionEvent.getY();
            this.f27641v = 2;
            this.f27628i = 0.0f;
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
            f11 = this.f27639t;
            f10 = this.f27640u;
            if (motionEvent.getY() < f10) {
                this.f27643x = true;
            } else {
                this.f27643x = false;
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
        boolean z16 = this.f27635p;
        this.f27622c = f11;
        this.f27623d = f10;
        if (!j() && this.f27635p && (hypot < this.f27637r || z13)) {
            this.f27621b.a(this);
            this.f27635p = false;
            this.f27628i = hypot;
        }
        if (z13) {
            this.f27629j = f19;
            this.f27631l = f19;
            this.f27630k = f20;
            this.f27632m = f20;
            this.f27626g = hypot;
            this.f27627h = hypot;
            this.f27628i = hypot;
        }
        if (j()) {
            i11 = this.f27636q;
        } else {
            i11 = this.f27637r;
        }
        if (!this.f27635p && hypot >= i11 && (z16 || Math.abs(hypot - this.f27628i) > this.f27636q)) {
            this.f27629j = f19;
            this.f27631l = f19;
            this.f27630k = f20;
            this.f27632m = f20;
            this.f27626g = hypot;
            this.f27627h = hypot;
            this.f27634o = this.f27633n;
            this.f27635p = this.f27621b.b(this);
        }
        if (actionMasked == 2) {
            this.f27629j = f19;
            this.f27630k = f20;
            this.f27626g = hypot;
            if (this.f27635p) {
                z15 = this.f27621b.c(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f27631l = this.f27629j;
                this.f27632m = this.f27630k;
                this.f27627h = this.f27626g;
                this.f27634o = this.f27633n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f27624e = z10;
        if (z10 && this.f27642w == null) {
            this.f27642w = new GestureDetector(this.f27620a, new a(), this.f27638s);
        }
    }

    public void m(boolean z10) {
        this.f27625f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f27641v = 0;
        this.f27620a = context;
        this.f27621b = bVar;
        this.f27636q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f27637r = 0;
        this.f27638s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
