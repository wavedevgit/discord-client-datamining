package lg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends f {

    /* renamed from: o  reason: collision with root package name */
    final transient int f37415o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f37416p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ f f37417q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar, int i10, int i11) {
        this.f37417q = fVar;
        this.f37415o = i10;
        this.f37416p = i11;
    }

    @Override // lg.c
    final int c() {
        return this.f37417q.d() + this.f37415o + this.f37416p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final int d() {
        return this.f37417q.d() + this.f37415o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final Object[] e() {
        return this.f37417q.e();
    }

    @Override // lg.f
    public final f f(int i10, int i11) {
        t0.c(i10, i11, this.f37416p);
        int i12 = this.f37415o;
        return this.f37417q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f37416p, "index");
        return this.f37417q.get(i10 + this.f37415o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37416p;
    }

    @Override // lg.f, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
