package v9;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import com.facebook.drawee.drawable.DrawableProperties;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends Drawable implements Animatable, c9.a {

    /* renamed from: d  reason: collision with root package name */
    private o9.a f51225d;

    /* renamed from: e  reason: collision with root package name */
    private final c f51226e;

    /* renamed from: i  reason: collision with root package name */
    private d f51227i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f51228o;

    /* renamed from: p  reason: collision with root package name */
    private final a f51229p;

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

    public f(o9.a animationBackend) {
        Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
        this.f51225d = animationBackend;
        this.f51226e = new c(new x9.a(this.f51225d));
        this.f51227i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f51228o = drawableProperties;
        this.f51229p = new a();
    }

    @Override // c9.a
    public void a() {
        this.f51225d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f51226e.a();
        if (a10 == -1) {
            a10 = this.f51225d.a() - 1;
            this.f51226e.g(false);
            this.f51227i.c(this);
        } else if (a10 == 0 && this.f51226e.h()) {
            this.f51227i.a(this);
        }
        if (this.f51225d.h(this, canvas, a10)) {
            this.f51227i.d(this, a10);
            this.f51226e.f(a10);
        } else {
            this.f51226e.e();
        }
        long c10 = this.f51226e.c();
        if (c10 != -1) {
            scheduleSelf(this.f51229p, c10);
            return;
        }
        this.f51227i.c(this);
        this.f51226e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f51225d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f51225d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f51226e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f51225d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f51228o.b(i10);
        this.f51225d.m(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f51228o.c(colorFilter);
        this.f51225d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f51225d.a() <= 0) {
            return;
        }
        this.f51226e.i();
        this.f51227i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f51226e.j();
        this.f51227i.c(this);
        unscheduleSelf(this.f51229p);
    }
}
