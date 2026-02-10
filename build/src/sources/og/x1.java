package og;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x1 extends i1 {

    /* renamed from: q  reason: collision with root package name */
    static final i1 f39782q = new x1(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f39783o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f39784p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x1(Object[] objArr, int i10) {
        this.f39783o = objArr;
        this.f39784p = i10;
    }

    @Override // og.i1, og.d1
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f39783o, 0, objArr, i10, this.f39784p);
        return i10 + this.f39784p;
    }

    @Override // og.d1
    final int c() {
        return this.f39784p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final Object[] e() {
        return this.f39783o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f39784p, "index");
        Object obj = this.f39783o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f39784p;
    }
}
