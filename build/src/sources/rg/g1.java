package rg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g1 extends m0 {

    /* renamed from: q  reason: collision with root package name */
    static final m0 f48213q = new g1(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f48214o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f48215p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g1(Object[] objArr, int i10) {
        this.f48214o = objArr;
        this.f48215p = i10;
    }

    @Override // rg.m0, rg.h0
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f48214o, 0, objArr, 0, this.f48215p);
        return this.f48215p;
    }

    @Override // rg.h0
    final int c() {
        return this.f48215p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final Object[] e() {
        return this.f48214o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f48215p, "index");
        Object obj = this.f48214o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f48215p;
    }
}
