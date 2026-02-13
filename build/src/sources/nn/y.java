package nn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f38717a;

    /* renamed from: b  reason: collision with root package name */
    private final b f38718b;

    /* renamed from: c  reason: collision with root package name */
    private float f38719c;

    /* renamed from: d  reason: collision with root package name */
    private float f38720d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38721e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f38722f;

    /* renamed from: g  reason: collision with root package name */
    private float f38723g;

    /* renamed from: h  reason: collision with root package name */
    private float f38724h;

    /* renamed from: i  reason: collision with root package name */
    private float f38725i;

    /* renamed from: j  reason: collision with root package name */
    private float f38726j;

    /* renamed from: k  reason: collision with root package name */
    private float f38727k;

    /* renamed from: l  reason: collision with root package name */
    private float f38728l;

    /* renamed from: m  reason: collision with root package name */
    private float f38729m;

    /* renamed from: n  reason: collision with root package name */
    private long f38730n;

    /* renamed from: o  reason: collision with root package name */
    private long f38731o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f38732p;

    /* renamed from: q  reason: collision with root package name */
    private int f38733q;

    /* renamed from: r  reason: collision with root package name */
    private int f38734r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f38735s;

    /* renamed from: t  reason: collision with root package name */
    private float f38736t;

    /* renamed from: u  reason: collision with root package name */
    private float f38737u;

    /* renamed from: v  reason: collision with root package name */
    private int f38738v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f38739w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f38740x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f38736t = motionEvent.getX();
            y.this.f38737u = motionEvent.getY();
            y.this.f38738v = 1;
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
        if (this.f38738v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f38723g;
    }

    public float e() {
        return this.f38719c;
    }

    public float f() {
        return this.f38720d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f38740x;
            if ((z11 && this.f38723g < this.f38724h) || (!z11 && this.f38723g > this.f38724h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f38723g / this.f38724h)) * 0.5f;
            if (this.f38724h <= this.f38733q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f38724h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f38723g / f10;
    }

    public long h() {
        return this.f38730n - this.f38731o;
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
        this.f38730n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f38721e) {
            this.f38739w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f38738v == 2 && !z10) {
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
            if (this.f38732p) {
                this.f38718b.b(this);
                this.f38732p = false;
                this.f38725i = 0.0f;
                this.f38738v = 0;
            } else if (j() && z12) {
                this.f38732p = false;
                this.f38725i = 0.0f;
                this.f38738v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f38732p && this.f38722f && !j() && !z12 && z10) {
            this.f38736t = motionEvent.getX();
            this.f38737u = motionEvent.getY();
            this.f38738v = 2;
            this.f38725i = 0.0f;
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
            f11 = this.f38736t;
            f10 = this.f38737u;
            if (motionEvent.getY() < f10) {
                this.f38740x = true;
            } else {
                this.f38740x = false;
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
        boolean z16 = this.f38732p;
        this.f38719c = f11;
        this.f38720d = f10;
        if (!j() && this.f38732p && (hypot < this.f38734r || z13)) {
            this.f38718b.b(this);
            this.f38732p = false;
            this.f38725i = hypot;
        }
        if (z13) {
            this.f38726j = f19;
            this.f38728l = f19;
            this.f38727k = f20;
            this.f38729m = f20;
            this.f38723g = hypot;
            this.f38724h = hypot;
            this.f38725i = hypot;
        }
        if (j()) {
            i11 = this.f38733q;
        } else {
            i11 = this.f38734r;
        }
        if (!this.f38732p && hypot >= i11 && (z16 || Math.abs(hypot - this.f38725i) > this.f38733q)) {
            this.f38726j = f19;
            this.f38728l = f19;
            this.f38727k = f20;
            this.f38729m = f20;
            this.f38723g = hypot;
            this.f38724h = hypot;
            this.f38731o = this.f38730n;
            this.f38732p = this.f38718b.c(this);
        }
        if (actionMasked == 2) {
            this.f38726j = f19;
            this.f38727k = f20;
            this.f38723g = hypot;
            if (this.f38732p) {
                z15 = this.f38718b.a(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f38728l = this.f38726j;
                this.f38729m = this.f38727k;
                this.f38724h = this.f38723g;
                this.f38731o = this.f38730n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f38721e = z10;
        if (z10 && this.f38739w == null) {
            this.f38739w = new GestureDetector(this.f38717a, new a(), this.f38735s);
        }
    }

    public void m(boolean z10) {
        this.f38722f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f38738v = 0;
        this.f38717a = context;
        this.f38718b = bVar;
        this.f38733q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f38734r = 0;
        this.f38735s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
