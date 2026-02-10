package rg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd {

    /* renamed from: a  reason: collision with root package name */
    private Long f48242a;

    /* renamed from: b  reason: collision with root package name */
    private Long f48243b;

    /* renamed from: c  reason: collision with root package name */
    private Long f48244c;

    /* renamed from: d  reason: collision with root package name */
    private Long f48245d;

    /* renamed from: e  reason: collision with root package name */
    private Long f48246e;

    /* renamed from: f  reason: collision with root package name */
    private Long f48247f;

    public final hd a(Long l10) {
        this.f48244c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd b(Long l10) {
        this.f48245d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd c(Long l10) {
        this.f48242a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd d(Long l10) {
        this.f48246e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd e(Long l10) {
        this.f48243b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final hd f(Long l10) {
        this.f48247f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final jd g() {
        return new jd(this, null);
    }
}
