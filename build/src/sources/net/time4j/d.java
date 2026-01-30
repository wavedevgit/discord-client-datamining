package net.time4j;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum d implements d1, mt.e {
    AM_PM_OF_DAY;

    private kt.s a(Locale locale, kt.v vVar, kt.m mVar) {
        return kt.b.d(locale).h(vVar, mVar);
    }

    private kt.s h(jt.d dVar) {
        return kt.b.d((Locale) dVar.b(kt.a.f36546c, Locale.ROOT)).h((kt.v) dVar.b(kt.a.f36550g, kt.v.WIDE), (kt.m) dVar.b(kt.a.f36551h, kt.m.FORMAT));
    }

    static z w(CharSequence charSequence, ParsePosition parsePosition) {
        int index = parsePosition.getIndex();
        int i10 = index + 2;
        if (charSequence.length() >= i10) {
            char charAt = charSequence.charAt(index + 1);
            if (charAt == 'M' || charAt == 'm') {
                char charAt2 = charSequence.charAt(index);
                if (charAt2 != 'A' && charAt2 != 'a') {
                    if (charAt2 == 'P' || charAt2 == 'p') {
                        parsePosition.setIndex(i10);
                        return z.PM;
                    }
                    return null;
                }
                parsePosition.setIndex(i10);
                return z.AM;
            }
            return null;
        }
        return null;
    }

    @Override // jt.p
    public boolean C() {
        return true;
    }

    @Override // jt.p
    public char d() {
        return 'a';
    }

    @Override // mt.e
    public void g(jt.o oVar, Appendable appendable, Locale locale, kt.v vVar, kt.m mVar) {
        appendable.append(a(locale, vVar, mVar).f((Enum) oVar.p(this)));
    }

    @Override // jt.p
    public Class getType() {
        return z.class;
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: j */
    public int compare(jt.o oVar, jt.o oVar2) {
        return ((z) oVar.p(this)).compareTo((z) oVar2.p(this));
    }

    @Override // jt.p
    /* renamed from: k */
    public z e() {
        return z.PM;
    }

    @Override // jt.p
    /* renamed from: l */
    public z A() {
        return z.AM;
    }

    @Override // mt.e
    /* renamed from: p */
    public z f(CharSequence charSequence, ParsePosition parsePosition, Locale locale, kt.v vVar, kt.m mVar, kt.g gVar) {
        z w10 = w(charSequence, parsePosition);
        if (w10 == null) {
            return (z) a(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        }
        return w10;
    }

    @Override // kt.t
    public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
        appendable.append(h(dVar).f((Enum) oVar.p(this)));
    }

    @Override // kt.t
    /* renamed from: v */
    public z z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
        z w10 = w(charSequence, parsePosition);
        if (w10 == null) {
            return (z) h(dVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return w10;
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
