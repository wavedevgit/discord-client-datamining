package kotlin.collections;

import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMutableListIterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u0 extends f {

    /* renamed from: d  reason: collision with root package name */
    private final List f32110d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ListIterator, KMutableListIterator {

        /* renamed from: d  reason: collision with root package name */
        private final ListIterator f32111d;

        a(int i10) {
            int W;
            List list = u0.this.f32110d;
            W = z.W(u0.this, i10);
            this.f32111d = list.listIterator(W);
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            this.f32111d.add(obj);
            this.f32111d.previous();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            return this.f32111d.hasPrevious();
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            return this.f32111d.hasNext();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            return this.f32111d.previous();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            int V;
            V = z.V(u0.this, this.f32111d.previousIndex());
            return V;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            return this.f32111d.next();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            int V;
            V = z.V(u0.this, this.f32111d.nextIndex());
            return V;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            this.f32111d.remove();
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            this.f32111d.set(obj);
        }
    }

    public u0(List delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f32110d = delegate;
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        int W;
        List list = this.f32110d;
        W = z.W(this, i10);
        list.add(W, obj);
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f32110d.size();
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        int U;
        List list = this.f32110d;
        U = z.U(this, i10);
        return list.remove(U);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        this.f32110d.clear();
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        int U;
        List list = this.f32110d;
        U = z.U(this, i10);
        return list.get(U);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator iterator() {
        return listIterator(0);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator() {
        return listIterator(0);
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        int U;
        List list = this.f32110d;
        U = z.U(this, i10);
        return list.set(U, obj);
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator listIterator(int i10) {
        return new a(i10);
    }
}
