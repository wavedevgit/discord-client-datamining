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
    private o9.a f50745d;

    /* renamed from: e  reason: collision with root package name */
    private x9.b f50746e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f50747i;

    /* renamed from: o  reason: collision with root package name */
    private long f50748o;

    /* renamed from: p  reason: collision with root package name */
    private long f50749p;

    /* renamed from: q  reason: collision with root package name */
    private long f50750q;

    /* renamed from: r  reason: collision with root package name */
    private int f50751r;

    /* renamed from: s  reason: collision with root package name */
    private long f50752s;

    /* renamed from: t  reason: collision with root package name */
    private long f50753t;

    /* renamed from: u  reason: collision with root package name */
    private int f50754u;

    /* renamed from: w  reason: collision with root package name */
    private long f50756w;

    /* renamed from: x  reason: collision with root package name */
    private int f50757x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0532a f50759z;

    /* renamed from: v  reason: collision with root package name */
    private long f50755v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f50758y = E;

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
    public static final class RunnableC0669b implements Runnable {
        RunnableC0669b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.unscheduleSelf(this);
            b.this.invalidateSelf();
        }
    }

    public b(o9.a aVar) {
        this.f50745d = aVar;
        a.InterfaceC0532a interfaceC0532a = new a.InterfaceC0532a() { // from class: v9.a
        };
        this.f50759z = interfaceC0532a;
        this.B = new RunnableC0669b();
        this.f50746e = C.b(this.f50745d);
        o9.a aVar2 = this.f50745d;
        if (aVar2 != null) {
            aVar2.k(interfaceC0532a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f50757x++;
        if (p8.a.w(2)) {
            p8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f50757x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f50748o + j10;
        this.f50750q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // c9.a
    public void a() {
        o9.a aVar = this.f50745d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f50745d != null && this.f50746e != null) {
            long b10 = b();
            if (this.f50747i) {
                max = (b10 - this.f50748o) + this.f50756w;
            } else {
                max = (long) Math.max(this.f50749p, 0.0d);
            }
            x9.b bVar = this.f50746e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f50749p);
            if (b11 != -1) {
                if (b11 == 0 && this.f50751r != -1 && b10 >= this.f50750q) {
                    this.f50758y.a(this);
                }
            } else {
                o9.a aVar = this.f50745d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f50758y.c(this);
                this.f50747i = false;
            }
            o9.a aVar2 = this.f50745d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f50758y.d(this, b11);
                this.f50751r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f50747i) {
                x9.b bVar2 = this.f50746e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f50748o);
                if (a10 != -1) {
                    d(a10 + this.f50755v);
                } else {
                    this.f50758y.c(this);
                    this.f50747i = false;
                }
            }
            this.f50749p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        o9.a aVar = this.f50745d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        o9.a aVar = this.f50745d;
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
        return this.f50747i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        o9.a aVar = this.f50745d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f50747i) {
            return false;
        }
        long j10 = i10;
        if (this.f50749p == j10) {
            return false;
        }
        this.f50749p = j10;
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
        o9.a aVar = this.f50745d;
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
        o9.a aVar = this.f50745d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        o9.a aVar;
        if (!this.f50747i && (aVar = this.f50745d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f50747i = true;
                long b10 = b();
                long j10 = b10 - this.f50752s;
                this.f50748o = j10;
                this.f50750q = j10;
                this.f50749p = b10 - this.f50753t;
                this.f50751r = this.f50754u;
                invalidateSelf();
                this.f50758y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f50747i) {
            return;
        }
        long b10 = b();
        this.f50752s = b10 - this.f50748o;
        this.f50753t = b10 - this.f50749p;
        this.f50754u = this.f50751r;
        this.f50747i = false;
        this.f50748o = 0L;
        this.f50750q = 0L;
        this.f50749p = -1L;
        this.f50751r = -1;
        unscheduleSelf(this.B);
        this.f50758y.c(this);
    }
}
