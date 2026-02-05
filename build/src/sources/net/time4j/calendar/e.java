package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import qt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final e f39819d = new e();
    private static final long serialVersionUID = -4211396220263977858L;

    e() {
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(pt.o oVar, pt.o oVar2) {
        return ((c) oVar.v(this)).compareTo((o) oVar2.v(this));
    }

    @Override // pt.p
    /* renamed from: b */
    public c e() {
        return c.r(60);
    }

    @Override // pt.p
    /* renamed from: c */
    public c A() {
        return c.r(1);
    }

    @Override // pt.p
    public char d() {
        return 'U';
    }

    @Override // pt.p
    public Class getType() {
        return c.class;
    }

    @Override // qt.t
    /* renamed from: h */
    public c t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
        return c.s(charSequence, parsePosition, (Locale) dVar.a(qt.a.f48088c, Locale.ROOT), !((qt.g) dVar.a(qt.a.f48091f, qt.g.SMART)).e());
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    public String name() {
        return "CYCLIC_YEAR";
    }

    protected Object readResolve() {
        return f39819d;
    }

    @Override // qt.t
    public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
        appendable.append(((c) oVar.v(this)).i((Locale) dVar.a(qt.a.f48088c, Locale.ROOT)));
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
