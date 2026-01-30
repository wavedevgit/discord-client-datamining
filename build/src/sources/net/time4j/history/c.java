package net.time4j.history;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class c implements net.time4j.history.b {

    /* renamed from: d  reason: collision with root package name */
    public static final c f40650d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f40651e;

    /* renamed from: i  reason: collision with root package name */
    public static final c f40652i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ c[] f40653o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends c {
        a(String str, int i10) {
            super(str, i10, null);
        }

        @Override // net.time4j.history.b
        public long a(h hVar) {
            return gt.b.j(c.h(hVar), hVar.f(), hVar.d());
        }

        @Override // net.time4j.history.b
        public int d(h hVar) {
            return gt.b.d(c.h(hVar), hVar.f());
        }

        @Override // net.time4j.history.b
        public h e(long j10) {
            j jVar;
            long l10 = gt.b.l(j10);
            int i10 = gt.b.i(l10);
            int h10 = gt.b.h(l10);
            int g10 = gt.b.g(l10);
            if (i10 <= 0) {
                jVar = j.BC;
            } else {
                jVar = j.AD;
            }
            if (i10 <= 0) {
                i10 = 1 - i10;
            }
            return new h(jVar, i10, h10, g10);
        }

        @Override // net.time4j.history.b
        public boolean f(h hVar) {
            return gt.b.f(c.h(hVar), hVar.f(), hVar.d());
        }
    }

    static {
        a aVar = new a("GREGORIAN", 0);
        f40650d = aVar;
        c cVar = new c("JULIAN", 1) { // from class: net.time4j.history.c.b
            @Override // net.time4j.history.b
            public long a(h hVar) {
                return m.h(c.h(hVar), hVar.f(), hVar.d());
            }

            @Override // net.time4j.history.b
            public int d(h hVar) {
                return m.b(c.h(hVar), hVar.f());
            }

            @Override // net.time4j.history.b
            public h e(long j10) {
                j jVar;
                long i10 = m.i(j10);
                int g10 = m.g(i10);
                int f10 = m.f(i10);
                int e10 = m.e(i10);
                if (g10 <= 0) {
                    jVar = j.BC;
                } else {
                    jVar = j.AD;
                }
                if (g10 <= 0) {
                    g10 = 1 - g10;
                }
                return new h(jVar, g10, f10, e10);
            }

            @Override // net.time4j.history.b
            public boolean f(h hVar) {
                return m.d(c.h(hVar), hVar.f(), hVar.d());
            }
        };
        f40651e = cVar;
        c cVar2 = new c("SWEDISH", 2) { // from class: net.time4j.history.c.c
            @Override // net.time4j.history.b
            public long a(h hVar) {
                int h10 = c.h(hVar);
                if (hVar.d() == 30 && hVar.f() == 2 && h10 == 1712) {
                    return -53576L;
                }
                return m.h(h10, hVar.f(), hVar.d()) - 1;
            }

            @Override // net.time4j.history.b
            public int d(h hVar) {
                int h10 = c.h(hVar);
                if (hVar.f() == 2 && h10 == 1712) {
                    return 30;
                }
                return m.b(h10, hVar.f());
            }

            @Override // net.time4j.history.b
            public h e(long j10) {
                if (j10 == -53576) {
                    return new h(j.AD, 1712, 2, 30);
                }
                return c.f40651e.e(j10 + 1);
            }

            @Override // net.time4j.history.b
            public boolean f(h hVar) {
                int h10 = c.h(hVar);
                if (hVar.d() == 30 && hVar.f() == 2 && h10 == 1712) {
                    return true;
                }
                return m.d(h10, hVar.f(), hVar.d());
            }
        };
        f40652i = cVar2;
        f40653o = new c[]{aVar, cVar, cVar2};
    }

    private c(String str, int i10) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int h(h hVar) {
        return hVar.e().a(hVar.g());
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f40653o.clone();
    }

    /* synthetic */ c(String str, int i10, a aVar) {
        this(str, i10);
    }
}
