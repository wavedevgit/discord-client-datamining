package rg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd {

    /* renamed from: a  reason: collision with root package name */
    private Long f46697a;

    /* renamed from: b  reason: collision with root package name */
    private Long f46698b;

    /* renamed from: c  reason: collision with root package name */
    private Long f46699c;

    /* renamed from: d  reason: collision with root package name */
    private Long f46700d;

    /* renamed from: e  reason: collision with root package name */
    private Long f46701e;

    /* renamed from: f  reason: collision with root package name */
    private Long f46702f;

    public final hd a(Long l10) {
        this.f46699c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd b(Long l10) {
        this.f46700d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd c(Long l10) {
        this.f46697a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd d(Long l10) {
        this.f46701e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd e(Long l10) {
        this.f46698b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd f(Long l10) {
        this.f46702f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final jd g() {
        return new jd(this, null);
    }
}
