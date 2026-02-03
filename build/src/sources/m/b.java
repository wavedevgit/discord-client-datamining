package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f37551d;

    /* renamed from: e  reason: collision with root package name */
    private c f37552e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f37553i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f37554o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37558o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37557i;
        }
    }

    /* renamed from: m.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0476b extends e {
        C0476b(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37557i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37558o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f37555d;

        /* renamed from: e  reason: collision with root package name */
        final Object f37556e;

        /* renamed from: i  reason: collision with root package name */
        c f37557i;

        /* renamed from: o  reason: collision with root package name */
        c f37558o;

        c(Object obj, Object obj2) {
            this.f37555d = obj;
            this.f37556e = obj2;
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
            if (this.f37555d.equals(cVar.f37555d) && this.f37556e.equals(cVar.f37556e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f37555d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f37556e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f37555d.hashCode() ^ this.f37556e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f37555d + "=" + this.f37556e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f37559d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f37560e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f37559d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f37558o;
                this.f37559d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f37560e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f37560e) {
                this.f37560e = false;
                this.f37559d = b.this.f37551d;
            } else {
                c cVar2 = this.f37559d;
                if (cVar2 != null) {
                    cVar = cVar2.f37557i;
                } else {
                    cVar = null;
                }
                this.f37559d = cVar;
            }
            return this.f37559d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37560e) {
                if (b.this.f37551d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f37559d;
            if (cVar == null || cVar.f37557i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f37562d;

        /* renamed from: e  reason: collision with root package name */
        c f37563e;

        e(c cVar, c cVar2) {
            this.f37562d = cVar2;
            this.f37563e = cVar;
        }

        private c e() {
            c cVar = this.f37563e;
            c cVar2 = this.f37562d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f37562d == cVar && cVar == this.f37563e) {
                this.f37563e = null;
                this.f37562d = null;
            }
            c cVar2 = this.f37562d;
            if (cVar2 == cVar) {
                this.f37562d = b(cVar2);
            }
            if (this.f37563e == cVar) {
                this.f37563e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f37563e;
            this.f37563e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37563e != null) {
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
        return this.f37551d;
    }

    protected c c(Object obj) {
        c cVar = this.f37551d;
        while (cVar != null && !cVar.f37555d.equals(obj)) {
            cVar = cVar.f37557i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f37553i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0476b c0476b = new C0476b(this.f37552e, this.f37551d);
        this.f37553i.put(c0476b, Boolean.FALSE);
        return c0476b;
    }

    public Map.Entry e() {
        return this.f37552e;
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
        this.f37554o++;
        c cVar2 = this.f37552e;
        if (cVar2 == null) {
            this.f37551d = cVar;
            this.f37552e = cVar;
            return cVar;
        }
        cVar2.f37557i = cVar;
        cVar.f37558o = cVar2;
        this.f37552e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f37556e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f37554o--;
        if (!this.f37553i.isEmpty()) {
            for (f fVar : this.f37553i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f37558o;
        if (cVar != null) {
            cVar.f37557i = c10.f37557i;
        } else {
            this.f37551d = c10.f37557i;
        }
        c cVar2 = c10.f37557i;
        if (cVar2 != null) {
            cVar2.f37558o = cVar;
        } else {
            this.f37552e = cVar;
        }
        c10.f37557i = null;
        c10.f37558o = null;
        return c10.f37556e;
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
        a aVar = new a(this.f37551d, this.f37552e);
        this.f37553i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f37554o;
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
