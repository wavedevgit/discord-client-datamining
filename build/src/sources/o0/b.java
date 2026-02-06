package o0;

import androidx.annotation.NonNull;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.o;
import androidx.lifecycle.w;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import x.i;
import x.j;
import x.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements o, i {

    /* renamed from: e  reason: collision with root package name */
    private final LifecycleOwner f41285e;

    /* renamed from: i  reason: collision with root package name */
    private final e0.f f41286i;

    /* renamed from: d  reason: collision with root package name */
    private final Object f41284d = new Object();

    /* renamed from: o  reason: collision with root package name */
    private volatile boolean f41287o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f41288p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f41289q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        this.f41285e = lifecycleOwner;
        this.f41286i = fVar;
        if (lifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4849o)) {
            fVar.k();
        } else {
            fVar.A();
        }
        lifecycleOwner.getLifecycle().a(this);
    }

    @Override // x.i
    public j a() {
        return this.f41286i.a();
    }

    @Override // x.i
    public x.o b() {
        return this.f41286i.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Collection collection) {
        synchronized (this.f41284d) {
            this.f41286i.j(collection);
        }
    }

    public e0.f e() {
        return this.f41286i;
    }

    @w(Lifecycle.a.ON_DESTROY)
    public void onDestroy(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f41284d) {
            e0.f fVar = this.f41286i;
            fVar.X(fVar.J());
        }
    }

    @w(Lifecycle.a.ON_PAUSE)
    public void onPause(@NonNull LifecycleOwner lifecycleOwner) {
        this.f41286i.h(false);
    }

    @w(Lifecycle.a.ON_RESUME)
    public void onResume(@NonNull LifecycleOwner lifecycleOwner) {
        this.f41286i.h(true);
    }

    @w(Lifecycle.a.ON_START)
    public void onStart(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f41284d) {
            try {
                if (!this.f41288p && !this.f41289q) {
                    this.f41286i.k();
                    this.f41287o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @w(Lifecycle.a.ON_STOP)
    public void onStop(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f41284d) {
            try {
                if (!this.f41288p && !this.f41289q) {
                    this.f41286i.A();
                    this.f41287o = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public LifecycleOwner t() {
        LifecycleOwner lifecycleOwner;
        synchronized (this.f41284d) {
            lifecycleOwner = this.f41285e;
        }
        return lifecycleOwner;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x.o u() {
        return this.f41286i.G();
    }

    public List v() {
        List unmodifiableList;
        synchronized (this.f41284d) {
            unmodifiableList = Collections.unmodifiableList(this.f41286i.J());
        }
        return unmodifiableList;
    }

    public boolean w(x1 x1Var) {
        boolean contains;
        synchronized (this.f41284d) {
            contains = this.f41286i.J().contains(x1Var);
        }
        return contains;
    }

    public void x() {
        synchronized (this.f41284d) {
            try {
                if (this.f41288p) {
                    return;
                }
                onStop(this.f41285e);
                this.f41288p = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        synchronized (this.f41284d) {
            e0.f fVar = this.f41286i;
            fVar.X(fVar.J());
        }
    }

    public void z() {
        synchronized (this.f41284d) {
            try {
                if (!this.f41288p) {
                    return;
                }
                this.f41288p = false;
                if (this.f41285e.getLifecycle().b().d(Lifecycle.State.f4849o)) {
                    onStart(this.f41285e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
