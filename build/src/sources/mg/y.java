package mg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y extends z {

    /* renamed from: i  reason: collision with root package name */
    final transient int f37102i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f37103o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ z f37104p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(z zVar, int i10, int i11) {
        this.f37104p = zVar;
        this.f37102i = i10;
        this.f37103o = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final Object[] b() {
        return this.f37104p.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final int c() {
        return this.f37104p.c() + this.f37102i;
    }

    @Override // mg.w
    final int d() {
        return this.f37104p.c() + this.f37102i + this.f37103o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f37103o, "index");
        return this.f37104p.get(i10 + this.f37102i);
    }

    @Override // mg.z
    public final z h(int i10, int i11) {
        t.c(i10, i11, this.f37103o);
        int i12 = this.f37102i;
        return this.f37104p.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37103o;
    }

    @Override // mg.z, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
