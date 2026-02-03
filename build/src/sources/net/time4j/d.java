package net.time4j;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum d implements d1, nt.e {
    AM_PM_OF_DAY;

    private lt.s a(Locale locale, lt.v vVar, lt.m mVar) {
        return lt.b.d(locale).h(vVar, mVar);
    }

    private lt.s g(kt.d dVar) {
        return lt.b.d((Locale) dVar.a(lt.a.f37628c, Locale.ROOT)).h((lt.v) dVar.a(lt.a.f37632g, lt.v.WIDE), (lt.m) dVar.a(lt.a.f37633h, lt.m.FORMAT));
    }

    static z v(CharSequence charSequence, ParsePosition parsePosition) {
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

    @Override // kt.p
    public boolean C() {
        return true;
    }

    @Override // kt.p
    public char d() {
        return 'a';
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    @Override // kt.p
    public Class getType() {
        return z.class;
    }

    @Override // java.util.Comparator
    /* renamed from: h */
    public int compare(kt.o oVar, kt.o oVar2) {
        return ((z) oVar.v(this)).compareTo((z) oVar2.v(this));
    }

    @Override // kt.p
    /* renamed from: i */
    public z e() {
        return z.PM;
    }

    @Override // kt.p
    /* renamed from: l */
    public z A() {
        return z.AM;
    }

    @Override // nt.e
    /* renamed from: o */
    public z p(CharSequence charSequence, ParsePosition parsePosition, Locale locale, lt.v vVar, lt.m mVar, lt.g gVar) {
        z v10 = v(charSequence, parsePosition);
        if (v10 == null) {
            return (z) a(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        }
        return v10;
    }

    @Override // lt.t
    public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
        appendable.append(g(dVar).f((Enum) oVar.v(this)));
    }

    @Override // lt.t
    /* renamed from: t */
    public z k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
        z v10 = v(charSequence, parsePosition);
        if (v10 == null) {
            return (z) g(dVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return v10;
    }

    @Override // nt.e
    public void w(kt.o oVar, Appendable appendable, Locale locale, lt.v vVar, lt.m mVar) {
        appendable.append(a(locale, vVar, mVar).f((Enum) oVar.v(this)));
    }

    @Override // kt.p
    public boolean y() {
        return false;
    }
}
