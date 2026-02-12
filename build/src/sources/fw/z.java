package fw;

import fw.s;
import java.util.Objects;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Response f24601a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f24602b;

    /* renamed from: c  reason: collision with root package name */
    private final ResponseBody f24603c;

    private z(Response response, Object obj, ResponseBody responseBody) {
        this.f24601a = response;
        this.f24602b = obj;
        this.f24603c = responseBody;
    }

    public static z c(int i10, ResponseBody responseBody) {
        Objects.requireNonNull(responseBody, "body == null");
        if (i10 >= 400) {
            return d(responseBody, new Response.a().b(new s.c(responseBody.contentType(), responseBody.contentLength())).g(i10).m("Response.error()").p(lu.j.HTTP_1_1).r(new Request.Builder().l("http://localhost/").b()).c());
        }
        throw new IllegalArgumentException("code < 400: " + i10);
    }

    public static z d(ResponseBody responseBody, Response response) {
        Objects.requireNonNull(responseBody, "body == null");
        Objects.requireNonNull(response, "rawResponse == null");
        if (!response.isSuccessful()) {
            return new z(response, null, responseBody);
        }
        throw new IllegalArgumentException("rawResponse should not be successful response");
    }

    public static z i(Object obj) {
        return j(obj, new Response.a().g(androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION).m("OK").p(lu.j.HTTP_1_1).r(new Request.Builder().l("http://localhost/").b()).c());
    }

    public static z j(Object obj, Response response) {
        Objects.requireNonNull(response, "rawResponse == null");
        if (response.isSuccessful()) {
            return new z(response, obj, null);
        }
        throw new IllegalArgumentException("rawResponse must be successful response");
    }

    public Object a() {
        return this.f24602b;
    }

    public int b() {
        return this.f24601a.z();
    }

    public ResponseBody e() {
        return this.f24603c;
    }

    public Headers f() {
        return this.f24601a.z0();
    }

    public boolean g() {
        return this.f24601a.isSuccessful();
    }

    public String h() {
        return this.f24601a.E0();
    }

    public String toString() {
        return this.f24601a.toString();
    }
}
