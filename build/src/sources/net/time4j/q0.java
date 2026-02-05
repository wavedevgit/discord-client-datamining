package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements nt.e {

    /* renamed from: c  reason: collision with root package name */
    private static final wt.e f40163c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f40164d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f40165e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f40166f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f40167a;

    /* renamed from: b  reason: collision with root package name */
    private final long f40168b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements wt.e {
        private b() {
        }

        @Override // wt.e
        public long a() {
            return System.nanoTime();
        }

        @Override // wt.e
        public String b() {
            return "";
        }
    }

    static {
        wt.e eVar;
        String property = System.getProperty("java.vm.name");
        Iterator it = nt.d.c().g(wt.e.class).iterator();
        while (true) {
            if (it.hasNext()) {
                eVar = (wt.e) it.next();
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
        f40163c = eVar;
        f40164d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f40165e = new q0(false, a());
        f40166f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f40167a = z10;
        this.f40168b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f40164d) {
                j10 = System.nanoTime();
            } else {
                j10 = f40163c.a();
            }
            long currentTimeMillis2 = System.currentTimeMillis();
            if (currentTimeMillis == currentTimeMillis2) {
                break;
            }
            i10++;
            currentTimeMillis = currentTimeMillis2;
        }
        return nt.c.m(nt.c.i(wt.d.w().h(nt.c.b(currentTimeMillis, 1000)), 1000000000L) + (nt.c.d(currentTimeMillis, 1000) * 1000000), j10);
    }

    public static a0 b() {
        return f40165e.c();
    }

    private long d() {
        long a10;
        if (f40164d) {
            a10 = System.nanoTime();
        } else {
            a10 = f40163c.a();
        }
        return nt.c.f(a10, this.f40168b);
    }

    public a0 c() {
        if ((this.f40167a || f40164d) && wt.d.w().D()) {
            long d10 = d();
            return a0.l0(nt.c.b(d10, 1000000000), nt.c.d(d10, 1000000000), wt.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(nt.c.b(currentTimeMillis, 1000), nt.c.d(currentTimeMillis, 1000) * 1000000, wt.f.POSIX);
    }
}
