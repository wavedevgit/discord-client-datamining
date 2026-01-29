package ts;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends h {

    /* renamed from: b  reason: collision with root package name */
    private final us.e f49872b;

    /* renamed from: c  reason: collision with root package name */
    private final vs.q f49873c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(List formats) {
        super(formats);
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f49872b = super.a();
        this.f49873c = super.b();
    }

    @Override // ts.h, ts.o
    public us.e a() {
        return this.f49872b;
    }

    @Override // ts.h, ts.o
    public vs.q b() {
        return this.f49873c;
    }
}
