package ti;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final ti.c f50737a;

        /* renamed from: b  reason: collision with root package name */
        private final Set f50738b = new HashSet();

        /* renamed from: c  reason: collision with root package name */
        private final Set f50739c = new HashSet();

        b(ti.c cVar) {
            this.f50737a = cVar;
        }

        void a(b bVar) {
            this.f50738b.add(bVar);
        }

        void b(b bVar) {
            this.f50739c.add(bVar);
        }

        ti.c c() {
            return this.f50737a;
        }

        Set d() {
            return this.f50738b;
        }

        boolean e() {
            return this.f50738b.isEmpty();
        }

        boolean f() {
            return this.f50739c.isEmpty();
        }

        void g(b bVar) {
            this.f50739c.remove(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final d0 f50740a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f50741b;

        public boolean equals(Object obj) {
            if (obj instanceof c) {
                c cVar = (c) obj;
                if (cVar.f50740a.equals(this.f50740a) && cVar.f50741b == this.f50741b) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return ((this.f50740a.hashCode() ^ 1000003) * 1000003) ^ Boolean.valueOf(this.f50741b).hashCode();
        }

        private c(d0 d0Var, boolean z10) {
            this.f50740a = d0Var;
            this.f50741b = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(List list) {
        Set<b> c10 = c(list);
        Set b10 = b(c10);
        int i10 = 0;
        while (!b10.isEmpty()) {
            b bVar = (b) b10.iterator().next();
            b10.remove(bVar);
            i10++;
            for (b bVar2 : bVar.d()) {
                bVar2.g(bVar);
                if (bVar2.f()) {
                    b10.add(bVar2);
                }
            }
        }
        if (i10 == list.size()) {
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (b bVar3 : c10) {
            if (!bVar3.f() && !bVar3.e()) {
                arrayList.add(bVar3.c());
            }
        }
        throw new r(arrayList);
    }

    private static Set b(Set set) {
        HashSet hashSet = new HashSet();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            b bVar = (b) it.next();
            if (bVar.f()) {
                hashSet.add(bVar);
            }
        }
        return hashSet;
    }

    private static Set c(List list) {
        Set<b> set;
        HashMap hashMap = new HashMap(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            ti.c cVar = (ti.c) it.next();
            b bVar = new b(cVar);
            for (d0 d0Var : cVar.j()) {
                c cVar2 = new c(d0Var, !cVar.p());
                if (!hashMap.containsKey(cVar2)) {
                    hashMap.put(cVar2, new HashSet());
                }
                Set set2 = (Set) hashMap.get(cVar2);
                if (!set2.isEmpty() && !cVar2.f50741b) {
                    throw new IllegalArgumentException(String.format("Multiple components provide %s.", d0Var));
                }
                set2.add(bVar);
            }
        }
        for (Set<b> set3 : hashMap.values()) {
            for (b bVar2 : set3) {
                for (q qVar : bVar2.c().g()) {
                    if (qVar.d() && (set = (Set) hashMap.get(new c(qVar.b(), qVar.f()))) != null) {
                        for (b bVar3 : set) {
                            bVar2.a(bVar3);
                            bVar3.b(bVar2);
                        }
                    }
                }
            }
        }
        HashSet hashSet = new HashSet();
        for (Set set4 : hashMap.values()) {
            hashSet.addAll(set4);
        }
        return hashSet;
    }
}
