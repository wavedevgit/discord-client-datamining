package net.time4j.calendar.service;

import bu.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f37418o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f37419p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f37420q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f37421r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f37418o = i10;
        this.f37419p = i11;
        this.f37420q = null;
        this.f37421r = null;
    }

    @Override // bu.p
    /* renamed from: G */
    public Integer f() {
        return Integer.valueOf(this.f37419p);
    }

    @Override // bu.p
    /* renamed from: H */
    public Integer B() {
        return Integer.valueOf(this.f37418o);
    }

    @Override // bu.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f37418o = i10;
        this.f37419p = i11;
        this.f37420q = vVar;
        this.f37421r = vVar2;
    }
}
