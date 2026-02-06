package ng;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class w extends h2 {

    /* renamed from: d  reason: collision with root package name */
    private final int f40352d;

    /* renamed from: e  reason: collision with root package name */
    private int f40353e;

    /* JADX INFO: Access modifiers changed from: protected */
    public w(int i10, int i11) {
        t.b(i11, i10, "index");
        this.f40352d = i10;
        this.f40353e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f40353e < this.f40352d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f40353e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f40353e;
            this.f40353e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f40353e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f40353e - 1;
            this.f40353e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f40353e - 1;
    }
}
