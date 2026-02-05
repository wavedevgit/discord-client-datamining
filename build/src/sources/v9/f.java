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
    private o9.a f51911d;

    /* renamed from: e  reason: collision with root package name */
    private final c f51912e;

    /* renamed from: i  reason: collision with root package name */
    private d f51913i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f51914o;

    /* renamed from: p  reason: collision with root package name */
    private final a f51915p;

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
        this.f51911d = animationBackend;
        this.f51912e = new c(new x9.a(this.f51911d));
        this.f51913i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f51914o = drawableProperties;
        this.f51915p = new a();
    }

    @Override // c9.a
    public void a() {
        this.f51911d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f51912e.a();
        if (a10 == -1) {
            a10 = this.f51911d.a() - 1;
            this.f51912e.g(false);
            this.f51913i.c(this);
        } else if (a10 == 0 && this.f51912e.h()) {
            this.f51913i.a(this);
        }
        if (this.f51911d.h(this, canvas, a10)) {
            this.f51913i.d(this, a10);
            this.f51912e.f(a10);
        } else {
            this.f51912e.e();
        }
        long c10 = this.f51912e.c();
        if (c10 != -1) {
            scheduleSelf(this.f51915p, c10);
            return;
        }
        this.f51913i.c(this);
        this.f51912e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f51911d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f51911d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f51912e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f51911d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f51914o.b(i10);
        this.f51911d.m(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f51914o.c(colorFilter);
        this.f51911d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f51911d.a() <= 0) {
            return;
        }
        this.f51912e.i();
        this.f51913i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f51912e.j();
        this.f51913i.c(this);
        unscheduleSelf(this.f51915p);
    }
}
