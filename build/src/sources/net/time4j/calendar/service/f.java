package net.time4j.calendar.service;

import pt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f39919o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f39920p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f39921q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f39922r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f39919o = i10;
        this.f39920p = i11;
        this.f39921q = null;
        this.f39922r = null;
    }

    @Override // pt.p
    /* renamed from: G */
    public Integer e() {
        return Integer.valueOf(this.f39920p);
    }

    @Override // pt.p
    /* renamed from: H */
    public Integer A() {
        return Integer.valueOf(this.f39919o);
    }

    @Override // pt.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f39919o = i10;
        this.f39920p = i11;
        this.f39921q = vVar;
        this.f39922r = vVar2;
    }
}
