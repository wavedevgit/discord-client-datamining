package g6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f23681c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f23682d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f23683e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f23684f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f23685g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f23686h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f23687i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f23688j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f23689k;

    /* renamed from: a  reason: collision with root package name */
    private a f23690a;

    /* renamed from: b  reason: collision with root package name */
    private b f23691b;

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
        f23683e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f23684f = new e(aVar2, bVar);
        f23685g = new e(a.xMaxYMax, bVar);
        f23686h = new e(a.xMidYMin, bVar);
        f23687i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f23688j = new e(aVar, bVar2);
        f23689k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f23690a = aVar;
        this.f23691b = bVar;
    }

    public a a() {
        return this.f23690a;
    }

    public b b() {
        return this.f23691b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f23690a == eVar.f23690a && this.f23691b == eVar.f23691b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f23690a + " " + this.f23691b;
    }
}
