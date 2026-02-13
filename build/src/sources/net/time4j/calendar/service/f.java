package net.time4j.calendar.service;

import bu.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f37987o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f37988p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f37989q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f37990r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f37987o = i10;
        this.f37988p = i11;
        this.f37989q = null;
        this.f37990r = null;
    }

    @Override // bu.p
    /* renamed from: G */
    public Integer f() {
        return Integer.valueOf(this.f37988p);
    }

    @Override // bu.p
    /* renamed from: H */
    public Integer B() {
        return Integer.valueOf(this.f37987o);
    }

    @Override // bu.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f37987o = i10;
        this.f37988p = i11;
        this.f37989q = vVar;
        this.f37990r = vVar2;
    }
}
