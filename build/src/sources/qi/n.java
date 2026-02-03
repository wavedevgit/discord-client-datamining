package qi;

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
import qi.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n implements d, ti.a {

    /* renamed from: i  reason: collision with root package name */
    private static final bj.b f47709i = new bj.b() { // from class: qi.j
        @Override // bj.b
        public final Object get() {
            return Collections.EMPTY_SET;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final Map f47710a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f47711b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f47712c;

    /* renamed from: d  reason: collision with root package name */
    private final List f47713d;

    /* renamed from: e  reason: collision with root package name */
    private Set f47714e;

    /* renamed from: f  reason: collision with root package name */
    private final u f47715f;

    /* renamed from: g  reason: collision with root package name */
    private final AtomicReference f47716g;

    /* renamed from: h  reason: collision with root package name */
    private final i f47717h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f47718a;

        /* renamed from: b  reason: collision with root package name */
        private final List f47719b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f47720c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private i f47721d = i.f47702a;

        b(Executor executor) {
            this.f47718a = executor;
        }

        public static /* synthetic */ ComponentRegistrar a(ComponentRegistrar componentRegistrar) {
            return componentRegistrar;
        }

        public b b(c cVar) {
            this.f47720c.add(cVar);
            return this;
        }

        public b c(final ComponentRegistrar componentRegistrar) {
            this.f47719b.add(new bj.b() { // from class: qi.o
                @Override // bj.b
                public final Object get() {
                    return n.b.a(ComponentRegistrar.this);
                }
            });
            return this;
        }

        public b d(Collection collection) {
            this.f47719b.addAll(collection);
            return this;
        }

        public n e() {
            return new n(this.f47718a, this.f47719b, this.f47720c, this.f47721d);
        }

        public b f(i iVar) {
            this.f47721d = iVar;
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
            Iterator it = this.f47713d.iterator();
            while (it.hasNext()) {
                try {
                    ComponentRegistrar componentRegistrar = (ComponentRegistrar) ((bj.b) it.next()).get();
                    if (componentRegistrar != null) {
                        list.addAll(this.f47717h.a(componentRegistrar));
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
                            if (this.f47714e.contains(obj.toString())) {
                                it2.remove();
                                break;
                            }
                            this.f47714e.add(obj.toString());
                        }
                        i10++;
                    }
                }
            }
            if (this.f47710a.isEmpty()) {
                p.a(list);
            } else {
                ArrayList arrayList2 = new ArrayList(this.f47710a.keySet());
                arrayList2.addAll(list);
                p.a(arrayList2);
            }
            Iterator it3 = list.iterator();
            while (it3.hasNext()) {
                final c cVar = (c) it3.next();
                this.f47710a.put(cVar, new w(new bj.b() { // from class: qi.k
                    @Override // bj.b
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
            bj.b bVar = (bj.b) entry.getValue();
            if (cVar.n() || (cVar.o() && z10)) {
                bVar.get();
            }
        }
        this.f47715f.c();
    }

    private static List o(Iterable iterable) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : iterable) {
            arrayList.add(obj);
        }
        return arrayList;
    }

    private void p() {
        Boolean bool = (Boolean) this.f47716g.get();
        if (bool != null) {
            m(this.f47710a, bool.booleanValue());
        }
    }

    private void q() {
        for (c cVar : this.f47710a.keySet()) {
            for (q qVar : cVar.g()) {
                if (qVar.f() && !this.f47712c.containsKey(qVar.b())) {
                    this.f47712c.put(qVar.b(), x.b(Collections.EMPTY_SET));
                } else if (this.f47711b.containsKey(qVar.b())) {
                    continue;
                } else if (!qVar.e()) {
                    if (!qVar.f()) {
                        this.f47711b.put(qVar.b(), b0.c());
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
                final bj.b bVar = (bj.b) this.f47710a.get(cVar);
                for (d0 d0Var : cVar.j()) {
                    if (!this.f47711b.containsKey(d0Var)) {
                        this.f47711b.put(d0Var, bVar);
                    } else {
                        final b0 b0Var = (b0) ((bj.b) this.f47711b.get(d0Var));
                        arrayList.add(new Runnable() { // from class: qi.l
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
        for (Map.Entry entry : this.f47710a.entrySet()) {
            c cVar = (c) entry.getKey();
            if (!cVar.p()) {
                bj.b bVar = (bj.b) entry.getValue();
                for (d0 d0Var : cVar.j()) {
                    if (!hashMap.containsKey(d0Var)) {
                        hashMap.put(d0Var, new HashSet());
                    }
                    ((Set) hashMap.get(d0Var)).add(bVar);
                }
            }
        }
        for (Map.Entry entry2 : hashMap.entrySet()) {
            if (!this.f47712c.containsKey(entry2.getKey())) {
                this.f47712c.put((d0) entry2.getKey(), x.b((Collection) entry2.getValue()));
            } else {
                final x xVar = (x) this.f47712c.get(entry2.getKey());
                for (final bj.b bVar2 : (Set) entry2.getValue()) {
                    arrayList.add(new Runnable() { // from class: qi.m
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

    @Override // qi.d
    public synchronized bj.b e(d0 d0Var) {
        x xVar = (x) this.f47712c.get(d0Var);
        if (xVar != null) {
            return xVar;
        }
        return f47709i;
    }

    @Override // qi.d
    public synchronized bj.b g(d0 d0Var) {
        c0.c(d0Var, "Null interface requested.");
        return (bj.b) this.f47711b.get(d0Var);
    }

    public void n(boolean z10) {
        HashMap hashMap;
        if (!p0.d.a(this.f47716g, null, Boolean.valueOf(z10))) {
            return;
        }
        synchronized (this) {
            hashMap = new HashMap(this.f47710a);
        }
        m(hashMap, z10);
    }

    private n(Executor executor, Iterable iterable, Collection collection, i iVar) {
        this.f47710a = new HashMap();
        this.f47711b = new HashMap();
        this.f47712c = new HashMap();
        this.f47714e = new HashSet();
        this.f47716g = new AtomicReference();
        u uVar = new u(executor);
        this.f47715f = uVar;
        this.f47717h = iVar;
        ArrayList arrayList = new ArrayList();
        arrayList.add(c.q(uVar, u.class, yi.d.class, yi.c.class));
        arrayList.add(c.q(this, ti.a.class, new Class[0]));
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar != null) {
                arrayList.add(cVar);
            }
        }
        this.f47713d = o(iterable);
        l(arrayList);
    }
}
