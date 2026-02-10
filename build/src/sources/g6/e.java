package g6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f24981c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f24982d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f24983e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f24984f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f24985g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f24986h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f24987i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f24988j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f24989k;

    /* renamed from: a  reason: collision with root package name */
    private a f24990a;

    /* renamed from: b  reason: collision with root package name */
    private b f24991b;

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
        f24983e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f24984f = new e(aVar2, bVar);
        f24985g = new e(a.xMaxYMax, bVar);
        f24986h = new e(a.xMidYMin, bVar);
        f24987i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f24988j = new e(aVar, bVar2);
        f24989k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f24990a = aVar;
        this.f24991b = bVar;
    }

    public a a() {
        return this.f24990a;
    }

    public b b() {
        return this.f24991b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f24990a == eVar.f24990a && this.f24991b == eVar.f24991b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f24990a + " " + this.f24991b;
    }
}
