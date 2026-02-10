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
    private final LifecycleOwner f40063e;

    /* renamed from: i  reason: collision with root package name */
    private final e0.f f40064i;

    /* renamed from: d  reason: collision with root package name */
    private final Object f40062d = new Object();

    /* renamed from: o  reason: collision with root package name */
    private volatile boolean f40065o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f40066p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f40067q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        this.f40063e = lifecycleOwner;
        this.f40064i = fVar;
        if (lifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4546o)) {
            fVar.k();
        } else {
            fVar.A();
        }
        lifecycleOwner.getLifecycle().a(this);
    }

    @Override // x.i
    public j a() {
        return this.f40064i.a();
    }

    @Override // x.i
    public x.o b() {
        return this.f40064i.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Collection collection) {
        synchronized (this.f40062d) {
            this.f40064i.h(collection);
        }
    }

    public e0.f e() {
        return this.f40064i;
    }

    @w(Lifecycle.a.ON_DESTROY)
    public void onDestroy(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f40062d) {
            e0.f fVar = this.f40064i;
            fVar.X(fVar.J());
        }
    }

    @w(Lifecycle.a.ON_PAUSE)
    public void onPause(@NonNull LifecycleOwner lifecycleOwner) {
        this.f40064i.i(false);
    }

    @w(Lifecycle.a.ON_RESUME)
    public void onResume(@NonNull LifecycleOwner lifecycleOwner) {
        this.f40064i.i(true);
    }

    @w(Lifecycle.a.ON_START)
    public void onStart(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f40062d) {
            try {
                if (!this.f40066p && !this.f40067q) {
                    this.f40064i.k();
                    this.f40065o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @w(Lifecycle.a.ON_STOP)
    public void onStop(@NonNull LifecycleOwner lifecycleOwner) {
        synchronized (this.f40062d) {
            try {
                if (!this.f40066p && !this.f40067q) {
                    this.f40064i.A();
                    this.f40065o = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public LifecycleOwner t() {
        LifecycleOwner lifecycleOwner;
        synchronized (this.f40062d) {
            lifecycleOwner = this.f40063e;
        }
        return lifecycleOwner;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x.o u() {
        return this.f40064i.G();
    }

    public List v() {
        List unmodifiableList;
        synchronized (this.f40062d) {
            unmodifiableList = Collections.unmodifiableList(this.f40064i.J());
        }
        return unmodifiableList;
    }

    public boolean w(x1 x1Var) {
        boolean contains;
        synchronized (this.f40062d) {
            contains = this.f40064i.J().contains(x1Var);
        }
        return contains;
    }

    public void x() {
        synchronized (this.f40062d) {
            try {
                if (this.f40066p) {
                    return;
                }
                onStop(this.f40063e);
                this.f40066p = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        synchronized (this.f40062d) {
            e0.f fVar = this.f40064i;
            fVar.X(fVar.J());
        }
    }

    public void z() {
        synchronized (this.f40062d) {
            try {
                if (!this.f40066p) {
                    return;
                }
                this.f40066p = false;
                if (this.f40063e.getLifecycle().b().d(Lifecycle.State.f4546o)) {
                    onStart(this.f40063e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
