package mg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wd {

    /* renamed from: a  reason: collision with root package name */
    private Long f38747a;

    /* renamed from: b  reason: collision with root package name */
    private Long f38748b;

    /* renamed from: c  reason: collision with root package name */
    private Long f38749c;

    /* renamed from: d  reason: collision with root package name */
    private Long f38750d;

    /* renamed from: e  reason: collision with root package name */
    private Long f38751e;

    /* renamed from: f  reason: collision with root package name */
    private Long f38752f;

    public final wd a(Long l10) {
        this.f38749c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd b(Long l10) {
        this.f38750d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd c(Long l10) {
        this.f38747a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd d(Long l10) {
        this.f38751e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd e(Long l10) {
        this.f38748b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd f(Long l10) {
        this.f38752f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final yd g() {
        return new yd(this, null);
    }
}
