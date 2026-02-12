package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rc extends mc {

    /* renamed from: p  reason: collision with root package name */
    static final mc f42392p = new rc(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f42393i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f42394o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public rc(Object[] objArr, int i10) {
        this.f42393i = objArr;
        this.f42394o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.mc, pg.la
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f42393i, 0, objArr, 0, this.f42394o);
        return this.f42394o;
    }

    @Override // pg.la
    final int c() {
        return this.f42394o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final Object[] e() {
        return this.f42393i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f42394o, "index");
        Object obj = this.f42393i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f42394o;
    }
}
