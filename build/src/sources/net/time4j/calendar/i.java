package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import jt.z;
import kt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements t, z, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final i f40458d = new i();
    private static final long serialVersionUID = 4572549754637955194L;

    i() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i D() {
        return f40458d;
    }

    @Override // jt.p
    /* renamed from: B */
    public p A() {
        return p.MINOR_01_LICHUN_315;
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.z
    /* renamed from: E */
    public p j(f fVar) {
        d U = fVar.U();
        return p.j(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + fVar.lengthOfYear()));
    }

    @Override // jt.z
    /* renamed from: F */
    public p p(f fVar) {
        d U = fVar.U();
        return p.j(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + 1));
    }

    @Override // jt.z
    /* renamed from: G */
    public p x(f fVar) {
        return p.j(fVar.U().n(fVar.j() + 1));
    }

    @Override // jt.z
    /* renamed from: H */
    public boolean l(f fVar, p pVar) {
        return pVar != null;
    }

    @Override // kt.t
    /* renamed from: I */
    public p z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
        Locale locale = (Locale) dVar.b(kt.a.f36530c, Locale.ROOT);
        int length = charSequence.length();
        if (parsePosition.getIndex() >= length) {
            parsePosition.setErrorIndex(length);
            return null;
        }
        return p.l(charSequence, locale, parsePosition);
    }

    @Override // jt.z
    /* renamed from: J */
    public f w(f fVar, p pVar, boolean z10) {
        if (pVar != null) {
            return (f) fVar.F(pVar.o());
        }
        throw new IllegalArgumentException("Missing solar term.");
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(jt.o oVar, jt.o oVar2) {
        return ((p) oVar.p(this)).compareTo((p) oVar2.p(this));
    }

    @Override // jt.z
    /* renamed from: c */
    public jt.p a(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // jt.p
    public char d() {
        return (char) 0;
    }

    @Override // jt.p
    public Class getType() {
        return p.class;
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.z
    /* renamed from: m */
    public jt.p h(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // jt.p
    /* renamed from: n */
    public p e() {
        return p.MAJOR_12_DAHAN_300;
    }

    @Override // jt.p
    public String name() {
        return "SOLAR_TERM";
    }

    protected Object readResolve() {
        return f40458d;
    }

    @Override // kt.t
    public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
        appendable.append(((p) oVar.p(this)).e((Locale) dVar.b(kt.a.f36530c, Locale.ROOT)));
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
