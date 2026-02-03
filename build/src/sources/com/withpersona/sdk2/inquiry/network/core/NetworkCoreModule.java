package com.withpersona.sdk2.inquiry.network.core;

import android.content.Context;
import com.squareup.moshi.h;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule;
import java.io.IOException;
import java.net.ConnectException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import lv.a0;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;
import wt.j;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private String environmentId;
    private final String locale;
    private String organizationId;
    private final boolean useServerStyle;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Set<h.e> provideMoshiJsonAdapterFactory() {
            return x0.i(ErrorResponse.Companion.getAdapter(), InternalErrorInfo.Companion.createAdapter());
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class NetworkConstants {
        @NotNull
        public static final String HEADER_KEY_PERSONA_ENVIRONMENT_ID = "Persona-Organization-Id";
        @NotNull
        public static final String HEADER_KEY_PERSONA_ORGANIZATION_ID = "Persona-Environment-Id";
        @NotNull
        public static final NetworkConstants INSTANCE = new NetworkConstants();

        private NetworkConstants() {
        }
    }

    public NetworkCoreModule(boolean z10, String str, String str2) {
        this.useServerStyle = z10;
        this.environmentId = str;
        this.locale = str2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Response interceptor$lambda$8(w wVar, Interceptor.Chain chain) {
        String str = "";
        try {
            return chain.a(chain.h());
        } catch (ConnectException e10) {
            Response.a g10 = new Response.a().r(chain.h()).p(j.HTTP_2).g(0);
            String localizedMessage = e10.getLocalizedMessage();
            if (localizedMessage != null) {
                str = localizedMessage;
            }
            return g10.m(str).b(ResponseBody.Companion.a(wVar.c(ErrorResponse.class).toJson(ErrorResponse.Companion.create(e10.getLocalizedMessage())), MediaType.f44013e.b("application/json"))).c();
        } catch (SocketTimeoutException e11) {
            Response.a g11 = new Response.a().r(chain.h()).p(j.HTTP_2).g(0);
            String localizedMessage2 = e11.getLocalizedMessage();
            if (localizedMessage2 != null) {
                str = localizedMessage2;
            }
            return g11.m(str).b(ResponseBody.Companion.a(wVar.c(ErrorResponse.class).toJson(ErrorResponse.Companion.create(e11.getLocalizedMessage())), MediaType.f44013e.b("application/json"))).c();
        } catch (UnknownHostException e12) {
            Response.a g12 = new Response.a().r(chain.h()).p(j.HTTP_2).g(0);
            String localizedMessage3 = e12.getLocalizedMessage();
            if (localizedMessage3 != null) {
                str = localizedMessage3;
            }
            return g12.m(str).b(ResponseBody.Companion.a(wVar.c(ErrorResponse.class).toJson(ErrorResponse.Companion.create(e12.getLocalizedMessage())), MediaType.f44013e.b("application/json"))).c();
        } catch (IOException e13) {
            Response.a g13 = new Response.a().r(chain.h()).p(j.HTTP_2).g(0);
            String localizedMessage4 = e13.getLocalizedMessage();
            if (localizedMessage4 != null) {
                str = localizedMessage4;
            }
            return g13.m(str).b(ResponseBody.Companion.a(wVar.c(ErrorResponse.class).toJson(ErrorResponse.Companion.create(e13.getLocalizedMessage())), MediaType.f44013e.b("application/json"))).c();
        }
    }

    @NotNull
    public static final Set<h.e> provideMoshiJsonAdapterFactory() {
        return Companion.provideMoshiJsonAdapterFactory();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Response responseInterceptor$lambda$7(NetworkCoreModule networkCoreModule, Interceptor.Chain chain) {
        Response a10 = chain.a(chain.h());
        String c10 = a10.E0().c(NetworkConstants.HEADER_KEY_PERSONA_ORGANIZATION_ID);
        if (c10 != null) {
            networkCoreModule.organizationId = c10;
        }
        String c11 = a10.E0().c(NetworkConstants.HEADER_KEY_PERSONA_ENVIRONMENT_ID);
        if (c11 != null) {
            networkCoreModule.environmentId = c11;
        }
        return a10;
    }

    @NotNull
    public final Interceptor interceptor(@NotNull final w wVar) {
        return new Interceptor() { // from class: com.withpersona.sdk2.inquiry.network.core.c
            @Override // okhttp3.Interceptor
            public final Response intercept(Interceptor.Chain chain) {
                Response interceptor$lambda$8;
                interceptor$lambda$8 = NetworkCoreModule.interceptor$lambda$8(w.this, chain);
                return interceptor$lambda$8;
            }
        };
    }

    @NotNull
    public final String keyInflection() {
        return "camel";
    }

    @NotNull
    public final w moshi(@NotNull Set<Object> set, @NotNull Set<JsonAdapterBinding<?>> set2, @NotNull Set<h.e> set3) {
        w.b bVar = new w.b();
        for (Object obj : set) {
            bVar.b(obj);
        }
        Iterator<T> it = set2.iterator();
        while (it.hasNext()) {
            JsonAdapterBinding jsonAdapterBinding = (JsonAdapterBinding) it.next();
            bVar.c(jsonAdapterBinding.getClazz(), jsonAdapterBinding.getJsonAdapter());
        }
        for (h.e eVar : set3) {
            bVar.a(eVar);
        }
        return bVar.d();
    }

    @NotNull
    public final OkHttpClient okhttpClient(@NotNull Set<Interceptor> set, @NotNull final Map<String, String> map, @NotNull final Context context, @NotNull final g gVar, @NotNull final xn.b bVar, @NotNull final yo.b bVar2) {
        OkHttpClient.Builder b10 = new OkHttpClient.Builder().b(new Interceptor() { // from class: com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule$okhttpClient$$inlined$-addNetworkInterceptor$1
            @Override // okhttp3.Interceptor
            @NotNull
            public final Response intercept(@NotNull Interceptor.Chain chain) {
                String str;
                String str2;
                String str3;
                String str4;
                Request.Builder k10 = chain.h().k();
                if (!chain.h().h().f().contains("Accept")) {
                    k10 = k10.e("Accept", "application/json");
                }
                Request.Builder e10 = k10.e("Persona-Version", "2023-08-08").e("Persona-Device-Manufacturer", xn.b.this.c()).e("Persona-Device-Model", xn.b.this.b()).e("Persona-Device-OS", "Android").e("Persona-Device-OS-Version", xn.b.this.d()).e("Persona-Device-Vendor-Id", gVar.b()).e("VTDGJLGG", String.valueOf(xn.b.this.a()));
                if ((context.getResources().getConfiguration().uiMode & 48) == 32) {
                    str = "dark";
                } else {
                    str = "light";
                }
                Request.Builder e11 = e10.e("Persona-Style-Variant", str);
                str2 = this.locale;
                if (str2 == null) {
                    str2 = Locale.getDefault().toString();
                }
                Request.Builder e12 = e11.e("Persona-Device-Locale", str2).e("Persona-App-Bundle", context.getPackageName());
                str3 = this.organizationId;
                if (str3 != null) {
                    e12.e(NetworkCoreModule.NetworkConstants.HEADER_KEY_PERSONA_ORGANIZATION_ID, str3);
                }
                str4 = this.environmentId;
                if (str4 != null) {
                    e12.e(NetworkCoreModule.NetworkConstants.HEADER_KEY_PERSONA_ENVIRONMENT_ID, str4);
                }
                for (Map.Entry entry : map.entrySet()) {
                    e12.e((String) entry.getKey(), (String) entry.getValue());
                }
                return chain.a(a.a(a.f19012a, e12.b(), bVar2, 0L, 2, (Object) null));
            }
        });
        TimeUnit timeUnit = TimeUnit.MINUTES;
        OkHttpClient.Builder f10 = b10.Q(1L, timeUnit).R(1L, timeUnit).f(1L, timeUnit);
        for (Interceptor interceptor : set) {
            f10.a(interceptor);
        }
        return f10.c();
    }

    @NotNull
    public final Interceptor responseInterceptor() {
        return new Interceptor() { // from class: com.withpersona.sdk2.inquiry.network.core.b
            @Override // okhttp3.Interceptor
            public final Response intercept(Interceptor.Chain chain) {
                Response responseInterceptor$lambda$7;
                responseInterceptor$lambda$7 = NetworkCoreModule.responseInterceptor$lambda$7(NetworkCoreModule.this, chain);
                return responseInterceptor$lambda$7;
            }
        };
    }

    @NotNull
    public final a0 retrofit(@NotNull String str, @NotNull OkHttpClient okHttpClient, @NotNull w wVar) {
        return new a0.b().f(okHttpClient).b(str).a(mv.a.f(wVar)).d();
    }

    @NotNull
    public final String useServerStyles() {
        return String.valueOf(this.useServerStyle);
    }

    public /* synthetic */ NetworkCoreModule(boolean z10, String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(z10, (i10 & 2) != 0 ? null : str, str2);
    }
}
