package gi;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends s {

    /* renamed from: o  reason: collision with root package name */
    final transient int f26931o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f26932p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ s f26933q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(s sVar, int i10, int i11) {
        this.f26933q = sVar;
        this.f26931o = i10;
        this.f26932p = i11;
    }

    @Override // gi.p
    final int c() {
        return this.f26933q.d() + this.f26931o + this.f26932p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final int d() {
        return this.f26933q.d() + this.f26931o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final Object[] e() {
        return this.f26933q.e();
    }

    @Override // gi.s
    public final s f(int i10, int i11) {
        m.c(i10, i11, this.f26932p);
        int i12 = this.f26931o;
        return this.f26933q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, this.f26932p, "index");
        return this.f26933q.get(i10 + this.f26931o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f26932p;
    }

    @Override // gi.s, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
