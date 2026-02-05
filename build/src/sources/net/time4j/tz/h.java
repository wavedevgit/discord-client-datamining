package net.time4j.tz;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import j$.util.DesugarTimeZone;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.TimeZone;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends l {
    private static final long serialVersionUID = -8432968264242113551L;
    private final transient p G;

    /* renamed from: id  reason: collision with root package name */
    private final k f40218id;
    private final boolean strict;
    private final TimeZone tz;

    h() {
        this.f40218id = null;
        this.tz = null;
        this.strict = false;
        this.G = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static TimeZone R(String str) {
        if (str.equals("Z")) {
            return DesugarTimeZone.getTimeZone("GMT+00:00");
        }
        if (str.startsWith("UTC")) {
            return DesugarTimeZone.getTimeZone("GMT" + str.substring(3));
        } else if (str.startsWith("UT")) {
            return DesugarTimeZone.getTimeZone("GMT" + str.substring(2));
        } else {
            return DesugarTimeZone.getTimeZone(str);
        }
    }

    private static p S(int i10) {
        return p.t(nt.c.a(i10, 1000));
    }

    private Object readResolve() {
        k kVar = this.f40218id;
        if (kVar == null) {
            return new h();
        }
        return new h(kVar, this.tz, this.strict);
    }

    @Override // net.time4j.tz.l
    public p A(nt.a aVar, nt.g gVar) {
        int i10;
        int i11;
        int i12;
        int i13;
        TimeZone timeZone;
        p pVar = this.G;
        if (pVar != null) {
            return pVar;
        }
        int f10 = aVar.f();
        int t10 = aVar.t();
        int g10 = aVar.g();
        if (gVar.h() == 24) {
            long l10 = nt.b.l(nt.c.f(nt.b.k(aVar), 1L));
            int i14 = nt.b.i(l10);
            int h10 = nt.b.h(l10);
            i10 = nt.b.g(l10);
            t10 = h10;
            f10 = i14;
        } else {
            i10 = g10;
        }
        int i15 = 0;
        if (f10 > 0) {
            i12 = f10;
            i11 = 1;
        } else {
            i11 = 0;
            i12 = 1 - f10;
        }
        int c10 = nt.b.c(f10, t10, i10) + 1;
        if (c10 == 8) {
            i13 = 1;
        } else {
            i13 = c10;
        }
        if (gVar.h() != 24) {
            i15 = (((gVar.h() * 3600) + (gVar.e() * 60) + gVar.d()) * 1000) + (gVar.a() / 1000000);
        }
        int i16 = i15;
        if (this.f40218id == null) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = this.tz;
        }
        return S(timeZone.getOffset(i11, i12, t10 - 1, i10, i13, i16));
    }

    @Override // net.time4j.tz.l
    public p B(nt.f fVar) {
        TimeZone timeZone;
        if (this.f40218id == null) {
            timeZone = TimeZone.getDefault();
        } else {
            p pVar = this.G;
            if (pVar != null) {
                return pVar;
            }
            timeZone = this.tz;
        }
        return S(timeZone.getOffset(fVar.q() * 1000));
    }

    @Override // net.time4j.tz.l
    public o E() {
        if (this.strict) {
            return l.f40225p;
        }
        return l.f40224o;
    }

    @Override // net.time4j.tz.l
    public boolean I(nt.f fVar) {
        TimeZone timeZone;
        if (this.G != null) {
            return false;
        }
        if (this.f40218id == null) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = this.tz;
        }
        return timeZone.inDaylightTime(new Date(fVar.q() * 1000));
    }

    @Override // net.time4j.tz.l
    public boolean J() {
        if (this.G != null) {
            return true;
        }
        return false;
    }

    @Override // net.time4j.tz.l
    public boolean K(nt.a aVar, nt.g gVar) {
        TimeZone timeZone;
        if (this.G != null) {
            return false;
        }
        int f10 = aVar.f();
        int t10 = aVar.t();
        int g10 = aVar.g();
        int h10 = gVar.h();
        int e10 = gVar.e();
        int d10 = gVar.d();
        int a10 = gVar.a() / 1000000;
        if (this.f40218id == null) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = this.tz;
        }
        GregorianCalendar gregorianCalendar = new GregorianCalendar(timeZone);
        gregorianCalendar.set(14, a10);
        gregorianCalendar.set(f10, t10 - 1, g10, h10, e10, d10);
        if (gregorianCalendar.get(1) == f10 && gregorianCalendar.get(2) + 1 == t10 && gregorianCalendar.get(5) == g10 && gregorianCalendar.get(11) == h10 && gregorianCalendar.get(12) == e10 && gregorianCalendar.get(13) == d10 && gregorianCalendar.get(14) == a10) {
            return false;
        }
        return true;
    }

    @Override // net.time4j.tz.l
    public l Q(o oVar) {
        if (this.f40218id != null && E() != oVar) {
            if (oVar == l.f40224o) {
                return new h(this.f40218id, this.tz, false);
            }
            if (oVar == l.f40225p) {
                return new h(this.f40218id, this.tz, true);
            }
            throw new UnsupportedOperationException(oVar.toString());
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean T() {
        TimeZone timeZone;
        if (this.f40218id == null) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = this.tz;
        }
        return timeZone.getID().equals("GMT");
    }

    public boolean equals(Object obj) {
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f40218id == null) {
                if (hVar.f40218id != null) {
                    return false;
                }
                return true;
            } else if (this.tz.equals(hVar.tz) && this.strict == hVar.strict) {
                p pVar = this.G;
                if (pVar == null) {
                    if (hVar.G != null) {
                        return false;
                    }
                    return true;
                }
                return pVar.equals(hVar.G);
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f40218id == null) {
            return 0;
        }
        return this.tz.hashCode();
    }

    public String toString() {
        TimeZone timeZone;
        if (this.f40218id == null) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = this.tz;
        }
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append('[');
        sb2.append(h.class.getName());
        sb2.append(':');
        sb2.append(timeZone);
        sb2.append(']');
        return sb2.toString();
    }

    @Override // net.time4j.tz.l
    public String w(d dVar, Locale locale) {
        TimeZone timeZone;
        if (this.f40218id == null) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = this.tz;
        }
        return timeZone.getDisplayName(dVar.d(), !dVar.a(), locale);
    }

    @Override // net.time4j.tz.l
    public m y() {
        p pVar = this.G;
        if (pVar == null) {
            return null;
        }
        return pVar.n();
    }

    @Override // net.time4j.tz.l
    public k z() {
        k kVar = this.f40218id;
        if (kVar == null) {
            return new e(TimeZone.getDefault().getID());
        }
        return kVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(k kVar) {
        this(kVar, TimeZone.getDefault(), false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(k kVar, String str) {
        this(kVar, R(str), false);
    }

    private h(k kVar, TimeZone timeZone, boolean z10) {
        this.f40218id = kVar;
        TimeZone timeZone2 = (TimeZone) timeZone.clone();
        this.tz = timeZone2;
        this.strict = z10;
        if (timeZone2.useDaylightTime()) {
            this.G = null;
            return;
        }
        String id2 = timeZone2.getID();
        if (!id2.startsWith("GMT") && !id2.startsWith("Etc/") && !id2.equals("Greenwich") && !id2.equals("UCT") && !id2.equals("UTC") && !id2.equals("Universal") && !id2.equals("Zulu")) {
            this.G = null;
        } else {
            this.G = S(timeZone2.getOffset(System.currentTimeMillis()));
        }
    }
}
