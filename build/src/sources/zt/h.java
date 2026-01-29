package zt;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f56123d;

    /* renamed from: e  reason: collision with root package name */
    private final long f56124e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f56125i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f56123d = str;
        this.f56124e = j10;
        this.f56125i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f56124e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f56123d;
        if (str != null) {
            return MediaType.f44069e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f56125i;
    }
}
