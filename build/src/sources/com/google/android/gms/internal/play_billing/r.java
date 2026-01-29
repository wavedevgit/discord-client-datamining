package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r extends n {

    /* renamed from: i  reason: collision with root package name */
    private final transient m f15365i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f15366o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f15367p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(m mVar, Object[] objArr, int i10, int i11) {
        this.f15365i = mVar;
        this.f15366o = objArr;
        this.f15367p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final int b(Object[] objArr, int i10) {
        return e().b(objArr, 0);
    }

    @Override // com.google.android.gms.internal.play_billing.g, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f15365i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.gms.internal.play_billing.n
    final j h() {
        return new q(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return e().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f15367p;
    }
}
