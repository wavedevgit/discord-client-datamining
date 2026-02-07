package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import st.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final e f39222d = new e();
    private static final long serialVersionUID = -4211396220263977858L;

    e() {
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(rt.o oVar, rt.o oVar2) {
        return ((c) oVar.s(this)).compareTo((o) oVar2.s(this));
    }

    @Override // rt.p
    /* renamed from: b */
    public c e() {
        return c.r(60);
    }

    @Override // rt.p
    /* renamed from: c */
    public c B() {
        return c.r(1);
    }

    @Override // rt.p
    public char d() {
        return 'U';
    }

    @Override // st.t
    /* renamed from: g */
    public c r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
        return c.s(charSequence, parsePosition, (Locale) dVar.b(st.a.f50160c, Locale.ROOT), !((st.g) dVar.b(st.a.f50163f, st.g.SMART)).e());
    }

    @Override // rt.p
    public Class getType() {
        return c.class;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.p
    public String name() {
        return "CYCLIC_YEAR";
    }

    protected Object readResolve() {
        return f39222d;
    }

    @Override // st.t
    public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
        appendable.append(((c) oVar.s(this)).i((Locale) dVar.b(st.a.f50160c, Locale.ROOT)));
    }
}
