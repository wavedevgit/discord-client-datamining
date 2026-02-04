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
    private o9.a f51194d;

    /* renamed from: e  reason: collision with root package name */
    private x9.b f51195e;

    /* renamed from: i  reason: collision with root package name */
    private volatile boolean f51196i;

    /* renamed from: o  reason: collision with root package name */
    private long f51197o;

    /* renamed from: p  reason: collision with root package name */
    private long f51198p;

    /* renamed from: q  reason: collision with root package name */
    private long f51199q;

    /* renamed from: r  reason: collision with root package name */
    private int f51200r;

    /* renamed from: s  reason: collision with root package name */
    private long f51201s;

    /* renamed from: t  reason: collision with root package name */
    private long f51202t;

    /* renamed from: u  reason: collision with root package name */
    private int f51203u;

    /* renamed from: w  reason: collision with root package name */
    private long f51205w;

    /* renamed from: x  reason: collision with root package name */
    private int f51206x;

    /* renamed from: z  reason: collision with root package name */
    private final a.InterfaceC0540a f51208z;

    /* renamed from: v  reason: collision with root package name */
    private long f51204v = 8;

    /* renamed from: y  reason: collision with root package name */
    private volatile d f51207y = E;

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
    public static final class RunnableC0672b implements Runnable {
        RunnableC0672b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.unscheduleSelf(this);
            b.this.invalidateSelf();
        }
    }

    public b(o9.a aVar) {
        this.f51194d = aVar;
        a.InterfaceC0540a interfaceC0540a = new a.InterfaceC0540a() { // from class: v9.a
        };
        this.f51208z = interfaceC0540a;
        this.B = new RunnableC0672b();
        this.f51195e = C.b(this.f51194d);
        o9.a aVar2 = this.f51194d;
        if (aVar2 != null) {
            aVar2.k(interfaceC0540a);
        }
    }

    private final long b() {
        return SystemClock.uptimeMillis();
    }

    private final void c() {
        this.f51206x++;
        if (p8.a.w(2)) {
            p8.a.z(D, "Dropped a frame. Count: %s", Integer.valueOf(this.f51206x));
        }
    }

    private final void d(long j10) {
        long j11 = this.f51197o + j10;
        this.f51199q = j11;
        scheduleSelf(this.B, j11);
    }

    @Override // c9.a
    public void a() {
        o9.a aVar = this.f51194d;
        if (aVar != null) {
            aVar.clear();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        long max;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f51194d != null && this.f51195e != null) {
            long b10 = b();
            if (this.f51196i) {
                max = (b10 - this.f51197o) + this.f51205w;
            } else {
                max = (long) Math.max(this.f51198p, 0.0d);
            }
            x9.b bVar = this.f51195e;
            Intrinsics.checkNotNull(bVar);
            int b11 = bVar.b(max, this.f51198p);
            if (b11 != -1) {
                if (b11 == 0 && this.f51200r != -1 && b10 >= this.f51199q) {
                    this.f51207y.a(this);
                }
            } else {
                o9.a aVar = this.f51194d;
                Intrinsics.checkNotNull(aVar);
                b11 = aVar.a() - 1;
                this.f51207y.c(this);
                this.f51196i = false;
            }
            o9.a aVar2 = this.f51194d;
            Intrinsics.checkNotNull(aVar2);
            boolean h10 = aVar2.h(this, canvas, b11);
            if (h10) {
                this.f51207y.d(this, b11);
                this.f51200r = b11;
            }
            if (!h10) {
                c();
            }
            long b12 = b();
            if (this.f51196i) {
                x9.b bVar2 = this.f51195e;
                Intrinsics.checkNotNull(bVar2);
                long a10 = bVar2.a(b12 - this.f51197o);
                if (a10 != -1) {
                    d(a10 + this.f51204v);
                } else {
                    this.f51207y.c(this);
                    this.f51196i = false;
                }
            }
            this.f51198p = max;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        o9.a aVar = this.f51194d;
        if (aVar != null) {
            return aVar.c();
        }
        return super.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        o9.a aVar = this.f51194d;
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
        return this.f51196i;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        o9.a aVar = this.f51194d;
        if (aVar != null) {
            aVar.d(bounds);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        if (this.f51196i) {
            return false;
        }
        long j10 = i10;
        if (this.f51198p == j10) {
            return false;
        }
        this.f51198p = j10;
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
        o9.a aVar = this.f51194d;
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
        o9.a aVar = this.f51194d;
        if (aVar != null) {
            aVar.f(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        o9.a aVar;
        if (!this.f51196i && (aVar = this.f51194d) != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a() > 1) {
                this.f51196i = true;
                long b10 = b();
                long j10 = b10 - this.f51201s;
                this.f51197o = j10;
                this.f51199q = j10;
                this.f51198p = b10 - this.f51202t;
                this.f51200r = this.f51203u;
                invalidateSelf();
                this.f51207y.b(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        if (!this.f51196i) {
            return;
        }
        long b10 = b();
        this.f51201s = b10 - this.f51197o;
        this.f51202t = b10 - this.f51198p;
        this.f51203u = this.f51200r;
        this.f51196i = false;
        this.f51197o = 0L;
        this.f51199q = 0L;
        this.f51198p = -1L;
        this.f51200r = -1;
        unscheduleSelf(this.B);
        this.f51207y.c(this);
    }
}
