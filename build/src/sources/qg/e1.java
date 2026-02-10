package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e1 extends p0 {

    /* renamed from: p  reason: collision with root package name */
    static final p0 f44378p = new e1(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f44379i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f44380o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(Object[] objArr, int i10) {
        this.f44379i = objArr;
        this.f44380o = i10;
    }

    @Override // qg.p0, qg.k0
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f44379i, 0, objArr, 0, this.f44380o);
        return this.f44380o;
    }

    @Override // qg.k0
    final int c() {
        return this.f44380o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final Object[] e() {
        return this.f44379i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f44380o, "index");
        Object obj = this.f44379i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f44380o;
    }
}
