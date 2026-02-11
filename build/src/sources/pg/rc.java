package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rc extends mc {

    /* renamed from: p  reason: collision with root package name */
    static final mc f42391p = new rc(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f42392i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f42393o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public rc(Object[] objArr, int i10) {
        this.f42392i = objArr;
        this.f42393o = i10;
    }

    @Override // pg.mc, pg.la
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f42392i, 0, objArr, 0, this.f42393o);
        return this.f42393o;
    }

    @Override // pg.la
    final int c() {
        return this.f42393o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final Object[] e() {
        return this.f42392i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f42393o, "index");
        Object obj = this.f42392i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f42393o;
    }
}
