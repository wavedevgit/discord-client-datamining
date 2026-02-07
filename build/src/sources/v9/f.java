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
    private o9.a f52324d;

    /* renamed from: e  reason: collision with root package name */
    private final c f52325e;

    /* renamed from: i  reason: collision with root package name */
    private d f52326i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f52327o;

    /* renamed from: p  reason: collision with root package name */
    private final a f52328p;

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
        this.f52324d = animationBackend;
        this.f52325e = new c(new x9.a(this.f52324d));
        this.f52326i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f52327o = drawableProperties;
        this.f52328p = new a();
    }

    @Override // c9.a
    public void a() {
        this.f52324d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f52325e.a();
        if (a10 == -1) {
            a10 = this.f52324d.a() - 1;
            this.f52325e.g(false);
            this.f52326i.c(this);
        } else if (a10 == 0 && this.f52325e.h()) {
            this.f52326i.a(this);
        }
        if (this.f52324d.h(this, canvas, a10)) {
            this.f52326i.d(this, a10);
            this.f52325e.f(a10);
        } else {
            this.f52325e.e();
        }
        long c10 = this.f52325e.c();
        if (c10 != -1) {
            scheduleSelf(this.f52328p, c10);
            return;
        }
        this.f52326i.c(this);
        this.f52325e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f52324d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f52324d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f52325e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f52324d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f52327o.b(i10);
        this.f52324d.m(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f52327o.c(colorFilter);
        this.f52324d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f52324d.a() <= 0) {
            return;
        }
        this.f52325e.i();
        this.f52326i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f52325e.j();
        this.f52326i.c(this);
        unscheduleSelf(this.f52328p);
    }
}
