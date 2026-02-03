package dt;

import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements y {

    /* renamed from: a  reason: collision with root package name */
    private final l f22384a;

    public a0(InputStream stream) {
        Intrinsics.checkNotNullParameter(stream, "stream");
        this.f22384a = new l(stream, Charsets.UTF_8);
    }

    @Override // dt.y
    public int a(char[] buffer, int i10, int i11) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        return this.f22384a.d(buffer, i10, i11);
    }

    public final void b() {
        this.f22384a.e();
    }
}
