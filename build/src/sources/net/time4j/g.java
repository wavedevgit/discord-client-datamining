package net.time4j;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g implements v {

    /* renamed from: d  reason: collision with root package name */
    public static final g f40588d;

    /* renamed from: e  reason: collision with root package name */
    public static final g f40589e;

    /* renamed from: i  reason: collision with root package name */
    public static final g f40590i;

    /* renamed from: o  reason: collision with root package name */
    public static final g f40591o;

    /* renamed from: p  reason: collision with root package name */
    public static final g f40592p;

    /* renamed from: q  reason: collision with root package name */
    public static final g f40593q;

    /* renamed from: r  reason: collision with root package name */
    private static final long[] f40594r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ g[] f40595s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends g {
        a(String str, int i10) {
            super(str, i10, null);
        }

        @Override // net.time4j.w
        public char d() {
            return 'H';
        }

        @Override // jt.w
        public double getLength() {
            return 3600.0d;
        }
    }

    static {
        a aVar = new a("HOURS", 0);
        f40588d = aVar;
        g gVar = new g("MINUTES", 1) { // from class: net.time4j.g.b
            @Override // net.time4j.w
            public char d() {
                return 'M';
            }

            @Override // jt.w
            public double getLength() {
                return 60.0d;
            }
        };
        f40589e = gVar;
        g gVar2 = new g("SECONDS", 2) { // from class: net.time4j.g.c
            @Override // net.time4j.w
            public char d() {
                return 'S';
            }

            @Override // jt.w
            public double getLength() {
                return 1.0d;
            }
        };
        f40590i = gVar2;
        g gVar3 = new g("MILLIS", 3) { // from class: net.time4j.g.d
            @Override // net.time4j.w
            public char d() {
                return '3';
            }

            @Override // jt.w
            public double getLength() {
                return 0.001d;
            }
        };
        f40591o = gVar3;
        g gVar4 = new g("MICROS", 4) { // from class: net.time4j.g.e
            @Override // net.time4j.w
            public char d() {
                return '6';
            }

            @Override // jt.w
            public double getLength() {
                return 1.0E-6d;
            }
        };
        f40592p = gVar4;
        g gVar5 = new g("NANOS", 5) { // from class: net.time4j.g.f
            @Override // net.time4j.w
            public char d() {
                return '9';
            }

            @Override // jt.w
            public double getLength() {
                return 1.0E-9d;
            }
        };
        f40593q = gVar5;
        f40595s = new g[]{aVar, gVar, gVar2, gVar3, gVar4, gVar5};
        f40594r = new long[]{1, 60, 3600, LogThrottleSingleton.RATE_LIMIT_ONE_HOUR, 3600000000L, 3600000000000L};
    }

    private g(String str, int i10) {
    }

    public static g valueOf(String str) {
        return (g) Enum.valueOf(g.class, str);
    }

    public static g[] values() {
        return (g[]) f40595s.clone();
    }

    @Override // jt.w
    public boolean a() {
        return false;
    }

    public long e(jt.k0 k0Var, jt.k0 k0Var2) {
        return k0Var.L(k0Var2, this);
    }

    /* synthetic */ g(String str, int i10, a aVar) {
        this(str, i10);
    }
}
