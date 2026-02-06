package bt;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends h {

    /* renamed from: b  reason: collision with root package name */
    private final ct.e f7063b;

    /* renamed from: c  reason: collision with root package name */
    private final dt.q f7064c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(List formats) {
        super(formats);
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f7063b = super.a();
        this.f7064c = super.b();
    }

    @Override // bt.h, bt.o
    public ct.e a() {
        return this.f7063b;
    }

    @Override // bt.h, bt.o
    public dt.q b() {
        return this.f7064c;
    }
}
