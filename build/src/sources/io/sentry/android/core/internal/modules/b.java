package io.sentry.android.core.internal.modules;

import android.content.Context;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.e1;
import io.sentry.internal.modules.d;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends d {

    /* renamed from: e  reason: collision with root package name */
    private final Context f28923e;

    public b(Context context, ILogger iLogger) {
        super(iLogger);
        this.f28923e = e1.g(context);
        new Thread(new Runnable() { // from class: io.sentry.android.core.internal.modules.a
            @Override // java.lang.Runnable
            public final void run() {
                b.this.a();
            }
        }).start();
    }

    @Override // io.sentry.internal.modules.d
    protected Map b() {
        TreeMap treeMap = new TreeMap();
        try {
            InputStream open = this.f28923e.getAssets().open("sentry-external-modules.txt");
            try {
                Map c10 = c(open);
                if (open != null) {
                    open.close();
                    return c10;
                }
                return c10;
            } catch (Throwable th2) {
                if (open != null) {
                    try {
                        open.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        } catch (FileNotFoundException unused) {
            this.f30012a.c(SentryLevel.INFO, "%s file was not found.", "sentry-external-modules.txt");
            return treeMap;
        } catch (IOException e10) {
            this.f30012a.b(SentryLevel.ERROR, "Error extracting modules.", e10);
            return treeMap;
        }
    }
}
