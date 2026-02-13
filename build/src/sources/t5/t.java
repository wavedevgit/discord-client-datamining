package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49183a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49184b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f49185c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.b f49186d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f49187e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49188f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        SIMULTANEOUSLY,
        INDIVIDUALLY;

        public static a d(int i10) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return INDIVIDUALLY;
                }
                throw new IllegalArgumentException("Unknown trim path type " + i10);
            }
            return SIMULTANEOUSLY;
        }
    }

    public t(String str, a aVar, s5.b bVar, s5.b bVar2, s5.b bVar3, boolean z10) {
        this.f49183a = str;
        this.f49184b = aVar;
        this.f49185c = bVar;
        this.f49186d = bVar2;
        this.f49187e = bVar3;
        this.f49188f = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.u(bVar, this);
    }

    public s5.b b() {
        return this.f49186d;
    }

    public String c() {
        return this.f49183a;
    }

    public s5.b d() {
        return this.f49187e;
    }

    public s5.b e() {
        return this.f49185c;
    }

    public a f() {
        return this.f49184b;
    }

    public boolean g() {
        return this.f49188f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f49185c + ", end: " + this.f49186d + ", offset: " + this.f49187e + "}";
    }
}
