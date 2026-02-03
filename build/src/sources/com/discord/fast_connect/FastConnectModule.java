package com.discord.fast_connect;

import com.discord.app_database.AppDatabase;
import com.discord.app_database.DatabaseVersions;
import com.discord.cache.Cache;
import com.discord.codegen.NativeFastConnectModuleSpec;
import com.discord.logging.Log;
import com.discord.tti_manager.TTIMetrics;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.websocket.WebSocketModule;
import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import jr.v;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.WebSocket;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0002\b\u0007\n\u0002\u0010\u0006\n\u0002\b\u0007\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0016\u001a\u00020\u0017H\u0016J\b\u0010\u0018\u001a\u00020\u0017H\u0016J\u0018\u0010\u0019\u001a\u0012\u0012\u0004\u0012\u00020\u0013\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001b0\u001aH\u0014J\u001c\u0010\u001c\u001a\u00020\u00172\b\u0010\u001d\u001a\u0004\u0018\u00010\u00132\b\u0010\u001e\u001a\u0004\u0018\u00010\u0013H\u0016J\u0010\u0010\u001f\u001a\u00020\u00172\u0006\u0010 \u001a\u00020\u000fH\u0016J,\u0010!\u001a\u00020\u00172\b\u0010\u001d\u001a\u0004\u0018\u00010\u00132\u0006\u0010\"\u001a\u00020\u00132\u0006\u0010\u0010\u001a\u00020#2\b\u0010\u0015\u001a\u0004\u0018\u00010\u0013H\u0016J\u001a\u0010$\u001a\u00020\u00172\u0006\u0010%\u001a\u00020\u00132\b\u0010&\u001a\u0004\u0018\u00010\u0013H\u0002J\u0018\u0010'\u001a\u00020\u00172\u0006\u0010(\u001a\u00020\t2\u0006\u0010\u0010\u001a\u00020\bH\u0002J\u001a\u0010)\u001a\u00020\u000f2\b\u0010(\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0010\u001a\u00020\bH\u0002R\u001a\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\n\u001a\u0004\u0018\u00010\u000b8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\f\u0010\rR\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0010\u001a\u0004\u0018\u00010\bX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u0011R\u0010\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0013X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006*"}, d2 = {"Lcom/discord/fast_connect/FastConnectModule;", "Lcom/discord/codegen/NativeFastConnectModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "sockets", "Ljava/util/concurrent/ConcurrentHashMap;", "", "Lokhttp3/WebSocket;", "webSocketModule", "Lcom/facebook/react/modules/websocket/WebSocketModule;", "getWebSocketModule", "()Lcom/facebook/react/modules/websocket/WebSocketModule;", "identified", "", "socketId", "Ljava/lang/Integer;", "identifyUserId", "", "identifyPayload", "requiredDatabaseVersion", "initialize", "", "invalidate", "getTypedExportedConstants", "", "", "setClientState", "userId", "clientState", "setUseChannelObfuscation", ViewProps.ENABLED, "prepareIdentify", "payload", "", "setCacheValue", "key", "value", "handleWebSocketOpen", "webSocket", "sendIdentify", "fast_connect_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastConnectModule extends NativeFastConnectModuleSpec {
    private boolean identified;
    @NotNull
    private String identifyPayload;
    private String identifyUserId;
    private String requiredDatabaseVersion;
    private Integer socketId;
    @NotNull
    private final ConcurrentHashMap<Integer, WebSocket> sockets;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FastConnectModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.sockets = new ConcurrentHashMap<>();
        this.identifyPayload = "";
    }

    private final WebSocketModule getWebSocketModule() {
        ReactApplicationContext reactApplicationContextIfActiveOrWarn = getReactApplicationContextIfActiveOrWarn();
        if (reactApplicationContextIfActiveOrWarn != null) {
            return (WebSocketModule) reactApplicationContextIfActiveOrWarn.getNativeModule(WebSocketModule.class);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void handleWebSocketOpen(WebSocket webSocket, int i10) {
        TTIMetrics.record$default(TTIMetrics.INSTANCE, "Native WebSocket opened", 0L, null, false, 14, null);
        if (!sendIdentify(webSocket, i10)) {
            this.sockets.put(Integer.valueOf(i10), webSocket);
        }
    }

    private final boolean sendIdentify(WebSocket webSocket, int i10) {
        Integer num;
        String str;
        if (webSocket != null && (num = this.socketId) != null && i10 == num.intValue() && !this.identified) {
            String str2 = this.identifyUserId;
            DatabaseVersions guildVersions = AppDatabase.INSTANCE.getGuildVersions(str2, this.requiredDatabaseVersion);
            if (str2 != null) {
                str = IdentifyPayload.INSTANCE.withGuildVersions(this.identifyPayload, guildVersions);
            } else {
                str = this.identifyPayload;
            }
            if (!Intrinsics.areEqual(this.identifyPayload, str)) {
                Log log = Log.INSTANCE;
                int length = guildVersions.getGuildVersions().length;
                Log.i$default(log, "FastConnectManagerModule", length + " guild_versions added to identify payload", (Throwable) null, 4, (Object) null);
            }
            TTIMetrics.record$default(TTIMetrics.INSTANCE, "Native WebSocket sent identify", 0L, null, false, 14, null);
            webSocket.send(str);
            this.identified = true;
            return true;
        }
        return false;
    }

    private final void setCacheValue(String str, String str2) {
        Cache cache = Cache.Companion.get();
        if (str2 == null) {
            cache.removeItem(str);
        } else {
            cache.setItem(str, str2);
        }
    }

    @Override // com.discord.codegen.NativeFastConnectModuleSpec
    @NotNull
    protected Map<String, ? extends Object> getTypedExportedConstants() {
        Cache.Companion companion = Cache.Companion;
        return o0.n(v.a("clientState", companion.get().getItem("_clientStateKey")), v.a("userId", companion.get().getItem("_userIdKey")), v.a("token", Cache.getToken$default(companion.get(), false, 1, null)), v.a("useChannelObfuscation", Boolean.valueOf(companion.get().getUseChannelObfuscation())));
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        super.initialize();
        WebSocketModule webSocketModule = getWebSocketModule();
        if (webSocketModule != null) {
            webSocketModule.setMOnOpenHandler(new WebSocketModule.OnOpenHandler() { // from class: com.discord.fast_connect.FastConnectModule$initialize$1
                @Override // com.facebook.react.modules.websocket.WebSocketModule.OnOpenHandler
                public void onOpen(WebSocket webSocket, int i10) {
                    Intrinsics.checkNotNullParameter(webSocket, "webSocket");
                    FastConnectModule.this.handleWebSocketOpen(webSocket, i10);
                }
            });
        }
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        WebSocketModule webSocketModule = getWebSocketModule();
        if (webSocketModule != null) {
            webSocketModule.setMOnOpenHandler(null);
        }
    }

    @Override // com.discord.codegen.NativeFastConnectModuleSpec
    public void prepareIdentify(String str, @NotNull String payload, double d10, String str2) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        int i10 = (int) d10;
        this.socketId = Integer.valueOf(i10);
        this.identifyUserId = str;
        this.identifyPayload = payload;
        this.requiredDatabaseVersion = str2;
        sendIdentify(this.sockets.get(Integer.valueOf(i10)), i10);
    }

    @Override // com.discord.codegen.NativeFastConnectModuleSpec
    public void setClientState(String str, String str2) {
        setCacheValue("_userIdKey", str);
        setCacheValue("_clientStateKey", str2);
    }

    @Override // com.discord.codegen.NativeFastConnectModuleSpec
    public void setUseChannelObfuscation(boolean z10) {
        Cache.Companion.get().setUseChannelObfuscation(z10);
    }
}
