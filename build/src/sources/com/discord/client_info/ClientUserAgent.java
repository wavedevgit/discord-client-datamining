package com.discord.client_info;

import android.content.Context;
import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.OkHttpClientProvider;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Dispatcher;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Response;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001:\u0001\fB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tJ\b\u0010\n\u001a\u00020\u000bH\u0002¨\u0006\r"}, d2 = {"Lcom/discord/client_info/ClientUserAgent;", "", "<init>", "()V", "init", "", "context", "Landroid/content/Context;", "userAgent", "", "createDispatcher", "Lokhttp3/Dispatcher;", "DiscordUserAgentInterceptor", "client_info_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ClientUserAgent {
    @NotNull
    public static final ClientUserAgent INSTANCE = new ClientUserAgent();

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0002\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/client_info/ClientUserAgent$DiscordUserAgentInterceptor;", "Lokhttp3/Interceptor;", "userAgent", "", "<init>", "(Ljava/lang/String;)V", "intercept", "Lokhttp3/Response;", "chain", "Lokhttp3/Interceptor$Chain;", "client_info_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class DiscordUserAgentInterceptor implements Interceptor {
        @NotNull
        private final String userAgent;

        public DiscordUserAgentInterceptor(@NotNull String userAgent) {
            Intrinsics.checkNotNullParameter(userAgent, "userAgent");
            this.userAgent = userAgent;
        }

        @Override // okhttp3.Interceptor
        @NotNull
        public Response intercept(@NotNull Interceptor.Chain chain) {
            Intrinsics.checkNotNullParameter(chain, "chain");
            return chain.a(chain.h().k().i("User-Agent").a("User-Agent", this.userAgent).b());
        }
    }

    private ClientUserAgent() {
    }

    private final Dispatcher createDispatcher() {
        Dispatcher dispatcher = new Dispatcher();
        dispatcher.o(dispatcher.j() * 2);
        dispatcher.p(dispatcher.j());
        return dispatcher;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final OkHttpClient init$lambda$0(Context context, String str) {
        return OkHttpClientProvider.createClientBuilder(context).h(INSTANCE.createDispatcher()).a(new DiscordUserAgentInterceptor(str)).c();
    }

    public final void init(@NotNull final Context context, @NotNull final String userAgent) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(userAgent, "userAgent");
        OkHttpClientProvider.setOkHttpClientFactory(new OkHttpClientFactory() { // from class: com.discord.client_info.b
            @Override // com.facebook.react.modules.network.OkHttpClientFactory
            public final OkHttpClient createNewNetworkModuleClient() {
                OkHttpClient init$lambda$0;
                init$lambda$0 = ClientUserAgent.init$lambda$0(context, userAgent);
                return init$lambda$0;
            }
        });
    }
}
