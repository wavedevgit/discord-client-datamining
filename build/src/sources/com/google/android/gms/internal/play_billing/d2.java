package com.google.android.gms.internal.play_billing;

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 extends b0 implements RandomAccess, e2 {

    /* renamed from: i  reason: collision with root package name */
    private static final d2 f14168i;

    /* renamed from: o  reason: collision with root package name */
    public static final e2 f14169o;

    /* renamed from: e  reason: collision with root package name */
    private final List f14170e;

    static {
        d2 d2Var = new d2(false);
        f14168i = d2Var;
        f14169o = d2Var;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d2(int i10) {
        super(true);
        ArrayList arrayList = new ArrayList(i10);
        this.f14170e = arrayList;
    }

    private static String d(Object obj) {
        if (obj instanceof String) {
            return (String) obj;
        }
        if (obj instanceof r0) {
            return ((r0) obj).p(y1.f14365b);
        }
        return y1.d((byte[]) obj);
    }

    @Override // com.google.android.gms.internal.play_billing.x1
    public final /* bridge */ /* synthetic */ x1 J(int i10) {
        if (i10 >= size()) {
            ArrayList arrayList = new ArrayList(i10);
            arrayList.addAll(this.f14170e);
            return new d2(arrayList);
        }
        throw new IllegalArgumentException();
    }

    @Override // com.google.android.gms.internal.play_billing.e2
    public final Object Y(int i10) {
        return this.f14170e.get(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public final /* bridge */ /* synthetic */ void add(int i10, Object obj) {
        b();
        this.f14170e.add(i10, (String) obj);
        ((AbstractList) this).modCount++;
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.List
    public final boolean addAll(int i10, Collection collection) {
        b();
        if (collection instanceof e2) {
            collection = ((e2) collection).n();
        }
        boolean addAll = this.f14170e.addAll(i10, collection);
        ((AbstractList) this).modCount++;
        return addAll;
    }

    @Override // java.util.AbstractList, java.util.List
    /* renamed from: c */
    public final String get(int i10) {
        Object obj = this.f14170e.get(i10);
        if (obj instanceof String) {
            return (String) obj;
        }
        if (obj instanceof r0) {
            r0 r0Var = (r0) obj;
            String p10 = r0Var.p(y1.f14365b);
            if (r0Var.i()) {
                this.f14170e.set(i10, p10);
            }
            return p10;
        }
        byte[] bArr = (byte[]) obj;
        String d10 = y1.d(bArr);
        if (l4.d(bArr)) {
            this.f14170e.set(i10, d10);
        }
        return d10;
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final void clear() {
        b();
        this.f14170e.clear();
        ((AbstractList) this).modCount++;
    }

    @Override // com.google.android.gms.internal.play_billing.e2
    public final e2 k() {
        if (a()) {
            return new b4(this);
        }
        return this;
    }

    @Override // com.google.android.gms.internal.play_billing.e2
    public final List n() {
        return Collections.unmodifiableList(this.f14170e);
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.List
    public final /* bridge */ /* synthetic */ Object remove(int i10) {
        b();
        Object remove = this.f14170e.remove(i10);
        ((AbstractList) this).modCount++;
        return d(remove);
    }

    @Override // java.util.AbstractList, java.util.List
    public final /* bridge */ /* synthetic */ Object set(int i10, Object obj) {
        b();
        return d(this.f14170e.set(i10, (String) obj));
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14170e.size();
    }

    private d2(ArrayList arrayList) {
        super(true);
        this.f14170e = arrayList;
    }

    private d2(boolean z10) {
        super(false);
        this.f14170e = Collections.EMPTY_LIST;
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean addAll(Collection collection) {
        return addAll(size(), collection);
    }
}
