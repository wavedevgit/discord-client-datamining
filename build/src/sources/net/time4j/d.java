package net.time4j;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum d implements d1, vt.e {
    AM_PM_OF_DAY;

    private tt.s a(Locale locale, tt.v vVar, tt.m mVar) {
        return tt.b.d(locale).h(vVar, mVar);
    }

    private tt.s g(st.d dVar) {
        return tt.b.d((Locale) dVar.b(tt.a.f51004c, Locale.ROOT)).h((tt.v) dVar.b(tt.a.f51008g, tt.v.WIDE), (tt.m) dVar.b(tt.a.f51009h, tt.m.FORMAT));
    }

    static z s(CharSequence charSequence, ParsePosition parsePosition) {
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

    @Override // st.p
    public boolean A() {
        return false;
    }

    @Override // st.p
    public boolean D() {
        return true;
    }

    @Override // st.p
    public char d() {
        return 'a';
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    @Override // st.p
    public Class getType() {
        return z.class;
    }

    @Override // java.util.Comparator
    /* renamed from: h */
    public int compare(st.o oVar, st.o oVar2) {
        return ((z) oVar.t(this)).compareTo((z) oVar2.t(this));
    }

    @Override // st.p
    /* renamed from: i */
    public z e() {
        return z.PM;
    }

    @Override // st.p
    /* renamed from: k */
    public z B() {
        return z.AM;
    }

    @Override // vt.e
    /* renamed from: m */
    public z w(CharSequence charSequence, ParsePosition parsePosition, Locale locale, tt.v vVar, tt.m mVar, tt.g gVar) {
        z s10 = s(charSequence, parsePosition);
        if (s10 == null) {
            return (z) a(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        }
        return s10;
    }

    @Override // tt.t
    /* renamed from: n */
    public z l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
        z s10 = s(charSequence, parsePosition);
        if (s10 == null) {
            return (z) g(dVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return s10;
    }

    @Override // tt.t
    public void o(st.o oVar, Appendable appendable, st.d dVar) {
        appendable.append(g(dVar).f((Enum) oVar.t(this)));
    }

    @Override // vt.e
    public void q(st.o oVar, Appendable appendable, Locale locale, tt.v vVar, tt.m mVar) {
        appendable.append(a(locale, vVar, mVar).f((Enum) oVar.t(this)));
    }
}
