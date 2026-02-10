package dl;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class c {

    /* renamed from: d  reason: collision with root package name */
    public static final c f20789d;

    /* renamed from: e  reason: collision with root package name */
    public static final c f20790e;

    /* renamed from: i  reason: collision with root package name */
    public static final c f20791i;

    /* renamed from: o  reason: collision with root package name */
    public static final c f20792o;

    /* renamed from: p  reason: collision with root package name */
    public static final c f20793p;

    /* renamed from: q  reason: collision with root package name */
    public static final c f20794q;

    /* renamed from: r  reason: collision with root package name */
    public static final c f20795r;

    /* renamed from: s  reason: collision with root package name */
    public static final c f20796s;

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ c[] f20797t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    enum a extends c {
        a(String str, int i10) {
            super(str, i10, null);
        }

        @Override // dl.c
        boolean a(int i10, int i11) {
            if (((i10 + i11) & 1) == 0) {
                return true;
            }
            return false;
        }
    }

    static {
        a aVar = new a("DATA_MASK_000", 0);
        f20789d = aVar;
        c cVar = new c("DATA_MASK_001", 1) { // from class: dl.c.b
            @Override // dl.c
            boolean a(int i10, int i11) {
                if ((i10 & 1) == 0) {
                    return true;
                }
                return false;
            }
        };
        f20790e = cVar;
        c cVar2 = new c("DATA_MASK_010", 2) { // from class: dl.c.c
            @Override // dl.c
            boolean a(int i10, int i11) {
                if (i11 % 3 == 0) {
                    return true;
                }
                return false;
            }
        };
        f20791i = cVar2;
        c cVar3 = new c("DATA_MASK_011", 3) { // from class: dl.c.d
            @Override // dl.c
            boolean a(int i10, int i11) {
                if ((i10 + i11) % 3 == 0) {
                    return true;
                }
                return false;
            }
        };
        f20792o = cVar3;
        c cVar4 = new c("DATA_MASK_100", 4) { // from class: dl.c.e
            @Override // dl.c
            boolean a(int i10, int i11) {
                if ((((i10 / 2) + (i11 / 3)) & 1) == 0) {
                    return true;
                }
                return false;
            }
        };
        f20793p = cVar4;
        c cVar5 = new c("DATA_MASK_101", 5) { // from class: dl.c.f
            @Override // dl.c
            boolean a(int i10, int i11) {
                if ((i10 * i11) % 6 == 0) {
                    return true;
                }
                return false;
            }
        };
        f20794q = cVar5;
        c cVar6 = new c("DATA_MASK_110", 6) { // from class: dl.c.g
            @Override // dl.c
            boolean a(int i10, int i11) {
                if ((i10 * i11) % 6 < 3) {
                    return true;
                }
                return false;
            }
        };
        f20795r = cVar6;
        c cVar7 = new c("DATA_MASK_111", 7) { // from class: dl.c.h
            @Override // dl.c
            boolean a(int i10, int i11) {
                if (((i10 + i11 + ((i10 * i11) % 3)) & 1) == 0) {
                    return true;
                }
                return false;
            }
        };
        f20796s = cVar7;
        f20797t = new c[]{aVar, cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7};
    }

    private c(String str, int i10) {
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f20797t.clone();
    }

    abstract boolean a(int i10, int i11);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void d(mk.b bVar, int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            for (int i12 = 0; i12 < i10; i12++) {
                if (a(i11, i12)) {
                    bVar.d(i12, i11);
                }
            }
        }
    }

    /* synthetic */ c(String str, int i10, a aVar) {
        this(str, i10);
    }
}
