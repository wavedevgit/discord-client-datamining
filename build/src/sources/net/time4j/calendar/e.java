package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import tt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final e f38314d = new e();
    private static final long serialVersionUID = -4211396220263977858L;

    e() {
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(st.o oVar, st.o oVar2) {
        return ((c) oVar.t(this)).compareTo((o) oVar2.t(this));
    }

    @Override // st.p
    /* renamed from: b */
    public c e() {
        return c.r(60);
    }

    @Override // st.p
    /* renamed from: c */
    public c B() {
        return c.r(1);
    }

    @Override // st.p
    public char d() {
        return 'U';
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    @Override // tt.t
    /* renamed from: g */
    public c l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
        return c.s(charSequence, parsePosition, (Locale) dVar.b(tt.a.f51004c, Locale.ROOT), !((tt.g) dVar.b(tt.a.f51007f, tt.g.SMART)).e());
    }

    @Override // st.p
    public Class getType() {
        return c.class;
    }

    @Override // st.p
    public String name() {
        return "CYCLIC_YEAR";
    }

    @Override // tt.t
    public void o(st.o oVar, Appendable appendable, st.d dVar) {
        appendable.append(((c) oVar.t(this)).i((Locale) dVar.b(tt.a.f51004c, Locale.ROOT)));
    }

    protected Object readResolve() {
        return f38314d;
    }
}
