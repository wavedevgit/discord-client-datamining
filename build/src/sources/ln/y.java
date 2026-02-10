package ln;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f36178a;

    /* renamed from: b  reason: collision with root package name */
    private final b f36179b;

    /* renamed from: c  reason: collision with root package name */
    private float f36180c;

    /* renamed from: d  reason: collision with root package name */
    private float f36181d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36182e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f36183f;

    /* renamed from: g  reason: collision with root package name */
    private float f36184g;

    /* renamed from: h  reason: collision with root package name */
    private float f36185h;

    /* renamed from: i  reason: collision with root package name */
    private float f36186i;

    /* renamed from: j  reason: collision with root package name */
    private float f36187j;

    /* renamed from: k  reason: collision with root package name */
    private float f36188k;

    /* renamed from: l  reason: collision with root package name */
    private float f36189l;

    /* renamed from: m  reason: collision with root package name */
    private float f36190m;

    /* renamed from: n  reason: collision with root package name */
    private long f36191n;

    /* renamed from: o  reason: collision with root package name */
    private long f36192o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36193p;

    /* renamed from: q  reason: collision with root package name */
    private int f36194q;

    /* renamed from: r  reason: collision with root package name */
    private int f36195r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f36196s;

    /* renamed from: t  reason: collision with root package name */
    private float f36197t;

    /* renamed from: u  reason: collision with root package name */
    private float f36198u;

    /* renamed from: v  reason: collision with root package name */
    private int f36199v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f36200w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f36201x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f36197t = motionEvent.getX();
            y.this.f36198u = motionEvent.getY();
            y.this.f36199v = 1;
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
        if (this.f36199v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f36184g;
    }

    public float e() {
        return this.f36180c;
    }

    public float f() {
        return this.f36181d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f36201x;
            if ((z11 && this.f36184g < this.f36185h) || (!z11 && this.f36184g > this.f36185h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f36184g / this.f36185h)) * 0.5f;
            if (this.f36185h <= this.f36194q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f36185h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f36184g / f10;
    }

    public long h() {
        return this.f36191n - this.f36192o;
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
        this.f36191n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f36182e) {
            this.f36200w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f36199v == 2 && !z10) {
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
            if (this.f36193p) {
                this.f36179b.b(this);
                this.f36193p = false;
                this.f36186i = 0.0f;
                this.f36199v = 0;
            } else if (j() && z12) {
                this.f36193p = false;
                this.f36186i = 0.0f;
                this.f36199v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f36193p && this.f36183f && !j() && !z12 && z10) {
            this.f36197t = motionEvent.getX();
            this.f36198u = motionEvent.getY();
            this.f36199v = 2;
            this.f36186i = 0.0f;
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
            f11 = this.f36197t;
            f10 = this.f36198u;
            if (motionEvent.getY() < f10) {
                this.f36201x = true;
            } else {
                this.f36201x = false;
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
        boolean z16 = this.f36193p;
        this.f36180c = f11;
        this.f36181d = f10;
        if (!j() && this.f36193p && (hypot < this.f36195r || z13)) {
            this.f36179b.b(this);
            this.f36193p = false;
            this.f36186i = hypot;
        }
        if (z13) {
            this.f36187j = f19;
            this.f36189l = f19;
            this.f36188k = f20;
            this.f36190m = f20;
            this.f36184g = hypot;
            this.f36185h = hypot;
            this.f36186i = hypot;
        }
        if (j()) {
            i11 = this.f36194q;
        } else {
            i11 = this.f36195r;
        }
        if (!this.f36193p && hypot >= i11 && (z16 || Math.abs(hypot - this.f36186i) > this.f36194q)) {
            this.f36187j = f19;
            this.f36189l = f19;
            this.f36188k = f20;
            this.f36190m = f20;
            this.f36184g = hypot;
            this.f36185h = hypot;
            this.f36192o = this.f36191n;
            this.f36193p = this.f36179b.c(this);
        }
        if (actionMasked == 2) {
            this.f36187j = f19;
            this.f36188k = f20;
            this.f36184g = hypot;
            if (this.f36193p) {
                z15 = this.f36179b.a(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f36189l = this.f36187j;
                this.f36190m = this.f36188k;
                this.f36185h = this.f36184g;
                this.f36192o = this.f36191n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f36182e = z10;
        if (z10 && this.f36200w == null) {
            this.f36200w = new GestureDetector(this.f36178a, new a(), this.f36196s);
        }
    }

    public void m(boolean z10) {
        this.f36183f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f36199v = 0;
        this.f36178a = context;
        this.f36179b = bVar;
        this.f36194q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f36195r = 0;
        this.f36196s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
