package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48615a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48616b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f48617c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.b f48618d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f48619e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48620f;

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
        this.f48615a = str;
        this.f48616b = aVar;
        this.f48617c = bVar;
        this.f48618d = bVar2;
        this.f48619e = bVar3;
        this.f48620f = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.u(bVar, this);
    }

    public s5.b b() {
        return this.f48618d;
    }

    public String c() {
        return this.f48615a;
    }

    public s5.b d() {
        return this.f48619e;
    }

    public s5.b e() {
        return this.f48617c;
    }

    public a f() {
        return this.f48616b;
    }

    public boolean g() {
        return this.f48620f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f48617c + ", end: " + this.f48618d + ", offset: " + this.f48619e + "}";
    }
}
