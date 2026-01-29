package net.time4j.calendar;

import java.io.Serializable;
import java.util.Locale;
import kt.t;
import kt.v;
import net.time4j.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final g f40454d = new g();
    private static final long serialVersionUID = -5874268477318061153L;

    g() {
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(jt.o oVar, jt.o oVar2) {
        return ((h) oVar.p(this)).compareTo((h) oVar2.p(this));
    }

    @Override // jt.p
    /* renamed from: b */
    public h e() {
        return h.f(12);
    }

    @Override // jt.p
    /* renamed from: c */
    public h A() {
        return h.f(1);
    }

    @Override // jt.p
    public char d() {
        return 'M';
    }

    @Override // jt.p
    public Class getType() {
        return h.class;
    }

    /* JADX WARN: Removed duplicated region for block: B:53:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x014e  */
    @Override // kt.t
    /* renamed from: h */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public net.time4j.calendar.h z(java.lang.CharSequence r20, java.text.ParsePosition r21, jt.d r22) {
        /*
            Method dump skipped, instructions count: 351
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.calendar.g.z(java.lang.CharSequence, java.text.ParsePosition, jt.d):net.time4j.calendar.h");
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    public String name() {
        return "MONTH_OF_YEAR";
    }

    protected Object readResolve() {
        return f40454d;
    }

    @Override // kt.t
    public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
        kt.s l10;
        Locale locale = (Locale) dVar.b(kt.a.f36530c, Locale.ROOT);
        h hVar = (h) oVar.p(this);
        if (dVar.a(mt.a.f39574k)) {
            appendable.append(hVar.d(locale, (kt.j) dVar.b(kt.a.f36539l, kt.j.f36588d), dVar));
            return;
        }
        v vVar = (v) dVar.b(kt.a.f36534g, v.WIDE);
        kt.m mVar = (kt.m) dVar.b(kt.a.f36535h, kt.m.FORMAT);
        if (hVar.e()) {
            l10 = kt.b.c("chinese", locale).g(vVar, mVar);
        } else {
            l10 = kt.b.c("chinese", locale).l(vVar, mVar);
        }
        appendable.append(l10.f(b0.f(hVar.getNumber())));
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
