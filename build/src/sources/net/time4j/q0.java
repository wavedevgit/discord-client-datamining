package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements gt.e {

    /* renamed from: c  reason: collision with root package name */
    private static final qt.e f40785c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f40786d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f40787e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f40788f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f40789a;

    /* renamed from: b  reason: collision with root package name */
    private final long f40790b;

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
        f40785c = eVar;
        f40786d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f40787e = new q0(false, a());
        f40788f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f40789a = z10;
        this.f40790b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f40786d) {
                j10 = System.nanoTime();
            } else {
                j10 = f40785c.a();
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
        return f40787e.c();
    }

    private long d() {
        long a10;
        if (f40786d) {
            a10 = System.nanoTime();
        } else {
            a10 = f40785c.a();
        }
        return gt.c.f(a10, this.f40790b);
    }

    public a0 c() {
        if ((this.f40789a || f40786d) && qt.d.p().D()) {
            long d10 = d();
            return a0.l0(gt.c.b(d10, 1000000000), gt.c.d(d10, 1000000000), qt.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(gt.c.b(currentTimeMillis, 1000), gt.c.d(currentTimeMillis, 1000) * 1000000, qt.f.POSIX);
    }
}
