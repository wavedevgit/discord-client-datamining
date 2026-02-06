package hg;

import java.util.List;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends i {

    /* renamed from: o  reason: collision with root package name */
    final transient int f25970o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f25971p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i f25972q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar, int i10, int i11) {
        Objects.requireNonNull(iVar);
        this.f25972q = iVar;
        this.f25970o = i10;
        this.f25971p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hg.d
    public final Object[] b() {
        return this.f25972q.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hg.d
    public final int c() {
        return this.f25972q.c() + this.f25970o;
    }

    @Override // hg.d
    final int d() {
        return this.f25972q.c() + this.f25970o + this.f25971p;
    }

    @Override // hg.i
    public final i g(int i10, int i11) {
        z.d(i10, i11, this.f25971p);
        int i12 = this.f25970o;
        return this.f25972q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        z.b(i10, this.f25971p, "index");
        return this.f25972q.get(i10 + this.f25970o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f25971p;
    }

    @Override // hg.i, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
