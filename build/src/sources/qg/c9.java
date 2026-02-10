package qg;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c9 {

    /* renamed from: a  reason: collision with root package name */
    private Long f44213a;

    /* renamed from: b  reason: collision with root package name */
    private Long f44214b;

    /* renamed from: c  reason: collision with root package name */
    private Long f44215c;

    /* renamed from: d  reason: collision with root package name */
    private Long f44216d;

    /* renamed from: e  reason: collision with root package name */
    private Long f44217e;

    /* renamed from: f  reason: collision with root package name */
    private Long f44218f;

    public final c9 a(Long l10) {
        this.f44215c = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 b(Long l10) {
        this.f44216d = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 c(Long l10) {
        this.f44213a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 d(Long l10) {
        this.f44217e = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 e(Long l10) {
        this.f44214b = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final c9 f(Long l10) {
        this.f44218f = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final e9 g() {
        return new e9(this, null);
    }
}
