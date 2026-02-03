package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import mt.z;
import nt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements t, z, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final i f40376d = new i();
    private static final long serialVersionUID = 4572549754637955194L;

    i() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i D() {
        return f40376d;
    }

    @Override // mt.p
    /* renamed from: B */
    public p A() {
        return p.MINOR_01_LICHUN_315;
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // mt.z
    /* renamed from: E */
    public p l(f fVar) {
        d U = fVar.U();
        return p.j(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + fVar.lengthOfYear()));
    }

    @Override // mt.z
    /* renamed from: F */
    public p r(f fVar) {
        d U = fVar.U();
        return p.j(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + 1));
    }

    @Override // mt.z
    /* renamed from: G */
    public p z(f fVar) {
        return p.j(fVar.U().n(fVar.i() + 1));
    }

    @Override // mt.z
    /* renamed from: H */
    public boolean q(f fVar, p pVar) {
        return pVar != null;
    }

    @Override // nt.t
    /* renamed from: I */
    public p j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
        Locale locale = (Locale) dVar.b(nt.a.f42028c, Locale.ROOT);
        int length = charSequence.length();
        if (parsePosition.getIndex() >= length) {
            parsePosition.setErrorIndex(length);
            return null;
        }
        return p.l(charSequence, locale, parsePosition);
    }

    @Override // mt.z
    /* renamed from: J */
    public f x(f fVar, p pVar, boolean z10) {
        if (pVar != null) {
            return (f) fVar.F(pVar.o());
        }
        throw new IllegalArgumentException("Missing solar term.");
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(mt.o oVar, mt.o oVar2) {
        return ((p) oVar.o(this)).compareTo((p) oVar2.o(this));
    }

    @Override // mt.z
    /* renamed from: c */
    public mt.p a(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // mt.p
    public char d() {
        return (char) 0;
    }

    @Override // mt.p
    public Class getType() {
        return p.class;
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.z
    /* renamed from: m */
    public mt.p h(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // mt.p
    /* renamed from: n */
    public p f() {
        return p.MAJOR_12_DAHAN_300;
    }

    @Override // mt.p
    public String name() {
        return "SOLAR_TERM";
    }

    protected Object readResolve() {
        return f40376d;
    }

    @Override // nt.t
    public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
        appendable.append(((p) oVar.o(this)).e((Locale) dVar.b(nt.a.f42028c, Locale.ROOT)));
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
