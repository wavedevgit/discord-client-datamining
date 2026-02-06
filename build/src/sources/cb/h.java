package cb;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.IOException;
import java.io.InputStream;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    public static final h f7289a = new h();

    private h() {
    }

    public static final int a(InputStream stream, int i10, boolean z10) {
        int i11;
        Intrinsics.checkNotNullParameter(stream, "stream");
        int i12 = 0;
        for (int i13 = 0; i13 < i10; i13++) {
            int read = stream.read();
            if (read != -1) {
                if (z10) {
                    i11 = (read & SetSpanOperation.SPAN_MAX_PRIORITY) << (i13 * 8);
                } else {
                    i12 <<= 8;
                    i11 = read & SetSpanOperation.SPAN_MAX_PRIORITY;
                }
                i12 |= i11;
            } else {
                throw new IOException("no more bytes");
            }
        }
        return i12;
    }
}
