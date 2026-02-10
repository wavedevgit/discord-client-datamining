package iu;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f29663d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29664e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f29665i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f29663d = str;
        this.f29664e = j10;
        this.f29665i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f29664e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f29663d;
        if (str != null) {
            return MediaType.f42047e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f29665i;
    }
}
