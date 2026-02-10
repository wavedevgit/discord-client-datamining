package ct;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends h {

    /* renamed from: b  reason: collision with root package name */
    private final dt.e f20218b;

    /* renamed from: c  reason: collision with root package name */
    private final et.q f20219c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(List formats) {
        super(formats);
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f20218b = super.a();
        this.f20219c = super.b();
    }

    @Override // ct.h, ct.o
    public dt.e a() {
        return this.f20218b;
    }

    @Override // ct.h, ct.o
    public et.q b() {
        return this.f20219c;
    }
}
