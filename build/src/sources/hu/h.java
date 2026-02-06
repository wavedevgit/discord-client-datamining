package hu;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f26510d;

    /* renamed from: e  reason: collision with root package name */
    private final long f26511e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f26512i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f26510d = str;
        this.f26511e = j10;
        this.f26512i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f26511e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f26510d;
        if (str != null) {
            return MediaType.f42872e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f26512i;
    }
}
