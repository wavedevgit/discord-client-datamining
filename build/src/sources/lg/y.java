package lg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y extends z {

    /* renamed from: i  reason: collision with root package name */
    final transient int f36272i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f36273o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ z f36274p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(z zVar, int i10, int i11) {
        this.f36274p = zVar;
        this.f36272i = i10;
        this.f36273o = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.w
    public final Object[] b() {
        return this.f36274p.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.w
    public final int c() {
        return this.f36274p.c() + this.f36272i;
    }

    @Override // lg.w
    final int d() {
        return this.f36274p.c() + this.f36272i + this.f36273o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.w
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f36273o, "index");
        return this.f36274p.get(i10 + this.f36272i);
    }

    @Override // lg.z
    public final z h(int i10, int i11) {
        t.c(i10, i11, this.f36273o);
        int i12 = this.f36272i;
        return this.f36274p.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f36273o;
    }

    @Override // lg.z, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
