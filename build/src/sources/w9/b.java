package w9;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import com.facebook.drawee.drawable.DrawableProperties;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p9.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends Drawable implements Animatable, d9.a {
    public static final a C = new a(null);
    private static final Class D = b.class;
    private static final d E = new e();
    private DrawableProperties A;
    private final Runnable B;

    /* renamed from: d  reason: collision with root package name */
    private p9.a f52921d;

    /* renamed from: e  reason: collision with root package name */
    private y9.b f52922e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f52923i;

    /* renamed from: o  reason: collision with root package name */
    private long f52924o;

    /* renamed from: p  reason: collision with root package name */
    private long f52925p;

    /* renamed from: q  reason: collision with root package name */
    private long f52926q;

    /* renamed from: r  reason: collision with root package name */
    private int f52927r;

    /* renamed from: s  reason: collision with root package name */
    private long f52928s;

    /* renamed from: t  reason: collision with root package name */
    private long f52929t;

    /* renamed from: u  reason: collision with root package name */
    private int f52930u;

    /* renamed from: w  reason: collision with root package name */
    private long f52932w;

    /* renamed from: x  reason: collision with root package name */
    private int f52933x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0586a f52935z;

    /* renamed from: v  reason: collision with root package name */
    private long f52931v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f52934y = E;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final y9.b b(p9.a aVar) {
            if (aVar == null) {
                return null;
            }
            return new y9.a(aVar);
        }

        private a() {
        }
    }

    /* renamed from: w9.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class RunnableC0727b implements Runnable {
        RunnableC0727b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.unscheduleSelf(this);
            b.this.invalidateSelf();
        }
    }

    public b(p9.a aVar) {
        this.f52921d = aVar;
        a.InterfaceC0586a interfaceC0586a = new a.InterfaceC0586a() { // from class: w9.a
        };
        this.f52935z = interfaceC0586a;
        this.B = new RunnableC0727b();
        this.f52922e = C.b(this.f52921d);
        p9.a aVar2 = this.f52921d;
        if (aVar2 != null) {
            aVar2.n(interfaceC0586a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f52933x++;
        if (q8.a.w(2)) {
            q8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f52933x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f52924o + j10;
        this.f52926q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // d9.a
    public void a() {
        p9.a aVar = this.f52921d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f52921d != null && this.f52922e != null) {
            long b10 = b();
            if (this.f52923i) {
                max = (b10 - this.f52924o) + this.f52932w;
            } else {
                max = (long) Math.max(this.f52925p, 0.0d);
            }
            y9.b bVar = this.f52922e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f52925p);
            if (b11 != -1) {
                if (b11 == 0 && this.f52927r != -1 && b10 >= this.f52926q) {
                    this.f52934y.a(this);
                }
            } else {
                p9.a aVar = this.f52921d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f52934y.c(this);
                this.f52923i = false;
            }
            p9.a aVar2 = this.f52921d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f52934y.d(this, b11);
                this.f52927r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f52923i) {
                y9.b bVar2 = this.f52922e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f52924o);
                if (a10 != -1) {
                    d(a10 + this.f52931v);
                } else {
                    this.f52934y.c(this);
                    this.f52923i = false;
                }
            }
            this.f52925p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        p9.a aVar = this.f52921d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        p9.a aVar = this.f52921d;
        if (aVar != null) {
            return aVar.e();
        }
        return super.getIntrinsicWidth();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f52923i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        p9.a aVar = this.f52921d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f52923i) {
            return false;
        }
        long j10 = i10;
        if (this.f52925p == j10) {
            return false;
        }
        this.f52925p = j10;
        invalidateSelf();
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        if (this.A == null) {
            this.A = new DrawableProperties();
        }
        DrawableProperties drawableProperties = this.A;
        Intrinsics.checkNotNull(drawableProperties);
        drawableProperties.b(i10);
        p9.a aVar = this.f52921d;
        if (aVar != null) {
            aVar.l(i10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        if (this.A == null) {
            this.A = new DrawableProperties();
        }
        DrawableProperties drawableProperties = this.A;
        Intrinsics.checkNotNull(drawableProperties);
        drawableProperties.c(colorFilter);
        p9.a aVar = this.f52921d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        p9.a aVar;
        if (!this.f52923i && (aVar = this.f52921d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f52923i = true;
                long b10 = b();
                long j10 = b10 - this.f52928s;
                this.f52924o = j10;
                this.f52926q = j10;
                this.f52925p = b10 - this.f52929t;
                this.f52927r = this.f52930u;
                invalidateSelf();
                this.f52934y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f52923i) {
            return;
        }
        long b10 = b();
        this.f52928s = b10 - this.f52924o;
        this.f52929t = b10 - this.f52925p;
        this.f52930u = this.f52927r;
        this.f52923i = false;
        this.f52924o = 0L;
        this.f52926q = 0L;
        this.f52925p = -1L;
        this.f52927r = -1;
        unscheduleSelf(this.B);
        this.f52934y.c(this);
    }
}
