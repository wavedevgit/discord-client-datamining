package ws;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends h {

    /* renamed from: b  reason: collision with root package name */
    private final xs.e f52705b;

    /* renamed from: c  reason: collision with root package name */
    private final ys.q f52706c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(List formats) {
        super(formats);
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f52705b = super.a();
        this.f52706c = super.b();
    }

    @Override // ws.h, ws.o
    public xs.e a() {
        return this.f52705b;
    }

    @Override // ws.h, ws.o
    public ys.q b() {
        return this.f52706c;
    }
}
