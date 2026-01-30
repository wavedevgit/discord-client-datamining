package com.facebook.react.devsupport.inspector;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import okhttp3.Call;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;
import tr.c;
import tt.b;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082.¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/facebook/react/devsupport/inspector/InspectorNetworkHelper;", "", "<init>", "()V", "client", "Lokhttp3/OkHttpClient;", "loadNetworkResource", "", "url", "", "listener", "Lcom/facebook/react/devsupport/inspector/InspectorNetworkRequestListener;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class InspectorNetworkHelper {
    @NotNull
    public static final InspectorNetworkHelper INSTANCE = new InspectorNetworkHelper();
    private static OkHttpClient client;

    private InspectorNetworkHelper() {
    }

    public static final void loadNetworkResource(@NotNull String url, @NotNull final InspectorNetworkRequestListener listener) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (client == null) {
            OkHttpClient.Builder builder = new OkHttpClient.Builder();
            TimeUnit timeUnit = TimeUnit.SECONDS;
            client = builder.f(10L, timeUnit).R(10L, timeUnit).Q(0L, TimeUnit.MINUTES).c();
        }
        try {
            Request b10 = new Request.Builder().l(url).b();
            OkHttpClient okHttpClient = client;
            if (okHttpClient == null) {
                Intrinsics.throwUninitializedPropertyAccessException("client");
                okHttpClient = null;
            }
            okHttpClient.a(b10).C0(new b() { // from class: com.facebook.react.devsupport.inspector.InspectorNetworkHelper$loadNetworkResource$1
                @Override // tt.b
                public void onFailure(Call call, IOException e10) {
                    Intrinsics.checkNotNullParameter(call, "call");
                    Intrinsics.checkNotNullParameter(e10, "e");
                    if (call.x()) {
                        return;
                    }
                    InspectorNetworkRequestListener.this.onError(e10.getMessage());
                }

                @Override // tt.b
                public void onResponse(Call call, Response response) {
                    Intrinsics.checkNotNullParameter(call, "call");
                    Intrinsics.checkNotNullParameter(response, "response");
                    Headers l10 = response.l();
                    HashMap hashMap = new HashMap();
                    for (String str : l10.f()) {
                        hashMap.put(str, l10.c(str));
                    }
                    InspectorNetworkRequestListener.this.onHeaders(response.h(), hashMap);
                    try {
                        ResponseBody a10 = response.a();
                        InspectorNetworkRequestListener inspectorNetworkRequestListener = InspectorNetworkRequestListener.this;
                        if (a10 != null) {
                            InputStream byteStream = a10.byteStream();
                            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                            while (true) {
                                int read = byteStream.read(bArr);
                                if (read == -1) {
                                    break;
                                }
                                inspectorNetworkRequestListener.onData(new String(bArr, 0, read, Charsets.UTF_8));
                            }
                            Unit unit = Unit.f33298a;
                            c.a(byteStream, null);
                        }
                        inspectorNetworkRequestListener.onCompletion();
                        Unit unit2 = Unit.f33298a;
                        c.a(a10, null);
                    } catch (IOException e10) {
                        InspectorNetworkRequestListener.this.onError(e10.getMessage());
                    }
                }
            });
        } catch (IllegalArgumentException unused) {
            listener.onError("Not a valid URL: " + url);
        }
    }
}
