package com.discord.notifications.renderer;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import com.discord.icons.IconUrlUtils;
import com.discord.image.fresco.FrescoModuleDiscord;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.renderer.IncomingCallActivity;
import com.discord.notifications.renderer.utils.NotificationDataUtilsKt;
import com.discord.notifications.renderer.utils.NotificationManagerUtilsKt;
import com.discord.primitives.ChannelId;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import os.h;
import qr.v;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u0000 /2\u00020\u0001:\u0001/B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J6\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00100\u000f2\u0012\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00100\u000fJ\u000e\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rJ\u000e\u0010\u0013\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rJ\u0016\u0010\u0014\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u0010J\u0016\u0010\u0016\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u0017\u001a\u00020\u0010J\u000e\u0010\u0018\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rJ(\u0010\u0019\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u001a\u001a\u00020\u00102\u0006\u0010\u001b\u001a\u00020\u00102\u0006\u0010\u001c\u001a\u00020\u001dH\u0007J\u0016\u0010\u001e\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u001b\u001a\u00020\u0010J\u0018\u0010\u001f\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010 \u001a\u00020!H\u0007J\u001e\u0010\"\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u000e\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010%0$J \u0010&\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u000e\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010%0$H\u0007J$\u0010'\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0012\u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00010\u000fH\u0007J.\u0010\u0006\u001a\u0004\u0018\u00010\u00052\u0006\u0010\f\u001a\u00020\r2\u0006\u0010 \u001a\u00020!2\u0012\u0010(\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00100\u000fH\u0002JP\u0010)\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010 \u001a\u00020!2\b\u0010*\u001a\u0004\u0018\u00010\u00102\u0012\u0010(\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00100\u000f2\b\u0010+\u001a\u0004\u0018\u00010,2\u0006\u0010-\u001a\u00020\u001d2\u0006\u0010.\u001a\u00020\u001dH\u0007R\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\t¨\u00060"}, d2 = {"Lcom/discord/notifications/renderer/NotificationRenderer;", "", "<init>", "()V", "fullscreenIntent", "Landroid/app/PendingIntent;", "getFullscreenIntent", "()Landroid/app/PendingIntent;", "setFullscreenIntent", "(Landroid/app/PendingIntent;)V", "initNotificationCategories", "", "context", "Landroid/content/Context;", "localizedCategoryNames", "", "", "localizedGroupNames", "initFresco", "initIconUrlUtils", "setIncomingRingtone", StackTraceHelper.NAME_KEY, "clear", "notificationTag", "clearAllNotifications", "markNotificationAsDirectReply", "tag", "channelId", "shouldIgnoreAck", "", "handleReactionAcks", "handleAcks", "notification", "Lcom/discord/notifications/api/NotificationData;", "handleCallAck", "channelIds", "", "Lcom/discord/primitives/ChannelId;", "handleCallRingEnd", "displayLocal", "notificationDataMap", ViewProps.DISPLAY, "currentUsername", "behaviors", "Lcom/discord/notifications/renderer/NotificationBehaviors;", "makeOrUpdateShortcut", "notifyEveryTime", "Companion", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNotificationRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationRenderer.kt\ncom/discord/notifications/renderer/NotificationRenderer\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,471:1\n1869#2,2:472\n1869#2,2:474\n1869#2:476\n1869#2,2:477\n1870#2:479\n1869#2:480\n1869#2,2:481\n1870#2:483\n*S KotlinDebug\n*F\n+ 1 NotificationRenderer.kt\ncom/discord/notifications/renderer/NotificationRenderer\n*L\n123#1:472,2\n140#1:474,2\n169#1:476\n173#1:477,2\n169#1:479\n191#1:480\n195#1:481,2\n191#1:483\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationRenderer {
    @NotNull
    public static final String CHANNEL_NAME = "channelName";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String IGNORE_ACK_KEY = "ignoreAck";
    @NotNull
    public static final String IS_DM = "isDM";
    @NotNull
    public static final String USERNAME = "username";
    private PendingIntent fullscreenIntent;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/notifications/renderer/NotificationRenderer$Companion;", "", "<init>", "()V", "IGNORE_ACK_KEY", "", "USERNAME", "CHANNEL_NAME", "IS_DM", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public final void clear(@NotNull Context context, @NotNull String notificationTag) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notificationTag, "notificationTag");
        NotificationManagerUtilsKt.getNotificationManagerCompat(context).b(notificationTag, 0);
    }

    public final void clearAllNotifications(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        NotificationManagerUtilsKt.getNotificationManagerCompat(context).c();
    }

    public final void display(@NotNull Context context, @NotNull NotificationData notification, String str, @NotNull Map<String, String> notificationDataMap, NotificationBehaviors notificationBehaviors, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notification, "notification");
        Intrinsics.checkNotNullParameter(notificationDataMap, "notificationDataMap");
        h.b(null, new NotificationRenderer$display$1(notification, context, z11, notificationDataMap, notificationBehaviors, this, str, z10, null), 1, null);
    }

    public final void displayLocal(@NotNull Context context, @NotNull Map<String, ? extends Object> notification) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notification, "notification");
        h.b(null, new NotificationRenderer$displayLocal$1(notification, context, null), 1, null);
    }

    public final PendingIntent getFullscreenIntent() {
        return this.fullscreenIntent;
    }

    public final void handleAcks(@NotNull Context context, @NotNull NotificationData notification) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(notification, "notification");
        for (ChannelId channelId : notification.getAckChannelIds()) {
            String str = NotificationData.TYPE_MESSAGE_CREATE + ChannelId.m1064toStringimpl(channelId.m1066unboximpl());
            NotificationChannels notificationChannels = NotificationChannels.INSTANCE;
            if (!NotificationManagerUtilsKt.getNotificationBuilderOrCreate(context, notificationChannels.getNotificationChannelId(notification, context), NotificationManagerUtilsKt.getActiveNotification(context, str)).i().getBoolean(IGNORE_ACK_KEY, false)) {
                clear(context, str);
            } else {
                markNotificationAsDirectReply(context, str, notificationChannels.getNotificationChannelId(notification, context), false);
            }
        }
    }

    public final void handleCallAck(@NotNull Context context, @NotNull List<ChannelId> channelIds) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(channelIds, "channelIds");
        if (Build.VERSION.SDK_INT >= 26 && !channelIds.isEmpty()) {
            for (ChannelId channelId : channelIds) {
                if (channelId != null) {
                    List<StatusBarNotification> m1043getCallNotificationsmJqaSGE = NotificationManagerUtilsKt.m1043getCallNotificationsmJqaSGE(context, channelId.m1066unboximpl());
                    if (m1043getCallNotificationsmJqaSGE != null) {
                        for (StatusBarNotification statusBarNotification : m1043getCallNotificationsmJqaSGE) {
                            String tag = statusBarNotification.getTag();
                            Intrinsics.checkNotNullExpressionValue(tag, "getTag(...)");
                            clear(context, tag);
                        }
                    }
                    IncomingCallActivity.Companion companion = IncomingCallActivity.Companion;
                    if (companion.getSelfIntent() != null) {
                        AppCompatActivity selfIntent = companion.getSelfIntent();
                        Intrinsics.checkNotNull(selfIntent);
                        selfIntent.finishAndRemoveTask();
                    }
                }
            }
        }
    }

    public final void handleCallRingEnd(@NotNull Context context, @NotNull List<ChannelId> channelIds) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(channelIds, "channelIds");
        if (Build.VERSION.SDK_INT >= 26 && !channelIds.isEmpty()) {
            for (ChannelId channelId : channelIds) {
                if (channelId != null) {
                    List<StatusBarNotification> m1043getCallNotificationsmJqaSGE = NotificationManagerUtilsKt.m1043getCallNotificationsmJqaSGE(context, channelId.m1066unboximpl());
                    if (m1043getCallNotificationsmJqaSGE != null) {
                        for (StatusBarNotification statusBarNotification : m1043getCallNotificationsmJqaSGE) {
                            String string = statusBarNotification.getNotification().extras.getString(USERNAME);
                            if (string != null) {
                                String string2 = statusBarNotification.getNotification().extras.getString(CHANNEL_NAME);
                                String missedCallText = NotificationDataUtilsKt.getMissedCallText(context, string, statusBarNotification.getNotification().extras.getBoolean(IS_DM));
                                String channelId2 = statusBarNotification.getNotification().getChannelId();
                                Intrinsics.checkNotNullExpressionValue(channelId2, "getChannelId(...)");
                                NotificationCompat.Builder notificationBuilderOrCreate = NotificationManagerUtilsKt.getNotificationBuilderOrCreate(context, channelId2, statusBarNotification.getNotification());
                                NotificationCompat.Builder w10 = notificationBuilderOrCreate.q(NotificationChannels.INSTANCE.getSilenceCallChannelId()).w(missedCallText);
                                if (string2 != null) {
                                    string = string2;
                                }
                                w10.x(string).h();
                                NotificationManagerCompat notificationManagerCompat = NotificationManagerUtilsKt.getNotificationManagerCompat(context);
                                String tag = statusBarNotification.getTag();
                                Intrinsics.checkNotNullExpressionValue(tag, "getTag(...)");
                                NotificationManagerUtilsKt.notify$default(notificationManagerCompat, tag, notificationBuilderOrCreate, 0, 4, null);
                            } else {
                                return;
                            }
                        }
                    }
                    IncomingCallActivity.Companion companion = IncomingCallActivity.Companion;
                    if (companion.getSelfIntent() != null) {
                        AppCompatActivity selfIntent = companion.getSelfIntent();
                        Intrinsics.checkNotNull(selfIntent);
                        selfIntent.finishAndRemoveTask();
                    }
                }
            }
        }
    }

    public final void handleReactionAcks(@NotNull Context context, @NotNull String channelId) {
        List<StatusBarNotification> activeReactionNotifications;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        if (Build.VERSION.SDK_INT >= 26 && (activeReactionNotifications = NotificationManagerUtilsKt.getActiveReactionNotifications(context, channelId)) != null) {
            for (StatusBarNotification statusBarNotification : activeReactionNotifications) {
                String channelId2 = statusBarNotification.getNotification().getChannelId();
                Intrinsics.checkNotNullExpressionValue(channelId2, "getChannelId(...)");
                if (!NotificationManagerUtilsKt.getNotificationBuilderOrCreate(context, channelId2, statusBarNotification.getNotification()).i().getBoolean(IGNORE_ACK_KEY, false)) {
                    String tag = statusBarNotification.getTag();
                    Intrinsics.checkNotNullExpressionValue(tag, "getTag(...)");
                    clear(context, tag);
                }
            }
        }
    }

    public final void initFresco(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        FrescoModuleDiscord.Companion.initializeFresco(context);
    }

    public final void initIconUrlUtils(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        IconUrlUtils.init$default(IconUrlUtils.INSTANCE, context, null, null, 6, null);
    }

    public final void initNotificationCategories(@NotNull Context context, @NotNull Map<String, String> localizedCategoryNames, @NotNull Map<String, String> localizedGroupNames) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(localizedCategoryNames, "localizedCategoryNames");
        Intrinsics.checkNotNullParameter(localizedGroupNames, "localizedGroupNames");
        NotificationChannels.INSTANCE.init(context, localizedCategoryNames, localizedGroupNames);
    }

    public final void markNotificationAsDirectReply(@NotNull Context context, @NotNull String tag, @NotNull String channelId, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Notification activeNotification = NotificationManagerUtilsKt.getActiveNotification(context, tag);
        if (activeNotification != null) {
            NotificationCompat.Builder c10 = NotificationManagerUtilsKt.getNotificationBuilderOrCreate(context, channelId, activeNotification).c(w1.c.a(v.a(IGNORE_ACK_KEY, Boolean.valueOf(z10))));
            Intrinsics.checkNotNullExpressionValue(c10, "addExtras(...)");
            NotificationManagerUtilsKt.notify$default(NotificationManagerUtilsKt.getNotificationManagerCompat(context), tag, c10, 0, 4, null);
        }
    }

    public final void setFullscreenIntent(PendingIntent pendingIntent) {
        this.fullscreenIntent = pendingIntent;
    }

    public final void setIncomingRingtone(@NotNull Context context, @NotNull String name) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(name, "name");
        NotificationChannels.INSTANCE.setIncomingRingtone(context, name);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:10:0x0059, code lost:
        if (r2.intValue() == 1) goto L8;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final android.app.PendingIntent getFullscreenIntent(android.content.Context r23, com.discord.notifications.api.NotificationData r24, java.util.Map<java.lang.String, java.lang.String> r25) {
        /*
            r22 = this;
            r0 = r23
            android.content.Intent r1 = new android.content.Intent
            java.lang.Class<com.discord.notifications.renderer.IncomingCallActivity> r2 = com.discord.notifications.renderer.IncomingCallActivity.class
            r1.<init>(r0, r2)
            r2 = 268468224(0x10008000, float:2.5342157E-29)
            android.content.Intent r1 = r1.addFlags(r2)
            java.lang.String r2 = "addFlags(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
            java.lang.String r2 = "username"
            java.lang.String r3 = r24.getUserUsername()
            kotlin.Pair r4 = qr.v.a(r2, r3)
            boolean r2 = com.discord.notifications.renderer.utils.NotificationDataUtilsKt.isCall(r24)
            if (r2 == 0) goto L2a
            java.lang.String r2 = r24.getChannelName()
            goto L46
        L2a:
            java.lang.String r2 = r24.getChannelName()
            java.lang.String r3 = r24.getGuildName()
            java.lang.StringBuilder r5 = new java.lang.StringBuilder
            r5.<init>()
            r5.append(r2)
            java.lang.String r2 = ", "
            r5.append(r2)
            r5.append(r3)
            java.lang.String r2 = r5.toString()
        L46:
            java.lang.String r3 = "channelName"
            kotlin.Pair r5 = qr.v.a(r3, r2)
            java.lang.Integer r2 = r24.getChannelType()
            r3 = 0
            if (r2 != 0) goto L54
            goto L5c
        L54:
            int r2 = r2.intValue()
            r6 = 1
            if (r2 != r6) goto L5c
            goto L5d
        L5c:
            r6 = r3
        L5d:
            java.lang.Boolean r2 = java.lang.Boolean.valueOf(r6)
            java.lang.String r6 = "isDM"
            kotlin.Pair r6 = qr.v.a(r6, r2)
            java.lang.String r2 = "userAvatar"
            java.lang.String r7 = r24.getUserAvatar()
            kotlin.Pair r7 = qr.v.a(r2, r7)
            java.lang.String r2 = "userDiscriminator"
            java.lang.Integer r8 = r24.getUserDiscriminator()
            kotlin.Pair r8 = qr.v.a(r2, r8)
            com.discord.primitives.UserId r2 = r24.m1025getUserIdwUX8bhU()
            java.lang.String r2 = java.lang.String.valueOf(r2)
            java.lang.String r9 = "userId"
            kotlin.Pair r9 = qr.v.a(r9, r2)
            com.discord.primitives.GuildId r2 = r24.m1021getGuildIdqOKuAAo()
            java.lang.String r2 = java.lang.String.valueOf(r2)
            java.lang.String r10 = "guildId"
            kotlin.Pair r10 = qr.v.a(r10, r2)
            java.lang.String r2 = "userGuildAvatar"
            java.lang.String r11 = r24.getUserGuildAvatar()
            kotlin.Pair r11 = qr.v.a(r2, r11)
            java.lang.String r2 = com.discord.notifications.renderer.utils.NotificationDataUtilsKt.getTag(r24)
            java.util.Map r12 = kotlin.collections.o0.y(r25)
            java.lang.String r13 = "type"
            java.lang.String r14 = "CALL_CONNECT"
            r12.put(r13, r14)
            java.lang.String r13 = "is_fullscreen_call_ui"
            java.lang.String r14 = "true"
            r12.put(r13, r14)
            kotlin.Unit r13 = kotlin.Unit.f32056a
            com.discord.notifications.actions.intents.ContentAction r13 = new com.discord.notifications.actions.intents.ContentAction
            r13.<init>(r2, r12)
            java.lang.String r2 = "acceptAction"
            kotlin.Pair r12 = qr.v.a(r2, r13)
            com.discord.notifications.actions.intents.DismissCallAction r13 = new com.discord.notifications.actions.intents.DismissCallAction
            java.lang.String r14 = com.discord.notifications.renderer.utils.NotificationDataUtilsKt.getTag(r24)
            com.discord.primitives.ChannelId r2 = r24.m1020getChannelIdqMVnFVQ()
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
            long r15 = r2.m1066unboximpl()
            com.discord.primitives.GuildId r18 = r24.m1021getGuildIdqOKuAAo()
            com.discord.primitives.UserId r2 = r24.m1025getUserIdwUX8bhU()
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
            long r19 = r2.m1144unboximpl()
            r21 = 0
            r17 = 1
            r13.<init>(r14, r15, r17, r18, r19, r21)
            java.lang.String r2 = "dismissAction"
            kotlin.Pair r13 = qr.v.a(r2, r13)
            kotlin.Pair[] r2 = new kotlin.Pair[]{r4, r5, r6, r7, r8, r9, r10, r11, r12, r13}
            android.os.Bundle r2 = w1.c.a(r2)
            r1.putExtras(r2)
            r2 = 335544320(0x14000000, float:6.4623485E-27)
            android.app.PendingIntent r0 = android.app.PendingIntent.getActivity(r0, r3, r1, r2)
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.renderer.NotificationRenderer.getFullscreenIntent(android.content.Context, com.discord.notifications.api.NotificationData, java.util.Map):android.app.PendingIntent");
    }
}
