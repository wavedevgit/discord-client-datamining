package pv;

import com.squareup.moshi.j;
import com.squareup.moshi.m;
import okhttp3.ResponseBody;
import okio.BufferedSource;
import okio.ByteString;
import ov.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c implements h {

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f46707b = ByteString.f("EFBBBF");

    /* renamed from: a  reason: collision with root package name */
    private final com.squareup.moshi.h f46708a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(com.squareup.moshi.h hVar) {
        this.f46708a = hVar;
    }

    @Override // ov.h
    /* renamed from: b */
    public Object a(ResponseBody responseBody) {
        BufferedSource source = responseBody.source();
        try {
            ByteString byteString = f46707b;
            if (source.q0(0L, byteString)) {
                source.skip(byteString.G());
            }
            m y10 = m.y(source);
            Object fromJson = this.f46708a.fromJson(y10);
            if (y10.E() == m.c.END_DOCUMENT) {
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
