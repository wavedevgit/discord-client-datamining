package ng;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lc extends mc {

    /* renamed from: i  reason: collision with root package name */
    final transient int f40793i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f40794o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ mc f40795p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public lc(mc mcVar, int i10, int i11) {
        this.f40795p = mcVar;
        this.f40793i = i10;
        this.f40794o = i11;
    }

    @Override // ng.la
    final int c() {
        return this.f40795p.d() + this.f40793i + this.f40794o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final int d() {
        return this.f40795p.d() + this.f40793i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final Object[] e() {
        return this.f40795p.e();
    }

    @Override // ng.mc
    public final mc f(int i10, int i11) {
        f4.c(i10, i11, this.f40794o);
        mc mcVar = this.f40795p;
        int i12 = this.f40793i;
        return mcVar.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f40794o, "index");
        return this.f40795p.get(i10 + this.f40793i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f40794o;
    }

    @Override // ng.mc, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
