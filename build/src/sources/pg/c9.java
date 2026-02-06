package pg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f43983a;

    /* renamed from: b  reason: collision with root package name */
    private Long f43984b;

    /* renamed from: c  reason: collision with root package name */
    private Long f43985c;

    /* renamed from: d  reason: collision with root package name */
    private Long f43986d;

    /* renamed from: e  reason: collision with root package name */
    private Long f43987e;

    /* renamed from: f  reason: collision with root package name */
    private Long f43988f;

    public final c9 a(Long l10) {
        this.f43985c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 b(Long l10) {
        this.f43986d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 c(Long l10) {
        this.f43983a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 d(Long l10) {
        this.f43987e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 e(Long l10) {
        this.f43984b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 f(Long l10) {
        this.f43988f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final e9 g() {
        return new e9(this, null);
    }
}
