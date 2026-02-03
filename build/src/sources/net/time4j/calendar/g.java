package net.time4j.calendar;

import java.io.Serializable;
import java.util.Locale;
import lt.t;
import lt.v;
import net.time4j.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final g f40333d = new g();
    private static final long serialVersionUID = -5874268477318061153L;

    g() {
    }

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(kt.o oVar, kt.o oVar2) {
        return ((h) oVar.v(this)).compareTo((h) oVar2.v(this));
    }

    @Override // kt.p
    /* renamed from: b */
    public h e() {
        return h.f(12);
    }

    @Override // kt.p
    /* renamed from: c */
    public h A() {
        return h.f(1);
    }

    @Override // kt.p
    public char d() {
        return 'M';
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:53:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x014e  */
    @Override // lt.t
    /* renamed from: g */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public net.time4j.calendar.h k(java.lang.CharSequence r20, java.text.ParsePosition r21, kt.d r22) {
        /*
            Method dump skipped, instructions count: 351
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.calendar.g.k(java.lang.CharSequence, java.text.ParsePosition, kt.d):net.time4j.calendar.h");
    }

    @Override // kt.p
    public Class getType() {
        return h.class;
    }

    @Override // kt.p
    public String name() {
        return "MONTH_OF_YEAR";
    }

    protected Object readResolve() {
        return f40333d;
    }

    @Override // lt.t
    public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
        lt.s l10;
        Locale locale = (Locale) dVar.a(lt.a.f37628c, Locale.ROOT);
        h hVar = (h) oVar.v(this);
        if (dVar.c(nt.a.f42333k)) {
            appendable.append(hVar.d(locale, (lt.j) dVar.a(lt.a.f37637l, lt.j.f37686d), dVar));
            return;
        }
        v vVar = (v) dVar.a(lt.a.f37632g, v.WIDE);
        lt.m mVar = (lt.m) dVar.a(lt.a.f37633h, lt.m.FORMAT);
        if (hVar.e()) {
            l10 = lt.b.c("chinese", locale).g(vVar, mVar);
        } else {
            l10 = lt.b.c("chinese", locale).l(vVar, mVar);
        }
        appendable.append(l10.f(b0.f(hVar.getNumber())));
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
