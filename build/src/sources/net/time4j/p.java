package net.time4j;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p extends a implements c0, lt.l, nt.e {
    private static final long serialVersionUID = 2055272540517425102L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f40656o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Enum f40657p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Enum f40658q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f40659r;

    /* renamed from: s  reason: collision with root package name */
    private final transient char f40660s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(String str, Class cls, Enum r32, Enum r42, int i10, char c10) {
        super(str);
        this.f40656o = cls;
        this.f40657p = r32;
        this.f40658q = r42;
        this.f40659r = i10;
        this.f40660s = c10;
    }

    private lt.s G(Locale locale, lt.v vVar, lt.m mVar) {
        switch (this.f40659r) {
            case 101:
                return lt.b.d(locale).l(vVar, mVar);
            case 102:
                return lt.b.d(locale).p(vVar, mVar);
            case 103:
                return lt.b.d(locale).k(vVar, mVar);
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

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // kt.e
    protected boolean E() {
        return true;
    }

    @Override // kt.p
    /* renamed from: H */
    public Enum e() {
        return this.f40658q;
    }

    @Override // kt.p
    /* renamed from: I */
    public Enum A() {
        return this.f40657p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f40659r;
    }

    public int K(Enum r12) {
        return r12.ordinal() + 1;
    }

    @Override // nt.e
    /* renamed from: L */
    public Enum p(CharSequence charSequence, ParsePosition parsePosition, Locale locale, lt.v vVar, lt.m mVar, lt.g gVar) {
        int index = parsePosition.getIndex();
        Enum d10 = G(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        if (d10 == null && !gVar.e()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            lt.m mVar2 = lt.m.FORMAT;
            if (mVar == mVar2) {
                mVar2 = lt.m.STANDALONE;
            }
            return G(locale, vVar, mVar2).d(charSequence, parsePosition, getType(), gVar);
        }
        return d10;
    }

    @Override // lt.t
    /* renamed from: M */
    public Enum k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
        int index = parsePosition.getIndex();
        Locale locale = (Locale) dVar.a(lt.a.f37628c, Locale.ROOT);
        lt.v vVar = (lt.v) dVar.a(lt.a.f37632g, lt.v.WIDE);
        kt.c cVar = lt.a.f37633h;
        lt.m mVar = lt.m.FORMAT;
        lt.m mVar2 = (lt.m) dVar.a(cVar, mVar);
        Enum c10 = G(locale, vVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && ((Boolean) dVar.a(lt.a.f37636k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = lt.m.STANDALONE;
            }
            return G(locale, vVar, mVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return c10;
    }

    @Override // lt.l
    /* renamed from: N */
    public int u(Enum r12, kt.o oVar, kt.d dVar) {
        return r12.ordinal() + 1;
    }

    @Override // kt.e, kt.p
    public char d() {
        return this.f40660s;
    }

    @Override // kt.p
    public Class getType() {
        return this.f40656o;
    }

    @Override // lt.l
    public boolean m(kt.q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (K(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // lt.t
    public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
        appendable.append(G((Locale) dVar.a(lt.a.f37628c, Locale.ROOT), (lt.v) dVar.a(lt.a.f37632g, lt.v.WIDE), (lt.m) dVar.a(lt.a.f37633h, lt.m.FORMAT)).f((Enum) oVar.v(this)));
    }

    @Override // nt.e
    public void w(kt.o oVar, Appendable appendable, Locale locale, lt.v vVar, lt.m mVar) {
        appendable.append(G(locale, vVar, mVar).f((Enum) oVar.v(this)));
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
