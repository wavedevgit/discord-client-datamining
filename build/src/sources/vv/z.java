package vv;

import java.util.Objects;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import vv.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Response f53248a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53249b;

    /* renamed from: c  reason: collision with root package name */
    private final ResponseBody f53250c;

    private z(Response response, Object obj, ResponseBody responseBody) {
        this.f53248a = response;
        this.f53249b = obj;
        this.f53250c = responseBody;
    }

    public static z c(int i10, ResponseBody responseBody) {
        Objects.requireNonNull(responseBody, "body == null");
        if (i10 >= 400) {
            return d(responseBody, new Response.a().b(new s.c(responseBody.contentType(), responseBody.contentLength())).g(i10).m("Response.error()").p(bu.j.HTTP_1_1).r(new Request.Builder().l("http://localhost/").b()).c());
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
        return j(obj, new Response.a().g(androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION).m("OK").p(bu.j.HTTP_1_1).r(new Request.Builder().l("http://localhost/").b()).c());
    }

    public static z j(Object obj, Response response) {
        Objects.requireNonNull(response, "rawResponse == null");
        if (response.isSuccessful()) {
            return new z(response, obj, null);
        }
        throw new IllegalArgumentException("rawResponse must be successful response");
    }

    public Object a() {
        return this.f53249b;
    }

    public int b() {
        return this.f53248a.z();
    }

    public ResponseBody e() {
        return this.f53250c;
    }

    public Headers f() {
        return this.f53248a.E0();
    }

    public boolean g() {
        return this.f53248a.isSuccessful();
    }

    public String h() {
        return this.f53248a.I0();
    }

    public String toString() {
        return this.f53248a.toString();
    }
}
