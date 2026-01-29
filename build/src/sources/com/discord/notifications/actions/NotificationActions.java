package com.discord.notifications.actions;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Parcelable;
import androidx.core.content.b;
import com.discord.misc.utilities.intent.IntentUtilsKt;
import com.discord.notifications.actions.intents.DeleteAction;
import com.discord.notifications.actions.intents.DirectReplyAction;
import com.discord.notifications.actions.intents.DismissCallAction;
import com.discord.notifications.actions.intents.GenericAction;
import com.discord.notifications.actions.intents.MarkAsReadAction;
import com.discord.notifications.actions.intents.MuteAction;
import com.discord.notifications.actions.intents.NotificationAction;
import com.discord.tti_manager.TTIModule;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \n2\u00020\u0001:\u0001\nB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016¨\u0006\u000b"}, d2 = {"Lcom/discord/notifications/actions/NotificationActions;", "Landroid/content/BroadcastReceiver;", "<init>", "()V", "onReceive", "", "context", "Landroid/content/Context;", "intent", "Landroid/content/Intent;", "Companion", "notification_actions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNotificationActions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationActions.kt\ncom/discord/notifications/actions/NotificationActions\n+ 2 NotificationAction.kt\ncom/discord/notifications/actions/intents/NotificationAction$Companion\n+ 3 IntentUtils.kt\ncom/discord/misc/utilities/intent/IntentUtilsKt\n*L\n1#1,45:1\n96#2,2:46\n99#2,2:49\n96#2,2:51\n99#2,2:54\n96#2,2:56\n99#2,2:59\n96#2,2:61\n99#2,2:64\n96#2,2:66\n99#2,2:69\n96#2,2:71\n99#2,2:74\n14#3:48\n14#3:53\n14#3:58\n14#3:63\n14#3:68\n14#3:73\n*S KotlinDebug\n*F\n+ 1 NotificationActions.kt\ncom/discord/notifications/actions/NotificationActions\n*L\n28#1:46,2\n28#1:49,2\n29#1:51,2\n29#1:54,2\n30#1:56,2\n30#1:59,2\n31#1:61,2\n31#1:64,2\n32#1:66,2\n32#1:69,2\n33#1:71,2\n33#1:74,2\n28#1:48\n29#1:53\n30#1:58\n31#1:63\n32#1:68\n33#1:73\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationActions extends BroadcastReceiver {
    @NotNull
    public static final String ACTION = "com.discord.intent.action.NOTIFICATION_ACTION";
    @NotNull
    public static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/notifications/actions/NotificationActions$Companion;", "", "<init>", "()V", "ACTION", "", "notification_actions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public NotificationActions() {
        if (Build.VERSION.SDK_INT < 28) {
            TTIModule.Companion.markBroadcastReceiverInstantiation();
        }
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(@NotNull Context context, @NotNull Intent intent) {
        NotificationAction notificationAction;
        NotificationAction notificationAction2;
        NotificationAction notificationAction3;
        NotificationAction notificationAction4;
        NotificationAction notificationAction5;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(intent, "intent");
        NotificationAction.Companion companion = NotificationAction.Companion;
        NotificationAction notificationAction6 = null;
        if (IntentUtilsKt.hasExtra(intent, Reflection.getOrCreateKotlinClass(MarkAsReadAction.class))) {
            notificationAction = (NotificationAction) ((Parcelable) b.b(intent, "action_intent_arg_key", MarkAsReadAction.class));
        } else {
            notificationAction = null;
        }
        NotificationAction notificationAction7 = (MarkAsReadAction) notificationAction;
        if (notificationAction7 == null) {
            if (IntentUtilsKt.hasExtra(intent, Reflection.getOrCreateKotlinClass(MuteAction.class))) {
                notificationAction2 = (NotificationAction) ((Parcelable) b.b(intent, "action_intent_arg_key", MuteAction.class));
            } else {
                notificationAction2 = null;
            }
            notificationAction7 = (MuteAction) notificationAction2;
            if (notificationAction7 == null) {
                if (IntentUtilsKt.hasExtra(intent, Reflection.getOrCreateKotlinClass(DismissCallAction.class))) {
                    notificationAction3 = (NotificationAction) ((Parcelable) b.b(intent, "action_intent_arg_key", DismissCallAction.class));
                } else {
                    notificationAction3 = null;
                }
                notificationAction7 = (DismissCallAction) notificationAction3;
                if (notificationAction7 == null) {
                    if (IntentUtilsKt.hasExtra(intent, Reflection.getOrCreateKotlinClass(DirectReplyAction.class))) {
                        notificationAction4 = (NotificationAction) ((Parcelable) b.b(intent, "action_intent_arg_key", DirectReplyAction.class));
                    } else {
                        notificationAction4 = null;
                    }
                    notificationAction7 = (DirectReplyAction) notificationAction4;
                    if (notificationAction7 == null) {
                        if (IntentUtilsKt.hasExtra(intent, Reflection.getOrCreateKotlinClass(DeleteAction.class))) {
                            notificationAction5 = (NotificationAction) ((Parcelable) b.b(intent, "action_intent_arg_key", DeleteAction.class));
                        } else {
                            notificationAction5 = null;
                        }
                        notificationAction7 = (DeleteAction) notificationAction5;
                        if (notificationAction7 == null) {
                            if (IntentUtilsKt.hasExtra(intent, Reflection.getOrCreateKotlinClass(GenericAction.class))) {
                                notificationAction6 = (NotificationAction) ((Parcelable) b.b(intent, "action_intent_arg_key", GenericAction.class));
                            }
                            notificationAction7 = notificationAction6;
                        }
                    }
                }
            }
        }
        if (notificationAction7 != null) {
            notificationAction7.onNotificationAction(context, intent);
            notificationAction7.onNotificationActionComplete(context);
        }
    }
}
