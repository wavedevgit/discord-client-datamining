package com.discord.chat;

import at.f;
import com.discord.chat.ChatModule;
import com.discord.chat.bridge.ErrorMessage;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.MessageBase;
import com.discord.chat.bridge.row.MessageRow;
import com.discord.chat.bridge.row.Row;
import com.discord.chat.bridge.scroll.ChatScrollData;
import com.discord.chat.listmanager.ChatListManager;
import com.discord.chatreplay.logger.RowLogger;
import com.discord.client_info.ClientInfo;
import com.discord.crash_reporting.CrashReporting;
import com.discord.logging.PIIKt;
import com.discord.serialization.SerializerUtils;
import com.discord.tti_manager.TTIMetrics;
import com.facebook.react.bridge.ReactApplicationContext;
import ir.v;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.c;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.json.Json;
import or.b;
import org.json.JSONArray;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0003H\n"}, d2 = {"<anonymous>", "", "manager", "Lcom/discord/chat/listmanager/ChatListManager;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.chat.ChatModule$updateRows$1", f = "ChatModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nChatModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatModule.kt\ncom/discord/chat/ChatModule$updateRows$1\n+ 2 Json.kt\nkotlinx/serialization/json/Json\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,193:1\n147#2:194\n147#2:195\n1878#3,2:196\n1869#3,2:198\n1880#3:200\n*S KotlinDebug\n*F\n+ 1 ChatModule.kt\ncom/discord/chat/ChatModule$updateRows$1\n*L\n59#1:194\n61#1:195\n70#1:196,2\n82#1:198,2\n70#1:200\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class ChatModule$updateRows$1 extends k implements Function2<ChatListManager, Continuation<? super Unit>, Object> {
    final /* synthetic */ int $changesetUpdateId;
    final /* synthetic */ boolean $forceReload;
    final /* synthetic */ String $rowsJSON;
    final /* synthetic */ String $scrollDataJSON;
    final /* synthetic */ int $tag;
    /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ ChatModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatModule$updateRows$1(ChatModule chatModule, int i10, String str, String str2, int i11, boolean z10, Continuation<? super ChatModule$updateRows$1> continuation) {
        super(2, continuation);
        this.this$0 = chatModule;
        this.$tag = i10;
        this.$rowsJSON = str;
        this.$scrollDataJSON = str2;
        this.$changesetUpdateId = i11;
        this.$forceReload = z10;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        ChatModule$updateRows$1 chatModule$updateRows$1 = new ChatModule$updateRows$1(this.this$0, this.$tag, this.$rowsJSON, this.$scrollDataJSON, this.$changesetUpdateId, this.$forceReload, continuation);
        chatModule$updateRows$1.L$0 = obj;
        return chatModule$updateRows$1;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(ChatListManager chatListManager, Continuation<? super Unit> continuation) {
        return ((ChatModule$updateRows$1) create(chatListManager, continuation)).invokeSuspend(Unit.f33282a);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ReactApplicationContext reactApplicationContext;
        RowLogger rowUpdateLoggerFor;
        int i10;
        int i11;
        Json json;
        ChatScrollData chatScrollData;
        MessageRow messageRow;
        MessageBase messageBase;
        Json json2;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            ChatListManager chatListManager = (ChatListManager) this.L$0;
            ChatModule.Companion companion = ChatModule.Companion;
            reactApplicationContext = this.this$0.reactContext;
            rowUpdateLoggerFor = companion.rowUpdateLoggerFor(reactApplicationContext, this.$tag);
            rowUpdateLoggerFor.logRowsUpdate(this.$rowsJSON);
            try {
                json = ChatModule.json;
                String str = this.$rowsJSON;
                json.a();
                List<? extends Row> list = (List) json.b(new f(Row.Companion.serializer()), str);
                if (this.$scrollDataJSON != null) {
                    json2 = ChatModule.json;
                    String str2 = this.$scrollDataJSON;
                    json2.a();
                    chatScrollData = (ChatScrollData) json2.b(ChatScrollData.Companion.serializer(), str2);
                } else {
                    chatScrollData = null;
                }
                chatListManager.updateRows(list, chatScrollData, this.$changesetUpdateId, this.$forceReload);
                if (!ClientInfo.INSTANCE.isProdBuild()) {
                    String str3 = this.$rowsJSON;
                    int i12 = 0;
                    for (Object obj2 : list) {
                        int i13 = i12 + 1;
                        if (i12 < 0) {
                            CollectionsKt.v();
                        }
                        Row row = (Row) obj2;
                        if (row instanceof MessageRow) {
                            messageRow = (MessageRow) row;
                        } else {
                            messageRow = null;
                        }
                        if (messageRow != null) {
                            messageBase = messageRow.getMessage();
                        } else {
                            messageBase = null;
                        }
                        if (messageBase instanceof ErrorMessage) {
                            JSONObject jSONObject = new JSONArray(str3).getJSONObject(i12);
                            SerializerUtils serializerUtils = SerializerUtils.INSTANCE;
                            String jSONObject2 = jSONObject.toString();
                            Intrinsics.checkNotNullExpressionValue(jSONObject2, "toString(...)");
                            SerializerUtils.SerializerError findErroringFields = serializerUtils.findErroringFields(jSONObject2, Reflection.getOrCreateKotlinClass(Message.class));
                            List<String> pIIFieldNames = PIIKt.getPIIFieldNames(Reflection.getOrCreateKotlinClass(Message.class));
                            LinkedHashMap linkedHashMap = new LinkedHashMap();
                            if (findErroringFields instanceof SerializerUtils.SerializerError.Data) {
                                Iterator<T> it = ((SerializerUtils.SerializerError.Data) findErroringFields).getData().entrySet().iterator();
                                while (it.hasNext()) {
                                    Map.Entry entry = (Map.Entry) it.next();
                                    if (pIIFieldNames.contains(entry.getKey())) {
                                        linkedHashMap.put(entry.getKey(), "<REDACTED>");
                                    } else {
                                        linkedHashMap.put(entry.getKey(), entry.getValue());
                                    }
                                }
                                CrashReporting crashReporting = CrashReporting.INSTANCE;
                                CrashReporting.addBreadcrumb$default(crashReporting, "Message Deserialization Error", linkedHashMap, null, null, false, 28, null);
                                CrashReporting.captureException$default(crashReporting, new Exception("Could not deserialize message. Bad Fields: " + CollectionsKt.x0(((SerializerUtils.SerializerError.Data) findErroringFields).getData().keySet(), ",", null, null, 0, null, null, 62, null)), false, 2, null);
                            }
                        }
                        i12 = i13;
                    }
                }
            } catch (Exception e10) {
                CrashReporting crashReporting2 = CrashReporting.INSTANCE;
                Pair a10 = v.a("tag", String.valueOf(this.$tag));
                Pair a11 = v.a("tagRowSize", String.valueOf(chatListManager.getRowCount()));
                i10 = ChatModule.previousRowUpdateTag;
                Pair a12 = v.a("previousTag", String.valueOf(i10));
                ChatModule.Companion companion2 = ChatModule.Companion;
                i11 = ChatModule.previousRowUpdateTag;
                CrashReporting.addBreadcrumb$default(crashReporting2, "Bad row update", o0.m(a10, a11, a12, v.a("previousTagRowSize", String.valueOf(companion2.getChatListManager(i11).getRowCount()))), null, null, false, 28, null);
                CrashReporting.captureException$default(crashReporting2, new Exception("Failed to update rows", e10), false, 2, null);
                String str4 = this.$rowsJSON;
                String message = e10.getMessage();
                Intrinsics.checkNotNull(message);
                chatListManager.handleError(str4, message, this.$changesetUpdateId);
            }
            TTIMetrics.record$default(TTIMetrics.INSTANCE, "ChatModule.updateRows() Finish", 0L, null, false, 14, null);
            ChatModule.Companion companion3 = ChatModule.Companion;
            ChatModule.previousRowUpdateTag = this.$tag;
            return Unit.f33282a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }
}
