package g6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f24982c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f24983d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f24984e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f24985f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f24986g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f24987h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f24988i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f24989j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f24990k;

    /* renamed from: a  reason: collision with root package name */
    private a f24991a;

    /* renamed from: b  reason: collision with root package name */
    private b f24992b;

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
        f24984e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f24985f = new e(aVar2, bVar);
        f24986g = new e(a.xMaxYMax, bVar);
        f24987h = new e(a.xMidYMin, bVar);
        f24988i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f24989j = new e(aVar, bVar2);
        f24990k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f24991a = aVar;
        this.f24992b = bVar;
    }

    public a a() {
        return this.f24991a;
    }

    public b b() {
        return this.f24992b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f24991a == eVar.f24991a && this.f24992b == eVar.f24992b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f24991a + " " + this.f24992b;
    }
}
