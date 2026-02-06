package ki;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends s {

    /* renamed from: o  reason: collision with root package name */
    final transient int f31686o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f31687p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ s f31688q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(s sVar, int i10, int i11) {
        this.f31688q = sVar;
        this.f31686o = i10;
        this.f31687p = i11;
    }

    @Override // ki.p
    final int c() {
        return this.f31688q.d() + this.f31686o + this.f31687p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final int d() {
        return this.f31688q.d() + this.f31686o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final Object[] e() {
        return this.f31688q.e();
    }

    @Override // ki.s
    public final s f(int i10, int i11) {
        m.c(i10, i11, this.f31687p);
        int i12 = this.f31686o;
        return this.f31688q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, this.f31687p, "index");
        return this.f31688q.get(i10 + this.f31686o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f31687p;
    }

    @Override // ki.s, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
