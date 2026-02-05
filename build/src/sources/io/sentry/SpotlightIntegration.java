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
    private k7 f27716d;

    /* renamed from: e  reason: collision with root package name */
    private ILogger f27717e = i2.e();

    /* renamed from: i  reason: collision with root package name */
    private z0 f27718i = v2.f();

    /* JADX INFO: Access modifiers changed from: private */
    public void E(l5 l5Var) {
        try {
            if (this.f27716d != null) {
                HttpURLConnection o10 = o(y());
                OutputStream outputStream = o10.getOutputStream();
                GZIPOutputStream gZIPOutputStream = new GZIPOutputStream(outputStream);
                this.f27716d.getSerializer().b(l5Var, gZIPOutputStream);
                gZIPOutputStream.close();
                if (outputStream != null) {
                    outputStream.close();
                }
                this.f27717e.c(SentryLevel.DEBUG, "Envelope sent to spotlight: %d", Integer.valueOf(o10.getResponseCode()));
                m(o10);
                return;
            }
            throw new IllegalArgumentException("SentryOptions are required to send envelopes.");
        } catch (Exception e10) {
            this.f27717e.b(SentryLevel.ERROR, "An exception occurred while creating the connection to spotlight.", e10);
        }
    }

    private void m(HttpURLConnection httpURLConnection) {
        try {
            httpURLConnection.getInputStream().close();
        } catch (IOException unused) {
        } finally {
            httpURLConnection.disconnect();
        }
    }

    private HttpURLConnection o(String str) {
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

    @Override // io.sentry.k7.b
    public void a(final l5 l5Var, Hint hint) {
        try {
            this.f27718i.submit(new Runnable() { // from class: io.sentry.m8
                @Override // java.lang.Runnable
                public final void run() {
                    SpotlightIntegration.this.E(l5Var);
                }
            });
        } catch (RejectedExecutionException e10) {
            this.f27717e.b(SentryLevel.WARNING, "Spotlight envelope submission rejected.", e10);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f27718i.a(0L);
        k7 k7Var = this.f27716d;
        if (k7Var != null && k7Var.getBeforeEnvelopeCallback() == this) {
            this.f27716d.setBeforeEnvelopeCallback(null);
        }
    }

    @Override // io.sentry.k1
    public void h(w0 w0Var, k7 k7Var) {
        this.f27716d = k7Var;
        this.f27717e = k7Var.getLogger();
        if (k7Var.getBeforeEnvelopeCallback() == null && k7Var.isEnableSpotlight()) {
            this.f27718i = new q6(k7Var);
            k7Var.setBeforeEnvelopeCallback(this);
            this.f27717e.c(SentryLevel.DEBUG, "SpotlightIntegration enabled.", new Object[0]);
            io.sentry.util.p.a("Spotlight");
            return;
        }
        this.f27717e.c(SentryLevel.DEBUG, "SpotlightIntegration is not enabled. BeforeEnvelopeCallback is already set or spotlight is not enabled.", new Object[0]);
    }

    public String y() {
        k7 k7Var = this.f27716d;
        if (k7Var != null && k7Var.getSpotlightConnectionUrl() != null) {
            return this.f27716d.getSpotlightConnectionUrl();
        }
        if (io.sentry.util.a0.a()) {
            return "http://10.0.2.2:8969/stream";
        }
        return "http://localhost:8969/stream";
    }
}
