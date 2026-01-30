package og;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f43581a;

    /* renamed from: b  reason: collision with root package name */
    private ca f43582b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f43583c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f43584d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f43585e;

    public final t9 a(Boolean bool) {
        this.f43584d = bool;
        return this;
    }

    public final t9 b(Boolean bool) {
        this.f43585e = bool;
        return this;
    }

    public final t9 c(Long l10) {
        this.f43581a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final t9 d(ca caVar) {
        this.f43582b = caVar;
        return this;
    }

    public final t9 e(Boolean bool) {
        this.f43583c = bool;
        return this;
    }

    public final v9 f() {
        return new v9(this, null);
    }
}
