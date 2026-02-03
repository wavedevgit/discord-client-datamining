package ng;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rc extends mc {

    /* renamed from: p  reason: collision with root package name */
    static final mc f41474p = new rc(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f41475i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f41476o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public rc(Object[] objArr, int i10) {
        this.f41475i = objArr;
        this.f41476o = i10;
    }

    @Override // ng.mc, ng.la
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f41475i, 0, objArr, 0, this.f41476o);
        return this.f41476o;
    }

    @Override // ng.la
    final int c() {
        return this.f41476o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.la
    public final Object[] e() {
        return this.f41475i;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f41476o, "index");
        Object obj = this.f41475i[i10];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f41476o;
    }
}
