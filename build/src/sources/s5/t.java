package s5;

import n5.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49796a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49797b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49798c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f49799d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49800e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49801f;

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
        this.f49796a = str;
        this.f49797b = aVar;
        this.f49798c = bVar;
        this.f49799d = bVar2;
        this.f49800e = bVar3;
        this.f49801f = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new u(bVar, this);
    }

    public r5.b b() {
        return this.f49799d;
    }

    public String c() {
        return this.f49796a;
    }

    public r5.b d() {
        return this.f49800e;
    }

    public r5.b e() {
        return this.f49798c;
    }

    public a f() {
        return this.f49797b;
    }

    public boolean g() {
        return this.f49801f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f49798c + ", end: " + this.f49799d + ", offset: " + this.f49800e + "}";
    }
}
