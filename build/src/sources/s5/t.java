package s5;

import n5.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49461a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49462b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49463c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f49464d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49465e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49466f;

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
        this.f49461a = str;
        this.f49462b = aVar;
        this.f49463c = bVar;
        this.f49464d = bVar2;
        this.f49465e = bVar3;
        this.f49466f = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new u(bVar, this);
    }

    public r5.b b() {
        return this.f49464d;
    }

    public String c() {
        return this.f49461a;
    }

    public r5.b d() {
        return this.f49465e;
    }

    public r5.b e() {
        return this.f49463c;
    }

    public a f() {
        return this.f49462b;
    }

    public boolean g() {
        return this.f49466f;
    }

    public String toString() {
        return "Trim Path: {start: " + this.f49463c + ", end: " + this.f49464d + ", offset: " + this.f49465e + "}";
    }
}
