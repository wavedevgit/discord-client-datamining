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
    private p9.a f52381d;

    /* renamed from: e  reason: collision with root package name */
    private final c f52382e;

    /* renamed from: i  reason: collision with root package name */
    private d f52383i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f52384o;

    /* renamed from: p  reason: collision with root package name */
    private final a f52385p;

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
        this.f52381d = animationBackend;
        this.f52382e = new c(new y9.a(this.f52381d));
        this.f52383i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f52384o = drawableProperties;
        this.f52385p = new a();
    }

    @Override // d9.a
    public void a() {
        this.f52381d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f52382e.a();
        if (a10 == -1) {
            a10 = this.f52381d.a() - 1;
            this.f52382e.g(false);
            this.f52383i.c(this);
        } else if (a10 == 0 && this.f52382e.h()) {
            this.f52383i.a(this);
        }
        if (this.f52381d.h(this, canvas, a10)) {
            this.f52383i.d(this, a10);
            this.f52382e.f(a10);
        } else {
            this.f52382e.e();
        }
        long c10 = this.f52382e.c();
        if (c10 != -1) {
            scheduleSelf(this.f52385p, c10);
            return;
        }
        this.f52383i.c(this);
        this.f52382e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f52381d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f52381d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f52382e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f52381d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f52384o.b(i10);
        this.f52381d.l(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f52384o.c(colorFilter);
        this.f52381d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f52381d.a() <= 0) {
            return;
        }
        this.f52382e.i();
        this.f52383i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f52382e.j();
        this.f52383i.c(this);
        unscheduleSelf(this.f52385p);
    }
}
