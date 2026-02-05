package f6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f22295c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f22296d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f22297e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f22298f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f22299g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f22300h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f22301i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f22302j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f22303k;

    /* renamed from: a  reason: collision with root package name */
    private a f22304a;

    /* renamed from: b  reason: collision with root package name */
    private b f22305b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        none,
        xMinYMin,
        xMidYMin,
        xMaxYMin,
        xMinYMid,
        xMidYMid,
        xMaxYMid,
        xMinYMax,
        xMidYMax,
        xMaxYMax
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        meet,
        slice
    }

    static {
        a aVar = a.xMidYMid;
        b bVar = b.meet;
        f22297e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f22298f = new e(aVar2, bVar);
        f22299g = new e(a.xMaxYMax, bVar);
        f22300h = new e(a.xMidYMin, bVar);
        f22301i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f22302j = new e(aVar, bVar2);
        f22303k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f22304a = aVar;
        this.f22305b = bVar;
    }

    public a a() {
        return this.f22304a;
    }

    public b b() {
        return this.f22305b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f22304a == eVar.f22304a && this.f22305b == eVar.f22305b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f22304a + " " + this.f22305b;
    }
}
