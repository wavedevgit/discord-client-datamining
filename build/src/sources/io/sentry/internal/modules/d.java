package io.sentry.internal.modules;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.a1;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.Map;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d implements b {

    /* renamed from: d  reason: collision with root package name */
    private static final Charset f29069d = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    protected final ILogger f29070a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.util.a f29071b = new io.sentry.util.a();

    /* renamed from: c  reason: collision with root package name */
    private volatile Map f29072c = null;

    public d(ILogger iLogger) {
        this.f29070a = iLogger;
    }

    @Override // io.sentry.internal.modules.b
    public Map a() {
        if (this.f29072c == null) {
            a1 a10 = this.f29071b.a();
            try {
                if (this.f29072c == null) {
                    this.f29072c = b();
                }
                if (a10 != null) {
                    a10.close();
                }
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }
        return this.f29072c;
    }

    protected abstract Map b();

    /* JADX INFO: Access modifiers changed from: protected */
    public Map c(InputStream inputStream) {
        TreeMap treeMap = new TreeMap();
        try {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, f29069d));
            try {
                for (String readLine = bufferedReader.readLine(); readLine != null; readLine = bufferedReader.readLine()) {
                    int lastIndexOf = readLine.lastIndexOf(58);
                    treeMap.put(readLine.substring(0, lastIndexOf), readLine.substring(lastIndexOf + 1));
                }
                this.f29070a.c(SentryLevel.DEBUG, "Extracted %d modules from resources.", Integer.valueOf(treeMap.size()));
                bufferedReader.close();
                return treeMap;
            } catch (Throwable th2) {
                try {
                    bufferedReader.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        } catch (IOException e10) {
            this.f29070a.b(SentryLevel.ERROR, "Error extracting modules.", e10);
            return treeMap;
        } catch (RuntimeException e11) {
            this.f29070a.a(SentryLevel.ERROR, e11, "%s file is malformed.", "sentry-external-modules.txt");
            return treeMap;
        }
    }
}
