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
    private o9.a f51883d;

    /* renamed from: e  reason: collision with root package name */
    private x9.b f51884e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f51885i;

    /* renamed from: o  reason: collision with root package name */
    private long f51886o;

    /* renamed from: p  reason: collision with root package name */
    private long f51887p;

    /* renamed from: q  reason: collision with root package name */
    private long f51888q;

    /* renamed from: r  reason: collision with root package name */
    private int f51889r;

    /* renamed from: s  reason: collision with root package name */
    private long f51890s;

    /* renamed from: t  reason: collision with root package name */
    private long f51891t;

    /* renamed from: u  reason: collision with root package name */
    private int f51892u;

    /* renamed from: w  reason: collision with root package name */
    private long f51894w;

    /* renamed from: x  reason: collision with root package name */
    private int f51895x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0548a f51897z;

    /* renamed from: v  reason: collision with root package name */
    private long f51893v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f51896y = E;

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
    public static final class RunnableC0676b implements Runnable {
        RunnableC0676b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.unscheduleSelf(this);
            b.this.invalidateSelf();
        }
    }

    public b(o9.a aVar) {
        this.f51883d = aVar;
        a.InterfaceC0548a interfaceC0548a = new a.InterfaceC0548a() { // from class: v9.a
        };
        this.f51897z = interfaceC0548a;
        this.B = new RunnableC0676b();
        this.f51884e = C.b(this.f51883d);
        o9.a aVar2 = this.f51883d;
        if (aVar2 != null) {
            aVar2.k(interfaceC0548a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f51895x++;
        if (p8.a.w(2)) {
            p8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f51895x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f51886o + j10;
        this.f51888q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // c9.a
    public void a() {
        o9.a aVar = this.f51883d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f51883d != null && this.f51884e != null) {
            long b10 = b();
            if (this.f51885i) {
                max = (b10 - this.f51886o) + this.f51894w;
            } else {
                max = (long) Math.max(this.f51887p, 0.0d);
            }
            x9.b bVar = this.f51884e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f51887p);
            if (b11 != -1) {
                if (b11 == 0 && this.f51889r != -1 && b10 >= this.f51888q) {
                    this.f51896y.a(this);
                }
            } else {
                o9.a aVar = this.f51883d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f51896y.c(this);
                this.f51885i = false;
            }
            o9.a aVar2 = this.f51883d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f51896y.d(this, b11);
                this.f51889r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f51885i) {
                x9.b bVar2 = this.f51884e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f51886o);
                if (a10 != -1) {
                    d(a10 + this.f51893v);
                } else {
                    this.f51896y.c(this);
                    this.f51885i = false;
                }
            }
            this.f51887p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        o9.a aVar = this.f51883d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        o9.a aVar = this.f51883d;
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
        return this.f51885i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        o9.a aVar = this.f51883d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f51885i) {
            return false;
        }
        long j10 = i10;
        if (this.f51887p == j10) {
            return false;
        }
        this.f51887p = j10;
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
        o9.a aVar = this.f51883d;
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
        o9.a aVar = this.f51883d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        o9.a aVar;
        if (!this.f51885i && (aVar = this.f51883d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f51885i = true;
                long b10 = b();
                long j10 = b10 - this.f51890s;
                this.f51886o = j10;
                this.f51888q = j10;
                this.f51887p = b10 - this.f51891t;
                this.f51889r = this.f51892u;
                invalidateSelf();
                this.f51896y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f51885i) {
            return;
        }
        long b10 = b();
        this.f51890s = b10 - this.f51886o;
        this.f51891t = b10 - this.f51887p;
        this.f51892u = this.f51889r;
        this.f51885i = false;
        this.f51886o = 0L;
        this.f51888q = 0L;
        this.f51887p = -1L;
        this.f51889r = -1;
        unscheduleSelf(this.B);
        this.f51896y.c(this);
    }
}
