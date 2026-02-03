package au;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f6110d;

    /* renamed from: e  reason: collision with root package name */
    private final long f6111e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f6112i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f6110d = str;
        this.f6111e = j10;
        this.f6112i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f6111e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f6110d;
        if (str != null) {
            return MediaType.f44213e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f6112i;
    }
}
