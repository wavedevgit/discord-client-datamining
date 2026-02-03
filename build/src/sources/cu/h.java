package cu;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f19874d;

    /* renamed from: e  reason: collision with root package name */
    private final long f19875e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f19876i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f19874d = str;
        this.f19875e = j10;
        this.f19876i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f19875e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f19874d;
        if (str != null) {
            return MediaType.f44013e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f19876i;
    }
}
