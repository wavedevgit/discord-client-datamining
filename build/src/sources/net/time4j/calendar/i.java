package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import kt.z;
import lt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements t, z, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final i f40337d = new i();
    private static final long serialVersionUID = 4572549754637955194L;

    i() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i D() {
        return f40337d;
    }

    @Override // kt.p
    /* renamed from: B */
    public p A() {
        return p.MINOR_01_LICHUN_315;
    }

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // kt.z
    /* renamed from: E */
    public p h(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + fVar.lengthOfYear()));
    }

    @Override // kt.z
    /* renamed from: F */
    public p o(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + 1));
    }

    @Override // kt.z
    /* renamed from: G */
    public p x(f fVar) {
        return p.k(fVar.U().n(fVar.i() + 1));
    }

    @Override // kt.z
    /* renamed from: H */
    public boolean l(f fVar, p pVar) {
        return pVar != null;
    }

    @Override // lt.t
    /* renamed from: I */
    public p k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
        Locale locale = (Locale) dVar.a(lt.a.f37628c, Locale.ROOT);
        int length = charSequence.length();
        if (parsePosition.getIndex() >= length) {
            parsePosition.setErrorIndex(length);
            return null;
        }
        return p.m(charSequence, locale, parsePosition);
    }

    @Override // kt.z
    /* renamed from: J */
    public f v(f fVar, p pVar, boolean z10) {
        if (pVar != null) {
            return (f) fVar.F(pVar.o());
        }
        throw new IllegalArgumentException("Missing solar term.");
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(kt.o oVar, kt.o oVar2) {
        return ((p) oVar.v(this)).compareTo((p) oVar2.v(this));
    }

    @Override // kt.z
    /* renamed from: c */
    public kt.p a(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // kt.p
    public char d() {
        return (char) 0;
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    @Override // kt.p
    public Class getType() {
        return p.class;
    }

    @Override // kt.z
    /* renamed from: j */
    public kt.p g(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // kt.p
    /* renamed from: n */
    public p e() {
        return p.MAJOR_12_DAHAN_300;
    }

    @Override // kt.p
    public String name() {
        return "SOLAR_TERM";
    }

    protected Object readResolve() {
        return f40337d;
    }

    @Override // lt.t
    public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
        appendable.append(((p) oVar.v(this)).e((Locale) dVar.a(lt.a.f37628c, Locale.ROOT)));
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
