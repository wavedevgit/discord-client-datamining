package ji;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import ji.d0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f implements b0 {

    /* renamed from: d  reason: collision with root package name */
    private transient Collection f31841d;

    /* renamed from: e  reason: collision with root package name */
    private transient Set f31842e;

    /* renamed from: i  reason: collision with root package name */
    private transient Collection f31843i;

    /* renamed from: o  reason: collision with root package name */
    private transient Map f31844o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends d0.b {
        /* JADX INFO: Access modifiers changed from: package-private */
        public a() {
        }

        @Override // ji.d0.b
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

    @Override // ji.b0
    public Collection a() {
        Collection collection = this.f31841d;
        if (collection == null) {
            Collection e10 = e();
            this.f31841d = e10;
            return e10;
        }
        return collection;
    }

    @Override // ji.b0
    public Map asMap() {
        Map map = this.f31844o;
        if (map == null) {
            Map d10 = d();
            this.f31844o = d10;
            return d10;
        }
        return map;
    }

    @Override // ji.b0
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
        Set set = this.f31842e;
        if (set == null) {
            Set f10 = f();
            this.f31842e = f10;
            return f10;
        }
        return set;
    }

    abstract Iterator j();

    @Override // ji.b0
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

    @Override // ji.b0
    public Collection values() {
        Collection collection = this.f31843i;
        if (collection == null) {
            Collection g10 = g();
            this.f31843i = g10;
            return g10;
        }
        return collection;
    }
}
