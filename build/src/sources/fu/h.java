package fu;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f23515d;

    /* renamed from: e  reason: collision with root package name */
    private final long f23516e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f23517i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f23515d = str;
        this.f23516e = j10;
        this.f23517i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f23516e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f23515d;
        if (str != null) {
            return MediaType.f43766e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f23517i;
    }
}
