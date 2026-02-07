package kn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f31958a;

    /* renamed from: b  reason: collision with root package name */
    private final b f31959b;

    /* renamed from: c  reason: collision with root package name */
    private float f31960c;

    /* renamed from: d  reason: collision with root package name */
    private float f31961d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31962e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f31963f;

    /* renamed from: g  reason: collision with root package name */
    private float f31964g;

    /* renamed from: h  reason: collision with root package name */
    private float f31965h;

    /* renamed from: i  reason: collision with root package name */
    private float f31966i;

    /* renamed from: j  reason: collision with root package name */
    private float f31967j;

    /* renamed from: k  reason: collision with root package name */
    private float f31968k;

    /* renamed from: l  reason: collision with root package name */
    private float f31969l;

    /* renamed from: m  reason: collision with root package name */
    private float f31970m;

    /* renamed from: n  reason: collision with root package name */
    private long f31971n;

    /* renamed from: o  reason: collision with root package name */
    private long f31972o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f31973p;

    /* renamed from: q  reason: collision with root package name */
    private int f31974q;

    /* renamed from: r  reason: collision with root package name */
    private int f31975r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f31976s;

    /* renamed from: t  reason: collision with root package name */
    private float f31977t;

    /* renamed from: u  reason: collision with root package name */
    private float f31978u;

    /* renamed from: v  reason: collision with root package name */
    private int f31979v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f31980w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f31981x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f31977t = motionEvent.getX();
            y.this.f31978u = motionEvent.getY();
            y.this.f31979v = 1;
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
        if (this.f31979v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f31964g;
    }

    public float e() {
        return this.f31960c;
    }

    public float f() {
        return this.f31961d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f31981x;
            if ((z11 && this.f31964g < this.f31965h) || (!z11 && this.f31964g > this.f31965h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f31964g / this.f31965h)) * 0.5f;
            if (this.f31965h <= this.f31974q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f31965h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f31964g / f10;
    }

    public long h() {
        return this.f31971n - this.f31972o;
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
        this.f31971n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f31962e) {
            this.f31980w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f31979v == 2 && !z10) {
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
            if (this.f31973p) {
                this.f31959b.a(this);
                this.f31973p = false;
                this.f31966i = 0.0f;
                this.f31979v = 0;
            } else if (j() && z12) {
                this.f31973p = false;
                this.f31966i = 0.0f;
                this.f31979v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f31973p && this.f31963f && !j() && !z12 && z10) {
            this.f31977t = motionEvent.getX();
            this.f31978u = motionEvent.getY();
            this.f31979v = 2;
            this.f31966i = 0.0f;
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
            f11 = this.f31977t;
            f10 = this.f31978u;
            if (motionEvent.getY() < f10) {
                this.f31981x = true;
            } else {
                this.f31981x = false;
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
        boolean z16 = this.f31973p;
        this.f31960c = f11;
        this.f31961d = f10;
        if (!j() && this.f31973p && (hypot < this.f31975r || z13)) {
            this.f31959b.a(this);
            this.f31973p = false;
            this.f31966i = hypot;
        }
        if (z13) {
            this.f31967j = f19;
            this.f31969l = f19;
            this.f31968k = f20;
            this.f31970m = f20;
            this.f31964g = hypot;
            this.f31965h = hypot;
            this.f31966i = hypot;
        }
        if (j()) {
            i11 = this.f31974q;
        } else {
            i11 = this.f31975r;
        }
        if (!this.f31973p && hypot >= i11 && (z16 || Math.abs(hypot - this.f31966i) > this.f31974q)) {
            this.f31967j = f19;
            this.f31969l = f19;
            this.f31968k = f20;
            this.f31970m = f20;
            this.f31964g = hypot;
            this.f31965h = hypot;
            this.f31972o = this.f31971n;
            this.f31973p = this.f31959b.c(this);
        }
        if (actionMasked == 2) {
            this.f31967j = f19;
            this.f31968k = f20;
            this.f31964g = hypot;
            if (this.f31973p) {
                z15 = this.f31959b.b(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f31969l = this.f31967j;
                this.f31970m = this.f31968k;
                this.f31965h = this.f31964g;
                this.f31972o = this.f31971n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f31962e = z10;
        if (z10 && this.f31980w == null) {
            this.f31980w = new GestureDetector(this.f31958a, new a(), this.f31976s);
        }
    }

    public void m(boolean z10) {
        this.f31963f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f31979v = 0;
        this.f31958a = context;
        this.f31959b = bVar;
        this.f31974q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f31975r = 0;
        this.f31976s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
