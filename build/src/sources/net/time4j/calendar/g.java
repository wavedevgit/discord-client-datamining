package net.time4j.calendar;

import cu.t;
import cu.v;
import java.io.Serializable;
import java.util.Locale;
import net.time4j.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final g f37332d = new g();
    private static final long serialVersionUID = -5874268477318061153L;

    g() {
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(bu.o oVar, bu.o oVar2) {
        return ((h) oVar.k(this)).compareTo((h) oVar2.k(this));
    }

    @Override // bu.p
    /* renamed from: b */
    public h f() {
        return h.f(12);
    }

    @Override // bu.p
    /* renamed from: c */
    public h B() {
        return h.f(1);
    }

    @Override // bu.p
    public char d() {
        return 'M';
    }

    @Override // bu.p
    public Class getType() {
        return h.class;
    }

    /* JADX WARN: Removed duplicated region for block: B:53:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x014e  */
    @Override // cu.t
    /* renamed from: h */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public net.time4j.calendar.h l(java.lang.CharSequence r20, java.text.ParsePosition r21, bu.d r22) {
        /*
            Method dump skipped, instructions count: 351
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.calendar.g.l(java.lang.CharSequence, java.text.ParsePosition, bu.d):net.time4j.calendar.h");
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    public String name() {
        return "MONTH_OF_YEAR";
    }

    protected Object readResolve() {
        return f37332d;
    }

    @Override // cu.t
    public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
        cu.s l10;
        Locale locale = (Locale) dVar.b(cu.a.f21111c, Locale.ROOT);
        h hVar = (h) oVar.k(this);
        if (dVar.a(eu.a.f23268c)) {
            appendable.append(hVar.d(locale, (cu.j) dVar.b(cu.a.f21120l, cu.j.f21169d), dVar));
            return;
        }
        v vVar = (v) dVar.b(cu.a.f21115g, v.WIDE);
        cu.m mVar = (cu.m) dVar.b(cu.a.f21116h, cu.m.FORMAT);
        if (hVar.e()) {
            l10 = cu.b.c("chinese", locale).g(vVar, mVar);
        } else {
            l10 = cu.b.c("chinese", locale).l(vVar, mVar);
        }
        appendable.append(l10.f(b0.f(hVar.getNumber())));
    }
}
