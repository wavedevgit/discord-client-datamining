package wv;

import com.squareup.moshi.j;
import com.squareup.moshi.m;
import okhttp3.ResponseBody;
import okio.BufferedSource;
import okio.ByteString;
import vv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c implements h {

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f54136b = ByteString.f("EFBBBF");

    /* renamed from: a  reason: collision with root package name */
    private final com.squareup.moshi.h f54137a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(com.squareup.moshi.h hVar) {
        this.f54137a = hVar;
    }

    @Override // vv.h
    /* renamed from: b */
    public Object a(ResponseBody responseBody) {
        BufferedSource source = responseBody.source();
        try {
            ByteString byteString = f54136b;
            if (source.s0(0L, byteString)) {
                source.skip(byteString.G());
            }
            m p10 = m.p(source);
            Object fromJson = this.f54137a.fromJson(p10);
            if (p10.s() == m.c.END_DOCUMENT) {
                responseBody.close();
                return fromJson;
            }
            throw new j("JSON document was not fully consumed.");
        } catch (Throwable th2) {
            responseBody.close();
            throw th2;
        }
    }
}
