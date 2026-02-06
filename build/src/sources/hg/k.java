package hg;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends i {

    /* renamed from: q  reason: collision with root package name */
    static final i f25977q = new k(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f25978o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f25979p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object[] objArr, int i10) {
        this.f25978o = objArr;
        this.f25979p = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hg.d
    public final Object[] b() {
        return this.f25978o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hg.d
    public final int c() {
        return 0;
    }

    @Override // hg.d
    final int d() {
        return this.f25979p;
    }

    @Override // hg.i, hg.d
    final int e(Object[] objArr, int i10) {
        Object[] objArr2 = this.f25978o;
        int i11 = this.f25979p;
        System.arraycopy(objArr2, 0, objArr, 0, i11);
        return i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        z.b(i10, this.f25979p, "index");
        Object obj = this.f25978o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f25979p;
    }
}
