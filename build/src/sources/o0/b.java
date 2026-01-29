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
    private final LifecycleOwner f42212e;

    /* renamed from: i  reason: collision with root package name */
    private final e0.f f42213i;

    /* renamed from: d  reason: collision with root package name */
    private final Object f42211d = new Object();

    /* renamed from: o  reason: collision with root package name */
    private volatile boolean f42214o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f42215p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f42216q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        this.f42212e = lifecycleOwner;
        this.f42213i = fVar;
        if (lifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4395o)) {
            fVar.h();
        } else {
            fVar.A();
        }
        lifecycleOwner.getLifecycle().a(this);
    }

    @Override // x.i
    public j a() {
        return this.f42213i.a();
    }

    @Override // x.i
    public x.o b() {
        return this.f42213i.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Collection collection) {
        synchronized (this.f42211d) {
            this.f42213i.g(collection);
        }
    }

    public e0.f e() {
        return this.f42213i;
    }

    @w(Lifecycle.a.ON_DESTROY)
    public void onDestroy(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f42211d) {
            e0.f fVar = this.f42213i;
            fVar.X(fVar.J());
        }
    }

    @w(Lifecycle.a.ON_PAUSE)
    public void onPause(@NonNull LifecycleOwner lifecycleOwner) {
        this.f42213i.j(false);
    }

    @w(Lifecycle.a.ON_RESUME)
    public void onResume(@NonNull LifecycleOwner lifecycleOwner) {
        this.f42213i.j(true);
    }

    @w(Lifecycle.a.ON_START)
    public void onStart(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f42211d) {
            try {
                if (!this.f42215p && !this.f42216q) {
                    this.f42213i.h();
                    this.f42214o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @w(Lifecycle.a.ON_STOP)
    public void onStop(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f42211d) {
            try {
                if (!this.f42215p && !this.f42216q) {
                    this.f42213i.A();
                    this.f42214o = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public LifecycleOwner s() {
        LifecycleOwner lifecycleOwner;
        synchronized (this.f42211d) {
            lifecycleOwner = this.f42212e;
        }
        return lifecycleOwner;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x.o t() {
        return this.f42213i.G();
    }

    public List u() {
        List unmodifiableList;
        synchronized (this.f42211d) {
            unmodifiableList = Collections.unmodifiableList(this.f42213i.J());
        }
        return unmodifiableList;
    }

    public boolean v(x1 x1Var) {
        boolean contains;
        synchronized (this.f42211d) {
            contains = this.f42213i.J().contains(x1Var);
        }
        return contains;
    }

    public void w() {
        synchronized (this.f42211d) {
            try {
                if (this.f42215p) {
                    return;
                }
                onStop(this.f42212e);
                this.f42215p = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x() {
        synchronized (this.f42211d) {
            e0.f fVar = this.f42213i;
            fVar.X(fVar.J());
        }
    }

    public void y() {
        synchronized (this.f42211d) {
            try {
                if (!this.f42215p) {
                    return;
                }
                this.f42215p = false;
                if (this.f42212e.getLifecycle().b().d(Lifecycle.State.f4395o)) {
                    onStart(this.f42212e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
