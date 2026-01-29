package pg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g1 extends m0 {

    /* renamed from: q  reason: collision with root package name */
    static final m0 f45239q = new g1(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f45240o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f45241p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g1(Object[] objArr, int i10) {
        this.f45240o = objArr;
        this.f45241p = i10;
    }

    @Override // pg.m0, pg.h0
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f45240o, 0, objArr, 0, this.f45241p);
        return this.f45241p;
    }

    @Override // pg.h0
    final int c() {
        return this.f45241p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.h0
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.h0
    public final Object[] e() {
        return this.f45240o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f45241p, "index");
        Object obj = this.f45240o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f45241p;
    }
}
