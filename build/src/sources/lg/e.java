package lg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends f {

    /* renamed from: o  reason: collision with root package name */
    final transient int f36811o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f36812p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ f f36813q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar, int i10, int i11) {
        this.f36813q = fVar;
        this.f36811o = i10;
        this.f36812p = i11;
    }

    @Override // lg.c
    final int c() {
        return this.f36813q.d() + this.f36811o + this.f36812p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final int d() {
        return this.f36813q.d() + this.f36811o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final Object[] e() {
        return this.f36813q.e();
    }

    @Override // lg.f
    public final f f(int i10, int i11) {
        t0.c(i10, i11, this.f36812p);
        int i12 = this.f36811o;
        return this.f36813q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f36812p, "index");
        return this.f36813q.get(i10 + this.f36811o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f36812p;
    }

    @Override // lg.f, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
