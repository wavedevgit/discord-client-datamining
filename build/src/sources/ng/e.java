package ng;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends f {

    /* renamed from: o  reason: collision with root package name */
    final transient int f38406o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f38407p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ f f38408q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar, int i10, int i11) {
        this.f38408q = fVar;
        this.f38406o = i10;
        this.f38407p = i11;
    }

    @Override // ng.c
    final int c() {
        return this.f38408q.d() + this.f38406o + this.f38407p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.c
    public final int d() {
        return this.f38408q.d() + this.f38406o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.c
    public final Object[] e() {
        return this.f38408q.e();
    }

    @Override // ng.f
    public final f f(int i10, int i11) {
        t0.c(i10, i11, this.f38407p);
        int i12 = this.f38406o;
        return this.f38408q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f38407p, "index");
        return this.f38408q.get(i10 + this.f38406o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f38407p;
    }

    @Override // ng.f, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
