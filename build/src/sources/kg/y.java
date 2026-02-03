package kg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y extends z {

    /* renamed from: i  reason: collision with root package name */
    final transient int f32970i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f32971o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ z f32972p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(z zVar, int i10, int i11) {
        this.f32972p = zVar;
        this.f32970i = i10;
        this.f32971o = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final Object[] b() {
        return this.f32972p.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final int c() {
        return this.f32972p.c() + this.f32970i;
    }

    @Override // kg.w
    final int d() {
        return this.f32972p.c() + this.f32970i + this.f32971o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f32971o, "index");
        return this.f32972p.get(i10 + this.f32970i);
    }

    @Override // kg.z
    public final z h(int i10, int i11) {
        t.c(i10, i11, this.f32971o);
        int i12 = this.f32970i;
        return this.f32972p.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f32971o;
    }

    @Override // kg.z, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
