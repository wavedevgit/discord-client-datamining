package m;

import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    c f36702d;

    /* renamed from: e  reason: collision with root package name */
    private c f36703e;

    /* renamed from: i  reason: collision with root package name */
    private final WeakHashMap f36704i = new WeakHashMap();

    /* renamed from: o  reason: collision with root package name */
    private int f36705o = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends e {
        a(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36709o;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36708i;
        }
    }

    /* renamed from: m.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0524b extends e {
        C0524b(c cVar, c cVar2) {
            super(cVar, cVar2);
        }

        @Override // m.b.e
        c b(c cVar) {
            return cVar.f36708i;
        }

        @Override // m.b.e
        c c(c cVar) {
            return cVar.f36709o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        final Object f36706d;

        /* renamed from: e  reason: collision with root package name */
        final Object f36707e;

        /* renamed from: i  reason: collision with root package name */
        c f36708i;

        /* renamed from: o  reason: collision with root package name */
        c f36709o;

        c(Object obj, Object obj2) {
            this.f36706d = obj;
            this.f36707e = obj2;
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
            if (this.f36706d.equals(cVar.f36706d) && this.f36707e.equals(cVar.f36707e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f36706d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f36707e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            return this.f36706d.hashCode() ^ this.f36707e.hashCode();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("An entry modification is not supported");
        }

        public String toString() {
            return this.f36706d + "=" + this.f36707e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private c f36710d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f36711e = true;

        d() {
        }

        @Override // m.b.f
        void a(c cVar) {
            boolean z10;
            c cVar2 = this.f36710d;
            if (cVar == cVar2) {
                c cVar3 = cVar2.f36709o;
                this.f36710d = cVar3;
                if (cVar3 == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f36711e = z10;
            }
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            c cVar;
            if (this.f36711e) {
                this.f36711e = false;
                this.f36710d = b.this.f36702d;
            } else {
                c cVar2 = this.f36710d;
                if (cVar2 != null) {
                    cVar = cVar2.f36708i;
                } else {
                    cVar = null;
                }
                this.f36710d = cVar;
            }
            return this.f36710d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36711e) {
                if (b.this.f36702d == null) {
                    return false;
                }
                return true;
            }
            c cVar = this.f36710d;
            if (cVar == null || cVar.f36708i == null) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class e extends f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        c f36713d;

        /* renamed from: e  reason: collision with root package name */
        c f36714e;

        e(c cVar, c cVar2) {
            this.f36713d = cVar2;
            this.f36714e = cVar;
        }

        private c e() {
            c cVar = this.f36714e;
            c cVar2 = this.f36713d;
            if (cVar != cVar2 && cVar2 != null) {
                return c(cVar);
            }
            return null;
        }

        @Override // m.b.f
        public void a(c cVar) {
            if (this.f36713d == cVar && cVar == this.f36714e) {
                this.f36714e = null;
                this.f36713d = null;
            }
            c cVar2 = this.f36713d;
            if (cVar2 == cVar) {
                this.f36713d = b(cVar2);
            }
            if (this.f36714e == cVar) {
                this.f36714e = e();
            }
        }

        abstract c b(c cVar);

        abstract c c(c cVar);

        @Override // java.util.Iterator
        /* renamed from: d */
        public Map.Entry next() {
            c cVar = this.f36714e;
            this.f36714e = e();
            return cVar;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f36714e != null) {
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
        return this.f36702d;
    }

    protected c c(Object obj) {
        c cVar = this.f36702d;
        while (cVar != null && !cVar.f36706d.equals(obj)) {
            cVar = cVar.f36708i;
        }
        return cVar;
    }

    public d d() {
        d dVar = new d();
        this.f36704i.put(dVar, Boolean.FALSE);
        return dVar;
    }

    public Iterator descendingIterator() {
        C0524b c0524b = new C0524b(this.f36703e, this.f36702d);
        this.f36704i.put(c0524b, Boolean.FALSE);
        return c0524b;
    }

    public Map.Entry e() {
        return this.f36703e;
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
        this.f36705o++;
        c cVar2 = this.f36703e;
        if (cVar2 == null) {
            this.f36702d = cVar;
            this.f36703e = cVar;
            return cVar;
        }
        cVar2.f36708i = cVar;
        cVar.f36709o = cVar2;
        this.f36703e = cVar;
        return cVar;
    }

    public Object g(Object obj, Object obj2) {
        c c10 = c(obj);
        if (c10 != null) {
            return c10.f36707e;
        }
        f(obj, obj2);
        return null;
    }

    public Object h(Object obj) {
        c c10 = c(obj);
        if (c10 == null) {
            return null;
        }
        this.f36705o--;
        if (!this.f36704i.isEmpty()) {
            for (f fVar : this.f36704i.keySet()) {
                fVar.a(c10);
            }
        }
        c cVar = c10.f36709o;
        if (cVar != null) {
            cVar.f36708i = c10.f36708i;
        } else {
            this.f36702d = c10.f36708i;
        }
        c cVar2 = c10.f36708i;
        if (cVar2 != null) {
            cVar2.f36709o = cVar;
        } else {
            this.f36703e = cVar;
        }
        c10.f36708i = null;
        c10.f36709o = null;
        return c10.f36707e;
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
        a aVar = new a(this.f36702d, this.f36703e);
        this.f36704i.put(aVar, Boolean.FALSE);
        return aVar;
    }

    public int size() {
        return this.f36705o;
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
