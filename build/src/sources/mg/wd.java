package mg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wd {

    /* renamed from: a  reason: collision with root package name */
    private Long f38206a;

    /* renamed from: b  reason: collision with root package name */
    private Long f38207b;

    /* renamed from: c  reason: collision with root package name */
    private Long f38208c;

    /* renamed from: d  reason: collision with root package name */
    private Long f38209d;

    /* renamed from: e  reason: collision with root package name */
    private Long f38210e;

    /* renamed from: f  reason: collision with root package name */
    private Long f38211f;

    public final wd a(Long l10) {
        this.f38208c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd b(Long l10) {
        this.f38209d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd c(Long l10) {
        this.f38206a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd d(Long l10) {
        this.f38210e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd e(Long l10) {
        this.f38207b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final wd f(Long l10) {
        this.f38211f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final yd g() {
        return new yd(this, null);
    }
}
