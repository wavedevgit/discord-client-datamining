package ti;

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
import ti.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n implements d, wi.a {

    /* renamed from: i  reason: collision with root package name */
    private static final ej.b f50723i = new ej.b() { // from class: ti.j
        @Override // ej.b
        public final Object get() {
            return Collections.EMPTY_SET;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final Map f50724a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f50725b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f50726c;

    /* renamed from: d  reason: collision with root package name */
    private final List f50727d;

    /* renamed from: e  reason: collision with root package name */
    private Set f50728e;

    /* renamed from: f  reason: collision with root package name */
    private final u f50729f;

    /* renamed from: g  reason: collision with root package name */
    private final AtomicReference f50730g;

    /* renamed from: h  reason: collision with root package name */
    private final i f50731h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f50732a;

        /* renamed from: b  reason: collision with root package name */
        private final List f50733b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f50734c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private i f50735d = i.f50716a;

        b(Executor executor) {
            this.f50732a = executor;
        }

        public static /* synthetic */ ComponentRegistrar a(ComponentRegistrar componentRegistrar) {
            return componentRegistrar;
        }

        public b b(c cVar) {
            this.f50734c.add(cVar);
            return this;
        }

        public b c(final ComponentRegistrar componentRegistrar) {
            this.f50733b.add(new ej.b() { // from class: ti.o
                @Override // ej.b
                public final Object get() {
                    return n.b.a(ComponentRegistrar.this);
                }
            });
            return this;
        }

        public b d(Collection collection) {
            this.f50733b.addAll(collection);
            return this;
        }

        public n e() {
            return new n(this.f50732a, this.f50733b, this.f50734c, this.f50735d);
        }

        public b f(i iVar) {
            this.f50735d = iVar;
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
            Iterator it = this.f50727d.iterator();
            while (it.hasNext()) {
                try {
                    ComponentRegistrar componentRegistrar = (ComponentRegistrar) ((ej.b) it.next()).get();
                    if (componentRegistrar != null) {
                        list.addAll(this.f50731h.a(componentRegistrar));
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
                            if (this.f50728e.contains(obj.toString())) {
                                it2.remove();
                                break;
                            }
                            this.f50728e.add(obj.toString());
                        }
                        i10++;
                    }
                }
            }
            if (this.f50724a.isEmpty()) {
                p.a(list);
            } else {
                ArrayList arrayList2 = new ArrayList(this.f50724a.keySet());
                arrayList2.addAll(list);
                p.a(arrayList2);
            }
            Iterator it3 = list.iterator();
            while (it3.hasNext()) {
                final c cVar = (c) it3.next();
                this.f50724a.put(cVar, new w(new ej.b() { // from class: ti.k
                    @Override // ej.b
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
            ej.b bVar = (ej.b) entry.getValue();
            if (cVar.n() || (cVar.o() && z10)) {
                bVar.get();
            }
        }
        this.f50729f.c();
    }

    private static List o(Iterable iterable) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : iterable) {
            arrayList.add(obj);
        }
        return arrayList;
    }

    private void p() {
        Boolean bool = (Boolean) this.f50730g.get();
        if (bool != null) {
            m(this.f50724a, bool.booleanValue());
        }
    }

    private void q() {
        for (c cVar : this.f50724a.keySet()) {
            for (q qVar : cVar.g()) {
                if (qVar.f() && !this.f50726c.containsKey(qVar.b())) {
                    this.f50726c.put(qVar.b(), x.b(Collections.EMPTY_SET));
                } else if (this.f50725b.containsKey(qVar.b())) {
                    continue;
                } else if (!qVar.e()) {
                    if (!qVar.f()) {
                        this.f50725b.put(qVar.b(), b0.c());
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
                final ej.b bVar = (ej.b) this.f50724a.get(cVar);
                for (d0 d0Var : cVar.j()) {
                    if (!this.f50725b.containsKey(d0Var)) {
                        this.f50725b.put(d0Var, bVar);
                    } else {
                        final b0 b0Var = (b0) ((ej.b) this.f50725b.get(d0Var));
                        arrayList.add(new Runnable() { // from class: ti.l
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
        for (Map.Entry entry : this.f50724a.entrySet()) {
            c cVar = (c) entry.getKey();
            if (!cVar.p()) {
                ej.b bVar = (ej.b) entry.getValue();
                for (d0 d0Var : cVar.j()) {
                    if (!hashMap.containsKey(d0Var)) {
                        hashMap.put(d0Var, new HashSet());
                    }
                    ((Set) hashMap.get(d0Var)).add(bVar);
                }
            }
        }
        for (Map.Entry entry2 : hashMap.entrySet()) {
            if (!this.f50726c.containsKey(entry2.getKey())) {
                this.f50726c.put((d0) entry2.getKey(), x.b((Collection) entry2.getValue()));
            } else {
                final x xVar = (x) this.f50726c.get(entry2.getKey());
                for (final ej.b bVar2 : (Set) entry2.getValue()) {
                    arrayList.add(new Runnable() { // from class: ti.m
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

    @Override // ti.d
    public synchronized ej.b c(d0 d0Var) {
        c0.c(d0Var, "Null interface requested.");
        return (ej.b) this.f50725b.get(d0Var);
    }

    @Override // ti.d
    public synchronized ej.b f(d0 d0Var) {
        x xVar = (x) this.f50726c.get(d0Var);
        if (xVar != null) {
            return xVar;
        }
        return f50723i;
    }

    public void n(boolean z10) {
        HashMap hashMap;
        if (!p0.d.a(this.f50730g, null, Boolean.valueOf(z10))) {
            return;
        }
        synchronized (this) {
            hashMap = new HashMap(this.f50724a);
        }
        m(hashMap, z10);
    }

    private n(Executor executor, Iterable iterable, Collection collection, i iVar) {
        this.f50724a = new HashMap();
        this.f50725b = new HashMap();
        this.f50726c = new HashMap();
        this.f50728e = new HashSet();
        this.f50730g = new AtomicReference();
        u uVar = new u(executor);
        this.f50729f = uVar;
        this.f50731h = iVar;
        ArrayList arrayList = new ArrayList();
        arrayList.add(c.q(uVar, u.class, bj.d.class, bj.c.class));
        arrayList.add(c.q(this, wi.a.class, new Class[0]));
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar != null) {
                arrayList.add(cVar);
            }
        }
        this.f50727d = o(iterable);
        l(arrayList);
    }
}
