package androidx.datastore.preferences.protobuf;

import java.util.AbstractList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n1 extends AbstractList implements d0, RandomAccess {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f3808d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ListIterator {

        /* renamed from: d  reason: collision with root package name */
        ListIterator f3809d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f3810e;

        a(int i10) {
            this.f3810e = i10;
            this.f3809d = n1.this.f3808d.listIterator(i10);
        }

        @Override // java.util.ListIterator
        /* renamed from: a */
        public void add(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        /* renamed from: b */
        public String next() {
            return (String) this.f3809d.next();
        }

        @Override // java.util.ListIterator
        /* renamed from: c */
        public String previous() {
            return (String) this.f3809d.previous();
        }

        @Override // java.util.ListIterator
        /* renamed from: d */
        public void set(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            return this.f3809d.hasNext();
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            return this.f3809d.hasPrevious();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f3809d.nextIndex();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f3809d.previousIndex();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        Iterator f3812d;

        b() {
            this.f3812d = n1.this.f3808d.iterator();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            return (String) this.f3812d.next();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f3812d.hasNext();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    public n1(d0 d0Var) {
        this.f3808d = d0Var;
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public void K0(g gVar) {
        throw new UnsupportedOperationException();
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public Object S0(int i10) {
        return this.f3808d.S0(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: c */
    public String get(int i10) {
        return (String) this.f3808d.get(i10);
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public List getUnderlyingElements() {
        return this.f3808d.getUnderlyingElements();
    }

    @Override // androidx.datastore.preferences.protobuf.d0
    public d0 getUnmodifiableView() {
        return this;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator iterator() {
        return new b();
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        return new a(i10);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f3808d.size();
    }
}
