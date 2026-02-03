package lt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum e implements kt.y {
    FULL(0),
    LONG(1),
    MEDIUM(2),
    SHORT(3);
    

    /* renamed from: q  reason: collision with root package name */
    private static e[] f37678q = values();

    /* renamed from: d  reason: collision with root package name */
    private final transient int f37680d;

    e(int i10) {
        this.f37680d = i10;
    }

    public static e d(int i10) {
        e[] eVarArr;
        for (e eVar : f37678q) {
            if (eVar.a() == i10) {
                return eVar;
            }
        }
        throw new UnsupportedOperationException("Unknown format style: " + i10);
    }

    @Override // kt.y
    public int a() {
        return this.f37680d;
    }
}
