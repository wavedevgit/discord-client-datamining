package com.brentvatne.exoplayer;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.network.CookieJarContainer;
import com.facebook.react.modules.network.ForwardingCookieHandler;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.h;
import java.util.Map;
import le.r;
import ne.w0;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static DataSource.Factory f8209a;

    /* renamed from: b  reason: collision with root package name */
    private static String f8210b;

    private static DataSource.Factory a(ReactContext reactContext, r rVar, Map map) {
        return new com.google.android.exoplayer2.upstream.c(reactContext, rVar, b(reactContext, rVar, map));
    }

    private static h.c b(ReactContext reactContext, r rVar, Map map) {
        OkHttpClient okHttpClient = OkHttpClientProvider.getOkHttpClient();
        ((CookieJarContainer) okHttpClient.r()).setCookieJar(new bu.i(new ForwardingCookieHandler(reactContext)));
        sc.a aVar = new sc.a(okHttpClient, d(reactContext), rVar);
        if (map != null) {
            aVar.b(map);
        }
        return aVar;
    }

    public static DataSource.Factory c(ReactContext reactContext, r rVar, Map map) {
        if (f8209a == null || (map != null && !map.isEmpty())) {
            f8209a = a(reactContext, rVar, map);
        }
        return f8209a;
    }

    public static String d(ReactContext reactContext) {
        if (f8210b == null) {
            f8210b = w0.r0(reactContext, "ReactNativeVideo");
        }
        return f8210b;
    }

    public static void e(DataSource.Factory factory) {
        f8209a = factory;
    }
}
