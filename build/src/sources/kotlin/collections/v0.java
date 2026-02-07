package kotlin.collections;

import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class v0 extends d {

    /* renamed from: e  reason: collision with root package name */
    private final List f32113e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ListIterator, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final ListIterator f32114d;

        a(int i10) {
            int W;
            List list = v0.this.f32113e;
            W = z.W(v0.this, i10);
            this.f32114d = list.listIterator(W);
        }

        @Override // java.util.ListIterator
        public void add(Object obj) {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            return this.f32114d.hasPrevious();
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            return this.f32114d.hasNext();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public Object next() {
            return this.f32114d.previous();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            int V;
            V = z.V(v0.this, this.f32114d.previousIndex());
            return V;
        }

        @Override // java.util.ListIterator
        public Object previous() {
            return this.f32114d.next();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            int V;
            V = z.V(v0.this, this.f32114d.nextIndex());
            return V;
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }

        @Override // java.util.ListIterator
        public void set(Object obj) {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }
    }

    public v0(List delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f32113e = delegate;
    }

    @Override // kotlin.collections.b
    public int c() {
        return this.f32113e.size();
    }

    @Override // kotlin.collections.d, java.util.List
    public Object get(int i10) {
        int U;
        List list = this.f32113e;
        U = z.U(this, i10);
        return list.get(U);
    }

    @Override // kotlin.collections.d, java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator iterator() {
        return listIterator(0);
    }

    @Override // kotlin.collections.d, java.util.List
    public ListIterator listIterator() {
        return listIterator(0);
    }

    @Override // kotlin.collections.d, java.util.List
    public ListIterator listIterator(int i10) {
        return new a(i10);
    }
}
