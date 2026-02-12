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
    private p9.a f52353d;

    /* renamed from: e  reason: collision with root package name */
    private y9.b f52354e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f52355i;

    /* renamed from: o  reason: collision with root package name */
    private long f52356o;

    /* renamed from: p  reason: collision with root package name */
    private long f52357p;

    /* renamed from: q  reason: collision with root package name */
    private long f52358q;

    /* renamed from: r  reason: collision with root package name */
    private int f52359r;

    /* renamed from: s  reason: collision with root package name */
    private long f52360s;

    /* renamed from: t  reason: collision with root package name */
    private long f52361t;

    /* renamed from: u  reason: collision with root package name */
    private int f52362u;

    /* renamed from: w  reason: collision with root package name */
    private long f52364w;

    /* renamed from: x  reason: collision with root package name */
    private int f52365x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0586a f52367z;

    /* renamed from: v  reason: collision with root package name */
    private long f52363v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f52366y = E;

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
        this.f52353d = aVar;
        a.InterfaceC0586a interfaceC0586a = new a.InterfaceC0586a() { // from class: w9.a
        };
        this.f52367z = interfaceC0586a;
        this.B = new RunnableC0727b();
        this.f52354e = C.b(this.f52353d);
        p9.a aVar2 = this.f52353d;
        if (aVar2 != null) {
            aVar2.n(interfaceC0586a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f52365x++;
        if (q8.a.w(2)) {
            q8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f52365x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f52356o + j10;
        this.f52358q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // d9.a
    public void a() {
        p9.a aVar = this.f52353d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f52353d != null && this.f52354e != null) {
            long b10 = b();
            if (this.f52355i) {
                max = (b10 - this.f52356o) + this.f52364w;
            } else {
                max = (long) Math.max(this.f52357p, 0.0d);
            }
            y9.b bVar = this.f52354e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f52357p);
            if (b11 != -1) {
                if (b11 == 0 && this.f52359r != -1 && b10 >= this.f52358q) {
                    this.f52366y.a(this);
                }
            } else {
                p9.a aVar = this.f52353d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f52366y.c(this);
                this.f52355i = false;
            }
            p9.a aVar2 = this.f52353d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f52366y.d(this, b11);
                this.f52359r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f52355i) {
                y9.b bVar2 = this.f52354e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f52356o);
                if (a10 != -1) {
                    d(a10 + this.f52363v);
                } else {
                    this.f52366y.c(this);
                    this.f52355i = false;
                }
            }
            this.f52357p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        p9.a aVar = this.f52353d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        p9.a aVar = this.f52353d;
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
        return this.f52355i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        p9.a aVar = this.f52353d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f52355i) {
            return false;
        }
        long j10 = i10;
        if (this.f52357p == j10) {
            return false;
        }
        this.f52357p = j10;
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
        p9.a aVar = this.f52353d;
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
        p9.a aVar = this.f52353d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        p9.a aVar;
        if (!this.f52355i && (aVar = this.f52353d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f52355i = true;
                long b10 = b();
                long j10 = b10 - this.f52360s;
                this.f52356o = j10;
                this.f52358q = j10;
                this.f52357p = b10 - this.f52361t;
                this.f52359r = this.f52362u;
                invalidateSelf();
                this.f52366y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f52355i) {
            return;
        }
        long b10 = b();
        this.f52360s = b10 - this.f52356o;
        this.f52361t = b10 - this.f52357p;
        this.f52362u = this.f52359r;
        this.f52355i = false;
        this.f52356o = 0L;
        this.f52358q = 0L;
        this.f52357p = -1L;
        this.f52359r = -1;
        unscheduleSelf(this.B);
        this.f52366y.c(this);
    }
}
