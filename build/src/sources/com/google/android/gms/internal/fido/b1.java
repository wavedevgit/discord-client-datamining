package com.google.android.gms.internal.fido;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b1 extends e1 {

    /* renamed from: o  reason: collision with root package name */
    private final transient e1 f13571o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b1(e1 e1Var) {
        this.f13571o = e1Var;
    }

    private final int n(int i10) {
        return (this.f13571o.size() - 1) - i10;
    }

    @Override // com.google.android.gms.internal.fido.e1, com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        return this.f13571o.contains(obj);
    }

    @Override // com.google.android.gms.internal.fido.e1
    public final e1 g() {
        return this.f13571o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        k0.a(i10, this.f13571o.size(), "index");
        return this.f13571o.get(n(i10));
    }

    @Override // com.google.android.gms.internal.fido.e1
    public final e1 h(int i10, int i11) {
        k0.e(i10, i11, this.f13571o.size());
        e1 e1Var = this.f13571o;
        return e1Var.subList(e1Var.size() - i11, this.f13571o.size() - i10).g();
    }

    @Override // com.google.android.gms.internal.fido.e1, java.util.List
    public final int indexOf(Object obj) {
        int lastIndexOf = this.f13571o.lastIndexOf(obj);
        if (lastIndexOf >= 0) {
            return n(lastIndexOf);
        }
        return -1;
    }

    @Override // com.google.android.gms.internal.fido.e1, java.util.List
    public final int lastIndexOf(Object obj) {
        int indexOf = this.f13571o.indexOf(obj);
        if (indexOf >= 0) {
            return n(indexOf);
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f13571o.size();
    }

    @Override // com.google.android.gms.internal.fido.e1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
