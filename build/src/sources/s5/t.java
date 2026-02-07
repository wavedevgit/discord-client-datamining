package s5;

import n5.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49844a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49845b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49846c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f49847d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49848e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49849f;

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
        this.f49844a = str;
        this.f49845b = aVar;
        this.f49846c = bVar;
        this.f49847d = bVar2;
        this.f49848e = bVar3;
        this.f49849f = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new u(bVar, this);
    }

    public r5.b b() {
        return this.f49847d;
    }

    public String c() {
        return this.f49844a;
    }

    public r5.b d() {
        return this.f49848e;
    }

    public r5.b e() {
        return this.f49846c;
    }

    public a f() {
        return this.f49845b;
    }

    public boolean g() {
        return this.f49849f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f49846c + ", end: " + this.f49847d + ", offset: " + this.f49848e + "}";
    }
}
