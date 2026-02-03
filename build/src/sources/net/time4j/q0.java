package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements ht.e {

    /* renamed from: c  reason: collision with root package name */
    private static final rt.e f40664c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f40665d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f40666e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f40667f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f40668a;

    /* renamed from: b  reason: collision with root package name */
    private final long f40669b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements rt.e {
        private b() {
        }

        @Override // rt.e
        public long a() {
            return System.nanoTime();
        }

        @Override // rt.e
        public String b() {
            return "";
        }
    }

    static {
        rt.e eVar;
        String property = System.getProperty("java.vm.name");
        Iterator it = ht.d.c().g(rt.e.class).iterator();
        while (true) {
            if (it.hasNext()) {
                eVar = (rt.e) it.next();
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
        f40664c = eVar;
        f40665d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f40666e = new q0(false, a());
        f40667f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f40668a = z10;
        this.f40669b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f40665d) {
                j10 = System.nanoTime();
            } else {
                j10 = f40664c.a();
            }
            long currentTimeMillis2 = System.currentTimeMillis();
            if (currentTimeMillis == currentTimeMillis2) {
                break;
            }
            i10++;
            currentTimeMillis = currentTimeMillis2;
        }
        return ht.c.m(ht.c.i(rt.d.o().g(ht.c.b(currentTimeMillis, 1000)), 1000000000L) + (ht.c.d(currentTimeMillis, 1000) * 1000000), j10);
    }

    public static a0 b() {
        return f40666e.c();
    }

    private long d() {
        long a10;
        if (f40665d) {
            a10 = System.nanoTime();
        } else {
            a10 = f40664c.a();
        }
        return ht.c.f(a10, this.f40669b);
    }

    public a0 c() {
        if ((this.f40668a || f40665d) && rt.d.o().D()) {
            long d10 = d();
            return a0.l0(ht.c.b(d10, 1000000000), ht.c.d(d10, 1000000000), rt.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(ht.c.b(currentTimeMillis, 1000), ht.c.d(currentTimeMillis, 1000) * 1000000, rt.f.POSIX);
    }
}
