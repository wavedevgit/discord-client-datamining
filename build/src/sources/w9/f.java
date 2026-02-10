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
    private p9.a f53351d;

    /* renamed from: e  reason: collision with root package name */
    private final c f53352e;

    /* renamed from: i  reason: collision with root package name */
    private d f53353i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f53354o;

    /* renamed from: p  reason: collision with root package name */
    private final a f53355p;

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
        this.f53351d = animationBackend;
        this.f53352e = new c(new y9.a(this.f53351d));
        this.f53353i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f53354o = drawableProperties;
        this.f53355p = new a();
    }

    @Override // d9.a
    public void a() {
        this.f53351d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f53352e.a();
        if (a10 == -1) {
            a10 = this.f53351d.a() - 1;
            this.f53352e.g(false);
            this.f53353i.c(this);
        } else if (a10 == 0 && this.f53352e.h()) {
            this.f53353i.a(this);
        }
        if (this.f53351d.h(this, canvas, a10)) {
            this.f53353i.d(this, a10);
            this.f53352e.f(a10);
        } else {
            this.f53352e.e();
        }
        long c10 = this.f53352e.c();
        if (c10 != -1) {
            scheduleSelf(this.f53355p, c10);
            return;
        }
        this.f53353i.c(this);
        this.f53352e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f53351d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f53351d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f53352e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f53351d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f53354o.b(i10);
        this.f53351d.l(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f53354o.c(colorFilter);
        this.f53351d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f53351d.a() <= 0) {
            return;
        }
        this.f53352e.i();
        this.f53353i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f53352e.j();
        this.f53353i.c(this);
        unscheduleSelf(this.f53355p);
    }
}
