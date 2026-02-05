package zt;

import java.io.IOException;
import java.net.CookieHandler;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.Cookie;
import okhttp3.CookieJar;
import okhttp3.HttpUrl;
import or.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements CookieJar {

    /* renamed from: c  reason: collision with root package name */
    private final CookieHandler f56290c;

    public i(CookieHandler cookieHandler) {
        Intrinsics.checkNotNullParameter(cookieHandler, "cookieHandler");
        this.f56290c = cookieHandler;
    }

    private final List a(HttpUrl httpUrl, String str) {
        String str2;
        ArrayList arrayList = new ArrayList();
        int length = str.length();
        int i10 = 0;
        while (i10 < length) {
            int q10 = au.e.q(str, ";,", i10, length);
            int p10 = au.e.p(str, '=', i10, q10);
            String Z = au.e.Z(str, i10, p10);
            if (!StringsKt.P(Z, "$", false, 2, null)) {
                if (p10 < q10) {
                    str2 = au.e.Z(str, p10 + 1, q10);
                } else {
                    str2 = "";
                }
                if (StringsKt.P(str2, "\"", false, 2, null) && StringsKt.z(str2, "\"", false, 2, null)) {
                    str2 = str2.substring(1, str2.length() - 1);
                    Intrinsics.checkNotNullExpressionValue(str2, "(this as java.lang.Strin…ing(startIndex, endIndex)");
                }
                arrayList.add(new Cookie.a().d(Z).e(str2).b(httpUrl.i()).a());
            }
            i10 = q10 + 1;
        }
        return arrayList;
    }

    @Override // okhttp3.CookieJar
    public List loadForRequest(HttpUrl url) {
        Intrinsics.checkNotNullParameter(url, "url");
        try {
            Map<String, List<String>> cookieHeaders = this.f56290c.get(url.t(), o0.i());
            Intrinsics.checkNotNullExpressionValue(cookieHeaders, "cookieHeaders");
            ArrayList arrayList = null;
            for (Map.Entry<String, List<String>> entry : cookieHeaders.entrySet()) {
                String key = entry.getKey();
                List<String> value = entry.getValue();
                if (StringsKt.A("Cookie", key, true) || StringsKt.A("Cookie2", key, true)) {
                    Intrinsics.checkNotNullExpressionValue(value, "value");
                    if (!value.isEmpty()) {
                        for (String header : value) {
                            if (arrayList == null) {
                                arrayList = new ArrayList();
                            }
                            Intrinsics.checkNotNullExpressionValue(header, "header");
                            arrayList.addAll(a(url, header));
                        }
                    }
                }
            }
            if (arrayList != null) {
                List unmodifiableList = Collections.unmodifiableList(arrayList);
                Intrinsics.checkNotNullExpressionValue(unmodifiableList, "Collections.unmodifiableList(cookies)");
                return unmodifiableList;
            }
            return CollectionsKt.l();
        } catch (IOException e10) {
            ju.h g10 = ju.h.f31441a.g();
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Loading cookies failed for ");
            HttpUrl r10 = url.r("/...");
            Intrinsics.checkNotNull(r10);
            sb2.append(r10);
            g10.k(sb2.toString(), 5, e10);
            return CollectionsKt.l();
        }
    }

    @Override // okhttp3.CookieJar
    public void saveFromResponse(HttpUrl url, List cookies) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(cookies, "cookies");
        ArrayList arrayList = new ArrayList();
        Iterator it = cookies.iterator();
        while (it.hasNext()) {
            arrayList.add(au.b.a((Cookie) it.next(), true));
        }
        try {
            this.f56290c.put(url.t(), o0.f(v.a("Set-Cookie", arrayList)));
        } catch (IOException e10) {
            ju.h g10 = ju.h.f31441a.g();
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Saving cookies failed for ");
            HttpUrl r10 = url.r("/...");
            Intrinsics.checkNotNull(r10);
            sb2.append(r10);
            g10.k(sb2.toString(), 5, e10);
        }
    }
}
