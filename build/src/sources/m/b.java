package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f36077d;

    /* renamed from: e  reason: collision with root package name */
    private c f36078e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f36079i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f36080o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36084o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36083i;
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
            return cVar.f36083i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36084o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f36081d;

        /* renamed from: e  reason: collision with root package name */
        final Object f36082e;

        /* renamed from: i  reason: collision with root package name */
        c f36083i;

        /* renamed from: o  reason: collision with root package name */
        c f36084o;

        c(Object obj, Object obj2) {
            this.f36081d = obj;
            this.f36082e = obj2;
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
            if (this.f36081d.equals(cVar.f36081d) && this.f36082e.equals(cVar.f36082e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f36081d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f36082e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f36081d.hashCode() ^ this.f36082e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f36081d + "=" + this.f36082e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f36085d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f36086e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f36085d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f36084o;
                this.f36085d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f36086e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f36086e) {
                this.f36086e = false;
                this.f36085d = b.this.f36077d;
            } else {
                c cVar2 = this.f36085d;
                if (cVar2 != null) {
                    cVar = cVar2.f36083i;
                } else {
                    cVar = null;
                }
                this.f36085d = cVar;
            }
            return this.f36085d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36086e) {
                if (b.this.f36077d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f36085d;
            if (cVar == null || cVar.f36083i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f36088d;

        /* renamed from: e  reason: collision with root package name */
        c f36089e;

        e(c cVar, c cVar2) {
            this.f36088d = cVar2;
            this.f36089e = cVar;
        }

        private c e() {
            c cVar = this.f36089e;
            c cVar2 = this.f36088d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f36088d == cVar && cVar == this.f36089e) {
                this.f36089e = null;
                this.f36088d = null;
            }
            c cVar2 = this.f36088d;
            if (cVar2 == cVar) {
                this.f36088d = b(cVar2);
            }
            if (this.f36089e == cVar) {
                this.f36089e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f36089e;
            this.f36089e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36089e != null) {
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
        return this.f36077d;
    }

    protected c c(Object obj) {
        c cVar = this.f36077d;
        while (cVar != null && !cVar.f36081d.equals(obj)) {
            cVar = cVar.f36083i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f36079i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0506b c0506b = new C0506b(this.f36078e, this.f36077d);
        this.f36079i.put(c0506b, Boolean.FALSE);
        return c0506b;
    }

    public Map.Entry e() {
        return this.f36078e;
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
        this.f36080o++;
        c cVar2 = this.f36078e;
        if (cVar2 == null) {
            this.f36077d = cVar;
            this.f36078e = cVar;
            return cVar;
        }
        cVar2.f36083i = cVar;
        cVar.f36084o = cVar2;
        this.f36078e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f36082e;
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
        this.f36080o--;
        if (!this.f36079i.isEmpty()) {
            for (f fVar : this.f36079i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f36084o;
        if (cVar != null) {
            cVar.f36083i = c10.f36083i;
        } else {
            this.f36077d = c10.f36083i;
        }
        c cVar2 = c10.f36083i;
        if (cVar2 != null) {
            cVar2.f36084o = cVar;
        } else {
            this.f36078e = cVar;
        }
        c10.f36083i = null;
        c10.f36084o = null;
        return c10.f36082e;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        a aVar = new a(this.f36077d, this.f36078e);
        this.f36079i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f36080o;
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
