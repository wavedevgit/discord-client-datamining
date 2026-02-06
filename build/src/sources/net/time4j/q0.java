package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements pt.e {

    /* renamed from: c  reason: collision with root package name */
    private static final yt.e f39518c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f39519d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f39520e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f39521f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f39522a;

    /* renamed from: b  reason: collision with root package name */
    private final long f39523b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements yt.e {
        private b() {
        }

        @Override // yt.e
        public long a() {
            return System.nanoTime();
        }

        @Override // yt.e
        public String b() {
            return "";
        }
    }

    static {
        yt.e eVar;
        String property = System.getProperty("java.vm.name");
        Iterator it = pt.d.c().g(yt.e.class).iterator();
        while (true) {
            if (it.hasNext()) {
                eVar = (yt.e) it.next();
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
        f39518c = eVar;
        f39519d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f39520e = new q0(false, a());
        f39521f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f39522a = z10;
        this.f39523b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f39519d) {
                j10 = System.nanoTime();
            } else {
                j10 = f39518c.a();
            }
            long currentTimeMillis2 = System.currentTimeMillis();
            if (currentTimeMillis == currentTimeMillis2) {
                break;
            }
            i10++;
            currentTimeMillis = currentTimeMillis2;
        }
        return pt.c.m(pt.c.i(yt.d.u().g(pt.c.b(currentTimeMillis, 1000)), 1000000000L) + (pt.c.d(currentTimeMillis, 1000) * 1000000), j10);
    }

    public static a0 b() {
        return f39520e.c();
    }

    private long d() {
        long a10;
        if (f39519d) {
            a10 = System.nanoTime();
        } else {
            a10 = f39518c.a();
        }
        return pt.c.f(a10, this.f39523b);
    }

    public a0 c() {
        if ((this.f39522a || f39519d) && yt.d.u().G()) {
            long d10 = d();
            return a0.l0(pt.c.b(d10, 1000000000), pt.c.d(d10, 1000000000), yt.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(pt.c.b(currentTimeMillis, 1000), pt.c.d(currentTimeMillis, 1000) * 1000000, yt.f.POSIX);
    }
}
