package pv;

import com.squareup.moshi.t;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.Buffer;
import ov.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b implements h {

    /* renamed from: b  reason: collision with root package name */
    private static final MediaType f46705b = MediaType.e("application/json; charset=UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final com.squareup.moshi.h f46706a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(com.squareup.moshi.h hVar) {
        this.f46706a = hVar;
    }

    @Override // ov.h
    /* renamed from: b */
    public RequestBody a(Object obj) {
        Buffer buffer = new Buffer();
        this.f46706a.toJson(t.D0(buffer), obj);
        return RequestBody.create(f46705b, buffer.L1());
    }
}
