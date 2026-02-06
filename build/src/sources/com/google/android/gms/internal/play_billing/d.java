package com.google.android.gms.internal.play_billing;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class d extends x {

    /* renamed from: d  reason: collision with root package name */
    private final int f14160d;

    /* renamed from: e  reason: collision with root package name */
    private int f14161e;

    /* JADX INFO: Access modifiers changed from: protected */
    public d(int i10, int i11) {
        b.b(i11, i10, "index");
        this.f14160d = i10;
        this.f14161e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        return this.f14161e < this.f14160d;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        return this.f14161e > 0;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f14161e;
            this.f14161e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f14161e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f14161e - 1;
            this.f14161e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f14161e - 1;
    }
}
