package w9;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import com.facebook.drawee.drawable.DrawableProperties;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends Drawable implements Animatable, d9.a {

    /* renamed from: d  reason: collision with root package name */
    private p9.a f52380d;

    /* renamed from: e  reason: collision with root package name */
    private final c f52381e;

    /* renamed from: i  reason: collision with root package name */
    private d f52382i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f52383o;

    /* renamed from: p  reason: collision with root package name */
    private final a f52384p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            f.this.unscheduleSelf(this);
            f.this.invalidateSelf();
        }
    }

    public f(p9.a animationBackend) {
        Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
        this.f52380d = animationBackend;
        this.f52381e = new c(new y9.a(this.f52380d));
        this.f52382i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f52383o = drawableProperties;
        this.f52384p = new a();
    }

    @Override // d9.a
    public void a() {
        this.f52380d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f52381e.a();
        if (a10 == -1) {
            a10 = this.f52380d.a() - 1;
            this.f52381e.g(false);
            this.f52382i.c(this);
        } else if (a10 == 0 && this.f52381e.h()) {
            this.f52382i.a(this);
        }
        if (this.f52380d.h(this, canvas, a10)) {
            this.f52382i.d(this, a10);
            this.f52381e.f(a10);
        } else {
            this.f52381e.e();
        }
        long c10 = this.f52381e.c();
        if (c10 != -1) {
            scheduleSelf(this.f52384p, c10);
            return;
        }
        this.f52382i.c(this);
        this.f52381e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f52380d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f52380d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f52381e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f52380d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f52383o.b(i10);
        this.f52380d.l(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f52383o.c(colorFilter);
        this.f52380d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f52380d.a() <= 0) {
            return;
        }
        this.f52381e.i();
        this.f52382i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f52381e.j();
        this.f52382i.c(this);
        unscheduleSelf(this.f52384p);
    }
}
