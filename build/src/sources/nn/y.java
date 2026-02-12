package nn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f38149a;

    /* renamed from: b  reason: collision with root package name */
    private final b f38150b;

    /* renamed from: c  reason: collision with root package name */
    private float f38151c;

    /* renamed from: d  reason: collision with root package name */
    private float f38152d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38153e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f38154f;

    /* renamed from: g  reason: collision with root package name */
    private float f38155g;

    /* renamed from: h  reason: collision with root package name */
    private float f38156h;

    /* renamed from: i  reason: collision with root package name */
    private float f38157i;

    /* renamed from: j  reason: collision with root package name */
    private float f38158j;

    /* renamed from: k  reason: collision with root package name */
    private float f38159k;

    /* renamed from: l  reason: collision with root package name */
    private float f38160l;

    /* renamed from: m  reason: collision with root package name */
    private float f38161m;

    /* renamed from: n  reason: collision with root package name */
    private long f38162n;

    /* renamed from: o  reason: collision with root package name */
    private long f38163o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f38164p;

    /* renamed from: q  reason: collision with root package name */
    private int f38165q;

    /* renamed from: r  reason: collision with root package name */
    private int f38166r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f38167s;

    /* renamed from: t  reason: collision with root package name */
    private float f38168t;

    /* renamed from: u  reason: collision with root package name */
    private float f38169u;

    /* renamed from: v  reason: collision with root package name */
    private int f38170v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f38171w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f38172x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f38168t = motionEvent.getX();
            y.this.f38169u = motionEvent.getY();
            y.this.f38170v = 1;
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
        if (this.f38170v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f38155g;
    }

    public float e() {
        return this.f38151c;
    }

    public float f() {
        return this.f38152d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f38172x;
            if ((z11 && this.f38155g < this.f38156h) || (!z11 && this.f38155g > this.f38156h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f38155g / this.f38156h)) * 0.5f;
            if (this.f38156h <= this.f38165q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f38156h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f38155g / f10;
    }

    public long h() {
        return this.f38162n - this.f38163o;
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
        this.f38162n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f38153e) {
            this.f38171w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f38170v == 2 && !z10) {
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
            if (this.f38164p) {
                this.f38150b.b(this);
                this.f38164p = false;
                this.f38157i = 0.0f;
                this.f38170v = 0;
            } else if (j() && z12) {
                this.f38164p = false;
                this.f38157i = 0.0f;
                this.f38170v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f38164p && this.f38154f && !j() && !z12 && z10) {
            this.f38168t = motionEvent.getX();
            this.f38169u = motionEvent.getY();
            this.f38170v = 2;
            this.f38157i = 0.0f;
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
            f11 = this.f38168t;
            f10 = this.f38169u;
            if (motionEvent.getY() < f10) {
                this.f38172x = true;
            } else {
                this.f38172x = false;
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
        boolean z16 = this.f38164p;
        this.f38151c = f11;
        this.f38152d = f10;
        if (!j() && this.f38164p && (hypot < this.f38166r || z13)) {
            this.f38150b.b(this);
            this.f38164p = false;
            this.f38157i = hypot;
        }
        if (z13) {
            this.f38158j = f19;
            this.f38160l = f19;
            this.f38159k = f20;
            this.f38161m = f20;
            this.f38155g = hypot;
            this.f38156h = hypot;
            this.f38157i = hypot;
        }
        if (j()) {
            i11 = this.f38165q;
        } else {
            i11 = this.f38166r;
        }
        if (!this.f38164p && hypot >= i11 && (z16 || Math.abs(hypot - this.f38157i) > this.f38165q)) {
            this.f38158j = f19;
            this.f38160l = f19;
            this.f38159k = f20;
            this.f38161m = f20;
            this.f38155g = hypot;
            this.f38156h = hypot;
            this.f38163o = this.f38162n;
            this.f38164p = this.f38150b.c(this);
        }
        if (actionMasked == 2) {
            this.f38158j = f19;
            this.f38159k = f20;
            this.f38155g = hypot;
            if (this.f38164p) {
                z15 = this.f38150b.a(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f38160l = this.f38158j;
                this.f38161m = this.f38159k;
                this.f38156h = this.f38155g;
                this.f38163o = this.f38162n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f38153e = z10;
        if (z10 && this.f38171w == null) {
            this.f38171w = new GestureDetector(this.f38149a, new a(), this.f38167s);
        }
    }

    public void m(boolean z10) {
        this.f38154f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f38170v = 0;
        this.f38149a = context;
        this.f38150b = bVar;
        this.f38165q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f38166r = 0;
        this.f38167s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
