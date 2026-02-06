package ui;

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
import ui.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n implements d, xi.a {

    /* renamed from: i  reason: collision with root package name */
    private static final fj.b f51531i = new fj.b() { // from class: ui.j
        @Override // fj.b
        public final Object get() {
            return Collections.EMPTY_SET;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final Map f51532a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f51533b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f51534c;

    /* renamed from: d  reason: collision with root package name */
    private final List f51535d;

    /* renamed from: e  reason: collision with root package name */
    private Set f51536e;

    /* renamed from: f  reason: collision with root package name */
    private final u f51537f;

    /* renamed from: g  reason: collision with root package name */
    private final AtomicReference f51538g;

    /* renamed from: h  reason: collision with root package name */
    private final i f51539h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f51540a;

        /* renamed from: b  reason: collision with root package name */
        private final List f51541b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f51542c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private i f51543d = i.f51524a;

        b(Executor executor) {
            this.f51540a = executor;
        }

        public static /* synthetic */ ComponentRegistrar a(ComponentRegistrar componentRegistrar) {
            return componentRegistrar;
        }

        public b b(c cVar) {
            this.f51542c.add(cVar);
            return this;
        }

        public b c(final ComponentRegistrar componentRegistrar) {
            this.f51541b.add(new fj.b() { // from class: ui.o
                @Override // fj.b
                public final Object get() {
                    return n.b.a(ComponentRegistrar.this);
                }
            });
            return this;
        }

        public b d(Collection collection) {
            this.f51541b.addAll(collection);
            return this;
        }

        public n e() {
            return new n(this.f51540a, this.f51541b, this.f51542c, this.f51543d);
        }

        public b f(i iVar) {
            this.f51543d = iVar;
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
            Iterator it = this.f51535d.iterator();
            while (it.hasNext()) {
                try {
                    ComponentRegistrar componentRegistrar = (ComponentRegistrar) ((fj.b) it.next()).get();
                    if (componentRegistrar != null) {
                        list.addAll(this.f51539h.a(componentRegistrar));
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
                            if (this.f51536e.contains(obj.toString())) {
                                it2.remove();
                                break;
                            }
                            this.f51536e.add(obj.toString());
                        }
                        i10++;
                    }
                }
            }
            if (this.f51532a.isEmpty()) {
                p.a(list);
            } else {
                ArrayList arrayList2 = new ArrayList(this.f51532a.keySet());
                arrayList2.addAll(list);
                p.a(arrayList2);
            }
            Iterator it3 = list.iterator();
            while (it3.hasNext()) {
                final c cVar = (c) it3.next();
                this.f51532a.put(cVar, new w(new fj.b() { // from class: ui.k
                    @Override // fj.b
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
            fj.b bVar = (fj.b) entry.getValue();
            if (cVar.n() || (cVar.o() && z10)) {
                bVar.get();
            }
        }
        this.f51537f.c();
    }

    private static List o(Iterable iterable) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : iterable) {
            arrayList.add(obj);
        }
        return arrayList;
    }

    private void p() {
        Boolean bool = (Boolean) this.f51538g.get();
        if (bool != null) {
            m(this.f51532a, bool.booleanValue());
        }
    }

    private void q() {
        for (c cVar : this.f51532a.keySet()) {
            for (q qVar : cVar.g()) {
                if (qVar.f() && !this.f51534c.containsKey(qVar.b())) {
                    this.f51534c.put(qVar.b(), x.b(Collections.EMPTY_SET));
                } else if (this.f51533b.containsKey(qVar.b())) {
                    continue;
                } else if (!qVar.e()) {
                    if (!qVar.f()) {
                        this.f51533b.put(qVar.b(), b0.c());
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
                final fj.b bVar = (fj.b) this.f51532a.get(cVar);
                for (d0 d0Var : cVar.j()) {
                    if (!this.f51533b.containsKey(d0Var)) {
                        this.f51533b.put(d0Var, bVar);
                    } else {
                        final b0 b0Var = (b0) ((fj.b) this.f51533b.get(d0Var));
                        arrayList.add(new Runnable() { // from class: ui.l
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
        for (Map.Entry entry : this.f51532a.entrySet()) {
            c cVar = (c) entry.getKey();
            if (!cVar.p()) {
                fj.b bVar = (fj.b) entry.getValue();
                for (d0 d0Var : cVar.j()) {
                    if (!hashMap.containsKey(d0Var)) {
                        hashMap.put(d0Var, new HashSet());
                    }
                    ((Set) hashMap.get(d0Var)).add(bVar);
                }
            }
        }
        for (Map.Entry entry2 : hashMap.entrySet()) {
            if (!this.f51534c.containsKey(entry2.getKey())) {
                this.f51534c.put((d0) entry2.getKey(), x.b((Collection) entry2.getValue()));
            } else {
                final x xVar = (x) this.f51534c.get(entry2.getKey());
                for (final fj.b bVar2 : (Set) entry2.getValue()) {
                    arrayList.add(new Runnable() { // from class: ui.m
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

    @Override // ui.d
    public synchronized fj.b c(d0 d0Var) {
        x xVar = (x) this.f51534c.get(d0Var);
        if (xVar != null) {
            return xVar;
        }
        return f51531i;
    }

    @Override // ui.d
    public synchronized fj.b f(d0 d0Var) {
        c0.c(d0Var, "Null interface requested.");
        return (fj.b) this.f51533b.get(d0Var);
    }

    public void n(boolean z10) {
        HashMap hashMap;
        if (!p0.d.a(this.f51538g, null, Boolean.valueOf(z10))) {
            return;
        }
        synchronized (this) {
            hashMap = new HashMap(this.f51532a);
        }
        m(hashMap, z10);
    }

    private n(Executor executor, Iterable iterable, Collection collection, i iVar) {
        this.f51532a = new HashMap();
        this.f51533b = new HashMap();
        this.f51534c = new HashMap();
        this.f51536e = new HashSet();
        this.f51538g = new AtomicReference();
        u uVar = new u(executor);
        this.f51537f = uVar;
        this.f51539h = iVar;
        ArrayList arrayList = new ArrayList();
        arrayList.add(c.q(uVar, u.class, cj.d.class, cj.c.class));
        arrayList.add(c.q(this, xi.a.class, new Class[0]));
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar != null) {
                arrayList.add(cVar);
            }
        }
        this.f51535d = o(iterable);
        l(arrayList);
    }
}
