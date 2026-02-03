package ji;

import java.util.AbstractCollection;
import java.util.AbstractMap;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.IdentityHashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import ji.q0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends s0 {
        a(Iterator it) {
            super(it);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ji.s0
        /* renamed from: b */
        public Object a(Map.Entry entry) {
            return entry.getValue();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b implements ii.f {

        /* renamed from: d  reason: collision with root package name */
        public static final b f31584d = new a("KEY", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f31585e = new C0418b("VALUE", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f31586i = a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        enum a extends b {
            a(String str, int i10) {
                super(str, i10, null);
            }

            @Override // ii.f
            /* renamed from: d */
            public Object apply(Map.Entry entry) {
                return entry.getKey();
            }
        }

        /* renamed from: ji.a0$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        enum C0418b extends b {
            C0418b(String str, int i10) {
                super(str, i10, null);
            }

            @Override // ii.f
            /* renamed from: d */
            public Object apply(Map.Entry entry) {
                return entry.getValue();
            }
        }

        private b(String str, int i10) {
        }

        private static /* synthetic */ b[] a() {
            return new b[]{f31584d, f31585e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f31586i.clone();
        }

        /* synthetic */ b(String str, int i10, z zVar) {
            this(str, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c extends q0.d {
        abstract Map b();

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            b().clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public abstract boolean contains(Object obj);

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean isEmpty() {
            return b().isEmpty();
        }

        @Override // ji.q0.d, java.util.AbstractSet, java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean removeAll(Collection collection) {
            try {
                return super.removeAll((Collection) ii.m.j(collection));
            } catch (UnsupportedOperationException unused) {
                return q0.j(this, collection.iterator());
            }
        }

        @Override // ji.q0.d, java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean retainAll(Collection collection) {
            try {
                return super.retainAll((Collection) ii.m.j(collection));
            } catch (UnsupportedOperationException unused) {
                HashSet g10 = q0.g(collection.size());
                for (Object obj : collection) {
                    if (contains(obj) && (obj instanceof Map.Entry)) {
                        g10.add(((Map.Entry) obj).getKey());
                    }
                }
                return b().keySet().retainAll(g10);
            }
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return b().size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends q0.d {

        /* renamed from: d  reason: collision with root package name */
        final Map f31587d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(Map map) {
            this.f31587d = (Map) ii.m.j(map);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public Map b() {
            return this.f31587d;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            return b().containsKey(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean isEmpty() {
            return b().isEmpty();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return b().size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends AbstractCollection {

        /* renamed from: d  reason: collision with root package name */
        final Map f31588d;

        e(Map map) {
            this.f31588d = (Map) ii.m.j(map);
        }

        final Map b() {
            return this.f31588d;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public void clear() {
            b().clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean contains(Object obj) {
            return b().containsValue(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean isEmpty() {
            return b().isEmpty();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            return a0.l(b().entrySet().iterator());
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean remove(Object obj) {
            try {
                return super.remove(obj);
            } catch (UnsupportedOperationException unused) {
                for (Map.Entry entry : b().entrySet()) {
                    if (ii.j.a(obj, entry.getValue())) {
                        b().remove(entry.getKey());
                        return true;
                    }
                }
                return false;
            }
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean removeAll(Collection collection) {
            try {
                return super.removeAll((Collection) ii.m.j(collection));
            } catch (UnsupportedOperationException unused) {
                HashSet f10 = q0.f();
                for (Map.Entry entry : b().entrySet()) {
                    if (collection.contains(entry.getValue())) {
                        f10.add(entry.getKey());
                    }
                }
                return b().keySet().removeAll(f10);
            }
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean retainAll(Collection collection) {
            try {
                return super.retainAll((Collection) ii.m.j(collection));
            } catch (UnsupportedOperationException unused) {
                HashSet f10 = q0.f();
                for (Map.Entry entry : b().entrySet()) {
                    if (collection.contains(entry.getValue())) {
                        f10.add(entry.getKey());
                    }
                }
                return b().keySet().retainAll(f10);
            }
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public int size() {
            return b().size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f extends AbstractMap {

        /* renamed from: d  reason: collision with root package name */
        private transient Set f31589d;

        /* renamed from: e  reason: collision with root package name */
        private transient Collection f31590e;

        abstract Set a();

        Collection b() {
            return new e(this);
        }

        @Override // java.util.AbstractMap, java.util.Map
        public Set entrySet() {
            Set set = this.f31589d;
            if (set == null) {
                Set a10 = a();
                this.f31589d = a10;
                return a10;
            }
            return set;
        }

        @Override // java.util.AbstractMap, java.util.Map
        public Collection values() {
            Collection collection = this.f31590e;
            if (collection == null) {
                Collection b10 = b();
                this.f31590e = b10;
                return b10;
            }
            return collection;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(int i10) {
        if (i10 < 3) {
            h.b(i10, "expectedSize");
            return i10 + 1;
        } else if (i10 < 1073741824) {
            return (int) ((i10 / 0.75f) + 1.0f);
        } else {
            return Integer.MAX_VALUE;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(Map map, Object obj) {
        return w.d(l(map.entrySet().iterator()), obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(Map map, Object obj) {
        if (map == obj) {
            return true;
        }
        if (obj instanceof Map) {
            return map.entrySet().equals(((Map) obj).entrySet());
        }
        return false;
    }

    public static Map.Entry d(Object obj, Object obj2) {
        return new r(obj, obj2);
    }

    public static HashMap e(int i10) {
        return new HashMap(a(i10));
    }

    public static IdentityHashMap f() {
        return new IdentityHashMap();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean g(Map map, Object obj) {
        ii.m.j(map);
        try {
            return map.containsKey(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object h(Map map, Object obj) {
        ii.m.j(map);
        try {
            return map.get(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object i(Map map, Object obj) {
        ii.m.j(map);
        try {
            return map.remove(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String j(Map map) {
        StringBuilder b10 = i.b(map.size());
        b10.append('{');
        boolean z10 = true;
        for (Map.Entry entry : map.entrySet()) {
            if (!z10) {
                b10.append(", ");
            }
            b10.append(entry.getKey());
            b10.append('=');
            b10.append(entry.getValue());
            z10 = false;
        }
        b10.append('}');
        return b10.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ii.f k() {
        return b.f31585e;
    }

    static Iterator l(Iterator it) {
        return new a(it);
    }
}
