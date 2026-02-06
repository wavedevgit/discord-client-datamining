package og;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lc extends mc {

    /* renamed from: i  reason: collision with root package name */
    final transient int f42245i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f42246o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ mc f42247p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public lc(mc mcVar, int i10, int i11) {
        this.f42247p = mcVar;
        this.f42245i = i10;
        this.f42246o = i11;
    }

    @Override // og.la
    final int c() {
        return this.f42247p.d() + this.f42245i + this.f42246o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.la
    public final int d() {
        return this.f42247p.d() + this.f42245i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.la
    public final Object[] e() {
        return this.f42247p.e();
    }

    @Override // og.mc
    public final mc f(int i10, int i11) {
        f4.c(i10, i11, this.f42246o);
        mc mcVar = this.f42247p;
        int i12 = this.f42245i;
        return mcVar.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f42246o, "index");
        return this.f42247p.get(i10 + this.f42245i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f42246o;
    }

    @Override // og.mc, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
