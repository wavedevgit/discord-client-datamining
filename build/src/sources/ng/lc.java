package ng;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lc extends mc {

    /* renamed from: i  reason: collision with root package name */
    final transient int f41294i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f41295o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ mc f41296p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public lc(mc mcVar, int i10, int i11) {
        this.f41296p = mcVar;
        this.f41294i = i10;
        this.f41295o = i11;
    }

    @Override // ng.la
    final int c() {
        return this.f41296p.d() + this.f41294i + this.f41295o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final int d() {
        return this.f41296p.d() + this.f41294i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final Object[] e() {
        return this.f41296p.e();
    }

    @Override // ng.mc
    public final mc f(int i10, int i11) {
        f4.c(i10, i11, this.f41295o);
        mc mcVar = this.f41296p;
        int i12 = this.f41294i;
        return mcVar.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f41295o, "index");
        return this.f41296p.get(i10 + this.f41294i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f41295o;
    }

    @Override // ng.mc, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
