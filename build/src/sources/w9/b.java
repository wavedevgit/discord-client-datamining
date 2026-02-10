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
    private p9.a f52352d;

    /* renamed from: e  reason: collision with root package name */
    private y9.b f52353e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f52354i;

    /* renamed from: o  reason: collision with root package name */
    private long f52355o;

    /* renamed from: p  reason: collision with root package name */
    private long f52356p;

    /* renamed from: q  reason: collision with root package name */
    private long f52357q;

    /* renamed from: r  reason: collision with root package name */
    private int f52358r;

    /* renamed from: s  reason: collision with root package name */
    private long f52359s;

    /* renamed from: t  reason: collision with root package name */
    private long f52360t;

    /* renamed from: u  reason: collision with root package name */
    private int f52361u;

    /* renamed from: w  reason: collision with root package name */
    private long f52363w;

    /* renamed from: x  reason: collision with root package name */
    private int f52364x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0586a f52366z;

    /* renamed from: v  reason: collision with root package name */
    private long f52362v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f52365y = E;

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
        this.f52352d = aVar;
        a.InterfaceC0586a interfaceC0586a = new a.InterfaceC0586a() { // from class: w9.a
        };
        this.f52366z = interfaceC0586a;
        this.B = new RunnableC0727b();
        this.f52353e = C.b(this.f52352d);
        p9.a aVar2 = this.f52352d;
        if (aVar2 != null) {
            aVar2.n(interfaceC0586a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f52364x++;
        if (q8.a.w(2)) {
            q8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f52364x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f52355o + j10;
        this.f52357q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // d9.a
    public void a() {
        p9.a aVar = this.f52352d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f52352d != null && this.f52353e != null) {
            long b10 = b();
            if (this.f52354i) {
                max = (b10 - this.f52355o) + this.f52363w;
            } else {
                max = (long) Math.max(this.f52356p, 0.0d);
            }
            y9.b bVar = this.f52353e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f52356p);
            if (b11 != -1) {
                if (b11 == 0 && this.f52358r != -1 && b10 >= this.f52357q) {
                    this.f52365y.a(this);
                }
            } else {
                p9.a aVar = this.f52352d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f52365y.c(this);
                this.f52354i = false;
            }
            p9.a aVar2 = this.f52352d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f52365y.d(this, b11);
                this.f52358r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f52354i) {
                y9.b bVar2 = this.f52353e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f52355o);
                if (a10 != -1) {
                    d(a10 + this.f52362v);
                } else {
                    this.f52365y.c(this);
                    this.f52354i = false;
                }
            }
            this.f52356p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        p9.a aVar = this.f52352d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        p9.a aVar = this.f52352d;
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
        return this.f52354i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        p9.a aVar = this.f52352d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f52354i) {
            return false;
        }
        long j10 = i10;
        if (this.f52356p == j10) {
            return false;
        }
        this.f52356p = j10;
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
        p9.a aVar = this.f52352d;
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
        p9.a aVar = this.f52352d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        p9.a aVar;
        if (!this.f52354i && (aVar = this.f52352d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f52354i = true;
                long b10 = b();
                long j10 = b10 - this.f52359s;
                this.f52355o = j10;
                this.f52357q = j10;
                this.f52356p = b10 - this.f52360t;
                this.f52358r = this.f52361u;
                invalidateSelf();
                this.f52365y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f52354i) {
            return;
        }
        long b10 = b();
        this.f52359s = b10 - this.f52355o;
        this.f52360t = b10 - this.f52356p;
        this.f52361u = this.f52358r;
        this.f52354i = false;
        this.f52355o = 0L;
        this.f52357q = 0L;
        this.f52356p = -1L;
        this.f52358r = -1;
        unscheduleSelf(this.B);
        this.f52365y.c(this);
    }
}
