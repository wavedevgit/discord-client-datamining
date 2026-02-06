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
    private o9.a f52248d;

    /* renamed from: e  reason: collision with root package name */
    private x9.b f52249e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f52250i;

    /* renamed from: o  reason: collision with root package name */
    private long f52251o;

    /* renamed from: p  reason: collision with root package name */
    private long f52252p;

    /* renamed from: q  reason: collision with root package name */
    private long f52253q;

    /* renamed from: r  reason: collision with root package name */
    private int f52254r;

    /* renamed from: s  reason: collision with root package name */
    private long f52255s;

    /* renamed from: t  reason: collision with root package name */
    private long f52256t;

    /* renamed from: u  reason: collision with root package name */
    private int f52257u;

    /* renamed from: w  reason: collision with root package name */
    private long f52259w;

    /* renamed from: x  reason: collision with root package name */
    private int f52260x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0557a f52262z;

    /* renamed from: v  reason: collision with root package name */
    private long f52258v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f52261y = E;

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
    public static final class RunnableC0685b implements Runnable {
        RunnableC0685b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.unscheduleSelf(this);
            b.this.invalidateSelf();
        }
    }

    public b(o9.a aVar) {
        this.f52248d = aVar;
        a.InterfaceC0557a interfaceC0557a = new a.InterfaceC0557a() { // from class: v9.a
        };
        this.f52262z = interfaceC0557a;
        this.B = new RunnableC0685b();
        this.f52249e = C.b(this.f52248d);
        o9.a aVar2 = this.f52248d;
        if (aVar2 != null) {
            aVar2.k(interfaceC0557a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f52260x++;
        if (p8.a.w(2)) {
            p8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f52260x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f52251o + j10;
        this.f52253q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // c9.a
    public void a() {
        o9.a aVar = this.f52248d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f52248d != null && this.f52249e != null) {
            long b10 = b();
            if (this.f52250i) {
                max = (b10 - this.f52251o) + this.f52259w;
            } else {
                max = (long) Math.max(this.f52252p, 0.0d);
            }
            x9.b bVar = this.f52249e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f52252p);
            if (b11 != -1) {
                if (b11 == 0 && this.f52254r != -1 && b10 >= this.f52253q) {
                    this.f52261y.a(this);
                }
            } else {
                o9.a aVar = this.f52248d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f52261y.c(this);
                this.f52250i = false;
            }
            o9.a aVar2 = this.f52248d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f52261y.d(this, b11);
                this.f52254r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f52250i) {
                x9.b bVar2 = this.f52249e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f52251o);
                if (a10 != -1) {
                    d(a10 + this.f52258v);
                } else {
                    this.f52261y.c(this);
                    this.f52250i = false;
                }
            }
            this.f52252p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        o9.a aVar = this.f52248d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        o9.a aVar = this.f52248d;
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
        return this.f52250i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        o9.a aVar = this.f52248d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f52250i) {
            return false;
        }
        long j10 = i10;
        if (this.f52252p == j10) {
            return false;
        }
        this.f52252p = j10;
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
        o9.a aVar = this.f52248d;
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
        o9.a aVar = this.f52248d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        o9.a aVar;
        if (!this.f52250i && (aVar = this.f52248d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f52250i = true;
                long b10 = b();
                long j10 = b10 - this.f52255s;
                this.f52251o = j10;
                this.f52253q = j10;
                this.f52252p = b10 - this.f52256t;
                this.f52254r = this.f52257u;
                invalidateSelf();
                this.f52261y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f52250i) {
            return;
        }
        long b10 = b();
        this.f52255s = b10 - this.f52251o;
        this.f52256t = b10 - this.f52252p;
        this.f52257u = this.f52254r;
        this.f52250i = false;
        this.f52251o = 0L;
        this.f52253q = 0L;
        this.f52252p = -1L;
        this.f52254r = -1;
        unscheduleSelf(this.B);
        this.f52261y.c(this);
    }
}
