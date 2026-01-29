package com.facebook.react.modules.network;

import android.net.Uri;
import android.os.Bundle;
import android.util.Base64;
import androidx.recyclerview.widget.h;
import com.facebook.fbreact.specs.NativeNetworkingAndroidSpec;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.network.OkHttpCallUtil;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.network.NetworkingModule;
import ir.c;
import iu.m;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import okhttp3.Call;
import okhttp3.CookieJar;
import okhttp3.Headers;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import tt.b;
import tt.i;
@ReactModule(name = "Networking")
@Metadata(d1 = {"\u0000\u009e\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010#\n\u0002\u0010\b\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0012\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u0000 `2\u00020\u0001:\u0005\\]^_`B1\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u000e\u0010\b\u001a\n\u0012\u0004\u0012\u00020\n\u0018\u00010\t¢\u0006\u0004\b\u000b\u0010\fB#\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\u000b\u0010\u000eB\u0011\b\u0016\u0012\u0006\u0010\r\u001a\u00020\u0003¢\u0006\u0004\b\u000b\u0010\u000fB!\b\u0016\u0012\u0006\u0010\r\u001a\u00020\u0003\u0012\u000e\u0010\b\u001a\n\u0012\u0004\u0012\u00020\n\u0018\u00010\t¢\u0006\u0004\b\u000b\u0010\u0010B\u001b\b\u0016\u0012\u0006\u0010\r\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u000b\u0010\u0011J\b\u0010\"\u001a\u00020#H\u0016J\b\u0010$\u001a\u00020#H\u0016J\u0015\u0010%\u001a\u00020#2\u0006\u0010&\u001a\u00020\u001dH\u0000¢\u0006\u0002\b'J\u0015\u0010(\u001a\u00020#2\u0006\u0010&\u001a\u00020\u001bH\u0000¢\u0006\u0002\b)J\u0015\u0010*\u001a\u00020#2\u0006\u0010&\u001a\u00020\u001fH\u0000¢\u0006\u0002\b+J\u0015\u0010,\u001a\u00020#2\u0006\u0010&\u001a\u00020\u001dH\u0000¢\u0006\u0002\b-J\u0015\u0010.\u001a\u00020#2\u0006\u0010&\u001a\u00020\u001bH\u0000¢\u0006\u0002\b/J\u0015\u00100\u001a\u00020#2\u0006\u0010&\u001a\u00020\u001fH\u0000¢\u0006\u0002\b1JT\u00102\u001a\u00020#2\u0006\u00103\u001a\u00020\u00052\u0006\u00104\u001a\u00020\u00052\u0006\u00105\u001a\u0002062\b\u00107\u001a\u0004\u0018\u0001082\b\u00109\u001a\u0004\u0018\u00010:2\u0006\u0010;\u001a\u00020\u00052\u0006\u0010<\u001a\u00020!2\u0006\u0010=\u001a\u0002062\u0006\u0010>\u001a\u00020!H\u0016JT\u0010?\u001a\u00020#2\u0006\u00103\u001a\u00020\u00052\b\u00104\u001a\u0004\u0018\u00010\u00052\u0006\u0010@\u001a\u00020\u00182\b\u00107\u001a\u0004\u0018\u0001082\b\u00109\u001a\u0004\u0018\u00010:2\u0006\u0010;\u001a\u00020\u00052\u0006\u0010<\u001a\u00020!2\u0006\u0010A\u001a\u00020\u00182\u0006\u0010>\u001a\u00020!J\u001c\u0010B\u001a\u0004\u0018\u00010C2\b\u0010D\u001a\u0004\u0018\u00010C2\u0006\u0010@\u001a\u00020\u0018H\u0002J\u0018\u0010E\u001a\u00020#2\u0006\u0010@\u001a\u00020\u00182\u0006\u0010F\u001a\u00020GH\u0002J\u0010\u0010H\u001a\u00020#2\u0006\u0010@\u001a\u00020\u0018H\u0002J\u0010\u0010I\u001a\u00020#2\u0006\u0010@\u001a\u00020\u0018H\u0002J\b\u0010J\u001a\u00020#H\u0002J\u0010\u0010K\u001a\u00020#2\u0006\u00105\u001a\u000206H\u0016J\u0010\u0010L\u001a\u00020#2\u0006\u0010@\u001a\u00020\u0018H\u0002J\u0010\u0010M\u001a\u00020#2\u0006\u0010N\u001a\u00020OH\u0017J\u0012\u0010P\u001a\u00020#2\b\u0010Q\u001a\u0004\u0018\u00010\u0005H\u0016J\u0010\u0010R\u001a\u00020#2\u0006\u0010S\u001a\u000206H\u0016J\"\u0010T\u001a\u0004\u0018\u00010U2\u0006\u0010V\u001a\u0002082\u0006\u0010W\u001a\u00020\u00052\u0006\u0010@\u001a\u00020\u0018H\u0002J\u001e\u0010X\u001a\u0004\u0018\u00010Y2\b\u0010Z\u001a\u0004\u0018\u0001082\b\u0010[\u001a\u0004\u0018\u00010:H\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0013X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0015X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00180\u0017X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u001b0\u001aX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u001d0\u001aX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\u001f0\u001aX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010 \u001a\u00020!X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006a"}, d2 = {"Lcom/facebook/react/modules/network/NetworkingModule;", "Lcom/facebook/fbreact/specs/NativeNetworkingAndroidSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "defaultUserAgent", "", "client", "Lokhttp3/OkHttpClient;", "networkInterceptorCreators", "", "Lcom/facebook/react/modules/network/NetworkInterceptorCreator;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;Ljava/lang/String;Lokhttp3/OkHttpClient;Ljava/util/List;)V", "context", "(Lcom/facebook/react/bridge/ReactApplicationContext;Ljava/lang/String;Lokhttp3/OkHttpClient;)V", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "(Lcom/facebook/react/bridge/ReactApplicationContext;Ljava/util/List;)V", "(Lcom/facebook/react/bridge/ReactApplicationContext;Ljava/lang/String;)V", "cookieHandler", "Lcom/facebook/react/modules/network/ForwardingCookieHandler;", "cookieJarContainer", "Lcom/facebook/react/modules/network/CookieJarContainer;", "requestIds", "", "", "requestBodyHandlers", "", "Lcom/facebook/react/modules/network/NetworkingModule$RequestBodyHandler;", "uriHandlers", "Lcom/facebook/react/modules/network/NetworkingModule$UriHandler;", "responseHandlers", "Lcom/facebook/react/modules/network/NetworkingModule$ResponseHandler;", "shuttingDown", "", "initialize", "", "invalidate", "addUriHandler", "handler", "addUriHandler$ReactAndroid_release", "addRequestBodyHandler", "addRequestBodyHandler$ReactAndroid_release", "addResponseHandler", "addResponseHandler$ReactAndroid_release", "removeUriHandler", "removeUriHandler$ReactAndroid_release", "removeRequestBodyHandler", "removeRequestBodyHandler$ReactAndroid_release", "removeResponseHandler", "removeResponseHandler$ReactAndroid_release", "sendRequest", "method", "url", "requestIdAsDouble", "", "headers", "Lcom/facebook/react/bridge/ReadableArray;", "data", "Lcom/facebook/react/bridge/ReadableMap;", "responseType", "useIncrementalUpdates", "timeoutAsDouble", "withCredentials", "sendRequestInternal", "requestId", "timeout", "wrapRequestBodyWithProgressEmitter", "Lokhttp3/RequestBody;", "requestBody", "readWithProgress", "responseBody", "Lokhttp3/ResponseBody;", "addRequest", "removeRequest", "cancelAllRequests", "abortRequest", "cancelRequest", "clearCookies", "callback", "Lcom/facebook/react/bridge/Callback;", "addListener", "eventName", "removeListeners", "count", "constructMultipartBody", "Lokhttp3/MultipartBody$Builder;", "body", "contentType", "extractHeaders", "Lokhttp3/Headers;", "headersArray", "requestData", "UriHandler", "RequestBodyHandler", "ResponseHandler", "CustomClientBuilder", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNetworkingModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NetworkingModule.kt\ncom/facebook/react/modules/network/NetworkingModule\n+ 2 OkHttpClient.kt\nokhttp3/OkHttpClient$Builder\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,847:1\n578#2:848\n1#3:849\n*S KotlinDebug\n*F\n+ 1 NetworkingModule.kt\ncom/facebook/react/modules/network/NetworkingModule\n*L\n296#1:848\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NetworkingModule extends NativeNetworkingAndroidSpec {
    private static final int CHUNK_TIMEOUT_NS = 100000000;
    @NotNull
    private static final String CONTENT_ENCODING_HEADER_NAME = "content-encoding";
    @NotNull
    private static final String CONTENT_TYPE_HEADER_NAME = "content-type";
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int MAX_CHUNK_SIZE_BETWEEN_FLUSHES = 8192;
    @NotNull
    public static final String NAME = "Networking";
    @NotNull
    private static final String REQUEST_BODY_KEY_BASE64 = "base64";
    @NotNull
    private static final String REQUEST_BODY_KEY_FORMDATA = "formData";
    @NotNull
    private static final String REQUEST_BODY_KEY_STRING = "string";
    @NotNull
    private static final String REQUEST_BODY_KEY_URI = "uri";
    @NotNull
    private static final String TAG = "Networking";
    @NotNull
    private static final String USER_AGENT_HEADER_NAME = "user-agent";
    private static com.facebook.react.modules.network.CustomClientBuilder customClientBuilder;
    @NotNull
    private final OkHttpClient client;
    @NotNull
    private final ForwardingCookieHandler cookieHandler;
    private CookieJarContainer cookieJarContainer;
    private final String defaultUserAgent;
    @NotNull
    private final List<RequestBodyHandler> requestBodyHandlers;
    @NotNull
    private final Set<Integer> requestIds;
    @NotNull
    private final List<ResponseHandler> responseHandlers;
    private boolean shuttingDown;
    @NotNull
    private final List<UriHandler> uriHandlers;

    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0012H\u0007J\u0010\u0010\u0016\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0018H\u0002J\u0018\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001cH\u0002J\u0010\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020!H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u0010\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\""}, d2 = {"Lcom/facebook/react/modules/network/NetworkingModule$Companion;", "", "<init>", "()V", "NAME", "", "TAG", "CONTENT_ENCODING_HEADER_NAME", "CONTENT_TYPE_HEADER_NAME", "REQUEST_BODY_KEY_STRING", "REQUEST_BODY_KEY_URI", "REQUEST_BODY_KEY_FORMDATA", "REQUEST_BODY_KEY_BASE64", "USER_AGENT_HEADER_NAME", "CHUNK_TIMEOUT_NS", "", "MAX_CHUNK_SIZE_BETWEEN_FLUSHES", "customClientBuilder", "Lcom/facebook/react/modules/network/CustomClientBuilder;", "setCustomClientBuilder", "", "ccb", "applyCustomBuilder", "builder", "Lokhttp3/OkHttpClient$Builder;", "shouldDispatch", "", "now", "", "last", "translateHeaders", "Lcom/facebook/react/bridge/WritableMap;", "headers", "Lokhttp3/Headers;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void applyCustomBuilder(OkHttpClient.Builder builder) {
            com.facebook.react.modules.network.CustomClientBuilder customClientBuilder = NetworkingModule.customClientBuilder;
            if (customClientBuilder != null) {
                customClientBuilder.apply(builder);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean shouldDispatch(long j10, long j11) {
            return j11 + ((long) NetworkingModule.CHUNK_TIMEOUT_NS) < j10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final WritableMap translateHeaders(Headers headers) {
            Bundle bundle = new Bundle();
            int b10 = headers.b();
            for (int i10 = 0; i10 < b10; i10++) {
                String e10 = headers.e(i10);
                if (bundle.containsKey(e10)) {
                    String string = bundle.getString(e10);
                    String j10 = headers.j(i10);
                    bundle.putString(e10, string + ", " + j10);
                } else {
                    bundle.putString(e10, headers.j(i10));
                }
            }
            WritableMap fromBundle = Arguments.fromBundle(bundle);
            Intrinsics.checkNotNullExpressionValue(fromBundle, "fromBundle(...)");
            return fromBundle;
        }

        public final void setCustomClientBuilder(com.facebook.react.modules.network.CustomClientBuilder customClientBuilder) {
            NetworkingModule.customClientBuilder = customClientBuilder;
        }

        private Companion() {
        }
    }

    @c
    @Metadata(d1 = {"\u0000\n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bg\u0018\u00002\u00020\u0001ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0002À\u0006\u0001"}, d2 = {"Lcom/facebook/react/modules/network/NetworkingModule$CustomClientBuilder;", "Lcom/facebook/react/modules/network/CustomClientBuilder;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface CustomClientBuilder extends com.facebook.react.modules.network.CustomClientBuilder {
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b`\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&J\u001c\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\u0004\u001a\u00020\u00052\b\u0010\b\u001a\u0004\u0018\u00010\tH&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\nÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/modules/network/NetworkingModule$RequestBodyHandler;", "", "supports", "", "map", "Lcom/facebook/react/bridge/ReadableMap;", "toRequestBody", "Lokhttp3/RequestBody;", "contentType", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface RequestBodyHandler {
        boolean supports(@NotNull ReadableMap readableMap);

        RequestBody toRequestBody(@NotNull ReadableMap readableMap, String str);
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b`\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\nÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/modules/network/NetworkingModule$ResponseHandler;", "", "supports", "", "responseType", "", "toResponseData", "Lcom/facebook/react/bridge/WritableMap;", "body", "Lokhttp3/ResponseBody;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ResponseHandler {
        boolean supports(@NotNull String str);

        @NotNull
        WritableMap toResponseData(@NotNull ResponseBody responseBody);
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b`\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\u0004\u001a\u00020\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\nÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/modules/network/NetworkingModule$UriHandler;", "", "supports", "", NetworkingModule.REQUEST_BODY_KEY_URI, "Landroid/net/Uri;", "responseType", "", "fetch", "Lcom/facebook/react/bridge/WritableMap;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface UriHandler {
        @NotNull
        WritableMap fetch(@NotNull Uri uri);

        boolean supports(@NotNull Uri uri, @NotNull String str);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public NetworkingModule(@NotNull ReactApplicationContext reactContext, String str, @NotNull OkHttpClient client, List<? extends NetworkInterceptorCreator> list) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(client, "client");
        this.cookieHandler = new ForwardingCookieHandler();
        this.requestIds = new HashSet();
        this.requestBodyHandlers = new ArrayList();
        this.uriHandlers = new ArrayList();
        this.responseHandlers = new ArrayList();
        if (list != null) {
            OkHttpClient.Builder D = client.D();
            for (NetworkInterceptorCreator networkInterceptorCreator : list) {
                D.b(networkInterceptorCreator.create());
            }
            client = D.c();
        }
        this.client = client;
        CookieJar c10 = client.c();
        this.cookieJarContainer = c10 instanceof CookieJarContainer ? (CookieJarContainer) c10 : null;
        this.defaultUserAgent = str;
    }

    private final synchronized void addRequest(int i10) {
        this.requestIds.add(Integer.valueOf(i10));
    }

    private final synchronized void cancelAllRequests() {
        try {
            for (Integer num : this.requestIds) {
                cancelRequest(num.intValue());
            }
            this.requestIds.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private final void cancelRequest(int i10) {
        OkHttpCallUtil.cancelTag(this.client, Integer.valueOf(i10));
    }

    private final MultipartBody.Builder constructMultipartBody(ReadableArray readableArray, String str, int i10) {
        MediaType mediaType;
        ReactApplicationContext reactApplicationContextIfActiveOrWarn = getReactApplicationContextIfActiveOrWarn();
        MultipartBody.Builder builder = new MultipartBody.Builder(null, 1, null);
        MediaType a10 = MediaType.f44069e.a(str);
        if (a10 == null) {
            ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Invalid media type.", null);
            return null;
        }
        builder.e(a10);
        int size = readableArray.size();
        for (int i11 = 0; i11 < size; i11++) {
            ReadableMap map = readableArray.getMap(i11);
            if (map == null) {
                ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Unrecognized FormData part.", null);
                return null;
            }
            Headers extractHeaders = extractHeaders(map.getArray("headers"), null);
            if (extractHeaders == null) {
                ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Missing or invalid header format for FormData part.", null);
                return null;
            }
            String c10 = extractHeaders.c(CONTENT_TYPE_HEADER_NAME);
            if (c10 != null) {
                mediaType = MediaType.f44069e.a(c10);
                extractHeaders = extractHeaders.g().i(CONTENT_TYPE_HEADER_NAME).f();
            } else {
                mediaType = null;
            }
            if (map.hasKey("string") && map.getString("string") != null) {
                String string = map.getString("string");
                if (string == null) {
                    string = "";
                }
                builder.b(extractHeaders, RequestBody.Companion.d(mediaType, string));
            } else if (map.hasKey(REQUEST_BODY_KEY_URI) && map.getString(REQUEST_BODY_KEY_URI) != null) {
                if (mediaType == null) {
                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Binary FormData part needs a content-type header.", null);
                    return null;
                }
                String string2 = map.getString(REQUEST_BODY_KEY_URI);
                if (string2 == null) {
                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Body must have a valid file uri", null);
                    return null;
                }
                ReactApplicationContext reactApplicationContext = getReactApplicationContext();
                Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
                InputStream fileInputStream = RequestBodyUtil.getFileInputStream(reactApplicationContext, string2);
                if (fileInputStream == null) {
                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Could not retrieve file for uri " + string2, null);
                    return null;
                }
                builder.b(extractHeaders, RequestBodyUtil.create(mediaType, fileInputStream));
            } else {
                ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Unrecognized FormData part.", null);
                Unit unit = Unit.f33282a;
            }
        }
        return builder;
    }

    private final Headers extractHeaders(ReadableArray readableArray, ReadableMap readableMap) {
        String str;
        if (readableArray == null) {
            return null;
        }
        Headers.a aVar = new Headers.a();
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            ReadableArray array = readableArray.getArray(i10);
            if (array != null && array.size() == 2) {
                String string = array.getString(0);
                if (string != null) {
                    string = HeaderUtil.Companion.stripHeaderName(string);
                }
                String string2 = array.getString(1);
                if (string != null && string2 != null) {
                    aVar.e(string, string2);
                }
            }
            return null;
        }
        if (aVar.g(USER_AGENT_HEADER_NAME) == null && (str = this.defaultUserAgent) != null) {
            aVar.a(USER_AGENT_HEADER_NAME, str);
        }
        if (readableMap == null || !readableMap.hasKey("string")) {
            aVar.i(CONTENT_ENCODING_HEADER_NAME);
        }
        return aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void readWithProgress(int i10, ResponseBody responseBody) {
        long j10;
        Charset charset;
        long j11 = -1;
        try {
            Intrinsics.checkNotNull(responseBody, "null cannot be cast to non-null type com.facebook.react.modules.network.ProgressResponseBody");
            ProgressResponseBody progressResponseBody = (ProgressResponseBody) responseBody;
            j10 = progressResponseBody.totalBytesRead();
            try {
                j11 = progressResponseBody.contentLength();
            } catch (ClassCastException unused) {
            }
        } catch (ClassCastException unused2) {
            j10 = -1;
        }
        long j12 = j11;
        long j13 = j10;
        if (responseBody.contentType() == null) {
            charset = StandardCharsets.UTF_8;
        } else {
            MediaType contentType = responseBody.contentType();
            if (contentType != null) {
                charset = contentType.c(StandardCharsets.UTF_8);
            } else {
                charset = null;
            }
            if (charset == null) {
                throw new IllegalStateException(("Null character set for Content-Type: " + responseBody.contentType()).toString());
            }
        }
        Intrinsics.checkNotNull(charset);
        ProgressiveStringDecoder progressiveStringDecoder = new ProgressiveStringDecoder(charset);
        InputStream byteStream = responseBody.byteStream();
        try {
            byte[] bArr = new byte[MAX_CHUNK_SIZE_BETWEEN_FLUSHES];
            ReactApplicationContext reactApplicationContextIfActiveOrWarn = getReactApplicationContextIfActiveOrWarn();
            while (true) {
                int read = byteStream.read(bArr);
                if (read != -1) {
                    int i11 = i10;
                    ResponseUtil.onIncrementalDataReceived(reactApplicationContextIfActiveOrWarn, i11, progressiveStringDecoder.decodeNext(bArr, read), j13, j12);
                    i10 = i11;
                } else {
                    return;
                }
            }
        } finally {
            byteStream.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void removeRequest(int i10) {
        this.requestIds.remove(Integer.valueOf(i10));
    }

    public static final void setCustomClientBuilder(com.facebook.react.modules.network.CustomClientBuilder customClientBuilder2) {
        Companion.setCustomClientBuilder(customClientBuilder2);
    }

    private final RequestBody wrapRequestBodyWithProgressEmitter(RequestBody requestBody, final int i10) {
        if (requestBody == null) {
            return null;
        }
        final ReactApplicationContext reactApplicationContextIfActiveOrWarn = getReactApplicationContextIfActiveOrWarn();
        return RequestBodyUtil.createProgressRequest(requestBody, new ProgressListener() { // from class: com.facebook.react.modules.network.NetworkingModule$wrapRequestBodyWithProgressEmitter$1
            private long last = System.nanoTime();

            public final long getLast() {
                return this.last;
            }

            @Override // com.facebook.react.modules.network.ProgressListener
            public void onProgress(long j10, long j11, boolean z10) {
                boolean shouldDispatch;
                long nanoTime = System.nanoTime();
                if (!z10) {
                    shouldDispatch = NetworkingModule.Companion.shouldDispatch(nanoTime, this.last);
                    if (!shouldDispatch) {
                        return;
                    }
                }
                ResponseUtil.onDataSend(ReactApplicationContext.this, i10, j10, j11);
                this.last = nanoTime;
            }

            public final void setLast(long j10) {
                this.last = j10;
            }
        });
    }

    @Override // com.facebook.fbreact.specs.NativeNetworkingAndroidSpec
    public void abortRequest(double d10) {
        int i10 = (int) d10;
        cancelRequest(i10);
        removeRequest(i10);
    }

    @Override // com.facebook.fbreact.specs.NativeNetworkingAndroidSpec
    public void addListener(String str) {
    }

    public final void addRequestBodyHandler$ReactAndroid_release(@NotNull RequestBodyHandler handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.requestBodyHandlers.add(handler);
    }

    public final void addResponseHandler$ReactAndroid_release(@NotNull ResponseHandler handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.responseHandlers.add(handler);
    }

    public final void addUriHandler$ReactAndroid_release(@NotNull UriHandler handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.uriHandlers.add(handler);
    }

    @Override // com.facebook.fbreact.specs.NativeNetworkingAndroidSpec
    @ReactMethod
    public void clearCookies(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.cookieHandler.clearCookies(callback);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        CookieJarContainer cookieJarContainer = this.cookieJarContainer;
        if (cookieJarContainer != null) {
            cookieJarContainer.setCookieJar(new i(this.cookieHandler));
        }
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        this.shuttingDown = true;
        cancelAllRequests();
        this.cookieHandler.destroy();
        CookieJarContainer cookieJarContainer = this.cookieJarContainer;
        if (cookieJarContainer != null) {
            cookieJarContainer.removeCookieJar();
        }
        this.requestBodyHandlers.clear();
        this.responseHandlers.clear();
        this.uriHandlers.clear();
    }

    @Override // com.facebook.fbreact.specs.NativeNetworkingAndroidSpec
    public void removeListeners(double d10) {
    }

    public final void removeRequestBodyHandler$ReactAndroid_release(@NotNull RequestBodyHandler handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.requestBodyHandlers.remove(handler);
    }

    public final void removeResponseHandler$ReactAndroid_release(@NotNull ResponseHandler handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.responseHandlers.remove(handler);
    }

    public final void removeUriHandler$ReactAndroid_release(@NotNull UriHandler handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.uriHandlers.remove(handler);
    }

    @Override // com.facebook.fbreact.specs.NativeNetworkingAndroidSpec
    public void sendRequest(@NotNull String method, @NotNull String url, double d10, ReadableArray readableArray, ReadableMap readableMap, @NotNull String responseType, boolean z10, double d11, boolean z11) {
        Intrinsics.checkNotNullParameter(method, "method");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(responseType, "responseType");
        int i10 = (int) d10;
        try {
            sendRequestInternal(method, url, i10, readableArray, readableMap, responseType, z10, (int) d11, z11);
        } catch (Throwable th2) {
            p8.a.n("Networking", "Failed to send url request: " + url, th2);
            ResponseUtil.onRequestError(getReactApplicationContextIfActiveOrWarn(), i10, th2.getMessage(), th2);
        }
    }

    public final void sendRequestInternal(@NotNull String method, String str, final int i10, ReadableArray readableArray, ReadableMap readableMap, @NotNull final String responseType, final boolean z10, int i11, boolean z11) {
        RequestBodyHandler requestBodyHandler;
        RequestBody emptyBody;
        Charset c10;
        String str2 = str;
        Intrinsics.checkNotNullParameter(method, "method");
        Intrinsics.checkNotNullParameter(responseType, "responseType");
        final ReactApplicationContext reactApplicationContextIfActiveOrWarn = getReactApplicationContextIfActiveOrWarn();
        try {
            Uri parse = Uri.parse(str2);
            for (UriHandler uriHandler : this.uriHandlers) {
                Intrinsics.checkNotNull(parse);
                if (uriHandler.supports(parse, responseType)) {
                    WritableMap fetch = uriHandler.fetch(parse);
                    ResponseUtil.onResponseReceived(reactApplicationContextIfActiveOrWarn, i10, h.DEFAULT_DRAG_ANIMATION_DURATION, Arguments.createMap(), str2);
                    ResponseUtil.onDataReceived(reactApplicationContextIfActiveOrWarn, i10, fetch);
                    ResponseUtil.onRequestSuccess(reactApplicationContextIfActiveOrWarn, i10);
                    return;
                }
            }
            try {
                Request.Builder builder = new Request.Builder();
                if (str2 == null) {
                    str2 = "";
                }
                Request.Builder l10 = builder.l(str2);
                if (i10 != 0) {
                    l10.k(Integer.valueOf(i10));
                }
                OkHttpClient.Builder D = this.client.D();
                Companion.applyCustomBuilder(D);
                if (!z11) {
                    D.g(CookieJar.f44036b);
                }
                if (z10) {
                    D.b(new Interceptor() { // from class: com.facebook.react.modules.network.NetworkingModule$sendRequestInternal$$inlined$-addNetworkInterceptor$1
                        @Override // okhttp3.Interceptor
                        @NotNull
                        public final Response intercept(@NotNull Interceptor.Chain chain) {
                            Intrinsics.checkNotNullParameter(chain, "chain");
                            Response a10 = chain.a(chain.h());
                            ResponseBody a11 = a10.a();
                            if (a11 != null) {
                                final String str3 = responseType;
                                final ReactApplicationContext reactApplicationContext = reactApplicationContextIfActiveOrWarn;
                                final int i12 = i10;
                                return a10.M0().b(new ProgressResponseBody(a11, new ProgressListener() { // from class: com.facebook.react.modules.network.NetworkingModule$sendRequestInternal$1$responseBody$1
                                    private long last = System.nanoTime();

                                    public final long getLast() {
                                        return this.last;
                                    }

                                    @Override // com.facebook.react.modules.network.ProgressListener
                                    public void onProgress(long j10, long j11, boolean z12) {
                                        boolean shouldDispatch;
                                        long nanoTime = System.nanoTime();
                                        if (!z12) {
                                            shouldDispatch = NetworkingModule.Companion.shouldDispatch(nanoTime, this.last);
                                            if (!shouldDispatch) {
                                                return;
                                            }
                                        }
                                        if (Intrinsics.areEqual(str3, "text")) {
                                            return;
                                        }
                                        ResponseUtil.onDataReceivedProgress(reactApplicationContext, i12, j10, j11);
                                        this.last = nanoTime;
                                    }

                                    public final void setLast(long j10) {
                                        this.last = j10;
                                    }
                                })).c();
                            }
                            throw new IllegalStateException("Required value was null.");
                        }
                    });
                }
                if (i11 != this.client.b()) {
                    D.e(i11, TimeUnit.MILLISECONDS);
                }
                OkHttpClient c11 = D.c();
                Headers extractHeaders = extractHeaders(readableArray, readableMap);
                if (extractHeaders == null) {
                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Unrecognized headers format", null);
                    return;
                }
                String c12 = extractHeaders.c(CONTENT_TYPE_HEADER_NAME);
                String c13 = extractHeaders.c(CONTENT_ENCODING_HEADER_NAME);
                l10.f(extractHeaders);
                if (readableMap != null) {
                    Iterator<RequestBodyHandler> it = this.requestBodyHandlers.iterator();
                    while (it.hasNext()) {
                        requestBodyHandler = it.next();
                        if (requestBodyHandler.supports(readableMap)) {
                            break;
                        }
                    }
                }
                requestBodyHandler = null;
                if (readableMap != null) {
                    Locale locale = Locale.ROOT;
                    String lowerCase = method.toLowerCase(locale);
                    Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
                    if (!Intrinsics.areEqual(lowerCase, "get")) {
                        String lowerCase2 = method.toLowerCase(locale);
                        Intrinsics.checkNotNullExpressionValue(lowerCase2, "toLowerCase(...)");
                        if (!Intrinsics.areEqual(lowerCase2, "head")) {
                            if (requestBodyHandler != null) {
                                emptyBody = requestBodyHandler.toRequestBody(readableMap, c12);
                            } else if (readableMap.hasKey("string")) {
                                if (c12 == null) {
                                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Payload is set but no content-type header specified", null);
                                    return;
                                }
                                String string = readableMap.getString("string");
                                MediaType a10 = MediaType.f44069e.a(c12);
                                if (RequestBodyUtil.isGzipEncoding(c13)) {
                                    if (a10 != null && string != null) {
                                        emptyBody = RequestBodyUtil.createGzip(a10, string);
                                    } else {
                                        emptyBody = null;
                                    }
                                    if (emptyBody == null) {
                                        ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Failed to gzip request body", null);
                                        return;
                                    }
                                } else {
                                    if (a10 == null) {
                                        c10 = StandardCharsets.UTF_8;
                                    } else {
                                        c10 = a10.c(StandardCharsets.UTF_8);
                                        if (c10 == null) {
                                            throw new IllegalStateException("Required value was null.");
                                        }
                                    }
                                    if (string == null) {
                                        ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Received request but body was empty", null);
                                        return;
                                    }
                                    RequestBody.Companion companion = RequestBody.Companion;
                                    Intrinsics.checkNotNull(c10);
                                    byte[] bytes = string.getBytes(c10);
                                    Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
                                    emptyBody = RequestBody.Companion.o(companion, a10, bytes, 0, 0, 12, null);
                                }
                            } else if (readableMap.hasKey(REQUEST_BODY_KEY_BASE64)) {
                                if (c12 == null) {
                                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Payload is set but no content-type header specified", null);
                                    return;
                                }
                                String string2 = readableMap.getString(REQUEST_BODY_KEY_BASE64);
                                if (string2 != null) {
                                    MediaType a11 = MediaType.f44069e.a(c12);
                                    if (a11 == null) {
                                        ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Invalid content type specified: " + c12, null);
                                        return;
                                    }
                                    ByteString a12 = ByteString.f44363o.a(string2);
                                    if (a12 == null) {
                                        ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Request body base64 string was invalid", null);
                                        return;
                                    }
                                    emptyBody = RequestBody.Companion.e(a11, a12);
                                } else {
                                    throw new IllegalStateException("Required value was null.");
                                }
                            } else if (readableMap.hasKey(REQUEST_BODY_KEY_URI)) {
                                if (c12 == null) {
                                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Payload is set but no content-type header specified", null);
                                    return;
                                }
                                String string3 = readableMap.getString(REQUEST_BODY_KEY_URI);
                                if (string3 == null) {
                                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Request body URI field was set but null", null);
                                    return;
                                }
                                ReactApplicationContext reactApplicationContext = getReactApplicationContext();
                                Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
                                InputStream fileInputStream = RequestBodyUtil.getFileInputStream(reactApplicationContext, string3);
                                if (fileInputStream == null) {
                                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Could not retrieve file for uri " + string3, null);
                                    return;
                                }
                                emptyBody = RequestBodyUtil.create(MediaType.f44069e.a(c12), fileInputStream);
                            } else if (readableMap.hasKey(REQUEST_BODY_KEY_FORMDATA)) {
                                if (c12 == null) {
                                    c12 = "multipart/form-data";
                                }
                                ReadableArray array = readableMap.getArray(REQUEST_BODY_KEY_FORMDATA);
                                if (array == null) {
                                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Received request but form data was empty", null);
                                    return;
                                }
                                MultipartBody.Builder constructMultipartBody = constructMultipartBody(array, c12, i10);
                                if (constructMultipartBody == null) {
                                    return;
                                }
                                emptyBody = constructMultipartBody.d();
                            } else {
                                emptyBody = RequestBodyUtil.getEmptyBody(method);
                            }
                            l10.g(method, wrapRequestBodyWithProgressEmitter(emptyBody, i10));
                            addRequest(i10);
                            c11.a(l10.b()).C0(new b() { // from class: com.facebook.react.modules.network.NetworkingModule$sendRequestInternal$2
                                @Override // tt.b
                                public void onFailure(Call call, IOException e10) {
                                    boolean z12;
                                    Intrinsics.checkNotNullParameter(call, "call");
                                    Intrinsics.checkNotNullParameter(e10, "e");
                                    z12 = NetworkingModule.this.shuttingDown;
                                    if (!z12) {
                                        NetworkingModule.this.removeRequest(i10);
                                        String message = e10.getMessage();
                                        if (message == null) {
                                            message = "Error while executing request: " + e10.getClass().getSimpleName();
                                        }
                                        ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, message, e10);
                                    }
                                }

                                @Override // tt.b
                                public void onResponse(Call call, Response response) {
                                    boolean z12;
                                    WritableMap translateHeaders;
                                    List<NetworkingModule.ResponseHandler> list;
                                    Intrinsics.checkNotNullParameter(call, "call");
                                    Intrinsics.checkNotNullParameter(response, "response");
                                    z12 = NetworkingModule.this.shuttingDown;
                                    if (!z12) {
                                        NetworkingModule.this.removeRequest(i10);
                                        ReactApplicationContext reactApplicationContext2 = reactApplicationContextIfActiveOrWarn;
                                        int i12 = i10;
                                        int h10 = response.h();
                                        translateHeaders = NetworkingModule.Companion.translateHeaders(response.l());
                                        ResponseUtil.onResponseReceived(reactApplicationContext2, i12, h10, translateHeaders, response.n().b().toString());
                                        try {
                                            ResponseBody a13 = response.a();
                                            MediaType mediaType = null;
                                            if (a13 == null) {
                                                ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Response body is null", null);
                                                return;
                                            }
                                            if (StringsKt.A("gzip", Response.D0(response, "Content-Encoding", null, 2, null), true)) {
                                                m mVar = new m(a13.source());
                                                String D0 = Response.D0(response, "Content-Type", null, 2, null);
                                                if (D0 != null) {
                                                    mediaType = MediaType.f44069e.a(D0);
                                                }
                                                a13 = ResponseBody.Companion.b(mediaType, -1L, iu.b.a().b(mVar));
                                            }
                                            if (a13 != null) {
                                                list = NetworkingModule.this.responseHandlers;
                                                for (NetworkingModule.ResponseHandler responseHandler : list) {
                                                    if (responseHandler.supports(responseType)) {
                                                        ResponseUtil.onDataReceived(reactApplicationContextIfActiveOrWarn, i10, responseHandler.toResponseData(a13));
                                                        ResponseUtil.onRequestSuccess(reactApplicationContextIfActiveOrWarn, i10);
                                                        return;
                                                    }
                                                }
                                                if (z10 && Intrinsics.areEqual(responseType, "text")) {
                                                    NetworkingModule.this.readWithProgress(i10, a13);
                                                    ResponseUtil.onRequestSuccess(reactApplicationContextIfActiveOrWarn, i10);
                                                    return;
                                                }
                                                String str3 = "";
                                                if (Intrinsics.areEqual(responseType, "text")) {
                                                    try {
                                                        str3 = a13.string();
                                                    } catch (IOException e10) {
                                                        if (!StringsKt.A(response.n().a(), "HEAD", true)) {
                                                            ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, e10.getMessage(), e10);
                                                        }
                                                    }
                                                } else if (Intrinsics.areEqual(responseType, "base64")) {
                                                    str3 = Base64.encodeToString(a13.bytes(), 2);
                                                }
                                                ResponseUtil.onDataReceived(reactApplicationContextIfActiveOrWarn, i10, str3);
                                                ResponseUtil.onRequestSuccess(reactApplicationContextIfActiveOrWarn, i10);
                                                return;
                                            }
                                            throw new IllegalStateException("Required value was null.");
                                        } catch (IOException e11) {
                                            ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, e11.getMessage(), e11);
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
                emptyBody = RequestBodyUtil.getEmptyBody(method);
                l10.g(method, wrapRequestBodyWithProgressEmitter(emptyBody, i10));
                addRequest(i10);
                c11.a(l10.b()).C0(new b() { // from class: com.facebook.react.modules.network.NetworkingModule$sendRequestInternal$2
                    @Override // tt.b
                    public void onFailure(Call call, IOException e10) {
                        boolean z12;
                        Intrinsics.checkNotNullParameter(call, "call");
                        Intrinsics.checkNotNullParameter(e10, "e");
                        z12 = NetworkingModule.this.shuttingDown;
                        if (!z12) {
                            NetworkingModule.this.removeRequest(i10);
                            String message = e10.getMessage();
                            if (message == null) {
                                message = "Error while executing request: " + e10.getClass().getSimpleName();
                            }
                            ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, message, e10);
                        }
                    }

                    @Override // tt.b
                    public void onResponse(Call call, Response response) {
                        boolean z12;
                        WritableMap translateHeaders;
                        List<NetworkingModule.ResponseHandler> list;
                        Intrinsics.checkNotNullParameter(call, "call");
                        Intrinsics.checkNotNullParameter(response, "response");
                        z12 = NetworkingModule.this.shuttingDown;
                        if (!z12) {
                            NetworkingModule.this.removeRequest(i10);
                            ReactApplicationContext reactApplicationContext2 = reactApplicationContextIfActiveOrWarn;
                            int i12 = i10;
                            int h10 = response.h();
                            translateHeaders = NetworkingModule.Companion.translateHeaders(response.l());
                            ResponseUtil.onResponseReceived(reactApplicationContext2, i12, h10, translateHeaders, response.n().b().toString());
                            try {
                                ResponseBody a13 = response.a();
                                MediaType mediaType = null;
                                if (a13 == null) {
                                    ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, "Response body is null", null);
                                    return;
                                }
                                if (StringsKt.A("gzip", Response.D0(response, "Content-Encoding", null, 2, null), true)) {
                                    m mVar = new m(a13.source());
                                    String D0 = Response.D0(response, "Content-Type", null, 2, null);
                                    if (D0 != null) {
                                        mediaType = MediaType.f44069e.a(D0);
                                    }
                                    a13 = ResponseBody.Companion.b(mediaType, -1L, iu.b.a().b(mVar));
                                }
                                if (a13 != null) {
                                    list = NetworkingModule.this.responseHandlers;
                                    for (NetworkingModule.ResponseHandler responseHandler : list) {
                                        if (responseHandler.supports(responseType)) {
                                            ResponseUtil.onDataReceived(reactApplicationContextIfActiveOrWarn, i10, responseHandler.toResponseData(a13));
                                            ResponseUtil.onRequestSuccess(reactApplicationContextIfActiveOrWarn, i10);
                                            return;
                                        }
                                    }
                                    if (z10 && Intrinsics.areEqual(responseType, "text")) {
                                        NetworkingModule.this.readWithProgress(i10, a13);
                                        ResponseUtil.onRequestSuccess(reactApplicationContextIfActiveOrWarn, i10);
                                        return;
                                    }
                                    String str3 = "";
                                    if (Intrinsics.areEqual(responseType, "text")) {
                                        try {
                                            str3 = a13.string();
                                        } catch (IOException e10) {
                                            if (!StringsKt.A(response.n().a(), "HEAD", true)) {
                                                ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, e10.getMessage(), e10);
                                            }
                                        }
                                    } else if (Intrinsics.areEqual(responseType, "base64")) {
                                        str3 = Base64.encodeToString(a13.bytes(), 2);
                                    }
                                    ResponseUtil.onDataReceived(reactApplicationContextIfActiveOrWarn, i10, str3);
                                    ResponseUtil.onRequestSuccess(reactApplicationContextIfActiveOrWarn, i10);
                                    return;
                                }
                                throw new IllegalStateException("Required value was null.");
                            } catch (IOException e11) {
                                ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, e11.getMessage(), e11);
                            }
                        }
                    }
                });
            } catch (Exception e10) {
                ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, e10.getMessage(), null);
            }
        } catch (IOException e11) {
            ResponseUtil.onRequestError(reactApplicationContextIfActiveOrWarn, i10, e11.getMessage(), e11);
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public NetworkingModule(@NotNull ReactApplicationContext context, String str, @NotNull OkHttpClient client) {
        this(context, str, client, null);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(client, "client");
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public NetworkingModule(@org.jetbrains.annotations.NotNull com.facebook.react.bridge.ReactApplicationContext r3) {
        /*
            r2 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            android.content.Context r0 = r3.getApplicationContext()
            java.lang.String r1 = "getApplicationContext(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            okhttp3.OkHttpClient r0 = com.facebook.react.modules.network.OkHttpClientProvider.createClient(r0)
            r1 = 0
            r2.<init>(r3, r1, r0, r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.modules.network.NetworkingModule.<init>(com.facebook.react.bridge.ReactApplicationContext):void");
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public NetworkingModule(@org.jetbrains.annotations.NotNull com.facebook.react.bridge.ReactApplicationContext r3, java.util.List<? extends com.facebook.react.modules.network.NetworkInterceptorCreator> r4) {
        /*
            r2 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            android.content.Context r0 = r3.getApplicationContext()
            java.lang.String r1 = "getApplicationContext(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            okhttp3.OkHttpClient r0 = com.facebook.react.modules.network.OkHttpClientProvider.createClient(r0)
            r1 = 0
            r2.<init>(r3, r1, r0, r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.modules.network.NetworkingModule.<init>(com.facebook.react.bridge.ReactApplicationContext, java.util.List):void");
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public NetworkingModule(@org.jetbrains.annotations.NotNull com.facebook.react.bridge.ReactApplicationContext r3, java.lang.String r4) {
        /*
            r2 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            android.content.Context r0 = r3.getApplicationContext()
            java.lang.String r1 = "getApplicationContext(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            okhttp3.OkHttpClient r0 = com.facebook.react.modules.network.OkHttpClientProvider.createClient(r0)
            r1 = 0
            r2.<init>(r3, r4, r0, r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.modules.network.NetworkingModule.<init>(com.facebook.react.bridge.ReactApplicationContext, java.lang.String):void");
    }
}
