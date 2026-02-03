package s5;

import n5.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48905a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48906b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f48907c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f48908d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f48909e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48910f;

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
        this.f48905a = str;
        this.f48906b = aVar;
        this.f48907c = bVar;
        this.f48908d = bVar2;
        this.f48909e = bVar3;
        this.f48910f = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new u(bVar, this);
    }

    public r5.b b() {
        return this.f48908d;
    }

    public String c() {
        return this.f48905a;
    }

    public r5.b d() {
        return this.f48909e;
    }

    public r5.b e() {
        return this.f48907c;
    }

    public a f() {
        return this.f48906b;
    }

    public boolean g() {
        return this.f48910f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f48907c + ", end: " + this.f48908d + ", offset: " + this.f48909e + "}";
    }
}
