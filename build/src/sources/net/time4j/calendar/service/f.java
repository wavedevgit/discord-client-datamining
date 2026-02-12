package net.time4j.calendar.service;

import bu.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f37419o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f37420p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f37421q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f37422r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f37419o = i10;
        this.f37420p = i11;
        this.f37421q = null;
        this.f37422r = null;
    }

    @Override // bu.p
    /* renamed from: G */
    public Integer f() {
        return Integer.valueOf(this.f37420p);
    }

    @Override // bu.p
    /* renamed from: H */
    public Integer B() {
        return Integer.valueOf(this.f37419o);
    }

    @Override // bu.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f37419o = i10;
        this.f37420p = i11;
        this.f37421q = vVar;
        this.f37422r = vVar2;
    }
}
