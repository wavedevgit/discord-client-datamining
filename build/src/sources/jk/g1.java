package jk;

import java.util.AbstractList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g1 extends AbstractList implements x, RandomAccess {

    /* renamed from: d  reason: collision with root package name */
    private final x f31607d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ListIterator {

        /* renamed from: d  reason: collision with root package name */
        ListIterator f31608d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f31609e;

        a(int i10) {
            this.f31609e = i10;
            this.f31608d = g1.this.f31607d.listIterator(i10);
        }

        @Override // java.util.ListIterator
        /* renamed from: a */
        public void add(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        /* renamed from: b */
        public String next() {
            return (String) this.f31608d.next();
        }

        @Override // java.util.ListIterator
        /* renamed from: c */
        public String previous() {
            return (String) this.f31608d.previous();
        }

        @Override // java.util.ListIterator
        /* renamed from: d */
        public void set(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            return this.f31608d.hasNext();
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            return this.f31608d.hasPrevious();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f31608d.nextIndex();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f31608d.previousIndex();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        Iterator f31611d;

        b() {
            this.f31611d = g1.this.f31607d.iterator();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            return (String) this.f31611d.next();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f31611d.hasNext();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    public g1(x xVar) {
        this.f31607d = xVar;
    }

    @Override // jk.x
    public void E0(f fVar) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: c */
    public String get(int i10) {
        return (String) this.f31607d.get(i10);
    }

    @Override // jk.x
    public List getUnderlyingElements() {
        return this.f31607d.getUnderlyingElements();
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
        return this.f31607d.size();
    }

    @Override // jk.x
    public x getUnmodifiableView() {
        return this;
    }
}
