package io.sentry.android.core;

import io.sentry.ISpan;
import io.sentry.a3;
import io.sentry.android.core.internal.util.c0;
import io.sentry.c7;
import io.sentry.j5;
import io.sentry.y2;
import java.util.Comparator;
import java.util.Date;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.concurrent.ConcurrentSkipListSet;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class p2 implements io.sentry.s0, c0.b {

    /* renamed from: h  reason: collision with root package name */
    private static final long f29112h = TimeUnit.SECONDS.toNanos(1);

    /* renamed from: i  reason: collision with root package name */
    private static final c7 f29113i = new c7(new Date(0), 0);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f29114a;

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.c0 f29116c;

    /* renamed from: d  reason: collision with root package name */
    private volatile String f29117d;

    /* renamed from: b  reason: collision with root package name */
    protected final io.sentry.util.a f29115b = new io.sentry.util.a();

    /* renamed from: e  reason: collision with root package name */
    private final SortedSet f29118e = new TreeSet(new Comparator() { // from class: io.sentry.android.core.o2
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return p2.f((ISpan) obj, (ISpan) obj2);
        }
    });

    /* renamed from: f  reason: collision with root package name */
    private final ConcurrentSkipListSet f29119f = new ConcurrentSkipListSet();

    /* renamed from: g  reason: collision with root package name */
    private long f29120g = 16666666;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final long f29121d;

        /* renamed from: e  reason: collision with root package name */
        private final long f29122e;

        /* renamed from: i  reason: collision with root package name */
        private final long f29123i;

        /* renamed from: o  reason: collision with root package name */
        private final long f29124o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f29125p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f29126q;

        /* renamed from: r  reason: collision with root package name */
        private final long f29127r;

        a(long j10) {
            this(j10, j10, 0L, 0L, false, false, 0L);
        }

        @Override // java.lang.Comparable
        /* renamed from: j */
        public int compareTo(a aVar) {
            return Long.compare(this.f29122e, aVar.f29122e);
        }

        a(long j10, long j11, long j12, long j13, boolean z10, boolean z11, long j14) {
            this.f29121d = j10;
            this.f29122e = j11;
            this.f29123i = j12;
            this.f29124o = j13;
            this.f29125p = z10;
            this.f29126q = z11;
            this.f29127r = j14;
        }
    }

    public p2(SentryAndroidOptions sentryAndroidOptions, io.sentry.android.core.internal.util.c0 c0Var) {
        boolean z10;
        this.f29116c = c0Var;
        if (sentryAndroidOptions.isEnablePerformanceV2() && sentryAndroidOptions.isEnableFramesTracking()) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f29114a = z10;
    }

    public static /* synthetic */ int f(ISpan iSpan, ISpan iSpan2) {
        if (iSpan == iSpan2) {
            return 0;
        }
        int compareTo = iSpan.t().compareTo(iSpan2.t());
        if (compareTo != 0) {
            return compareTo;
        }
        return iSpan.q().m().toString().compareTo(iSpan2.q().m().toString());
    }

    private static int g(m2 m2Var, long j10, long j11, long j12) {
        long max = Math.max(0L, j11 - j12);
        if (io.sentry.android.core.internal.util.c0.j(max, j10)) {
            m2Var.a(max, Math.max(0L, max - j10), true, io.sentry.android.core.internal.util.c0.i(max));
            return 1;
        }
        return 0;
    }

    private void h(ISpan iSpan) {
        io.sentry.a1 a10 = this.f29115b.a();
        try {
            if (!this.f29118e.remove(iSpan)) {
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            j5 r10 = iSpan.r();
            if (r10 == null) {
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            long j10 = j(iSpan.t());
            long j11 = j(r10);
            long j12 = j11 - j10;
            long j13 = 0;
            if (j12 <= 0) {
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            m2 m2Var = new m2();
            long j14 = this.f29120g;
            if (!this.f29119f.isEmpty()) {
                for (a aVar : this.f29119f.tailSet((ConcurrentSkipListSet) new a(j10))) {
                    if (aVar.f29121d > j11) {
                        break;
                    }
                    if (aVar.f29121d >= j10 && aVar.f29122e <= j11) {
                        m2Var.a(aVar.f29123i, aVar.f29124o, aVar.f29125p, aVar.f29126q);
                    } else if ((j10 > aVar.f29121d && j10 < aVar.f29122e) || (j11 > aVar.f29121d && j11 < aVar.f29122e)) {
                        long min = Math.min(aVar.f29124o - Math.max(j13, Math.max(j13, j10 - aVar.f29121d) - aVar.f29127r), j12);
                        long min2 = Math.min(j11, aVar.f29122e) - Math.max(j10, aVar.f29121d);
                        m2Var.a(min2, min, io.sentry.android.core.internal.util.c0.j(min2, aVar.f29127r), io.sentry.android.core.internal.util.c0.i(min2));
                    }
                    j14 = aVar.f29127r;
                    j13 = 0;
                }
            }
            long j15 = j14;
            int f10 = m2Var.f();
            long h10 = this.f29116c.h();
            if (h10 != -1) {
                f10 = f10 + g(m2Var, j15, j11, h10) + i(m2Var, j15, j12);
            }
            double e10 = (m2Var.e() + m2Var.c()) / 1.0E9d;
            iSpan.j("frames.total", Integer.valueOf(f10));
            iSpan.j("frames.slow", Integer.valueOf(m2Var.d()));
            iSpan.j("frames.frozen", Integer.valueOf(m2Var.b()));
            iSpan.j("frames.delay", Double.valueOf(e10));
            if (iSpan instanceof io.sentry.e1) {
                iSpan.h("frames_total", Integer.valueOf(f10));
                iSpan.h("frames_slow", Integer.valueOf(m2Var.d()));
                iSpan.h("frames_frozen", Integer.valueOf(m2Var.b()));
                iSpan.h("frames_delay", Double.valueOf(e10));
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    private static int i(m2 m2Var, long j10, long j11) {
        long g10 = j11 - m2Var.g();
        if (g10 > 0) {
            return (int) Math.ceil(g10 / j10);
        }
        return 0;
    }

    private static long j(j5 j5Var) {
        if (j5Var instanceof c7) {
            return j5Var.d(f29113i);
        }
        return System.nanoTime() - (io.sentry.k.i(System.currentTimeMillis()) - j5Var.h());
    }

    @Override // io.sentry.s0
    public void a(ISpan iSpan) {
        if (!this.f29114a || (iSpan instanceof y2) || (iSpan instanceof a3)) {
            return;
        }
        io.sentry.a1 a10 = this.f29115b.a();
        try {
            if (!this.f29118e.contains(iSpan)) {
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            if (a10 != null) {
                a10.close();
            }
            h(iSpan);
            a10 = this.f29115b.a();
            try {
                if (this.f29118e.isEmpty()) {
                    clear();
                } else {
                    this.f29119f.headSet((ConcurrentSkipListSet) new a(j(((ISpan) this.f29118e.first()).t()))).clear();
                }
                if (a10 != null) {
                    a10.close();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        } finally {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
        }
    }

    @Override // io.sentry.s0
    public void b(ISpan iSpan) {
        if (!this.f29114a || (iSpan instanceof y2) || (iSpan instanceof a3)) {
            return;
        }
        io.sentry.a1 a10 = this.f29115b.a();
        try {
            this.f29118e.add(iSpan);
            if (this.f29117d == null) {
                this.f29117d = this.f29116c.l(this);
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.s0
    public void clear() {
        io.sentry.a1 a10 = this.f29115b.a();
        try {
            if (this.f29117d != null) {
                this.f29116c.m(this.f29117d);
                this.f29117d = null;
            }
            this.f29119f.clear();
            this.f29118e.clear();
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.android.core.internal.util.c0.b
    public void e(long j10, long j11, long j12, long j13, boolean z10, boolean z11, float f10) {
        if (this.f29119f.size() <= 3600) {
            long j14 = (long) (f29112h / f10);
            this.f29120g = j14;
            if (!z10 && !z11) {
                return;
            }
            this.f29119f.add(new a(j10, j11, j12, j13, z10, z11, j14));
        }
    }
}
