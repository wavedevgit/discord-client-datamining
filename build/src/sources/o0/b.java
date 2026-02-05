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
    private final LifecycleOwner f42062e;

    /* renamed from: i  reason: collision with root package name */
    private final e0.f f42063i;

    /* renamed from: d  reason: collision with root package name */
    private final Object f42061d = new Object();

    /* renamed from: o  reason: collision with root package name */
    private volatile boolean f42064o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f42065p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f42066q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        this.f42062e = lifecycleOwner;
        this.f42063i = fVar;
        if (lifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4520o)) {
            fVar.o();
        } else {
            fVar.A();
        }
        lifecycleOwner.getLifecycle().a(this);
    }

    @Override // x.i
    public j a() {
        return this.f42063i.a();
    }

    @Override // x.i
    public x.o b() {
        return this.f42063i.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Collection collection) {
        synchronized (this.f42061d) {
            this.f42063i.h(collection);
        }
    }

    @w(Lifecycle.a.ON_DESTROY)
    public void onDestroy(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f42061d) {
            e0.f fVar = this.f42063i;
            fVar.X(fVar.J());
        }
    }

    @w(Lifecycle.a.ON_PAUSE)
    public void onPause(@NonNull LifecycleOwner lifecycleOwner) {
        this.f42063i.i(false);
    }

    @w(Lifecycle.a.ON_RESUME)
    public void onResume(@NonNull LifecycleOwner lifecycleOwner) {
        this.f42063i.i(true);
    }

    @w(Lifecycle.a.ON_START)
    public void onStart(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f42061d) {
            try {
                if (!this.f42065p && !this.f42066q) {
                    this.f42063i.o();
                    this.f42064o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @w(Lifecycle.a.ON_STOP)
    public void onStop(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f42061d) {
            try {
                if (!this.f42065p && !this.f42066q) {
                    this.f42063i.A();
                    this.f42064o = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public e0.f r() {
        return this.f42063i;
    }

    public LifecycleOwner s() {
        LifecycleOwner lifecycleOwner;
        synchronized (this.f42061d) {
            lifecycleOwner = this.f42062e;
        }
        return lifecycleOwner;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x.o t() {
        return this.f42063i.G();
    }

    public List u() {
        List unmodifiableList;
        synchronized (this.f42061d) {
            unmodifiableList = Collections.unmodifiableList(this.f42063i.J());
        }
        return unmodifiableList;
    }

    public boolean v(x1 x1Var) {
        boolean contains;
        synchronized (this.f42061d) {
            contains = this.f42063i.J().contains(x1Var);
        }
        return contains;
    }

    public void w() {
        synchronized (this.f42061d) {
            try {
                if (this.f42065p) {
                    return;
                }
                onStop(this.f42062e);
                this.f42065p = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x() {
        synchronized (this.f42061d) {
            e0.f fVar = this.f42063i;
            fVar.X(fVar.J());
        }
    }

    public void z() {
        synchronized (this.f42061d) {
            try {
                if (!this.f42065p) {
                    return;
                }
                this.f42065p = false;
                if (this.f42062e.getLifecycle().b().d(Lifecycle.State.f4520o)) {
                    onStart(this.f42062e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
