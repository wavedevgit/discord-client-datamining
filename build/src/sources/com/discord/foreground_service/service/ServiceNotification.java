package com.discord.foreground_service.service;

import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.os.Build;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import com.discord.foreground_service.ForegroundService;
import com.discord.foreground_service.service.ServiceNotificationConfiguration;
import com.discord.foreground_service.utils.ForegroundServiceUtilsKt;
import com.discord.notifications.actions.intents.GenericAction;
import com.discord.notifications.actions.intents.NotificationAction;
import com.discord.notifications.renderer.R;
import java.util.Comparator;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.v;
import org.jetbrains.annotations.NotNull;
import rr.a;
import w1.c;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001f\u0010\t\u001a\u00020\b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ'\u0010\u000f\u001a\u00020\u000e*\u00020\u000b2\u0006\u0010\u0005\u001a\u00020\u00042\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00060\f¢\u0006\u0004\b\u000f\u0010\u0010J\u0011\u0010\u0011\u001a\u00020\u000e*\u00020\u0004¢\u0006\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0014\u001a\u00020\u00138\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0017\u001a\u00020\u00168\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u0014\u0010\u0019\u001a\u00020\u00138\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0019\u0010\u0015R\u0014\u0010\u001a\u001a\u00020\u00168\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u0018\u0010\u001e\u001a\u00020\u001b*\u00020\u00048BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u001c\u0010\u001d¨\u0006\u001f"}, d2 = {"Lcom/discord/foreground_service/service/ServiceNotification;", "", "<init>", "()V", "Landroid/content/Context;", "context", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration;", "serviceNotificationConfiguration", "Landroid/app/Notification;", "buildNotification", "(Landroid/content/Context;Lcom/discord/foreground_service/service/ServiceNotificationConfiguration;)Landroid/app/Notification;", "Landroid/app/Service;", "", "serviceNotificationConfigurations", "", "startForegroundCompat", "(Landroid/app/Service;Landroid/content/Context;Ljava/util/List;)V", "clearNotifications", "(Landroid/content/Context;)V", "", "FOREGROUND_NOTIFICATION_CHANNEL", "Ljava/lang/String;", "", "FOREGROUND_NOTIFICATION_ID", "I", ServiceNotification.FOREGROUND_NOTIFICATION_TAG, "FOREGROUND_NOTIFICATION_LIMIT", "Landroidx/core/app/NotificationManagerCompat;", "getNotificationManagerCompat", "(Landroid/content/Context;)Landroidx/core/app/NotificationManagerCompat;", "notificationManagerCompat", "foreground_service_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nServiceNotification.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ServiceNotification.kt\ncom/discord/foreground_service/service/ServiceNotification\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,111:1\n1056#2:112\n1869#2,2:113\n*S KotlinDebug\n*F\n+ 1 ServiceNotification.kt\ncom/discord/foreground_service/service/ServiceNotification\n*L\n25#1:112\n89#1:113,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ServiceNotification {
    @NotNull
    private static final String FOREGROUND_NOTIFICATION_CHANNEL = "mediaConnections";
    private static final int FOREGROUND_NOTIFICATION_ID = 8761;
    private static final int FOREGROUND_NOTIFICATION_LIMIT = 5;
    @NotNull
    private static final String FOREGROUND_NOTIFICATION_TAG = "FOREGROUND_NOTIFICATION_TAG";
    @NotNull
    public static final ServiceNotification INSTANCE = new ServiceNotification();

    private ServiceNotification() {
    }

    private final Notification buildNotification(Context context, ServiceNotificationConfiguration serviceNotificationConfiguration) {
        Context context2;
        PendingIntent pendingIntent;
        NotificationCompat.Builder w10 = new NotificationCompat.Builder(context, FOREGROUND_NOTIFICATION_CHANNEL).x(serviceNotificationConfiguration.getTitle()).w(serviceNotificationConfiguration.getContent());
        ServiceNotificationConfiguration.Action contentAction = serviceNotificationConfiguration.getContentAction();
        if (contentAction != null) {
            pendingIntent = NotificationAction.DefaultImpls.toPendingIntent$default(new GenericAction(contentAction.getTag(), contentAction.getTaskName(), contentAction.getData()), context, 0, true, 2, null);
            context2 = context;
        } else {
            context2 = context;
            pendingIntent = null;
        }
        NotificationCompat.Builder T = w10.v(pendingIntent).U(R.drawable.ic_notification_24dp).K(true).T(true);
        for (ServiceNotificationConfiguration.Action action : serviceNotificationConfiguration.getAuxiliaryActions()) {
            T.a(0, action.getTitle(), NotificationAction.DefaultImpls.toPendingIntent$default(new GenericAction(action.getTag(), action.getTaskName(), action.getData()), context2, 0, false, 2, null));
        }
        Notification g10 = T.A(c.a(v.a(ForegroundService.EXTRA_PERMISSION_TYPE, Integer.valueOf(serviceNotificationConfiguration.getType().ordinal())))).g();
        Intrinsics.checkNotNullExpressionValue(g10, "build(...)");
        return g10;
    }

    private final NotificationManagerCompat getNotificationManagerCompat(Context context) {
        NotificationManagerCompat g10 = NotificationManagerCompat.g(context);
        Intrinsics.checkNotNullExpressionValue(g10, "from(...)");
        return g10;
    }

    public final void clearNotifications(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        for (int i10 = 0; i10 < 6; i10++) {
            getNotificationManagerCompat(context).b(FOREGROUND_NOTIFICATION_TAG, i10);
        }
    }

    public final void startForegroundCompat(@NotNull Service service, @NotNull Context context, @NotNull List<ServiceNotificationConfiguration> serviceNotificationConfigurations) {
        boolean z10;
        Intrinsics.checkNotNullParameter(service, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(serviceNotificationConfigurations, "serviceNotificationConfigurations");
        List W0 = CollectionsKt.W0(serviceNotificationConfigurations, new Comparator() { // from class: com.discord.foreground_service.service.ServiceNotification$startForegroundCompat$$inlined$sortedBy$1
            @Override // java.util.Comparator
            public final int compare(T t10, T t11) {
                return a.d(((ServiceNotificationConfiguration) t10).getPriority(), ((ServiceNotificationConfiguration) t11).getPriority());
            }
        });
        Notification buildNotification = buildNotification(context, (ServiceNotificationConfiguration) CollectionsKt.o0(W0));
        ForegroundServiceUtilsKt.startForegroundCompat(service, context, FOREGROUND_NOTIFICATION_ID, buildNotification);
        if (Build.VERSION.SDK_INT >= 33 && androidx.core.content.a.a(context, "android.permission.POST_NOTIFICATIONS") != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            getNotificationManagerCompat(service).o(FOREGROUND_NOTIFICATION_ID, buildNotification);
        }
        List f02 = CollectionsKt.f0(W0, 1);
        for (int i10 = 0; i10 < 6; i10++) {
            ServiceNotificationConfiguration serviceNotificationConfiguration = (ServiceNotificationConfiguration) CollectionsKt.q0(f02, i10);
            if (serviceNotificationConfiguration != null) {
                Notification buildNotification2 = buildNotification(context, serviceNotificationConfiguration);
                if (z10) {
                    getNotificationManagerCompat(service).p(FOREGROUND_NOTIFICATION_TAG, i10, buildNotification2);
                }
            } else {
                getNotificationManagerCompat(service).b(FOREGROUND_NOTIFICATION_TAG, i10);
            }
        }
    }
}
