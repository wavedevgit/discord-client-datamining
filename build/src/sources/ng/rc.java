package ng;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rc extends mc {

    /* renamed from: p  reason: collision with root package name */
    static final mc f40973p = new rc(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f40974i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40975o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public rc(Object[] objArr, int i10) {
        this.f40974i = objArr;
        this.f40975o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.mc, ng.la
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f40974i, 0, objArr, 0, this.f40975o);
        return this.f40975o;
    }

    @Override // ng.la
    final int c() {
        return this.f40975o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final Object[] e() {
        return this.f40974i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f40975o, "index");
        Object obj = this.f40974i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f40975o;
    }
}
