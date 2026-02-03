package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f37754d;

    /* renamed from: e  reason: collision with root package name */
    private c f37755e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f37756i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f37757o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37761o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37760i;
        }
    }

    /* renamed from: m.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0497b extends e {
        C0497b(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37760i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37761o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f37758d;

        /* renamed from: e  reason: collision with root package name */
        final Object f37759e;

        /* renamed from: i  reason: collision with root package name */
        c f37760i;

        /* renamed from: o  reason: collision with root package name */
        c f37761o;

        c(Object obj, Object obj2) {
            this.f37758d = obj;
            this.f37759e = obj2;
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
            if (this.f37758d.equals(cVar.f37758d) && this.f37759e.equals(cVar.f37759e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f37758d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f37759e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f37758d.hashCode() ^ this.f37759e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f37758d + "=" + this.f37759e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f37762d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f37763e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f37762d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f37761o;
                this.f37762d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f37763e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f37763e) {
                this.f37763e = false;
                this.f37762d = b.this.f37754d;
            } else {
                c cVar2 = this.f37762d;
                if (cVar2 != null) {
                    cVar = cVar2.f37760i;
                } else {
                    cVar = null;
                }
                this.f37762d = cVar;
            }
            return this.f37762d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37763e) {
                if (b.this.f37754d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f37762d;
            if (cVar == null || cVar.f37760i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f37765d;

        /* renamed from: e  reason: collision with root package name */
        c f37766e;

        e(c cVar, c cVar2) {
            this.f37765d = cVar2;
            this.f37766e = cVar;
        }

        private c e() {
            c cVar = this.f37766e;
            c cVar2 = this.f37765d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f37765d == cVar && cVar == this.f37766e) {
                this.f37766e = null;
                this.f37765d = null;
            }
            c cVar2 = this.f37765d;
            if (cVar2 == cVar) {
                this.f37765d = b(cVar2);
            }
            if (this.f37766e == cVar) {
                this.f37766e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f37766e;
            this.f37766e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37766e != null) {
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
        return this.f37754d;
    }

    protected c c(Object obj) {
        c cVar = this.f37754d;
        while (cVar != null && !cVar.f37758d.equals(obj)) {
            cVar = cVar.f37760i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f37756i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0497b c0497b = new C0497b(this.f37755e, this.f37754d);
        this.f37756i.put(c0497b, Boolean.FALSE);
        return c0497b;
    }

    public Map.Entry e() {
        return this.f37755e;
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
        this.f37757o++;
        c cVar2 = this.f37755e;
        if (cVar2 == null) {
            this.f37754d = cVar;
            this.f37755e = cVar;
            return cVar;
        }
        cVar2.f37760i = cVar;
        cVar.f37761o = cVar2;
        this.f37755e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f37759e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f37757o--;
        if (!this.f37756i.isEmpty()) {
            for (f fVar : this.f37756i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f37761o;
        if (cVar != null) {
            cVar.f37760i = c10.f37760i;
        } else {
            this.f37754d = c10.f37760i;
        }
        c cVar2 = c10.f37760i;
        if (cVar2 != null) {
            cVar2.f37761o = cVar;
        } else {
            this.f37755e = cVar;
        }
        c10.f37760i = null;
        c10.f37761o = null;
        return c10.f37759e;
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
        a aVar = new a(this.f37754d, this.f37755e);
        this.f37756i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f37757o;
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
