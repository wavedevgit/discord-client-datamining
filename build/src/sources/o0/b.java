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
    private final LifecycleOwner f38390e;

    /* renamed from: i  reason: collision with root package name */
    private final e0.f f38391i;

    /* renamed from: d  reason: collision with root package name */
    private final Object f38389d = new Object();

    /* renamed from: o  reason: collision with root package name */
    private volatile boolean f38392o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f38393p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f38394q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        this.f38390e = lifecycleOwner;
        this.f38391i = fVar;
        if (lifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4556o)) {
            fVar.m();
        } else {
            fVar.A();
        }
        lifecycleOwner.getLifecycle().a(this);
    }

    @Override // x.i
    public j a() {
        return this.f38391i.a();
    }

    @Override // x.i
    public x.o b() {
        return this.f38391i.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Collection collection) {
        synchronized (this.f38389d) {
            this.f38391i.i(collection);
        }
    }

    @w(Lifecycle.a.ON_DESTROY)
    public void onDestroy(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f38389d) {
            e0.f fVar = this.f38391i;
            fVar.X(fVar.J());
        }
    }

    @w(Lifecycle.a.ON_PAUSE)
    public void onPause(@NonNull LifecycleOwner lifecycleOwner) {
        this.f38391i.h(false);
    }

    @w(Lifecycle.a.ON_RESUME)
    public void onResume(@NonNull LifecycleOwner lifecycleOwner) {
        this.f38391i.h(true);
    }

    @w(Lifecycle.a.ON_START)
    public void onStart(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f38389d) {
            try {
                if (!this.f38393p && !this.f38394q) {
                    this.f38391i.m();
                    this.f38392o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @w(Lifecycle.a.ON_STOP)
    public void onStop(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f38389d) {
            try {
                if (!this.f38393p && !this.f38394q) {
                    this.f38391i.A();
                    this.f38392o = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public e0.f s() {
        return this.f38391i;
    }

    public LifecycleOwner t() {
        LifecycleOwner lifecycleOwner;
        synchronized (this.f38389d) {
            lifecycleOwner = this.f38390e;
        }
        return lifecycleOwner;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x.o u() {
        return this.f38391i.G();
    }

    public List v() {
        List unmodifiableList;
        synchronized (this.f38389d) {
            unmodifiableList = Collections.unmodifiableList(this.f38391i.J());
        }
        return unmodifiableList;
    }

    public boolean w(x1 x1Var) {
        boolean contains;
        synchronized (this.f38389d) {
            contains = this.f38391i.J().contains(x1Var);
        }
        return contains;
    }

    public void x() {
        synchronized (this.f38389d) {
            try {
                if (this.f38393p) {
                    return;
                }
                onStop(this.f38390e);
                this.f38393p = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        synchronized (this.f38389d) {
            e0.f fVar = this.f38391i;
            fVar.X(fVar.J());
        }
    }

    public void z() {
        synchronized (this.f38389d) {
            try {
                if (!this.f38393p) {
                    return;
                }
                this.f38393p = false;
                if (this.f38390e.getLifecycle().b().d(Lifecycle.State.f4556o)) {
                    onStart(this.f38390e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
