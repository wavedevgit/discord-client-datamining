package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48614a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48615b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f48616c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.b f48617d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f48618e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48619f;

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
        this.f48614a = str;
        this.f48615b = aVar;
        this.f48616c = bVar;
        this.f48617d = bVar2;
        this.f48618e = bVar3;
        this.f48619f = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.u(bVar, this);
    }

    public s5.b b() {
        return this.f48617d;
    }

    public String c() {
        return this.f48614a;
    }

    public s5.b d() {
        return this.f48618e;
    }

    public s5.b e() {
        return this.f48616c;
    }

    public a f() {
        return this.f48615b;
    }

    public boolean g() {
        return this.f48619f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f48616c + ", end: " + this.f48617d + ", offset: " + this.f48618e + "}";
    }
}
