package zt;

import java.io.EOFException;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.Cookie;
import okhttp3.CookieJar;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.Response;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f56111a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f56112b;

    static {
        ByteString.a aVar = ByteString.f44363o;
        f56111a = aVar.g("\"\\");
        f56112b = aVar.g("\t ,=");
    }

    public static final List a(Headers headers, String headerName) {
        Intrinsics.checkNotNullParameter(headers, "<this>");
        Intrinsics.checkNotNullParameter(headerName, "headerName");
        ArrayList arrayList = new ArrayList();
        int size = headers.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (StringsKt.A(headerName, headers.e(i10), true)) {
                try {
                    c(new Buffer().n0(headers.j(i10)), arrayList);
                } catch (EOFException e10) {
                    du.h.f22444a.g().k("Unable to parse challenge", 5, e10);
                }
            }
        }
        return arrayList;
    }

    public static final boolean b(Response response) {
        Intrinsics.checkNotNullParameter(response, "<this>");
        if (Intrinsics.areEqual(response.Y0().j(), "HEAD")) {
            return false;
        }
        int L = response.L();
        if (((L >= 100 && L < 200) || L == 204 || L == 304) && ut.e.v(response) == -1 && !StringsKt.A("chunked", Response.D0(response, "Transfer-Encoding", null, 2, null), true)) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Code restructure failed: missing block: B:58:0x00bc, code lost:
        continue;
     */
    /* JADX WARN: Code restructure failed: missing block: B:59:0x00bc, code lost:
        continue;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static final void c(okio.Buffer r7, java.util.List r8) {
        /*
            r0 = 0
        L1:
            r1 = r0
        L2:
            if (r1 != 0) goto Lf
            g(r7)
            java.lang.String r1 = e(r7)
            if (r1 != 0) goto Lf
            goto Lb9
        Lf:
            boolean r2 = g(r7)
            java.lang.String r3 = e(r7)
            if (r3 != 0) goto L2e
            boolean r7 = r7.o1()
            if (r7 != 0) goto L21
            goto Lb9
        L21:
            tt.d r7 = new tt.d
            java.util.Map r0 = kotlin.collections.o0.i()
            r7.<init>(r1, r0)
            r8.add(r7)
            return
        L2e:
            r4 = 61
            int r5 = ut.e.L(r7, r4)
            boolean r6 = g(r7)
            if (r2 != 0) goto L69
            if (r6 != 0) goto L42
            boolean r2 = r7.o1()
            if (r2 == 0) goto L69
        L42:
            tt.d r2 = new tt.d
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            r4.append(r3)
            java.lang.String r3 = "="
            java.lang.String r3 = kotlin.text.StringsKt.F(r3, r5)
            r4.append(r3)
            java.lang.String r3 = r4.toString()
            java.util.Map r3 = java.util.Collections.singletonMap(r0, r3)
            java.lang.String r4 = "singletonMap<String, Str…ek + \"=\".repeat(eqCount))"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r4)
            r2.<init>(r1, r3)
            r8.add(r2)
            goto L1
        L69:
            java.util.LinkedHashMap r2 = new java.util.LinkedHashMap
            r2.<init>()
            int r6 = ut.e.L(r7, r4)
            int r5 = r5 + r6
        L73:
            if (r3 != 0) goto L83
            java.lang.String r3 = e(r7)
            boolean r5 = g(r7)
            if (r5 != 0) goto Lbc
            int r5 = ut.e.L(r7, r4)
        L83:
            if (r5 == 0) goto Lbc
            r6 = 1
            if (r5 <= r6) goto L89
            goto Lb9
        L89:
            boolean r6 = g(r7)
            if (r6 == 0) goto L90
            goto Lb9
        L90:
            r6 = 34
            boolean r6 = h(r7, r6)
            if (r6 == 0) goto L9d
            java.lang.String r6 = d(r7)
            goto La1
        L9d:
            java.lang.String r6 = e(r7)
        La1:
            if (r6 != 0) goto La4
            goto Lb9
        La4:
            java.lang.Object r3 = r2.put(r3, r6)
            java.lang.String r3 = (java.lang.String) r3
            if (r3 == 0) goto Lad
            goto Lb9
        Lad:
            boolean r3 = g(r7)
            if (r3 != 0) goto Lba
            boolean r3 = r7.o1()
            if (r3 != 0) goto Lba
        Lb9:
            return
        Lba:
            r3 = r0
            goto L73
        Lbc:
            tt.d r4 = new tt.d
            r4.<init>(r1, r2)
            r8.add(r4)
            r1 = r3
            goto L2
        */
        throw new UnsupportedOperationException("Method not decompiled: zt.e.c(okio.Buffer, java.util.List):void");
    }

    private static final String d(Buffer buffer) {
        if (buffer.readByte() == 34) {
            Buffer buffer2 = new Buffer();
            while (true) {
                long c02 = buffer.c0(f56111a);
                if (c02 == -1) {
                    return null;
                }
                if (buffer.E0(c02) == 34) {
                    buffer2.t0(buffer, c02);
                    buffer.readByte();
                    return buffer2.T1();
                } else if (buffer.size() == c02 + 1) {
                    return null;
                } else {
                    buffer2.t0(buffer, c02);
                    buffer.readByte();
                    buffer2.t0(buffer, 1L);
                }
            }
        } else {
            throw new IllegalArgumentException("Failed requirement.");
        }
    }

    private static final String e(Buffer buffer) {
        long c02 = buffer.c0(f56112b);
        if (c02 == -1) {
            c02 = buffer.size();
        }
        if (c02 != 0) {
            return buffer.b1(c02);
        }
        return null;
    }

    public static final void f(CookieJar cookieJar, HttpUrl url, Headers headers) {
        Intrinsics.checkNotNullParameter(cookieJar, "<this>");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(headers, "headers");
        if (cookieJar != CookieJar.f44036b) {
            List e10 = Cookie.f44012j.e(url, headers);
            if (e10.isEmpty()) {
                return;
            }
            cookieJar.saveFromResponse(url, e10);
        }
    }

    private static final boolean g(Buffer buffer) {
        boolean z10 = false;
        while (!buffer.o1()) {
            byte E0 = buffer.E0(0L);
            if (E0 == 44) {
                buffer.readByte();
                z10 = true;
            } else if (E0 != 32 && E0 != 9) {
                break;
            } else {
                buffer.readByte();
            }
        }
        return z10;
    }

    private static final boolean h(Buffer buffer, byte b10) {
        if (!buffer.o1() && buffer.E0(0L) == b10) {
            return true;
        }
        return false;
    }
}
