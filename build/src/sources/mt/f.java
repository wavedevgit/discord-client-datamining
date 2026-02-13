package mt;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends h {

    /* renamed from: b  reason: collision with root package name */
    private final nt.e f37185b;

    /* renamed from: c  reason: collision with root package name */
    private final ot.q f37186c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(List formats) {
        super(formats);
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f37185b = super.a();
        this.f37186c = super.b();
    }

    @Override // mt.h, mt.o
    public nt.e a() {
        return this.f37185b;
    }

    @Override // mt.h, mt.o
    public ot.q b() {
        return this.f37186c;
    }
}
