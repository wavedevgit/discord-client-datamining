package ru;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f47769d;

    /* renamed from: e  reason: collision with root package name */
    private final long f47770e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f47771i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f47769d = str;
        this.f47770e = j10;
        this.f47771i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f47770e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f47769d;
        if (str != null) {
            return MediaType.f40297e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f47771i;
    }
}
