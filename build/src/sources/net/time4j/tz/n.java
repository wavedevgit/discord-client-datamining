package net.time4j.tz;

import j$.util.DesugarTimeZone;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n implements o, Serializable {

    /* renamed from: i  reason: collision with root package name */
    private static final Map f40897i = new HashMap();
    private static final long serialVersionUID = 1790434289322009750L;

    /* renamed from: d  reason: collision with root package name */
    private final transient b f40898d;

    /* renamed from: e  reason: collision with root package name */
    private final transient g f40899e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40900a;

        static {
            int[] iArr = new int[b.values().length];
            f40900a = iArr;
            try {
                iArr[b.PUSH_FORWARD.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40900a[b.NEXT_VALID_TIME.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40900a[b.ABORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    static {
        b[] values;
        g[] values2;
        for (b bVar : b.values()) {
            for (g gVar : g.values()) {
                f40897i.put(Integer.valueOf((bVar.ordinal() * 2) + gVar.ordinal()), new n(bVar, gVar));
            }
        }
    }

    private n(b bVar, g gVar) {
        this.f40898d = bVar;
        this.f40899e = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n d(b bVar, g gVar) {
        return (n) f40897i.get(Integer.valueOf((bVar.ordinal() * 2) + gVar.ordinal()));
    }

    private static void e(gt.a aVar, gt.g gVar, l lVar) {
        throw new IllegalArgumentException("Invalid local timestamp due to timezone transition: local-date=" + aVar + ", local-time=" + gVar + " [" + lVar.z().a() + "]");
    }

    private static long f(int i10, int i11, int i12, int i13, int i14, int i15) {
        return gt.c.i(gt.c.m(gt.b.j(i10, i11, i12), 40587L), 86400L) + (i13 * 3600) + (i14 * 60) + i15;
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 13);
    }

    @Override // net.time4j.tz.o
    public o a(g gVar) {
        if (gVar == this.f40899e) {
            return this;
        }
        return this.f40898d.a(gVar);
    }

    @Override // net.time4j.tz.o
    public long b(gt.a aVar, gt.g gVar, l lVar) {
        int i10;
        int i11;
        long f10;
        int l10;
        long f11;
        int k10;
        b bVar;
        int f12 = aVar.f();
        int u10 = aVar.u();
        int g10 = aVar.g();
        int h10 = gVar.h();
        int e10 = gVar.e();
        int d10 = gVar.d();
        m y10 = lVar.y();
        if (y10 == null && this.f40899e == g.LATER_OFFSET && ((bVar = this.f40898d) == b.PUSH_FORWARD || bVar == b.ABORT)) {
            GregorianCalendar gregorianCalendar = new GregorianCalendar(DesugarTimeZone.getTimeZone(lVar.z().a()));
            gregorianCalendar.setGregorianChange(new Date(Long.MIN_VALUE));
            gregorianCalendar.set(14, 0);
            gregorianCalendar.set(f12, u10 - 1, g10, h10, e10, d10);
            int i12 = gregorianCalendar.get(1);
            int i13 = gregorianCalendar.get(2) + 1;
            int i14 = gregorianCalendar.get(5);
            int i15 = gregorianCalendar.get(11);
            int i16 = gregorianCalendar.get(12);
            int i17 = gregorianCalendar.get(13);
            if (this.f40898d == b.ABORT && (f12 != i12 || u10 != i13 || g10 != i14 || h10 != i15 || e10 != i16 || d10 != i17)) {
                e(aVar, gVar, lVar);
            }
            f10 = f(i12, i13, i14, i15, i16, i17);
            l10 = lVar.A(aVar, gVar).l();
        } else if (y10 != null) {
            q e11 = y10.e(aVar, gVar);
            if (e11 != null) {
                if (e11.l()) {
                    int i18 = a.f40900a[this.f40898d.ordinal()];
                    if (i18 != 1) {
                        if (i18 != 2) {
                            if (i18 == 3) {
                                e(aVar, gVar, lVar);
                            } else {
                                throw new UnsupportedOperationException(this.f40898d.name());
                            }
                        } else {
                            return e11.g();
                        }
                    } else {
                        f11 = f(f12, u10, g10, h10, e10, d10) + e11.i();
                        k10 = e11.k();
                    }
                } else {
                    i10 = h10;
                    i11 = u10;
                    if (e11.o()) {
                        f11 = f(f12, i11, g10, i10, e10, d10);
                        k10 = e11.k();
                        if (this.f40899e == g.EARLIER_OFFSET) {
                            k10 = e11.h();
                        }
                    }
                    f10 = f(f12, i11, g10, i10, e10, d10);
                    l10 = ((p) y10.a(aVar, gVar).get(0)).l();
                }
                return f11 - k10;
            }
            i10 = h10;
            i11 = u10;
            f10 = f(f12, i11, g10, i10, e10, d10);
            l10 = ((p) y10.a(aVar, gVar).get(0)).l();
        } else {
            throw new UnsupportedOperationException("Timezone provider does not expose its transition history.");
        }
        return f10 - l10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return (this.f40898d.ordinal() * 2) + this.f40899e.ordinal();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(n.class.getName());
        sb2.append(":[gap=");
        sb2.append(this.f40898d);
        sb2.append(",overlap=");
        sb2.append(this.f40899e);
        sb2.append(']');
        return sb2.toString();
    }
}
