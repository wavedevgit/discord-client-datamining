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
    private final Object f42067a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Map f42068b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Map f42069c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f42070d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    y.a f42071e;

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
        private final c f42072d;

        /* renamed from: e  reason: collision with root package name */
        private final LifecycleOwner f42073e;

        b(LifecycleOwner lifecycleOwner, c cVar) {
            this.f42073e = lifecycleOwner;
            this.f42072d = cVar;
        }

        LifecycleOwner a() {
            return this.f42073e;
        }

        @w(Lifecycle.a.ON_DESTROY)
        public void onDestroy(LifecycleOwner lifecycleOwner) {
            this.f42072d.l(lifecycleOwner);
        }

        @w(Lifecycle.a.ON_START)
        public void onStart(LifecycleOwner lifecycleOwner) {
            this.f42072d.h(lifecycleOwner);
        }

        @w(Lifecycle.a.ON_STOP)
        public void onStop(LifecycleOwner lifecycleOwner) {
            this.f42072d.i(lifecycleOwner);
        }
    }

    private b d(LifecycleOwner lifecycleOwner) {
        synchronized (this.f42067a) {
            try {
                for (b bVar : this.f42069c.keySet()) {
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
        synchronized (this.f42067a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return false;
                }
                for (a aVar : (Set) this.f42069c.get(d10)) {
                    if (!((o0.b) b2.e.g((o0.b) this.f42068b.get(aVar))).u().isEmpty()) {
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
        synchronized (this.f42067a) {
            try {
                LifecycleOwner s10 = bVar.s();
                a a10 = a.a(s10, e0.f.B((g2) bVar.b(), (g2) bVar.t()));
                b d10 = d(s10);
                if (d10 != null) {
                    hashSet = (Set) this.f42069c.get(d10);
                } else {
                    hashSet = new HashSet();
                }
                hashSet.add(a10);
                this.f42068b.put(a10, bVar);
                if (d10 == null) {
                    b bVar2 = new b(s10, this);
                    this.f42069c.put(bVar2, hashSet);
                    s10.getLifecycle().a(bVar2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void j(LifecycleOwner lifecycleOwner) {
        synchronized (this.f42067a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return;
                }
                for (a aVar : (Set) this.f42069c.get(d10)) {
                    ((o0.b) b2.e.g((o0.b) this.f42068b.get(aVar))).w();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void m(LifecycleOwner lifecycleOwner) {
        synchronized (this.f42067a) {
            try {
                for (a aVar : (Set) this.f42069c.get(d(lifecycleOwner))) {
                    o0.b bVar = (o0.b) this.f42068b.get(aVar);
                    if (!((o0.b) b2.e.g(bVar)).u().isEmpty()) {
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
        synchronized (this.f42067a) {
            try {
                b2.e.a(!collection.isEmpty());
                this.f42071e = aVar;
                LifecycleOwner s10 = bVar.s();
                b d10 = d(s10);
                if (d10 == null) {
                    return;
                }
                Set<a> set = (Set) this.f42069c.get(d10);
                y.a aVar2 = this.f42071e;
                if (aVar2 == null || aVar2.c() != 2) {
                    for (a aVar3 : set) {
                        o0.b bVar2 = (o0.b) b2.e.g((o0.b) this.f42068b.get(aVar3));
                        if (!bVar2.equals(bVar) && !bVar2.u().isEmpty()) {
                            throw new IllegalArgumentException("Multiple LifecycleCameras with use cases are registered to the same LifecycleOwner.");
                        }
                    }
                }
                try {
                    bVar.r().b0(z1Var);
                    bVar.r().Z(list);
                    bVar.d(collection);
                    if (s10.getLifecycle().b().d(Lifecycle.State.f4520o)) {
                        h(s10);
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
        synchronized (this.f42067a) {
            try {
                if (this.f42068b.get(a.a(lifecycleOwner, fVar.D())) == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                b2.e.b(z10, "LifecycleCamera already exists for the given LifecycleOwner and set of cameras");
                o0.b bVar = new o0.b(lifecycleOwner, fVar);
                if (fVar.J().isEmpty()) {
                    bVar.w();
                }
                if (lifecycleOwner.getLifecycle().b() == Lifecycle.State.f4517d) {
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
        synchronized (this.f42067a) {
            bVar2 = (o0.b) this.f42068b.get(a.a(lifecycleOwner, bVar));
        }
        return bVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Collection e() {
        Collection unmodifiableCollection;
        synchronized (this.f42067a) {
            unmodifiableCollection = Collections.unmodifiableCollection(this.f42068b.values());
        }
        return unmodifiableCollection;
    }

    void h(LifecycleOwner lifecycleOwner) {
        synchronized (this.f42067a) {
            try {
                if (!f(lifecycleOwner)) {
                    return;
                }
                if (this.f42070d.isEmpty()) {
                    this.f42070d.push(lifecycleOwner);
                } else {
                    y.a aVar = this.f42071e;
                    if (aVar == null || aVar.c() != 2) {
                        LifecycleOwner lifecycleOwner2 = (LifecycleOwner) this.f42070d.peek();
                        if (!lifecycleOwner.equals(lifecycleOwner2)) {
                            j(lifecycleOwner2);
                            this.f42070d.remove(lifecycleOwner);
                            this.f42070d.push(lifecycleOwner);
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
        synchronized (this.f42067a) {
            try {
                this.f42070d.remove(lifecycleOwner);
                j(lifecycleOwner);
                if (!this.f42070d.isEmpty()) {
                    m((LifecycleOwner) this.f42070d.peek());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        synchronized (this.f42067a) {
            try {
                for (a aVar : this.f42068b.keySet()) {
                    o0.b bVar = (o0.b) this.f42068b.get(aVar);
                    bVar.x();
                    i(bVar.s());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void l(LifecycleOwner lifecycleOwner) {
        synchronized (this.f42067a) {
            try {
                b d10 = d(lifecycleOwner);
                if (d10 == null) {
                    return;
                }
                i(lifecycleOwner);
                for (a aVar : (Set) this.f42069c.get(d10)) {
                    this.f42068b.remove(aVar);
                }
                this.f42069c.remove(d10);
                d10.a().getLifecycle().d(d10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
