package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class vc extends mc {

    /* renamed from: i  reason: collision with root package name */
    private final transient Object[] f41786i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f41787o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f41788p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public vc(Object[] objArr, int i10, int i11) {
        this.f41786i = objArr;
        this.f41787o = i10;
        this.f41788p = i11;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        f4.a(i10, this.f41788p, "index");
        Object obj = this.f41786i[i10 + i10 + this.f41787o];
        obj.getClass();
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f41788p;
    }
}
