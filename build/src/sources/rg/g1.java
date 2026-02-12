package rg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g1 extends m0 {

    /* renamed from: q  reason: collision with root package name */
    static final m0 f46668q = new g1(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f46669o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f46670p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g1(Object[] objArr, int i10) {
        this.f46669o = objArr;
        this.f46670p = i10;
    }

    @Override // rg.m0, rg.h0
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f46669o, 0, objArr, 0, this.f46670p);
        return this.f46670p;
    }

    @Override // rg.h0
    final int c() {
        return this.f46670p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final Object[] e() {
        return this.f46669o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f46670p, "index");
        Object obj = this.f46669o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f46670p;
    }
}
