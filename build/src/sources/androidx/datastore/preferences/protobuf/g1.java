package androidx.datastore.preferences.protobuf;

import java.util.AbstractMap;
import java.util.AbstractSet;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.SortedMap;
import java.util.TreeMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g1 extends AbstractMap {

    /* renamed from: d  reason: collision with root package name */
    private final int f4058d;

    /* renamed from: e  reason: collision with root package name */
    private List f4059e;

    /* renamed from: i  reason: collision with root package name */
    private Map f4060i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f4061o;

    /* renamed from: p  reason: collision with root package name */
    private volatile g f4062p;

    /* renamed from: q  reason: collision with root package name */
    private Map f4063q;

    /* renamed from: r  reason: collision with root package name */
    private volatile c f4064r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends g1 {
        a(int i10) {
            super(i10, null);
        }

        @Override // androidx.datastore.preferences.protobuf.g1
        public void p() {
            if (!o()) {
                if (k() <= 0) {
                    Iterator it = m().iterator();
                    if (it.hasNext()) {
                        android.support.v4.media.session.b.a(((Map.Entry) it.next()).getKey());
                        throw null;
                    }
                } else {
                    android.support.v4.media.session.b.a(j(0).getKey());
                    throw null;
                }
            }
            super.p();
        }

        @Override // java.util.AbstractMap, java.util.Map
        public /* bridge */ /* synthetic */ Object put(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            return super.r(null, obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class c extends g {
        private c() {
            super(g1.this, null);
        }

        @Override // androidx.datastore.preferences.protobuf.g1.g, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return new b(g1.this, null);
        }

        /* synthetic */ c(g1 g1Var, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterator f4069a = new a();

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f4070b = new b();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class a implements Iterator {
            a() {
            }

            @Override // java.util.Iterator
            public boolean hasNext() {
                return false;
            }

            @Override // java.util.Iterator
            public Object next() {
                throw new NoSuchElementException();
            }

            @Override // java.util.Iterator
            public void remove() {
                throw new UnsupportedOperationException();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class b implements Iterable {
            b() {
            }

            @Override // java.lang.Iterable
            public Iterator iterator() {
                return d.f4069a;
            }
        }

        static Iterable b() {
            return f4070b;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e implements Map.Entry, Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final Comparable f4071d;

        /* renamed from: e  reason: collision with root package name */
        private Object f4072e;

        e(g1 g1Var, Map.Entry entry) {
            this((Comparable) entry.getKey(), entry.getValue());
        }

        private boolean d(Object obj, Object obj2) {
            if (obj == null) {
                if (obj2 == null) {
                    return true;
                }
                return false;
            }
            return obj.equals(obj2);
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(e eVar) {
            return getKey().compareTo(eVar.getKey());
        }

        @Override // java.util.Map.Entry
        /* renamed from: e */
        public Comparable getKey() {
            return this.f4071d;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (!(obj instanceof Map.Entry)) {
                return false;
            }
            Map.Entry entry = (Map.Entry) obj;
            if (d(this.f4071d, entry.getKey()) && d(this.f4072e, entry.getValue())) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f4072e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Comparable comparable = this.f4071d;
            int i10 = 0;
            if (comparable == null) {
                hashCode = 0;
            } else {
                hashCode = comparable.hashCode();
            }
            Object obj = this.f4072e;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode ^ i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            g1.this.g();
            Object obj2 = this.f4072e;
            this.f4072e = obj;
            return obj2;
        }

        public String toString() {
            return this.f4071d + "=" + this.f4072e;
        }

        e(Comparable comparable, Object obj) {
            this.f4071d = comparable;
            this.f4072e = obj;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g extends AbstractSet {
        private g() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        /* renamed from: b */
        public boolean add(Map.Entry entry) {
            if (!contains(entry)) {
                g1.this.r((Comparable) entry.getKey(), entry.getValue());
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            g1.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            Map.Entry entry = (Map.Entry) obj;
            Object obj2 = g1.this.get(entry.getKey());
            Object value = entry.getValue();
            if (obj2 != value) {
                if (obj2 == null || !obj2.equals(value)) {
                    return false;
                }
                return true;
            }
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return new f(g1.this, null);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean remove(Object obj) {
            Map.Entry entry = (Map.Entry) obj;
            if (contains(entry)) {
                g1.this.remove(entry.getKey());
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return g1.this.size();
        }

        /* synthetic */ g(g1 g1Var, a aVar) {
            this();
        }
    }

    /* synthetic */ g1(int i10, a aVar) {
        this(i10);
    }

    private int f(Comparable comparable) {
        int i10;
        int size = this.f4059e.size();
        int i11 = size - 1;
        if (i11 >= 0) {
            int compareTo = comparable.compareTo(((e) this.f4059e.get(i11)).getKey());
            if (compareTo > 0) {
                i10 = size + 1;
                return -i10;
            } else if (compareTo == 0) {
                return i11;
            }
        }
        int i12 = 0;
        while (i12 <= i11) {
            int i13 = (i12 + i11) / 2;
            int compareTo2 = comparable.compareTo(((e) this.f4059e.get(i13)).getKey());
            if (compareTo2 < 0) {
                i11 = i13 - 1;
            } else if (compareTo2 > 0) {
                i12 = i13 + 1;
            } else {
                return i13;
            }
        }
        i10 = i12 + 1;
        return -i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g() {
        if (!this.f4061o) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private void i() {
        g();
        if (this.f4059e.isEmpty() && !(this.f4059e instanceof ArrayList)) {
            this.f4059e = new ArrayList(this.f4058d);
        }
    }

    private SortedMap n() {
        g();
        if (this.f4060i.isEmpty() && !(this.f4060i instanceof TreeMap)) {
            TreeMap treeMap = new TreeMap();
            this.f4060i = treeMap;
            this.f4063q = treeMap.descendingMap();
        }
        return (SortedMap) this.f4060i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g1 q(int i10) {
        return new a(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object s(int i10) {
        g();
        Object value = ((e) this.f4059e.remove(i10)).getValue();
        if (!this.f4060i.isEmpty()) {
            Iterator it = n().entrySet().iterator();
            this.f4059e.add(new e(this, (Map.Entry) it.next()));
            it.remove();
        }
        return value;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        g();
        if (!this.f4059e.isEmpty()) {
            this.f4059e.clear();
        }
        if (!this.f4060i.isEmpty()) {
            this.f4060i.clear();
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public boolean containsKey(Object obj) {
        Comparable comparable = (Comparable) obj;
        if (f(comparable) < 0 && !this.f4060i.containsKey(comparable)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        if (this.f4062p == null) {
            this.f4062p = new g(this, null);
        }
        return this.f4062p;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g1)) {
            return super.equals(obj);
        }
        g1 g1Var = (g1) obj;
        int size = size();
        if (size != g1Var.size()) {
            return false;
        }
        int k10 = k();
        if (k10 != g1Var.k()) {
            return entrySet().equals(g1Var.entrySet());
        }
        for (int i10 = 0; i10 < k10; i10++) {
            if (!j(i10).equals(g1Var.j(i10))) {
                return false;
            }
        }
        if (k10 == size) {
            return true;
        }
        return this.f4060i.equals(g1Var.f4060i);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object get(Object obj) {
        Comparable comparable = (Comparable) obj;
        int f10 = f(comparable);
        if (f10 >= 0) {
            return ((e) this.f4059e.get(f10)).getValue();
        }
        return this.f4060i.get(comparable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set h() {
        if (this.f4064r == null) {
            this.f4064r = new c(this, null);
        }
        return this.f4064r;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int hashCode() {
        int k10 = k();
        int i10 = 0;
        for (int i11 = 0; i11 < k10; i11++) {
            i10 += ((e) this.f4059e.get(i11)).hashCode();
        }
        if (l() > 0) {
            return i10 + this.f4060i.hashCode();
        }
        return i10;
    }

    public Map.Entry j(int i10) {
        return (Map.Entry) this.f4059e.get(i10);
    }

    public int k() {
        return this.f4059e.size();
    }

    public int l() {
        return this.f4060i.size();
    }

    public Iterable m() {
        if (this.f4060i.isEmpty()) {
            return d.b();
        }
        return this.f4060i.entrySet();
    }

    public boolean o() {
        return this.f4061o;
    }

    public void p() {
        Map unmodifiableMap;
        Map unmodifiableMap2;
        if (!this.f4061o) {
            if (this.f4060i.isEmpty()) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(this.f4060i);
            }
            this.f4060i = unmodifiableMap;
            if (this.f4063q.isEmpty()) {
                unmodifiableMap2 = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap2 = Collections.unmodifiableMap(this.f4063q);
            }
            this.f4063q = unmodifiableMap2;
            this.f4061o = true;
        }
    }

    public Object r(Comparable comparable, Object obj) {
        g();
        int f10 = f(comparable);
        if (f10 >= 0) {
            return ((e) this.f4059e.get(f10)).setValue(obj);
        }
        i();
        int i10 = -(f10 + 1);
        if (i10 >= this.f4058d) {
            return n().put(comparable, obj);
        }
        int size = this.f4059e.size();
        int i11 = this.f4058d;
        if (size == i11) {
            e eVar = (e) this.f4059e.remove(i11 - 1);
            n().put(eVar.getKey(), eVar.getValue());
        }
        this.f4059e.add(i10, new e(comparable, obj));
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        g();
        Comparable comparable = (Comparable) obj;
        int f10 = f(comparable);
        if (f10 >= 0) {
            return s(f10);
        }
        if (this.f4060i.isEmpty()) {
            return null;
        }
        return this.f4060i.remove(comparable);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        return this.f4059e.size() + this.f4060i.size();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f4065d;

        /* renamed from: e  reason: collision with root package name */
        private Iterator f4066e;

        private b() {
            this.f4065d = g1.this.f4059e.size();
        }

        private Iterator a() {
            if (this.f4066e == null) {
                this.f4066e = g1.this.f4063q.entrySet().iterator();
            }
            return this.f4066e;
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            if (!a().hasNext()) {
                List list = g1.this.f4059e;
                int i10 = this.f4065d - 1;
                this.f4065d = i10;
                return (Map.Entry) list.get(i10);
            }
            return (Map.Entry) a().next();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            int i10 = this.f4065d;
            if ((i10 > 0 && i10 <= g1.this.f4059e.size()) || a().hasNext()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }

        /* synthetic */ b(g1 g1Var, a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f4074d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f4075e;

        /* renamed from: i  reason: collision with root package name */
        private Iterator f4076i;

        private f() {
            this.f4074d = -1;
        }

        private Iterator a() {
            if (this.f4076i == null) {
                this.f4076i = g1.this.f4060i.entrySet().iterator();
            }
            return this.f4076i;
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            this.f4075e = true;
            int i10 = this.f4074d + 1;
            this.f4074d = i10;
            if (i10 < g1.this.f4059e.size()) {
                return (Map.Entry) g1.this.f4059e.get(this.f4074d);
            }
            return (Map.Entry) a().next();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f4074d + 1 < g1.this.f4059e.size() || (!g1.this.f4060i.isEmpty() && a().hasNext())) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            if (this.f4075e) {
                this.f4075e = false;
                g1.this.g();
                if (this.f4074d < g1.this.f4059e.size()) {
                    g1 g1Var = g1.this;
                    int i10 = this.f4074d;
                    this.f4074d = i10 - 1;
                    g1Var.s(i10);
                    return;
                }
                a().remove();
                return;
            }
            throw new IllegalStateException("remove() was called before next()");
        }

        /* synthetic */ f(g1 g1Var, a aVar) {
            this();
        }
    }

    private g1(int i10) {
        this.f4058d = i10;
        this.f4059e = Collections.EMPTY_LIST;
        Map map = Collections.EMPTY_MAP;
        this.f4060i = map;
        this.f4063q = map;
    }
}
