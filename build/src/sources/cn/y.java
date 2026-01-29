package cn;

import android.content.Context;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final Context f8673a;

    /* renamed from: b  reason: collision with root package name */
    private final b f8674b;

    /* renamed from: c  reason: collision with root package name */
    private float f8675c;

    /* renamed from: d  reason: collision with root package name */
    private float f8676d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f8677e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f8678f;

    /* renamed from: g  reason: collision with root package name */
    private float f8679g;

    /* renamed from: h  reason: collision with root package name */
    private float f8680h;

    /* renamed from: i  reason: collision with root package name */
    private float f8681i;

    /* renamed from: j  reason: collision with root package name */
    private float f8682j;

    /* renamed from: k  reason: collision with root package name */
    private float f8683k;

    /* renamed from: l  reason: collision with root package name */
    private float f8684l;

    /* renamed from: m  reason: collision with root package name */
    private float f8685m;

    /* renamed from: n  reason: collision with root package name */
    private long f8686n;

    /* renamed from: o  reason: collision with root package name */
    private long f8687o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f8688p;

    /* renamed from: q  reason: collision with root package name */
    private int f8689q;

    /* renamed from: r  reason: collision with root package name */
    private int f8690r;

    /* renamed from: s  reason: collision with root package name */
    private final Handler f8691s;

    /* renamed from: t  reason: collision with root package name */
    private float f8692t;

    /* renamed from: u  reason: collision with root package name */
    private float f8693u;

    /* renamed from: v  reason: collision with root package name */
    private int f8694v;

    /* renamed from: w  reason: collision with root package name */
    private GestureDetector f8695w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f8696x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends GestureDetector.SimpleOnGestureListener {
        a() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            y.this.f8692t = motionEvent.getX();
            y.this.f8693u = motionEvent.getY();
            y.this.f8694v = 1;
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
        if (this.f8694v != 0) {
            return true;
        }
        return false;
    }

    public float d() {
        return this.f8679g;
    }

    public float e() {
        return this.f8675c;
    }

    public float f() {
        return this.f8676d;
    }

    public float g() {
        boolean z10;
        if (j()) {
            boolean z11 = this.f8696x;
            if ((z11 && this.f8679g < this.f8680h) || (!z11 && this.f8679g > this.f8680h)) {
                z10 = true;
            } else {
                z10 = false;
            }
            float abs = Math.abs(1.0f - (this.f8679g / this.f8680h)) * 0.5f;
            if (this.f8680h <= this.f8689q) {
                return 1.0f;
            }
            if (z10) {
                return abs + 1.0f;
            }
            return 1.0f - abs;
        }
        float f10 = this.f8680h;
        if (f10 <= 0.0f) {
            return 1.0f;
        }
        return this.f8679g / f10;
    }

    public long h() {
        return this.f8686n - this.f8687o;
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
        this.f8686n = motionEvent.getEventTime();
        int actionMasked = motionEvent.getActionMasked();
        if (this.f8677e) {
            this.f8695w.onTouchEvent(motionEvent);
        }
        int pointerCount = motionEvent.getPointerCount();
        if ((motionEvent.getButtonState() & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f8694v == 2 && !z10) {
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
            if (this.f8688p) {
                this.f8674b.b(this);
                this.f8688p = false;
                this.f8681i = 0.0f;
                this.f8694v = 0;
            } else if (j() && z12) {
                this.f8688p = false;
                this.f8681i = 0.0f;
                this.f8694v = 0;
            }
            if (z12) {
                return true;
            }
        }
        if (!this.f8688p && this.f8678f && !j() && !z12 && z10) {
            this.f8692t = motionEvent.getX();
            this.f8693u = motionEvent.getY();
            this.f8694v = 2;
            this.f8681i = 0.0f;
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
            f11 = this.f8692t;
            f10 = this.f8693u;
            if (motionEvent.getY() < f10) {
                this.f8696x = true;
            } else {
                this.f8696x = false;
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
        boolean z16 = this.f8688p;
        this.f8675c = f11;
        this.f8676d = f10;
        if (!j() && this.f8688p && (hypot < this.f8690r || z13)) {
            this.f8674b.b(this);
            this.f8688p = false;
            this.f8681i = hypot;
        }
        if (z13) {
            this.f8682j = f19;
            this.f8684l = f19;
            this.f8683k = f20;
            this.f8685m = f20;
            this.f8679g = hypot;
            this.f8680h = hypot;
            this.f8681i = hypot;
        }
        if (j()) {
            i11 = this.f8689q;
        } else {
            i11 = this.f8690r;
        }
        if (!this.f8688p && hypot >= i11 && (z16 || Math.abs(hypot - this.f8681i) > this.f8689q)) {
            this.f8682j = f19;
            this.f8684l = f19;
            this.f8683k = f20;
            this.f8685m = f20;
            this.f8679g = hypot;
            this.f8680h = hypot;
            this.f8687o = this.f8686n;
            this.f8688p = this.f8674b.a(this);
        }
        if (actionMasked == 2) {
            this.f8682j = f19;
            this.f8683k = f20;
            this.f8679g = hypot;
            if (this.f8688p) {
                z15 = this.f8674b.c(this);
            } else {
                z15 = true;
            }
            if (z15) {
                this.f8684l = this.f8682j;
                this.f8685m = this.f8683k;
                this.f8680h = this.f8679g;
                this.f8687o = this.f8686n;
            }
        }
        return true;
    }

    public void l(boolean z10) {
        this.f8677e = z10;
        if (z10 && this.f8695w == null) {
            this.f8695w = new GestureDetector(this.f8673a, new a(), this.f8691s);
        }
    }

    public void m(boolean z10) {
        this.f8678f = z10;
    }

    public y(Context context, b bVar, Handler handler) {
        this.f8694v = 0;
        this.f8673a = context;
        this.f8674b = bVar;
        this.f8689q = ViewConfiguration.get(context).getScaledTouchSlop() * 2;
        this.f8690r = 0;
        this.f8691s = handler;
        int i10 = context.getApplicationInfo().targetSdkVersion;
        if (i10 > 18) {
            l(true);
        }
        if (i10 > 22) {
            m(true);
        }
    }
}
