package net.time4j;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g implements v {

    /* renamed from: d  reason: collision with root package name */
    public static final g f40506d;

    /* renamed from: e  reason: collision with root package name */
    public static final g f40507e;

    /* renamed from: i  reason: collision with root package name */
    public static final g f40508i;

    /* renamed from: o  reason: collision with root package name */
    public static final g f40509o;

    /* renamed from: p  reason: collision with root package name */
    public static final g f40510p;

    /* renamed from: q  reason: collision with root package name */
    public static final g f40511q;

    /* renamed from: r  reason: collision with root package name */
    private static final long[] f40512r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ g[] f40513s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends g {
        a(String str, int i10) {
            super(str, i10, null);
        }

        @Override // net.time4j.w
        public char d() {
            return 'H';
        }

        @Override // mt.w
        public double getLength() {
            return 3600.0d;
        }
    }

    static {
        a aVar = new a("HOURS", 0);
        f40506d = aVar;
        g gVar = new g("MINUTES", 1) { // from class: net.time4j.g.b
            @Override // net.time4j.w
            public char d() {
                return 'M';
            }

            @Override // mt.w
            public double getLength() {
                return 60.0d;
            }
        };
        f40507e = gVar;
        g gVar2 = new g("SECONDS", 2) { // from class: net.time4j.g.c
            @Override // net.time4j.w
            public char d() {
                return 'S';
            }

            @Override // mt.w
            public double getLength() {
                return 1.0d;
            }
        };
        f40508i = gVar2;
        g gVar3 = new g("MILLIS", 3) { // from class: net.time4j.g.d
            @Override // net.time4j.w
            public char d() {
                return '3';
            }

            @Override // mt.w
            public double getLength() {
                return 0.001d;
            }
        };
        f40509o = gVar3;
        g gVar4 = new g("MICROS", 4) { // from class: net.time4j.g.e
            @Override // net.time4j.w
            public char d() {
                return '6';
            }

            @Override // mt.w
            public double getLength() {
                return 1.0E-6d;
            }
        };
        f40510p = gVar4;
        g gVar5 = new g("NANOS", 5) { // from class: net.time4j.g.f
            @Override // net.time4j.w
            public char d() {
                return '9';
            }

            @Override // mt.w
            public double getLength() {
                return 1.0E-9d;
            }
        };
        f40511q = gVar5;
        f40513s = new g[]{aVar, gVar, gVar2, gVar3, gVar4, gVar5};
        f40512r = new long[]{1, 60, 3600, LogThrottleSingleton.RATE_LIMIT_ONE_HOUR, 3600000000L, 3600000000000L};
    }

    private g(String str, int i10) {
    }

    public static g valueOf(String str) {
        return (g) Enum.valueOf(g.class, str);
    }

    public static g[] values() {
        return (g[]) f40513s.clone();
    }

    @Override // mt.w
    public boolean a() {
        return false;
    }

    public long e(mt.k0 k0Var, mt.k0 k0Var2) {
        return k0Var.L(k0Var2, this);
    }

    /* synthetic */ g(String str, int i10, a aVar) {
        this(str, i10);
    }
}
