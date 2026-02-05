package net.time4j;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum d implements d1, st.e {
    AM_PM_OF_DAY;

    private qt.s a(Locale locale, qt.v vVar, qt.m mVar) {
        return qt.b.d(locale).h(vVar, mVar);
    }

    private qt.s h(pt.d dVar) {
        return qt.b.d((Locale) dVar.a(qt.a.f48088c, Locale.ROOT)).h((qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE), (qt.m) dVar.a(qt.a.f48093h, qt.m.FORMAT));
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

    @Override // pt.p
    public boolean B() {
        return true;
    }

    @Override // pt.p
    public char d() {
        return 'a';
    }

    @Override // st.e
    public void f(pt.o oVar, Appendable appendable, Locale locale, qt.v vVar, qt.m mVar) {
        appendable.append(a(locale, vVar, mVar).f((Enum) oVar.v(this)));
    }

    @Override // pt.p
    public Class getType() {
        return z.class;
    }

    @Override // java.util.Comparator
    /* renamed from: k */
    public int compare(pt.o oVar, pt.o oVar2) {
        return ((z) oVar.v(this)).compareTo((z) oVar2.v(this));
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    /* renamed from: m */
    public z e() {
        return z.PM;
    }

    @Override // pt.p
    /* renamed from: p */
    public z A() {
        return z.AM;
    }

    @Override // st.e
    /* renamed from: r */
    public z i(CharSequence charSequence, ParsePosition parsePosition, Locale locale, qt.v vVar, qt.m mVar, qt.g gVar) {
        z x10 = x(charSequence, parsePosition);
        if (x10 == null) {
            return (z) a(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        }
        return x10;
    }

    @Override // qt.t
    public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
        appendable.append(h(dVar).f((Enum) oVar.v(this)));
    }

    @Override // qt.t
    /* renamed from: w */
    public z t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
        z x10 = x(charSequence, parsePosition);
        if (x10 == null) {
            return (z) h(dVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return x10;
    }

    @Override // pt.p
    public boolean z() {
        return false;
    }
}
