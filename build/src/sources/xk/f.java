package xk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum f {
    L(1),
    M(0),
    Q(3),
    H(2);
    

    /* renamed from: q  reason: collision with root package name */
    private static final f[] f53366q;

    /* renamed from: d  reason: collision with root package name */
    private final int f53368d;

    static {
        f fVar = L;
        f fVar2 = M;
        f fVar3 = Q;
        f53366q = new f[]{fVar2, fVar, H, fVar3};
    }

    f(int i10) {
        this.f53368d = i10;
    }

    public static f a(int i10) {
        if (i10 >= 0) {
            f[] fVarArr = f53366q;
            if (i10 < fVarArr.length) {
                return fVarArr[i10];
            }
        }
        throw new IllegalArgumentException();
    }

    public int d() {
        return this.f53368d;
    }
}
