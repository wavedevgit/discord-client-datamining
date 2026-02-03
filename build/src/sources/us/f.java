package us;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends h {

    /* renamed from: b  reason: collision with root package name */
    private final vs.e f50646b;

    /* renamed from: c  reason: collision with root package name */
    private final ws.q f50647c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(List formats) {
        super(formats);
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f50646b = super.a();
        this.f50647c = super.b();
    }

    @Override // us.h, us.o
    public vs.e a() {
        return this.f50646b;
    }

    @Override // us.h, us.o
    public ws.q b() {
        return this.f50647c;
    }
}
