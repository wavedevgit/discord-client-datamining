package com.facebook.react.modules.websocket;

import com.facebook.fbreact.specs.NativeWebSocketModuleSpec;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapBuilder;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.network.CustomClientBuilder;
import com.facebook.react.modules.network.ForwardingCookieHandler;
import com.facebook.react.modules.websocket.WebSocketModule;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import p8.a;
import tt.l;
@ReactModule(name = "WebSocketModule")
@Metadata(d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0007\u0018\u0000 72\u00020\u0001:\u0003567B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0014\u001a\u00020\u0015H\u0016J\u0018\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0002J\u0018\u0010\u001b\u001a\u00020\u00152\u0006\u0010\u001c\u001a\u00020\b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u000bJ,\u0010\u001e\u001a\u00020\u00152\u0006\u0010\u001f\u001a\u00020\u00182\b\u0010 \u001a\u0004\u0018\u00010!2\b\u0010\"\u001a\u0004\u0018\u00010\u001a2\u0006\u0010#\u001a\u00020$H\u0016J\"\u0010%\u001a\u00020\u00152\u0006\u0010&\u001a\u00020$2\b\u0010'\u001a\u0004\u0018\u00010\u00182\u0006\u0010#\u001a\u00020$H\u0016J\u0018\u0010(\u001a\u00020\u00152\u0006\u0010)\u001a\u00020\u00182\u0006\u0010#\u001a\u00020$H\u0016J\u0018\u0010*\u001a\u00020\u00152\u0006\u0010+\u001a\u00020\u00182\u0006\u0010#\u001a\u00020$H\u0016J\u0016\u0010*\u001a\u00020\u00152\u0006\u0010,\u001a\u00020-2\u0006\u0010\u001c\u001a\u00020\bJ\u0010\u0010.\u001a\u00020\u00152\u0006\u0010#\u001a\u00020$H\u0016J\u001a\u0010/\u001a\u00020\u00152\u0006\u0010\u001c\u001a\u00020\b2\b\u0010)\u001a\u0004\u0018\u00010\u0018H\u0002J\u0012\u00100\u001a\u0004\u0018\u00010\u00182\u0006\u00101\u001a\u00020\u0018H\u0002J\u0010\u00102\u001a\u00020\u00152\u0006\u0010\u0017\u001a\u00020\u0018H\u0016J\u0010\u00103\u001a\u00020\u00152\u0006\u00104\u001a\u00020$H\u0016R\u001a\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u000b0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u001c\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0011\"\u0004\b\u0012\u0010\u0013¨\u00068"}, d2 = {"Lcom/facebook/react/modules/websocket/WebSocketModule;", "Lcom/facebook/fbreact/specs/NativeWebSocketModuleSpec;", "context", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "webSocketConnections", "", "", "Lokhttp3/WebSocket;", "contentHandlers", "Lcom/facebook/react/modules/websocket/WebSocketModule$ContentHandler;", "cookieHandler", "Lcom/facebook/react/modules/network/ForwardingCookieHandler;", "mOnOpenHandler", "Lcom/facebook/react/modules/websocket/WebSocketModule$OnOpenHandler;", "getMOnOpenHandler", "()Lcom/facebook/react/modules/websocket/WebSocketModule$OnOpenHandler;", "setMOnOpenHandler", "(Lcom/facebook/react/modules/websocket/WebSocketModule$OnOpenHandler;)V", "invalidate", "", "sendEvent", "eventName", "", "params", "Lcom/facebook/react/bridge/ReadableMap;", "setContentHandler", StackTraceHelper.ID_KEY, "contentHandler", "connect", "url", "protocols", "Lcom/facebook/react/bridge/ReadableArray;", "options", "socketID", "", "close", "code", "reason", "send", "message", "sendBinary", "base64String", "byteString", "Lokio/ByteString;", "ping", "notifyWebSocketFailed", "getCookie", "uri", "addListener", "removeListeners", "count", "ContentHandler", "OnOpenHandler", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nWebSocketModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 WebSocketModule.kt\ncom/facebook/react/modules/websocket/WebSocketModule\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 ReadableMapBuilder.kt\ncom/facebook/react/bridge/ReadableMapBuilderKt\n*L\n1#1,418:1\n1#2:419\n30#3,3:420\n30#3,3:423\n30#3,3:426\n30#3,3:429\n30#3,3:432\n30#3,3:435\n30#3,3:438\n30#3,3:441\n30#3,3:444\n*S KotlinDebug\n*F\n+ 1 WebSocketModule.kt\ncom/facebook/react/modules/websocket/WebSocketModule\n*L\n235#1:420,3\n240#1:423,3\n262#1:426,3\n267#1:429,3\n289#1:432,3\n294#1:435,3\n316#1:438,3\n321#1:441,3\n339#1:444,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class WebSocketModule extends NativeWebSocketModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "WebSocketModule";
    private static CustomClientBuilder customClientBuilder;
    @NotNull
    private final Map<Integer, ContentHandler> contentHandlers;
    @NotNull
    private final ForwardingCookieHandler cookieHandler;
    private OnOpenHandler mOnOpenHandler;
    @NotNull
    private final Map<Integer, WebSocket> webSocketConnections;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u0007H\u0007J\u0010\u0010\u000b\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\rH\u0002J\u0010\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\u0005H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/facebook/react/modules/websocket/WebSocketModule$Companion;", "", "<init>", "()V", "NAME", "", "customClientBuilder", "Lcom/facebook/react/modules/network/CustomClientBuilder;", "setCustomClientBuilder", "", "ccb", "applyCustomBuilder", "builder", "Lokhttp3/OkHttpClient$Builder;", "getDefaultOrigin", "uri", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void applyCustomBuilder(OkHttpClient.Builder builder) {
            CustomClientBuilder customClientBuilder = WebSocketModule.customClientBuilder;
            if (customClientBuilder != null) {
                customClientBuilder.apply(builder);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x004b, code lost:
            if (r1.equals("ws") == false) goto L34;
         */
        /* JADX WARN: Removed duplicated region for block: B:31:0x0058 A[Catch: URISyntaxException -> 0x0092, TRY_ENTER, TryCatch #0 {URISyntaxException -> 0x0092, blocks: (B:2:0x0000, B:4:0x000b, B:14:0x0027, B:20:0x0035, B:28:0x004f, B:31:0x0058, B:33:0x0079, B:17:0x002e, B:21:0x003a, B:25:0x0045), top: B:37:0x0000 }] */
        /* JADX WARN: Removed duplicated region for block: B:33:0x0079 A[Catch: URISyntaxException -> 0x0092, TRY_LEAVE, TryCatch #0 {URISyntaxException -> 0x0092, blocks: (B:2:0x0000, B:4:0x000b, B:14:0x0027, B:20:0x0035, B:28:0x004f, B:31:0x0058, B:33:0x0079, B:17:0x002e, B:21:0x003a, B:25:0x0045), top: B:37:0x0000 }] */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.String getDefaultOrigin(java.lang.String r7) {
            /*
                r6 = this;
                java.net.URI r0 = new java.net.URI     // Catch: java.net.URISyntaxException -> L92
                r0.<init>(r7)     // Catch: java.net.URISyntaxException -> L92
                java.lang.String r1 = r0.getScheme()     // Catch: java.net.URISyntaxException -> L92
                if (r1 == 0) goto L4d
                int r2 = r1.hashCode()     // Catch: java.net.URISyntaxException -> L92
                r3 = 3804(0xedc, float:5.33E-42)
                java.lang.String r4 = "http"
                if (r2 == r3) goto L45
                r3 = 118039(0x1cd17, float:1.65408E-40)
                java.lang.String r5 = "https"
                if (r2 == r3) goto L3a
                r3 = 3213448(0x310888, float:4.503E-39)
                if (r2 == r3) goto L2e
                r3 = 99617003(0x5f008eb, float:2.2572767E-35)
                if (r2 == r3) goto L27
                goto L4d
            L27:
                boolean r1 = r1.equals(r5)     // Catch: java.net.URISyntaxException -> L92
                if (r1 != 0) goto L35
                goto L4d
            L2e:
                boolean r1 = r1.equals(r4)     // Catch: java.net.URISyntaxException -> L92
                if (r1 != 0) goto L35
                goto L4d
            L35:
                java.lang.String r4 = r0.getScheme()     // Catch: java.net.URISyntaxException -> L92
                goto L4f
            L3a:
                java.lang.String r2 = "wss"
                boolean r1 = r1.equals(r2)     // Catch: java.net.URISyntaxException -> L92
                if (r1 != 0) goto L43
                goto L4d
            L43:
                r4 = r5
                goto L4f
            L45:
                java.lang.String r2 = "ws"
                boolean r1 = r1.equals(r2)     // Catch: java.net.URISyntaxException -> L92
                if (r1 != 0) goto L4f
            L4d:
                java.lang.String r4 = ""
            L4f:
                int r1 = r0.getPort()     // Catch: java.net.URISyntaxException -> L92
                r2 = -1
                java.lang.String r3 = "format(...)"
                if (r1 == r2) goto L79
                kotlin.jvm.internal.StringCompanionObject r1 = kotlin.jvm.internal.StringCompanionObject.INSTANCE     // Catch: java.net.URISyntaxException -> L92
                java.lang.String r1 = "%s://%s:%s"
                java.lang.String r2 = r0.getHost()     // Catch: java.net.URISyntaxException -> L92
                int r0 = r0.getPort()     // Catch: java.net.URISyntaxException -> L92
                java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.net.URISyntaxException -> L92
                java.lang.Object[] r0 = new java.lang.Object[]{r4, r2, r0}     // Catch: java.net.URISyntaxException -> L92
                r2 = 3
                java.lang.Object[] r0 = java.util.Arrays.copyOf(r0, r2)     // Catch: java.net.URISyntaxException -> L92
                java.lang.String r0 = java.lang.String.format(r1, r0)     // Catch: java.net.URISyntaxException -> L92
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r3)     // Catch: java.net.URISyntaxException -> L92
                return r0
            L79:
                kotlin.jvm.internal.StringCompanionObject r1 = kotlin.jvm.internal.StringCompanionObject.INSTANCE     // Catch: java.net.URISyntaxException -> L92
                java.lang.String r1 = "%s://%s"
                java.lang.String r0 = r0.getHost()     // Catch: java.net.URISyntaxException -> L92
                java.lang.Object[] r0 = new java.lang.Object[]{r4, r0}     // Catch: java.net.URISyntaxException -> L92
                r2 = 2
                java.lang.Object[] r0 = java.util.Arrays.copyOf(r0, r2)     // Catch: java.net.URISyntaxException -> L92
                java.lang.String r0 = java.lang.String.format(r1, r0)     // Catch: java.net.URISyntaxException -> L92
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r3)     // Catch: java.net.URISyntaxException -> L92
                return r0
            L92:
                java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
                java.lang.StringBuilder r1 = new java.lang.StringBuilder
                r1.<init>()
                java.lang.String r2 = "Unable to set "
                r1.append(r2)
                r1.append(r7)
                java.lang.String r7 = " as default origin header"
                r1.append(r7)
                java.lang.String r7 = r1.toString()
                r0.<init>(r7)
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.modules.websocket.WebSocketModule.Companion.getDefaultOrigin(java.lang.String):java.lang.String");
        }

        public final void setCustomClientBuilder(CustomClientBuilder customClientBuilder) {
            WebSocketModule.customClientBuilder = customClientBuilder;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\u0006\u001a\u00020\u0007H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\nÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/modules/websocket/WebSocketModule$ContentHandler;", "", "onMessage", "", "text", "", "params", "Lcom/facebook/react/bridge/WritableMap;", "byteString", "Lokio/ByteString;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ContentHandler {
        void onMessage(@NotNull String str, @NotNull WritableMap writableMap);

        void onMessage(@NotNull ByteString byteString, @NotNull WritableMap writableMap);
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\bf\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\bÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/modules/websocket/WebSocketModule$OnOpenHandler;", "", "onOpen", "", "webSocket", "Lokhttp3/WebSocket;", "socketId", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnOpenHandler {
        void onOpen(@NotNull WebSocket webSocket, int i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public WebSocketModule(@NotNull ReactApplicationContext context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.webSocketConnections = new ConcurrentHashMap();
        this.contentHandlers = new ConcurrentHashMap();
        this.cookieHandler = new ForwardingCookieHandler();
    }

    private final String getCookie(String str) {
        try {
            List<String> list = this.cookieHandler.get(new URI(Companion.getDefaultOrigin(str)), new HashMap()).get("Cookie");
            List<String> list2 = list;
            if (list2 != null && !list2.isEmpty()) {
                return list.get(0);
            }
            return null;
        } catch (IOException unused) {
            throw new IllegalArgumentException("Unable to get cookie from " + str);
        } catch (URISyntaxException unused2) {
            throw new IllegalArgumentException("Unable to get cookie from " + str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void notifyWebSocketFailed(int i10, String str) {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
        readableMapBuilder.put(StackTraceHelper.ID_KEY, i10);
        readableMapBuilder.put("message", str);
        sendEvent("websocketFailed", createMap);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void sendEvent(String str, ReadableMap readableMap) {
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        if (reactApplicationContext.hasActiveReactInstance()) {
            reactApplicationContext.emitDeviceEvent(str, readableMap);
        }
    }

    public static final void setCustomClientBuilder(CustomClientBuilder customClientBuilder2) {
        Companion.setCustomClientBuilder(customClientBuilder2);
    }

    @Override // com.facebook.fbreact.specs.NativeWebSocketModuleSpec
    public void addListener(@NotNull String eventName) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
    }

    @Override // com.facebook.fbreact.specs.NativeWebSocketModuleSpec
    public void close(double d10, String str, double d11) {
        int i10 = (int) d11;
        WebSocket webSocket = this.webSocketConnections.get(Integer.valueOf(i10));
        if (webSocket == null) {
            return;
        }
        try {
            webSocket.f((int) d10, str);
            this.webSocketConnections.remove(Integer.valueOf(i10));
            this.contentHandlers.remove(Integer.valueOf(i10));
        } catch (Exception e10) {
            a.n(ReactConstants.TAG, "Could not close WebSocket connection for id " + i10, e10);
        }
    }

    @Override // com.facebook.fbreact.specs.NativeWebSocketModuleSpec
    public void connect(@NotNull String url, ReadableArray readableArray, ReadableMap readableMap, double d10) {
        boolean z10;
        String str;
        boolean z11;
        Intrinsics.checkNotNullParameter(url, "url");
        final int i10 = (int) d10;
        OkHttpClient.Builder builder = new OkHttpClient.Builder();
        TimeUnit timeUnit = TimeUnit.SECONDS;
        OkHttpClient.Builder Q = builder.f(10L, timeUnit).R(10L, timeUnit).Q(0L, TimeUnit.MINUTES);
        Companion.applyCustomBuilder(Q);
        OkHttpClient c10 = Q.c();
        Request.Builder l10 = new Request.Builder().k(Integer.valueOf(i10)).l(url);
        String cookie = getCookie(url);
        if (cookie != null) {
            l10.a("Cookie", cookie);
        }
        boolean z12 = false;
        if (readableMap != null && readableMap.hasKey("headers") && readableMap.getType("headers") == ReadableType.Map) {
            ReadableMap map = readableMap.getMap("headers");
            if (map != null) {
                ReadableMapKeySetIterator keySetIterator = map.keySetIterator();
                z10 = false;
                while (keySetIterator.hasNextKey()) {
                    String nextKey = keySetIterator.nextKey();
                    if (ReadableType.String == map.getType(nextKey)) {
                        if (StringsKt.A(nextKey, "origin", true)) {
                            z10 = true;
                        }
                        String string = map.getString(nextKey);
                        if (string != null) {
                            l10.a(nextKey, string);
                        } else {
                            throw new IllegalStateException(("value for name " + nextKey + " == null").toString());
                        }
                    } else {
                        a.J(ReactConstants.TAG, "Ignoring: requested " + nextKey + ", value not a string");
                    }
                }
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        } else {
            z10 = false;
        }
        if (!z10) {
            l10.a("origin", Companion.getDefaultOrigin(url));
        }
        if (readableArray != null && readableArray.size() > 0) {
            StringBuilder sb2 = new StringBuilder("");
            int size = readableArray.size();
            for (int i11 = 0; i11 < size; i11++) {
                String string2 = readableArray.getString(i11);
                if (string2 != null) {
                    str = StringsKt.k1(string2).toString();
                } else {
                    str = null;
                }
                if (str != null && str.length() != 0) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                if (!z11 && !StringsKt.V(str, ",", false, 2, null)) {
                    sb2.append(str);
                    sb2.append(",");
                }
            }
            if (sb2.length() > 0) {
                z12 = true;
            }
            if (z12) {
                sb2.replace(sb2.length() - 1, sb2.length(), "");
                String sb3 = sb2.toString();
                Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
                l10.a("Sec-WebSocket-Protocol", sb3);
            }
        }
        c10.E(l10.b(), new l() { // from class: com.facebook.react.modules.websocket.WebSocketModule$connect$2
            @Override // tt.l
            public void onClosed(WebSocket webSocket, int i12, String reason) {
                Intrinsics.checkNotNullParameter(webSocket, "webSocket");
                Intrinsics.checkNotNullParameter(reason, "reason");
                int i13 = i10;
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                readableMapBuilder.put(StackTraceHelper.ID_KEY, i13);
                readableMapBuilder.put("code", i12);
                readableMapBuilder.put("reason", reason);
                WebSocketModule.this.sendEvent("websocketClosed", createMap);
            }

            @Override // tt.l
            public void onClosing(WebSocket websocket, int i12, String reason) {
                Intrinsics.checkNotNullParameter(websocket, "websocket");
                Intrinsics.checkNotNullParameter(reason, "reason");
                websocket.f(i12, reason);
            }

            @Override // tt.l
            public void onFailure(WebSocket webSocket, Throwable t10, Response response) {
                Intrinsics.checkNotNullParameter(webSocket, "webSocket");
                Intrinsics.checkNotNullParameter(t10, "t");
                WebSocketModule.this.notifyWebSocketFailed(i10, t10.getMessage());
            }

            @Override // tt.l
            public void onMessage(WebSocket webSocket, String text) {
                Map map2;
                Intrinsics.checkNotNullParameter(webSocket, "webSocket");
                Intrinsics.checkNotNullParameter(text, "text");
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putInt(StackTraceHelper.ID_KEY, i10);
                createMap.putString("type", "text");
                map2 = WebSocketModule.this.contentHandlers;
                WebSocketModule.ContentHandler contentHandler = (WebSocketModule.ContentHandler) map2.get(Integer.valueOf(i10));
                if (contentHandler != null) {
                    contentHandler.onMessage(text, createMap);
                } else {
                    createMap.putString("data", text);
                }
                WebSocketModule.this.sendEvent("websocketMessage", createMap);
            }

            @Override // tt.l
            public void onOpen(WebSocket webSocket, Response response) {
                Map map2;
                Intrinsics.checkNotNullParameter(webSocket, "webSocket");
                Intrinsics.checkNotNullParameter(response, "response");
                map2 = WebSocketModule.this.webSocketConnections;
                map2.put(Integer.valueOf(i10), webSocket);
                int i12 = i10;
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                readableMapBuilder.put(StackTraceHelper.ID_KEY, i12);
                readableMapBuilder.put("protocol", response.C0("Sec-WebSocket-Protocol", ""));
                WebSocketModule.this.sendEvent("websocketOpen", createMap);
                WebSocketModule.OnOpenHandler mOnOpenHandler = WebSocketModule.this.getMOnOpenHandler();
                if (mOnOpenHandler != null) {
                    mOnOpenHandler.onOpen(webSocket, i10);
                }
            }

            @Override // tt.l
            public void onMessage(WebSocket webSocket, ByteString bytes) {
                Map map2;
                Intrinsics.checkNotNullParameter(webSocket, "webSocket");
                Intrinsics.checkNotNullParameter(bytes, "bytes");
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putInt(StackTraceHelper.ID_KEY, i10);
                createMap.putString("type", "binary");
                map2 = WebSocketModule.this.contentHandlers;
                WebSocketModule.ContentHandler contentHandler = (WebSocketModule.ContentHandler) map2.get(Integer.valueOf(i10));
                if (contentHandler != null) {
                    contentHandler.onMessage(bytes, createMap);
                } else {
                    createMap.putString("data", bytes.d());
                }
                WebSocketModule.this.sendEvent("websocketMessage", createMap);
            }
        });
        c10.d().a().shutdown();
    }

    public final OnOpenHandler getMOnOpenHandler() {
        return this.mOnOpenHandler;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        for (WebSocket webSocket : this.webSocketConnections.values()) {
            webSocket.f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
        }
        this.webSocketConnections.clear();
        this.contentHandlers.clear();
    }

    @Override // com.facebook.fbreact.specs.NativeWebSocketModuleSpec
    public void ping(double d10) {
        int i10 = (int) d10;
        WebSocket webSocket = this.webSocketConnections.get(Integer.valueOf(i10));
        if (webSocket == null) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
            readableMapBuilder.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder.put("message", "client is null");
            sendEvent("websocketFailed", createMap);
            WritableMap createMap2 = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
            ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
            readableMapBuilder2.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder2.put("code", 0);
            readableMapBuilder2.put("reason", "client is null");
            sendEvent("websocketClosed", createMap2);
            this.webSocketConnections.remove(Integer.valueOf(i10));
            this.contentHandlers.remove(Integer.valueOf(i10));
            return;
        }
        try {
            webSocket.a(ByteString.f44364p);
        } catch (Exception e10) {
            notifyWebSocketFailed(i10, e10.getMessage());
        }
    }

    @Override // com.facebook.fbreact.specs.NativeWebSocketModuleSpec
    public void removeListeners(double d10) {
    }

    @Override // com.facebook.fbreact.specs.NativeWebSocketModuleSpec
    public void send(@NotNull String message, double d10) {
        Intrinsics.checkNotNullParameter(message, "message");
        int i10 = (int) d10;
        WebSocket webSocket = this.webSocketConnections.get(Integer.valueOf(i10));
        if (webSocket == null) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
            readableMapBuilder.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder.put("message", "client is null");
            sendEvent("websocketFailed", createMap);
            WritableMap createMap2 = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
            ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
            readableMapBuilder2.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder2.put("code", 0);
            readableMapBuilder2.put("reason", "client is null");
            sendEvent("websocketClosed", createMap2);
            this.webSocketConnections.remove(Integer.valueOf(i10));
            this.contentHandlers.remove(Integer.valueOf(i10));
            return;
        }
        try {
            webSocket.send(message);
        } catch (Exception e10) {
            notifyWebSocketFailed(i10, e10.getMessage());
        }
    }

    @Override // com.facebook.fbreact.specs.NativeWebSocketModuleSpec
    public void sendBinary(@NotNull String base64String, double d10) {
        Intrinsics.checkNotNullParameter(base64String, "base64String");
        int i10 = (int) d10;
        WebSocket webSocket = this.webSocketConnections.get(Integer.valueOf(i10));
        if (webSocket == null) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
            readableMapBuilder.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder.put("message", "client is null");
            sendEvent("websocketFailed", createMap);
            WritableMap createMap2 = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
            ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
            readableMapBuilder2.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder2.put("code", 0);
            readableMapBuilder2.put("reason", "client is null");
            sendEvent("websocketClosed", createMap2);
            this.webSocketConnections.remove(Integer.valueOf(i10));
            this.contentHandlers.remove(Integer.valueOf(i10));
            return;
        }
        try {
            ByteString a10 = ByteString.f44363o.a(base64String);
            if (a10 != null) {
                webSocket.a(a10);
                return;
            }
            throw new IllegalStateException("bytes == null");
        } catch (Exception e10) {
            notifyWebSocketFailed(i10, e10.getMessage());
        }
    }

    public final void setContentHandler(int i10, ContentHandler contentHandler) {
        if (contentHandler != null) {
            this.contentHandlers.put(Integer.valueOf(i10), contentHandler);
            return;
        }
        this.contentHandlers.remove(Integer.valueOf(i10));
    }

    public final void setMOnOpenHandler(OnOpenHandler onOpenHandler) {
        this.mOnOpenHandler = onOpenHandler;
    }

    public final void sendBinary(@NotNull ByteString byteString, int i10) {
        Intrinsics.checkNotNullParameter(byteString, "byteString");
        WebSocket webSocket = this.webSocketConnections.get(Integer.valueOf(i10));
        if (webSocket == null) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
            readableMapBuilder.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder.put("message", "client is null");
            sendEvent("websocketFailed", createMap);
            WritableMap createMap2 = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
            ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
            readableMapBuilder2.put(StackTraceHelper.ID_KEY, i10);
            readableMapBuilder2.put("code", 0);
            readableMapBuilder2.put("reason", "client is null");
            sendEvent("websocketClosed", createMap2);
            this.webSocketConnections.remove(Integer.valueOf(i10));
            this.contentHandlers.remove(Integer.valueOf(i10));
            return;
        }
        try {
            webSocket.a(byteString);
        } catch (Exception e10) {
            notifyWebSocketFailed(i10, e10.getMessage());
        }
    }
}
