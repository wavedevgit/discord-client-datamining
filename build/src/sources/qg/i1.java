package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient Object[] f44550i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f44551o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f44552p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i1(Object[] objArr, int i10, int i11) {
        this.f44550i = objArr;
        this.f44551o = i10;
        this.f44552p = i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f44552p, "index");
        Object obj = this.f44550i[i10 + i10 + this.f44551o];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f44552p;
    }
}
