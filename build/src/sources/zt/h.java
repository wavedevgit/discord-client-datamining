package zt;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f56139d;

    /* renamed from: e  reason: collision with root package name */
    private final long f56140e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f56141i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f56139d = str;
        this.f56140e = j10;
        this.f56141i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f56140e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f56139d;
        if (str != null) {
            return MediaType.f44085e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f56141i;
    }
}
