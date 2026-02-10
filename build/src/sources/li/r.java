package li;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends s {

    /* renamed from: o  reason: collision with root package name */
    final transient int f35954o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f35955p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ s f35956q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(s sVar, int i10, int i11) {
        this.f35956q = sVar;
        this.f35954o = i10;
        this.f35955p = i11;
    }

    @Override // li.p
    final int c() {
        return this.f35956q.d() + this.f35954o + this.f35955p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.p
    public final int d() {
        return this.f35956q.d() + this.f35954o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.p
    public final Object[] e() {
        return this.f35956q.e();
    }

    @Override // li.s
    public final s f(int i10, int i11) {
        m.c(i10, i11, this.f35955p);
        int i12 = this.f35954o;
        return this.f35956q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, this.f35955p, "index");
        return this.f35956q.get(i10 + this.f35954o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f35955p;
    }

    @Override // li.s, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
