package mg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y extends z {

    /* renamed from: i  reason: collision with root package name */
    final transient int f36478i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f36479o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ z f36480p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(z zVar, int i10, int i11) {
        this.f36480p = zVar;
        this.f36478i = i10;
        this.f36479o = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final Object[] b() {
        return this.f36480p.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final int c() {
        return this.f36480p.c() + this.f36478i;
    }

    @Override // mg.w
    final int d() {
        return this.f36480p.c() + this.f36478i + this.f36479o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.w
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f36479o, "index");
        return this.f36480p.get(i10 + this.f36478i);
    }

    @Override // mg.z
    public final z i(int i10, int i11) {
        t.c(i10, i11, this.f36479o);
        int i12 = this.f36478i;
        return this.f36480p.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f36479o;
    }

    @Override // mg.z, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
