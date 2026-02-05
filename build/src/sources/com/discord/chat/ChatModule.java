package com.discord.chat;

import android.content.Context;
import com.discord.chat.listmanager.ChatListManager;
import com.discord.chatreplay.logger.ReleaseRowLogger;
import com.discord.chatreplay.logger.RowLogger;
import com.discord.codegen.NativeChatModuleSpec;
import com.discord.tti_manager.TTIMetrics;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.z;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import kotlinx.serialization.json.b;
import ms.i;
import ms.j1;
import ms.u0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0007\u0018\u0000 \u00142\u00020\u0001:\u0001\u0014B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016JB\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\f2\u0006\u0010\u0010\u001a\u00020\n2\u0006\u0010\u0011\u001a\u00020\u000e2\u0006\u0010\u0012\u001a\u00020\u000eH\u0016J\u0018\u0010\u0013\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u0010\u001a\u00020\nH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/discord/chat/ChatModule;", "Lcom/discord/codegen/NativeChatModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "invalidate", "", "updateRows", "tagValue", "", "rowsJSON", "", "isLoadingAtTop", "", "scrollDataJSON", "changesetUpdateIdValue", "HACK_iOSForceAnimations", "forceReload", "clearRows", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatModule extends NativeChatModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Json json = b.b(null, new Function1() { // from class: com.discord.chat.a
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit json$lambda$0;
            json$lambda$0 = ChatModule.json$lambda$0((JsonBuilder) obj);
            return json$lambda$0;
        }
    }, 1, null);
    @NotNull
    private static final Map<Integer, ChatListManager> listManagers;
    @NotNull
    private static final CoroutineScope moduleScope;
    private static int previousRowUpdateTag;
    @NotNull
    private static final Map<Integer, RowLogger> rowUpdateLoggers;
    @NotNull
    private final ReactApplicationContext reactContext;

    @Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\b\u0006\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J;\u0010\u000b\u001a\u00020\t2\u0006\u0010\u0005\u001a\u00020\u00042\"\u0010\n\u001a\u001e\b\u0001\u0012\u0004\u0012\u00020\u0007\u0012\n\u0012\b\u0012\u0004\u0012\u00020\t0\b\u0012\u0006\u0012\u0004\u0018\u00010\u00010\u0006H\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0012\u001a\u00020\tH\u0002¢\u0006\u0004\b\u0012\u0010\u0003J\u0015\u0010\u0013\u001a\u00020\u00072\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0016\u001a\u00020\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017R\u0014\u0010\u0019\u001a\u00020\u00188\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR \u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\u001b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0016\u0010\u001e\u001a\u00020\u00048\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001fR \u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u000f0\u001b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b \u0010\u001d¨\u0006!"}, d2 = {"Lcom/discord/chat/ChatModule$Companion;", "", "<init>", "()V", "", "tag", "Lkotlin/Function2;", "Lcom/discord/chat/listmanager/ChatListManager;", "Lkotlin/coroutines/Continuation;", "", "block", "withChatManager", "(ILkotlin/jvm/functions/Function2;)V", "Landroid/content/Context;", "context", "Lcom/discord/chatreplay/logger/RowLogger;", "rowUpdateLoggerFor", "(Landroid/content/Context;I)Lcom/discord/chatreplay/logger/RowLogger;", "cancelCoroutineChildren", "getChatListManager", "(I)Lcom/discord/chat/listmanager/ChatListManager;", "Lkotlinx/serialization/json/Json;", "json", "Lkotlinx/serialization/json/Json;", "Lkotlinx/coroutines/CoroutineScope;", "moduleScope", "Lkotlinx/coroutines/CoroutineScope;", "", "listManagers", "Ljava/util/Map;", "previousRowUpdateTag", "I", "rowUpdateLoggers", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nChatModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatModule.kt\ncom/discord/chat/ChatModule$Companion\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,193:1\n384#2,7:194\n384#2,7:201\n*S KotlinDebug\n*F\n+ 1 ChatModule.kt\ncom/discord/chat/ChatModule$Companion\n*L\n158#1:194,7\n172#1:201,7\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void cancelCoroutineChildren() {
            CoroutineContext coroutineContext = ChatModule.moduleScope.getCoroutineContext();
            String simpleName = Reflection.getOrCreateKotlinClass(ChatModule.class).getSimpleName();
            z.g(coroutineContext, new CancellationException(simpleName + " invalidate()"));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final RowLogger rowUpdateLoggerFor(Context context, int i10) {
            Map map = ChatModule.rowUpdateLoggers;
            Integer valueOf = Integer.valueOf(i10);
            Object obj = map.get(valueOf);
            if (obj == null) {
                obj = new ReleaseRowLogger();
                map.put(valueOf, obj);
            }
            return (RowLogger) obj;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void withChatManager(int i10, Function2<? super ChatListManager, ? super Continuation<? super Unit>, ? extends Object> function2) {
            i.d(ChatModule.moduleScope, null, null, new ChatModule$Companion$withChatManager$1(function2, getChatListManager(i10), null), 3, null);
        }

        @NotNull
        public final synchronized ChatListManager getChatListManager(int i10) {
            Object obj;
            try {
                Map map = ChatModule.listManagers;
                Integer valueOf = Integer.valueOf(i10);
                obj = map.get(valueOf);
                if (obj == null) {
                    obj = new ChatListManager(ChatModule.moduleScope);
                    map.put(valueOf, obj);
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return (ChatListManager) obj;
        }

        private Companion() {
        }
    }

    static {
        CompletableJob b10 = j1.b(null, 1, null);
        ExecutorService newSingleThreadExecutor = Executors.newSingleThreadExecutor();
        Intrinsics.checkNotNullExpressionValue(newSingleThreadExecutor, "newSingleThreadExecutor(...)");
        moduleScope = kotlinx.coroutines.i.a(b10.V0(u0.c(newSingleThreadExecutor)));
        listManagers = new LinkedHashMap();
        previousRowUpdateTag = -1;
        rowUpdateLoggers = new LinkedHashMap();
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit json$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f31988a;
    }

    @Override // com.discord.codegen.NativeChatModuleSpec
    public void clearRows(double d10, double d11) {
        int i10 = (int) d10;
        Companion.withChatManager(i10, new ChatModule$clearRows$1(this, i10, (int) d11, null));
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        Companion.cancelCoroutineChildren();
    }

    @Override // com.discord.codegen.NativeChatModuleSpec
    public void updateRows(double d10, @NotNull String rowsJSON, boolean z10, String str, double d11, boolean z11, boolean z12) {
        Intrinsics.checkNotNullParameter(rowsJSON, "rowsJSON");
        int i10 = (int) d10;
        TTIMetrics.record$default(TTIMetrics.INSTANCE, "ChatModule.updateRows() Start", 0L, null, false, 14, null);
        Companion.withChatManager(i10, new ChatModule$updateRows$1(this, i10, rowsJSON, str, (int) d11, z12, null));
    }
}
