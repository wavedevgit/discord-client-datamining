package net.time4j.calendar;

import java.io.Serializable;
import java.util.Locale;
import net.time4j.b0;
import qt.t;
import qt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final g f39832d = new g();
    private static final long serialVersionUID = -5874268477318061153L;

    g() {
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(pt.o oVar, pt.o oVar2) {
        return ((h) oVar.v(this)).compareTo((h) oVar2.v(this));
    }

    @Override // pt.p
    /* renamed from: b */
    public h e() {
        return h.f(12);
    }

    @Override // pt.p
    /* renamed from: c */
    public h A() {
        return h.f(1);
    }

    @Override // pt.p
    public char d() {
        return 'M';
    }

    @Override // pt.p
    public Class getType() {
        return h.class;
    }

    /* JADX WARN: Removed duplicated region for block: B:53:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x014e  */
    @Override // qt.t
    /* renamed from: h */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public net.time4j.calendar.h t(java.lang.CharSequence r20, java.text.ParsePosition r21, pt.d r22) {
        /*
            Method dump skipped, instructions count: 351
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.calendar.g.t(java.lang.CharSequence, java.text.ParsePosition, pt.d):net.time4j.calendar.h");
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    public String name() {
        return "MONTH_OF_YEAR";
    }

    protected Object readResolve() {
        return f39832d;
    }

    @Override // qt.t
    public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
        qt.s l10;
        Locale locale = (Locale) dVar.a(qt.a.f48088c, Locale.ROOT);
        h hVar = (h) oVar.v(this);
        if (dVar.b(st.a.f50241l)) {
            appendable.append(hVar.d(locale, (qt.j) dVar.a(qt.a.f48097l, qt.j.f48146d), dVar));
            return;
        }
        v vVar = (v) dVar.a(qt.a.f48092g, v.WIDE);
        qt.m mVar = (qt.m) dVar.a(qt.a.f48093h, qt.m.FORMAT);
        if (hVar.e()) {
            l10 = qt.b.c("chinese", locale).g(vVar, mVar);
        } else {
            l10 = qt.b.c("chinese", locale).l(vVar, mVar);
        }
        appendable.append(l10.f(b0.f(hVar.getNumber())));
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
