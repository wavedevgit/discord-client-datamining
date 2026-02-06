package gk;

import java.util.AbstractList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g1 extends AbstractList implements x, RandomAccess {

    /* renamed from: d  reason: collision with root package name */
    private final x f25241d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ListIterator {

        /* renamed from: d  reason: collision with root package name */
        ListIterator f25242d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f25243e;

        a(int i10) {
            this.f25243e = i10;
            this.f25242d = g1.this.f25241d.listIterator(i10);
        }

        @Override // java.util.ListIterator
        /* renamed from: a */
        public void add(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        /* renamed from: b */
        public String next() {
            return (String) this.f25242d.next();
        }

        @Override // java.util.ListIterator
        /* renamed from: c */
        public String previous() {
            return (String) this.f25242d.previous();
        }

        @Override // java.util.ListIterator
        /* renamed from: d */
        public void set(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            return this.f25242d.hasNext();
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            return this.f25242d.hasPrevious();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f25242d.nextIndex();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f25242d.previousIndex();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        Iterator f25245d;

        b() {
            this.f25245d = g1.this.f25241d.iterator();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            return (String) this.f25245d.next();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f25245d.hasNext();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    public g1(x xVar) {
        this.f25241d = xVar;
    }

    @Override // gk.x
    public void L0(f fVar) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: c */
    public String get(int i10) {
        return (String) this.f25241d.get(i10);
    }

    @Override // gk.x
    public List getUnderlyingElements() {
        return this.f25241d.getUnderlyingElements();
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
        return this.f25241d.size();
    }

    @Override // gk.x
    public x getUnmodifiableView() {
        return this;
    }
}
