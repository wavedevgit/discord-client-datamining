package com.brentvatne.exoplayer;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.network.CookieJarContainer;
import com.facebook.react.modules.network.ForwardingCookieHandler;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.h;
import java.util.Map;
import me.r;
import oe.w0;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static DataSource.Factory f8926a;

    /* renamed from: b  reason: collision with root package name */
    private static String f8927b;

    private static DataSource.Factory a(ReactContext reactContext, r rVar, Map map) {
        return new com.google.android.exoplayer2.upstream.c(reactContext, rVar, b(reactContext, rVar, map));
    }

    private static h.c b(ReactContext reactContext, r rVar, Map map) {
        OkHttpClient okHttpClient = OkHttpClientProvider.getOkHttpClient();
        ((CookieJarContainer) okHttpClient.r()).setCookieJar(new lu.i(new ForwardingCookieHandler(reactContext)));
        tc.a aVar = new tc.a(okHttpClient, d(reactContext), rVar);
        if (map != null) {
            aVar.b(map);
        }
        return aVar;
    }

    public static DataSource.Factory c(ReactContext reactContext, r rVar, Map map) {
        if (f8926a == null || (map != null && !map.isEmpty())) {
            f8926a = a(reactContext, rVar, map);
        }
        return f8926a;
    }

    public static String d(ReactContext reactContext) {
        if (f8927b == null) {
            f8927b = w0.r0(reactContext, "ReactNativeVideo");
        }
        return f8927b;
    }

    public static void e(DataSource.Factory factory) {
        f8926a = factory;
    }
}
