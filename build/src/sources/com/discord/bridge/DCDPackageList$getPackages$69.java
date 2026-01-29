package com.discord.bridge;

import com.discord.push_notification_monitor.PushNotificationMonitorModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$69 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, PushNotificationMonitorModule> {
    public static final DCDPackageList$getPackages$69 INSTANCE = new DCDPackageList$getPackages$69();

    DCDPackageList$getPackages$69() {
        super(1, PushNotificationMonitorModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final PushNotificationMonitorModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new PushNotificationMonitorModule(p02);
    }
}
