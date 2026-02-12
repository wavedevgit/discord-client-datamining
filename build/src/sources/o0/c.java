package o0;

import a0.g2;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.o;
import androidx.lifecycle.w;
import e0.f;
import java.util.ArrayDeque;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import x.z1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Object f38395a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Map f38396b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Map f38397c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f38398d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    y.a f38399e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        static a a(LifecycleOwner lifecycleOwner, f.b bVar) {
            return new o0.a(lifecycleOwner, bVar);
        }

        public abstract f.b b();

        public abstract LifecycleOwner c();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements o {

        /* renamed from: d  reason: collision with root package name */
        private final c f38400d;

        /* renamed from: e  reason: collision with root package name */
        private final LifecycleOwner f38401e;

        b(LifecycleOwner lifecycleOwner, c cVar) {
            this.f38401e = lifecycleOwner;
            this.f38400d = cVar;
        }

        LifecycleOwner a() {
            return this.f38401e;
        }

        @w(Lifecycle.a.ON_DESTROY)
        public void onDestroy(LifecycleOwner lifecycleOwner) {
            this.f38400d.l(lifecycleOwner);
        }

        @w(Lifecycle.a.ON_START)
        public void onStart(LifecycleOwner lifecycleOwner) {
            this.f38400d.h(lifecycleOwner);
        }

        @w(Lifecycle.a.ON_STOP)
        public void onStop(LifecycleOwner lifecycleOwner) {
            this.f38400d.i(lifecycleOwner);
        }
    }

    private b d(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38395a) {
            try {
                for (b bVar : this.f38397c.keySet()) {
                    if (lifecycleOwner.equals(bVar.a())) {
                        return bVar;
                    }
                }
                return null;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private boolean f(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38395a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return false;
                }
                for (a aVar : (Set) this.f38397c.get(d10)) {
                    if (!((o0.b) b2.e.g((o0.b) this.f38396b.get(aVar))).v().isEmpty()) {
                        return true;
                    }
                }
                return false;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void g(o0.b bVar) {
        Set hashSet;
        synchronized (this.f38395a) {
            try {
                LifecycleOwner t10 = bVar.t();
                a a10 = a.a(t10, e0.f.B((g2) bVar.b(), (g2) bVar.u()));
                b d10 = d(t10);
                if (d10 != null) {
                    hashSet = (Set) this.f38397c.get(d10);
                } else {
                    hashSet = new HashSet();
                }
                hashSet.add(a10);
                this.f38396b.put(a10, bVar);
                if (d10 == null) {
                    b bVar2 = new b(t10, this);
                    this.f38397c.put(bVar2, hashSet);
                    t10.getLifecycle().a(bVar2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void j(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38395a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return;
                }
                for (a aVar : (Set) this.f38397c.get(d10)) {
                    ((o0.b) b2.e.g((o0.b) this.f38396b.get(aVar))).x();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void m(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38395a) {
            try {
                for (a aVar : (Set) this.f38397c.get(d(lifecycleOwner))) {
                    o0.b bVar = (o0.b) this.f38396b.get(aVar);
                    if (!((o0.b) b2.e.g(bVar)).v().isEmpty()) {
                        bVar.z();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(o0.b bVar, z1 z1Var, List list, Collection collection, y.a aVar) {
        synchronized (this.f38395a) {
            try {
                b2.e.a(!collection.isEmpty());
                this.f38399e = aVar;
                LifecycleOwner t10 = bVar.t();
                b d10 = d(t10);
                if (d10 == null) {
                    return;
                }
                Set<a> set = (Set) this.f38397c.get(d10);
                y.a aVar2 = this.f38399e;
                if (aVar2 == null || aVar2.c() != 2) {
                    for (a aVar3 : set) {
                        o0.b bVar2 = (o0.b) b2.e.g((o0.b) this.f38396b.get(aVar3));
                        if (!bVar2.equals(bVar) && !bVar2.v().isEmpty()) {
                            throw new IllegalArgumentException("Multiple LifecycleCameras with use cases are registered to the same LifecycleOwner.");
                        }
                    }
                }
                try {
                    bVar.s().b0(z1Var);
                    bVar.s().Z(list);
                    bVar.d(collection);
                    if (t10.getLifecycle().b().d(Lifecycle.State.f4556o)) {
                        h(t10);
                    }
                } catch (f.a e10) {
                    throw new IllegalArgumentException(e10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0.b b(LifecycleOwner lifecycleOwner, e0.f fVar) {
        boolean z10;
        synchronized (this.f38395a) {
            try {
                if (this.f38396b.get(a.a(lifecycleOwner, fVar.D())) == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                b2.e.b(z10, "LifecycleCamera already exists for the given LifecycleOwner and set of cameras");
                o0.b bVar = new o0.b(lifecycleOwner, fVar);
                if (fVar.J().isEmpty()) {
                    bVar.x();
                }
                if (lifecycleOwner.getLifecycle().b() == Lifecycle.State.f4553d) {
                    return bVar;
                }
                g(bVar);
                return bVar;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0.b c(LifecycleOwner lifecycleOwner, f.b bVar) {
        o0.b bVar2;
        synchronized (this.f38395a) {
            bVar2 = (o0.b) this.f38396b.get(a.a(lifecycleOwner, bVar));
        }
        return bVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Collection e() {
        Collection unmodifiableCollection;
        synchronized (this.f38395a) {
            unmodifiableCollection = Collections.unmodifiableCollection(this.f38396b.values());
        }
        return unmodifiableCollection;
    }

    void h(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38395a) {
            try {
                if (!f(lifecycleOwner)) {
                    return;
                }
                if (this.f38398d.isEmpty()) {
                    this.f38398d.push(lifecycleOwner);
                } else {
                    y.a aVar = this.f38399e;
                    if (aVar == null || aVar.c() != 2) {
                        LifecycleOwner lifecycleOwner2 = (LifecycleOwner) this.f38398d.peek();
                        if (!lifecycleOwner.equals(lifecycleOwner2)) {
                            j(lifecycleOwner2);
                            this.f38398d.remove(lifecycleOwner);
                            this.f38398d.push(lifecycleOwner);
                        }
                    }
                }
                m(lifecycleOwner);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void i(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38395a) {
            try {
                this.f38398d.remove(lifecycleOwner);
                j(lifecycleOwner);
                if (!this.f38398d.isEmpty()) {
                    m((LifecycleOwner) this.f38398d.peek());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        synchronized (this.f38395a) {
            try {
                for (a aVar : this.f38396b.keySet()) {
                    o0.b bVar = (o0.b) this.f38396b.get(aVar);
                    bVar.y();
                    i(bVar.t());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void l(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38395a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return;
                }
                i(lifecycleOwner);
                for (a aVar : (Set) this.f38397c.get(d10)) {
                    this.f38396b.remove(aVar);
                }
                this.f38397c.remove(d10);
                d10.a().getLifecycle().d(d10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
