package io.sentry.transport;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.l5;
import io.sentry.w3;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URLConnection;
import java.nio.charset.Charset;
import java.util.Map;
import java.util.zip.GZIPOutputStream;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSocketFactory;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: e  reason: collision with root package name */
    private static final Charset f30342e = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final Proxy f30343a;

    /* renamed from: b  reason: collision with root package name */
    private final w3 f30344b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f30345c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f30346d;

    public o(k7 k7Var, w3 w3Var, a0 a0Var) {
        this(k7Var, w3Var, m.a(), a0Var);
    }

    private void a(HttpURLConnection httpURLConnection) {
        try {
            httpURLConnection.getInputStream().close();
        } catch (IOException unused) {
        } finally {
            httpURLConnection.disconnect();
        }
    }

    private HttpURLConnection b() {
        HttpURLConnection e10 = e();
        for (Map.Entry entry : this.f30344b.a().entrySet()) {
            e10.setRequestProperty((String) entry.getKey(), (String) entry.getValue());
        }
        e10.setRequestMethod("POST");
        e10.setDoOutput(true);
        e10.setRequestProperty("Content-Encoding", "gzip");
        e10.setRequestProperty("Content-Type", "application/x-sentry-envelope");
        e10.setRequestProperty("Accept", "application/json");
        e10.setRequestProperty("Connection", "close");
        e10.setConnectTimeout(this.f30345c.getConnectionTimeoutMillis());
        e10.setReadTimeout(this.f30345c.getReadTimeoutMillis());
        SSLSocketFactory sslSocketFactory = this.f30345c.getSslSocketFactory();
        if ((e10 instanceof HttpsURLConnection) && sslSocketFactory != null) {
            ((HttpsURLConnection) e10).setSSLSocketFactory(sslSocketFactory);
        }
        e10.connect();
        return e10;
    }

    private String c(HttpURLConnection httpURLConnection) {
        try {
            InputStream errorStream = httpURLConnection.getErrorStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(errorStream, f30342e));
            StringBuilder sb2 = new StringBuilder();
            boolean z10 = true;
            while (true) {
                String readLine = bufferedReader.readLine();
                if (readLine == null) {
                    break;
                }
                if (!z10) {
                    sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                }
                sb2.append(readLine);
                z10 = false;
            }
            String sb3 = sb2.toString();
            bufferedReader.close();
            if (errorStream != null) {
                errorStream.close();
            }
            return sb3;
        } catch (IOException unused) {
            return "Failed to obtain error message while analyzing send failure.";
        }
    }

    private boolean d(int i10) {
        return i10 == 200;
    }

    private c0 f(HttpURLConnection httpURLConnection) {
        try {
            try {
                int responseCode = httpURLConnection.getResponseCode();
                i(httpURLConnection, responseCode);
                if (!d(responseCode)) {
                    ILogger logger = this.f30345c.getLogger();
                    SentryLevel sentryLevel = SentryLevel.ERROR;
                    logger.c(sentryLevel, "Request failed, API returned %s", Integer.valueOf(responseCode));
                    if (this.f30345c.isDebug()) {
                        this.f30345c.getLogger().c(sentryLevel, "%s", c(httpURLConnection));
                    }
                    c0 b10 = c0.b(responseCode);
                    a(httpURLConnection);
                    return b10;
                }
                this.f30345c.getLogger().c(SentryLevel.DEBUG, "Envelope sent successfully.", new Object[0]);
                c0 e10 = c0.e();
                a(httpURLConnection);
                return e10;
            } catch (IOException e11) {
                this.f30345c.getLogger().a(SentryLevel.ERROR, e11, "Error reading and logging the response stream", new Object[0]);
                a(httpURLConnection);
                return c0.a();
            }
        } catch (Throwable th2) {
            a(httpURLConnection);
            throw th2;
        }
    }

    private Proxy g(k7.l lVar) {
        Proxy.Type type;
        if (lVar != null) {
            String c10 = lVar.c();
            String a10 = lVar.a();
            if (c10 != null && a10 != null) {
                try {
                    if (lVar.d() != null) {
                        type = lVar.d();
                    } else {
                        type = Proxy.Type.HTTP;
                    }
                    return new Proxy(type, new InetSocketAddress(a10, Integer.parseInt(c10)));
                } catch (NumberFormatException e10) {
                    ILogger logger = this.f30345c.getLogger();
                    SentryLevel sentryLevel = SentryLevel.ERROR;
                    logger.a(sentryLevel, e10, "Failed to parse Sentry Proxy port: " + lVar.c() + ". Proxy is ignored", new Object[0]);
                    return null;
                }
            }
            return null;
        }
        return null;
    }

    HttpURLConnection e() {
        URLConnection openConnection;
        if (this.f30343a == null) {
            openConnection = this.f30344b.b().openConnection();
        } else {
            openConnection = this.f30344b.b().openConnection(this.f30343a);
        }
        return (HttpURLConnection) openConnection;
    }

    public c0 h(l5 l5Var) {
        c0 f10;
        this.f30345c.getSocketTagger().b();
        HttpURLConnection b10 = b();
        try {
            OutputStream outputStream = b10.getOutputStream();
            GZIPOutputStream gZIPOutputStream = new GZIPOutputStream(outputStream);
            this.f30345c.getSerializer().b(l5Var, gZIPOutputStream);
            gZIPOutputStream.close();
            if (outputStream != null) {
                outputStream.close();
            }
        } catch (Throwable th2) {
            try {
                this.f30345c.getLogger().a(SentryLevel.ERROR, th2, "An exception occurred while submitting the envelope to the Sentry server.", new Object[0]);
            } finally {
                f(b10);
                this.f30345c.getSocketTagger().a();
            }
        }
        return f10;
    }

    public void i(HttpURLConnection httpURLConnection, int i10) {
        String headerField = httpURLConnection.getHeaderField("Retry-After");
        this.f30346d.G0(httpURLConnection.getHeaderField("X-Sentry-Rate-Limits"), headerField, i10);
    }

    o(k7 k7Var, w3 w3Var, m mVar, a0 a0Var) {
        this.f30344b = w3Var;
        this.f30345c = k7Var;
        this.f30346d = a0Var;
        Proxy g10 = g(k7Var.getProxy());
        this.f30343a = g10;
        if (g10 == null || k7Var.getProxy() == null) {
            return;
        }
        String e10 = k7Var.getProxy().e();
        String b10 = k7Var.getProxy().b();
        if (e10 == null || b10 == null) {
            return;
        }
        mVar.b(new v(e10, b10));
    }
}
