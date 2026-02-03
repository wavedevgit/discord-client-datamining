package net.time4j.calendar;

import java.io.Serializable;
import java.util.Locale;
import net.time4j.b0;
import nt.t;
import nt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final g f40372d = new g();
    private static final long serialVersionUID = -5874268477318061153L;

    g() {
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(mt.o oVar, mt.o oVar2) {
        return ((h) oVar.o(this)).compareTo((h) oVar2.o(this));
    }

    @Override // mt.p
    /* renamed from: b */
    public h f() {
        return h.f(12);
    }

    @Override // mt.p
    /* renamed from: c */
    public h A() {
        return h.f(1);
    }

    @Override // mt.p
    public char d() {
        return 'M';
    }

    @Override // mt.p
    public Class getType() {
        return h.class;
    }

    /* JADX WARN: Removed duplicated region for block: B:53:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x014e  */
    @Override // nt.t
    /* renamed from: h */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public net.time4j.calendar.h j(java.lang.CharSequence r20, java.text.ParsePosition r21, mt.d r22) {
        /*
            Method dump skipped, instructions count: 351
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.calendar.g.j(java.lang.CharSequence, java.text.ParsePosition, mt.d):net.time4j.calendar.h");
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    public String name() {
        return "MONTH_OF_YEAR";
    }

    protected Object readResolve() {
        return f40372d;
    }

    @Override // nt.t
    public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
        nt.s l10;
        Locale locale = (Locale) dVar.b(nt.a.f42028c, Locale.ROOT);
        h hVar = (h) oVar.o(this);
        if (dVar.a(pt.a.f46625k)) {
            appendable.append(hVar.d(locale, (nt.j) dVar.b(nt.a.f42037l, nt.j.f42086d), dVar));
            return;
        }
        v vVar = (v) dVar.b(nt.a.f42032g, v.WIDE);
        nt.m mVar = (nt.m) dVar.b(nt.a.f42033h, nt.m.FORMAT);
        if (hVar.e()) {
            l10 = nt.b.c("chinese", locale).g(vVar, mVar);
        } else {
            l10 = nt.b.c("chinese", locale).l(vVar, mVar);
        }
        appendable.append(l10.f(b0.f(hVar.getNumber())));
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
