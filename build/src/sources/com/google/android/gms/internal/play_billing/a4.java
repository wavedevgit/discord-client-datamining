package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a4 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f15182d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ b4 f15183e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a4(b4 b4Var) {
        e2 e2Var;
        this.f15183e = b4Var;
        e2Var = b4Var.f15202d;
        this.f15182d = e2Var.iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f15182d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        return (String) this.f15182d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        throw new UnsupportedOperationException();
    }
}
