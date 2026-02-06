package f6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f22596c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f22597d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f22598e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f22599f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f22600g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f22601h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f22602i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f22603j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f22604k;

    /* renamed from: a  reason: collision with root package name */
    private a f22605a;

    /* renamed from: b  reason: collision with root package name */
    private b f22606b;

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
        f22598e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f22599f = new e(aVar2, bVar);
        f22600g = new e(a.xMaxYMax, bVar);
        f22601h = new e(a.xMidYMin, bVar);
        f22602i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f22603j = new e(aVar, bVar2);
        f22604k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f22605a = aVar;
        this.f22606b = bVar;
    }

    public a a() {
        return this.f22605a;
    }

    public b b() {
        return this.f22606b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f22605a == eVar.f22605a && this.f22606b == eVar.f22606b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f22605a + " " + this.f22606b;
    }
}
