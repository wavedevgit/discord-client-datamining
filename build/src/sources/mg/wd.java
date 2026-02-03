package mg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wd {

    /* renamed from: a  reason: collision with root package name */
    private Long f38544a;

    /* renamed from: b  reason: collision with root package name */
    private Long f38545b;

    /* renamed from: c  reason: collision with root package name */
    private Long f38546c;

    /* renamed from: d  reason: collision with root package name */
    private Long f38547d;

    /* renamed from: e  reason: collision with root package name */
    private Long f38548e;

    /* renamed from: f  reason: collision with root package name */
    private Long f38549f;

    public final wd a(Long l10) {
        this.f38546c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd b(Long l10) {
        this.f38547d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd c(Long l10) {
        this.f38544a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd d(Long l10) {
        this.f38548e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd e(Long l10) {
        this.f38545b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd f(Long l10) {
        this.f38549f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final yd g() {
        return new yd(this, null);
    }
}
