package dn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f22002a;

    /* renamed from: b  reason: collision with root package name */
    private final b f22003b;

    /* renamed from: c  reason: collision with root package name */
    private float f22004c;

    /* renamed from: d  reason: collision with root package name */
    private float f22005d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22006e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f22007f;

    /* renamed from: g  reason: collision with root package name */
    private float f22008g;

    /* renamed from: h  reason: collision with root package name */
    private float f22009h;

    /* renamed from: i  reason: collision with root package name */
    private float f22010i;

    /* renamed from: j  reason: collision with root package name */
    private float f22011j;

    /* renamed from: k  reason: collision with root package name */
    private float f22012k;

    /* renamed from: l  reason: collision with root package name */
    private float f22013l;

    /* renamed from: m  reason: collision with root package name */
    private float f22014m;

    /* renamed from: n  reason: collision with root package name */
    private long f22015n;

    /* renamed from: o  reason: collision with root package name */
    private long f22016o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22017p;

    /* renamed from: q  reason: collision with root package name */
    private int f22018q;

    /* renamed from: r  reason: collision with root package name */
    private int f22019r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f22020s;

    /* renamed from: t  reason: collision with root package name */
    private float f22021t;

    /* renamed from: u  reason: collision with root package name */
    private float f22022u;

    /* renamed from: v  reason: collision with root package name */
    private int f22023v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f22024w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f22025x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f22021t = motionEvent.getX();
            y.this.f22022u = motionEvent.getY();
            y.this.f22023v = 1;
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        boolean a(y yVar);

        boolean b(y yVar);

        void c(y yVar);
    }

    public y(Context context, b bVar) {
        this(context, bVar, null);
    }

    private boolean j() {
        if (this.f22023v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f22008g;
    }

    public float e() {
        return this.f22004c;
    }

    public float f() {
        return this.f22005d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f22025x;
            if ((z11 && this.f22008g < this.f22009h) || (!z11 && this.f22008g > this.f22009h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f22008g / this.f22009h)) * 0.5f;
            if (this.f22009h <= this.f22018q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f22009h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f22008g / f10;
    }

    public long h() {
        return this.f22015n - this.f22016o;
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
        this.f22015n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f22006e) {
            this.f22024w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f22023v == 2 && !z10) {
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
            if (this.f22017p) {
                this.f22003b.c(this);
                this.f22017p = false;
                this.f22010i = 0.0f;
                this.f22023v = 0;
            } else if (j() && z12) {
                this.f22017p = false;
                this.f22010i = 0.0f;
                this.f22023v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f22017p && this.f22007f && !j() && !z12 && z10) {
            this.f22021t = motionEvent.getX();
            this.f22022u = motionEvent.getY();
            this.f22023v = 2;
            this.f22010i = 0.0f;
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
            f11 = this.f22021t;
            f10 = this.f22022u;
            if (motionEvent.getY() < f10) {
                this.f22025x = true;
            } else {
                this.f22025x = false;
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
        boolean z16 = this.f22017p;
        this.f22004c = f11;
        this.f22005d = f10;
        if (!j() && this.f22017p && (hypot < this.f22019r || z13)) {
            this.f22003b.c(this);
            this.f22017p = false;
            this.f22010i = hypot;
        }
        if (z13) {
            this.f22011j = f19;
            this.f22013l = f19;
            this.f22012k = f20;
            this.f22014m = f20;
            this.f22008g = hypot;
            this.f22009h = hypot;
            this.f22010i = hypot;
        }
        if (j()) {
            i11 = this.f22018q;
        } else {
            i11 = this.f22019r;
        }
        if (!this.f22017p && hypot >= i11 && (z16 || Math.abs(hypot - this.f22010i) > this.f22018q)) {
            this.f22011j = f19;
            this.f22013l = f19;
            this.f22012k = f20;
            this.f22014m = f20;
            this.f22008g = hypot;
            this.f22009h = hypot;
            this.f22016o = this.f22015n;
            this.f22017p = this.f22003b.b(this);
        }
        if (actionMasked == 2) {
            this.f22011j = f19;
            this.f22012k = f20;
            this.f22008g = hypot;
            if (this.f22017p) {
                z15 = this.f22003b.a(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f22013l = this.f22011j;
                this.f22014m = this.f22012k;
                this.f22009h = this.f22008g;
                this.f22016o = this.f22015n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f22006e = z10;
        if (z10 && this.f22024w == null) {
            this.f22024w = new GestureDetector(this.f22002a, new a(), this.f22020s);
        }
    }

    public void m(boolean z10) {
        this.f22007f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f22023v = 0;
        this.f22002a = context;
        this.f22003b = bVar;
        this.f22018q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f22019r = 0;
        this.f22020s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
