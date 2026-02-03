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
    private static final Map f40815i = new HashMap();
    private static final long serialVersionUID = 1790434289322009750L;

    /* renamed from: d  reason: collision with root package name */
    private final transient b f40816d;

    /* renamed from: e  reason: collision with root package name */
    private final transient g f40817e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40818a;

        static {
            int[] iArr = new int[b.values().length];
            f40818a = iArr;
            try {
                iArr[b.PUSH_FORWARD.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40818a[b.NEXT_VALID_TIME.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40818a[b.ABORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    static {
        b[] values;
        g[] values2;
        for (b bVar : b.values()) {
            for (g gVar : g.values()) {
                f40815i.put(Integer.valueOf((bVar.ordinal() * 2) + gVar.ordinal()), new n(bVar, gVar));
            }
        }
    }

    private n(b bVar, g gVar) {
        this.f40816d = bVar;
        this.f40817e = gVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n d(b bVar, g gVar) {
        return (n) f40815i.get(Integer.valueOf((bVar.ordinal() * 2) + gVar.ordinal()));
    }

    private static void e(kt.a aVar, kt.g gVar, l lVar) {
        throw new IllegalArgumentException("Invalid local timestamp due to timezone transition: local-date=" + aVar + ", local-time=" + gVar + " [" + lVar.z().a() + "]");
    }

    private static long f(int i10, int i11, int i12, int i13, int i14, int i15) {
        return kt.c.i(kt.c.m(kt.b.j(i10, i11, i12), 40587L), 86400L) + (i13 * 3600) + (i14 * 60) + i15;
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 13);
    }

    @Override // net.time4j.tz.o
    public long a(kt.a aVar, kt.g gVar, l lVar) {
        int i10;
        int i11;
        long f10;
        int l10;
        long f11;
        int k10;
        b bVar;
        int f12 = aVar.f();
        int s10 = aVar.s();
        int g10 = aVar.g();
        int h10 = gVar.h();
        int e10 = gVar.e();
        int d10 = gVar.d();
        m y10 = lVar.y();
        if (y10 == null && this.f40817e == g.LATER_OFFSET && ((bVar = this.f40816d) == b.PUSH_FORWARD || bVar == b.ABORT)) {
            GregorianCalendar gregorianCalendar = new GregorianCalendar(DesugarTimeZone.getTimeZone(lVar.z().a()));
            gregorianCalendar.setGregorianChange(new Date(Long.MIN_VALUE));
            gregorianCalendar.set(14, 0);
            gregorianCalendar.set(f12, s10 - 1, g10, h10, e10, d10);
            int i12 = gregorianCalendar.get(1);
            int i13 = gregorianCalendar.get(2) + 1;
            int i14 = gregorianCalendar.get(5);
            int i15 = gregorianCalendar.get(11);
            int i16 = gregorianCalendar.get(12);
            int i17 = gregorianCalendar.get(13);
            if (this.f40816d == b.ABORT && (f12 != i12 || s10 != i13 || g10 != i14 || h10 != i15 || e10 != i16 || d10 != i17)) {
                e(aVar, gVar, lVar);
            }
            f10 = f(i12, i13, i14, i15, i16, i17);
            l10 = lVar.A(aVar, gVar).l();
        } else if (y10 != null) {
            q d11 = y10.d(aVar, gVar);
            if (d11 != null) {
                if (d11.l()) {
                    int i18 = a.f40818a[this.f40816d.ordinal()];
                    if (i18 != 1) {
                        if (i18 != 2) {
                            if (i18 == 3) {
                                e(aVar, gVar, lVar);
                            } else {
                                throw new UnsupportedOperationException(this.f40816d.name());
                            }
                        } else {
                            return d11.g();
                        }
                    } else {
                        f11 = f(f12, s10, g10, h10, e10, d10) + d11.i();
                        k10 = d11.k();
                    }
                } else {
                    i10 = h10;
                    i11 = s10;
                    if (d11.o()) {
                        f11 = f(f12, i11, g10, i10, e10, d10);
                        k10 = d11.k();
                        if (this.f40817e == g.EARLIER_OFFSET) {
                            k10 = d11.h();
                        }
                    }
                    f10 = f(f12, i11, g10, i10, e10, d10);
                    l10 = ((p) y10.b(aVar, gVar).get(0)).l();
                }
                return f11 - k10;
            }
            i10 = h10;
            i11 = s10;
            f10 = f(f12, i11, g10, i10, e10, d10);
            l10 = ((p) y10.b(aVar, gVar).get(0)).l();
        } else {
            throw new UnsupportedOperationException("Timezone provider does not expose its transition history.");
        }
        return f10 - l10;
    }

    @Override // net.time4j.tz.o
    public o b(g gVar) {
        if (gVar == this.f40817e) {
            return this;
        }
        return this.f40816d.a(gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return (this.f40816d.ordinal() * 2) + this.f40817e.ordinal();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(n.class.getName());
        sb2.append(":[gap=");
        sb2.append(this.f40816d);
        sb2.append(",overlap=");
        sb2.append(this.f40817e);
        sb2.append(']');
        return sb2.toString();
    }
}
