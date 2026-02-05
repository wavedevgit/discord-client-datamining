package zs;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends h {

    /* renamed from: b  reason: collision with root package name */
    private final at.e f56234b;

    /* renamed from: c  reason: collision with root package name */
    private final bt.q f56235c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(List formats) {
        super(formats);
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f56234b = super.a();
        this.f56235c = super.b();
    }

    @Override // zs.h, zs.o
    public at.e a() {
        return this.f56234b;
    }

    @Override // zs.h, zs.o
    public bt.q b() {
        return this.f56235c;
    }
}
