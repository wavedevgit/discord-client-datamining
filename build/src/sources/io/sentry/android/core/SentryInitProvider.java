package io.sentry.android.core;

import android.content.Context;
import android.content.pm.ProviderInfo;
import android.net.Uri;
import io.sentry.SentryLevel;
import io.sentry.b5;
import io.sentry.u6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SentryInitProvider extends n1 {
    @Override // android.content.ContentProvider
    public void attachInfo(Context context, ProviderInfo providerInfo) {
        if (!SentryInitProvider.class.getName().equals(providerInfo.authority)) {
            super.attachInfo(context, providerInfo);
            return;
        }
        throw new IllegalStateException("An applicationId is required to fulfill the manifest placeholder.");
    }

    @Override // android.content.ContentProvider
    public String getType(Uri uri) {
        return null;
    }

    @Override // android.content.ContentProvider
    public boolean onCreate() {
        z zVar = new z();
        Context context = getContext();
        if (context == null) {
            zVar.c(SentryLevel.FATAL, "App. Context from ContentProvider is null", new Object[0]);
            return false;
        } else if (b2.c(context, zVar) && !e1.f(context)) {
            k2.e(context, zVar);
            u6.d().a("AutoInit");
            return true;
        } else {
            return true;
        }
    }

    @Override // android.content.ContentProvider
    public void shutdown() {
        b5.o();
    }
}
