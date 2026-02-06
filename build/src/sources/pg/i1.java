package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient Object[] f44320i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f44321o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f44322p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i1(Object[] objArr, int i10, int i11) {
        this.f44320i = objArr;
        this.f44321o = i10;
        this.f44322p = i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f44322p, "index");
        Object obj = this.f44320i[i10 + i10 + this.f44321o];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f44322p;
    }
}
