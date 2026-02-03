package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import lt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final e f40320d = new e();
    private static final long serialVersionUID = -4211396220263977858L;

    e() {
    }

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(kt.o oVar, kt.o oVar2) {
        return ((c) oVar.v(this)).compareTo((o) oVar2.v(this));
    }

    @Override // kt.p
    /* renamed from: b */
    public c e() {
        return c.r(60);
    }

    @Override // kt.p
    /* renamed from: c */
    public c A() {
        return c.r(1);
    }

    @Override // kt.p
    public char d() {
        return 'U';
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    @Override // lt.t
    /* renamed from: g */
    public c k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
        return c.s(charSequence, parsePosition, (Locale) dVar.a(lt.a.f37628c, Locale.ROOT), !((lt.g) dVar.a(lt.a.f37631f, lt.g.SMART)).e());
    }

    @Override // kt.p
    public Class getType() {
        return c.class;
    }

    @Override // kt.p
    public String name() {
        return "CYCLIC_YEAR";
    }

    protected Object readResolve() {
        return f40320d;
    }

    @Override // lt.t
    public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
        appendable.append(((c) oVar.v(this)).i((Locale) dVar.a(lt.a.f37628c, Locale.ROOT)));
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
