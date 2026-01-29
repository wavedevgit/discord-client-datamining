package i5;

import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements d, j5.d, DefaultLifecycleObserver {

    /* renamed from: d  reason: collision with root package name */
    private boolean f28369d;

    @Override // i5.c
    public void a(Drawable drawable) {
        f(drawable);
    }

    @Override // i5.c
    public void b(Drawable drawable) {
        f(drawable);
    }

    @Override // i5.c
    public void c(Drawable drawable) {
        f(drawable);
    }

    public abstract void d(Drawable drawable);

    protected final void e() {
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
        if (this.f28369d) {
            animatable.start();
        } else {
            animatable.stop();
        }
    }

    protected final void f(Drawable drawable) {
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
        e();
    }

    @Override // j5.d
    public abstract Drawable getDrawable();

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onStart(LifecycleOwner lifecycleOwner) {
        this.f28369d = true;
        e();
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onStop(LifecycleOwner lifecycleOwner) {
        this.f28369d = false;
        e();
    }
}
