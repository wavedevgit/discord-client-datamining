package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e1 extends p0 {

    /* renamed from: p  reason: collision with root package name */
    static final p0 f42900p = new e1(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f42901i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f42902o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(Object[] objArr, int i10) {
        this.f42901i = objArr;
        this.f42902o = i10;
    }

    @Override // og.p0, og.k0
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f42901i, 0, objArr, 0, this.f42902o);
        return this.f42902o;
    }

    @Override // og.k0
    final int c() {
        return this.f42902o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.k0
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.k0
    public final Object[] e() {
        return this.f42901i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f42902o, "index");
        Object obj = this.f42901i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f42902o;
    }
}
