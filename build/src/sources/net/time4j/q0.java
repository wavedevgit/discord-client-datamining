package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements zt.e {

    /* renamed from: c  reason: collision with root package name */
    private static final iu.e f37663c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f37664d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f37665e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f37666f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37667a;

    /* renamed from: b  reason: collision with root package name */
    private final long f37668b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements iu.e {
        private b() {
        }

        @Override // iu.e
        public long a() {
            return System.nanoTime();
        }

        @Override // iu.e
        public String b() {
            return "";
        }
    }

    static {
        iu.e eVar;
        String property = System.getProperty("java.vm.name");
        Iterator it = zt.d.c().g(iu.e.class).iterator();
        while (true) {
            if (it.hasNext()) {
                eVar = (iu.e) it.next();
                if (property.equals(eVar.b())) {
                    break;
                }
            } else {
                eVar = null;
                break;
            }
        }
        if (eVar == null) {
            eVar = new b();
        }
        f37663c = eVar;
        f37664d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f37665e = new q0(false, a());
        f37666f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f37667a = z10;
        this.f37668b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f37664d) {
                j10 = System.nanoTime();
            } else {
                j10 = f37663c.a();
            }
            long currentTimeMillis2 = System.currentTimeMillis();
            if (currentTimeMillis == currentTimeMillis2) {
                break;
            }
            i10++;
            currentTimeMillis = currentTimeMillis2;
        }
        return zt.c.m(zt.c.i(iu.d.x().j(zt.c.b(currentTimeMillis, 1000)), 1000000000L) + (zt.c.d(currentTimeMillis, 1000) * 1000000), j10);
    }

    public static a0 b() {
        return f37665e.c();
    }

    private long d() {
        long a10;
        if (f37664d) {
            a10 = System.nanoTime();
        } else {
            a10 = f37663c.a();
        }
        return zt.c.f(a10, this.f37668b);
    }

    public a0 c() {
        if ((this.f37667a || f37664d) && iu.d.x().G()) {
            long d10 = d();
            return a0.l0(zt.c.b(d10, 1000000000), zt.c.d(d10, 1000000000), iu.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(zt.c.b(currentTimeMillis, 1000), zt.c.d(currentTimeMillis, 1000) * 1000000, iu.f.POSIX);
    }
}
