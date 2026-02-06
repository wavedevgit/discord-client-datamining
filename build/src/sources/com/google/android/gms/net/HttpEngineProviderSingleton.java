package com.google.android.gms.net;

import android.content.Context;
import android.util.Log;
import androidx.annotation.Keep;
import org.chromium.net.CronetProvider;
import org.chromium.net.ExperimentalCronetEngine;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class HttpEngineProviderSingleton {
    private static final String TAG = "com.google.android.gms.net.HttpEngineProviderSingleton";
    private static HttpEngineProviderSingleton httpEngineProviderSingleton;
    private CronetProvider httpEngineProvider;

    private HttpEngineProviderSingleton(Context context) {
        try {
            if (shouldOverrideWithHttpEngine(context)) {
                CronetProvider cronetProvider = (CronetProvider) Class.forName("org.chromium.net.impl.HttpEngineNativeProvider").asSubclass(CronetProvider.class).getConstructor(Context.class).newInstance(context);
                if (cronetProvider.isEnabled()) {
                    this.httpEngineProvider = cronetProvider;
                }
            }
        } catch (Throwable th2) {
            Log.v(TAG, "HttpEngine is not available", th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static synchronized HttpEngineProviderSingleton getInstance(Context context) {
        synchronized (HttpEngineProviderSingleton.class) {
            HttpEngineProviderSingleton httpEngineProviderSingleton2 = httpEngineProviderSingleton;
            if (httpEngineProviderSingleton2 != null) {
                return httpEngineProviderSingleton2;
            }
            HttpEngineProviderSingleton httpEngineProviderSingleton3 = new HttpEngineProviderSingleton(context);
            httpEngineProviderSingleton = httpEngineProviderSingleton3;
            return httpEngineProviderSingleton3;
        }
    }

    private boolean getReflectionValueAsBool(Object obj) {
        if (obj != null && ((Boolean) obj).booleanValue()) {
            return true;
        }
        return false;
    }

    private boolean shouldOverrideWithHttpEngine(Context context) {
        try {
            return getReflectionValueAsBool(ExperimentalCronetEngine.class.getDeclaredMethod("shouldOverrideWithHttpEngine", ig.a.a(Context.class, context)).invoke(null, ig.a.b(Context.class, context)));
        } catch (Throwable unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CronetProvider getHttpEngineProvider() {
        return this.httpEngineProvider;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean shouldUseHttpEngine() {
        return this.httpEngineProvider != null;
    }
}
