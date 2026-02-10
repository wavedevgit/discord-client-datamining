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
    private p9.a f53323d;

    /* renamed from: e  reason: collision with root package name */
    private y9.b f53324e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f53325i;

    /* renamed from: o  reason: collision with root package name */
    private long f53326o;

    /* renamed from: p  reason: collision with root package name */
    private long f53327p;

    /* renamed from: q  reason: collision with root package name */
    private long f53328q;

    /* renamed from: r  reason: collision with root package name */
    private int f53329r;

    /* renamed from: s  reason: collision with root package name */
    private long f53330s;

    /* renamed from: t  reason: collision with root package name */
    private long f53331t;

    /* renamed from: u  reason: collision with root package name */
    private int f53332u;

    /* renamed from: w  reason: collision with root package name */
    private long f53334w;

    /* renamed from: x  reason: collision with root package name */
    private int f53335x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0610a f53337z;

    /* renamed from: v  reason: collision with root package name */
    private long f53333v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f53336y = E;

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
    public static final class RunnableC0738b implements Runnable {
        RunnableC0738b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.unscheduleSelf(this);
            b.this.invalidateSelf();
        }
    }

    public b(p9.a aVar) {
        this.f53323d = aVar;
        a.InterfaceC0610a interfaceC0610a = new a.InterfaceC0610a() { // from class: w9.a
        };
        this.f53337z = interfaceC0610a;
        this.B = new RunnableC0738b();
        this.f53324e = C.b(this.f53323d);
        p9.a aVar2 = this.f53323d;
        if (aVar2 != null) {
            aVar2.n(interfaceC0610a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f53335x++;
        if (q8.a.w(2)) {
            q8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f53335x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f53326o + j10;
        this.f53328q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // d9.a
    public void a() {
        p9.a aVar = this.f53323d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f53323d != null && this.f53324e != null) {
            long b10 = b();
            if (this.f53325i) {
                max = (b10 - this.f53326o) + this.f53334w;
            } else {
                max = (long) Math.max(this.f53327p, 0.0d);
            }
            y9.b bVar = this.f53324e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f53327p);
            if (b11 != -1) {
                if (b11 == 0 && this.f53329r != -1 && b10 >= this.f53328q) {
                    this.f53336y.a(this);
                }
            } else {
                p9.a aVar = this.f53323d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f53336y.c(this);
                this.f53325i = false;
            }
            p9.a aVar2 = this.f53323d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f53336y.d(this, b11);
                this.f53329r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f53325i) {
                y9.b bVar2 = this.f53324e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f53326o);
                if (a10 != -1) {
                    d(a10 + this.f53333v);
                } else {
                    this.f53336y.c(this);
                    this.f53325i = false;
                }
            }
            this.f53327p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        p9.a aVar = this.f53323d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        p9.a aVar = this.f53323d;
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
        return this.f53325i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        p9.a aVar = this.f53323d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f53325i) {
            return false;
        }
        long j10 = i10;
        if (this.f53327p == j10) {
            return false;
        }
        this.f53327p = j10;
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
        p9.a aVar = this.f53323d;
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
        p9.a aVar = this.f53323d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        p9.a aVar;
        if (!this.f53325i && (aVar = this.f53323d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f53325i = true;
                long b10 = b();
                long j10 = b10 - this.f53330s;
                this.f53326o = j10;
                this.f53328q = j10;
                this.f53327p = b10 - this.f53331t;
                this.f53329r = this.f53332u;
                invalidateSelf();
                this.f53336y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f53325i) {
            return;
        }
        long b10 = b();
        this.f53330s = b10 - this.f53326o;
        this.f53331t = b10 - this.f53327p;
        this.f53332u = this.f53329r;
        this.f53325i = false;
        this.f53326o = 0L;
        this.f53328q = 0L;
        this.f53327p = -1L;
        this.f53329r = -1;
        unscheduleSelf(this.B);
        this.f53336y.c(this);
    }
}
