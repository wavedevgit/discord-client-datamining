package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rc extends mc {

    /* renamed from: p  reason: collision with root package name */
    static final mc f43933p = new rc(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f43934i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f43935o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public rc(Object[] objArr, int i10) {
        this.f43934i = objArr;
        this.f43935o = i10;
    }

    @Override // pg.mc, pg.la
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f43934i, 0, objArr, 0, this.f43935o);
        return this.f43935o;
    }

    @Override // pg.la
    final int c() {
        return this.f43935o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.la
    public final Object[] e() {
        return this.f43934i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f43935o, "index");
        Object obj = this.f43934i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f43935o;
    }
}
