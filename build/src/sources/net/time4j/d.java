package net.time4j;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum d implements d1, ut.e {
    AM_PM_OF_DAY;

    private st.s a(Locale locale, st.v vVar, st.m mVar) {
        return st.b.d(locale).h(vVar, mVar);
    }

    private st.s g(rt.d dVar) {
        return st.b.d((Locale) dVar.b(st.a.f50160c, Locale.ROOT)).h((st.v) dVar.b(st.a.f50164g, st.v.WIDE), (st.m) dVar.b(st.a.f50165h, st.m.FORMAT));
    }

    static z u(CharSequence charSequence, ParsePosition parsePosition) {
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

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return true;
    }

    @Override // rt.p
    public char d() {
        return 'a';
    }

    @Override // rt.p
    public Class getType() {
        return z.class;
    }

    @Override // ut.e
    public void h(rt.o oVar, Appendable appendable, Locale locale, st.v vVar, st.m mVar) {
        appendable.append(a(locale, vVar, mVar).f((Enum) oVar.s(this)));
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: k */
    public int compare(rt.o oVar, rt.o oVar2) {
        return ((z) oVar.s(this)).compareTo((z) oVar2.s(this));
    }

    @Override // rt.p
    /* renamed from: m */
    public z e() {
        return z.PM;
    }

    @Override // rt.p
    /* renamed from: n */
    public z B() {
        return z.AM;
    }

    @Override // ut.e
    /* renamed from: o */
    public z q(CharSequence charSequence, ParsePosition parsePosition, Locale locale, st.v vVar, st.m mVar, st.g gVar) {
        z u10 = u(charSequence, parsePosition);
        if (u10 == null) {
            return (z) a(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        }
        return u10;
    }

    @Override // st.t
    /* renamed from: s */
    public z r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
        z u10 = u(charSequence, parsePosition);
        if (u10 == null) {
            return (z) g(dVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return u10;
    }

    @Override // st.t
    public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
        appendable.append(g(dVar).f((Enum) oVar.s(this)));
    }
}
