package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.AbstractList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class UnmodifiableLazyStringList extends AbstractList<String> implements RandomAccess, LazyStringList {

    /* renamed from: d  reason: collision with root package name */
    private final LazyStringList f34014d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements ListIterator {

        /* renamed from: d  reason: collision with root package name */
        ListIterator f34015d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f34016e;

        a(int i10) {
            this.f34016e = i10;
            this.f34015d = UnmodifiableLazyStringList.this.f34014d.listIterator(i10);
        }

        @Override // java.util.ListIterator
        /* renamed from: a */
        public void add(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        /* renamed from: b */
        public String next() {
            return (String) this.f34015d.next();
        }

        @Override // java.util.ListIterator
        /* renamed from: c */
        public String previous() {
            return (String) this.f34015d.previous();
        }

        @Override // java.util.ListIterator
        /* renamed from: d */
        public void set(String str) {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public boolean hasNext() {
            return this.f34015d.hasNext();
        }

        @Override // java.util.ListIterator
        public boolean hasPrevious() {
            return this.f34015d.hasPrevious();
        }

        @Override // java.util.ListIterator
        public int nextIndex() {
            return this.f34015d.nextIndex();
        }

        @Override // java.util.ListIterator
        public int previousIndex() {
            return this.f34015d.previousIndex();
        }

        @Override // java.util.ListIterator, java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        Iterator f34018d;

        b() {
            this.f34018d = UnmodifiableLazyStringList.this.f34014d.iterator();
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public String next() {
            return (String) this.f34018d.next();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f34018d.hasNext();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    public UnmodifiableLazyStringList(LazyStringList lazyStringList) {
        this.f34014d = lazyStringList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.LazyStringList
    public void add(ByteString byteString) {
        throw new UnsupportedOperationException();
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.LazyStringList
    public ByteString getByteString(int i10) {
        return this.f34014d.getByteString(i10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.LazyStringList
    public List<?> getUnderlyingElements() {
        return this.f34014d.getUnderlyingElements();
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.LazyStringList
    public LazyStringList getUnmodifiableView() {
        return this;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator<String> iterator() {
        return new b();
    }

    @Override // java.util.AbstractList, java.util.List
    public ListIterator<String> listIterator(int i10) {
        return new a(i10);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f34014d.size();
    }

    @Override // java.util.AbstractList, java.util.List
    public String get(int i10) {
        return this.f34014d.get(i10);
    }
}
