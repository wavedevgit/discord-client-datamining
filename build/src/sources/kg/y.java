package kg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y extends z {

    /* renamed from: i  reason: collision with root package name */
    final transient int f33224i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f33225o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ z f33226p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(z zVar, int i10, int i11) {
        this.f33226p = zVar;
        this.f33224i = i10;
        this.f33225o = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final Object[] b() {
        return this.f33226p.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final int c() {
        return this.f33226p.c() + this.f33224i;
    }

    @Override // kg.w
    final int d() {
        return this.f33226p.c() + this.f33224i + this.f33225o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // kg.w
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f33225o, "index");
        return this.f33226p.get(i10 + this.f33224i);
    }

    @Override // kg.z
    public final z h(int i10, int i11) {
        t.c(i10, i11, this.f33225o);
        int i12 = this.f33224i;
        return this.f33226p.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f33225o;
    }

    @Override // kg.z, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
