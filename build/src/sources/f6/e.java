package f6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f23270c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f23271d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f23272e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f23273f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f23274g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f23275h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f23276i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f23277j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f23278k;

    /* renamed from: a  reason: collision with root package name */
    private a f23279a;

    /* renamed from: b  reason: collision with root package name */
    private b f23280b;

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
        f23272e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f23273f = new e(aVar2, bVar);
        f23274g = new e(a.xMaxYMax, bVar);
        f23275h = new e(a.xMidYMin, bVar);
        f23276i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f23277j = new e(aVar, bVar2);
        f23278k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f23279a = aVar;
        this.f23280b = bVar;
    }

    public a a() {
        return this.f23279a;
    }

    public b b() {
        return this.f23280b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f23279a == eVar.f23279a && this.f23280b == eVar.f23280b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f23279a + " " + this.f23280b;
    }
}
