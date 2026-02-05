package kg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y extends z {

    /* renamed from: i  reason: collision with root package name */
    final transient int f31831i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f31832o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ z f31833p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(z zVar, int i10, int i11) {
        this.f31833p = zVar;
        this.f31831i = i10;
        this.f31832o = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final Object[] b() {
        return this.f31833p.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final int c() {
        return this.f31833p.c() + this.f31831i;
    }

    @Override // kg.w
    final int d() {
        return this.f31833p.c() + this.f31831i + this.f31832o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f31832o, "index");
        return this.f31833p.get(i10 + this.f31831i);
    }

    @Override // kg.z
    public final z h(int i10, int i11) {
        t.c(i10, i11, this.f31832o);
        int i12 = this.f31831i;
        return this.f31833p.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f31832o;
    }

    @Override // kg.z, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
