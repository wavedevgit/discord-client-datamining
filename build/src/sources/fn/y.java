package fn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f24228a;

    /* renamed from: b  reason: collision with root package name */
    private final b f24229b;

    /* renamed from: c  reason: collision with root package name */
    private float f24230c;

    /* renamed from: d  reason: collision with root package name */
    private float f24231d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f24232e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f24233f;

    /* renamed from: g  reason: collision with root package name */
    private float f24234g;

    /* renamed from: h  reason: collision with root package name */
    private float f24235h;

    /* renamed from: i  reason: collision with root package name */
    private float f24236i;

    /* renamed from: j  reason: collision with root package name */
    private float f24237j;

    /* renamed from: k  reason: collision with root package name */
    private float f24238k;

    /* renamed from: l  reason: collision with root package name */
    private float f24239l;

    /* renamed from: m  reason: collision with root package name */
    private float f24240m;

    /* renamed from: n  reason: collision with root package name */
    private long f24241n;

    /* renamed from: o  reason: collision with root package name */
    private long f24242o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f24243p;

    /* renamed from: q  reason: collision with root package name */
    private int f24244q;

    /* renamed from: r  reason: collision with root package name */
    private int f24245r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f24246s;

    /* renamed from: t  reason: collision with root package name */
    private float f24247t;

    /* renamed from: u  reason: collision with root package name */
    private float f24248u;

    /* renamed from: v  reason: collision with root package name */
    private int f24249v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f24250w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f24251x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f24247t = motionEvent.getX();
            y.this.f24248u = motionEvent.getY();
            y.this.f24249v = 1;
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
        if (this.f24249v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f24234g;
    }

    public float e() {
        return this.f24230c;
    }

    public float f() {
        return this.f24231d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f24251x;
            if ((z11 && this.f24234g < this.f24235h) || (!z11 && this.f24234g > this.f24235h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f24234g / this.f24235h)) * 0.5f;
            if (this.f24235h <= this.f24244q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f24235h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f24234g / f10;
    }

    public long h() {
        return this.f24241n - this.f24242o;
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
        this.f24241n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f24232e) {
            this.f24250w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f24249v == 2 && !z10) {
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
            if (this.f24243p) {
                this.f24229b.c(this);
                this.f24243p = false;
                this.f24236i = 0.0f;
                this.f24249v = 0;
            } else if (j() && z12) {
                this.f24243p = false;
                this.f24236i = 0.0f;
                this.f24249v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f24243p && this.f24233f && !j() && !z12 && z10) {
            this.f24247t = motionEvent.getX();
            this.f24248u = motionEvent.getY();
            this.f24249v = 2;
            this.f24236i = 0.0f;
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
            f11 = this.f24247t;
            f10 = this.f24248u;
            if (motionEvent.getY() < f10) {
                this.f24251x = true;
            } else {
                this.f24251x = false;
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
        boolean z16 = this.f24243p;
        this.f24230c = f11;
        this.f24231d = f10;
        if (!j() && this.f24243p && (hypot < this.f24245r || z13)) {
            this.f24229b.c(this);
            this.f24243p = false;
            this.f24236i = hypot;
        }
        if (z13) {
            this.f24237j = f19;
            this.f24239l = f19;
            this.f24238k = f20;
            this.f24240m = f20;
            this.f24234g = hypot;
            this.f24235h = hypot;
            this.f24236i = hypot;
        }
        if (j()) {
            i11 = this.f24244q;
        } else {
            i11 = this.f24245r;
        }
        if (!this.f24243p && hypot >= i11 && (z16 || Math.abs(hypot - this.f24236i) > this.f24244q)) {
            this.f24237j = f19;
            this.f24239l = f19;
            this.f24238k = f20;
            this.f24240m = f20;
            this.f24234g = hypot;
            this.f24235h = hypot;
            this.f24242o = this.f24241n;
            this.f24243p = this.f24229b.b(this);
        }
        if (actionMasked == 2) {
            this.f24237j = f19;
            this.f24238k = f20;
            this.f24234g = hypot;
            if (this.f24243p) {
                z15 = this.f24229b.a(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f24239l = this.f24237j;
                this.f24240m = this.f24238k;
                this.f24235h = this.f24234g;
                this.f24242o = this.f24241n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f24232e = z10;
        if (z10 && this.f24250w == null) {
            this.f24250w = new GestureDetector(this.f24228a, new a(), this.f24246s);
        }
    }

    public void m(boolean z10) {
        this.f24233f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f24249v = 0;
        this.f24228a = context;
        this.f24229b = bVar;
        this.f24244q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f24245r = 0;
        this.f24246s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
