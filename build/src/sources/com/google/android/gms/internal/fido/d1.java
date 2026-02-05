package com.google.android.gms.internal.fido;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d1 extends e1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f13974o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f13975p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ e1 f13976q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, int i10, int i11) {
        this.f13976q = e1Var;
        this.f13974o = i10;
        this.f13975p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f13976q.d() + this.f13974o + this.f13975p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int d() {
        return this.f13976q.d() + this.f13974o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final Object[] f() {
        return this.f13976q.f();
    }

    @Override // java.util.List
    public final Object get(int i10) {
        k0.a(i10, this.f13975p, "index");
        return this.f13976q.get(i10 + this.f13974o);
    }

    @Override // com.google.android.gms.internal.fido.e1
    public final e1 h(int i10, int i11) {
        k0.e(i10, i11, this.f13975p);
        int i12 = this.f13974o;
        return this.f13976q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f13975p;
    }

    @Override // com.google.android.gms.internal.fido.e1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
