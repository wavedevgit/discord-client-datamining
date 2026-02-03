package lg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends f {

    /* renamed from: o  reason: collision with root package name */
    final transient int f36884o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f36885p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ f f36886q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar, int i10, int i11) {
        this.f36886q = fVar;
        this.f36884o = i10;
        this.f36885p = i11;
    }

    @Override // lg.c
    final int c() {
        return this.f36886q.d() + this.f36884o + this.f36885p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final int d() {
        return this.f36886q.d() + this.f36884o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final Object[] e() {
        return this.f36886q.e();
    }

    @Override // lg.f
    public final f f(int i10, int i11) {
        t0.c(i10, i11, this.f36885p);
        int i12 = this.f36884o;
        return this.f36886q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f36885p, "index");
        return this.f36886q.get(i10 + this.f36884o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f36885p;
    }

    @Override // lg.f, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
