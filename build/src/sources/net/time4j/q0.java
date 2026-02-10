package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements qt.e {

    /* renamed from: c  reason: collision with root package name */
    private static final zt.e f38658c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f38659d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f38660e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f38661f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f38662a;

    /* renamed from: b  reason: collision with root package name */
    private final long f38663b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements zt.e {
        private b() {
        }

        @Override // zt.e
        public long a() {
            return System.nanoTime();
        }

        @Override // zt.e
        public String b() {
            return "";
        }
    }

    static {
        zt.e eVar;
        String property = System.getProperty("java.vm.name");
        Iterator it = qt.d.c().g(zt.e.class).iterator();
        while (true) {
            if (it.hasNext()) {
                eVar = (zt.e) it.next();
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
        f38658c = eVar;
        f38659d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f38660e = new q0(false, a());
        f38661f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f38662a = z10;
        this.f38663b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f38659d) {
                j10 = System.nanoTime();
            } else {
                j10 = f38658c.a();
            }
            long currentTimeMillis2 = System.currentTimeMillis();
            if (currentTimeMillis == currentTimeMillis2) {
                break;
            }
            i10++;
            currentTimeMillis = currentTimeMillis2;
        }
        return qt.c.m(qt.c.i(zt.d.s().g(qt.c.b(currentTimeMillis, 1000)), 1000000000L) + (qt.c.d(currentTimeMillis, 1000) * 1000000), j10);
    }

    public static a0 b() {
        return f38660e.c();
    }

    private long d() {
        long a10;
        if (f38659d) {
            a10 = System.nanoTime();
        } else {
            a10 = f38658c.a();
        }
        return qt.c.f(a10, this.f38663b);
    }

    public a0 c() {
        if ((this.f38662a || f38659d) && zt.d.s().G()) {
            long d10 = d();
            return a0.l0(qt.c.b(d10, 1000000000), qt.c.d(d10, 1000000000), zt.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(qt.c.b(currentTimeMillis, 1000), qt.c.d(currentTimeMillis, 1000) * 1000000, zt.f.POSIX);
    }
}
