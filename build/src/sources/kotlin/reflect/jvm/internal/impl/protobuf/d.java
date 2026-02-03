package kotlin.reflect.jvm.internal.impl.protobuf;

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
import kotlin.reflect.jvm.internal.impl.protobuf.FieldSet;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends AbstractMap {

    /* renamed from: d  reason: collision with root package name */
    private final int f34468d;

    /* renamed from: e  reason: collision with root package name */
    private List f34469e;

    /* renamed from: i  reason: collision with root package name */
    private Map f34470i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f34471o;

    /* renamed from: p  reason: collision with root package name */
    private volatile e f34472p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a extends d {
        a(int i10) {
            super(i10, null);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.d
        public void m() {
            if (!l()) {
                for (int i10 = 0; i10 < i(); i10++) {
                    Map.Entry h10 = h(i10);
                    if (((FieldSet.FieldDescriptorLite) h10.getKey()).isRepeated()) {
                        h10.setValue(Collections.unmodifiableList((List) h10.getValue()));
                    }
                }
                for (Map.Entry entry : j()) {
                    if (((FieldSet.FieldDescriptorLite) entry.getKey()).isRepeated()) {
                        entry.setValue(Collections.unmodifiableList((List) entry.getValue()));
                    }
                }
            }
            super.m();
        }

        @Override // java.util.AbstractMap, java.util.Map
        public /* bridge */ /* synthetic */ Object put(Object obj, Object obj2) {
            return super.o((FieldSet.FieldDescriptorLite) obj, obj2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterator f34473a = new a();

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f34474b = new C0445b();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
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

        /* renamed from: kotlin.reflect.jvm.internal.impl.protobuf.d$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class C0445b implements Iterable {
            C0445b() {
            }

            @Override // java.lang.Iterable
            public Iterator iterator() {
                return b.f34473a;
            }
        }

        static Iterable b() {
            return f34474b;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class c implements Comparable, Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        private final Comparable f34475d;

        /* renamed from: e  reason: collision with root package name */
        private Object f34476e;

        c(d dVar, Map.Entry entry) {
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
        public int compareTo(c cVar) {
            return getKey().compareTo(cVar.getKey());
        }

        @Override // java.util.Map.Entry
        /* renamed from: e */
        public Comparable getKey() {
            return this.f34475d;
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
            if (d(this.f34475d, entry.getKey()) && d(this.f34476e, entry.getValue())) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f34476e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Comparable comparable = this.f34475d;
            int i10 = 0;
            if (comparable == null) {
                hashCode = 0;
            } else {
                hashCode = comparable.hashCode();
            }
            Object obj = this.f34476e;
            if (obj != null) {
                i10 = obj.hashCode();
            }
            return hashCode ^ i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            d.this.f();
            Object obj2 = this.f34476e;
            this.f34476e = obj;
            return obj2;
        }

        public String toString() {
            String valueOf = String.valueOf(this.f34475d);
            String valueOf2 = String.valueOf(this.f34476e);
            StringBuilder sb2 = new StringBuilder(valueOf.length() + 1 + valueOf2.length());
            sb2.append(valueOf);
            sb2.append("=");
            sb2.append(valueOf2);
            return sb2.toString();
        }

        c(Comparable comparable, Object obj) {
            this.f34475d = comparable;
            this.f34476e = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class e extends AbstractSet {
        private e() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        /* renamed from: b */
        public boolean add(Map.Entry entry) {
            if (!contains(entry)) {
                d.this.o((Comparable) entry.getKey(), entry.getValue());
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            d.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            Map.Entry entry = (Map.Entry) obj;
            Object obj2 = d.this.get(entry.getKey());
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
            return new C0446d(d.this, null);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean remove(Object obj) {
            Map.Entry entry = (Map.Entry) obj;
            if (contains(entry)) {
                d.this.remove(entry.getKey());
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return d.this.size();
        }

        /* synthetic */ e(d dVar, a aVar) {
            this();
        }
    }

    /* synthetic */ d(int i10, a aVar) {
        this(i10);
    }

    private int e(Comparable comparable) {
        int i10;
        int size = this.f34469e.size();
        int i11 = size - 1;
        if (i11 >= 0) {
            int compareTo = comparable.compareTo(((c) this.f34469e.get(i11)).getKey());
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
            int compareTo2 = comparable.compareTo(((c) this.f34469e.get(i13)).getKey());
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
    public void f() {
        if (!this.f34471o) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    private void g() {
        f();
        if (this.f34469e.isEmpty() && !(this.f34469e instanceof ArrayList)) {
            this.f34469e = new ArrayList(this.f34468d);
        }
    }

    private SortedMap k() {
        f();
        if (this.f34470i.isEmpty() && !(this.f34470i instanceof TreeMap)) {
            this.f34470i = new TreeMap();
        }
        return (SortedMap) this.f34470i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d n(int i10) {
        return new a(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object p(int i10) {
        f();
        Object value = ((c) this.f34469e.remove(i10)).getValue();
        if (!this.f34470i.isEmpty()) {
            Iterator it = k().entrySet().iterator();
            this.f34469e.add(new c(this, (Map.Entry) it.next()));
            it.remove();
        }
        return value;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        f();
        if (!this.f34469e.isEmpty()) {
            this.f34469e.clear();
        }
        if (!this.f34470i.isEmpty()) {
            this.f34470i.clear();
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public boolean containsKey(Object obj) {
        Comparable comparable = (Comparable) obj;
        if (e(comparable) < 0 && !this.f34470i.containsKey(comparable)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        if (this.f34472p == null) {
            this.f34472p = new e(this, null);
        }
        return this.f34472p;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object get(Object obj) {
        Comparable comparable = (Comparable) obj;
        int e10 = e(comparable);
        if (e10 >= 0) {
            return ((c) this.f34469e.get(e10)).getValue();
        }
        return this.f34470i.get(comparable);
    }

    public Map.Entry h(int i10) {
        return (Map.Entry) this.f34469e.get(i10);
    }

    public int i() {
        return this.f34469e.size();
    }

    public Iterable j() {
        if (this.f34470i.isEmpty()) {
            return b.b();
        }
        return this.f34470i.entrySet();
    }

    public boolean l() {
        return this.f34471o;
    }

    public void m() {
        Map unmodifiableMap;
        if (!this.f34471o) {
            if (this.f34470i.isEmpty()) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(this.f34470i);
            }
            this.f34470i = unmodifiableMap;
            this.f34471o = true;
        }
    }

    public Object o(Comparable comparable, Object obj) {
        f();
        int e10 = e(comparable);
        if (e10 >= 0) {
            return ((c) this.f34469e.get(e10)).setValue(obj);
        }
        g();
        int i10 = -(e10 + 1);
        if (i10 >= this.f34468d) {
            return k().put(comparable, obj);
        }
        int size = this.f34469e.size();
        int i11 = this.f34468d;
        if (size == i11) {
            c cVar = (c) this.f34469e.remove(i11 - 1);
            k().put(cVar.getKey(), cVar.getValue());
        }
        this.f34469e.add(i10, new c(comparable, obj));
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        f();
        Comparable comparable = (Comparable) obj;
        int e10 = e(comparable);
        if (e10 >= 0) {
            return p(e10);
        }
        if (this.f34470i.isEmpty()) {
            return null;
        }
        return this.f34470i.remove(comparable);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        return this.f34469e.size() + this.f34470i.size();
    }

    /* renamed from: kotlin.reflect.jvm.internal.impl.protobuf.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class C0446d implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f34478d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f34479e;

        /* renamed from: i  reason: collision with root package name */
        private Iterator f34480i;

        private C0446d() {
            this.f34478d = -1;
        }

        private Iterator a() {
            if (this.f34480i == null) {
                this.f34480i = d.this.f34470i.entrySet().iterator();
            }
            return this.f34480i;
        }

        @Override // java.util.Iterator
        /* renamed from: b */
        public Map.Entry next() {
            this.f34479e = true;
            int i10 = this.f34478d + 1;
            this.f34478d = i10;
            if (i10 < d.this.f34469e.size()) {
                return (Map.Entry) d.this.f34469e.get(this.f34478d);
            }
            return (Map.Entry) a().next();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f34478d + 1 < d.this.f34469e.size() || a().hasNext()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            if (this.f34479e) {
                this.f34479e = false;
                d.this.f();
                if (this.f34478d < d.this.f34469e.size()) {
                    d dVar = d.this;
                    int i10 = this.f34478d;
                    this.f34478d = i10 - 1;
                    dVar.p(i10);
                    return;
                }
                a().remove();
                return;
            }
            throw new IllegalStateException("remove() was called before next()");
        }

        /* synthetic */ C0446d(d dVar, a aVar) {
            this();
        }
    }

    private d(int i10) {
        this.f34468d = i10;
        this.f34469e = Collections.EMPTY_LIST;
        this.f34470i = Collections.EMPTY_MAP;
    }
}
