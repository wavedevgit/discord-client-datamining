package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import pt.z;
import qt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements t, z, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final i f39836d = new i();
    private static final long serialVersionUID = 4572549754637955194L;

    i() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i D() {
        return f39836d;
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // pt.p
    /* renamed from: C */
    public p A() {
        return p.MINOR_01_LICHUN_315;
    }

    @Override // pt.z
    /* renamed from: E */
    public p k(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + fVar.lengthOfYear()));
    }

    @Override // pt.z
    /* renamed from: F */
    public p r(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + 1));
    }

    @Override // pt.z
    /* renamed from: G */
    public p y(f fVar) {
        return p.k(fVar.U().n(fVar.i() + 1));
    }

    @Override // pt.z
    /* renamed from: H */
    public boolean p(f fVar, p pVar) {
        return pVar != null;
    }

    @Override // qt.t
    /* renamed from: I */
    public p t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
        Locale locale = (Locale) dVar.a(qt.a.f48088c, Locale.ROOT);
        int length = charSequence.length();
        if (parsePosition.getIndex() >= length) {
            parsePosition.setErrorIndex(length);
            return null;
        }
        return p.m(charSequence, locale, parsePosition);
    }

    @Override // pt.z
    /* renamed from: J */
    public f x(f fVar, p pVar, boolean z10) {
        if (pVar != null) {
            return (f) fVar.F(pVar.n());
        }
        throw new IllegalArgumentException("Missing solar term.");
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(pt.o oVar, pt.o oVar2) {
        return ((p) oVar.v(this)).compareTo((p) oVar2.v(this));
    }

    @Override // pt.z
    /* renamed from: c */
    public pt.p a(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // pt.p
    public char d() {
        return (char) 0;
    }

    @Override // pt.p
    public Class getType() {
        return p.class;
    }

    @Override // pt.z
    /* renamed from: j */
    public pt.p h(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    public String name() {
        return "SOLAR_TERM";
    }

    @Override // pt.p
    /* renamed from: o */
    public p e() {
        return p.MAJOR_12_DAHAN_300;
    }

    protected Object readResolve() {
        return f39836d;
    }

    @Override // qt.t
    public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
        appendable.append(((p) oVar.v(this)).e((Locale) dVar.a(qt.a.f48088c, Locale.ROOT)));
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
