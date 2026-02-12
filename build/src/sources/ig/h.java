package ig;

import java.util.List;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends i {

    /* renamed from: o  reason: collision with root package name */
    final transient int f27953o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f27954p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i f27955q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar, int i10, int i11) {
        Objects.requireNonNull(iVar);
        this.f27955q = iVar;
        this.f27953o = i10;
        this.f27954p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ig.d
    public final Object[] b() {
        return this.f27955q.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ig.d
    public final int c() {
        return this.f27955q.c() + this.f27953o;
    }

    @Override // ig.d
    final int d() {
        return this.f27955q.c() + this.f27953o + this.f27954p;
    }

    @Override // ig.i
    public final i g(int i10, int i11) {
        z.d(i10, i11, this.f27954p);
        int i12 = this.f27953o;
        return this.f27955q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        z.b(i10, this.f27954p, "index");
        return this.f27955q.get(i10 + this.f27953o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f27954p;
    }

    @Override // ig.i, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
