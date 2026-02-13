package ng;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends f {

    /* renamed from: q  reason: collision with root package name */
    static final f f38434q = new l(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f38435o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f38436p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(Object[] objArr, int i10) {
        this.f38435o = objArr;
        this.f38436p = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.f, ng.c
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f38435o, 0, objArr, 0, this.f38436p);
        return this.f38436p;
    }

    @Override // ng.c
    final int c() {
        return this.f38436p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.c
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.c
    public final Object[] e() {
        return this.f38435o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f38436p, "index");
        Object obj = this.f38435o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f38436p;
    }
}
