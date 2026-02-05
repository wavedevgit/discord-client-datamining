package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f37213d;

    /* renamed from: e  reason: collision with root package name */
    private c f37214e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f37215i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f37216o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37220o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37219i;
        }
    }

    /* renamed from: m.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0488b extends e {
        C0488b(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f37219i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f37220o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f37217d;

        /* renamed from: e  reason: collision with root package name */
        final Object f37218e;

        /* renamed from: i  reason: collision with root package name */
        c f37219i;

        /* renamed from: o  reason: collision with root package name */
        c f37220o;

        c(Object obj, Object obj2) {
            this.f37217d = obj;
            this.f37218e = obj2;
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
            if (this.f37217d.equals(cVar.f37217d) && this.f37218e.equals(cVar.f37218e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f37217d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f37218e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f37217d.hashCode() ^ this.f37218e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f37217d + "=" + this.f37218e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f37221d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f37222e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f37221d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f37220o;
                this.f37221d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f37222e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f37222e) {
                this.f37222e = false;
                this.f37221d = b.this.f37213d;
            } else {
                c cVar2 = this.f37221d;
                if (cVar2 != null) {
                    cVar = cVar2.f37219i;
                } else {
                    cVar = null;
                }
                this.f37221d = cVar;
            }
            return this.f37221d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37222e) {
                if (b.this.f37213d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f37221d;
            if (cVar == null || cVar.f37219i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f37224d;

        /* renamed from: e  reason: collision with root package name */
        c f37225e;

        e(c cVar, c cVar2) {
            this.f37224d = cVar2;
            this.f37225e = cVar;
        }

        private c e() {
            c cVar = this.f37225e;
            c cVar2 = this.f37224d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f37224d == cVar && cVar == this.f37225e) {
                this.f37225e = null;
                this.f37224d = null;
            }
            c cVar2 = this.f37224d;
            if (cVar2 == cVar) {
                this.f37224d = b(cVar2);
            }
            if (this.f37225e == cVar) {
                this.f37225e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f37225e;
            this.f37225e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f37225e != null) {
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
        return this.f37213d;
    }

    protected c c(Object obj) {
        c cVar = this.f37213d;
        while (cVar != null && !cVar.f37217d.equals(obj)) {
            cVar = cVar.f37219i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f37215i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0488b c0488b = new C0488b(this.f37214e, this.f37213d);
        this.f37215i.put(c0488b, Boolean.FALSE);
        return c0488b;
    }

    public Map.Entry e() {
        return this.f37214e;
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
        this.f37216o++;
        c cVar2 = this.f37214e;
        if (cVar2 == null) {
            this.f37213d = cVar;
            this.f37214e = cVar;
            return cVar;
        }
        cVar2.f37219i = cVar;
        cVar.f37220o = cVar2;
        this.f37214e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f37218e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f37216o--;
        if (!this.f37215i.isEmpty()) {
            for (f fVar : this.f37215i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f37220o;
        if (cVar != null) {
            cVar.f37219i = c10.f37219i;
        } else {
            this.f37213d = c10.f37219i;
        }
        c cVar2 = c10.f37219i;
        if (cVar2 != null) {
            cVar2.f37220o = cVar;
        } else {
            this.f37214e = cVar;
        }
        c10.f37219i = null;
        c10.f37220o = null;
        return c10.f37218e;
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
        a aVar = new a(this.f37213d, this.f37214e);
        this.f37215i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f37216o;
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
