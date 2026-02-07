package hu;

import com.facebook.react.views.image.ReactImageView;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.ProtocolException;
import java.net.Proxy;
import java.net.SocketTimeoutException;
import java.security.cert.CertificateException;
import javax.net.ssl.SSLHandshakeException;
import javax.net.ssl.SSLPeerUnverifiedException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Regex;
import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements Interceptor {

    /* renamed from: b  reason: collision with root package name */
    public static final a f26562b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final OkHttpClient f26563a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        this.f26563a = client;
    }

    private final Request a(Response response, String str) {
        String Y;
        HttpUrl r10;
        boolean z10;
        RequestBody requestBody = null;
        if (!this.f26563a.w() || (Y = Response.Y(response, "Location", null, 2, null)) == null || (r10 = response.Y0().n().r(Y)) == null) {
            return null;
        }
        if (!Intrinsics.areEqual(r10.s(), response.Y0().n().s()) && !this.f26563a.x()) {
            return null;
        }
        Request.Builder k10 = response.Y0().k();
        if (f.b(str)) {
            int z11 = response.z();
            f fVar = f.f26548a;
            if (!fVar.d(str) && z11 != 308 && z11 != 307) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (fVar.c(str) && z11 != 308 && z11 != 307) {
                k10.g("GET", null);
            } else {
                if (z10) {
                    requestBody = response.Y0().c();
                }
                k10.g(str, requestBody);
            }
            if (!z10) {
                k10.i("Transfer-Encoding");
                k10.i("Content-Length");
                k10.i("Content-Type");
            }
        }
        if (!cu.e.j(response.Y0().n(), r10)) {
            k10.i("Authorization");
        }
        return k10.m(r10).b();
    }

    private final Request b(Response response, gu.c cVar) {
        bu.k kVar;
        gu.f h10;
        if (cVar != null && (h10 = cVar.h()) != null) {
            kVar = h10.A();
        } else {
            kVar = null;
        }
        int z10 = response.z();
        String j10 = response.Y0().j();
        if (z10 != 307 && z10 != 308) {
            if (z10 != 401) {
                if (z10 != 421) {
                    if (z10 != 503) {
                        if (z10 != 407) {
                            if (z10 != 408) {
                                switch (z10) {
                                    case ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS /* 300 */:
                                    case 301:
                                    case 302:
                                    case 303:
                                        break;
                                    default:
                                        return null;
                                }
                            } else if (!this.f26563a.M()) {
                                return null;
                            } else {
                                RequestBody c10 = response.Y0().c();
                                if (c10 != null && c10.isOneShot()) {
                                    return null;
                                }
                                Response L0 = response.L0();
                                if ((L0 != null && L0.z() == 408) || f(response, 0) > 0) {
                                    return null;
                                }
                                return response.Y0();
                            }
                        } else {
                            Intrinsics.checkNotNull(kVar);
                            if (kVar.b().type() == Proxy.Type.HTTP) {
                                return this.f26563a.J().a(kVar, response);
                            }
                            throw new ProtocolException("Received HTTP_PROXY_AUTH (407) code while not using proxy");
                        }
                    } else {
                        Response L02 = response.L0();
                        if ((L02 != null && L02.z() == 503) || f(response, Integer.MAX_VALUE) != 0) {
                            return null;
                        }
                        return response.Y0();
                    }
                } else {
                    RequestBody c11 = response.Y0().c();
                    if ((c11 != null && c11.isOneShot()) || cVar == null || !cVar.l()) {
                        return null;
                    }
                    cVar.h().y();
                    return response.Y0();
                }
            } else {
                return this.f26563a.i().a(kVar, response);
            }
        }
        return a(response, j10);
    }

    private final boolean c(IOException iOException, boolean z10) {
        if (iOException instanceof ProtocolException) {
            return false;
        }
        if (iOException instanceof InterruptedIOException) {
            if (!(iOException instanceof SocketTimeoutException) || z10) {
                return false;
            }
            return true;
        } else if (((iOException instanceof SSLHandshakeException) && (iOException.getCause() instanceof CertificateException)) || (iOException instanceof SSLPeerUnverifiedException)) {
            return false;
        } else {
            return true;
        }
    }

    private final boolean d(IOException iOException, gu.e eVar, Request request, boolean z10) {
        if (!this.f26563a.M()) {
            return false;
        }
        if ((z10 && e(iOException, request)) || !c(iOException, z10) || !eVar.y()) {
            return false;
        }
        return true;
    }

    private final boolean e(IOException iOException, Request request) {
        RequestBody c10 = request.c();
        if ((c10 != null && c10.isOneShot()) || (iOException instanceof FileNotFoundException)) {
            return true;
        }
        return false;
    }

    private final int f(Response response, int i10) {
        String Y = Response.Y(response, "Retry-After", null, 2, null);
        if (Y == null) {
            return i10;
        }
        if (new Regex("\\d+").i(Y)) {
            Integer valueOf = Integer.valueOf(Y);
            Intrinsics.checkNotNullExpressionValue(valueOf, "valueOf(header)");
            return valueOf.intValue();
        }
        return Integer.MAX_VALUE;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0040, code lost:
        r7 = r0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x0045, code lost:
        r0 = r1.o();
        r6 = b(r7, r0);
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
        if (r6 != null) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x004f, code lost:
        if (r0 == null) goto L38;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0055, code lost:
        if (r0.m() == false) goto L38;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0057, code lost:
        r1.A();
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x005a, code lost:
        r1.j(false);
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x005d, code lost:
        return r7;
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x005e, code lost:
        r0 = r6.c();
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0062, code lost:
        if (r0 == null) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0068, code lost:
        if (r0.isOneShot() == false) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x006a, code lost:
        r1.j(false);
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x006d, code lost:
        return r7;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x006e, code lost:
        r0 = r7.n();
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0072, code lost:
        if (r0 == null) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0074, code lost:
        cu.e.m(r0);
     */
    /* JADX WARN: Code restructure failed: missing block: B:30:0x0077, code lost:
        r8 = r8 + 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x007b, code lost:
        if (r8 > 20) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x0098, code lost:
        throw new java.net.ProtocolException("Too many follow-up requests: " + r8);
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x0026, code lost:
        if (r7 == null) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0028, code lost:
        r0 = r0.K0().o(r7.K0().b(null).c()).c();
     */
    @Override // okhttp3.Interceptor
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public okhttp3.Response intercept(okhttp3.Interceptor.Chain r11) {
        /*
            r10 = this;
            java.lang.String r0 = "chain"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
            hu.g r11 = (hu.g) r11
            okhttp3.Request r0 = r11.i()
            gu.e r1 = r11.d()
            java.util.List r2 = kotlin.collections.CollectionsKt.l()
            r3 = 0
            r4 = 0
            r5 = 1
            r8 = r3
            r7 = r4
        L18:
            r6 = r5
        L19:
            r1.i(r0, r6)
            boolean r6 = r1.C()     // Catch: java.lang.Throwable -> L42
            if (r6 != 0) goto Ld3
            okhttp3.Response r0 = r11.a(r0)     // Catch: java.lang.Throwable -> L42 java.io.IOException -> L99 gu.i -> Lb4
            if (r7 == 0) goto L40
            okhttp3.Response$a r0 = r0.K0()     // Catch: java.lang.Throwable -> L42
            okhttp3.Response$a r6 = r7.K0()     // Catch: java.lang.Throwable -> L42
            okhttp3.Response$a r6 = r6.b(r4)     // Catch: java.lang.Throwable -> L42
            okhttp3.Response r6 = r6.c()     // Catch: java.lang.Throwable -> L42
            okhttp3.Response$a r0 = r0.o(r6)     // Catch: java.lang.Throwable -> L42
            okhttp3.Response r0 = r0.c()     // Catch: java.lang.Throwable -> L42
        L40:
            r7 = r0
            goto L45
        L42:
            r11 = move-exception
            goto Ldb
        L45:
            gu.c r0 = r1.o()     // Catch: java.lang.Throwable -> L42
            okhttp3.Request r6 = r10.b(r7, r0)     // Catch: java.lang.Throwable -> L42
            if (r6 != 0) goto L5e
            if (r0 == 0) goto L5a
            boolean r11 = r0.m()     // Catch: java.lang.Throwable -> L42
            if (r11 == 0) goto L5a
            r1.A()     // Catch: java.lang.Throwable -> L42
        L5a:
            r1.j(r3)
            return r7
        L5e:
            okhttp3.RequestBody r0 = r6.c()     // Catch: java.lang.Throwable -> L42
            if (r0 == 0) goto L6e
            boolean r0 = r0.isOneShot()     // Catch: java.lang.Throwable -> L42
            if (r0 == 0) goto L6e
            r1.j(r3)
            return r7
        L6e:
            okhttp3.ResponseBody r0 = r7.n()     // Catch: java.lang.Throwable -> L42
            if (r0 == 0) goto L77
            cu.e.m(r0)     // Catch: java.lang.Throwable -> L42
        L77:
            int r8 = r8 + 1
            r0 = 20
            if (r8 > r0) goto L82
            r1.j(r5)
            r0 = r6
            goto L18
        L82:
            java.net.ProtocolException r11 = new java.net.ProtocolException     // Catch: java.lang.Throwable -> L42
            java.lang.StringBuilder r0 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L42
            r0.<init>()     // Catch: java.lang.Throwable -> L42
            java.lang.String r2 = "Too many follow-up requests: "
            r0.append(r2)     // Catch: java.lang.Throwable -> L42
            r0.append(r8)     // Catch: java.lang.Throwable -> L42
            java.lang.String r0 = r0.toString()     // Catch: java.lang.Throwable -> L42
            r11.<init>(r0)     // Catch: java.lang.Throwable -> L42
            throw r11     // Catch: java.lang.Throwable -> L42
        L99:
            r6 = move-exception
            boolean r9 = r6 instanceof ju.a     // Catch: java.lang.Throwable -> L42
            r9 = r9 ^ r5
            boolean r9 = r10.d(r6, r1, r0, r9)     // Catch: java.lang.Throwable -> L42
            if (r9 == 0) goto Laf
            java.util.Collection r2 = (java.util.Collection) r2     // Catch: java.lang.Throwable -> L42
            java.util.List r2 = kotlin.collections.CollectionsKt.M0(r2, r6)     // Catch: java.lang.Throwable -> L42
        La9:
            r1.j(r5)
            r6 = r3
            goto L19
        Laf:
            java.lang.Throwable r11 = cu.e.b0(r6, r2)     // Catch: java.lang.Throwable -> L42
            throw r11     // Catch: java.lang.Throwable -> L42
        Lb4:
            r6 = move-exception
            java.io.IOException r9 = r6.c()     // Catch: java.lang.Throwable -> L42
            boolean r9 = r10.d(r9, r1, r0, r3)     // Catch: java.lang.Throwable -> L42
            if (r9 == 0) goto Lca
            java.util.Collection r2 = (java.util.Collection) r2     // Catch: java.lang.Throwable -> L42
            java.io.IOException r6 = r6.b()     // Catch: java.lang.Throwable -> L42
            java.util.List r2 = kotlin.collections.CollectionsKt.M0(r2, r6)     // Catch: java.lang.Throwable -> L42
            goto La9
        Lca:
            java.io.IOException r11 = r6.b()     // Catch: java.lang.Throwable -> L42
            java.lang.Throwable r11 = cu.e.b0(r11, r2)     // Catch: java.lang.Throwable -> L42
            throw r11     // Catch: java.lang.Throwable -> L42
        Ld3:
            java.io.IOException r11 = new java.io.IOException     // Catch: java.lang.Throwable -> L42
            java.lang.String r0 = "Canceled"
            r11.<init>(r0)     // Catch: java.lang.Throwable -> L42
            throw r11     // Catch: java.lang.Throwable -> L42
        Ldb:
            r1.j(r5)
            throw r11
        */
        throw new UnsupportedOperationException("Method not decompiled: hu.j.intercept(okhttp3.Interceptor$Chain):okhttp3.Response");
    }
}
