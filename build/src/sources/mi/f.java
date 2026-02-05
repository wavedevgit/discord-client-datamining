package mi;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import mi.d0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f implements b0 {

    /* renamed from: d  reason: collision with root package name */
    private transient Collection f38599d;

    /* renamed from: e  reason: collision with root package name */
    private transient Set f38600e;

    /* renamed from: i  reason: collision with root package name */
    private transient Collection f38601i;

    /* renamed from: o  reason: collision with root package name */
    private transient Map f38602o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends d0.b {
        /* JADX INFO: Access modifiers changed from: package-private */
        public a() {
        }

        @Override // mi.d0.b
        b0 b() {
            return f.this;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            return f.this.h();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends AbstractCollection {
        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public void clear() {
            f.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean contains(Object obj) {
            return f.this.c(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            return f.this.j();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public int size() {
            return f.this.size();
        }
    }

    @Override // mi.b0
    public Collection a() {
        Collection collection = this.f38599d;
        if (collection == null) {
            Collection e10 = e();
            this.f38599d = e10;
            return e10;
        }
        return collection;
    }

    @Override // mi.b0
    public Map asMap() {
        Map map = this.f38602o;
        if (map == null) {
            Map d10 = d();
            this.f38602o = d10;
            return d10;
        }
        return map;
    }

    @Override // mi.b0
    public boolean b(Object obj, Object obj2) {
        Collection collection = (Collection) asMap().get(obj);
        if (collection != null && collection.contains(obj2)) {
            return true;
        }
        return false;
    }

    public boolean c(Object obj) {
        for (Collection collection : asMap().values()) {
            if (collection.contains(obj)) {
                return true;
            }
        }
        return false;
    }

    abstract Map d();

    abstract Collection e();

    public boolean equals(Object obj) {
        return d0.a(this, obj);
    }

    abstract Set f();

    abstract Collection g();

    abstract Iterator h();

    public int hashCode() {
        return asMap().hashCode();
    }

    public Set i() {
        Set set = this.f38600e;
        if (set == null) {
            Set f10 = f();
            this.f38600e = f10;
            return f10;
        }
        return set;
    }

    abstract Iterator j();

    @Override // mi.b0
    public boolean remove(Object obj, Object obj2) {
        Collection collection = (Collection) asMap().get(obj);
        if (collection != null && collection.remove(obj2)) {
            return true;
        }
        return false;
    }

    public String toString() {
        return asMap().toString();
    }

    @Override // mi.b0
    public Collection values() {
        Collection collection = this.f38601i;
        if (collection == null) {
            Collection g10 = g();
            this.f38601i = g10;
            return g10;
        }
        return collection;
    }
}
