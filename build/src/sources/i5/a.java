package i5;

import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements d, j5.d, DefaultLifecycleObserver {

    /* renamed from: d  reason: collision with root package name */
    private boolean f27244d;

    @Override // i5.c
    public void a(Drawable drawable) {
        g(drawable);
    }

    @Override // i5.c
    public void b(Drawable drawable) {
        g(drawable);
    }

    @Override // i5.c
    public void c(Drawable drawable) {
        g(drawable);
    }

    public abstract void d(Drawable drawable);

    protected final void f() {
        Animatable animatable;
        Drawable drawable = getDrawable();
        if (drawable instanceof Animatable) {
            animatable = (Animatable) drawable;
        } else {
            animatable = null;
        }
        if (animatable == null) {
            return;
        }
        if (this.f27244d) {
            animatable.start();
        } else {
            animatable.stop();
        }
    }

    protected final void g(Drawable drawable) {
        Animatable animatable;
        Drawable drawable2 = getDrawable();
        if (drawable2 instanceof Animatable) {
            animatable = (Animatable) drawable2;
        } else {
            animatable = null;
        }
        if (animatable != null) {
            animatable.stop();
        }
        d(drawable);
        f();
    }

    @Override // j5.d
    public abstract Drawable getDrawable();

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onStart(LifecycleOwner lifecycleOwner) {
        this.f27244d = true;
        f();
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onStop(LifecycleOwner lifecycleOwner) {
        this.f27244d = false;
        f();
    }
}
