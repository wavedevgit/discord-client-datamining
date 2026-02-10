package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e1 extends p0 {

    /* renamed from: p  reason: collision with root package name */
    static final p0 f45710p = new e1(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f45711i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f45712o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(Object[] objArr, int i10) {
        this.f45711i = objArr;
        this.f45712o = i10;
    }

    @Override // qg.p0, qg.k0
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f45711i, 0, objArr, 0, this.f45712o);
        return this.f45712o;
    }

    @Override // qg.k0
    final int c() {
        return this.f45712o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final Object[] e() {
        return this.f45711i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f45712o, "index");
        Object obj = this.f45711i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f45712o;
    }
}
