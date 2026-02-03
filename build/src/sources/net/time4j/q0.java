package net.time4j;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q0 implements kt.e {

    /* renamed from: c  reason: collision with root package name */
    private static final tt.e f40703c;

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f40704d;

    /* renamed from: e  reason: collision with root package name */
    public static final q0 f40705e;

    /* renamed from: f  reason: collision with root package name */
    public static final q0 f40706f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f40707a;

    /* renamed from: b  reason: collision with root package name */
    private final long f40708b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements tt.e {
        private b() {
        }

        @Override // tt.e
        public long a() {
            return System.nanoTime();
        }

        @Override // tt.e
        public String b() {
            return "";
        }
    }

    static {
        tt.e eVar;
        String property = System.getProperty("java.vm.name");
        Iterator it = kt.d.c().g(tt.e.class).iterator();
        while (true) {
            if (it.hasNext()) {
                eVar = (tt.e) it.next();
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
        f40703c = eVar;
        f40704d = Boolean.getBoolean("net.time4j.systemclock.nanoTime");
        f40705e = new q0(false, a());
        f40706f = new q0(true, a());
    }

    private q0(boolean z10, long j10) {
        this.f40707a = z10;
        this.f40708b = j10;
    }

    private static long a() {
        long currentTimeMillis = System.currentTimeMillis();
        long j10 = 0;
        int i10 = 0;
        while (i10 < 10) {
            if (f40704d) {
                j10 = System.nanoTime();
            } else {
                j10 = f40703c.a();
            }
            long currentTimeMillis2 = System.currentTimeMillis();
            if (currentTimeMillis == currentTimeMillis2) {
                break;
            }
            i10++;
            currentTimeMillis = currentTimeMillis2;
        }
        return kt.c.m(kt.c.i(tt.d.r().h(kt.c.b(currentTimeMillis, 1000)), 1000000000L) + (kt.c.d(currentTimeMillis, 1000) * 1000000), j10);
    }

    public static a0 b() {
        return f40705e.c();
    }

    private long d() {
        long a10;
        if (f40704d) {
            a10 = System.nanoTime();
        } else {
            a10 = f40703c.a();
        }
        return kt.c.f(a10, this.f40708b);
    }

    public a0 c() {
        if ((this.f40707a || f40704d) && tt.d.r().D()) {
            long d10 = d();
            return a0.l0(kt.c.b(d10, 1000000000), kt.c.d(d10, 1000000000), tt.f.UTC);
        }
        long currentTimeMillis = System.currentTimeMillis();
        return a0.l0(kt.c.b(currentTimeMillis, 1000), kt.c.d(currentTimeMillis, 1000) * 1000000, tt.f.POSIX);
    }
}
