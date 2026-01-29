package net.time4j.calendar.service;

import java.text.ParsePosition;
import java.util.Locale;
import jt.o;
import jt.q;
import jt.v;
import kt.l;
import kt.m;
import kt.s;
import kt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e extends d implements l, t {
    private static final long serialVersionUID = -2452569351302286113L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f40537o;

    /* renamed from: p  reason: collision with root package name */
    private final transient String f40538p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f40539q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f40540r;

    public e(String str, Class cls, Class cls2, char c10) {
        super(str, cls, c10, N(c10));
        this.f40537o = cls2;
        this.f40538p = H(cls);
        this.f40539q = null;
        this.f40540r = null;
    }

    private static String H(Class cls) {
        kt.c cVar = (kt.c) cls.getAnnotation(kt.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static boolean N(char c10) {
        return c10 == 'E';
    }

    protected s G(jt.d dVar, m mVar, boolean z10) {
        kt.v vVar = (kt.v) dVar.b(kt.a.f36534g, kt.v.WIDE);
        kt.b c10 = kt.b.c(I(dVar), (Locale) dVar.b(kt.a.f36530c, Locale.ROOT));
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
            return c10.n(name(), this.f40537o, new String[0]);
        }
    }

    protected String I(jt.d dVar) {
        if (!L() && !K()) {
            if (M()) {
                return "iso8601";
            }
            return this.f40538p;
        }
        return (String) dVar.b(kt.a.f36529b, this.f40538p);
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

    @Override // kt.t
    /* renamed from: P */
    public Enum z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
        int index = parsePosition.getIndex();
        jt.c cVar = kt.a.f36535h;
        m mVar = m.FORMAT;
        m mVar2 = (m) dVar.b(cVar, mVar);
        Enum c10 = G(dVar, mVar2, false).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && L()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            c10 = G(dVar, mVar2, true).c(charSequence, parsePosition, getType(), dVar);
        }
        if (c10 == null && ((Boolean) dVar.b(kt.a.f36538k, Boolean.TRUE)).booleanValue()) {
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

    @Override // kt.l
    /* renamed from: Q */
    public int q(Enum r12, o oVar, jt.d dVar) {
        return O(r12);
    }

    @Override // jt.p
    public Class getType() {
        return this.f40537o;
    }

    @Override // kt.l
    public boolean s(q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (O(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // kt.t
    public void u(o oVar, Appendable appendable, jt.d dVar) {
        appendable.append(G(dVar, (m) dVar.b(kt.a.f36535h, m.FORMAT), J(oVar)).f((Enum) oVar.p(this)));
    }
}
