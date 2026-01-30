package net.time4j;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p extends a implements c0, kt.l, mt.e {
    private static final long serialVersionUID = 2055272540517425102L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f40793o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Enum f40794p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Enum f40795q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f40796r;

    /* renamed from: s  reason: collision with root package name */
    private final transient char f40797s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(String str, Class cls, Enum r32, Enum r42, int i10, char c10) {
        super(str);
        this.f40793o = cls;
        this.f40794p = r32;
        this.f40795q = r42;
        this.f40796r = i10;
        this.f40797s = c10;
    }

    private kt.s G(Locale locale, kt.v vVar, kt.m mVar) {
        switch (this.f40796r) {
            case 101:
                return kt.b.d(locale).l(vVar, mVar);
            case 102:
                return kt.b.d(locale).p(vVar, mVar);
            case 103:
                return kt.b.d(locale).k(vVar, mVar);
            default:
                throw new UnsupportedOperationException(name());
        }
    }

    private Object readResolve() {
        Object F0 = f0.F0(name());
        if (F0 != null) {
            return F0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.e
    protected boolean E() {
        return true;
    }

    @Override // jt.p
    /* renamed from: H */
    public Enum e() {
        return this.f40795q;
    }

    @Override // jt.p
    /* renamed from: I */
    public Enum A() {
        return this.f40794p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f40796r;
    }

    public int K(Enum r12) {
        return r12.ordinal() + 1;
    }

    @Override // mt.e
    /* renamed from: L */
    public Enum f(CharSequence charSequence, ParsePosition parsePosition, Locale locale, kt.v vVar, kt.m mVar, kt.g gVar) {
        int index = parsePosition.getIndex();
        Enum d10 = G(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        if (d10 == null && !gVar.e()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            kt.m mVar2 = kt.m.FORMAT;
            if (mVar == mVar2) {
                mVar2 = kt.m.STANDALONE;
            }
            return G(locale, vVar, mVar2).d(charSequence, parsePosition, getType(), gVar);
        }
        return d10;
    }

    @Override // kt.t
    /* renamed from: M */
    public Enum z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
        int index = parsePosition.getIndex();
        Locale locale = (Locale) dVar.b(kt.a.f36546c, Locale.ROOT);
        kt.v vVar = (kt.v) dVar.b(kt.a.f36550g, kt.v.WIDE);
        jt.c cVar = kt.a.f36551h;
        kt.m mVar = kt.m.FORMAT;
        kt.m mVar2 = (kt.m) dVar.b(cVar, mVar);
        Enum c10 = G(locale, vVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && ((Boolean) dVar.b(kt.a.f36554k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = kt.m.STANDALONE;
            }
            return G(locale, vVar, mVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return c10;
    }

    @Override // kt.l
    /* renamed from: N */
    public int q(Enum r12, jt.o oVar, jt.d dVar) {
        return r12.ordinal() + 1;
    }

    @Override // jt.e, jt.p
    public char d() {
        return this.f40797s;
    }

    @Override // mt.e
    public void g(jt.o oVar, Appendable appendable, Locale locale, kt.v vVar, kt.m mVar) {
        appendable.append(G(locale, vVar, mVar).f((Enum) oVar.p(this)));
    }

    @Override // jt.p
    public Class getType() {
        return this.f40793o;
    }

    @Override // kt.l
    public boolean s(jt.q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (K(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // kt.t
    public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
        appendable.append(G((Locale) dVar.b(kt.a.f36546c, Locale.ROOT), (kt.v) dVar.b(kt.a.f36550g, kt.v.WIDE), (kt.m) dVar.b(kt.a.f36551h, kt.m.FORMAT)).f((Enum) oVar.p(this)));
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
