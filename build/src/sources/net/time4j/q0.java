package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements gt.e {

    /* renamed from: c  reason: collision with root package name */
    private static final qt.e f40801c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f40802d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f40803e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f40804f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f40805a;

    /* renamed from: b  reason: collision with root package name */
    private final long f40806b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements qt.e {
        private b() {
        }

        @Override // qt.e
        public long a() {
            return System.nanoTime();
        }

        @Override // qt.e
        public String b() {
            return "";
        }
    }

    static {
        qt.e eVar;
        String property = System.getProperty("java.vm.name");
        Iterator it = gt.d.c().g(qt.e.class).iterator();
        while (true) {
            if (it.hasNext()) {
                eVar = (qt.e) it.next();
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
        f40801c = eVar;
        f40802d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f40803e = new q0(false, a());
        f40804f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f40805a = z10;
        this.f40806b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f40802d) {
                j10 = System.nanoTime();
            } else {
                j10 = f40801c.a();
            }
            long currentTimeMillis2 = System.currentTimeMillis();
            if (currentTimeMillis == currentTimeMillis2) {
                break;
            }
            i10++;
            currentTimeMillis = currentTimeMillis2;
        }
        return gt.c.m(gt.c.i(qt.d.p().h(gt.c.b(currentTimeMillis, 1000)), 1000000000L) + (gt.c.d(currentTimeMillis, 1000) * 1000000), j10);
    }

    public static a0 b() {
        return f40803e.c();
    }

    private long d() {
        long a10;
        if (f40802d) {
            a10 = System.nanoTime();
        } else {
            a10 = f40801c.a();
        }
        return gt.c.f(a10, this.f40806b);
    }

    public a0 c() {
        if ((this.f40805a || f40802d) && qt.d.p().D()) {
            long d10 = d();
            return a0.l0(gt.c.b(d10, 1000000000), gt.c.d(d10, 1000000000), qt.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(gt.c.b(currentTimeMillis, 1000), gt.c.d(currentTimeMillis, 1000) * 1000000, qt.f.POSIX);
    }
}
