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
    private k7 f28715d;

    /* renamed from: e  reason: collision with root package name */
    private ILogger f28716e = i2.e();

    /* renamed from: i  reason: collision with root package name */
    private z0 f28717i = v2.f();

    /* JADX INFO: Access modifiers changed from: private */
    public void E(l5 l5Var) {
        try {
            if (this.f28715d != null) {
                HttpURLConnection x10 = x(B());
                OutputStream outputStream = x10.getOutputStream();
                GZIPOutputStream gZIPOutputStream = new GZIPOutputStream(outputStream);
                this.f28715d.getSerializer().b(l5Var, gZIPOutputStream);
                gZIPOutputStream.close();
                if (outputStream != null) {
                    outputStream.close();
                }
                this.f28716e.c(SentryLevel.DEBUG, "Envelope sent to spotlight: %d", Integer.valueOf(x10.getResponseCode()));
                n(x10);
                return;
            }
            throw new IllegalArgumentException("SentryOptions are required to send envelopes.");
        } catch (Exception e10) {
            this.f28716e.b(SentryLevel.ERROR, "An exception occurred while creating the connection to spotlight.", e10);
        }
    }

    private void n(HttpURLConnection httpURLConnection) {
        try {
            httpURLConnection.getInputStream().close();
        } catch (IOException unused) {
        } finally {
            httpURLConnection.disconnect();
        }
    }

    private HttpURLConnection x(String str) {
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

    public String B() {
        k7 k7Var = this.f28715d;
        if (k7Var != null && k7Var.getSpotlightConnectionUrl() != null) {
            return this.f28715d.getSpotlightConnectionUrl();
        }
        if (io.sentry.util.a0.a()) {
            return "http://10.0.2.2:8969/stream";
        }
        return "http://localhost:8969/stream";
    }

    @Override // io.sentry.k7.b
    public void a(final l5 l5Var, Hint hint) {
        try {
            this.f28717i.submit(new Runnable() { // from class: io.sentry.m8
                @Override // java.lang.Runnable
                public final void run() {
                    SpotlightIntegration.this.E(l5Var);
                }
            });
        } catch (RejectedExecutionException e10) {
            this.f28716e.b(SentryLevel.WARNING, "Spotlight envelope submission rejected.", e10);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28717i.a(0L);
        k7 k7Var = this.f28715d;
        if (k7Var != null && k7Var.getBeforeEnvelopeCallback() == this) {
            this.f28715d.setBeforeEnvelopeCallback(null);
        }
    }

    @Override // io.sentry.k1
    public void h(w0 w0Var, k7 k7Var) {
        this.f28715d = k7Var;
        this.f28716e = k7Var.getLogger();
        if (k7Var.getBeforeEnvelopeCallback() == null && k7Var.isEnableSpotlight()) {
            this.f28717i = new q6(k7Var);
            k7Var.setBeforeEnvelopeCallback(this);
            this.f28716e.c(SentryLevel.DEBUG, "SpotlightIntegration enabled.", new Object[0]);
            io.sentry.util.p.a("Spotlight");
            return;
        }
        this.f28716e.c(SentryLevel.DEBUG, "SpotlightIntegration is not enabled. BeforeEnvelopeCallback is already set or spotlight is not enabled.", new Object[0]);
    }
}
