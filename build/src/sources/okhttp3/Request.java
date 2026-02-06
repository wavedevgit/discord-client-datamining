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
    private final HttpUrl f42940a;

    /* renamed from: b  reason: collision with root package name */
    private final String f42941b;

    /* renamed from: c  reason: collision with root package name */
    private final Headers f42942c;

    /* renamed from: d  reason: collision with root package name */
    private final RequestBody f42943d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f42944e;

    /* renamed from: f  reason: collision with root package name */
    private CacheControl f42945f;

    public Request(HttpUrl url, String method, Headers headers, RequestBody requestBody, Map tags) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(method, "method");
        Intrinsics.checkNotNullParameter(headers, "headers");
        Intrinsics.checkNotNullParameter(tags, "tags");
        this.f42940a = url;
        this.f42941b = method;
        this.f42942c = headers;
        this.f42943d = requestBody;
        this.f42944e = tags;
    }

    public final String a() {
        return this.f42941b;
    }

    public final HttpUrl b() {
        return this.f42940a;
    }

    public final RequestBody c() {
        return this.f42943d;
    }

    public final CacheControl d() {
        CacheControl cacheControl = this.f42945f;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f42791n.b(this.f42942c);
            this.f42945f = b10;
            return b10;
        }
        return cacheControl;
    }

    public final Map e() {
        return this.f42944e;
    }

    public final String f(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f42942c.c(name);
    }

    public final List g(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f42942c.l(name);
    }

    public final Headers h() {
        return this.f42942c;
    }

    public final boolean i() {
        return this.f42940a.j();
    }

    public final String j() {
        return this.f42941b;
    }

    public final Builder k() {
        return new Builder(this);
    }

    public final Object l() {
        return m(Object.class);
    }

    public final Object m(Class type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return type.cast(this.f42944e.get(type));
    }

    public final HttpUrl n() {
        return this.f42940a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Request{method=");
        sb2.append(this.f42941b);
        sb2.append(", url=");
        sb2.append(this.f42940a);
        if (this.f42942c.size() != 0) {
            sb2.append(", headers=[");
            int i10 = 0;
            for (Object obj : this.f42942c) {
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
        if (!this.f42944e.isEmpty()) {
            sb2.append(", tags=");
            sb2.append(this.f42944e);
        }
        sb2.append('}');
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        return sb3;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class Builder {

        /* renamed from: a  reason: collision with root package name */
        private HttpUrl f42946a;

        /* renamed from: b  reason: collision with root package name */
        private String f42947b;

        /* renamed from: c  reason: collision with root package name */
        private Headers.a f42948c;

        /* renamed from: d  reason: collision with root package name */
        private RequestBody f42949d;

        /* renamed from: e  reason: collision with root package name */
        private Map f42950e;

        public Builder() {
            this.f42950e = new LinkedHashMap();
            this.f42947b = "GET";
            this.f42948c = new Headers.a();
        }

        public Builder a(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f42948c.a(name, value);
            return this;
        }

        public Request b() {
            HttpUrl httpUrl = this.f42946a;
            if (httpUrl != null) {
                return new Request(httpUrl, this.f42947b, this.f42948c.f(), this.f42949d, cu.e.W(this.f42950e));
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
            this.f42948c.j(name, value);
            return this;
        }

        public Builder f(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f42948c = headers.g();
            return this;
        }

        public Builder g(String method, RequestBody requestBody) {
            Intrinsics.checkNotNullParameter(method, "method");
            if (method.length() > 0) {
                if (requestBody == null) {
                    if (hu.f.e(method)) {
                        throw new IllegalArgumentException(("method " + method + " must have a request body.").toString());
                    }
                } else if (!hu.f.b(method)) {
                    throw new IllegalArgumentException(("method " + method + " must not have a request body.").toString());
                }
                this.f42947b = method;
                this.f42949d = requestBody;
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
            this.f42948c.i(name);
            return this;
        }

        public Builder j(Class type, Object obj) {
            Intrinsics.checkNotNullParameter(type, "type");
            if (obj == null) {
                this.f42950e.remove(type);
                return this;
            }
            if (this.f42950e.isEmpty()) {
                this.f42950e = new LinkedHashMap();
            }
            Map map = this.f42950e;
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
            return m(HttpUrl.f42851k.d(url));
        }

        public Builder m(HttpUrl url) {
            Intrinsics.checkNotNullParameter(url, "url");
            this.f42946a = url;
            return this;
        }

        public Builder(Request request) {
            Map y10;
            Intrinsics.checkNotNullParameter(request, "request");
            this.f42950e = new LinkedHashMap();
            this.f42946a = request.n();
            this.f42947b = request.j();
            this.f42949d = request.c();
            if (request.e().isEmpty()) {
                y10 = new LinkedHashMap();
            } else {
                y10 = o0.y(request.e());
            }
            this.f42950e = y10;
            this.f42948c = request.h().g();
        }
    }
}
