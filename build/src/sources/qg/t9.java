package qg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f44988a;

    /* renamed from: b  reason: collision with root package name */
    private ca f44989b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f44990c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f44991d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f44992e;

    public final t9 a(Boolean bool) {
        this.f44991d = bool;
        return this;
    }

    public final t9 b(Boolean bool) {
        this.f44992e = bool;
        return this;
    }

    public final t9 c(Long l10) {
        this.f44988a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final t9 d(ca caVar) {
        this.f44989b = caVar;
        return this;
    }

    public final t9 e(Boolean bool) {
        this.f44990c = bool;
        return this;
    }

    public final v9 f() {
        return new v9(this, null);
    }
}
