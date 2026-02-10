package net.time4j.calendar.service;

import bu.o;
import bu.q;
import bu.v;
import cu.l;
import cu.m;
import cu.s;
import cu.t;
import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e extends d implements l, t {
    private static final long serialVersionUID = -2452569351302286113L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f37414o;

    /* renamed from: p  reason: collision with root package name */
    private final transient String f37415p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f37416q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f37417r;

    public e(String str, Class cls, Class cls2, char c10) {
        super(str, cls, c10, N(c10));
        this.f37414o = cls2;
        this.f37415p = H(cls);
        this.f37416q = null;
        this.f37417r = null;
    }

    private static String H(Class cls) {
        cu.c cVar = (cu.c) cls.getAnnotation(cu.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static boolean N(char c10) {
        return c10 == 'E';
    }

    protected s G(bu.d dVar, m mVar, boolean z10) {
        cu.v vVar = (cu.v) dVar.b(cu.a.f21114g, cu.v.WIDE);
        cu.b c10 = cu.b.c(I(dVar), (Locale) dVar.b(cu.a.f21110c, Locale.ROOT));
        if (L()) {
            if (z10) {
                return c10.g(vVar, mVar);
            }
            return c10.l(vVar, mVar);
        } else if (M()) {
            return c10.p(vVar, mVar);
        } else {
            if (K()) {
                return c10.b(vVar);
            }
            return c10.n(name(), this.f37414o, new String[0]);
        }
    }

    protected String I(bu.d dVar) {
        if (!L() && !K()) {
            if (M()) {
                return "iso8601";
            }
            return this.f37415p;
        }
        return (String) dVar.b(cu.a.f21109b, this.f37415p);
    }

    protected boolean J(o oVar) {
        return false;
    }

    protected boolean K() {
        if (d() == 'G') {
            return true;
        }
        return false;
    }

    protected boolean L() {
        if (d() == 'M') {
            return true;
        }
        return false;
    }

    protected boolean M() {
        return N(d());
    }

    public abstract int O(Enum r12);

    @Override // cu.t
    /* renamed from: P */
    public Enum l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
        int index = parsePosition.getIndex();
        bu.c cVar = cu.a.f21115h;
        m mVar = m.FORMAT;
        m mVar2 = (m) dVar.b(cVar, mVar);
        Enum c10 = G(dVar, mVar2, false).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && L()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            c10 = G(dVar, mVar2, true).c(charSequence, parsePosition, getType(), dVar);
        }
        if (c10 == null && ((Boolean) dVar.b(cu.a.f21118k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = m.STANDALONE;
            }
            Enum c11 = G(dVar, mVar, false).c(charSequence, parsePosition, getType(), dVar);
            if (c11 == null && L()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                return G(dVar, mVar, true).c(charSequence, parsePosition, getType(), dVar);
            }
            return c11;
        }
        return c10;
    }

    @Override // cu.l
    /* renamed from: Q */
    public int e(Enum r12, o oVar, bu.d dVar) {
        return O(r12);
    }

    @Override // bu.p
    public Class getType() {
        return this.f37414o;
    }

    @Override // cu.l
    public boolean i(q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (O(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // cu.t
    public void w(o oVar, Appendable appendable, bu.d dVar) {
        appendable.append(G(dVar, (m) dVar.b(cu.a.f21115h, m.FORMAT), J(oVar)).f((Enum) oVar.k(this)));
    }
}
