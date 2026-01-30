package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f37774d;

    /* renamed from: e  reason: collision with root package name */
    private c f37775e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f37776i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f37777o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37781o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37780i;
        }
    }

    /* renamed from: m.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0486b extends e {
        C0486b(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37780i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37781o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f37778d;

        /* renamed from: e  reason: collision with root package name */
        final Object f37779e;

        /* renamed from: i  reason: collision with root package name */
        c f37780i;

        /* renamed from: o  reason: collision with root package name */
        c f37781o;

        c(Object obj, Object obj2) {
            this.f37778d = obj;
            this.f37779e = obj2;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f37778d.equals(cVar.f37778d) && this.f37779e.equals(cVar.f37779e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f37778d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f37779e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f37778d.hashCode() ^ this.f37779e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f37778d + "=" + this.f37779e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f37782d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f37783e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f37782d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f37781o;
                this.f37782d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f37783e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f37783e) {
                this.f37783e = false;
                this.f37782d = b.this.f37774d;
            } else {
                c cVar2 = this.f37782d;
                if (cVar2 != null) {
                    cVar = cVar2.f37780i;
                } else {
                    cVar = null;
                }
                this.f37782d = cVar;
            }
            return this.f37782d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37783e) {
                if (b.this.f37774d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f37782d;
            if (cVar == null || cVar.f37780i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f37785d;

        /* renamed from: e  reason: collision with root package name */
        c f37786e;

        e(c cVar, c cVar2) {
            this.f37785d = cVar2;
            this.f37786e = cVar;
        }

        private c e() {
            c cVar = this.f37786e;
            c cVar2 = this.f37785d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f37785d == cVar && cVar == this.f37786e) {
                this.f37786e = null;
                this.f37785d = null;
            }
            c cVar2 = this.f37785d;
            if (cVar2 == cVar) {
                this.f37785d = b(cVar2);
            }
            if (this.f37786e == cVar) {
                this.f37786e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f37786e;
            this.f37786e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37786e != null) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {
        abstract void a(c cVar);
    }

    public Map.Entry b() {
        return this.f37774d;
    }

    protected c c(Object obj) {
        c cVar = this.f37774d;
        while (cVar != null && !cVar.f37778d.equals(obj)) {
            cVar = cVar.f37780i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f37776i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0486b c0486b = new C0486b(this.f37775e, this.f37774d);
        this.f37776i.put(c0486b, Boolean.FALSE);
        return c0486b;
    }

    public Map.Entry e() {
        return this.f37775e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (size() != bVar.size()) {
            return false;
        }
        Iterator it = iterator();
        Iterator it2 = bVar.iterator();
        while (it.hasNext() && it2.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            Object next = it2.next();
            if ((entry == null && next != null) || (entry != null && !entry.equals(next))) {
                return false;
            }
        }
        if (!it.hasNext() && !it2.hasNext()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c f(Object obj, Object obj2) {
        c cVar = new c(obj, obj2);
        this.f37777o++;
        c cVar2 = this.f37775e;
        if (cVar2 == null) {
            this.f37774d = cVar;
            this.f37775e = cVar;
            return cVar;
        }
        cVar2.f37780i = cVar;
        cVar.f37781o = cVar2;
        this.f37775e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f37779e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f37777o--;
        if (!this.f37776i.isEmpty()) {
            for (f fVar : this.f37776i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f37781o;
        if (cVar != null) {
            cVar.f37780i = c10.f37780i;
        } else {
            this.f37774d = c10.f37780i;
        }
        c cVar2 = c10.f37780i;
        if (cVar2 != null) {
            cVar2.f37781o = cVar;
        } else {
            this.f37775e = cVar;
        }
        c10.f37780i = null;
        c10.f37781o = null;
        return c10.f37779e;
    }

    public int hashCode() {
        Iterator it = iterator();
        int i10 = 0;
        while (it.hasNext()) {
            i10 += ((Map.Entry) it.next()).hashCode();
        }
        return i10;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        a aVar = new a(this.f37774d, this.f37775e);
        this.f37776i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f37777o;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[");
        Iterator it = iterator();
        while (it.hasNext()) {
            sb2.append(((Map.Entry) it.next()).toString());
            if (it.hasNext()) {
                sb2.append(", ");
            }
        }
        sb2.append("]");
        return sb2.toString();
    }
}
