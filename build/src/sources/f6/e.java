package f6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f23678c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f23679d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f23680e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f23681f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f23682g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f23683h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f23684i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f23685j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f23686k;

    /* renamed from: a  reason: collision with root package name */
    private a f23687a;

    /* renamed from: b  reason: collision with root package name */
    private b f23688b;

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
        f23680e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f23681f = new e(aVar2, bVar);
        f23682g = new e(a.xMaxYMax, bVar);
        f23683h = new e(a.xMidYMin, bVar);
        f23684i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f23685j = new e(aVar, bVar2);
        f23686k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f23687a = aVar;
        this.f23688b = bVar;
    }

    public a a() {
        return this.f23687a;
    }

    public b b() {
        return this.f23688b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f23687a == eVar.f23687a && this.f23688b == eVar.f23688b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f23687a + " " + this.f23688b;
    }
}
