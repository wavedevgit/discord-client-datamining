package com.google.android.gms.internal.fido;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class u0 extends d2 {

    /* renamed from: d  reason: collision with root package name */
    private final int f15131d;

    /* renamed from: e  reason: collision with root package name */
    private int f15132e;

    /* JADX INFO: Access modifiers changed from: protected */
    public u0(int i10, int i11) {
        k0.b(i11, i10, "index");
        this.f15131d = i10;
        this.f15132e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        return this.f15132e < this.f15131d;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        return this.f15132e > 0;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f15132e;
            this.f15132e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f15132e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f15132e - 1;
            this.f15132e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f15132e - 1;
    }
}
