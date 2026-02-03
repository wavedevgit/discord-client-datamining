package au;

import java.util.List;
import ju.m;
import ju.x;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.Cookie;
import okhttp3.CookieJar;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Interceptor {

    /* renamed from: a  reason: collision with root package name */
    private final CookieJar f6093a;

    public a(CookieJar cookieJar) {
        Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
        this.f6093a = cookieJar;
    }

    private final String a(List list) {
        StringBuilder sb2 = new StringBuilder();
        int i10 = 0;
        for (Object obj : list) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            Cookie cookie = (Cookie) obj;
            if (i10 > 0) {
                sb2.append("; ");
            }
            sb2.append(cookie.g());
            sb2.append('=');
            sb2.append(cookie.i());
            i10 = i11;
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        return sb3;
    }

    @Override // okhttp3.Interceptor
    public Response intercept(Interceptor.Chain chain) {
        ResponseBody x10;
        Intrinsics.checkNotNullParameter(chain, "chain");
        Request h10 = chain.h();
        Request.Builder k10 = h10.k();
        RequestBody c10 = h10.c();
        if (c10 != null) {
            MediaType contentType = c10.contentType();
            if (contentType != null) {
                k10.e("Content-Type", contentType.toString());
            }
            long contentLength = c10.contentLength();
            if (contentLength != -1) {
                k10.e("Content-Length", String.valueOf(contentLength));
                k10.i("Transfer-Encoding");
            } else {
                k10.e("Transfer-Encoding", "chunked");
                k10.i("Content-Length");
            }
        }
        boolean z10 = false;
        if (h10.f("Host") == null) {
            k10.e("Host", vt.e.U(h10.n(), false, 1, null));
        }
        if (h10.f("Connection") == null) {
            k10.e("Connection", "Keep-Alive");
        }
        if (h10.f("Accept-Encoding") == null && h10.f("Range") == null) {
            k10.e("Accept-Encoding", "gzip");
            z10 = true;
        }
        List loadForRequest = this.f6093a.loadForRequest(h10.n());
        if (!loadForRequest.isEmpty()) {
            k10.e("Cookie", a(loadForRequest));
        }
        if (h10.f("User-Agent") == null) {
            k10.e("User-Agent", "okhttp/4.12.0");
        }
        Response a10 = chain.a(k10.b());
        e.f(this.f6093a, h10.n(), a10.F0());
        Response.a r10 = a10.L0().r(h10);
        if (z10 && StringsKt.A("gzip", Response.E0(a10, "Content-Encoding", null, 2, null), true) && e.b(a10) && (x10 = a10.x()) != null) {
            m mVar = new m(x10.source());
            r10.k(a10.F0().g().i("Content-Encoding").i("Content-Length").f());
            r10.b(new h(Response.E0(a10, "Content-Type", null, 2, null), -1L, x.d(mVar)));
        }
        return r10.c();
    }
}
