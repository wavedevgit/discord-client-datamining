package com.google.android.play.core.assetpacks;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m3 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f15893a;

    /* renamed from: b  reason: collision with root package name */
    private final NotificationManager f15894b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m3(Context context) {
        this.f15893a = context;
        this.f15894b = (NotificationManager) context.getSystemService("notification");
    }

    private final synchronized void c(String str) {
        if (str == null) {
            str = "File downloads by Play";
        }
        try {
            wh.f.a();
            this.f15894b.createNotificationChannel(com.google.android.gms.common.e.a("playcore-assetpacks-service-notification-channel", str, 2));
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Notification a(Bundle bundle) {
        Notification.Builder timeoutAfter;
        PendingIntent activity;
        if (Build.VERSION.SDK_INT < 26) {
            timeoutAfter = new Notification.Builder(this.f15893a).setPriority(-2);
        } else {
            timeoutAfter = wh.e.a(this.f15893a, "playcore-assetpacks-service-notification-channel").setTimeoutAfter(bundle.getLong("notification_timeout", 600000L));
        }
        Parcelable parcelable = bundle.getParcelable("notification_on_click_intent");
        if (parcelable instanceof PendingIntent) {
            activity = (PendingIntent) parcelable;
        } else if (!bundle.getBoolean("notification_intent_reconstruct_from_data")) {
            activity = null;
        } else {
            Intent intent = new Intent();
            String string = bundle.getString("notification_intent_component_class_name");
            String string2 = bundle.getString("notification_intent_component_package_name");
            if (string != null && string2 != null) {
                intent.setComponent(new ComponentName(string2, string));
            }
            intent.setPackage(bundle.getString("notification_intent_package"));
            intent.setAction(bundle.getString("notification_intent_action"));
            intent.setFlags(bundle.getInt("notification_intent_flags"));
            String string3 = bundle.getString("notification_intent_data");
            if (string3 != null) {
                intent.setData(Uri.parse(string3));
            }
            intent.putExtra("error_doc_id", bundle.getString("notification_intent_extra_error_dialog_document_id"));
            activity = PendingIntent.getActivity(this.f15893a, 0, intent, 201326592);
        }
        if (activity != null) {
            timeoutAfter.setContentIntent(activity);
        }
        String string4 = bundle.getString("notification_title");
        String string5 = bundle.getString("notification_subtext");
        Notification.Builder ongoing = timeoutAfter.setSmallIcon(17301633).setOngoing(false);
        if (string4 == null) {
            string4 = "Downloading additional file";
        }
        Notification.Builder contentTitle = ongoing.setContentTitle(string4);
        if (string5 == null) {
            string5 = "Transferring";
        }
        contentTitle.setSubText(string5);
        int i10 = bundle.getInt("notification_color");
        if (i10 != 0) {
            timeoutAfter.setColor(i10).setVisibility(-1);
        }
        return timeoutAfter.build();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(Bundle bundle) {
        if (Build.VERSION.SDK_INT >= 26) {
            c(bundle.getString("notification_channel_name"));
        }
    }
}
