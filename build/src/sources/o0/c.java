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
    private final Object f38394a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Map f38395b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Map f38396c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f38397d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    y.a f38398e;

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
        private final c f38399d;

        /* renamed from: e  reason: collision with root package name */
        private final LifecycleOwner f38400e;

        b(LifecycleOwner lifecycleOwner, c cVar) {
            this.f38400e = lifecycleOwner;
            this.f38399d = cVar;
        }

        LifecycleOwner a() {
            return this.f38400e;
        }

        @w(Lifecycle.a.ON_DESTROY)
        public void onDestroy(LifecycleOwner lifecycleOwner) {
            this.f38399d.l(lifecycleOwner);
        }

        @w(Lifecycle.a.ON_START)
        public void onStart(LifecycleOwner lifecycleOwner) {
            this.f38399d.h(lifecycleOwner);
        }

        @w(Lifecycle.a.ON_STOP)
        public void onStop(LifecycleOwner lifecycleOwner) {
            this.f38399d.i(lifecycleOwner);
        }
    }

    private b d(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38394a) {
            try {
                for (b bVar : this.f38396c.keySet()) {
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
        synchronized (this.f38394a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return false;
                }
                for (a aVar : (Set) this.f38396c.get(d10)) {
                    if (!((o0.b) b2.e.g((o0.b) this.f38395b.get(aVar))).v().isEmpty()) {
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
        synchronized (this.f38394a) {
            try {
                LifecycleOwner t10 = bVar.t();
                a a10 = a.a(t10, e0.f.B((g2) bVar.b(), (g2) bVar.u()));
                b d10 = d(t10);
                if (d10 != null) {
                    hashSet = (Set) this.f38396c.get(d10);
                } else {
                    hashSet = new HashSet();
                }
                hashSet.add(a10);
                this.f38395b.put(a10, bVar);
                if (d10 == null) {
                    b bVar2 = new b(t10, this);
                    this.f38396c.put(bVar2, hashSet);
                    t10.getLifecycle().a(bVar2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void j(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38394a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return;
                }
                for (a aVar : (Set) this.f38396c.get(d10)) {
                    ((o0.b) b2.e.g((o0.b) this.f38395b.get(aVar))).x();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void m(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38394a) {
            try {
                for (a aVar : (Set) this.f38396c.get(d(lifecycleOwner))) {
                    o0.b bVar = (o0.b) this.f38395b.get(aVar);
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
        synchronized (this.f38394a) {
            try {
                b2.e.a(!collection.isEmpty());
                this.f38398e = aVar;
                LifecycleOwner t10 = bVar.t();
                b d10 = d(t10);
                if (d10 == null) {
                    return;
                }
                Set<a> set = (Set) this.f38396c.get(d10);
                y.a aVar2 = this.f38398e;
                if (aVar2 == null || aVar2.c() != 2) {
                    for (a aVar3 : set) {
                        o0.b bVar2 = (o0.b) b2.e.g((o0.b) this.f38395b.get(aVar3));
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
        synchronized (this.f38394a) {
            try {
                if (this.f38395b.get(a.a(lifecycleOwner, fVar.D())) == null) {
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
        synchronized (this.f38394a) {
            bVar2 = (o0.b) this.f38395b.get(a.a(lifecycleOwner, bVar));
        }
        return bVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Collection e() {
        Collection unmodifiableCollection;
        synchronized (this.f38394a) {
            unmodifiableCollection = Collections.unmodifiableCollection(this.f38395b.values());
        }
        return unmodifiableCollection;
    }

    void h(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38394a) {
            try {
                if (!f(lifecycleOwner)) {
                    return;
                }
                if (this.f38397d.isEmpty()) {
                    this.f38397d.push(lifecycleOwner);
                } else {
                    y.a aVar = this.f38398e;
                    if (aVar == null || aVar.c() != 2) {
                        LifecycleOwner lifecycleOwner2 = (LifecycleOwner) this.f38397d.peek();
                        if (!lifecycleOwner.equals(lifecycleOwner2)) {
                            j(lifecycleOwner2);
                            this.f38397d.remove(lifecycleOwner);
                            this.f38397d.push(lifecycleOwner);
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
        synchronized (this.f38394a) {
            try {
                this.f38397d.remove(lifecycleOwner);
                j(lifecycleOwner);
                if (!this.f38397d.isEmpty()) {
                    m((LifecycleOwner) this.f38397d.peek());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        synchronized (this.f38394a) {
            try {
                for (a aVar : this.f38395b.keySet()) {
                    o0.b bVar = (o0.b) this.f38395b.get(aVar);
                    bVar.y();
                    i(bVar.t());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void l(LifecycleOwner lifecycleOwner) {
        synchronized (this.f38394a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return;
                }
                i(lifecycleOwner);
                for (a aVar : (Set) this.f38396c.get(d10)) {
                    this.f38395b.remove(aVar);
                }
                this.f38396c.remove(d10);
                d10.a().getLifecycle().d(d10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
