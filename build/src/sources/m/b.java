package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f37758d;

    /* renamed from: e  reason: collision with root package name */
    private c f37759e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f37760i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f37761o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37765o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37764i;
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
            return cVar.f37764i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37765o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f37762d;

        /* renamed from: e  reason: collision with root package name */
        final Object f37763e;

        /* renamed from: i  reason: collision with root package name */
        c f37764i;

        /* renamed from: o  reason: collision with root package name */
        c f37765o;

        c(Object obj, Object obj2) {
            this.f37762d = obj;
            this.f37763e = obj2;
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
            if (this.f37762d.equals(cVar.f37762d) && this.f37763e.equals(cVar.f37763e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f37762d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f37763e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f37762d.hashCode() ^ this.f37763e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f37762d + "=" + this.f37763e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f37766d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f37767e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f37766d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f37765o;
                this.f37766d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f37767e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f37767e) {
                this.f37767e = false;
                this.f37766d = b.this.f37758d;
            } else {
                c cVar2 = this.f37766d;
                if (cVar2 != null) {
                    cVar = cVar2.f37764i;
                } else {
                    cVar = null;
                }
                this.f37766d = cVar;
            }
            return this.f37766d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37767e) {
                if (b.this.f37758d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f37766d;
            if (cVar == null || cVar.f37764i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f37769d;

        /* renamed from: e  reason: collision with root package name */
        c f37770e;

        e(c cVar, c cVar2) {
            this.f37769d = cVar2;
            this.f37770e = cVar;
        }

        private c e() {
            c cVar = this.f37770e;
            c cVar2 = this.f37769d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f37769d == cVar && cVar == this.f37770e) {
                this.f37770e = null;
                this.f37769d = null;
            }
            c cVar2 = this.f37769d;
            if (cVar2 == cVar) {
                this.f37769d = b(cVar2);
            }
            if (this.f37770e == cVar) {
                this.f37770e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f37770e;
            this.f37770e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37770e != null) {
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
        return this.f37758d;
    }

    protected c c(Object obj) {
        c cVar = this.f37758d;
        while (cVar != null && !cVar.f37762d.equals(obj)) {
            cVar = cVar.f37764i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f37760i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0486b c0486b = new C0486b(this.f37759e, this.f37758d);
        this.f37760i.put(c0486b, Boolean.FALSE);
        return c0486b;
    }

    public Map.Entry e() {
        return this.f37759e;
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
        this.f37761o++;
        c cVar2 = this.f37759e;
        if (cVar2 == null) {
            this.f37758d = cVar;
            this.f37759e = cVar;
            return cVar;
        }
        cVar2.f37764i = cVar;
        cVar.f37765o = cVar2;
        this.f37759e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f37763e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f37761o--;
        if (!this.f37760i.isEmpty()) {
            for (f fVar : this.f37760i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f37765o;
        if (cVar != null) {
            cVar.f37764i = c10.f37764i;
        } else {
            this.f37758d = c10.f37764i;
        }
        c cVar2 = c10.f37764i;
        if (cVar2 != null) {
            cVar2.f37765o = cVar;
        } else {
            this.f37759e = cVar;
        }
        c10.f37764i = null;
        c10.f37765o = null;
        return c10.f37763e;
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
        a aVar = new a(this.f37758d, this.f37759e);
        this.f37760i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f37761o;
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
