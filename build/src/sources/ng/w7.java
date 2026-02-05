package ng;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w7 {

    /* renamed from: a  reason: collision with root package name */
    private Long f41186a;

    /* renamed from: b  reason: collision with root package name */
    private x7 f41187b;

    /* renamed from: c  reason: collision with root package name */
    private r7 f41188c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f41189d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f41190e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f41191f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f41192g;

    public final w7 b(Long l10) {
        this.f41186a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final w7 c(Integer num) {
        this.f41189d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 d(r7 r7Var) {
        this.f41188c = r7Var;
        return this;
    }

    public final w7 e(Integer num) {
        this.f41191f = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 f(x7 x7Var) {
        this.f41187b = x7Var;
        return this;
    }

    public final w7 g(Integer num) {
        this.f41190e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 h(Integer num) {
        this.f41192g = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final z7 j() {
        return new z7(this, null);
    }
}
