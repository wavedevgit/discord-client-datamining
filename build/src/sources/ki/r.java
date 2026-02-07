package ki;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends s {

    /* renamed from: o  reason: collision with root package name */
    final transient int f31734o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f31735p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ s f31736q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(s sVar, int i10, int i11) {
        this.f31736q = sVar;
        this.f31734o = i10;
        this.f31735p = i11;
    }

    @Override // ki.p
    final int c() {
        return this.f31736q.d() + this.f31734o + this.f31735p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final int d() {
        return this.f31736q.d() + this.f31734o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final Object[] e() {
        return this.f31736q.e();
    }

    @Override // ki.s
    public final s f(int i10, int i11) {
        m.c(i10, i11, this.f31735p);
        int i12 = this.f31734o;
        return this.f31736q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, this.f31735p, "index");
        return this.f31736q.get(i10 + this.f31734o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f31735p;
    }

    @Override // ki.s, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
