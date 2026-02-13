package qg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f44782a;

    /* renamed from: b  reason: collision with root package name */
    private Long f44783b;

    /* renamed from: c  reason: collision with root package name */
    private Long f44784c;

    /* renamed from: d  reason: collision with root package name */
    private Long f44785d;

    /* renamed from: e  reason: collision with root package name */
    private Long f44786e;

    /* renamed from: f  reason: collision with root package name */
    private Long f44787f;

    public final c9 a(Long l10) {
        this.f44784c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 b(Long l10) {
        this.f44785d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 c(Long l10) {
        this.f44782a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 d(Long l10) {
        this.f44786e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 e(Long l10) {
        this.f44783b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 f(Long l10) {
        this.f44787f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final e9 g() {
        return new e9(this, null);
    }
}
