package qg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd {

    /* renamed from: a  reason: collision with root package name */
    private Long f47076a;

    /* renamed from: b  reason: collision with root package name */
    private Long f47077b;

    /* renamed from: c  reason: collision with root package name */
    private Long f47078c;

    /* renamed from: d  reason: collision with root package name */
    private Long f47079d;

    /* renamed from: e  reason: collision with root package name */
    private Long f47080e;

    /* renamed from: f  reason: collision with root package name */
    private Long f47081f;

    public final hd a(Long l10) {
        this.f47078c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd b(Long l10) {
        this.f47079d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd c(Long l10) {
        this.f47076a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd d(Long l10) {
        this.f47080e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd e(Long l10) {
        this.f47077b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd f(Long l10) {
        this.f47081f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final jd g() {
        return new jd(this, null);
    }
}
