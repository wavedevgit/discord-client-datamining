package lt;

import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements y {

    /* renamed from: a  reason: collision with root package name */
    private final l f36636a;

    public a0(InputStream stream) {
        Intrinsics.checkNotNullParameter(stream, "stream");
        this.f36636a = new l(stream, Charsets.UTF_8);
    }

    @Override // lt.y
    public int a(char[] buffer, int i10, int i11) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        return this.f36636a.d(buffer, i10, i11);
    }

    public final void b() {
        this.f36636a.e();
    }
}
