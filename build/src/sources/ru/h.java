package ru;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f48338d;

    /* renamed from: e  reason: collision with root package name */
    private final long f48339e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f48340i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f48338d = str;
        this.f48339e = j10;
        this.f48340i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f48339e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f48338d;
        if (str != null) {
            return MediaType.f40866e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f48340i;
    }
}
