package lv;

import java.util.Objects;
import lv.s;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Response f37547a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f37548b;

    /* renamed from: c  reason: collision with root package name */
    private final ResponseBody f37549c;

    private z(Response response, Object obj, ResponseBody responseBody) {
        this.f37547a = response;
        this.f37548b = obj;
        this.f37549c = responseBody;
    }

    public static z c(int i10, ResponseBody responseBody) {
        Objects.requireNonNull(responseBody, "body == null");
        if (i10 >= 400) {
            return d(responseBody, new Response.a().b(new s.c(responseBody.contentType(), responseBody.contentLength())).g(i10).m("Response.error()").p(wt.j.HTTP_1_1).r(new Request.Builder().l("http://localhost/").b()).c());
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
        return j(obj, new Response.a().g(androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION).m("OK").p(wt.j.HTTP_1_1).r(new Request.Builder().l("http://localhost/").b()).c());
    }

    public static z j(Object obj, Response response) {
        Objects.requireNonNull(response, "rawResponse == null");
        if (response.isSuccessful()) {
            return new z(response, obj, null);
        }
        throw new IllegalArgumentException("rawResponse must be successful response");
    }

    public Object a() {
        return this.f37548b;
    }

    public int b() {
        return this.f37547a.L();
    }

    public ResponseBody e() {
        return this.f37549c;
    }

    public Headers f() {
        return this.f37547a.E0();
    }

    public boolean g() {
        return this.f37547a.isSuccessful();
    }

    public String h() {
        return this.f37547a.I0();
    }

    public String toString() {
        return this.f37547a.toString();
    }
}
