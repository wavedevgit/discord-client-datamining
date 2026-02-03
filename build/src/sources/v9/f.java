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
    private o9.a f50897d;

    /* renamed from: e  reason: collision with root package name */
    private final c f50898e;

    /* renamed from: i  reason: collision with root package name */
    private d f50899i;

    /* renamed from: o  reason: collision with root package name */
    private final DrawableProperties f50900o;

    /* renamed from: p  reason: collision with root package name */
    private final a f50901p;

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
        this.f50897d = animationBackend;
        this.f50898e = new c(new x9.a(this.f50897d));
        this.f50899i = new e();
        DrawableProperties drawableProperties = new DrawableProperties();
        drawableProperties.a(this);
        this.f50900o = drawableProperties;
        this.f50901p = new a();
    }

    @Override // c9.a
    public void a() {
        this.f50897d.clear();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        int a10 = this.f50898e.a();
        if (a10 == -1) {
            a10 = this.f50897d.a() - 1;
            this.f50898e.g(false);
            this.f50899i.c(this);
        } else if (a10 == 0 && this.f50898e.h()) {
            this.f50899i.a(this);
        }
        if (this.f50897d.h(this, canvas, a10)) {
            this.f50899i.d(this, a10);
            this.f50898e.f(a10);
        } else {
            this.f50898e.e();
        }
        long c10 = this.f50898e.c();
        if (c10 != -1) {
            scheduleSelf(this.f50901p, c10);
            return;
        }
        this.f50899i.c(this);
        this.f50898e.g(false);
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f50897d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f50897d.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f50898e.b();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        this.f50897d.d(bounds);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f50900o.b(i10);
        this.f50897d.m(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f50900o.c(colorFilter);
        this.f50897d.f(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        if (this.f50897d.a() <= 0) {
            return;
        }
        this.f50898e.i();
        this.f50899i.b(this);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f50898e.j();
        this.f50899i.c(this);
        unscheduleSelf(this.f50901p);
    }
}
