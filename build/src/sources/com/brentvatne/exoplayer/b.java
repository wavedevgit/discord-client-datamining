package com.brentvatne.exoplayer;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.network.CookieJarContainer;
import com.facebook.react.modules.network.ForwardingCookieHandler;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.g;
import java.util.Map;
import le.r;
import ne.w0;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static DataSource.Factory f8957a;

    /* renamed from: b  reason: collision with root package name */
    private static String f8958b;

    private static DataSource.Factory a(ReactContext reactContext, r rVar, Map map) {
        return new com.google.android.exoplayer2.upstream.c(reactContext, rVar, b(reactContext, rVar, map));
    }

    private static g.c b(ReactContext reactContext, r rVar, Map map) {
        OkHttpClient okHttpClient = OkHttpClientProvider.getOkHttpClient();
        ((CookieJarContainer) okHttpClient.r()).setCookieJar(new ut.i(new ForwardingCookieHandler(reactContext)));
        sc.b bVar = new sc.b(okHttpClient, d(reactContext), rVar);
        if (map != null) {
            bVar.c(map);
        }
        return bVar;
    }

    public static DataSource.Factory c(ReactContext reactContext, r rVar, Map map) {
        if (f8957a == null || (map != null && !map.isEmpty())) {
            f8957a = a(reactContext, rVar, map);
        }
        return f8957a;
    }

    public static String d(ReactContext reactContext) {
        if (f8958b == null) {
            f8958b = w0.r0(reactContext, "ReactNativeVideo");
        }
        return f8958b;
    }

    public static void e(DataSource.Factory factory) {
        f8957a = factory;
    }
}
