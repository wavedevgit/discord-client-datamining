package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50682a;

    /* renamed from: b  reason: collision with root package name */
    private final a f50683b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f50684c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.b f50685d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f50686e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f50687f;

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
        this.f50682a = str;
        this.f50683b = aVar;
        this.f50684c = bVar;
        this.f50685d = bVar2;
        this.f50686e = bVar3;
        this.f50687f = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.u(bVar, this);
    }

    public s5.b b() {
        return this.f50685d;
    }

    public String c() {
        return this.f50682a;
    }

    public s5.b d() {
        return this.f50686e;
    }

    public s5.b e() {
        return this.f50684c;
    }

    public a f() {
        return this.f50683b;
    }

    public boolean g() {
        return this.f50687f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f50684c + ", end: " + this.f50685d + ", offset: " + this.f50686e + "}";
    }
}
