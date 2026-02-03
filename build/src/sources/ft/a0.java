package ft;

import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 implements y {

    /* renamed from: a  reason: collision with root package name */
    private final l f24702a;

    public a0(InputStream stream) {
        Intrinsics.checkNotNullParameter(stream, "stream");
        this.f24702a = new l(stream, Charsets.UTF_8);
    }

    @Override // ft.y
    public int a(char[] buffer, int i10, int i11) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        return this.f24702a.d(buffer, i10, i11);
    }

    public final void b() {
        this.f24702a.e();
    }
}
