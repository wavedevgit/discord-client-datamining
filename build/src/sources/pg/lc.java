package pg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lc extends mc {

    /* renamed from: i  reason: collision with root package name */
    final transient int f42211i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f42212o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ mc f42213p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public lc(mc mcVar, int i10, int i11) {
        this.f42213p = mcVar;
        this.f42211i = i10;
        this.f42212o = i11;
    }

    @Override // pg.la
    final int c() {
        return this.f42213p.d() + this.f42211i + this.f42212o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final int d() {
        return this.f42213p.d() + this.f42211i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final Object[] e() {
        return this.f42213p.e();
    }

    @Override // pg.mc
    public final mc f(int i10, int i11) {
        f4.c(i10, i11, this.f42212o);
        mc mcVar = this.f42213p;
        int i12 = this.f42211i;
        return mcVar.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f42212o, "index");
        return this.f42213p.get(i10 + this.f42211i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f42212o;
    }

    @Override // pg.mc, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
