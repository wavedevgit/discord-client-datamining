package og;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f42807a;

    /* renamed from: b  reason: collision with root package name */
    private Long f42808b;

    /* renamed from: c  reason: collision with root package name */
    private Long f42809c;

    /* renamed from: d  reason: collision with root package name */
    private Long f42810d;

    /* renamed from: e  reason: collision with root package name */
    private Long f42811e;

    /* renamed from: f  reason: collision with root package name */
    private Long f42812f;

    public final c9 a(Long l10) {
        this.f42809c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 b(Long l10) {
        this.f42810d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 c(Long l10) {
        this.f42807a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 d(Long l10) {
        this.f42811e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 e(Long l10) {
        this.f42808b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 f(Long l10) {
        this.f42812f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final e9 g() {
        return new e9(this, null);
    }
}
