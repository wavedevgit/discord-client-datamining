package io.sentry.android.core.internal.debugmeta;

import android.content.Context;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.e1;
import io.sentry.util.d;
import java.io.BufferedInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Properties;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements io.sentry.internal.debugmeta.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f28949a;

    /* renamed from: b  reason: collision with root package name */
    private final ILogger f28950b;

    public a(Context context, ILogger iLogger) {
        this.f28949a = e1.g(context);
        this.f28950b = iLogger;
    }

    @Override // io.sentry.internal.debugmeta.a
    public List a() {
        try {
            BufferedInputStream bufferedInputStream = new BufferedInputStream(this.f28949a.getAssets().open(d.f30801a));
            try {
                Properties properties = new Properties();
                properties.load(bufferedInputStream);
                List singletonList = Collections.singletonList(properties);
                bufferedInputStream.close();
                return singletonList;
            } catch (Throwable th2) {
                try {
                    bufferedInputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        } catch (FileNotFoundException unused) {
            this.f28950b.c(SentryLevel.INFO, "%s file was not found.", d.f30801a);
            return null;
        } catch (IOException e10) {
            this.f28950b.b(SentryLevel.ERROR, "Error getting Proguard UUIDs.", e10);
            return null;
        } catch (RuntimeException e11) {
            this.f28950b.a(SentryLevel.ERROR, e11, "%s file is malformed.", d.f30801a);
            return null;
        }
    }
}
