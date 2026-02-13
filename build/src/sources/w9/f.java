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
    private p9.a f52949d;

    /* renamed from: e  reason: collision with root package name */
    private final c f52950e;

    /* renamed from: i  reason: collision with root package name */
    private d f52951i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f52952o;

    /* renamed from: p  reason: collision with root package name */
    private final a f52953p;

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
        this.f52949d = animationBackend;
        this.f52950e = new c(new y9.a(this.f52949d));
        this.f52951i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f52952o = drawableProperties;
        this.f52953p = new a();
    }

    @Override // d9.a
    public void a() {
        this.f52949d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f52950e.a();
        if (a10 == -1) {
            a10 = this.f52949d.a() - 1;
            this.f52950e.g(false);
            this.f52951i.c(this);
        } else if (a10 == 0 && this.f52950e.h()) {
            this.f52951i.a(this);
        }
        if (this.f52949d.h(this, canvas, a10)) {
            this.f52951i.d(this, a10);
            this.f52950e.f(a10);
        } else {
            this.f52950e.e();
        }
        long c10 = this.f52950e.c();
        if (c10 != -1) {
            scheduleSelf(this.f52953p, c10);
            return;
        }
        this.f52951i.c(this);
        this.f52950e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f52949d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f52949d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f52950e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f52949d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f52952o.b(i10);
        this.f52949d.l(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f52952o.c(colorFilter);
        this.f52949d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f52949d.a() <= 0) {
            return;
        }
        this.f52950e.i();
        this.f52951i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f52950e.j();
        this.f52951i.c(this);
        unscheduleSelf(this.f52953p);
    }
}
