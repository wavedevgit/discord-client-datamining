package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class vc extends mc {

    /* renamed from: i  reason: collision with root package name */
    private final transient Object[] f41148i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f41149o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f41150p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public vc(Object[] objArr, int i10, int i11) {
        this.f41148i = objArr;
        this.f41149o = i10;
        this.f41150p = i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f41150p, "index");
        Object obj = this.f41148i[i10 + i10 + this.f41149o];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f41150p;
    }
}
