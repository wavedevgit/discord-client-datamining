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
    private final LifecycleOwner f38389e;

    /* renamed from: i  reason: collision with root package name */
    private final e0.f f38390i;

    /* renamed from: d  reason: collision with root package name */
    private final Object f38388d = new Object();

    /* renamed from: o  reason: collision with root package name */
    private volatile boolean f38391o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f38392p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f38393q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        this.f38389e = lifecycleOwner;
        this.f38390i = fVar;
        if (lifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4556o)) {
            fVar.m();
        } else {
            fVar.A();
        }
        lifecycleOwner.getLifecycle().a(this);
    }

    @Override // x.i
    public j a() {
        return this.f38390i.a();
    }

    @Override // x.i
    public x.o b() {
        return this.f38390i.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Collection collection) {
        synchronized (this.f38388d) {
            this.f38390i.i(collection);
        }
    }

    @w(Lifecycle.a.ON_DESTROY)
    public void onDestroy(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f38388d) {
            e0.f fVar = this.f38390i;
            fVar.X(fVar.J());
        }
    }

    @w(Lifecycle.a.ON_PAUSE)
    public void onPause(@NonNull LifecycleOwner lifecycleOwner) {
        this.f38390i.h(false);
    }

    @w(Lifecycle.a.ON_RESUME)
    public void onResume(@NonNull LifecycleOwner lifecycleOwner) {
        this.f38390i.h(true);
    }

    @w(Lifecycle.a.ON_START)
    public void onStart(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f38388d) {
            try {
                if (!this.f38392p && !this.f38393q) {
                    this.f38390i.m();
                    this.f38391o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @w(Lifecycle.a.ON_STOP)
    public void onStop(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f38388d) {
            try {
                if (!this.f38392p && !this.f38393q) {
                    this.f38390i.A();
                    this.f38391o = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public e0.f s() {
        return this.f38390i;
    }

    public LifecycleOwner t() {
        LifecycleOwner lifecycleOwner;
        synchronized (this.f38388d) {
            lifecycleOwner = this.f38389e;
        }
        return lifecycleOwner;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x.o u() {
        return this.f38390i.G();
    }

    public List v() {
        List unmodifiableList;
        synchronized (this.f38388d) {
            unmodifiableList = Collections.unmodifiableList(this.f38390i.J());
        }
        return unmodifiableList;
    }

    public boolean w(x1 x1Var) {
        boolean contains;
        synchronized (this.f38388d) {
            contains = this.f38390i.J().contains(x1Var);
        }
        return contains;
    }

    public void x() {
        synchronized (this.f38388d) {
            try {
                if (this.f38392p) {
                    return;
                }
                onStop(this.f38389e);
                this.f38392p = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        synchronized (this.f38388d) {
            e0.f fVar = this.f38390i;
            fVar.X(fVar.J());
        }
    }

    public void z() {
        synchronized (this.f38388d) {
            try {
                if (!this.f38392p) {
                    return;
                }
                this.f38392p = false;
                if (this.f38389e.getLifecycle().b().d(Lifecycle.State.f4556o)) {
                    onStart(this.f38389e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
