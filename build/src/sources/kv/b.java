package kv;

import com.squareup.moshi.t;
import jv.h;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.Buffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b implements h {

    /* renamed from: b  reason: collision with root package name */
    private static final MediaType f36781b = MediaType.e("application/json; charset=UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final com.squareup.moshi.h f36782a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(com.squareup.moshi.h hVar) {
        this.f36782a = hVar;
    }

    @Override // jv.h
    /* renamed from: b */
    public RequestBody a(Object obj) {
        Buffer buffer = new Buffer();
        this.f36782a.toJson(t.E0(buffer), obj);
        return RequestBody.create(f36781b, buffer.L1());
    }
}
