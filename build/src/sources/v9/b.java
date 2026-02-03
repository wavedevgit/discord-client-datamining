package v9;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import com.facebook.drawee.drawable.DrawableProperties;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o9.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends Drawable implements Animatable, c9.a {
    public static final a C = new a(null);
    private static final Class D = b.class;
    private static final d E = new e();
    private DrawableProperties A;
    private final Runnable B;

    /* renamed from: d  reason: collision with root package name */
    private o9.a f50869d;

    /* renamed from: e  reason: collision with root package name */
    private x9.b f50870e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f50871i;

    /* renamed from: o  reason: collision with root package name */
    private long f50872o;

    /* renamed from: p  reason: collision with root package name */
    private long f50873p;

    /* renamed from: q  reason: collision with root package name */
    private long f50874q;

    /* renamed from: r  reason: collision with root package name */
    private int f50875r;

    /* renamed from: s  reason: collision with root package name */
    private long f50876s;

    /* renamed from: t  reason: collision with root package name */
    private long f50877t;

    /* renamed from: u  reason: collision with root package name */
    private int f50878u;

    /* renamed from: w  reason: collision with root package name */
    private long f50880w;

    /* renamed from: x  reason: collision with root package name */
    private int f50881x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0540a f50883z;

    /* renamed from: v  reason: collision with root package name */
    private long f50879v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f50882y = E;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final x9.b b(o9.a aVar) {
            if (aVar == null) {
                return null;
            }
            return new x9.a(aVar);
        }

        private a() {
        }
    }

    /* renamed from: v9.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class RunnableC0681b implements Runnable {
        RunnableC0681b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.unscheduleSelf(this);
            b.this.invalidateSelf();
        }
    }

    public b(o9.a aVar) {
        this.f50869d = aVar;
        a.InterfaceC0540a interfaceC0540a = new a.InterfaceC0540a() { // from class: v9.a
        };
        this.f50883z = interfaceC0540a;
        this.B = new RunnableC0681b();
        this.f50870e = C.b(this.f50869d);
        o9.a aVar2 = this.f50869d;
        if (aVar2 != null) {
            aVar2.k(interfaceC0540a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f50881x++;
        if (p8.a.w(2)) {
            p8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f50881x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f50872o + j10;
        this.f50874q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // c9.a
    public void a() {
        o9.a aVar = this.f50869d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f50869d != null && this.f50870e != null) {
            long b10 = b();
            if (this.f50871i) {
                max = (b10 - this.f50872o) + this.f50880w;
            } else {
                max = (long) Math.max(this.f50873p, 0.0d);
            }
            x9.b bVar = this.f50870e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f50873p);
            if (b11 != -1) {
                if (b11 == 0 && this.f50875r != -1 && b10 >= this.f50874q) {
                    this.f50882y.a(this);
                }
            } else {
                o9.a aVar = this.f50869d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f50882y.c(this);
                this.f50871i = false;
            }
            o9.a aVar2 = this.f50869d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f50882y.d(this, b11);
                this.f50875r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f50871i) {
                x9.b bVar2 = this.f50870e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f50872o);
                if (a10 != -1) {
                    d(a10 + this.f50879v);
                } else {
                    this.f50882y.c(this);
                    this.f50871i = false;
                }
            }
            this.f50873p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        o9.a aVar = this.f50869d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        o9.a aVar = this.f50869d;
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
        return this.f50871i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        o9.a aVar = this.f50869d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f50871i) {
            return false;
        }
        long j10 = i10;
        if (this.f50873p == j10) {
            return false;
        }
        this.f50873p = j10;
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
        o9.a aVar = this.f50869d;
        if (aVar != null) {
            aVar.m(i10);
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
        o9.a aVar = this.f50869d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        o9.a aVar;
        if (!this.f50871i && (aVar = this.f50869d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f50871i = true;
                long b10 = b();
                long j10 = b10 - this.f50876s;
                this.f50872o = j10;
                this.f50874q = j10;
                this.f50873p = b10 - this.f50877t;
                this.f50875r = this.f50878u;
                invalidateSelf();
                this.f50882y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f50871i) {
            return;
        }
        long b10 = b();
        this.f50876s = b10 - this.f50872o;
        this.f50877t = b10 - this.f50873p;
        this.f50878u = this.f50875r;
        this.f50871i = false;
        this.f50872o = 0L;
        this.f50874q = 0L;
        this.f50873p = -1L;
        this.f50875r = -1;
        unscheduleSelf(this.B);
        this.f50882y.c(this);
    }
}
