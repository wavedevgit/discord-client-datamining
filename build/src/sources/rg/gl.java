package rg;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class gl extends r1 {

    /* renamed from: d  reason: collision with root package name */
    private final int f47254d;

    /* renamed from: e  reason: collision with root package name */
    private int f47255e;

    /* JADX INFO: Access modifiers changed from: protected */
    public gl(int i10, int i11) {
        el.b(i11, i10, "index");
        this.f47254d = i10;
        this.f47255e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f47255e < this.f47254d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f47255e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f47255e;
            this.f47255e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f47255e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f47255e - 1;
            this.f47255e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f47255e - 1;
    }
}
