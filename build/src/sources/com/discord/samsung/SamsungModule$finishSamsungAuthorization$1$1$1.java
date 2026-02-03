package com.discord.samsung;

import android.net.Uri;
import com.discord.samsung.SamsungModule;
import java.util.ArrayList;
import java.util.Map;
import jr.v;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.samsung.SamsungModule$finishSamsungAuthorization$1$1$1", f = "SamsungModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nSamsungModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SamsungModule.kt\ncom/discord/samsung/SamsungModule$finishSamsungAuthorization$1$1$1\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,303:1\n126#2:304\n153#2,3:305\n*S KotlinDebug\n*F\n+ 1 SamsungModule.kt\ncom/discord/samsung/SamsungModule$finishSamsungAuthorization$1$1$1\n*L\n195#1:304\n195#1:305,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class SamsungModule$finishSamsungAuthorization$1$1$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $authCode;
    final /* synthetic */ OkHttpClient $client;
    final /* synthetic */ String $location;
    final /* synthetic */ String $state;
    int label;
    final /* synthetic */ SamsungModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SamsungModule$finishSamsungAuthorization$1$1$1(String str, SamsungModule samsungModule, OkHttpClient okHttpClient, String str2, String str3, Continuation<? super SamsungModule$finishSamsungAuthorization$1$1$1> continuation) {
        super(2, continuation);
        this.$location = str;
        this.this$0 = samsungModule;
        this.$client = okHttpClient;
        this.$state = str2;
        this.$authCode = str3;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new SamsungModule$finishSamsungAuthorization$1$1$1(this.$location, this.this$0, this.$client, this.$state, this.$authCode, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Uri handleSamsungCallback;
        String queryParameter;
        pr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            Request.Builder d10 = new Request.Builder().d();
            String str = this.$location;
            Intrinsics.checkNotNull(str);
            handleSamsungCallback = this.this$0.handleSamsungCallback(this.$client.a(d10.l(str).b()).execute());
            if (handleSamsungCallback != null && (queryParameter = handleSamsungCallback.getQueryParameter("redirect_uri")) != null) {
                Pair a10 = v.a("state", this.$state);
                String str2 = this.$authCode;
                Map m10 = o0.m(a10, v.a("code", "{\"code\":\"" + str2 + "\"}"));
                ArrayList arrayList = new ArrayList(m10.size());
                for (Map.Entry entry : m10.entrySet()) {
                    arrayList.add(((String) entry.getKey()) + "=" + ((String) entry.getValue()));
                }
                this.this$0.handleSamsungCallback(this.$client.a(new Request.Builder().h(RequestBody.Companion.b(CollectionsKt.x0(arrayList, "&", null, null, 0, null, null, 62, null), MediaType.f44213e.b("application/x-www-form-urlencoded"))).l(queryParameter).b()).execute());
                SamsungModule.resolveConnection$default(this.this$0, null, 1, null);
                return Unit.f33074a;
            }
            throw new SamsungModule.Companion.SamsungCallbackException("no_redirect_uri", "No redirect uri returned from GET /callback");
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((SamsungModule$finishSamsungAuthorization$1$1$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
