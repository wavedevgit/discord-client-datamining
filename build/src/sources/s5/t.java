package s5;

import n5.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48851a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48852b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f48853c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f48854d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f48855e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48856f;

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
        this.f48851a = str;
        this.f48852b = aVar;
        this.f48853c = bVar;
        this.f48854d = bVar2;
        this.f48855e = bVar3;
        this.f48856f = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new u(bVar, this);
    }

    public r5.b b() {
        return this.f48854d;
    }

    public String c() {
        return this.f48851a;
    }

    public r5.b d() {
        return this.f48855e;
    }

    public r5.b e() {
        return this.f48853c;
    }

    public a f() {
        return this.f48852b;
    }

    public boolean g() {
        return this.f48856f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f48853c + ", end: " + this.f48854d + ", offset: " + this.f48855e + "}";
    }
}
