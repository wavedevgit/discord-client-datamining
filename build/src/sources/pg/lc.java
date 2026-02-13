package pg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lc extends mc {

    /* renamed from: i  reason: collision with root package name */
    final transient int f42780i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f42781o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ mc f42782p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public lc(mc mcVar, int i10, int i11) {
        this.f42782p = mcVar;
        this.f42780i = i10;
        this.f42781o = i11;
    }

    @Override // pg.la
    final int c() {
        return this.f42782p.d() + this.f42780i + this.f42781o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final int d() {
        return this.f42782p.d() + this.f42780i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final Object[] e() {
        return this.f42782p.e();
    }

    @Override // pg.mc
    public final mc f(int i10, int i11) {
        f4.c(i10, i11, this.f42781o);
        mc mcVar = this.f42782p;
        int i12 = this.f42780i;
        return mcVar.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f42781o, "index");
        return this.f42782p.get(i10 + this.f42780i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f42781o;
    }

    @Override // pg.mc, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
