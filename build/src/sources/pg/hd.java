package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd {

    /* renamed from: a  reason: collision with root package name */
    private Long f45284a;

    /* renamed from: b  reason: collision with root package name */
    private Long f45285b;

    /* renamed from: c  reason: collision with root package name */
    private Long f45286c;

    /* renamed from: d  reason: collision with root package name */
    private Long f45287d;

    /* renamed from: e  reason: collision with root package name */
    private Long f45288e;

    /* renamed from: f  reason: collision with root package name */
    private Long f45289f;

    public final hd a(Long l10) {
        this.f45286c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd b(Long l10) {
        this.f45287d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd c(Long l10) {
        this.f45284a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd d(Long l10) {
        this.f45288e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd e(Long l10) {
        this.f45285b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd f(Long l10) {
        this.f45289f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final jd g() {
        return new jd(this, null);
    }
}
