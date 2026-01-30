package ji;

import java.io.Serializable;
import java.util.AbstractCollection;
import java.util.Collection;
import java.util.Comparator;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.NavigableMap;
import java.util.NavigableSet;
import java.util.Objects;
import java.util.RandomAccess;
import java.util.Set;
import java.util.SortedMap;
import java.util.SortedSet;
import ji.a0;
import ji.f;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends ji.f implements Serializable {

    /* renamed from: p  reason: collision with root package name */
    private transient Map f32070p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f32071q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends AbstractC0419d {
        b(d dVar) {
            super();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ji.d.AbstractC0419d
        /* renamed from: b */
        public Map.Entry a(Object obj, Object obj2) {
            return a0.d(obj, obj2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends a0.f {

        /* renamed from: i  reason: collision with root package name */
        final transient Map f32072i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a extends a0.c {
            a() {
            }

            @Override // ji.a0.c
            Map b() {
                return c.this;
            }

            @Override // ji.a0.c, java.util.AbstractCollection, java.util.Collection, java.util.Set
            public boolean contains(Object obj) {
                return ji.i.c(c.this.f32072i.entrySet(), obj);
            }

            @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
            public Iterator iterator() {
                return new b();
            }

            @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
            public boolean remove(Object obj) {
                if (!contains(obj)) {
                    return false;
                }
                Map.Entry entry = (Map.Entry) obj;
                Objects.requireNonNull(entry);
                d.this.w(entry.getKey());
                return true;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class b implements Iterator {

            /* renamed from: d  reason: collision with root package name */
            final Iterator f32075d;

            /* renamed from: e  reason: collision with root package name */
            Collection f32076e;

            b() {
                this.f32075d = c.this.f32072i.entrySet().iterator();
            }

            @Override // java.util.Iterator
            /* renamed from: a */
            public Map.Entry next() {
                Map.Entry entry = (Map.Entry) this.f32075d.next();
                this.f32076e = (Collection) entry.getValue();
                return c.this.e(entry);
            }

            @Override // java.util.Iterator
            public boolean hasNext() {
                return this.f32075d.hasNext();
            }

            @Override // java.util.Iterator
            public void remove() {
                boolean z10;
                if (this.f32076e != null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ii.m.p(z10, "no calls to next() since the last call to remove()");
                this.f32075d.remove();
                d.p(d.this, this.f32076e.size());
                this.f32076e.clear();
                this.f32076e = null;
            }
        }

        c(Map map) {
            this.f32072i = map;
        }

        @Override // ji.a0.f
        protected Set a() {
            return new a();
        }

        @Override // java.util.AbstractMap, java.util.Map
        /* renamed from: c */
        public Collection get(Object obj) {
            Collection collection = (Collection) a0.h(this.f32072i, obj);
            if (collection == null) {
                return null;
            }
            return d.this.y(obj, collection);
        }

        @Override // java.util.AbstractMap, java.util.Map
        public void clear() {
            if (this.f32072i == d.this.f32070p) {
                d.this.clear();
            } else {
                w.c(new b());
            }
        }

        @Override // java.util.AbstractMap, java.util.Map
        public boolean containsKey(Object obj) {
            return a0.g(this.f32072i, obj);
        }

        @Override // java.util.AbstractMap, java.util.Map
        /* renamed from: d */
        public Collection remove(Object obj) {
            Collection collection = (Collection) this.f32072i.remove(obj);
            if (collection == null) {
                return null;
            }
            Collection r10 = d.this.r();
            r10.addAll(collection);
            d.p(d.this, collection.size());
            collection.clear();
            return r10;
        }

        Map.Entry e(Map.Entry entry) {
            Object key = entry.getKey();
            return a0.d(key, d.this.y(key, (Collection) entry.getValue()));
        }

        @Override // java.util.AbstractMap, java.util.Map
        public boolean equals(Object obj) {
            if (this != obj && !this.f32072i.equals(obj)) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractMap, java.util.Map
        public int hashCode() {
            return this.f32072i.hashCode();
        }

        @Override // java.util.AbstractMap, java.util.Map
        public Set keySet() {
            return d.this.i();
        }

        @Override // java.util.AbstractMap, java.util.Map
        public int size() {
            return this.f32072i.size();
        }

        @Override // java.util.AbstractMap
        public String toString() {
            return this.f32072i.toString();
        }
    }

    /* renamed from: ji.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class AbstractC0419d implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        final Iterator f32078d;

        /* renamed from: e  reason: collision with root package name */
        Object f32079e = null;

        /* renamed from: i  reason: collision with root package name */
        Collection f32080i = null;

        /* renamed from: o  reason: collision with root package name */
        Iterator f32081o = w.f();

        AbstractC0419d() {
            this.f32078d = d.this.f32070p.entrySet().iterator();
        }

        abstract Object a(Object obj, Object obj2);

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!this.f32078d.hasNext() && !this.f32081o.hasNext()) {
                return false;
            }
            return true;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (!this.f32081o.hasNext()) {
                Map.Entry entry = (Map.Entry) this.f32078d.next();
                this.f32079e = entry.getKey();
                Collection collection = (Collection) entry.getValue();
                this.f32080i = collection;
                this.f32081o = collection.iterator();
            }
            return a(g0.a(this.f32079e), this.f32081o.next());
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f32081o.remove();
            Collection collection = this.f32080i;
            Objects.requireNonNull(collection);
            if (collection.isEmpty()) {
                this.f32078d.remove();
            }
            d.n(d.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class e extends a0.d {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class a implements Iterator {

            /* renamed from: d  reason: collision with root package name */
            Map.Entry f32084d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Iterator f32085e;

            a(Iterator it) {
                this.f32085e = it;
            }

            @Override // java.util.Iterator
            public boolean hasNext() {
                return this.f32085e.hasNext();
            }

            @Override // java.util.Iterator
            public Object next() {
                Map.Entry entry = (Map.Entry) this.f32085e.next();
                this.f32084d = entry;
                return entry.getKey();
            }

            @Override // java.util.Iterator
            public void remove() {
                boolean z10;
                if (this.f32084d != null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ii.m.p(z10, "no calls to next() since the last call to remove()");
                Collection collection = (Collection) this.f32084d.getValue();
                this.f32085e.remove();
                d.p(d.this, collection.size());
                collection.clear();
                this.f32084d = null;
            }
        }

        e(Map map) {
            super(map);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            w.c(iterator());
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean containsAll(Collection collection) {
            return b().keySet().containsAll(collection);
        }

        @Override // java.util.AbstractSet, java.util.Collection, java.util.Set
        public boolean equals(Object obj) {
            if (this != obj && !b().keySet().equals(obj)) {
                return false;
            }
            return true;
        }

        @Override // java.util.AbstractSet, java.util.Collection, java.util.Set
        public int hashCode() {
            return b().keySet().hashCode();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return new a(b().entrySet().iterator());
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean remove(Object obj) {
            int i10;
            Collection collection = (Collection) b().remove(obj);
            if (collection != null) {
                i10 = collection.size();
                collection.clear();
                d.p(d.this, i10);
            } else {
                i10 = 0;
            }
            if (i10 <= 0) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class f extends i implements NavigableMap {
        f(NavigableMap navigableMap) {
            super(navigableMap);
        }

        @Override // java.util.NavigableMap
        public Map.Entry ceilingEntry(Object obj) {
            Map.Entry ceilingEntry = h().ceilingEntry(obj);
            if (ceilingEntry == null) {
                return null;
            }
            return e(ceilingEntry);
        }

        @Override // java.util.NavigableMap
        public Object ceilingKey(Object obj) {
            return h().ceilingKey(obj);
        }

        @Override // java.util.NavigableMap
        public NavigableSet descendingKeySet() {
            return descendingMap().navigableKeySet();
        }

        @Override // java.util.NavigableMap
        public NavigableMap descendingMap() {
            return new f(h().descendingMap());
        }

        @Override // java.util.NavigableMap
        public Map.Entry firstEntry() {
            Map.Entry firstEntry = h().firstEntry();
            if (firstEntry == null) {
                return null;
            }
            return e(firstEntry);
        }

        @Override // java.util.NavigableMap
        public Map.Entry floorEntry(Object obj) {
            Map.Entry floorEntry = h().floorEntry(obj);
            if (floorEntry == null) {
                return null;
            }
            return e(floorEntry);
        }

        @Override // java.util.NavigableMap
        public Object floorKey(Object obj) {
            return h().floorKey(obj);
        }

        @Override // java.util.NavigableMap
        public Map.Entry higherEntry(Object obj) {
            Map.Entry higherEntry = h().higherEntry(obj);
            if (higherEntry == null) {
                return null;
            }
            return e(higherEntry);
        }

        @Override // java.util.NavigableMap
        public Object higherKey(Object obj) {
            return h().higherKey(obj);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ji.d.i
        /* renamed from: i */
        public NavigableSet f() {
            return new g(h());
        }

        @Override // ji.d.i, java.util.SortedMap, java.util.NavigableMap
        /* renamed from: j */
        public NavigableMap headMap(Object obj) {
            return headMap(obj, false);
        }

        @Override // ji.d.i, ji.d.c, java.util.AbstractMap, java.util.Map
        /* renamed from: k */
        public NavigableSet keySet() {
            return (NavigableSet) super.keySet();
        }

        Map.Entry l(Iterator it) {
            if (!it.hasNext()) {
                return null;
            }
            Map.Entry entry = (Map.Entry) it.next();
            Collection r10 = d.this.r();
            r10.addAll((Collection) entry.getValue());
            it.remove();
            return a0.d(entry.getKey(), d.this.x(r10));
        }

        @Override // java.util.NavigableMap
        public Map.Entry lastEntry() {
            Map.Entry lastEntry = h().lastEntry();
            if (lastEntry == null) {
                return null;
            }
            return e(lastEntry);
        }

        @Override // java.util.NavigableMap
        public Map.Entry lowerEntry(Object obj) {
            Map.Entry lowerEntry = h().lowerEntry(obj);
            if (lowerEntry == null) {
                return null;
            }
            return e(lowerEntry);
        }

        @Override // java.util.NavigableMap
        public Object lowerKey(Object obj) {
            return h().lowerKey(obj);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ji.d.i
        /* renamed from: m */
        public NavigableMap h() {
            return (NavigableMap) super.h();
        }

        @Override // ji.d.i, java.util.SortedMap, java.util.NavigableMap
        /* renamed from: n */
        public NavigableMap subMap(Object obj, Object obj2) {
            return subMap(obj, true, obj2, false);
        }

        @Override // java.util.NavigableMap
        public NavigableSet navigableKeySet() {
            return keySet();
        }

        @Override // ji.d.i, java.util.SortedMap, java.util.NavigableMap
        /* renamed from: o */
        public NavigableMap tailMap(Object obj) {
            return tailMap(obj, true);
        }

        @Override // java.util.NavigableMap
        public Map.Entry pollFirstEntry() {
            return l(entrySet().iterator());
        }

        @Override // java.util.NavigableMap
        public Map.Entry pollLastEntry() {
            return l(descendingMap().entrySet().iterator());
        }

        @Override // java.util.NavigableMap
        public NavigableMap headMap(Object obj, boolean z10) {
            return new f(h().headMap(obj, z10));
        }

        @Override // java.util.NavigableMap
        public NavigableMap subMap(Object obj, boolean z10, Object obj2, boolean z11) {
            return new f(h().subMap(obj, z10, obj2, z11));
        }

        @Override // java.util.NavigableMap
        public NavigableMap tailMap(Object obj, boolean z10) {
            return new f(h().tailMap(obj, z10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g extends j implements NavigableSet {
        g(NavigableMap navigableMap) {
            super(navigableMap);
        }

        @Override // java.util.NavigableSet
        public Object ceiling(Object obj) {
            return c().ceilingKey(obj);
        }

        @Override // ji.d.j, java.util.SortedSet, java.util.NavigableSet
        /* renamed from: d */
        public NavigableSet headSet(Object obj) {
            return headSet(obj, false);
        }

        @Override // java.util.NavigableSet
        public Iterator descendingIterator() {
            return descendingSet().iterator();
        }

        @Override // java.util.NavigableSet
        public NavigableSet descendingSet() {
            return new g(c().descendingMap());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ji.d.j
        /* renamed from: e */
        public NavigableMap c() {
            return (NavigableMap) super.c();
        }

        @Override // ji.d.j, java.util.SortedSet, java.util.NavigableSet
        /* renamed from: f */
        public NavigableSet subSet(Object obj, Object obj2) {
            return subSet(obj, true, obj2, false);
        }

        @Override // java.util.NavigableSet
        public Object floor(Object obj) {
            return c().floorKey(obj);
        }

        @Override // ji.d.j, java.util.SortedSet, java.util.NavigableSet
        /* renamed from: g */
        public NavigableSet tailSet(Object obj) {
            return tailSet(obj, true);
        }

        @Override // java.util.NavigableSet
        public Object higher(Object obj) {
            return c().higherKey(obj);
        }

        @Override // java.util.NavigableSet
        public Object lower(Object obj) {
            return c().lowerKey(obj);
        }

        @Override // java.util.NavigableSet
        public Object pollFirst() {
            return w.m(iterator());
        }

        @Override // java.util.NavigableSet
        public Object pollLast() {
            return w.m(descendingIterator());
        }

        @Override // java.util.NavigableSet
        public NavigableSet headSet(Object obj, boolean z10) {
            return new g(c().headMap(obj, z10));
        }

        @Override // java.util.NavigableSet
        public NavigableSet subSet(Object obj, boolean z10, Object obj2, boolean z11) {
            return new g(c().subMap(obj, z10, obj2, z11));
        }

        @Override // java.util.NavigableSet
        public NavigableSet tailSet(Object obj, boolean z10) {
            return new g(c().tailMap(obj, z10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class h extends l implements RandomAccess {
        h(d dVar, Object obj, List list, k kVar) {
            super(obj, list, kVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i extends c implements SortedMap {

        /* renamed from: p  reason: collision with root package name */
        SortedSet f32089p;

        i(SortedMap sortedMap) {
            super(sortedMap);
        }

        @Override // java.util.SortedMap
        public Comparator comparator() {
            return h().comparator();
        }

        SortedSet f() {
            return new j(h());
        }

        @Override // java.util.SortedMap
        public Object firstKey() {
            return h().firstKey();
        }

        @Override // ji.d.c, java.util.AbstractMap, java.util.Map
        /* renamed from: g */
        public SortedSet keySet() {
            SortedSet sortedSet = this.f32089p;
            if (sortedSet == null) {
                SortedSet f10 = f();
                this.f32089p = f10;
                return f10;
            }
            return sortedSet;
        }

        SortedMap h() {
            return (SortedMap) this.f32072i;
        }

        public SortedMap headMap(Object obj) {
            return new i(h().headMap(obj));
        }

        @Override // java.util.SortedMap
        public Object lastKey() {
            return h().lastKey();
        }

        public SortedMap subMap(Object obj, Object obj2) {
            return new i(h().subMap(obj, obj2));
        }

        public SortedMap tailMap(Object obj) {
            return new i(h().tailMap(obj));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j extends e implements SortedSet {
        j(SortedMap sortedMap) {
            super(sortedMap);
        }

        SortedMap c() {
            return (SortedMap) super.b();
        }

        @Override // java.util.SortedSet
        public Comparator comparator() {
            return c().comparator();
        }

        @Override // java.util.SortedSet
        public Object first() {
            return c().firstKey();
        }

        public SortedSet headSet(Object obj) {
            return new j(c().headMap(obj));
        }

        @Override // java.util.SortedSet
        public Object last() {
            return c().lastKey();
        }

        public SortedSet subSet(Object obj, Object obj2) {
            return new j(c().subMap(obj, obj2));
        }

        public SortedSet tailSet(Object obj) {
            return new j(c().tailMap(obj));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public d(Map map) {
        ii.m.d(map.isEmpty());
        this.f32070p = map;
    }

    static /* synthetic */ int m(d dVar) {
        int i10 = dVar.f32071q;
        dVar.f32071q = i10 + 1;
        return i10;
    }

    static /* synthetic */ int n(d dVar) {
        int i10 = dVar.f32071q;
        dVar.f32071q = i10 - 1;
        return i10;
    }

    static /* synthetic */ int o(d dVar, int i10) {
        int i11 = dVar.f32071q + i10;
        dVar.f32071q = i11;
        return i11;
    }

    static /* synthetic */ int p(d dVar, int i10) {
        int i11 = dVar.f32071q - i10;
        dVar.f32071q = i11;
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Iterator v(Collection collection) {
        if (collection instanceof List) {
            return ((List) collection).listIterator();
        }
        return collection.iterator();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w(Object obj) {
        Collection collection = (Collection) a0.i(this.f32070p, obj);
        if (collection != null) {
            int size = collection.size();
            collection.clear();
            this.f32071q -= size;
        }
    }

    @Override // ji.f, ji.b0
    public Collection a() {
        return super.a();
    }

    @Override // ji.b0
    public void clear() {
        for (Collection collection : this.f32070p.values()) {
            collection.clear();
        }
        this.f32070p.clear();
        this.f32071q = 0;
    }

    @Override // ji.f
    Collection e() {
        return new f.a();
    }

    @Override // ji.f
    Collection g() {
        return new f.b();
    }

    @Override // ji.b0
    public Collection get(Object obj) {
        Collection collection = (Collection) this.f32070p.get(obj);
        if (collection == null) {
            collection = s(obj);
        }
        return y(obj, collection);
    }

    @Override // ji.f
    Iterator h() {
        return new b(this);
    }

    @Override // ji.f
    Iterator j() {
        return new a(this);
    }

    @Override // ji.b0
    public boolean put(Object obj, Object obj2) {
        Collection collection = (Collection) this.f32070p.get(obj);
        if (collection == null) {
            Collection s10 = s(obj);
            if (s10.add(obj2)) {
                this.f32071q++;
                this.f32070p.put(obj, s10);
                return true;
            }
            throw new AssertionError("New Collection violated the Collection spec");
        } else if (collection.add(obj2)) {
            this.f32071q++;
            return true;
        } else {
            return false;
        }
    }

    abstract Collection r();

    Collection s(Object obj) {
        return r();
    }

    @Override // ji.b0
    public int size() {
        return this.f32071q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map t() {
        Map map = this.f32070p;
        if (map instanceof NavigableMap) {
            return new f((NavigableMap) this.f32070p);
        }
        if (map instanceof SortedMap) {
            return new i((SortedMap) this.f32070p);
        }
        return new c(this.f32070p);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Set u() {
        Map map = this.f32070p;
        if (map instanceof NavigableMap) {
            return new g((NavigableMap) this.f32070p);
        }
        if (map instanceof SortedMap) {
            return new j((SortedMap) this.f32070p);
        }
        return new e(this.f32070p);
    }

    @Override // ji.f, ji.b0
    public Collection values() {
        return super.values();
    }

    abstract Collection x(Collection collection);

    abstract Collection y(Object obj, Collection collection);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final List z(Object obj, List list, k kVar) {
        if (list instanceof RandomAccess) {
            return new h(this, obj, list, kVar);
        }
        return new l(obj, list, kVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k extends AbstractCollection {

        /* renamed from: d  reason: collision with root package name */
        final Object f32092d;

        /* renamed from: e  reason: collision with root package name */
        Collection f32093e;

        /* renamed from: i  reason: collision with root package name */
        final k f32094i;

        /* renamed from: o  reason: collision with root package name */
        final Collection f32095o;

        k(Object obj, Collection collection, k kVar) {
            Collection d10;
            this.f32092d = obj;
            this.f32093e = collection;
            this.f32094i = kVar;
            if (kVar == null) {
                d10 = null;
            } else {
                d10 = kVar.d();
            }
            this.f32095o = d10;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean add(Object obj) {
            f();
            boolean isEmpty = this.f32093e.isEmpty();
            boolean add = this.f32093e.add(obj);
            if (add) {
                d.m(d.this);
                if (isEmpty) {
                    b();
                }
            }
            return add;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean addAll(Collection collection) {
            if (collection.isEmpty()) {
                return false;
            }
            int size = size();
            boolean addAll = this.f32093e.addAll(collection);
            if (addAll) {
                d.o(d.this, this.f32093e.size() - size);
                if (size == 0) {
                    b();
                }
            }
            return addAll;
        }

        void b() {
            k kVar = this.f32094i;
            if (kVar != null) {
                kVar.b();
            } else {
                d.this.f32070p.put(this.f32092d, this.f32093e);
            }
        }

        k c() {
            return this.f32094i;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public void clear() {
            int size = size();
            if (size == 0) {
                return;
            }
            this.f32093e.clear();
            d.p(d.this, size);
            g();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean contains(Object obj) {
            f();
            return this.f32093e.contains(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean containsAll(Collection collection) {
            f();
            return this.f32093e.containsAll(collection);
        }

        Collection d() {
            return this.f32093e;
        }

        Object e() {
            return this.f32092d;
        }

        @Override // java.util.Collection
        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            f();
            return this.f32093e.equals(obj);
        }

        void f() {
            Collection collection;
            k kVar = this.f32094i;
            if (kVar != null) {
                kVar.f();
                if (this.f32094i.d() != this.f32095o) {
                    throw new ConcurrentModificationException();
                }
            } else if (this.f32093e.isEmpty() && (collection = (Collection) d.this.f32070p.get(this.f32092d)) != null) {
                this.f32093e = collection;
            }
        }

        void g() {
            k kVar = this.f32094i;
            if (kVar != null) {
                kVar.g();
            } else if (this.f32093e.isEmpty()) {
                d.this.f32070p.remove(this.f32092d);
            }
        }

        @Override // java.util.Collection
        public int hashCode() {
            f();
            return this.f32093e.hashCode();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            f();
            return new a();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean remove(Object obj) {
            f();
            boolean remove = this.f32093e.remove(obj);
            if (remove) {
                d.n(d.this);
                g();
            }
            return remove;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean removeAll(Collection collection) {
            if (collection.isEmpty()) {
                return false;
            }
            int size = size();
            boolean removeAll = this.f32093e.removeAll(collection);
            if (removeAll) {
                d.o(d.this, this.f32093e.size() - size);
                g();
            }
            return removeAll;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean retainAll(Collection collection) {
            ii.m.j(collection);
            int size = size();
            boolean retainAll = this.f32093e.retainAll(collection);
            if (retainAll) {
                d.o(d.this, this.f32093e.size() - size);
                g();
            }
            return retainAll;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public int size() {
            f();
            return this.f32093e.size();
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            f();
            return this.f32093e.toString();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class a implements Iterator {

            /* renamed from: d  reason: collision with root package name */
            final Iterator f32097d;

            /* renamed from: e  reason: collision with root package name */
            final Collection f32098e;

            a() {
                Collection collection = k.this.f32093e;
                this.f32098e = collection;
                this.f32097d = d.v(collection);
            }

            Iterator a() {
                b();
                return this.f32097d;
            }

            void b() {
                k.this.f();
                if (k.this.f32093e == this.f32098e) {
                    return;
                }
                throw new ConcurrentModificationException();
            }

            @Override // java.util.Iterator
            public boolean hasNext() {
                b();
                return this.f32097d.hasNext();
            }

            @Override // java.util.Iterator
            public Object next() {
                b();
                return this.f32097d.next();
            }

            @Override // java.util.Iterator
            public void remove() {
                this.f32097d.remove();
                d.n(d.this);
                k.this.g();
            }

            a(Iterator it) {
                this.f32098e = k.this.f32093e;
                this.f32097d = it;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class l extends k implements List {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        private class a extends k.a implements ListIterator {
            a() {
                super();
            }

            private ListIterator c() {
                return (ListIterator) a();
            }

            @Override // java.util.ListIterator
            public void add(Object obj) {
                boolean isEmpty = l.this.isEmpty();
                c().add(obj);
                d.m(d.this);
                if (isEmpty) {
                    l.this.b();
                }
            }

            @Override // java.util.ListIterator
            public boolean hasPrevious() {
                return c().hasPrevious();
            }

            @Override // java.util.ListIterator
            public int nextIndex() {
                return c().nextIndex();
            }

            @Override // java.util.ListIterator
            public Object previous() {
                return c().previous();
            }

            @Override // java.util.ListIterator
            public int previousIndex() {
                return c().previousIndex();
            }

            @Override // java.util.ListIterator
            public void set(Object obj) {
                c().set(obj);
            }

            public a(int i10) {
                super(l.this.h().listIterator(i10));
            }
        }

        l(Object obj, List list, k kVar) {
            super(obj, list, kVar);
        }

        @Override // java.util.List
        public void add(int i10, Object obj) {
            f();
            boolean isEmpty = d().isEmpty();
            h().add(i10, obj);
            d.m(d.this);
            if (isEmpty) {
                b();
            }
        }

        @Override // java.util.List
        public boolean addAll(int i10, Collection collection) {
            if (collection.isEmpty()) {
                return false;
            }
            int size = size();
            boolean addAll = h().addAll(i10, collection);
            if (addAll) {
                d.o(d.this, d().size() - size);
                if (size == 0) {
                    b();
                }
            }
            return addAll;
        }

        @Override // java.util.List
        public Object get(int i10) {
            f();
            return h().get(i10);
        }

        List h() {
            return (List) d();
        }

        @Override // java.util.List
        public int indexOf(Object obj) {
            f();
            return h().indexOf(obj);
        }

        @Override // java.util.List
        public int lastIndexOf(Object obj) {
            f();
            return h().lastIndexOf(obj);
        }

        @Override // java.util.List
        public ListIterator listIterator() {
            f();
            return new a();
        }

        @Override // java.util.List
        public Object remove(int i10) {
            f();
            Object remove = h().remove(i10);
            d.n(d.this);
            g();
            return remove;
        }

        @Override // java.util.List
        public Object set(int i10, Object obj) {
            f();
            return h().set(i10, obj);
        }

        @Override // java.util.List
        public List subList(int i10, int i11) {
            k c10;
            f();
            d dVar = d.this;
            Object e10 = e();
            List subList = h().subList(i10, i11);
            if (c() == null) {
                c10 = this;
            } else {
                c10 = c();
            }
            return dVar.z(e10, subList, c10);
        }

        @Override // java.util.List
        public ListIterator listIterator(int i10) {
            f();
            return new a(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AbstractC0419d {
        a(d dVar) {
            super();
        }

        @Override // ji.d.AbstractC0419d
        Object a(Object obj, Object obj2) {
            return obj2;
        }
    }
}
