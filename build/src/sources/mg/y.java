package mg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y extends z {

    /* renamed from: i  reason: collision with root package name */
    final transient int f36477i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f36478o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ z f36479p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(z zVar, int i10, int i11) {
        this.f36479p = zVar;
        this.f36477i = i10;
        this.f36478o = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final Object[] b() {
        return this.f36479p.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final int c() {
        return this.f36479p.c() + this.f36477i;
    }

    @Override // mg.w
    final int d() {
        return this.f36479p.c() + this.f36477i + this.f36478o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f36478o, "index");
        return this.f36479p.get(i10 + this.f36477i);
    }

    @Override // mg.z
    public final z i(int i10, int i11) {
        t.c(i10, i11, this.f36478o);
        int i12 = this.f36477i;
        return this.f36479p.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f36478o;
    }

    @Override // mg.z, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
