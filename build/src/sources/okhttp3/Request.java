package okhttp3;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.Headers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Request {

    /* renamed from: a  reason: collision with root package name */
    private final HttpUrl f44137a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44138b;

    /* renamed from: c  reason: collision with root package name */
    private final Headers f44139c;

    /* renamed from: d  reason: collision with root package name */
    private final RequestBody f44140d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f44141e;

    /* renamed from: f  reason: collision with root package name */
    private CacheControl f44142f;

    public Request(HttpUrl url, String method, Headers headers, RequestBody requestBody, Map tags) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(method, "method");
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(tags, "tags");
        this.f44137a = url;
        this.f44138b = method;
        this.f44139c = headers;
        this.f44140d = requestBody;
        this.f44141e = tags;
    }

    public final String a() {
        return this.f44138b;
    }

    public final HttpUrl b() {
        return this.f44137a;
    }

    public final RequestBody c() {
        return this.f44140d;
    }

    public final CacheControl d() {
        CacheControl cacheControl = this.f44142f;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f43988n.b(this.f44139c);
            this.f44142f = b10;
            return b10;
        }
        return cacheControl;
    }

    public final Map e() {
        return this.f44141e;
    }

    public final String f(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f44139c.c(name);
    }

    public final List g(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f44139c.k(name);
    }

    public final Headers h() {
        return this.f44139c;
    }

    public final boolean i() {
        return this.f44137a.j();
    }

    public final String j() {
        return this.f44138b;
    }

    public final Builder k() {
        return new Builder(this);
    }

    public final Object l() {
        return m(Object.class);
    }

    public final Object m(Class type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return type.cast(this.f44141e.get(type));
    }

    public final HttpUrl n() {
        return this.f44137a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request{method=");
        sb2.append(this.f44138b);
        sb2.append(", url=");
        sb2.append(this.f44137a);
        if (this.f44139c.size() != 0) {
            sb2.append(", headers=[");
            int i10 = 0;
            for (Object obj : this.f44139c) {
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                Pair pair = (Pair) obj;
                String str = (String) pair.a();
                String str2 = (String) pair.b();
                if (i10 > 0) {
                    sb2.append(", ");
                }
                sb2.append(str);
                sb2.append(':');
                sb2.append(str2);
                i10 = i11;
            }
            sb2.append(']');
        }
        if (!this.f44141e.isEmpty()) {
            sb2.append(", tags=");
            sb2.append(this.f44141e);
        }
        sb2.append('}');
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        return sb3;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class Builder {

        /* renamed from: a  reason: collision with root package name */
        private HttpUrl f44143a;

        /* renamed from: b  reason: collision with root package name */
        private String f44144b;

        /* renamed from: c  reason: collision with root package name */
        private Headers.a f44145c;

        /* renamed from: d  reason: collision with root package name */
        private RequestBody f44146d;

        /* renamed from: e  reason: collision with root package name */
        private Map f44147e;

        public Builder() {
            this.f44147e = new LinkedHashMap();
            this.f44144b = "GET";
            this.f44145c = new Headers.a();
        }

        public Builder a(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f44145c.a(name, value);
            return this;
        }

        public Request b() {
            HttpUrl httpUrl = this.f44143a;
            if (httpUrl != null) {
                return new Request(httpUrl, this.f44144b, this.f44145c.f(), this.f44146d, ut.e.W(this.f44147e));
            }
            throw new IllegalStateException("url == null");
        }

        public Builder c(CacheControl cacheControl) {
            Intrinsics.checkNotNullParameter(cacheControl, "cacheControl");
            String cacheControl2 = cacheControl.toString();
            if (cacheControl2.length() == 0) {
                return i("Cache-Control");
            }
            return e("Cache-Control", cacheControl2);
        }

        public Builder d() {
            return g("GET", null);
        }

        public Builder e(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f44145c.j(name, value);
            return this;
        }

        public Builder f(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f44145c = headers.g();
            return this;
        }

        public Builder g(String method, RequestBody requestBody) {
            Intrinsics.checkNotNullParameter(method, "method");
            if (method.length() > 0) {
                if (requestBody == null) {
                    if (zt.f.e(method)) {
                        throw new IllegalArgumentException(("method " + method + " must have a request body.").toString());
                    }
                } else if (!zt.f.b(method)) {
                    throw new IllegalArgumentException(("method " + method + " must not have a request body.").toString());
                }
                this.f44144b = method;
                this.f44146d = requestBody;
                return this;
            }
            throw new IllegalArgumentException("method.isEmpty() == true");
        }

        public Builder h(RequestBody body) {
            Intrinsics.checkNotNullParameter(body, "body");
            return g("POST", body);
        }

        public Builder i(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            this.f44145c.i(name);
            return this;
        }

        public Builder j(Class type, Object obj) {
            Intrinsics.checkNotNullParameter(type, "type");
            if (obj == null) {
                this.f44147e.remove(type);
                return this;
            }
            if (this.f44147e.isEmpty()) {
                this.f44147e = new LinkedHashMap();
            }
            Map map = this.f44147e;
            Object cast = type.cast(obj);
            Intrinsics.checkNotNull(cast);
            map.put(type, cast);
            return this;
        }

        public Builder k(Object obj) {
            return j(Object.class, obj);
        }

        public Builder l(String url) {
            Intrinsics.checkNotNullParameter(url, "url");
            if (StringsKt.N(url, "ws:", true)) {
                StringBuilder sb2 = new StringBuilder();
                sb2.append("http:");
                String substring = url.substring(3);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String).substring(startIndex)");
                sb2.append(substring);
                url = sb2.toString();
            } else if (StringsKt.N(url, "wss:", true)) {
                StringBuilder sb3 = new StringBuilder();
                sb3.append("https:");
                String substring2 = url.substring(4);
                Intrinsics.checkNotNullExpressionValue(substring2, "this as java.lang.String).substring(startIndex)");
                sb3.append(substring2);
                url = sb3.toString();
            }
            return m(HttpUrl.f44048k.d(url));
        }

        public Builder m(HttpUrl url) {
            Intrinsics.checkNotNullParameter(url, "url");
            this.f44143a = url;
            return this;
        }

        public Builder(Request request) {
            Map y10;
            Intrinsics.checkNotNullParameter(request, "request");
            this.f44147e = new LinkedHashMap();
            this.f44143a = request.n();
            this.f44144b = request.j();
            this.f44146d = request.c();
            if (request.e().isEmpty()) {
                y10 = new LinkedHashMap();
            } else {
                y10 = o0.y(request.e());
            }
            this.f44147e = y10;
            this.f44145c = request.h().g();
        }
    }
}
