package kt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum e implements jt.y {
    FULL(0),
    LONG(1),
    MEDIUM(2),
    SHORT(3);
    

    /* renamed from: q  reason: collision with root package name */
    private static e[] f36580q = values();

    /* renamed from: d  reason: collision with root package name */
    private final transient int f36582d;

    e(int i10) {
        this.f36582d = i10;
    }

    public static e d(int i10) {
        e[] eVarArr;
        for (e eVar : f36580q) {
            if (eVar.a() == i10) {
                return eVar;
            }
        }
        throw new UnsupportedOperationException("Unknown format style: " + i10);
    }

    @Override // jt.y
    public int a() {
        return this.f36582d;
    }
}
