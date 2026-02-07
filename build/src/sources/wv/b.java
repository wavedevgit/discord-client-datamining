package wv;

import com.squareup.moshi.t;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.Buffer;
import vv.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b implements h {

    /* renamed from: b  reason: collision with root package name */
    private static final MediaType f54182b = MediaType.e("application/json; charset=UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final com.squareup.moshi.h f54183a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(com.squareup.moshi.h hVar) {
        this.f54183a = hVar;
    }

    @Override // vv.h
    /* renamed from: b */
    public RequestBody a(Object obj) {
        Buffer buffer = new Buffer();
        this.f54183a.toJson(t.Y(buffer), obj);
        return RequestBody.create(f54182b, buffer.K1());
    }
}
