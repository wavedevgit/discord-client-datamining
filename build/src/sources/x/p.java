package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p {

    /* renamed from: c  reason: collision with root package name */
    public static final p f53444c = new a().b(0).a();

    /* renamed from: d  reason: collision with root package name */
    public static final p f53445d = new a().b(1).a();

    /* renamed from: a  reason: collision with root package name */
    private final LinkedHashSet f53446a;

    /* renamed from: b  reason: collision with root package name */
    private final String f53447b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final LinkedHashSet f53448a = new LinkedHashSet();

        /* renamed from: b  reason: collision with root package name */
        private String f53449b;

        public p a() {
            return new p(this.f53448a, this.f53449b);
        }

        public a b(int i10) {
            boolean z10;
            if (i10 != -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "The specified lens facing is invalid.");
            this.f53448a.add(new a0.l1(i10));
            return this;
        }
    }

    p(LinkedHashSet linkedHashSet, String str) {
        this.f53446a = linkedHashSet;
        this.f53447b = str;
    }

    public LinkedHashSet a(LinkedHashSet linkedHashSet) {
        ArrayList arrayList = new ArrayList();
        Iterator it = linkedHashSet.iterator();
        while (it.hasNext()) {
            arrayList.add(((a0.e0) it.next()).b());
        }
        List b10 = b(arrayList);
        LinkedHashSet linkedHashSet2 = new LinkedHashSet();
        Iterator it2 = linkedHashSet.iterator();
        while (it2.hasNext()) {
            a0.e0 e0Var = (a0.e0) it2.next();
            if (b10.contains(e0Var.b())) {
                linkedHashSet2.add(e0Var);
            }
        }
        return linkedHashSet2;
    }

    public List b(List list) {
        List arrayList = new ArrayList(list);
        Iterator it = this.f53446a.iterator();
        while (it.hasNext()) {
            arrayList = ((n) it.next()).b(Collections.unmodifiableList(arrayList));
        }
        arrayList.retainAll(list);
        return arrayList;
    }

    public LinkedHashSet c() {
        return this.f53446a;
    }

    public Integer d() {
        Iterator it = this.f53446a.iterator();
        Integer num = null;
        while (it.hasNext()) {
            n nVar = (n) it.next();
            if (nVar instanceof a0.l1) {
                Integer valueOf = Integer.valueOf(((a0.l1) nVar).c());
                if (num == null) {
                    num = valueOf;
                } else if (!num.equals(valueOf)) {
                    throw new IllegalStateException("Multiple conflicting lens facing requirements exist.");
                }
            }
        }
        return num;
    }

    public a0.e0 e(LinkedHashSet linkedHashSet) {
        Iterator it = a(linkedHashSet).iterator();
        if (it.hasNext()) {
            return (a0.e0) it.next();
        }
        throw new IllegalArgumentException("No available camera can be found");
    }
}
