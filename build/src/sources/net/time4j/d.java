package net.time4j;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum d implements d1, pt.e {
    AM_PM_OF_DAY;

    private nt.s a(Locale locale, nt.v vVar, nt.m mVar) {
        return nt.b.d(locale).h(vVar, mVar);
    }

    private nt.s h(mt.d dVar) {
        return nt.b.d((Locale) dVar.b(nt.a.f42028c, Locale.ROOT)).h((nt.v) dVar.b(nt.a.f42032g, nt.v.WIDE), (nt.m) dVar.b(nt.a.f42033h, nt.m.FORMAT));
    }

    static z x(CharSequence charSequence, ParsePosition parsePosition) {
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

    @Override // mt.p
    public boolean C() {
        return true;
    }

    @Override // mt.p
    public char d() {
        return 'a';
    }

    @Override // mt.p
    public Class getType() {
        return z.class;
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: l */
    public int compare(mt.o oVar, mt.o oVar2) {
        return ((z) oVar.o(this)).compareTo((z) oVar2.o(this));
    }

    @Override // mt.p
    /* renamed from: o */
    public z f() {
        return z.PM;
    }

    @Override // mt.p
    /* renamed from: q */
    public z A() {
        return z.AM;
    }

    @Override // pt.e
    /* renamed from: r */
    public z g(CharSequence charSequence, ParsePosition parsePosition, Locale locale, nt.v vVar, nt.m mVar, nt.g gVar) {
        z x10 = x(charSequence, parsePosition);
        if (x10 == null) {
            return (z) a(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        }
        return x10;
    }

    @Override // nt.t
    public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
        appendable.append(h(dVar).f((Enum) oVar.o(this)));
    }

    @Override // pt.e
    public void v(mt.o oVar, Appendable appendable, Locale locale, nt.v vVar, nt.m mVar) {
        appendable.append(a(locale, vVar, mVar).f((Enum) oVar.o(this)));
    }

    @Override // nt.t
    /* renamed from: w */
    public z j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
        z x10 = x(charSequence, parsePosition);
        if (x10 == null) {
            return (z) h(dVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return x10;
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
