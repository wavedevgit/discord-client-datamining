package kn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f31910a;

    /* renamed from: b  reason: collision with root package name */
    private final b f31911b;

    /* renamed from: c  reason: collision with root package name */
    private float f31912c;

    /* renamed from: d  reason: collision with root package name */
    private float f31913d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31914e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f31915f;

    /* renamed from: g  reason: collision with root package name */
    private float f31916g;

    /* renamed from: h  reason: collision with root package name */
    private float f31917h;

    /* renamed from: i  reason: collision with root package name */
    private float f31918i;

    /* renamed from: j  reason: collision with root package name */
    private float f31919j;

    /* renamed from: k  reason: collision with root package name */
    private float f31920k;

    /* renamed from: l  reason: collision with root package name */
    private float f31921l;

    /* renamed from: m  reason: collision with root package name */
    private float f31922m;

    /* renamed from: n  reason: collision with root package name */
    private long f31923n;

    /* renamed from: o  reason: collision with root package name */
    private long f31924o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f31925p;

    /* renamed from: q  reason: collision with root package name */
    private int f31926q;

    /* renamed from: r  reason: collision with root package name */
    private int f31927r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f31928s;

    /* renamed from: t  reason: collision with root package name */
    private float f31929t;

    /* renamed from: u  reason: collision with root package name */
    private float f31930u;

    /* renamed from: v  reason: collision with root package name */
    private int f31931v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f31932w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f31933x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f31929t = motionEvent.getX();
            y.this.f31930u = motionEvent.getY();
            y.this.f31931v = 1;
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
        if (this.f31931v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f31916g;
    }

    public float e() {
        return this.f31912c;
    }

    public float f() {
        return this.f31913d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f31933x;
            if ((z11 && this.f31916g < this.f31917h) || (!z11 && this.f31916g > this.f31917h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f31916g / this.f31917h)) * 0.5f;
            if (this.f31917h <= this.f31926q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f31917h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f31916g / f10;
    }

    public long h() {
        return this.f31923n - this.f31924o;
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
        this.f31923n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f31914e) {
            this.f31932w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f31931v == 2 && !z10) {
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
            if (this.f31925p) {
                this.f31911b.a(this);
                this.f31925p = false;
                this.f31918i = 0.0f;
                this.f31931v = 0;
            } else if (j() && z12) {
                this.f31925p = false;
                this.f31918i = 0.0f;
                this.f31931v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f31925p && this.f31915f && !j() && !z12 && z10) {
            this.f31929t = motionEvent.getX();
            this.f31930u = motionEvent.getY();
            this.f31931v = 2;
            this.f31918i = 0.0f;
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
            f11 = this.f31929t;
            f10 = this.f31930u;
            if (motionEvent.getY() < f10) {
                this.f31933x = true;
            } else {
                this.f31933x = false;
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
        boolean z16 = this.f31925p;
        this.f31912c = f11;
        this.f31913d = f10;
        if (!j() && this.f31925p && (hypot < this.f31927r || z13)) {
            this.f31911b.a(this);
            this.f31925p = false;
            this.f31918i = hypot;
        }
        if (z13) {
            this.f31919j = f19;
            this.f31921l = f19;
            this.f31920k = f20;
            this.f31922m = f20;
            this.f31916g = hypot;
            this.f31917h = hypot;
            this.f31918i = hypot;
        }
        if (j()) {
            i11 = this.f31926q;
        } else {
            i11 = this.f31927r;
        }
        if (!this.f31925p && hypot >= i11 && (z16 || Math.abs(hypot - this.f31918i) > this.f31926q)) {
            this.f31919j = f19;
            this.f31921l = f19;
            this.f31920k = f20;
            this.f31922m = f20;
            this.f31916g = hypot;
            this.f31917h = hypot;
            this.f31924o = this.f31923n;
            this.f31925p = this.f31911b.c(this);
        }
        if (actionMasked == 2) {
            this.f31919j = f19;
            this.f31920k = f20;
            this.f31916g = hypot;
            if (this.f31925p) {
                z15 = this.f31911b.b(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f31921l = this.f31919j;
                this.f31922m = this.f31920k;
                this.f31917h = this.f31916g;
                this.f31924o = this.f31923n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f31914e = z10;
        if (z10 && this.f31932w == null) {
            this.f31932w = new GestureDetector(this.f31910a, new a(), this.f31928s);
        }
    }

    public void m(boolean z10) {
        this.f31915f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f31931v = 0;
        this.f31910a = context;
        this.f31911b = bVar;
        this.f31926q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f31927r = 0;
        this.f31928s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
