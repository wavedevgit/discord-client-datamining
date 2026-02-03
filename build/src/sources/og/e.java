package og;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class e extends o1 {

    /* renamed from: d  reason: collision with root package name */
    private final int f42897d;

    /* renamed from: e  reason: collision with root package name */
    private int f42898e;

    /* JADX INFO: Access modifiers changed from: protected */
    public e(int i10, int i11) {
        c.b(i11, i10, "index");
        this.f42897d = i10;
        this.f42898e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f42898e < this.f42897d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f42898e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f42898e;
            this.f42898e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f42898e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f42898e - 1;
            this.f42898e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f42898e - 1;
    }
}
