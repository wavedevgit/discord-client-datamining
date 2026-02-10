package og;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wd {

    /* renamed from: a  reason: collision with root package name */
    private Long f41442a;

    /* renamed from: b  reason: collision with root package name */
    private Long f41443b;

    /* renamed from: c  reason: collision with root package name */
    private Long f41444c;

    /* renamed from: d  reason: collision with root package name */
    private Long f41445d;

    /* renamed from: e  reason: collision with root package name */
    private Long f41446e;

    /* renamed from: f  reason: collision with root package name */
    private Long f41447f;

    public final wd a(Long l10) {
        this.f41444c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd b(Long l10) {
        this.f41445d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd c(Long l10) {
        this.f41442a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd d(Long l10) {
        this.f41446e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd e(Long l10) {
        this.f41443b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd f(Long l10) {
        this.f41447f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final yd g() {
        return new yd(this, null);
    }
}
