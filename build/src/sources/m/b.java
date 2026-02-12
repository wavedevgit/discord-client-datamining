package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f36078d;

    /* renamed from: e  reason: collision with root package name */
    private c f36079e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f36080i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f36081o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36085o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36084i;
        }
    }

    /* renamed from: m.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0506b extends e {
        C0506b(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36084i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36085o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f36082d;

        /* renamed from: e  reason: collision with root package name */
        final Object f36083e;

        /* renamed from: i  reason: collision with root package name */
        c f36084i;

        /* renamed from: o  reason: collision with root package name */
        c f36085o;

        c(Object obj, Object obj2) {
            this.f36082d = obj;
            this.f36083e = obj2;
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
            if (this.f36082d.equals(cVar.f36082d) && this.f36083e.equals(cVar.f36083e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f36082d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f36083e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f36082d.hashCode() ^ this.f36083e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f36082d + "=" + this.f36083e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f36086d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f36087e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f36086d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f36085o;
                this.f36086d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f36087e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f36087e) {
                this.f36087e = false;
                this.f36086d = b.this.f36078d;
            } else {
                c cVar2 = this.f36086d;
                if (cVar2 != null) {
                    cVar = cVar2.f36084i;
                } else {
                    cVar = null;
                }
                this.f36086d = cVar;
            }
            return this.f36086d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36087e) {
                if (b.this.f36078d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f36086d;
            if (cVar == null || cVar.f36084i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f36089d;

        /* renamed from: e  reason: collision with root package name */
        c f36090e;

        e(c cVar, c cVar2) {
            this.f36089d = cVar2;
            this.f36090e = cVar;
        }

        private c e() {
            c cVar = this.f36090e;
            c cVar2 = this.f36089d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f36089d == cVar && cVar == this.f36090e) {
                this.f36090e = null;
                this.f36089d = null;
            }
            c cVar2 = this.f36089d;
            if (cVar2 == cVar) {
                this.f36089d = b(cVar2);
            }
            if (this.f36090e == cVar) {
                this.f36090e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f36090e;
            this.f36090e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36090e != null) {
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
        return this.f36078d;
    }

    protected c c(Object obj) {
        c cVar = this.f36078d;
        while (cVar != null && !cVar.f36082d.equals(obj)) {
            cVar = cVar.f36084i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f36080i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0506b c0506b = new C0506b(this.f36079e, this.f36078d);
        this.f36080i.put(c0506b, Boolean.FALSE);
        return c0506b;
    }

    public Map.Entry e() {
        return this.f36079e;
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
        this.f36081o++;
        c cVar2 = this.f36079e;
        if (cVar2 == null) {
            this.f36078d = cVar;
            this.f36079e = cVar;
            return cVar;
        }
        cVar2.f36084i = cVar;
        cVar.f36085o = cVar2;
        this.f36079e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f36083e;
        }
        f(obj, obj2);
        return null;
    }

    public int hashCode() {
        Iterator it = iterator();
        int i10 = 0;
        while (it.hasNext()) {
            i10 += ((Map.Entry) it.next()).hashCode();
        }
        return i10;
    }

    public Object i(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f36081o--;
        if (!this.f36080i.isEmpty()) {
            for (f fVar : this.f36080i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f36085o;
        if (cVar != null) {
            cVar.f36084i = c10.f36084i;
        } else {
            this.f36078d = c10.f36084i;
        }
        c cVar2 = c10.f36084i;
        if (cVar2 != null) {
            cVar2.f36085o = cVar;
        } else {
            this.f36079e = cVar;
        }
        c10.f36084i = null;
        c10.f36085o = null;
        return c10.f36083e;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        a aVar = new a(this.f36078d, this.f36079e);
        this.f36080i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f36081o;
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
