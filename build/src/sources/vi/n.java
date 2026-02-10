package vi;

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
import vi.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n implements d, yi.a {

    /* renamed from: i  reason: collision with root package name */
    private static final gj.b f52439i = new gj.b() { // from class: vi.j
        @Override // gj.b
        public final Object get() {
            return Collections.EMPTY_SET;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final Map f52440a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f52441b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f52442c;

    /* renamed from: d  reason: collision with root package name */
    private final List f52443d;

    /* renamed from: e  reason: collision with root package name */
    private Set f52444e;

    /* renamed from: f  reason: collision with root package name */
    private final u f52445f;

    /* renamed from: g  reason: collision with root package name */
    private final AtomicReference f52446g;

    /* renamed from: h  reason: collision with root package name */
    private final i f52447h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f52448a;

        /* renamed from: b  reason: collision with root package name */
        private final List f52449b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f52450c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private i f52451d = i.f52432a;

        b(Executor executor) {
            this.f52448a = executor;
        }

        public static /* synthetic */ ComponentRegistrar a(ComponentRegistrar componentRegistrar) {
            return componentRegistrar;
        }

        public b b(c cVar) {
            this.f52450c.add(cVar);
            return this;
        }

        public b c(final ComponentRegistrar componentRegistrar) {
            this.f52449b.add(new gj.b() { // from class: vi.o
                @Override // gj.b
                public final Object get() {
                    return n.b.a(ComponentRegistrar.this);
                }
            });
            return this;
        }

        public b d(Collection collection) {
            this.f52449b.addAll(collection);
            return this;
        }

        public n e() {
            return new n(this.f52448a, this.f52449b, this.f52450c, this.f52451d);
        }

        public b f(i iVar) {
            this.f52451d = iVar;
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
            Iterator it = this.f52443d.iterator();
            while (it.hasNext()) {
                try {
                    ComponentRegistrar componentRegistrar = (ComponentRegistrar) ((gj.b) it.next()).get();
                    if (componentRegistrar != null) {
                        list.addAll(this.f52447h.a(componentRegistrar));
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
                            if (this.f52444e.contains(obj.toString())) {
                                it2.remove();
                                break;
                            }
                            this.f52444e.add(obj.toString());
                        }
                        i10++;
                    }
                }
            }
            if (this.f52440a.isEmpty()) {
                p.a(list);
            } else {
                ArrayList arrayList2 = new ArrayList(this.f52440a.keySet());
                arrayList2.addAll(list);
                p.a(arrayList2);
            }
            Iterator it3 = list.iterator();
            while (it3.hasNext()) {
                final c cVar = (c) it3.next();
                this.f52440a.put(cVar, new w(new gj.b() { // from class: vi.k
                    @Override // gj.b
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
            gj.b bVar = (gj.b) entry.getValue();
            if (cVar.n() || (cVar.o() && z10)) {
                bVar.get();
            }
        }
        this.f52445f.c();
    }

    private static List o(Iterable iterable) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : iterable) {
            arrayList.add(obj);
        }
        return arrayList;
    }

    private void p() {
        Boolean bool = (Boolean) this.f52446g.get();
        if (bool != null) {
            m(this.f52440a, bool.booleanValue());
        }
    }

    private void q() {
        for (c cVar : this.f52440a.keySet()) {
            for (q qVar : cVar.g()) {
                if (qVar.f() && !this.f52442c.containsKey(qVar.b())) {
                    this.f52442c.put(qVar.b(), x.b(Collections.EMPTY_SET));
                } else if (this.f52441b.containsKey(qVar.b())) {
                    continue;
                } else if (!qVar.e()) {
                    if (!qVar.f()) {
                        this.f52441b.put(qVar.b(), b0.c());
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
                final gj.b bVar = (gj.b) this.f52440a.get(cVar);
                for (d0 d0Var : cVar.j()) {
                    if (!this.f52441b.containsKey(d0Var)) {
                        this.f52441b.put(d0Var, bVar);
                    } else {
                        final b0 b0Var = (b0) ((gj.b) this.f52441b.get(d0Var));
                        arrayList.add(new Runnable() { // from class: vi.l
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
        for (Map.Entry entry : this.f52440a.entrySet()) {
            c cVar = (c) entry.getKey();
            if (!cVar.p()) {
                gj.b bVar = (gj.b) entry.getValue();
                for (d0 d0Var : cVar.j()) {
                    if (!hashMap.containsKey(d0Var)) {
                        hashMap.put(d0Var, new HashSet());
                    }
                    ((Set) hashMap.get(d0Var)).add(bVar);
                }
            }
        }
        for (Map.Entry entry2 : hashMap.entrySet()) {
            if (!this.f52442c.containsKey(entry2.getKey())) {
                this.f52442c.put((d0) entry2.getKey(), x.b((Collection) entry2.getValue()));
            } else {
                final x xVar = (x) this.f52442c.get(entry2.getKey());
                for (final gj.b bVar2 : (Set) entry2.getValue()) {
                    arrayList.add(new Runnable() { // from class: vi.m
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

    @Override // vi.d
    public synchronized gj.b b(d0 d0Var) {
        c0.c(d0Var, "Null interface requested.");
        return (gj.b) this.f52441b.get(d0Var);
    }

    @Override // vi.d
    public synchronized gj.b d(d0 d0Var) {
        x xVar = (x) this.f52442c.get(d0Var);
        if (xVar != null) {
            return xVar;
        }
        return f52439i;
    }

    public void n(boolean z10) {
        HashMap hashMap;
        if (!p0.d.a(this.f52446g, null, Boolean.valueOf(z10))) {
            return;
        }
        synchronized (this) {
            hashMap = new HashMap(this.f52440a);
        }
        m(hashMap, z10);
    }

    private n(Executor executor, Iterable iterable, Collection collection, i iVar) {
        this.f52440a = new HashMap();
        this.f52441b = new HashMap();
        this.f52442c = new HashMap();
        this.f52444e = new HashSet();
        this.f52446g = new AtomicReference();
        u uVar = new u(executor);
        this.f52445f = uVar;
        this.f52447h = iVar;
        ArrayList arrayList = new ArrayList();
        arrayList.add(c.q(uVar, u.class, dj.d.class, dj.c.class));
        arrayList.add(c.q(this, yi.a.class, new Class[0]));
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar != null) {
                arrayList.add(cVar);
            }
        }
        this.f52443d = o(iterable);
        l(arrayList);
    }
}
