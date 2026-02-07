package hg;

import java.util.List;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends i {

    /* renamed from: o  reason: collision with root package name */
    final transient int f26018o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f26019p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i f26020q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar, int i10, int i11) {
        Objects.requireNonNull(iVar);
        this.f26020q = iVar;
        this.f26018o = i10;
        this.f26019p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hg.d
    public final Object[] b() {
        return this.f26020q.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hg.d
    public final int c() {
        return this.f26020q.c() + this.f26018o;
    }

    @Override // hg.d
    final int d() {
        return this.f26020q.c() + this.f26018o + this.f26019p;
    }

    @Override // hg.i
    public final i g(int i10, int i11) {
        z.d(i10, i11, this.f26019p);
        int i12 = this.f26018o;
        return this.f26020q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        z.b(i10, this.f26019p, "index");
        return this.f26020q.get(i10 + this.f26018o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f26019p;
    }

    @Override // hg.i, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
