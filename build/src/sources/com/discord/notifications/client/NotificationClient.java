package com.discord.notifications.client;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Parcelable;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.content.b;
import bs.c;
import com.discord.logging.Log;
import com.discord.misc.utilities.intent.IntentUtilsKt;
import com.discord.notifications.actions.intents.ContentAction;
import com.discord.notifications.actions.intents.NotificationAction;
import com.discord.notifications.api.DirectReplyMessage;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.client.NotificationClient;
import com.discord.notifications.renderer.NotificationBehaviors;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import com.discord.primitives.UserId;
import com.discord.shortcuts.ShortcutData;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.modules.appstate.AppStateModule;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Charsets;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonObject;
import kt.h;
import kt.x;
import nt.a;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000l\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\t\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u0000 c2\u00020\u0001:\u0001cB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J%\u0010\b\u001a\u00020\u00072\u0014\u0010\u0006\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u00050\u0004H\u0002¢\u0006\u0004\b\b\u0010\tJ;\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\f2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u00042\u0006\u0010\u0010\u001a\u00020\u000fH\u0003¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0013\u001a\u00020\u000f2\u0006\u0010\u000b\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0013\u0010\u0014J'\u0010\u0015\u001a\u00020\u00072\u0016\u0010\u0006\u001a\u0012\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0018\u00010\u0004H\u0002¢\u0006\u0004\b\u0015\u0010\tJ\u0019\u0010\u0017\u001a\u0004\u0018\u00010\u00162\u0006\u0010\u000b\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u001f\u0010\u0019\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\fH\u0003¢\u0006\u0004\b\u0019\u0010\u001aJ=\u0010\u001d\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0012\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u00042\u0012\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u0004¢\u0006\u0004\b\u001d\u0010\u001eJ\u001d\u0010 \u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\u001f\u001a\u00020\u0005¢\u0006\u0004\b \u0010!J\u001d\u0010$\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010#\u001a\u00020\"¢\u0006\u0004\b$\u0010%J\u001d\u0010&\u001a\u0012\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0018\u00010\u0004¢\u0006\u0004\b&\u0010'J\u0015\u0010)\u001a\u00020\u00072\u0006\u0010(\u001a\u00020\u0005¢\u0006\u0004\b)\u0010*J!\u0010-\u001a\u00020\u00072\u0012\u0010,\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00070+¢\u0006\u0004\b-\u0010.J/\u00100\u001a\u00020\u00072 \u0010/\u001a\u001c\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u00050\u0004\u0012\u0004\u0012\u00020\u00070+¢\u0006\u0004\b0\u0010.J/\u00101\u001a\u00020\u00072 \u0010/\u001a\u001c\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u00050\u0004\u0012\u0004\u0012\u00020\u00070+¢\u0006\u0004\b1\u0010.J\u001d\u00103\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u00102\u001a\u00020\u000f¢\u0006\u0004\b3\u00104J\u0015\u00105\u001a\u00020\u000f2\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b5\u0010\u0014J\u001d\u00107\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u00106\u001a\u00020\u000f¢\u0006\u0004\b7\u00104J\u0015\u00108\u001a\u00020\u000f2\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b8\u0010\u0014J\u001d\u0010:\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u00109\u001a\u00020\u000f¢\u0006\u0004\b:\u00104J\u0015\u0010;\u001a\u00020\u000f2\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b;\u0010\u0014J\u001d\u0010=\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010<\u001a\u00020\u000f¢\u0006\u0004\b=\u00104J)\u0010@\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\b\u0010>\u001a\u0004\u0018\u00010\u00052\b\u0010?\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b@\u0010AJ\u001d\u0010C\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010B\u001a\u00020\u000f¢\u0006\u0004\bC\u00104J\u0015\u0010D\u001a\u00020\u000f2\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\bD\u0010\u0014J\u001f\u0010F\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010E\u001a\u00020\u0005H\u0007¢\u0006\u0004\bF\u0010!J\u001f\u0010I\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010H\u001a\u00020GH\u0007¢\u0006\u0004\bI\u0010JJ+\u0010K\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0012\u0010E\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u0004H\u0007¢\u0006\u0004\bK\u0010LJ\u001d\u0010M\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010H\u001a\u00020\u0005¢\u0006\u0004\bM\u0010!J+\u0010N\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n2\u0012\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\u0004H\u0007¢\u0006\u0004\bN\u0010LJ\u0015\u0010O\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\bO\u0010PR(\u0010R\u001a\b\u0012\u0004\u0012\u00020\u000f0Q8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bR\u0010S\u001a\u0004\bT\u0010U\"\u0004\bV\u0010WR\u0018\u0010(\u001a\u0004\u0018\u00010\u00058\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b(\u0010XR\"\u0010,\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00070+8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b,\u0010YR&\u0010Z\u001a\u0012\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0018\u00010\u00048\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bZ\u0010[R2\u0010/\u001a\u001e\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u00050\u0004\u0012\u0004\u0012\u00020\u0007\u0018\u00010+8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b/\u0010YR2\u0010\\\u001a\u001e\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u00050\u0004\u0012\u0004\u0012\u00020\u0007\u0018\u00010+8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\\\u0010YR\u0016\u0010^\u001a\u00020]8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b^\u0010_R\u0016\u0010a\u001a\u00020`8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\ba\u0010b¨\u0006d"}, d2 = {"Lcom/discord/notifications/client/NotificationClient;", "", "<init>", "()V", "", "", "notification", "", "setLocalNotification", "(Ljava/util/Map;)V", "Landroid/content/Context;", "context", "Lcom/discord/notifications/api/NotificationData;", "notificationData", "notificationDataMap", "", "makeOrUpdateShortcut", "showNotification", "(Landroid/content/Context;Lcom/discord/notifications/api/NotificationData;Ljava/util/Map;Z)V", "updateAndComputeIfShouldRunBackgroundSync", "(Landroid/content/Context;)Z", "setNotification", "Lcom/discord/notifications/renderer/NotificationBehaviors;", "getBehaviors", "(Landroid/content/Context;)Lcom/discord/notifications/renderer/NotificationBehaviors;", "appendNotificationToCacheFile", "(Landroid/content/Context;Lcom/discord/notifications/api/NotificationData;)V", "localizedCategoryNames", "localizedGroupNames", "initNotificationCategories", "(Landroid/content/Context;Ljava/util/Map;Ljava/util/Map;)V", StackTraceHelper.NAME_KEY, "setIncomingRingtone", "(Landroid/content/Context;Ljava/lang/String;)V", "Landroid/content/Intent;", "intent", "handleIntent", "(Landroid/content/Context;Landroid/content/Intent;)V", "getPendingNotification", "()Ljava/util/Map;", "token", "setToken", "(Ljava/lang/String;)V", "Lkotlin/Function1;", "tokenListener", "setTokenListener", "(Lkotlin/jvm/functions/Function1;)V", "notificationListener", "setNotificationListener", "setLocalNotificationListener", "isAuthed", "setIsAuthed", "(Landroid/content/Context;Z)V", "isSoundsEnabled", "soundsEnabled", "setSoundsEnabled", "isVibrationsEnabled", "vibrationsEnabled", "setVibrationsEnabled", "isLightsEnabled", "lightsEnabled", "setLightsEnabled", NotificationRenderer.USERNAME, "userId", "setCurrentUser", "(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)V", "notifyEveryTime", "setNotifyEveryTime", "shouldNotifyEveryTime", "data", "onDirectReplySuccess", "", "channelId", "markNotificationAsDirectReply", "(Landroid/content/Context;J)V", "onNotificationReceived", "(Landroid/content/Context;Ljava/util/Map;)V", "ackReactionNotifications", "showLocalNotification", "clearAllNotifications", "(Landroid/content/Context;)V", "Lkotlin/Function0;", "shouldDisplayNotification", "Lkotlin/jvm/functions/Function0;", "getShouldDisplayNotification", "()Lkotlin/jvm/functions/Function0;", "setShouldDisplayNotification", "(Lkotlin/jvm/functions/Function0;)V", "Ljava/lang/String;", "Lkotlin/jvm/functions/Function1;", "notificationPending", "Ljava/util/Map;", "notificationLocalListener", "Lcom/discord/notifications/client/NotificationCache;", "cache", "Lcom/discord/notifications/client/NotificationCache;", "Lcom/discord/notifications/renderer/NotificationRenderer;", "renderer", "Lcom/discord/notifications/renderer/NotificationRenderer;", "Companion", "notification_client_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNotificationClient.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationClient.kt\ncom/discord/notifications/client/NotificationClient\n+ 2 NotificationAction.kt\ncom/discord/notifications/actions/intents/NotificationAction$Companion\n+ 3 IntentUtils.kt\ncom/discord/misc/utilities/intent/IntentUtilsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 5 SerialFormat.kt\nkotlinx/serialization/SerialFormatKt\n+ 6 JsonElementBuilders.kt\nkotlinx/serialization/json/JsonElementBuildersKt\n*L\n1#1,420:1\n96#2,2:421\n99#2,2:424\n14#3:423\n1#4:426\n113#5:427\n113#5:431\n29#6,3:428\n*S KotlinDebug\n*F\n+ 1 NotificationClient.kt\ncom/discord/notifications/client/NotificationClient\n*L\n62#1:421,2\n62#1:424,2\n62#1:423\n307#1:427\n406#1:431\n386#1:428,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationClient {
    private static final long NOTIFICATION_BACKGROUND_SYNC_INTERVAL_MS = 3600000;
    private Function1<? super Map<String, String>, Unit> notificationListener;
    private Function1<? super Map<String, String>, Unit> notificationLocalListener;
    private Map<String, String> notificationPending;
    private String token;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final NotificationClient instance = new NotificationClient();
    @NotNull
    private Function0<Boolean> shouldDisplayNotification = new Function0() { // from class: q7.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            boolean shouldDisplayNotification$lambda$0;
            shouldDisplayNotification$lambda$0 = NotificationClient.shouldDisplayNotification$lambda$0();
            return Boolean.valueOf(shouldDisplayNotification$lambda$0);
        }
    };
    @NotNull
    private Function1<? super String, Unit> tokenListener = new Function1() { // from class: q7.b
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit unit;
            unit = NotificationClient.tokenListener$lambda$1((String) obj);
            return unit;
        }
    };
    @NotNull
    private NotificationCache cache = new NotificationCache();
    @NotNull
    private NotificationRenderer renderer = new NotificationRenderer();

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lcom/discord/notifications/client/NotificationClient$Companion;", "", "<init>", "()V", "NOTIFICATION_BACKGROUND_SYNC_INTERVAL_MS", "", "instance", "Lcom/discord/notifications/client/NotificationClient;", "getInstance", "()Lcom/discord/notifications/client/NotificationClient;", "notification_client_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final NotificationClient getInstance() {
            return NotificationClient.instance;
        }

        private Companion() {
        }
    }

    private final synchronized void appendNotificationToCacheFile(Context context, NotificationData notificationData) {
        File file;
        try {
            try {
                file = new File(context.getCacheDir(), "notifications_to_track");
            } catch (Throwable th2) {
                throw th2;
            }
        } catch (Exception e10) {
            Log log = Log.INSTANCE;
            String simpleName = NotificationClient.class.getSimpleName();
            Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
            log.e(simpleName, "Error appending notification to cache file", e10);
        }
        if (file.length() >= 5242880) {
            return;
        }
        boolean a10 = NotificationManagerCompat.g(context).a();
        x xVar = new x();
        xVar.b("push_action_type", h.d(notificationData.getType()));
        xVar.b("os_enabled", h.b(Boolean.valueOf(a10)));
        String timeReceived = notificationData.getTimeReceived();
        if (timeReceived != null) {
            xVar.b("timestamp", h.d(timeReceived));
        }
        String notifTypeId = notificationData.getNotifTypeId();
        if (notifTypeId != null) {
            xVar.b("notif_type_id", h.d(notifTypeId));
        }
        String notifInstanceId = notificationData.getNotifInstanceId();
        if (notifInstanceId != null) {
            xVar.b("notif_instance_id", h.d(notifInstanceId));
        }
        String joinId = notificationData.getJoinId();
        if (joinId != null) {
            xVar.b("join_id", h.d(joinId));
        }
        UserId m1025getUserIdwUX8bhU = notificationData.m1025getUserIdwUX8bhU();
        if (m1025getUserIdwUX8bhU != null) {
            xVar.b("notif_user_id", h.d(UserId.m1142toStringimpl(m1025getUserIdwUX8bhU.m1144unboximpl())));
        }
        UserId m1024getReceivingUserIdwUX8bhU = notificationData.m1024getReceivingUserIdwUX8bhU();
        if (m1024getReceivingUserIdwUX8bhU != null) {
            xVar.b("receiving_user_id", h.d(UserId.m1142toStringimpl(m1024getReceivingUserIdwUX8bhU.m1144unboximpl())));
        }
        String m1022getMessageIdN_6c4I0 = notificationData.m1022getMessageIdN_6c4I0();
        if (m1022getMessageIdN_6c4I0 != null) {
            xVar.b("message_id", h.d(MessageId.m1090toStringimpl(MessageId.m1083boximpl(m1022getMessageIdN_6c4I0).m1092unboximpl())));
        }
        Integer messageType = notificationData.getMessageType();
        if (messageType != null) {
            xVar.b("message_type", h.c(Integer.valueOf(messageType.intValue())));
        }
        GuildId m1021getGuildIdqOKuAAo = notificationData.m1021getGuildIdqOKuAAo();
        if (m1021getGuildIdqOKuAAo != null) {
            xVar.b("guild_id", h.d(GuildId.m1077toStringimpl(m1021getGuildIdqOKuAAo.m1079unboximpl())));
        }
        ChannelId m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ();
        if (m1020getChannelIdqMVnFVQ != null) {
            xVar.b("channel_id", h.d(ChannelId.m1064toStringimpl(m1020getChannelIdqMVnFVQ.m1066unboximpl())));
        }
        Integer channelType = notificationData.getChannelType();
        if (channelType != null) {
            xVar.b("channel_type", h.c(Integer.valueOf(channelType.intValue())));
        }
        Integer relationshipType = notificationData.getRelationshipType();
        if (relationshipType != null) {
            xVar.b("rel_type", h.c(Integer.valueOf(relationshipType.intValue())));
        }
        String mentionType = notificationData.getMentionType();
        if (mentionType != null) {
            xVar.b("mention_type", h.d(mentionType));
        }
        String appState = notificationData.getAppState();
        if (appState != null) {
            xVar.b("app_state", h.d(appState));
        }
        JsonObject a11 = xVar.a();
        BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(new FileOutputStream(file, true), 8192);
        try {
            Json.a aVar = Json.f35168d;
            aVar.a();
            byte[] bytes = aVar.c(JsonObject.Companion.serializer(), a11).getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            bufferedOutputStream.write(bytes);
            bufferedOutputStream.write(10);
            Unit unit = Unit.f32056a;
            c.a(bufferedOutputStream, null);
        } finally {
        }
    }

    private final NotificationBehaviors getBehaviors(Context context) {
        if (Build.VERSION.SDK_INT >= 26) {
            return null;
        }
        return new NotificationBehaviors(isSoundsEnabled(context), isVibrationsEnabled(context), isLightsEnabled(context));
    }

    private final void setLocalNotification(Map<String, String> map) {
        Function1<? super Map<String, String>, Unit> function1 = this.notificationLocalListener;
        if (function1 != null) {
            if (function1 != null) {
                function1.invoke(map);
                return;
            }
            return;
        }
        this.notificationPending = map;
    }

    private final void setNotification(Map<String, String> map) {
        if (map == null) {
            this.notificationPending = null;
            return;
        }
        Function1<? super Map<String, String>, Unit> function1 = this.notificationListener;
        if (function1 != null) {
            if (function1 != null) {
                function1.invoke(map);
                return;
            }
            return;
        }
        this.notificationPending = map;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean shouldDisplayNotification$lambda$0() {
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:35:0x00d3 A[Catch: Exception -> 0x00c7, TryCatch #0 {Exception -> 0x00c7, blocks: (B:25:0x00b2, B:27:0x00bc, B:35:0x00d3, B:37:0x00ee, B:39:0x00f7, B:43:0x010d, B:42:0x0108, B:45:0x0117, B:47:0x0141, B:49:0x014d, B:51:0x015b, B:54:0x0167, B:56:0x0184, B:57:0x018c, B:58:0x01ac, B:60:0x01b2, B:46:0x013c, B:32:0x00ca), top: B:64:0x00b2 }] */
    /* JADX WARN: Removed duplicated region for block: B:45:0x0117 A[Catch: Exception -> 0x00c7, TryCatch #0 {Exception -> 0x00c7, blocks: (B:25:0x00b2, B:27:0x00bc, B:35:0x00d3, B:37:0x00ee, B:39:0x00f7, B:43:0x010d, B:42:0x0108, B:45:0x0117, B:47:0x0141, B:49:0x014d, B:51:0x015b, B:54:0x0167, B:56:0x0184, B:57:0x018c, B:58:0x01ac, B:60:0x01b2, B:46:0x013c, B:32:0x00ca), top: B:64:0x00b2 }] */
    /* JADX WARN: Removed duplicated region for block: B:46:0x013c A[Catch: Exception -> 0x00c7, TryCatch #0 {Exception -> 0x00c7, blocks: (B:25:0x00b2, B:27:0x00bc, B:35:0x00d3, B:37:0x00ee, B:39:0x00f7, B:43:0x010d, B:42:0x0108, B:45:0x0117, B:47:0x0141, B:49:0x014d, B:51:0x015b, B:54:0x0167, B:56:0x0184, B:57:0x018c, B:58:0x01ac, B:60:0x01b2, B:46:0x013c, B:32:0x00ca), top: B:64:0x00b2 }] */
    /* JADX WARN: Removed duplicated region for block: B:49:0x014d A[Catch: Exception -> 0x00c7, TryCatch #0 {Exception -> 0x00c7, blocks: (B:25:0x00b2, B:27:0x00bc, B:35:0x00d3, B:37:0x00ee, B:39:0x00f7, B:43:0x010d, B:42:0x0108, B:45:0x0117, B:47:0x0141, B:49:0x014d, B:51:0x015b, B:54:0x0167, B:56:0x0184, B:57:0x018c, B:58:0x01ac, B:60:0x01b2, B:46:0x013c, B:32:0x00ca), top: B:64:0x00b2 }] */
    /* JADX WARN: Removed duplicated region for block: B:67:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void showNotification(android.content.Context r24, com.discord.notifications.api.NotificationData r25, java.util.Map<java.lang.String, java.lang.String> r26, boolean r27) {
        /*
            Method dump skipped, instructions count: 471
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.client.NotificationClient.showNotification(android.content.Context, com.discord.notifications.api.NotificationData, java.util.Map, boolean):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit tokenListener$lambda$1(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    private final boolean updateAndComputeIfShouldRunBackgroundSync(Context context) {
        long currentTimeMillis = System.currentTimeMillis();
        if (currentTimeMillis < this.cache.getBackgroundSyncRan(context)) {
            this.cache.setBackgroundSyncRan(context);
            return true;
        } else if (currentTimeMillis > this.cache.getBackgroundSyncRan(context) + 3600000) {
            this.cache.setBackgroundSyncRan(context);
            return true;
        } else {
            return false;
        }
    }

    public final void ackReactionNotifications(@NotNull Context context, @NotNull String channelId) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        this.renderer.handleReactionAcks(context, channelId);
    }

    public final void clearAllNotifications(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.renderer.clearAllNotifications(context);
    }

    public final Map<String, String> getPendingNotification() {
        Map<String, String> map = this.notificationPending;
        if (map == null) {
            return null;
        }
        this.notificationPending = null;
        return map;
    }

    @NotNull
    public final Function0<Boolean> getShouldDisplayNotification() {
        return this.shouldDisplayNotification;
    }

    public final void handleIntent(@NotNull Context context, @NotNull Intent intent) {
        NotificationAction notificationAction;
        ContentAction contentAction;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(intent, "intent");
        NotificationAction.Companion companion = NotificationAction.Companion;
        if (IntentUtilsKt.hasExtra(intent, Reflection.getOrCreateKotlinClass(ContentAction.class))) {
            notificationAction = (NotificationAction) ((Parcelable) b.b(intent, "action_intent_arg_key", ContentAction.class));
        } else {
            notificationAction = null;
        }
        ContentAction contentAction2 = (ContentAction) notificationAction;
        ShortcutData shortcutIntentData = ShortcutData.Companion.getShortcutIntentData(intent);
        if (shortcutIntentData != null) {
            contentAction = new ContentAction(shortcutIntentData.getTag(), shortcutIntentData.getData());
        } else {
            contentAction = null;
        }
        if (contentAction2 == null) {
            contentAction2 = contentAction;
        }
        if (contentAction2 == null) {
            setNotification(null);
            return;
        }
        if (contentAction2.isLocal()) {
            setLocalNotification(contentAction2.getData());
        } else {
            setNotification(contentAction2.getData());
        }
        contentAction2.onNotificationActionComplete(context);
    }

    public final void initNotificationCategories(@NotNull Context context, @NotNull Map<String, String> localizedCategoryNames, @NotNull Map<String, String> localizedGroupNames) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(localizedCategoryNames, "localizedCategoryNames");
        Intrinsics.checkNotNullParameter(localizedGroupNames, "localizedGroupNames");
        this.renderer.initNotificationCategories(context, localizedCategoryNames, localizedGroupNames);
    }

    public final boolean isLightsEnabled(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return this.cache.isLightsEnabled(context);
    }

    public final boolean isSoundsEnabled(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return this.cache.isSoundsEnabled(context);
    }

    public final boolean isVibrationsEnabled(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return this.cache.isVibrationsEnabled(context);
    }

    public final void markNotificationAsDirectReply(@NotNull Context context, long j10) {
        Intrinsics.checkNotNullParameter(context, "context");
        NotificationRenderer notificationRenderer = this.renderer;
        notificationRenderer.markNotificationAsDirectReply(context, NotificationData.TYPE_MESSAGE_CREATE + j10, "", true);
    }

    public final void onDirectReplySuccess(@NotNull Context context, @NotNull String data) {
        String m1090toStringimpl;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(data, "data");
        NotificationData notificationData = DirectReplyMessage.Companion.toNotificationData(data);
        Pair a10 = v.a("type", notificationData.getType());
        Pair a11 = v.a("channel_id", String.valueOf(notificationData.m1020getChannelIdqMVnFVQ()));
        String m1022getMessageIdN_6c4I0 = notificationData.m1022getMessageIdN_6c4I0();
        if (m1022getMessageIdN_6c4I0 == null) {
            m1090toStringimpl = "null";
        } else {
            m1090toStringimpl = MessageId.m1090toStringimpl(m1022getMessageIdN_6c4I0);
        }
        showNotification(context, notificationData, o0.m(a10, a11, v.a("message_id", m1090toStringimpl)), false);
    }

    public final void onNotificationReceived(@NotNull Context context, @NotNull Map<String, String> data) {
        String str;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(data, "data");
        a.C0552a c0552a = a.f41202b;
        KSerializer serializer = NotificationData.Companion.serializer();
        Map y10 = o0.y(data);
        y10.put("time_received", String.valueOf(System.currentTimeMillis()));
        if (((Boolean) this.shouldDisplayNotification.invoke()).booleanValue()) {
            str = AppStateModule.APP_STATE_BACKGROUND;
        } else {
            str = AppStateModule.APP_STATE_ACTIVE;
        }
        y10.put("app_state", str);
        Unit unit = Unit.f32056a;
        NotificationData notificationData = (NotificationData) c0552a.d(serializer, y10);
        appendNotificationToCacheFile(context, notificationData);
        showNotification(context, notificationData, data, true);
    }

    public final void setCurrentUser(@NotNull Context context, String str, String str2) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.cache.setCurrentUsername(context, str);
        this.cache.setCurrentUserId(context, str2);
    }

    public final void setIncomingRingtone(@NotNull Context context, @NotNull String name) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(name, "name");
        this.renderer.setIncomingRingtone(context, name);
    }

    public final void setIsAuthed(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.cache.setIsAuthed(context, z10);
    }

    public final void setLightsEnabled(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.cache.setLightsEnabled(context, z10);
    }

    public final void setLocalNotificationListener(@NotNull Function1<? super Map<String, String>, Unit> notificationListener) {
        Intrinsics.checkNotNullParameter(notificationListener, "notificationListener");
        this.notificationLocalListener = notificationListener;
    }

    public final void setNotificationListener(@NotNull Function1<? super Map<String, String>, Unit> notificationListener) {
        Intrinsics.checkNotNullParameter(notificationListener, "notificationListener");
        this.notificationListener = notificationListener;
    }

    public final void setNotifyEveryTime(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.cache.setNotifyEveryTime(context, z10);
    }

    public final void setShouldDisplayNotification(@NotNull Function0<Boolean> function0) {
        Intrinsics.checkNotNullParameter(function0, "<set-?>");
        this.shouldDisplayNotification = function0;
    }

    public final void setSoundsEnabled(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.cache.setSoundsEnabled(context, z10);
    }

    public final void setToken(@NotNull String token) {
        Intrinsics.checkNotNullParameter(token, "token");
        if (!Intrinsics.areEqual(this.token, token)) {
            this.token = token;
            this.tokenListener.invoke(token);
        }
    }

    public final void setTokenListener(@NotNull Function1<? super String, Unit> tokenListener) {
        Intrinsics.checkNotNullParameter(tokenListener, "tokenListener");
        this.tokenListener = tokenListener;
        String str = this.token;
        if (str != null) {
            tokenListener.invoke(str);
        }
    }

    public final void setVibrationsEnabled(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.cache.setVibrationsEnabled(context, z10);
    }

    public final boolean shouldNotifyEveryTime(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return this.cache.shouldNotifyEveryTime(context);
    }

    public final void showLocalNotification(@NotNull Context context, @NotNull Map<String, ? extends Object> notification) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notification, "notification");
        this.renderer.displayLocal(context, notification);
    }
}
