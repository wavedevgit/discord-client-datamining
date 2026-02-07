package io.sentry;

import io.sentry.k7;
import java.io.Closeable;
import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.util.concurrent.RejectedExecutionException;
import java.util.zip.GZIPOutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SpotlightIntegration implements k1, k7.b, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private k7 f26908d;

    /* renamed from: e  reason: collision with root package name */
    private ILogger f26909e = i2.e();

    /* renamed from: i  reason: collision with root package name */
    private z0 f26910i = v2.f();

    private void m(HttpURLConnection httpURLConnection) {
        try {
            httpURLConnection.getInputStream().close();
        } catch (IOException unused) {
        } finally {
            httpURLConnection.disconnect();
        }
    }

    private HttpURLConnection n(String str) {
        HttpURLConnection httpURLConnection = (HttpURLConnection) URI.create(str).toURL().openConnection();
        httpURLConnection.setReadTimeout(1000);
        httpURLConnection.setConnectTimeout(1000);
        httpURLConnection.setRequestMethod("POST");
        httpURLConnection.setDoOutput(true);
        httpURLConnection.setRequestProperty("Content-Encoding", "gzip");
        httpURLConnection.setRequestProperty("Content-Type", "application/x-sentry-envelope");
        httpURLConnection.setRequestProperty("Accept", "application/json");
        httpURLConnection.setRequestProperty("Connection", "close");
        httpURLConnection.connect();
        return httpURLConnection;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void s(l5 l5Var) {
        try {
            if (this.f26908d != null) {
                HttpURLConnection n10 = n(p());
                OutputStream outputStream = n10.getOutputStream();
                GZIPOutputStream gZIPOutputStream = new GZIPOutputStream(outputStream);
                this.f26908d.getSerializer().b(l5Var, gZIPOutputStream);
                gZIPOutputStream.close();
                if (outputStream != null) {
                    outputStream.close();
                }
                this.f26909e.c(SentryLevel.DEBUG, "Envelope sent to spotlight: %d", Integer.valueOf(n10.getResponseCode()));
                m(n10);
                return;
            }
            throw new IllegalArgumentException("SentryOptions are required to send envelopes.");
        } catch (Exception e10) {
            this.f26909e.b(SentryLevel.ERROR, "An exception occurred while creating the connection to spotlight.", e10);
        }
    }

    @Override // io.sentry.k7.b
    public void a(final l5 l5Var, Hint hint) {
        try {
            this.f26910i.submit(new Runnable() { // from class: io.sentry.m8
                @Override // java.lang.Runnable
                public final void run() {
                    SpotlightIntegration.this.s(l5Var);
                }
            });
        } catch (RejectedExecutionException e10) {
            this.f26909e.b(SentryLevel.WARNING, "Spotlight envelope submission rejected.", e10);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f26910i.a(0L);
        k7 k7Var = this.f26908d;
        if (k7Var != null && k7Var.getBeforeEnvelopeCallback() == this) {
            this.f26908d.setBeforeEnvelopeCallback(null);
        }
    }

    @Override // io.sentry.k1
    public void g(w0 w0Var, k7 k7Var) {
        this.f26908d = k7Var;
        this.f26909e = k7Var.getLogger();
        if (k7Var.getBeforeEnvelopeCallback() == null && k7Var.isEnableSpotlight()) {
            this.f26910i = new q6(k7Var);
            k7Var.setBeforeEnvelopeCallback(this);
            this.f26909e.c(SentryLevel.DEBUG, "SpotlightIntegration enabled.", new Object[0]);
            io.sentry.util.p.a("Spotlight");
            return;
        }
        this.f26909e.c(SentryLevel.DEBUG, "SpotlightIntegration is not enabled. BeforeEnvelopeCallback is already set or spotlight is not enabled.", new Object[0]);
    }

    public String p() {
        k7 k7Var = this.f26908d;
        if (k7Var != null && k7Var.getSpotlightConnectionUrl() != null) {
            return this.f26908d.getSpotlightConnectionUrl();
        }
        if (io.sentry.util.a0.a()) {
            return "http://10.0.2.2:8969/stream";
        }
        return "http://localhost:8969/stream";
    }
}
