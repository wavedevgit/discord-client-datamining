package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f44805a;

    /* renamed from: b  reason: collision with root package name */
    private ca f44806b;

    /* renamed from: c  reason: collision with root package name */
    private Boolean f44807c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f44808d;

    /* renamed from: e  reason: collision with root package name */
    private Boolean f44809e;

    public final t9 a(Boolean bool) {
        this.f44808d = bool;
        return this;
    }

    public final t9 b(Boolean bool) {
        this.f44809e = bool;
        return this;
    }

    public final t9 c(Long l10) {
        this.f44805a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final t9 d(ca caVar) {
        this.f44806b = caVar;
        return this;
    }

    public final t9 e(Boolean bool) {
        this.f44807c = bool;
        return this;
    }

    public final v9 f() {
        return new v9(this, null);
    }
}
