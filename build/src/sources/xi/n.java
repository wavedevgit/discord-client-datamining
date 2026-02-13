package xi;

import android.util.Log;
import com.google.firebase.components.ComponentRegistrar;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
import xi.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n implements d, aj.a {

    /* renamed from: i  reason: collision with root package name */
    private static final ij.b f55404i = new ij.b() { // from class: xi.j
        @Override // ij.b
        public final Object get() {
            return Collections.EMPTY_SET;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final Map f55405a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f55406b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f55407c;

    /* renamed from: d  reason: collision with root package name */
    private final List f55408d;

    /* renamed from: e  reason: collision with root package name */
    private Set f55409e;

    /* renamed from: f  reason: collision with root package name */
    private final u f55410f;

    /* renamed from: g  reason: collision with root package name */
    private final AtomicReference f55411g;

    /* renamed from: h  reason: collision with root package name */
    private final i f55412h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f55413a;

        /* renamed from: b  reason: collision with root package name */
        private final List f55414b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f55415c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private i f55416d = i.f55397a;

        b(Executor executor) {
            this.f55413a = executor;
        }

        public static /* synthetic */ ComponentRegistrar a(ComponentRegistrar componentRegistrar) {
            return componentRegistrar;
        }

        public b b(c cVar) {
            this.f55415c.add(cVar);
            return this;
        }

        public b c(final ComponentRegistrar componentRegistrar) {
            this.f55414b.add(new ij.b() { // from class: xi.o
                @Override // ij.b
                public final Object get() {
                    return n.b.a(ComponentRegistrar.this);
                }
            });
            return this;
        }

        public b d(Collection collection) {
            this.f55414b.addAll(collection);
            return this;
        }

        public n e() {
            return new n(this.f55413a, this.f55414b, this.f55415c, this.f55416d);
        }

        public b f(i iVar) {
            this.f55416d = iVar;
            return this;
        }
    }

    public static /* synthetic */ Object h(n nVar, c cVar) {
        nVar.getClass();
        return cVar.h().a(new e0(cVar, nVar));
    }

    public static b k(Executor executor) {
        return new b(executor);
    }

    private void l(List list) {
        ArrayList<Runnable> arrayList = new ArrayList();
        synchronized (this) {
            Iterator it = this.f55408d.iterator();
            while (it.hasNext()) {
                try {
                    ComponentRegistrar componentRegistrar = (ComponentRegistrar) ((ij.b) it.next()).get();
                    if (componentRegistrar != null) {
                        list.addAll(this.f55412h.a(componentRegistrar));
                        it.remove();
                    }
                } catch (v e10) {
                    it.remove();
                    Log.w("ComponentDiscovery", "Invalid component registrar.", e10);
                }
            }
            Iterator it2 = list.iterator();
            while (it2.hasNext()) {
                Object[] array = ((c) it2.next()).j().toArray();
                int length = array.length;
                int i10 = 0;
                while (true) {
                    if (i10 < length) {
                        Object obj = array[i10];
                        if (obj.toString().contains("kotlinx.coroutines.CoroutineDispatcher")) {
                            if (this.f55409e.contains(obj.toString())) {
                                it2.remove();
                                break;
                            }
                            this.f55409e.add(obj.toString());
                        }
                        i10++;
                    }
                }
            }
            if (this.f55405a.isEmpty()) {
                p.a(list);
            } else {
                ArrayList arrayList2 = new ArrayList(this.f55405a.keySet());
                arrayList2.addAll(list);
                p.a(arrayList2);
            }
            Iterator it3 = list.iterator();
            while (it3.hasNext()) {
                final c cVar = (c) it3.next();
                this.f55405a.put(cVar, new w(new ij.b() { // from class: xi.k
                    @Override // ij.b
                    public final Object get() {
                        return n.h(n.this, cVar);
                    }
                }));
            }
            arrayList.addAll(r(list));
            arrayList.addAll(s());
            q();
        }
        for (Runnable runnable : arrayList) {
            runnable.run();
        }
        p();
    }

    private void m(Map map, boolean z10) {
        for (Map.Entry entry : map.entrySet()) {
            c cVar = (c) entry.getKey();
            ij.b bVar = (ij.b) entry.getValue();
            if (cVar.n() || (cVar.o() && z10)) {
                bVar.get();
            }
        }
        this.f55410f.c();
    }

    private static List o(Iterable iterable) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : iterable) {
            arrayList.add(obj);
        }
        return arrayList;
    }

    private void p() {
        Boolean bool = (Boolean) this.f55411g.get();
        if (bool != null) {
            m(this.f55405a, bool.booleanValue());
        }
    }

    private void q() {
        for (c cVar : this.f55405a.keySet()) {
            for (q qVar : cVar.g()) {
                if (qVar.f() && !this.f55407c.containsKey(qVar.b())) {
                    this.f55407c.put(qVar.b(), x.b(Collections.EMPTY_SET));
                } else if (this.f55406b.containsKey(qVar.b())) {
                    continue;
                } else if (!qVar.e()) {
                    if (!qVar.f()) {
                        this.f55406b.put(qVar.b(), b0.c());
                    }
                } else {
                    throw new y(String.format("Unsatisfied dependency for component %s: %s", cVar, qVar.b()));
                }
            }
        }
    }

    private List r(List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.p()) {
                final ij.b bVar = (ij.b) this.f55405a.get(cVar);
                for (d0 d0Var : cVar.j()) {
                    if (!this.f55406b.containsKey(d0Var)) {
                        this.f55406b.put(d0Var, bVar);
                    } else {
                        final b0 b0Var = (b0) ((ij.b) this.f55406b.get(d0Var));
                        arrayList.add(new Runnable() { // from class: xi.l
                            @Override // java.lang.Runnable
                            public final void run() {
                                b0.this.d(bVar);
                            }
                        });
                    }
                }
            }
        }
        return arrayList;
    }

    private List s() {
        ArrayList arrayList = new ArrayList();
        HashMap hashMap = new HashMap();
        for (Map.Entry entry : this.f55405a.entrySet()) {
            c cVar = (c) entry.getKey();
            if (!cVar.p()) {
                ij.b bVar = (ij.b) entry.getValue();
                for (d0 d0Var : cVar.j()) {
                    if (!hashMap.containsKey(d0Var)) {
                        hashMap.put(d0Var, new HashSet());
                    }
                    ((Set) hashMap.get(d0Var)).add(bVar);
                }
            }
        }
        for (Map.Entry entry2 : hashMap.entrySet()) {
            if (!this.f55407c.containsKey(entry2.getKey())) {
                this.f55407c.put((d0) entry2.getKey(), x.b((Collection) entry2.getValue()));
            } else {
                final x xVar = (x) this.f55407c.get(entry2.getKey());
                for (final ij.b bVar2 : (Set) entry2.getValue()) {
                    arrayList.add(new Runnable() { // from class: xi.m
                        @Override // java.lang.Runnable
                        public final void run() {
                            x.this.a(bVar2);
                        }
                    });
                }
            }
        }
        return arrayList;
    }

    @Override // xi.d
    public synchronized ij.b c(d0 d0Var) {
        c0.c(d0Var, "Null interface requested.");
        return (ij.b) this.f55406b.get(d0Var);
    }

    @Override // xi.d
    public synchronized ij.b d(d0 d0Var) {
        x xVar = (x) this.f55407c.get(d0Var);
        if (xVar != null) {
            return xVar;
        }
        return f55404i;
    }

    public void n(boolean z10) {
        HashMap hashMap;
        if (!p0.d.a(this.f55411g, null, Boolean.valueOf(z10))) {
            return;
        }
        synchronized (this) {
            hashMap = new HashMap(this.f55405a);
        }
        m(hashMap, z10);
    }

    private n(Executor executor, Iterable iterable, Collection collection, i iVar) {
        this.f55405a = new HashMap();
        this.f55406b = new HashMap();
        this.f55407c = new HashMap();
        this.f55409e = new HashSet();
        this.f55411g = new AtomicReference();
        u uVar = new u(executor);
        this.f55410f = uVar;
        this.f55412h = iVar;
        ArrayList arrayList = new ArrayList();
        arrayList.add(c.q(uVar, u.class, fj.d.class, fj.c.class));
        arrayList.add(c.q(this, aj.a.class, new Class[0]));
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar != null) {
                arrayList.add(cVar);
            }
        }
        this.f55408d = o(iterable);
        l(arrayList);
    }
}
