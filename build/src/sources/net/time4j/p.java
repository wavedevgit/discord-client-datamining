package net.time4j;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p extends a implements c0, nt.l, pt.e {
    private static final long serialVersionUID = 2055272540517425102L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f40695o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Enum f40696p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Enum f40697q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f40698r;

    /* renamed from: s  reason: collision with root package name */
    private final transient char f40699s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(String str, Class cls, Enum r32, Enum r42, int i10, char c10) {
        super(str);
        this.f40695o = cls;
        this.f40696p = r32;
        this.f40697q = r42;
        this.f40698r = i10;
        this.f40699s = c10;
    }

    private nt.s G(Locale locale, nt.v vVar, nt.m mVar) {
        switch (this.f40698r) {
            case 101:
                return nt.b.d(locale).l(vVar, mVar);
            case 102:
                return nt.b.d(locale).p(vVar, mVar);
            case 103:
                return nt.b.d(locale).k(vVar, mVar);
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

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // mt.e
    protected boolean E() {
        return true;
    }

    @Override // mt.p
    /* renamed from: H */
    public Enum f() {
        return this.f40697q;
    }

    @Override // mt.p
    /* renamed from: I */
    public Enum A() {
        return this.f40696p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f40698r;
    }

    public int K(Enum r12) {
        return r12.ordinal() + 1;
    }

    @Override // pt.e
    /* renamed from: L */
    public Enum g(CharSequence charSequence, ParsePosition parsePosition, Locale locale, nt.v vVar, nt.m mVar, nt.g gVar) {
        int index = parsePosition.getIndex();
        Enum d10 = G(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        if (d10 == null && !gVar.e()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            nt.m mVar2 = nt.m.FORMAT;
            if (mVar == mVar2) {
                mVar2 = nt.m.STANDALONE;
            }
            return G(locale, vVar, mVar2).d(charSequence, parsePosition, getType(), gVar);
        }
        return d10;
    }

    @Override // nt.t
    /* renamed from: M */
    public Enum j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
        int index = parsePosition.getIndex();
        Locale locale = (Locale) dVar.b(nt.a.f42028c, Locale.ROOT);
        nt.v vVar = (nt.v) dVar.b(nt.a.f42032g, nt.v.WIDE);
        mt.c cVar = nt.a.f42033h;
        nt.m mVar = nt.m.FORMAT;
        nt.m mVar2 = (nt.m) dVar.b(cVar, mVar);
        Enum c10 = G(locale, vVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && ((Boolean) dVar.b(nt.a.f42036k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = nt.m.STANDALONE;
            }
            return G(locale, vVar, mVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return c10;
    }

    @Override // nt.l
    /* renamed from: N */
    public int e(Enum r12, mt.o oVar, mt.d dVar) {
        return r12.ordinal() + 1;
    }

    @Override // mt.e, mt.p
    public char d() {
        return this.f40699s;
    }

    @Override // mt.p
    public Class getType() {
        return this.f40695o;
    }

    @Override // nt.l
    public boolean p(mt.q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (K(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // nt.t
    public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
        appendable.append(G((Locale) dVar.b(nt.a.f42028c, Locale.ROOT), (nt.v) dVar.b(nt.a.f42032g, nt.v.WIDE), (nt.m) dVar.b(nt.a.f42033h, nt.m.FORMAT)).f((Enum) oVar.o(this)));
    }

    @Override // pt.e
    public void v(mt.o oVar, Appendable appendable, Locale locale, nt.v vVar, nt.m mVar) {
        appendable.append(G(locale, vVar, mVar).f((Enum) oVar.o(this)));
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
