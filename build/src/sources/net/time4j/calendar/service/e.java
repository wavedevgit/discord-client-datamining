package net.time4j.calendar.service;

import java.text.ParsePosition;
import java.util.Locale;
import rt.o;
import rt.q;
import rt.v;
import st.l;
import st.m;
import st.s;
import st.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e extends d implements l, t {
    private static final long serialVersionUID = -2452569351302286113L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f39270o;

    /* renamed from: p  reason: collision with root package name */
    private final transient String f39271p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f39272q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f39273r;

    public e(String str, Class cls, Class cls2, char c10) {
        super(str, cls, c10, N(c10));
        this.f39270o = cls2;
        this.f39271p = H(cls);
        this.f39272q = null;
        this.f39273r = null;
    }

    private static String H(Class cls) {
        st.c cVar = (st.c) cls.getAnnotation(st.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static boolean N(char c10) {
        return c10 == 'E';
    }

    protected s G(rt.d dVar, m mVar, boolean z10) {
        st.v vVar = (st.v) dVar.b(st.a.f50116g, st.v.WIDE);
        st.b c10 = st.b.c(I(dVar), (Locale) dVar.b(st.a.f50112c, Locale.ROOT));
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
            return c10.n(name(), this.f39270o, new String[0]);
        }
    }

    protected String I(rt.d dVar) {
        if (!L() && !K()) {
            if (M()) {
                return "iso8601";
            }
            return this.f39271p;
        }
        return (String) dVar.b(st.a.f50111b, this.f39271p);
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

    @Override // st.t
    /* renamed from: P */
    public Enum r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
        int index = parsePosition.getIndex();
        rt.c cVar = st.a.f50117h;
        m mVar = m.FORMAT;
        m mVar2 = (m) dVar.b(cVar, mVar);
        Enum c10 = G(dVar, mVar2, false).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && L()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            c10 = G(dVar, mVar2, true).c(charSequence, parsePosition, getType(), dVar);
        }
        if (c10 == null && ((Boolean) dVar.b(st.a.f50120k, Boolean.TRUE)).booleanValue()) {
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

    @Override // st.l
    /* renamed from: Q */
    public int j(Enum r12, o oVar, rt.d dVar) {
        return O(r12);
    }

    @Override // st.l
    public boolean f(q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (O(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // rt.p
    public Class getType() {
        return this.f39270o;
    }

    @Override // st.t
    public void v(o oVar, Appendable appendable, rt.d dVar) {
        appendable.append(G(dVar, (m) dVar.b(st.a.f50117h, m.FORMAT), J(oVar)).f((Enum) oVar.s(this)));
    }
}
