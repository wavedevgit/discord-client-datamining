package hg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends i {

    /* renamed from: o  reason: collision with root package name */
    private final transient i f25969o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(i iVar) {
        this.f25969o = iVar;
    }

    private final int q(int i10) {
        return (this.f25969o.size() - 1) - i10;
    }

    @Override // hg.i, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        return this.f25969o.contains(obj);
    }

    @Override // hg.i
    public final i f() {
        return this.f25969o;
    }

    @Override // hg.i
    public final i g(int i10, int i11) {
        i iVar = this.f25969o;
        z.d(i10, i11, iVar.size());
        return iVar.subList(iVar.size() - i11, iVar.size() - i10).f();
    }

    @Override // java.util.List
    public final Object get(int i10) {
        i iVar = this.f25969o;
        z.b(i10, iVar.size(), "index");
        return iVar.get(q(i10));
    }

    @Override // hg.i, java.util.List
    public final int indexOf(Object obj) {
        int lastIndexOf = this.f25969o.lastIndexOf(obj);
        if (lastIndexOf >= 0) {
            return q(lastIndexOf);
        }
        return -1;
    }

    @Override // hg.i, java.util.List
    public final int lastIndexOf(Object obj) {
        int indexOf = this.f25969o.indexOf(obj);
        if (indexOf >= 0) {
            return q(indexOf);
        }
        return -1;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f25969o.size();
    }

    @Override // hg.i, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
