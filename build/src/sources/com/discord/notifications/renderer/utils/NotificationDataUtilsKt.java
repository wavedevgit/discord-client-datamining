package com.discord.notifications.renderer.utils;

import android.app.PendingIntent;
import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.text.SpannableStringBuilder;
import android.text.style.ForegroundColorSpan;
import android.text.style.StyleSpan;
import androidx.core.app.NotificationCompat;
import androidx.core.app.Person;
import androidx.core.content.pm.ShortcutInfoCompat;
import androidx.core.graphics.drawable.IconCompat;
import com.discord.crash_reporting.CrashReporting;
import com.discord.device.utils.IsMetaQuestKt;
import com.discord.icons.IconUrlUtils;
import com.discord.misc.utilities.intent.PendingIntentUtils;
import com.discord.notifications.actions.intents.ContentAction;
import com.discord.notifications.actions.intents.DeleteAction;
import com.discord.notifications.actions.intents.DirectReplyAction;
import com.discord.notifications.actions.intents.DismissCallAction;
import com.discord.notifications.actions.intents.MarkAsReadAction;
import com.discord.notifications.actions.intents.MuteAction;
import com.discord.notifications.actions.intents.NotificationAction;
import com.discord.notifications.api.Component;
import com.discord.notifications.api.Embed;
import com.discord.notifications.api.KvMessageEntry;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.api.NotificationMessage;
import com.discord.notifications.api.Poll;
import com.discord.notifications.api.PollMedia;
import com.discord.notifications.api.Sticker;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.notifications.renderer.R;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageFlag;
import com.discord.primitives.MessageFlagKt;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageIdSnowflake;
import com.discord.primitives.UserId;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.react_strings.RenderContext;
import com.discord.shortcuts.ShortcutData;
import com.discord.shortcuts.ShortcutUtilsKt;
import com.discord.snowflake.SnowflakeUtilsKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0086\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\r\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\u001a\u0011\u0010\u0002\u001a\u00020\u0001*\u00020\u0000¢\u0006\u0004\b\u0002\u0010\u0003\u001a\u0013\u0010\u0004\u001a\u00020\u0001*\u00020\u0000H\u0000¢\u0006\u0004\b\u0004\u0010\u0003\u001a\u0013\u0010\u0006\u001a\u00020\u0005*\u00020\u0000H\u0000¢\u0006\u0004\b\u0006\u0010\u0007\u001a\u0013\u0010\b\u001a\u00020\u0005*\u00020\u0000H\u0000¢\u0006\u0004\b\b\u0010\u0007\u001a\u0013\u0010\t\u001a\u00020\u0005*\u00020\u0000H\u0000¢\u0006\u0004\b\t\u0010\u0007\u001a\u0013\u0010\n\u001a\u00020\u0005*\u00020\u0000H\u0000¢\u0006\u0004\b\n\u0010\u0007\u001a\u0013\u0010\u000b\u001a\u00020\u0005*\u00020\u0000H\u0000¢\u0006\u0004\b\u000b\u0010\u0007\u001a\u0013\u0010\r\u001a\u00020\f*\u00020\u0000H\u0000¢\u0006\u0004\b\r\u0010\u000e\u001a\u0013\u0010\u000f\u001a\u00020\u0001*\u00020\u0000H\u0000¢\u0006\u0004\b\u000f\u0010\u0003\u001a\u0019\u0010\u0013\u001a\u00020\u0012*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\b\u0013\u0010\u0014\u001a\u0015\u0010\u0015\u001a\u0004\u0018\u00010\u0012*\u00020\u0000H\u0000¢\u0006\u0004\b\u0015\u0010\u0016\u001a%\u0010\u0018\u001a\u0004\u0018\u00010\u0012*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0017\u001a\u00020\u0005H\u0000¢\u0006\u0004\b\u0018\u0010\u0019\u001a#\u0010\u001a\u001a\u0004\u0018\u00010\u0012*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0017\u001a\u00020\u0005¢\u0006\u0004\b\u001a\u0010\u0019\u001a+\u0010 \u001a\u00020\u00122\u0006\u0010\u0011\u001a\u00020\u00102\b\u0010\u001c\u001a\u0004\u0018\u00010\u001b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u0001H\u0002¢\u0006\u0004\b\u001e\u0010\u001f\u001a\u0013\u0010\"\u001a\u00020!*\u00020\u0000H\u0000¢\u0006\u0004\b\"\u0010#\u001a\u0013\u0010&\u001a\u00020%*\u00020$H\u0002¢\u0006\u0004\b&\u0010'\u001a\u001d\u0010*\u001a\u00020)*\u00020\u00002\b\u0010(\u001a\u0004\u0018\u00010$H\u0000¢\u0006\u0004\b*\u0010+\u001a\u001f\u0010,\u001a\u0004\u0018\u00010)*\u00020\u00002\b\u0010(\u001a\u0004\u0018\u00010$H\u0000¢\u0006\u0004\b,\u0010+\u001aC\u00101\u001a\u000200*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u00102\u0012\u0010.\u001a\u000e\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u00010-2\b\u0010(\u001a\u0004\u0018\u00010$2\b\u0010/\u001a\u0004\u0018\u00010$H\u0000¢\u0006\u0004\b1\u00102\u001a\u001b\u00103\u001a\u00020\u0001*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010H\u0000¢\u0006\u0004\b3\u00104\u001a\u001b\u00105\u001a\u00020\u0001*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010H\u0000¢\u0006\u0004\b5\u00104\u001a\u001b\u00107\u001a\u000206*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010H\u0000¢\u0006\u0004\b7\u00108\u001a3\u0010:\u001a\u0002062\u0006\u0010\u0011\u001a\u00020\u00102\u0012\u0010.\u001a\u000e\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u00010-2\u0006\u00109\u001a\u00020\u0001H\u0002¢\u0006\u0004\b:\u0010;\u001a/\u0010<\u001a\u000206*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u00102\u0012\u0010.\u001a\u000e\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u00010-H\u0000¢\u0006\u0004\b<\u0010=\u001a/\u0010>\u001a\u000206*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u00102\u0012\u0010.\u001a\u000e\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u00010-H\u0000¢\u0006\u0004\b>\u0010=\u001a\u001d\u0010@\u001a\u0004\u0018\u00010?*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010H\u0000¢\u0006\u0004\b@\u0010A\u001a\u001d\u0010B\u001a\u0004\u0018\u00010?*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010H\u0000¢\u0006\u0004\bB\u0010A\u001a\u001d\u0010D\u001a\u0004\u0018\u00010C*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010H\u0000¢\u0006\u0004\bD\u0010E\u001a7\u0010G\u001a\u0004\u0018\u00010?*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010F\u001a\u00020\u00052\u0012\u0010.\u001a\u000e\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u00010-¢\u0006\u0004\bG\u0010H\u001a#\u0010J\u001a\u0004\u0018\u00010?*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010I\u001a\u00020\f¢\u0006\u0004\bJ\u0010K\u001a\u001b\u0010L\u001a\u0004\u0018\u00010?*\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\bL\u0010A\u001a\u001d\u0010O\u001a\u0004\u0018\u00010N*\u00020\u00002\b\u0010M\u001a\u0004\u0018\u00010\u0001¢\u0006\u0004\bO\u0010P\u001a\u0011\u0010R\u001a\u00020Q*\u00020\u0000¢\u0006\u0004\bR\u0010S\u001a\u0019\u0010U\u001a\u00020Q*\u00020\u00002\u0006\u0010T\u001a\u00020Q¢\u0006\u0004\bU\u0010V\u001a#\u0010X\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u0017\u001a\u00020\u00052\b\u0010W\u001a\u0004\u0018\u00010\u0001H\u0002¢\u0006\u0004\bX\u0010Y\u001a%\u0010\\\u001a\u00020\u00012\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010Z\u001a\u00020\u00012\u0006\u0010[\u001a\u00020\u0005¢\u0006\u0004\b\\\u0010]¨\u0006^"}, d2 = {"Lcom/discord/notifications/api/NotificationData;", "", "getTag", "(Lcom/discord/notifications/api/NotificationData;)Ljava/lang/String;", "getGroupKey", "", "isGroupConversation", "(Lcom/discord/notifications/api/NotificationData;)Z", "isCallRinging", "shouldUseBigText", "isCall", "shouldUseMessagingStyle", "", "getSmallIcon", "(Lcom/discord/notifications/api/NotificationData;)I", "getNotificationCategory", "Landroid/content/Context;", "context", "", "getTitle", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;)Ljava/lang/CharSequence;", "getConversationTitle", "(Lcom/discord/notifications/api/NotificationData;)Ljava/lang/CharSequence;", "forLogs", "renderMessageContent", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;Z)Ljava/lang/CharSequence;", "getContent", "Lcom/discord/primitives/UserId;", "userId", "userName", "getSystemMessageUserJoin-_NT-lnE", "(Landroid/content/Context;Lcom/discord/primitives/UserId;Ljava/lang/String;)Ljava/lang/CharSequence;", "getSystemMessageUserJoin", "", "getSendTime", "(Lcom/discord/notifications/api/NotificationData;)J", "Landroid/graphics/Bitmap;", "Landroidx/core/graphics/drawable/IconCompat;", "toIconCompat", "(Landroid/graphics/Bitmap;)Landroidx/core/graphics/drawable/IconCompat;", "icon", "Landroidx/core/app/Person;", "getSender", "(Lcom/discord/notifications/api/NotificationData;Landroid/graphics/Bitmap;)Landroidx/core/app/Person;", "getSenderForMessageNotification", "", "notificationDataMap", "avatar", "Landroidx/core/content/pm/ShortcutInfoCompat;", "getShortcutInfo", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;Ljava/util/Map;Landroid/graphics/Bitmap;Landroid/graphics/Bitmap;)Landroidx/core/content/pm/ShortcutInfoCompat;", "getIconUrl", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;)Ljava/lang/String;", "getIconUrlForAvatar", "Landroid/app/PendingIntent;", "getDeletePendingIntent", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;)Landroid/app/PendingIntent;", "tag", "getPendingIntent", "(Landroid/content/Context;Ljava/util/Map;Ljava/lang/String;)Landroid/app/PendingIntent;", "getContentPendingIntent", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;Ljava/util/Map;)Landroid/app/PendingIntent;", "getButtonPendingIntent", "Landroidx/core/app/NotificationCompat$Action;", "getMarkAsReadAction", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;)Landroidx/core/app/NotificationCompat$Action;", "getDirectReplyAction", "Landroid/net/Uri;", "getSound", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;)Landroid/net/Uri;", "isAcceptAction", "getCallAction", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;ZLjava/util/Map;)Landroidx/core/app/NotificationCompat$Action;", "numMessages", "getTimedMuteAction", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;I)Landroidx/core/app/NotificationCompat$Action;", "getBotDMMuteAction", "rawMessage", "Lcom/discord/notifications/api/KvMessageEntry;", "getKvMessage", "(Lcom/discord/notifications/api/NotificationData;Ljava/lang/String;)Lcom/discord/notifications/api/KvMessageEntry;", "Lkotlinx/serialization/json/JsonObject;", "getAuthor", "(Lcom/discord/notifications/api/NotificationData;)Lkotlinx/serialization/json/JsonObject;", "author", "toNotificationMessage", "(Lcom/discord/notifications/api/NotificationData;Lkotlinx/serialization/json/JsonObject;)Lkotlinx/serialization/json/JsonObject;", "messageContent", "renderLogAwareNotificationMessageContent", "(ZLjava/lang/String;)Ljava/lang/CharSequence;", NotificationRenderer.USERNAME, NotificationRenderer.IS_DM, "getMissedCallText", "(Landroid/content/Context;Ljava/lang/String;Z)Ljava/lang/String;", "notification_renderer_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNotificationDataUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationDataUtils.kt\ncom/discord/notifications/renderer/utils/NotificationDataUtilsKt\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n+ 3 SpannableStringBuilder.kt\nandroidx/core/text/SpannableStringBuilderKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 JsonElementBuilders.kt\nkotlinx/serialization/json/JsonElementBuildersKt\n+ 6 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,844:1\n29#2:845\n87#3:846\n74#3,2:847\n115#3:849\n74#3,4:850\n1563#4:854\n1634#4,3:855\n29#5,3:858\n29#5,3:861\n1#6:864\n*S KotlinDebug\n*F\n+ 1 NotificationDataUtils.kt\ncom/discord/notifications/renderer/utils/NotificationDataUtilsKt\n*L\n621#1:845\n662#1:846\n662#1:847,2\n662#1:849\n662#1:850,4\n738#1:854\n738#1:855,3\n782#1:858,3\n808#1:861,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationDataUtilsKt {
    @NotNull
    public static final JsonObject getAuthor(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        String userAvatar = notificationData.getUserAvatar();
        UserId m1025getUserIdwUX8bhU = notificationData.m1025getUserIdwUX8bhU();
        Intrinsics.checkNotNull(m1025getUserIdwUX8bhU);
        long m1144unboximpl = m1025getUserIdwUX8bhU.m1144unboximpl();
        String userUsername = notificationData.getUserUsername();
        Intrinsics.checkNotNull(userUsername);
        kt.x xVar = new kt.x();
        if (userAvatar != null) {
            kt.g.c(xVar, "avatar", userAvatar);
        }
        kt.g.c(xVar, StackTraceHelper.ID_KEY, UserId.m1142toStringimpl(m1144unboximpl));
        kt.g.c(xVar, NotificationRenderer.USERNAME, userUsername);
        kt.g.c(xVar, "globalName", notificationData.getUserGlobalName());
        kt.g.a(xVar, "incomplete", Boolean.TRUE);
        return xVar.a();
    }

    public static final NotificationCompat.Action getBotDMMuteAction(@NotNull final NotificationData notificationData, @NotNull Context context) {
        ChannelId m1020getChannelIdqMVnFVQ;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE) || !notificationData.getAppDm() || (m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ()) == null) {
            return null;
        }
        return new NotificationCompat.Action.a(R.drawable.ic_notifications_off_24dp, I18nUtilsKt.i18nFormat(context, I18nMessage.NOTIFICATION_MUTE_APP_DM, new Function1() { // from class: com.discord.notifications.renderer.utils.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit botDMMuteAction$lambda$32;
                botDMMuteAction$lambda$32 = NotificationDataUtilsKt.getBotDMMuteAction$lambda$32(NotificationData.this, (RenderContext) obj);
                return botDMMuteAction$lambda$32;
            }
        }), NotificationAction.DefaultImpls.toPendingIntent$default(new MuteAction(getTag(notificationData), notificationData.m1021getGuildIdqOKuAAo(), m1020getChannelIdqMVnFVQ.m1066unboximpl(), -1, null), context, 0, false, 6, null)).c();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getBotDMMuteAction$lambda$32(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("app", notificationData.getUserUsername());
        return Unit.f32008a;
    }

    @NotNull
    public static final PendingIntent getButtonPendingIntent(@NotNull NotificationData notificationData, @NotNull Context context, @NotNull Map<String, String> notificationDataMap) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notificationDataMap, "notificationDataMap");
        String tag = getTag(notificationData);
        return getPendingIntent(context, notificationDataMap, tag + "button");
    }

    public static final NotificationCompat.Action getCallAction(@NotNull NotificationData notificationData, @NotNull Context context, boolean z10, @NotNull Map<String, String> notificationDataMap) {
        ChannelId m1020getChannelIdqMVnFVQ;
        Context context2;
        PendingIntent pendingIntent$default;
        Pair a10;
        int i10;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notificationDataMap, "notificationDataMap");
        if (Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_CALL_RING) && (m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ()) != null) {
            long m1066unboximpl = m1020getChannelIdqMVnFVQ.m1066unboximpl();
            UserId m1025getUserIdwUX8bhU = notificationData.m1025getUserIdwUX8bhU();
            if (m1025getUserIdwUX8bhU != null) {
                long m1144unboximpl = m1025getUserIdwUX8bhU.m1144unboximpl();
                if (z10) {
                    Map y10 = o0.y(notificationDataMap);
                    y10.put("type", NotificationData.TYPE_CALL_CONNECT);
                    pendingIntent$default = getPendingIntent(context, y10, getTag(notificationData));
                    context2 = context;
                } else {
                    context2 = context;
                    pendingIntent$default = NotificationAction.DefaultImpls.toPendingIntent$default(new DismissCallAction(getTag(notificationData), m1066unboximpl, false, notificationData.m1021getGuildIdqOKuAAo(), m1144unboximpl, null), context2, 0, false, 6, null);
                }
                if (z10) {
                    a10 = qr.v.a(I18nUtilsKt.i18nFormat$default(context2, I18nMessage.JOIN_CALL, null, 2, null), Integer.valueOf(ColorUtilsKt.getColorCompat(context2, com.discord.theme.R.color.green_360)));
                } else {
                    a10 = qr.v.a(I18nUtilsKt.i18nFormat$default(context2, I18nMessage.DECLINE, null, 2, null), Integer.valueOf(ColorUtilsKt.getColorCompat(context2, com.discord.theme.R.color.red_400)));
                }
                int intValue = ((Number) a10.b()).intValue();
                SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
                StyleSpan styleSpan = new StyleSpan(1);
                int length = spannableStringBuilder.length();
                ForegroundColorSpan foregroundColorSpan = new ForegroundColorSpan(intValue);
                int length2 = spannableStringBuilder.length();
                spannableStringBuilder.append((CharSequence) a10.a());
                spannableStringBuilder.setSpan(foregroundColorSpan, length2, spannableStringBuilder.length(), 17);
                spannableStringBuilder.setSpan(styleSpan, length, spannableStringBuilder.length(), 17);
                if (z10) {
                    i10 = R.drawable.ic_call_24dp;
                } else {
                    i10 = R.drawable.ic_call_disconnect_24dp;
                }
                return new NotificationCompat.Action.a(i10, spannableStringBuilder, pendingIntent$default).c();
            }
        }
        return null;
    }

    public static final CharSequence getContent(@NotNull final NotificationData notificationData, @NotNull Context context, boolean z10) {
        String subtitle;
        Integer activityType;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        String type = notificationData.getType();
        switch (type.hashCode()) {
            case -1502317553:
                if (!type.equals(NotificationData.TYPE_GENERIC_PUSH_NOTIFICATION_SENT) || (subtitle = notificationData.getSubtitle()) == null) {
                    return "";
                }
                return subtitle;
            case -1489275252:
                if (type.equals(NotificationData.TYPE_GUILD_SCHEDULED_EVENT_UPDATE)) {
                    Integer guildScheduledEventEntityType = notificationData.getGuildScheduledEventEntityType();
                    if ((guildScheduledEventEntityType == null || guildScheduledEventEntityType.intValue() != 2) && (guildScheduledEventEntityType == null || guildScheduledEventEntityType.intValue() != 1)) {
                        if (guildScheduledEventEntityType == null || guildScheduledEventEntityType.intValue() != 3) {
                            return "";
                        }
                        return I18nUtilsKt.i18nFormat(context, I18nMessage.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY, new Function1() { // from class: com.discord.notifications.renderer.utils.r
                            @Override // kotlin.jvm.functions.Function1
                            public final Object invoke(Object obj) {
                                Unit content$lambda$24;
                                content$lambda$24 = NotificationDataUtilsKt.getContent$lambda$24(NotificationData.this, (RenderContext) obj);
                                return content$lambda$24;
                            }
                        });
                    }
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.GUILD_SCHEDULED_EVENT_STAGE_START_BODY, new Function1() { // from class: com.discord.notifications.renderer.utils.q
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit content$lambda$23;
                            content$lambda$23 = NotificationDataUtilsKt.getContent$lambda$23(NotificationData.this, (RenderContext) obj);
                            return content$lambda$23;
                        }
                    });
                }
                break;
            case -1327124998:
                if (type.equals(NotificationData.TYPE_RELATIONSHIP_ADD)) {
                    Integer relationshipType = notificationData.getRelationshipType();
                    if (relationshipType != null && relationshipType.intValue() == 1) {
                        return I18nUtilsKt.i18nFormat$default(context, I18nMessage.NOTIFICATION_ACCEPTED_FRIEND_REQUEST, null, 2, null);
                    }
                    if (relationshipType == null || relationshipType.intValue() != 3) {
                        return "";
                    }
                    return I18nUtilsKt.i18nFormat$default(context, I18nMessage.NOTIFICATION_PENDING_FRIEND_REQUEST, null, 2, null);
                }
                break;
            case -1263316859:
                if (type.equals(NotificationData.TYPE_STAGE_INSTANCE_CREATE)) {
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.STAGE_START_PUSH_NOTIFICATION_BODY, new Function1() { // from class: com.discord.notifications.renderer.utils.o
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit content$lambda$21;
                            content$lambda$21 = NotificationDataUtilsKt.getContent$lambda$21(NotificationData.this, (RenderContext) obj);
                            return content$lambda$21;
                        }
                    });
                }
                break;
            case -1237752112:
                if (type.equals(NotificationData.TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE)) {
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY, new Function1() { // from class: com.discord.notifications.renderer.utils.n
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit content$lambda$20;
                            content$lambda$20 = NotificationDataUtilsKt.getContent$lambda$20(NotificationData.this, (RenderContext) obj);
                            return content$lambda$20;
                        }
                    });
                }
                break;
            case -437641071:
                if (type.equals(NotificationData.TYPE_FORUM_THREAD_CREATED)) {
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE, new Function1() { // from class: com.discord.notifications.renderer.utils.p
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit content$lambda$22;
                            content$lambda$22 = NotificationDataUtilsKt.getContent$lambda$22(NotificationData.this, (RenderContext) obj);
                            return content$lambda$22;
                        }
                    });
                }
                break;
            case -45642698:
                if (type.equals(NotificationData.TYPE_FRIEND_SUGGESTION_CREATE)) {
                    return I18nUtilsKt.i18nFormat$default(context, I18nMessage.NOTIFICATION_FRIEND_SUGGESTION_BODY, null, 2, null);
                }
                break;
            case 974015250:
                if (!type.equals(NotificationData.TYPE_ACTIVITY_START) || (activityType = notificationData.getActivityType()) == null || activityType.intValue() != 0) {
                    return "";
                }
                return I18nUtilsKt.i18nFormat(context, I18nMessage.NOTIFICATION_BODY_START_GAME, new Function1() { // from class: com.discord.notifications.renderer.utils.k
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit content$lambda$18;
                        content$lambda$18 = NotificationDataUtilsKt.getContent$lambda$18(NotificationData.this, (RenderContext) obj);
                        return content$lambda$18;
                    }
                });
            case 998188116:
                if (type.equals(NotificationData.TYPE_MESSAGE_CREATE)) {
                    Integer channelType = notificationData.getChannelType();
                    if ((channelType == null || channelType.intValue() != 0) && ((channelType == null || channelType.intValue() != 2) && ((channelType == null || channelType.intValue() != 5) && ((channelType == null || channelType.intValue() != 10) && ((channelType == null || channelType.intValue() != 11) && (channelType == null || channelType.intValue() != 12)))))) {
                        if ((channelType == null || channelType.intValue() != 3) && (channelType == null || channelType.intValue() != 1)) {
                            return "";
                        }
                        Integer messageActivityType = notificationData.getMessageActivityType();
                        if (messageActivityType != null && messageActivityType.intValue() == 1) {
                            return I18nUtilsKt.i18nFormat(context, I18nMessage.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN, new Function1() { // from class: com.discord.notifications.renderer.utils.j
                                @Override // kotlin.jvm.functions.Function1
                                public final Object invoke(Object obj) {
                                    Unit content$lambda$17;
                                    content$lambda$17 = NotificationDataUtilsKt.getContent$lambda$17(NotificationData.this, (RenderContext) obj);
                                    return content$lambda$17;
                                }
                            });
                        }
                        return renderMessageContent(notificationData, context, z10);
                    }
                    Integer messageType = notificationData.getMessageType();
                    if (messageType != null && messageType.intValue() == 7) {
                        return m1042getSystemMessageUserJoin_NTlnE(context, notificationData.m1025getUserIdwUX8bhU(), notificationData.getUserUsername());
                    }
                    Integer messageActivityType2 = notificationData.getMessageActivityType();
                    if (messageActivityType2 != null && messageActivityType2.intValue() == 1) {
                        return I18nUtilsKt.i18nFormat(context, I18nMessage.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, new Function1() { // from class: com.discord.notifications.renderer.utils.i
                            @Override // kotlin.jvm.functions.Function1
                            public final Object invoke(Object obj) {
                                Unit content$lambda$16;
                                content$lambda$16 = NotificationDataUtilsKt.getContent$lambda$16(NotificationData.this, (RenderContext) obj);
                                return content$lambda$16;
                            }
                        });
                    }
                    return renderMessageContent(notificationData, context, z10);
                }
                break;
            case 1770025841:
                if (type.equals(NotificationData.TYPE_CALL_RING)) {
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.OVERLAY_FRIEND_CALLING, new Function1() { // from class: com.discord.notifications.renderer.utils.m
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit content$lambda$19;
                            content$lambda$19 = NotificationDataUtilsKt.getContent$lambda$19(NotificationData.this, (RenderContext) obj);
                            return content$lambda$19;
                        }
                    });
                }
                break;
        }
        return "";
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$16(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("user", notificationData.getUserUsername());
        i18nFormat.getArgs().put("game", notificationData.getMessageApplicationName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$17(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("user", notificationData.getUserUsername());
        i18nFormat.getArgs().put("game", notificationData.getMessageApplicationName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$18(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(NotificationRenderer.USERNAME, notificationData.getUserUsername());
        i18nFormat.getArgs().put("gameName", notificationData.getActivityName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$19(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(StackTraceHelper.NAME_KEY, notificationData.getUserUsername());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$20(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(StackTraceHelper.NAME_KEY, notificationData.getApplicationName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$21(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(NotificationRenderer.USERNAME, notificationData.getUserUsername());
        i18nFormat.getArgs().put("topic", notificationData.getStageInstanceTopic());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$22(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(NotificationRenderer.CHANNEL_NAME, notificationData.getChannelName());
        i18nFormat.getArgs().put("userUsername", notificationData.getUserUsername());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$23(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("topic", notificationData.getStageInstanceTopic());
        i18nFormat.getArgs().put(NotificationRenderer.USERNAME, notificationData.getUserUsername());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getContent$lambda$24(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("topic", notificationData.getStageInstanceTopic());
        return Unit.f32008a;
    }

    @NotNull
    public static final PendingIntent getContentPendingIntent(@NotNull NotificationData notificationData, @NotNull Context context, @NotNull Map<String, String> notificationDataMap) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notificationDataMap, "notificationDataMap");
        String tag = getTag(notificationData);
        return getPendingIntent(context, notificationDataMap, tag + "content");
    }

    public static final CharSequence getConversationTitle(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE)) {
            return null;
        }
        Integer channelType = notificationData.getChannelType();
        if ((channelType == null || channelType.intValue() != 0) && ((channelType == null || channelType.intValue() != 2) && ((channelType == null || channelType.intValue() != 5) && ((channelType == null || channelType.intValue() != 10) && ((channelType == null || channelType.intValue() != 11) && (channelType == null || channelType.intValue() != 12)))))) {
            if (channelType == null || channelType.intValue() != 3) {
                return null;
            }
            String channelName = notificationData.getChannelName();
            if (channelName == null) {
                return notificationData.getUserUsername();
            }
            return channelName;
        }
        String guildName = notificationData.getGuildName();
        String channelName2 = notificationData.getChannelName();
        return guildName + " #" + channelName2;
    }

    @NotNull
    public static final PendingIntent getDeletePendingIntent(@NotNull NotificationData notificationData, @NotNull Context context) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        return NotificationAction.DefaultImpls.toPendingIntent$default(new DeleteAction(getTag(notificationData)), context, 0, false, 6, null);
    }

    public static final NotificationCompat.Action getDirectReplyAction(@NotNull NotificationData notificationData, @NotNull Context context) {
        ChannelId m1020getChannelIdqMVnFVQ;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE) || !notificationData.getCanReply() || notificationData.getAppDm() || (m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ()) == null || IsMetaQuestKt.isMetaQuest()) {
            return null;
        }
        return new NotificationCompat.Action.a(R.drawable.ic_send_white_24dp, I18nUtilsKt.i18nFormat$default(context, I18nMessage.NOTIFICATION_REPLY, null, 2, null), NotificationAction.DefaultImpls.toPendingIntent$default(new DirectReplyAction(getTag(notificationData), m1020getChannelIdqMVnFVQ.m1066unboximpl(), notificationData.getChannelName(), notificationData.getChannelType(), notificationData.getGuildName(), null), context, PendingIntentUtils.mutablePendingIntentFlag$default(PendingIntentUtils.INSTANCE, 0, 1, null), false, 4, null)).b(DirectReplyAction.Companion.toRemoteInput(I18nUtilsKt.i18nFormat$default(context, I18nMessage.SEND_MESSAGE, null, 2, null).toString())).f(true).i(1).j(false).c();
    }

    @NotNull
    public static final String getGroupKey(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        String type = notificationData.getType();
        return "GROUP_" + type;
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x002d, code lost:
        r0 = r13.getChannelType();
        r1 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0032, code lost:
        if (r0 != null) goto L36;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x003a, code lost:
        if (r0.intValue() != 1) goto L7;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0054, code lost:
        return com.discord.icons.IconUrlUtils.m915getForUser_fRzTXg$default(com.discord.icons.IconUrlUtils.INSTANCE, r14, r13.m1025getUserIdwUX8bhU(), r13.getUserAvatar(), r13.getUserDiscriminator(), false, null, 32, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0055, code lost:
        if (r0 != null) goto L9;
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x005c, code lost:
        if (r0.intValue() == 0) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x005e, code lost:
        if (r0 != null) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0066, code lost:
        if (r0.intValue() == 2) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (r0 != null) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0070, code lost:
        if (r0.intValue() == 5) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:30:0x0072, code lost:
        if (r0 != null) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x007b, code lost:
        if (r0.intValue() == 10) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x007d, code lost:
        if (r0 != null) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x0086, code lost:
        if (r0.intValue() == 11) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x0088, code lost:
        if (r0 != null) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x0091, code lost:
        if (r0.intValue() != 12) goto L29;
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x0094, code lost:
        r0 = com.discord.icons.IconUrlUtils.INSTANCE;
        r2 = r13.m1020getChannelIdqMVnFVQ();
        r3 = r13.getChannelIcon();
        r13 = r13.getChannelType();
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x00a2, code lost:
        if (r13 != null) goto L31;
     */
    /* JADX WARN: Code restructure failed: missing block: B:47:0x00aa, code lost:
        if (r13.intValue() != 3) goto L35;
     */
    /* JADX WARN: Code restructure failed: missing block: B:49:0x00ad, code lost:
        r1 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x00b9, code lost:
        return com.discord.icons.IconUrlUtils.m912getForChannelJYSGpIY$default(r0, r14, r2, r3, r1, null, 16, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:53:0x00cf, code lost:
        return com.discord.icons.IconUrlUtils.m913getForGuild14CJxO4$default(com.discord.icons.IconUrlUtils.INSTANCE, r13.m1021getGuildIdqOKuAAo(), r13.getGuildIcon(), "", false, null, 24, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:55:0x00d6, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_ACTIVITY_START) == false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:63:0x0100, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_FORUM_THREAD_CREATED) == false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:66:0x0109, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE) == false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:69:0x0112, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_STAGE_INSTANCE_CREATE) == false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:6:0x001f, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_CALL_RING) == false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:72:0x011b, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_RELATIONSHIP_ADD) == false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:75:0x012f, code lost:
        return com.discord.icons.IconUrlUtils.m911getApplicationIconweIltyw$default(com.discord.icons.IconUrlUtils.INSTANCE, r13.m1019getApplicationIdUtIrSio(), r13.getApplicationIcon(), 0, 4, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:77:0x0136, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_GUILD_SCHEDULED_EVENT_UPDATE) == false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:80:0x014e, code lost:
        return com.discord.icons.IconUrlUtils.m913getForGuild14CJxO4$default(com.discord.icons.IconUrlUtils.INSTANCE, r13.m1021getGuildIdqOKuAAo(), r13.getGuildIcon(), "", false, null, 24, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0029, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_MESSAGE_CREATE) == false) goto L68;
     */
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.String getIconUrl(@org.jetbrains.annotations.NotNull com.discord.notifications.api.NotificationData r13, @org.jetbrains.annotations.NotNull android.content.Context r14) {
        /*
            Method dump skipped, instructions count: 394
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.renderer.utils.NotificationDataUtilsKt.getIconUrl(com.discord.notifications.api.NotificationData, android.content.Context):java.lang.String");
    }

    @NotNull
    public static final String getIconUrlForAvatar(@NotNull NotificationData notificationData, @NotNull Context context) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        IconUrlUtils iconUrlUtils = IconUrlUtils.INSTANCE;
        String m914getForGuildMember2tNb6hE$default = IconUrlUtils.m914getForGuildMember2tNb6hE$default(iconUrlUtils, notificationData.getUserGuildAvatar(), notificationData.m1021getGuildIdqOKuAAo(), notificationData.m1025getUserIdwUX8bhU(), null, false, 24, null);
        if (m914getForGuildMember2tNb6hE$default.length() == 0) {
            return IconUrlUtils.m915getForUser_fRzTXg$default(iconUrlUtils, context, notificationData.m1025getUserIdwUX8bhU(), notificationData.getUserAvatar(), notificationData.getUserDiscriminator(), false, null, 32, null);
        }
        return m914getForGuildMember2tNb6hE$default;
    }

    public static final KvMessageEntry getKvMessage(@NotNull NotificationData notificationData, String str) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        String m1022getMessageIdN_6c4I0 = notificationData.m1022getMessageIdN_6c4I0();
        ChannelId m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ();
        if (m1022getMessageIdN_6c4I0 != null && m1020getChannelIdqMVnFVQ != null && Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE)) {
            NotificationMessage message = notificationData.getMessage();
            if (str != null && message != null) {
                JsonElement g10 = Json.f35120d.g(str);
                List l10 = CollectionsKt.l();
                JsonObject author = message.getAuthor();
                Intrinsics.checkNotNull(author);
                List<JsonObject> L0 = CollectionsKt.L0(CollectionsKt.e(author), message.getMentions());
                ArrayList arrayList = new ArrayList(CollectionsKt.w(L0, 10));
                for (JsonObject jsonObject : L0) {
                    Map y10 = o0.y(jsonObject);
                    y10.put("incomplete", kt.h.b(Boolean.TRUE));
                    arrayList.add(new JsonObject(y10));
                }
                return new KvMessageEntry(l10, arrayList, kt.h.n(g10), m1022getMessageIdN_6c4I0, m1020getChannelIdqMVnFVQ.m1066unboximpl(), null);
            }
            try {
                JsonObject author2 = getAuthor(notificationData);
                return new KvMessageEntry(CollectionsKt.l(), CollectionsKt.e(author2), toNotificationMessage(notificationData, author2), m1022getMessageIdN_6c4I0, m1020getChannelIdqMVnFVQ.m1066unboximpl(), null);
            } catch (Exception e10) {
                CrashReporting.captureException$default(CrashReporting.INSTANCE, e10, false, 2, null);
            }
        }
        return null;
    }

    public static final NotificationCompat.Action getMarkAsReadAction(@NotNull NotificationData notificationData, @NotNull Context context) {
        ChannelId m1020getChannelIdqMVnFVQ;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE) || (m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ()) == null) {
            return null;
        }
        long m1066unboximpl = m1020getChannelIdqMVnFVQ.m1066unboximpl();
        String m1022getMessageIdN_6c4I0 = notificationData.m1022getMessageIdN_6c4I0();
        if (m1022getMessageIdN_6c4I0 == null) {
            return null;
        }
        return new NotificationCompat.Action.a(R.drawable.ic_check_grey_24dp, I18nUtilsKt.i18nFormat$default(context, I18nMessage.MARK_AS_READ, null, 2, null), NotificationAction.DefaultImpls.toPendingIntent$default(new MarkAsReadAction(getTag(notificationData), m1066unboximpl, m1022getMessageIdN_6c4I0, null), context, 0, false, 6, null)).i(2).j(false).c();
    }

    @NotNull
    public static final String getMissedCallText(@NotNull Context context, @NotNull final String username, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(username, "username");
        if (z10) {
            return I18nUtilsKt.i18nFormat$default(context, I18nMessage.MISSED_CALL_NOTIFICATION, null, 2, null).toString();
        }
        return I18nUtilsKt.i18nFormat(context, I18nMessage.MISSED_CALL_NOTIFICATION_FROM, new Function1() { // from class: com.discord.notifications.renderer.utils.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit missedCallText$lambda$37;
                missedCallText$lambda$37 = NotificationDataUtilsKt.getMissedCallText$lambda$37(username, (RenderContext) obj);
                return missedCallText$lambda$37;
            }
        }).toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getMissedCallText$lambda$37(String str, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(StackTraceHelper.NAME_KEY, str);
        return Unit.f32008a;
    }

    @NotNull
    public static final String getNotificationCategory(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        String type = notificationData.getType();
        switch (type.hashCode()) {
            case -1502317553:
                if (!type.equals(NotificationData.TYPE_GENERIC_PUSH_NOTIFICATION_SENT)) {
                    return "msg";
                }
                return "social";
            case -1489275252:
                if (!type.equals(NotificationData.TYPE_GUILD_SCHEDULED_EVENT_UPDATE)) {
                    return "msg";
                }
                return "social";
            case -1327124998:
                if (!type.equals(NotificationData.TYPE_RELATIONSHIP_ADD)) {
                    return "msg";
                }
                return "social";
            case -1263316859:
                if (!type.equals(NotificationData.TYPE_STAGE_INSTANCE_CREATE)) {
                    return "msg";
                }
                return "social";
            case -1237752112:
                if (type.equals(NotificationData.TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE)) {
                    return ReactProgressBarViewManager.PROP_PROGRESS;
                }
                return "msg";
            case -437641071:
                if (!type.equals(NotificationData.TYPE_FORUM_THREAD_CREATED)) {
                    return "msg";
                }
                return "social";
            case 974015250:
                if (!type.equals(NotificationData.TYPE_ACTIVITY_START)) {
                    return "msg";
                }
                return "social";
            case 1471047007:
                if (type.equals(NotificationData.TYPE_LOCAL_NOTIFICATION)) {
                    return "status";
                }
                return "msg";
            case 1770025841:
                if (type.equals(NotificationData.TYPE_CALL_RING)) {
                    return "call";
                }
                return "msg";
            default:
                return "msg";
        }
    }

    private static final PendingIntent getPendingIntent(Context context, Map<String, String> map, String str) {
        return NotificationAction.DefaultImpls.toPendingIntent$default(new ContentAction(str, map), context, 0, true, 2, null);
    }

    public static final long getSendTime(@NotNull NotificationData notificationData) {
        MessageIdSnowflake m1089toSnowflakewDbSOA;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        String m1022getMessageIdN_6c4I0 = notificationData.m1022getMessageIdN_6c4I0();
        if (m1022getMessageIdN_6c4I0 != null && (m1089toSnowflakewDbSOA = MessageId.m1089toSnowflakewDbSOA(m1022getMessageIdN_6c4I0)) != null) {
            return SnowflakeUtilsKt.toTimestamp(m1089toSnowflakewDbSOA);
        }
        return System.currentTimeMillis();
    }

    /* JADX WARN: Code restructure failed: missing block: B:9:0x002e, code lost:
        if (r2.intValue() == 1) goto L8;
     */
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final androidx.core.app.Person getSender(@org.jetbrains.annotations.NotNull com.discord.notifications.api.NotificationData r2, android.graphics.Bitmap r3) {
        /*
            java.lang.String r0 = "<this>"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            androidx.core.app.Person$c r0 = new androidx.core.app.Person$c
            r0.<init>()
            java.lang.String r1 = r2.getUserUsername()
            if (r1 != 0) goto L12
            java.lang.String r1 = ""
        L12:
            androidx.core.app.Person$c r0 = r0.f(r1)
            com.discord.primitives.UserId r1 = r2.m1025getUserIdwUX8bhU()
            java.lang.String r1 = java.lang.String.valueOf(r1)
            androidx.core.app.Person$c r0 = r0.e(r1)
            java.lang.Integer r2 = r2.getRelationshipType()
            if (r2 != 0) goto L29
            goto L31
        L29:
            int r2 = r2.intValue()
            r1 = 1
            if (r2 != r1) goto L31
            goto L32
        L31:
            r1 = 0
        L32:
            androidx.core.app.Person$c r2 = r0.d(r1)
            if (r3 == 0) goto L3d
            androidx.core.graphics.drawable.IconCompat r3 = toIconCompat(r3)
            goto L3e
        L3d:
            r3 = 0
        L3e:
            androidx.core.app.Person$c r2 = r2.c(r3)
            androidx.core.app.Person r2 = r2.a()
            java.lang.String r3 = "build(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r3)
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.renderer.utils.NotificationDataUtilsKt.getSender(com.discord.notifications.api.NotificationData, android.graphics.Bitmap):androidx.core.app.Person");
    }

    public static final Person getSenderForMessageNotification(@NotNull NotificationData notificationData, Bitmap bitmap) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        if (notificationData.isFromCurrentUser()) {
            return null;
        }
        return getSender(notificationData, bitmap);
    }

    @NotNull
    public static final ShortcutInfoCompat getShortcutInfo(@NotNull NotificationData notificationData, @NotNull Context context, @NotNull Map<String, String> notificationDataMap, Bitmap bitmap, Bitmap bitmap2) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notificationDataMap, "notificationDataMap");
        return ShortcutUtilsKt.createShortcut$default(context, String.valueOf(notificationData.m1020getChannelIdqMVnFVQ()), getTitle(notificationData, context), getTitle(notificationData, context), bitmap, CollectionsKt.e(getSender(notificationData, bitmap2)), ShortcutData.Companion.createShortcutIntent(context, "android.intent.action.VIEW", NotificationAction.Companion.getActivityClass(), getTag(notificationData), notificationDataMap), 0, 64, null);
    }

    public static final int getSmallIcon(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        String type = notificationData.getType();
        switch (type.hashCode()) {
            case -1327124998:
                if (type.equals(NotificationData.TYPE_RELATIONSHIP_ADD)) {
                    return R.drawable.ic_notification_friends_24dp;
                }
                break;
            case -45642698:
                if (type.equals(NotificationData.TYPE_FRIEND_SUGGESTION_CREATE)) {
                    return R.drawable.ic_notification_friends_24dp;
                }
                break;
            case 998188116:
                if (type.equals(NotificationData.TYPE_MESSAGE_CREATE)) {
                    return R.drawable.ic_notification_message_24dp;
                }
                break;
            case 1770025841:
                if (type.equals(NotificationData.TYPE_CALL_RING)) {
                    return R.drawable.ic_notification_call_24dp;
                }
                break;
        }
        return R.drawable.ic_notification_24dp;
    }

    public static final Uri getSound(@NotNull NotificationData notificationData, @NotNull Context context) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_CALL_RING)) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("android.resource://");
            String packageName = context.getPackageName();
            int i10 = com.discord.sounds.R.raw.call_ringing;
            sb2.append(packageName + "/" + i10);
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
            return Uri.parse(sb3);
        }
        return null;
    }

    /* renamed from: getSystemMessageUserJoin-_NT-lnE  reason: not valid java name */
    private static final CharSequence m1042getSystemMessageUserJoin_NTlnE(Context context, UserId userId, final String str) {
        long j10;
        List o10 = CollectionsKt.o(I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, I18nMessage.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013);
        if (userId != null) {
            j10 = userId.m1144unboximpl();
        } else {
            j10 = 0;
        }
        return I18nUtilsKt.i18nFormat(context, (I18nMessage) o10.get((int) (j10 % o10.size())), new Function1() { // from class: com.discord.notifications.renderer.utils.y
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit systemMessageUserJoin__NT_lnE$lambda$26$lambda$25;
                systemMessageUserJoin__NT_lnE$lambda$26$lambda$25 = NotificationDataUtilsKt.getSystemMessageUserJoin__NT_lnE$lambda$26$lambda$25(str, (RenderContext) obj);
                return systemMessageUserJoin__NT_lnE$lambda$26$lambda$25;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getSystemMessageUserJoin__NT_lnE$lambda$26$lambda$25(String str, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(NotificationRenderer.USERNAME, str);
        return Unit.f32008a;
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x0051, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_MESSAGE_CREATE) != false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0082, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_CALL_RING_END) != false) goto L5;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0084, code lost:
        r0 = r3.getType();
        r1 = r3.m1020getChannelIdqMVnFVQ();
        r3 = r3.getTimeReceived();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x00a2, code lost:
        return r0 + r1 + r3;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x00c9, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_FORUM_THREAD_CREATED) != false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:39:0x00f2, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_STAGE_INSTANCE_CREATE) != false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:46:0x011b, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_GUILD_SCHEDULED_EVENT_UPDATE) != false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:47:0x011d, code lost:
        r0 = r3.getType();
        r3 = r3.m1020getChannelIdqMVnFVQ();
     */
    /* JADX WARN: Code restructure failed: missing block: B:48:0x0134, code lost:
        return r0 + r3;
     */
    /* JADX WARN: Code restructure failed: missing block: B:6:0x0018, code lost:
        if (r0.equals(com.discord.notifications.api.NotificationData.TYPE_CALL_RING) != false) goto L5;
     */
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.String getTag(@org.jetbrains.annotations.NotNull com.discord.notifications.api.NotificationData r3) {
        /*
            Method dump skipped, instructions count: 424
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.renderer.utils.NotificationDataUtilsKt.getTag(com.discord.notifications.api.NotificationData):java.lang.String");
    }

    public static final NotificationCompat.Action getTimedMuteAction(@NotNull NotificationData notificationData, @NotNull Context context, int i10) {
        ChannelId m1020getChannelIdqMVnFVQ;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE) || i10 < 2 || notificationData.getAppDm() || (m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ()) == null) {
            return null;
        }
        return new NotificationCompat.Action.a(R.drawable.ic_notifications_off_24dp, I18nUtilsKt.i18nFormat$default(context, I18nMessage.NOTIFICATION_MUTE_1_HOUR, null, 2, null), NotificationAction.DefaultImpls.toPendingIntent$default(new MuteAction(getTag(notificationData), notificationData.m1021getGuildIdqOKuAAo(), m1020getChannelIdqMVnFVQ.m1066unboximpl(), null, null), context, 0, false, 6, null)).c();
    }

    @NotNull
    public static final CharSequence getTitle(@NotNull final NotificationData notificationData, @NotNull Context context) {
        String title;
        Integer guildScheduledEventEntityType;
        String userUsername;
        Integer activityType;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        String type = notificationData.getType();
        switch (type.hashCode()) {
            case -1502317553:
                if (!type.equals(NotificationData.TYPE_GENERIC_PUSH_NOTIFICATION_SENT) || (title = notificationData.getTitle()) == null) {
                    return "";
                }
                return title;
            case -1489275252:
                if (!type.equals(NotificationData.TYPE_GUILD_SCHEDULED_EVENT_UPDATE) || (guildScheduledEventEntityType = notificationData.getGuildScheduledEventEntityType()) == null || guildScheduledEventEntityType.intValue() != 1) {
                    return "";
                }
                return I18nUtilsKt.i18nFormat(context, I18nMessage.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE, new Function1() { // from class: com.discord.notifications.renderer.utils.v
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit title$lambda$4;
                        title$lambda$4 = NotificationDataUtilsKt.getTitle$lambda$4(NotificationData.this, (RenderContext) obj);
                        return title$lambda$4;
                    }
                });
            case -1327124998:
                if (!type.equals(NotificationData.TYPE_RELATIONSHIP_ADD) || (userUsername = notificationData.getUserUsername()) == null) {
                    return "";
                }
                return userUsername;
            case -1263316859:
                if (type.equals(NotificationData.TYPE_STAGE_INSTANCE_CREATE)) {
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.STAGE_START_PUSH_NOTIFICATION_TITLE, new Function1() { // from class: com.discord.notifications.renderer.utils.t
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit title$lambda$2;
                            title$lambda$2 = NotificationDataUtilsKt.getTitle$lambda$2(NotificationData.this, (RenderContext) obj);
                            return title$lambda$2;
                        }
                    });
                }
                break;
            case -1237752112:
                if (type.equals(NotificationData.TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE)) {
                    return I18nUtilsKt.i18nFormat$default(context, I18nMessage.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE, null, 2, null);
                }
                break;
            case -437641071:
                if (type.equals(NotificationData.TYPE_FORUM_THREAD_CREATED)) {
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE, new Function1() { // from class: com.discord.notifications.renderer.utils.u
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit title$lambda$3;
                            title$lambda$3 = NotificationDataUtilsKt.getTitle$lambda$3(NotificationData.this, (RenderContext) obj);
                            return title$lambda$3;
                        }
                    });
                }
                break;
            case -45642698:
                if (type.equals(NotificationData.TYPE_FRIEND_SUGGESTION_CREATE)) {
                    if (StringsKt.B(notificationData.getPlatformUserUsername(), notificationData.getUserUsername(), false, 2, null)) {
                        return I18nUtilsKt.i18nFormat(context, I18nMessage.NOTIFICATION_FRIEND_SUGGESTION_CONTACT_TITLE, new Function1() { // from class: com.discord.notifications.renderer.utils.w
                            @Override // kotlin.jvm.functions.Function1
                            public final Object invoke(Object obj) {
                                Unit title$lambda$5;
                                title$lambda$5 = NotificationDataUtilsKt.getTitle$lambda$5(NotificationData.this, (RenderContext) obj);
                                return title$lambda$5;
                            }
                        });
                    }
                    return I18nUtilsKt.i18nFormat(context, I18nMessage.NOTIFICATION_FRIEND_SUGGESTION_TITLE, new Function1() { // from class: com.discord.notifications.renderer.utils.x
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit title$lambda$6;
                            title$lambda$6 = NotificationDataUtilsKt.getTitle$lambda$6(NotificationData.this, (RenderContext) obj);
                            return title$lambda$6;
                        }
                    });
                }
                break;
            case 974015250:
                if (!type.equals(NotificationData.TYPE_ACTIVITY_START) || (activityType = notificationData.getActivityType()) == null || activityType.intValue() != 0) {
                    return "";
                }
                return I18nUtilsKt.i18nFormat$default(context, I18nMessage.NOTIFICATION_TITLE_START_GAME, null, 2, null);
            case 998188116:
                if (type.equals(NotificationData.TYPE_MESSAGE_CREATE)) {
                    Integer channelType = notificationData.getChannelType();
                    if ((channelType == null || channelType.intValue() != 0) && ((channelType == null || channelType.intValue() != 2) && ((channelType == null || channelType.intValue() != 5) && ((channelType == null || channelType.intValue() != 10) && ((channelType == null || channelType.intValue() != 11) && (channelType == null || channelType.intValue() != 12)))))) {
                        if (channelType != null && channelType.intValue() == 1) {
                            if (notificationData.getInviteGuildName() != null && notificationData.getUserUsername() != null) {
                                Integer inviteTitleVariant = notificationData.getInviteTitleVariant();
                                if (inviteTitleVariant != null && inviteTitleVariant.intValue() == 1) {
                                    return I18nUtilsKt.i18nFormat(context, I18nMessage.INVITED_YOU_TO_GUILD, new Function1() { // from class: com.discord.notifications.renderer.utils.a
                                        @Override // kotlin.jvm.functions.Function1
                                        public final Object invoke(Object obj) {
                                            Unit title$lambda$0;
                                            title$lambda$0 = NotificationDataUtilsKt.getTitle$lambda$0(NotificationData.this, (RenderContext) obj);
                                            return title$lambda$0;
                                        }
                                    });
                                }
                                if (inviteTitleVariant != null && inviteTitleVariant.intValue() == 2) {
                                    return I18nUtilsKt.i18nFormat(context, I18nMessage.GUILD_INVITE_FROM_EMOJI, new Function1() { // from class: com.discord.notifications.renderer.utils.l
                                        @Override // kotlin.jvm.functions.Function1
                                        public final Object invoke(Object obj) {
                                            Unit title$lambda$1;
                                            title$lambda$1 = NotificationDataUtilsKt.getTitle$lambda$1(NotificationData.this, (RenderContext) obj);
                                            return title$lambda$1;
                                        }
                                    });
                                }
                                String userUsername2 = notificationData.getUserUsername();
                                if (userUsername2 == null) {
                                    return "";
                                }
                                return userUsername2;
                            }
                            String userUsername3 = notificationData.getUserUsername();
                            if (userUsername3 == null) {
                                return "";
                            }
                            return userUsername3;
                        } else if (channelType == null || channelType.intValue() != 3) {
                            return "";
                        } else {
                            String channelName = notificationData.getChannelName();
                            if (channelName == null) {
                                String userUsername4 = notificationData.getUserUsername();
                                if (userUsername4 == null) {
                                    return "";
                                }
                                return userUsername4;
                            }
                            return channelName;
                        }
                    }
                    Integer messageType = notificationData.getMessageType();
                    if (messageType != null && messageType.intValue() == 63) {
                        String userUsername5 = notificationData.getUserUsername();
                        if (userUsername5 == null) {
                            return "";
                        }
                        return userUsername5;
                    }
                    String guildName = notificationData.getGuildName();
                    String channelName2 = notificationData.getChannelName();
                    return guildName + " #" + channelName2;
                }
                break;
            case 1770025841:
                if (type.equals(NotificationData.TYPE_CALL_RING)) {
                    Integer channelType2 = notificationData.getChannelType();
                    if (channelType2 != null && channelType2.intValue() == 1) {
                        return I18nUtilsKt.i18nFormat$default(context, I18nMessage.INCOMING_CALL, null, 2, null);
                    }
                    if (channelType2 != null && channelType2.intValue() == 3) {
                        String channelName3 = notificationData.getChannelName();
                        if (channelName3 == null) {
                            return "";
                        }
                        return channelName3;
                    }
                    String channelName4 = notificationData.getChannelName();
                    String guildName2 = notificationData.getGuildName();
                    return channelName4 + ", " + guildName2;
                }
                break;
        }
        return "";
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getTitle$lambda$0(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("userName", notificationData.getUserUsername());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getTitle$lambda$1(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("userName", notificationData.getUserUsername());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getTitle$lambda$2(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("guildName", notificationData.getGuildName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getTitle$lambda$3(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("guildName", notificationData.getGuildName());
        i18nFormat.getArgs().put(NotificationRenderer.CHANNEL_NAME, notificationData.getParentName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getTitle$lambda$4(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("guildName", notificationData.getGuildName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getTitle$lambda$5(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("contact", notificationData.getPlatformUserUsername());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getTitle$lambda$6(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("contact", notificationData.getPlatformUserUsername());
        return Unit.f32008a;
    }

    public static final boolean isCall(@NotNull NotificationData notificationData) {
        Integer channelType;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Integer channelType2 = notificationData.getChannelType();
        if ((channelType2 != null && channelType2.intValue() == 1) || ((channelType = notificationData.getChannelType()) != null && channelType.intValue() == 3)) {
            return true;
        }
        return false;
    }

    public static final boolean isCallRinging(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        return Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_CALL_RING);
    }

    public static final boolean isGroupConversation(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        if (Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE)) {
            Integer channelType = notificationData.getChannelType();
            if (channelType == null || channelType.intValue() != 1) {
                return true;
            }
            return false;
        }
        return false;
    }

    private static final CharSequence renderLogAwareNotificationMessageContent(boolean z10, String str) {
        if (str != null && str.length() != 0) {
            if (z10) {
                return "<Message>";
            }
            return RenderNotificationMessageContentKt.renderNotificationMessageContent(str);
        }
        return str;
    }

    public static final CharSequence renderMessageContent(@NotNull final NotificationData notificationData, @NotNull Context context, boolean z10) {
        final Sticker sticker;
        final Embed embed;
        List<Component> list;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        NotificationMessage message = notificationData.getMessage();
        Poll poll = null;
        if (message != null) {
            sticker = message.getSticker();
        } else {
            sticker = null;
        }
        NotificationMessage message2 = notificationData.getMessage();
        if (message2 != null) {
            embed = message2.getEmbed();
        } else {
            embed = null;
        }
        NotificationMessage message3 = notificationData.getMessage();
        if (message3 != null) {
            list = message3.getComponents();
        } else {
            list = null;
        }
        if (sticker != null) {
            return I18nUtilsKt.i18nFormat(context, I18nMessage.STICKER_NOTIFICATION_BODY, new Function1() { // from class: com.discord.notifications.renderer.utils.a0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit renderMessageContent$lambda$7;
                    renderMessageContent$lambda$7 = NotificationDataUtilsKt.renderMessageContent$lambda$7(Sticker.this, (RenderContext) obj);
                    return renderMessageContent$lambda$7;
                }
            });
        }
        if ((notificationData.getMessageContent() == null || Intrinsics.areEqual(notificationData.getMessageContent(), "")) && list != null && list.size() == 1 && list.get(0).getType() == 20) {
            return I18nUtilsKt.i18nFormat$default(context, I18nMessage.CHECKPOINT_MESSAGE_NOTIFICATION_BODY, null, 2, null);
        }
        if (notificationData.getAttachmentTextVariant() != null) {
            Integer attachmentTextVariant = notificationData.getAttachmentTextVariant();
            if (attachmentTextVariant != null && attachmentTextVariant.intValue() == 1) {
                return I18nUtilsKt.i18nFormat$default(context, I18nMessage.SENT_AN_IMAGE, null, 2, null);
            }
            if (attachmentTextVariant != null && attachmentTextVariant.intValue() == 2) {
                return I18nUtilsKt.i18nFormat(context, I18nMessage.SENT_IMAGES, new Function1() { // from class: com.discord.notifications.renderer.utils.b
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit renderMessageContent$lambda$8;
                        renderMessageContent$lambda$8 = NotificationDataUtilsKt.renderMessageContent$lambda$8(NotificationData.this, (RenderContext) obj);
                        return renderMessageContent$lambda$8;
                    }
                });
            }
            if (attachmentTextVariant != null && attachmentTextVariant.intValue() == 3) {
                return I18nUtilsKt.i18nFormat$default(context, I18nMessage.SENT_A_GIF, null, 2, null);
            }
            if (attachmentTextVariant != null && attachmentTextVariant.intValue() == 4) {
                return I18nUtilsKt.i18nFormat$default(context, I18nMessage.SENT_A_VIDEO, null, 2, null);
            }
            if (attachmentTextVariant != null && attachmentTextVariant.intValue() == 5) {
                return I18nUtilsKt.i18nFormat(context, I18nMessage.SENT_VIDEOS, new Function1() { // from class: com.discord.notifications.renderer.utils.c
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit renderMessageContent$lambda$9;
                        renderMessageContent$lambda$9 = NotificationDataUtilsKt.renderMessageContent$lambda$9(NotificationData.this, (RenderContext) obj);
                        return renderMessageContent$lambda$9;
                    }
                });
            }
            return notificationData.getMessageContent();
        }
        Integer messageReferenceType = notificationData.getMessageReferenceType();
        if (messageReferenceType != null && messageReferenceType.intValue() == 1) {
            return I18nUtilsKt.i18nFormat$default(context, I18nMessage.MESSAGE_FORWARDED_NOTIFICATION_BODY, null, 2, null);
        }
        if (notificationData.getActivityInstanceId() != null && (notificationData.getMessageContent() == null || Intrinsics.areEqual(notificationData.getMessageContent(), ""))) {
            return I18nUtilsKt.i18nFormat(context, I18nMessage.NOTIFICATION_MESSAGE_ACTIVITY_INSTANCE, new Function1() { // from class: com.discord.notifications.renderer.utils.d
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit renderMessageContent$lambda$10;
                    renderMessageContent$lambda$10 = NotificationDataUtilsKt.renderMessageContent$lambda$10(NotificationData.this, (RenderContext) obj);
                    return renderMessageContent$lambda$10;
                }
            });
        }
        if (MessageFlagKt.hasMessageFlag(notificationData.getMessageFlags(), MessageFlag.IS_VOICE_MESSAGE)) {
            return I18nUtilsKt.i18nFormat$default(context, I18nMessage.VOICE_MESSAGES_SENT_NOTIFICATION, null, 2, null);
        }
        NotificationMessage message4 = notificationData.getMessage();
        if (message4 != null) {
            poll = message4.getPoll();
        }
        if (poll != null) {
            return I18nUtilsKt.i18nFormat(context, I18nMessage.POLL_SENT_NOTIFICATION, new Function1() { // from class: com.discord.notifications.renderer.utils.e
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit renderMessageContent$lambda$11;
                    renderMessageContent$lambda$11 = NotificationDataUtilsKt.renderMessageContent$lambda$11(NotificationData.this, (RenderContext) obj);
                    return renderMessageContent$lambda$11;
                }
            });
        }
        Integer messageType = notificationData.getMessageType();
        if (messageType != null && messageType.intValue() == 46) {
            return I18nUtilsKt.i18nFormat(context, I18nMessage.POLL_RESULTS_NOTIFICATION, new Function1() { // from class: com.discord.notifications.renderer.utils.f
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit renderMessageContent$lambda$13;
                    renderMessageContent$lambda$13 = NotificationDataUtilsKt.renderMessageContent$lambda$13(Embed.this, notificationData, (RenderContext) obj);
                    return renderMessageContent$lambda$13;
                }
            });
        }
        Integer messageType2 = notificationData.getMessageType();
        if (messageType2 != null && messageType2.intValue() == 63) {
            return I18nUtilsKt.i18nFormat(context, I18nMessage.EMOJI_ADDED_NOTIFICATION_BODY, new Function1() { // from class: com.discord.notifications.renderer.utils.g
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit renderMessageContent$lambda$14;
                    renderMessageContent$lambda$14 = NotificationDataUtilsKt.renderMessageContent$lambda$14(NotificationData.this, (RenderContext) obj);
                    return renderMessageContent$lambda$14;
                }
            });
        }
        if (notificationData.getInviteChannelName() != null && notificationData.getInviteGuildName() != null) {
            return I18nUtilsKt.i18nFormat(context, I18nMessage.INVITED_TO_VOICE_CHANNEL_IN_GUILD, new Function1() { // from class: com.discord.notifications.renderer.utils.h
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit renderMessageContent$lambda$15;
                    renderMessageContent$lambda$15 = NotificationDataUtilsKt.renderMessageContent$lambda$15(NotificationData.this, (RenderContext) obj);
                    return renderMessageContent$lambda$15;
                }
            });
        }
        return renderLogAwareNotificationMessageContent(z10, notificationData.getMessageContent());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderMessageContent$lambda$10(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("user", notificationData.getUserUsername());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderMessageContent$lambda$11(NotificationData notificationData, RenderContext i18nFormat) {
        Poll poll;
        PollMedia question;
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        Map<String, String> args = i18nFormat.getArgs();
        NotificationMessage message = notificationData.getMessage();
        args.put("question", (message == null || (poll = message.getPoll()) == null || (question = poll.getQuestion()) == null || (r1 = question.getText()) == null) ? "???" : "???");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x003a, code lost:
        if (r3 != null) goto L15;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final kotlin.Unit renderMessageContent$lambda$13(com.discord.notifications.api.Embed r3, com.discord.notifications.api.NotificationData r4, com.discord.react_strings.RenderContext r5) {
        /*
            java.lang.String r0 = "$this$i18nFormat"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.util.Map r5 = r5.getArgs()
            if (r3 == 0) goto L3c
            java.util.List r3 = r3.getFields()
            if (r3 == 0) goto L3c
            java.lang.Iterable r3 = (java.lang.Iterable) r3
            java.util.Iterator r3 = r3.iterator()
        L17:
            boolean r0 = r3.hasNext()
            if (r0 == 0) goto L31
            java.lang.Object r0 = r3.next()
            r1 = r0
            com.discord.notifications.api.EmbedField r1 = (com.discord.notifications.api.EmbedField) r1
            java.lang.String r1 = r1.getName()
            java.lang.String r2 = "poll_question_text"
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r1 == 0) goto L17
            goto L32
        L31:
            r0 = 0
        L32:
            com.discord.notifications.api.EmbedField r0 = (com.discord.notifications.api.EmbedField) r0
            if (r0 == 0) goto L3c
            java.lang.String r3 = r0.getValue()
            if (r3 != 0) goto L44
        L3c:
            java.lang.String r3 = r4.getPollQuestion()
            if (r3 != 0) goto L44
            java.lang.String r3 = ""
        L44:
            java.lang.String r4 = "question"
            r5.put(r4, r3)
            kotlin.Unit r3 = kotlin.Unit.f32008a
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.renderer.utils.NotificationDataUtilsKt.renderMessageContent$lambda$13(com.discord.notifications.api.Embed, com.discord.notifications.api.NotificationData, com.discord.react_strings.RenderContext):kotlin.Unit");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderMessageContent$lambda$14(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        Map<String, String> args = i18nFormat.getArgs();
        String messageContent = notificationData.getMessageContent();
        String str = "???";
        if (messageContent == null) {
            messageContent = "???";
        }
        args.put("emoji", messageContent);
        Map<String, String> args2 = i18nFormat.getArgs();
        String guildName = notificationData.getGuildName();
        if (guildName != null) {
            str = guildName;
        }
        args2.put("guildName", str);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderMessageContent$lambda$15(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put(NotificationRenderer.CHANNEL_NAME, notificationData.getInviteChannelName());
        i18nFormat.getArgs().put("guildName", notificationData.getInviteGuildName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderMessageContent$lambda$7(Sticker sticker, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("stickerName", sticker.getName());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderMessageContent$lambda$8(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("count", String.valueOf(notificationData.getImageAttachmentCount()));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderMessageContent$lambda$9(NotificationData notificationData, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("count", String.valueOf(notificationData.getVideoAttachmentCount()));
        return Unit.f32008a;
    }

    public static final boolean shouldUseBigText(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        if (Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_GENERIC_PUSH_NOTIFICATION_SENT) && Intrinsics.areEqual(notificationData.getExpandSubtitle(), Boolean.TRUE)) {
            return true;
        }
        return false;
    }

    public static final boolean shouldUseMessagingStyle(@NotNull NotificationData notificationData) {
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_MESSAGE_CREATE)) {
            if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_GENERIC_PUSH_NOTIFICATION_SENT) || notificationData.getUserAvatar() == null) {
                return false;
            }
            return true;
        }
        return true;
    }

    private static final IconCompat toIconCompat(Bitmap bitmap) {
        IconCompat h10 = IconCompat.h(bitmap);
        Intrinsics.checkNotNullExpressionValue(h10, "createWithBitmap(...)");
        return h10;
    }

    @NotNull
    public static final JsonObject toNotificationMessage(@NotNull NotificationData notificationData, @NotNull JsonObject author) {
        long j10;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(author, "author");
        String messageContent = notificationData.getMessageContent();
        Intrinsics.checkNotNull(messageContent);
        Long messageFlags = notificationData.getMessageFlags();
        if (messageFlags != null) {
            j10 = messageFlags.longValue();
        } else {
            j10 = 0;
        }
        Integer messageType = notificationData.getMessageType();
        Intrinsics.checkNotNull(messageType);
        messageType.intValue();
        String m1022getMessageIdN_6c4I0 = notificationData.m1022getMessageIdN_6c4I0();
        Intrinsics.checkNotNull(m1022getMessageIdN_6c4I0);
        ChannelId m1020getChannelIdqMVnFVQ = notificationData.m1020getChannelIdqMVnFVQ();
        Intrinsics.checkNotNull(m1020getChannelIdqMVnFVQ);
        long m1066unboximpl = m1020getChannelIdqMVnFVQ.m1066unboximpl();
        GuildId m1021getGuildIdqOKuAAo = notificationData.m1021getGuildIdqOKuAAo();
        String format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSSSS", Locale.getDefault()).format(new Date());
        kt.x xVar = new kt.x();
        kt.g.c(xVar, "content", messageContent);
        kt.g.b(xVar, "flags", Long.valueOf(j10));
        kt.g.b(xVar, "type", messageType);
        kt.g.c(xVar, StackTraceHelper.ID_KEY, MessageId.m1090toStringimpl(m1022getMessageIdN_6c4I0));
        kt.g.c(xVar, "channel_id", ChannelId.m1064toStringimpl(m1066unboximpl));
        kt.g.c(xVar, "timestamp", format);
        xVar.b("author", author);
        if (m1021getGuildIdqOKuAAo != null) {
            kt.g.c(xVar, "guild_id", GuildId.m1077toStringimpl(m1021getGuildIdqOKuAAo.m1079unboximpl()));
        }
        return xVar.a();
    }
}
