package com.google.android.gms.internal.play_billing;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class d extends x {

    /* renamed from: d  reason: collision with root package name */
    private final int f15206d;

    /* renamed from: e  reason: collision with root package name */
    private int f15207e;

    /* JADX INFO: Access modifiers changed from: protected */
    public d(int i10, int i11) {
        b.b(i11, i10, "index");
        this.f15206d = i10;
        this.f15207e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        return this.f15207e < this.f15206d;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        return this.f15207e > 0;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f15207e;
            this.f15207e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f15207e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f15207e - 1;
            this.f15207e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f15207e - 1;
    }
}
