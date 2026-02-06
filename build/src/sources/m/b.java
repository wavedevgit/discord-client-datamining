package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f36795d;

    /* renamed from: e  reason: collision with root package name */
    private c f36796e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f36797i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f36798o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36802o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36801i;
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
            return cVar.f36801i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36802o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f36799d;

        /* renamed from: e  reason: collision with root package name */
        final Object f36800e;

        /* renamed from: i  reason: collision with root package name */
        c f36801i;

        /* renamed from: o  reason: collision with root package name */
        c f36802o;

        c(Object obj, Object obj2) {
            this.f36799d = obj;
            this.f36800e = obj2;
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
            if (this.f36799d.equals(cVar.f36799d) && this.f36800e.equals(cVar.f36800e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f36799d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f36800e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f36799d.hashCode() ^ this.f36800e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f36799d + "=" + this.f36800e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f36803d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f36804e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f36803d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f36802o;
                this.f36803d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f36804e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f36804e) {
                this.f36804e = false;
                this.f36803d = b.this.f36795d;
            } else {
                c cVar2 = this.f36803d;
                if (cVar2 != null) {
                    cVar = cVar2.f36801i;
                } else {
                    cVar = null;
                }
                this.f36803d = cVar;
            }
            return this.f36803d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36804e) {
                if (b.this.f36795d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f36803d;
            if (cVar == null || cVar.f36801i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f36806d;

        /* renamed from: e  reason: collision with root package name */
        c f36807e;

        e(c cVar, c cVar2) {
            this.f36806d = cVar2;
            this.f36807e = cVar;
        }

        private c e() {
            c cVar = this.f36807e;
            c cVar2 = this.f36806d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f36806d == cVar && cVar == this.f36807e) {
                this.f36807e = null;
                this.f36806d = null;
            }
            c cVar2 = this.f36806d;
            if (cVar2 == cVar) {
                this.f36806d = b(cVar2);
            }
            if (this.f36807e == cVar) {
                this.f36807e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f36807e;
            this.f36807e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36807e != null) {
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
        return this.f36795d;
    }

    protected c c(Object obj) {
        c cVar = this.f36795d;
        while (cVar != null && !cVar.f36799d.equals(obj)) {
            cVar = cVar.f36801i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f36797i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0492b c0492b = new C0492b(this.f36796e, this.f36795d);
        this.f36797i.put(c0492b, Boolean.FALSE);
        return c0492b;
    }

    public Map.Entry e() {
        return this.f36796e;
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
        this.f36798o++;
        c cVar2 = this.f36796e;
        if (cVar2 == null) {
            this.f36795d = cVar;
            this.f36796e = cVar;
            return cVar;
        }
        cVar2.f36801i = cVar;
        cVar.f36802o = cVar2;
        this.f36796e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f36800e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f36798o--;
        if (!this.f36797i.isEmpty()) {
            for (f fVar : this.f36797i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f36802o;
        if (cVar != null) {
            cVar.f36801i = c10.f36801i;
        } else {
            this.f36795d = c10.f36801i;
        }
        c cVar2 = c10.f36801i;
        if (cVar2 != null) {
            cVar2.f36802o = cVar;
        } else {
            this.f36796e = cVar;
        }
        c10.f36801i = null;
        c10.f36802o = null;
        return c10.f36800e;
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
        a aVar = new a(this.f36795d, this.f36796e);
        this.f36797i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f36798o;
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
