package ru;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.MediaType;
import okhttp3.ResponseBody;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ResponseBody {

    /* renamed from: d  reason: collision with root package name */
    private final String f47770d;

    /* renamed from: e  reason: collision with root package name */
    private final long f47771e;

    /* renamed from: i  reason: collision with root package name */
    private final BufferedSource f47772i;

    public h(String str, long j10, BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f47770d = str;
        this.f47771e = j10;
        this.f47772i = source;
    }

    @Override // okhttp3.ResponseBody
    public long contentLength() {
        return this.f47771e;
    }

    @Override // okhttp3.ResponseBody
    public MediaType contentType() {
        String str = this.f47770d;
        if (str != null) {
            return MediaType.f40298e.c(str);
        }
        return null;
    }

    @Override // okhttp3.ResponseBody
    public BufferedSource source() {
        return this.f47772i;
    }
}
