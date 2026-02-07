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
    private final LifecycleOwner f41333e;

    /* renamed from: i  reason: collision with root package name */
    private final e0.f f41334i;

    /* renamed from: d  reason: collision with root package name */
    private final Object f41332d = new Object();

    /* renamed from: o  reason: collision with root package name */
    private volatile boolean f41335o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f41336p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f41337q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        this.f41333e = lifecycleOwner;
        this.f41334i = fVar;
        if (lifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4849o)) {
            fVar.k();
        } else {
            fVar.A();
        }
        lifecycleOwner.getLifecycle().a(this);
    }

    @Override // x.i
    public j a() {
        return this.f41334i.a();
    }

    @Override // x.i
    public x.o b() {
        return this.f41334i.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Collection collection) {
        synchronized (this.f41332d) {
            this.f41334i.j(collection);
        }
    }

    public e0.f e() {
        return this.f41334i;
    }

    @w(Lifecycle.a.ON_DESTROY)
    public void onDestroy(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f41332d) {
            e0.f fVar = this.f41334i;
            fVar.X(fVar.J());
        }
    }

    @w(Lifecycle.a.ON_PAUSE)
    public void onPause(@NonNull LifecycleOwner lifecycleOwner) {
        this.f41334i.h(false);
    }

    @w(Lifecycle.a.ON_RESUME)
    public void onResume(@NonNull LifecycleOwner lifecycleOwner) {
        this.f41334i.h(true);
    }

    @w(Lifecycle.a.ON_START)
    public void onStart(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f41332d) {
            try {
                if (!this.f41336p && !this.f41337q) {
                    this.f41334i.k();
                    this.f41335o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @w(Lifecycle.a.ON_STOP)
    public void onStop(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f41332d) {
            try {
                if (!this.f41336p && !this.f41337q) {
                    this.f41334i.A();
                    this.f41335o = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public LifecycleOwner t() {
        LifecycleOwner lifecycleOwner;
        synchronized (this.f41332d) {
            lifecycleOwner = this.f41333e;
        }
        return lifecycleOwner;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x.o u() {
        return this.f41334i.G();
    }

    public List v() {
        List unmodifiableList;
        synchronized (this.f41332d) {
            unmodifiableList = Collections.unmodifiableList(this.f41334i.J());
        }
        return unmodifiableList;
    }

    public boolean w(x1 x1Var) {
        boolean contains;
        synchronized (this.f41332d) {
            contains = this.f41334i.J().contains(x1Var);
        }
        return contains;
    }

    public void x() {
        synchronized (this.f41332d) {
            try {
                if (this.f41336p) {
                    return;
                }
                onStop(this.f41333e);
                this.f41336p = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        synchronized (this.f41332d) {
            e0.f fVar = this.f41334i;
            fVar.X(fVar.J());
        }
    }

    public void z() {
        synchronized (this.f41332d) {
            try {
                if (!this.f41336p) {
                    return;
                }
                this.f41336p = false;
                if (this.f41333e.getLifecycle().b().d(Lifecycle.State.f4849o)) {
                    onStart(this.f41333e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
