package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient Object[] f42978i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f42979o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f42980p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i1(Object[] objArr, int i10, int i11) {
        this.f42978i = objArr;
        this.f42979o = i10;
        this.f42980p = i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f42980p, "index");
        Object obj = this.f42978i[i10 + i10 + this.f42979o];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f42980p;
    }
}
