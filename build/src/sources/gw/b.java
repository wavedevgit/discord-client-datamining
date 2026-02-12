package gw;

import com.squareup.moshi.t;
import fw.h;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.Buffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b implements h {

    /* renamed from: b  reason: collision with root package name */
    private static final MediaType f26048b = MediaType.e("application/json; charset=UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final com.squareup.moshi.h f26049a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(com.squareup.moshi.h hVar) {
        this.f26049a = hVar;
    }

    @Override // fw.h
    /* renamed from: b */
    public RequestBody a(Object obj) {
        Buffer buffer = new Buffer();
        this.f26049a.toJson(t.Z(buffer), obj);
        return RequestBody.create(f26048b, buffer.M1());
    }
}
