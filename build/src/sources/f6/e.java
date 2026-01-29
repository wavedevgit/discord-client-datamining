package f6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f24467c = new e(null, null);

    /* renamed from: d  reason: collision with root package name */
    public static final e f24468d = new e(a.none, null);

    /* renamed from: e  reason: collision with root package name */
    public static final e f24469e;

    /* renamed from: f  reason: collision with root package name */
    public static final e f24470f;

    /* renamed from: g  reason: collision with root package name */
    public static final e f24471g;

    /* renamed from: h  reason: collision with root package name */
    public static final e f24472h;

    /* renamed from: i  reason: collision with root package name */
    public static final e f24473i;

    /* renamed from: j  reason: collision with root package name */
    public static final e f24474j;

    /* renamed from: k  reason: collision with root package name */
    public static final e f24475k;

    /* renamed from: a  reason: collision with root package name */
    private a f24476a;

    /* renamed from: b  reason: collision with root package name */
    private b f24477b;

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
        f24469e = new e(aVar, bVar);
        a aVar2 = a.xMinYMin;
        f24470f = new e(aVar2, bVar);
        f24471g = new e(a.xMaxYMax, bVar);
        f24472h = new e(a.xMidYMin, bVar);
        f24473i = new e(a.xMidYMax, bVar);
        b bVar2 = b.slice;
        f24474j = new e(aVar, bVar2);
        f24475k = new e(aVar2, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, b bVar) {
        this.f24476a = aVar;
        this.f24477b = bVar;
    }

    public a a() {
        return this.f24476a;
    }

    public b b() {
        return this.f24477b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        e eVar = (e) obj;
        if (this.f24476a == eVar.f24476a && this.f24477b == eVar.f24477b) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f24476a + " " + this.f24477b;
    }
}
