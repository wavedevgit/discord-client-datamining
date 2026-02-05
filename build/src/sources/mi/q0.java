package mi;

import java.util.AbstractSet;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.SortedSet;
import mi.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends e {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Set f38668d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Set f38669e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: mi.q0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class C0503a extends mi.b {

            /* renamed from: i  reason: collision with root package name */
            final Iterator f38670i;

            C0503a() {
                this.f38670i = a.this.f38668d.iterator();
            }

            @Override // mi.b
            protected Object a() {
                while (this.f38670i.hasNext()) {
                    Object next = this.f38670i.next();
                    if (a.this.f38669e.contains(next)) {
                        return next;
                    }
                }
                return b();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Set set, Set set2) {
            super(null);
            this.f38668d = set;
            this.f38669e = set2;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        /* renamed from: b */
        public t0 iterator() {
            return new C0503a();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            if (this.f38668d.contains(obj) && this.f38669e.contains(obj)) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean containsAll(Collection collection) {
            if (this.f38668d.containsAll(collection) && this.f38669e.containsAll(collection)) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean isEmpty() {
            return Collections.disjoint(this.f38669e, this.f38668d);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            int i10 = 0;
            for (Object obj : this.f38668d) {
                if (this.f38669e.contains(obj)) {
                    i10++;
                }
            }
            return i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends i.a implements Set {
        b(Set set, li.n nVar) {
            super(set, nVar);
        }

        @Override // java.util.Collection, java.util.Set
        public boolean equals(Object obj) {
            return q0.a(this, obj);
        }

        @Override // java.util.Collection, java.util.Set
        public int hashCode() {
            return q0.d(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends b implements SortedSet {
        c(SortedSet sortedSet, li.n nVar) {
            super(sortedSet, nVar);
        }

        @Override // java.util.SortedSet
        public Comparator comparator() {
            return ((SortedSet) this.f38608d).comparator();
        }

        @Override // java.util.SortedSet
        public Object first() {
            return w.h(this.f38608d.iterator(), this.f38609e);
        }

        @Override // java.util.SortedSet
        public SortedSet headSet(Object obj) {
            return new c(((SortedSet) this.f38608d).headSet(obj), this.f38609e);
        }

        @Override // java.util.SortedSet
        public Object last() {
            SortedSet sortedSet = (SortedSet) this.f38608d;
            while (true) {
                Object last = sortedSet.last();
                if (this.f38609e.apply(last)) {
                    return last;
                }
                sortedSet = sortedSet.headSet(last);
            }
        }

        @Override // java.util.SortedSet
        public SortedSet subSet(Object obj, Object obj2) {
            return new c(((SortedSet) this.f38608d).subSet(obj, obj2), this.f38609e);
        }

        @Override // java.util.SortedSet
        public SortedSet tailSet(Object obj) {
            return new c(((SortedSet) this.f38608d).tailSet(obj), this.f38609e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static abstract class d extends AbstractSet {
        @Override // java.util.AbstractSet, java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean removeAll(Collection collection) {
            return q0.i(this, collection);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean retainAll(Collection collection) {
            return super.retainAll((Collection) li.m.j(collection));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class e extends AbstractSet {
        /* synthetic */ e(p0 p0Var) {
            this();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public final boolean add(Object obj) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public final boolean addAll(Collection collection) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public final void clear() {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public final boolean remove(Object obj) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.AbstractSet, java.util.AbstractCollection, java.util.Collection, java.util.Set
        public final boolean removeAll(Collection collection) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public final boolean retainAll(Collection collection) {
            throw new UnsupportedOperationException();
        }

        private e() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(Set set, Object obj) {
        if (set == obj) {
            return true;
        }
        if (obj instanceof Set) {
            Set set2 = (Set) obj;
            try {
                if (set.size() == set2.size()) {
                    if (set.containsAll(set2)) {
                        return true;
                    }
                }
            } catch (ClassCastException | NullPointerException unused) {
            }
        }
        return false;
    }

    public static Set b(Set set, li.n nVar) {
        if (set instanceof SortedSet) {
            return c((SortedSet) set, nVar);
        }
        if (set instanceof b) {
            b bVar = (b) set;
            return new b((Set) bVar.f38608d, li.o.b(bVar.f38609e, nVar));
        }
        return new b((Set) li.m.j(set), (li.n) li.m.j(nVar));
    }

    public static SortedSet c(SortedSet sortedSet, li.n nVar) {
        if (sortedSet instanceof b) {
            b bVar = (b) sortedSet;
            return new c((SortedSet) bVar.f38608d, li.o.b(bVar.f38609e, nVar));
        }
        return new c((SortedSet) li.m.j(sortedSet), (li.n) li.m.j(nVar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int d(Set set) {
        int i10;
        int i11 = 0;
        for (Object obj : set) {
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            i11 = ~(~(i11 + i10));
        }
        return i11;
    }

    public static e e(Set set, Set set2) {
        li.m.k(set, "set1");
        li.m.k(set2, "set2");
        return new a(set, set2);
    }

    public static HashSet f() {
        return new HashSet();
    }

    public static HashSet g(int i10) {
        return new HashSet(a0.a(i10));
    }

    public static Set h() {
        return Collections.newSetFromMap(a0.f());
    }

    static boolean i(Set set, Collection collection) {
        li.m.j(collection);
        if (collection instanceof e0) {
            collection = ((e0) collection).F0();
        }
        if ((collection instanceof Set) && collection.size() > set.size()) {
            return w.n(set.iterator(), collection);
        }
        return j(set, collection.iterator());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean j(Set set, Iterator it) {
        boolean z10 = false;
        while (it.hasNext()) {
            z10 |= set.remove(it.next());
        }
        return z10;
    }
}
