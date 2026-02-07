package ng;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wd {

    /* renamed from: a  reason: collision with root package name */
    private Long f40417a;

    /* renamed from: b  reason: collision with root package name */
    private Long f40418b;

    /* renamed from: c  reason: collision with root package name */
    private Long f40419c;

    /* renamed from: d  reason: collision with root package name */
    private Long f40420d;

    /* renamed from: e  reason: collision with root package name */
    private Long f40421e;

    /* renamed from: f  reason: collision with root package name */
    private Long f40422f;

    public final wd a(Long l10) {
        this.f40419c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd b(Long l10) {
        this.f40420d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd c(Long l10) {
        this.f40417a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd d(Long l10) {
        this.f40421e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd e(Long l10) {
        this.f40418b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd f(Long l10) {
        this.f40422f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final yd g() {
        return new yd(this, null);
    }
}
