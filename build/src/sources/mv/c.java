package mv;

import com.squareup.moshi.j;
import com.squareup.moshi.m;
import lv.h;
import okhttp3.ResponseBody;
import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c implements h {

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f39510b = ByteString.f("EFBBBF");

    /* renamed from: a  reason: collision with root package name */
    private final com.squareup.moshi.h f39511a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(com.squareup.moshi.h hVar) {
        this.f39511a = hVar;
    }

    @Override // lv.h
    /* renamed from: b */
    public Object a(ResponseBody responseBody) {
        BufferedSource source = responseBody.source();
        try {
            ByteString byteString = f39510b;
            if (source.p0(0L, byteString)) {
                source.skip(byteString.G());
            }
            m B = m.B(source);
            Object fromJson = this.f39511a.fromJson(B);
            if (B.E() == m.c.END_DOCUMENT) {
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
