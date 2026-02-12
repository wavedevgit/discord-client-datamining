package net.time4j;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum d implements d1, eu.e {
    AM_PM_OF_DAY;

    private cu.s a(bu.d dVar) {
        return cu.b.d((Locale) dVar.b(cu.a.f21111c, Locale.ROOT)).h((cu.v) dVar.b(cu.a.f21115g, cu.v.WIDE), (cu.m) dVar.b(cu.a.f21116h, cu.m.FORMAT));
    }

    private cu.s h(Locale locale, cu.v vVar, cu.m mVar) {
        return cu.b.d(locale).h(vVar, mVar);
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

    @Override // bu.p
    public boolean A() {
        return false;
    }

    @Override // bu.p
    public boolean C() {
        return true;
    }

    @Override // bu.p
    public char d() {
        return 'a';
    }

    @Override // eu.e
    public void g(bu.o oVar, Appendable appendable, Locale locale, cu.v vVar, cu.m mVar) {
        appendable.append(h(locale, vVar, mVar).f((Enum) oVar.k(this)));
    }

    @Override // bu.p
    public Class getType() {
        return z.class;
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: m */
    public int compare(bu.o oVar, bu.o oVar2) {
        return ((z) oVar.k(this)).compareTo((z) oVar2.k(this));
    }

    @Override // bu.p
    /* renamed from: n */
    public z f() {
        return z.PM;
    }

    @Override // bu.p
    /* renamed from: o */
    public z B() {
        return z.AM;
    }

    @Override // cu.t
    /* renamed from: q */
    public z l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
        z x10 = x(charSequence, parsePosition);
        if (x10 == null) {
            return (z) a(dVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return x10;
    }

    @Override // eu.e
    /* renamed from: u */
    public z v(CharSequence charSequence, ParsePosition parsePosition, Locale locale, cu.v vVar, cu.m mVar, cu.g gVar) {
        z x10 = x(charSequence, parsePosition);
        if (x10 == null) {
            return (z) h(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        }
        return x10;
    }

    @Override // cu.t
    public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
        appendable.append(a(dVar).f((Enum) oVar.k(this)));
    }
}
