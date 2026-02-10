package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s extends n {

    /* renamed from: i  reason: collision with root package name */
    private final transient m f15050i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f15051o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(m mVar, j jVar) {
        this.f15050i = mVar;
        this.f15051o = jVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final int b(Object[] objArr, int i10) {
        return this.f15051o.b(objArr, 0);
    }

    @Override // com.google.android.gms.internal.play_billing.g, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f15050i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.gms.internal.play_billing.n, com.google.android.gms.internal.play_billing.g
    public final j e() {
        return this.f15051o;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f15051o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f15050i.size();
    }
}
