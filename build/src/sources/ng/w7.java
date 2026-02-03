package ng;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w7 {

    /* renamed from: a  reason: collision with root package name */
    private Long f41687a;

    /* renamed from: b  reason: collision with root package name */
    private x7 f41688b;

    /* renamed from: c  reason: collision with root package name */
    private r7 f41689c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f41690d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f41691e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f41692f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f41693g;

    public final w7 b(Long l10) {
        this.f41687a = Long.valueOf(l10.longValue() & LongCompanionObject.MAX_VALUE);
        return this;
    }

    public final w7 c(Integer num) {
        this.f41690d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 d(r7 r7Var) {
        this.f41689c = r7Var;
        return this;
    }

    public final w7 e(Integer num) {
        this.f41692f = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 f(x7 x7Var) {
        this.f41688b = x7Var;
        return this;
    }

    public final w7 g(Integer num) {
        this.f41691e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final w7 h(Integer num) {
        this.f41693g = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final z7 j() {
        return new z7(this, null);
    }
}
