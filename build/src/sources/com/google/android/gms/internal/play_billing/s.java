package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s extends n {

    /* renamed from: i  reason: collision with root package name */
    private final transient m f14370i;

    /* renamed from: o  reason: collision with root package name */
    private final transient j f14371o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(m mVar, j jVar) {
        this.f14370i = mVar;
        this.f14371o = jVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final int b(Object[] objArr, int i10) {
        return this.f14371o.b(objArr, 0);
    }

    @Override // com.google.android.gms.internal.play_billing.g, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f14370i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.gms.internal.play_billing.n, com.google.android.gms.internal.play_billing.g
    public final j e() {
        return this.f14371o;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f14371o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f14370i.size();
    }
}
