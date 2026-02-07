package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f36843d;

    /* renamed from: e  reason: collision with root package name */
    private c f36844e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f36845i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f36846o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36850o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36849i;
        }
    }

    /* renamed from: m.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0492b extends e {
        C0492b(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36849i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36850o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f36847d;

        /* renamed from: e  reason: collision with root package name */
        final Object f36848e;

        /* renamed from: i  reason: collision with root package name */
        c f36849i;

        /* renamed from: o  reason: collision with root package name */
        c f36850o;

        c(Object obj, Object obj2) {
            this.f36847d = obj;
            this.f36848e = obj2;
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
            if (this.f36847d.equals(cVar.f36847d) && this.f36848e.equals(cVar.f36848e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f36847d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f36848e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f36847d.hashCode() ^ this.f36848e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f36847d + "=" + this.f36848e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f36851d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f36852e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f36851d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f36850o;
                this.f36851d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f36852e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f36852e) {
                this.f36852e = false;
                this.f36851d = b.this.f36843d;
            } else {
                c cVar2 = this.f36851d;
                if (cVar2 != null) {
                    cVar = cVar2.f36849i;
                } else {
                    cVar = null;
                }
                this.f36851d = cVar;
            }
            return this.f36851d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36852e) {
                if (b.this.f36843d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f36851d;
            if (cVar == null || cVar.f36849i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f36854d;

        /* renamed from: e  reason: collision with root package name */
        c f36855e;

        e(c cVar, c cVar2) {
            this.f36854d = cVar2;
            this.f36855e = cVar;
        }

        private c e() {
            c cVar = this.f36855e;
            c cVar2 = this.f36854d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f36854d == cVar && cVar == this.f36855e) {
                this.f36855e = null;
                this.f36854d = null;
            }
            c cVar2 = this.f36854d;
            if (cVar2 == cVar) {
                this.f36854d = b(cVar2);
            }
            if (this.f36855e == cVar) {
                this.f36855e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f36855e;
            this.f36855e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36855e != null) {
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
        return this.f36843d;
    }

    protected c c(Object obj) {
        c cVar = this.f36843d;
        while (cVar != null && !cVar.f36847d.equals(obj)) {
            cVar = cVar.f36849i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f36845i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0492b c0492b = new C0492b(this.f36844e, this.f36843d);
        this.f36845i.put(c0492b, Boolean.FALSE);
        return c0492b;
    }

    public Map.Entry e() {
        return this.f36844e;
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
        this.f36846o++;
        c cVar2 = this.f36844e;
        if (cVar2 == null) {
            this.f36843d = cVar;
            this.f36844e = cVar;
            return cVar;
        }
        cVar2.f36849i = cVar;
        cVar.f36850o = cVar2;
        this.f36844e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f36848e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f36846o--;
        if (!this.f36845i.isEmpty()) {
            for (f fVar : this.f36845i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f36850o;
        if (cVar != null) {
            cVar.f36849i = c10.f36849i;
        } else {
            this.f36843d = c10.f36849i;
        }
        c cVar2 = c10.f36849i;
        if (cVar2 != null) {
            cVar2.f36850o = cVar;
        } else {
            this.f36844e = cVar;
        }
        c10.f36849i = null;
        c10.f36850o = null;
        return c10.f36848e;
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
        a aVar = new a(this.f36843d, this.f36844e);
        this.f36845i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f36846o;
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
