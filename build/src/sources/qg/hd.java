package qg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd {

    /* renamed from: a  reason: collision with root package name */
    private Long f47124a;

    /* renamed from: b  reason: collision with root package name */
    private Long f47125b;

    /* renamed from: c  reason: collision with root package name */
    private Long f47126c;

    /* renamed from: d  reason: collision with root package name */
    private Long f47127d;

    /* renamed from: e  reason: collision with root package name */
    private Long f47128e;

    /* renamed from: f  reason: collision with root package name */
    private Long f47129f;

    public final hd a(Long l10) {
        this.f47126c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd b(Long l10) {
        this.f47127d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd c(Long l10) {
        this.f47124a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd d(Long l10) {
        this.f47128e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd e(Long l10) {
        this.f47125b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd f(Long l10) {
        this.f47129f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final jd g() {
        return new jd(this, null);
    }
}
