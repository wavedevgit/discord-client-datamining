package ni;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends s {

    /* renamed from: o  reason: collision with root package name */
    final transient int f37924o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f37925p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ s f37926q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(s sVar, int i10, int i11) {
        this.f37926q = sVar;
        this.f37924o = i10;
        this.f37925p = i11;
    }

    @Override // ni.p
    final int c() {
        return this.f37926q.d() + this.f37924o + this.f37925p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.p
    public final int d() {
        return this.f37926q.d() + this.f37924o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.p
    public final Object[] e() {
        return this.f37926q.e();
    }

    @Override // ni.s
    public final s f(int i10, int i11) {
        m.c(i10, i11, this.f37925p);
        int i12 = this.f37924o;
        return this.f37926q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, this.f37925p, "index");
        return this.f37926q.get(i10 + this.f37924o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37925p;
    }

    @Override // ni.s, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
