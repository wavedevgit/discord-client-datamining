package s5;

import n5.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49315a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49316b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49317c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f49318d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49319e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49320f;

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

    public t(String str, a aVar, r5.b bVar, r5.b bVar2, r5.b bVar3, boolean z10) {
        this.f49315a = str;
        this.f49316b = aVar;
        this.f49317c = bVar;
        this.f49318d = bVar2;
        this.f49319e = bVar3;
        this.f49320f = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new u(bVar, this);
    }

    public r5.b b() {
        return this.f49318d;
    }

    public String c() {
        return this.f49315a;
    }

    public r5.b d() {
        return this.f49319e;
    }

    public r5.b e() {
        return this.f49317c;
    }

    public a f() {
        return this.f49316b;
    }

    public boolean g() {
        return this.f49320f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f49317c + ", end: " + this.f49318d + ", offset: " + this.f49319e + "}";
    }
}
