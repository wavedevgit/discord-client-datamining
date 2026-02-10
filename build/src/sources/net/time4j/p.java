package net.time4j;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p extends a implements c0, cu.l, eu.e {
    private static final long serialVersionUID = 2055272540517425102L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f37654o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Enum f37655p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Enum f37656q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f37657r;

    /* renamed from: s  reason: collision with root package name */
    private final transient char f37658s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(String str, Class cls, Enum r32, Enum r42, int i10, char c10) {
        super(str);
        this.f37654o = cls;
        this.f37655p = r32;
        this.f37656q = r42;
        this.f37657r = i10;
        this.f37658s = c10;
    }

    private cu.s G(Locale locale, cu.v vVar, cu.m mVar) {
        switch (this.f37657r) {
            case 101:
                return cu.b.d(locale).l(vVar, mVar);
            case 102:
                return cu.b.d(locale).p(vVar, mVar);
            case 103:
                return cu.b.d(locale).k(vVar, mVar);
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

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // bu.e
    protected boolean E() {
        return true;
    }

    @Override // bu.p
    /* renamed from: H */
    public Enum f() {
        return this.f37656q;
    }

    @Override // bu.p
    /* renamed from: I */
    public Enum B() {
        return this.f37655p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f37657r;
    }

    public int K(Enum r12) {
        return r12.ordinal() + 1;
    }

    @Override // cu.t
    /* renamed from: L */
    public Enum l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
        int index = parsePosition.getIndex();
        Locale locale = (Locale) dVar.b(cu.a.f21110c, Locale.ROOT);
        cu.v vVar = (cu.v) dVar.b(cu.a.f21114g, cu.v.WIDE);
        bu.c cVar = cu.a.f21115h;
        cu.m mVar = cu.m.FORMAT;
        cu.m mVar2 = (cu.m) dVar.b(cVar, mVar);
        Enum c10 = G(locale, vVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && ((Boolean) dVar.b(cu.a.f21118k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = cu.m.STANDALONE;
            }
            return G(locale, vVar, mVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return c10;
    }

    @Override // eu.e
    /* renamed from: M */
    public Enum v(CharSequence charSequence, ParsePosition parsePosition, Locale locale, cu.v vVar, cu.m mVar, cu.g gVar) {
        int index = parsePosition.getIndex();
        Enum d10 = G(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        if (d10 == null && !gVar.e()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            cu.m mVar2 = cu.m.FORMAT;
            if (mVar == mVar2) {
                mVar2 = cu.m.STANDALONE;
            }
            return G(locale, vVar, mVar2).d(charSequence, parsePosition, getType(), gVar);
        }
        return d10;
    }

    @Override // cu.l
    /* renamed from: N */
    public int e(Enum r12, bu.o oVar, bu.d dVar) {
        return r12.ordinal() + 1;
    }

    @Override // bu.e, bu.p
    public char d() {
        return this.f37658s;
    }

    @Override // eu.e
    public void g(bu.o oVar, Appendable appendable, Locale locale, cu.v vVar, cu.m mVar) {
        appendable.append(G(locale, vVar, mVar).f((Enum) oVar.k(this)));
    }

    @Override // bu.p
    public Class getType() {
        return this.f37654o;
    }

    @Override // cu.l
    public boolean i(bu.q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (K(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // cu.t
    public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
        appendable.append(G((Locale) dVar.b(cu.a.f21110c, Locale.ROOT), (cu.v) dVar.b(cu.a.f21114g, cu.v.WIDE), (cu.m) dVar.b(cu.a.f21115h, cu.m.FORMAT)).f((Enum) oVar.k(this)));
    }
}
