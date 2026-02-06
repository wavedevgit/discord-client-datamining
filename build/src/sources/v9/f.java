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
    private o9.a f52276d;

    /* renamed from: e  reason: collision with root package name */
    private final c f52277e;

    /* renamed from: i  reason: collision with root package name */
    private d f52278i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f52279o;

    /* renamed from: p  reason: collision with root package name */
    private final a f52280p;

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
        this.f52276d = animationBackend;
        this.f52277e = new c(new x9.a(this.f52276d));
        this.f52278i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f52279o = drawableProperties;
        this.f52280p = new a();
    }

    @Override // c9.a
    public void a() {
        this.f52276d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f52277e.a();
        if (a10 == -1) {
            a10 = this.f52276d.a() - 1;
            this.f52277e.g(false);
            this.f52278i.c(this);
        } else if (a10 == 0 && this.f52277e.h()) {
            this.f52278i.a(this);
        }
        if (this.f52276d.h(this, canvas, a10)) {
            this.f52278i.d(this, a10);
            this.f52277e.f(a10);
        } else {
            this.f52277e.e();
        }
        long c10 = this.f52277e.c();
        if (c10 != -1) {
            scheduleSelf(this.f52280p, c10);
            return;
        }
        this.f52278i.c(this);
        this.f52277e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f52276d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f52276d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f52277e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f52276d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f52279o.b(i10);
        this.f52276d.m(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f52279o.c(colorFilter);
        this.f52276d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f52276d.a() <= 0) {
            return;
        }
        this.f52277e.i();
        this.f52278i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f52277e.j();
        this.f52278i.c(this);
        unscheduleSelf(this.f52280p);
    }
}
