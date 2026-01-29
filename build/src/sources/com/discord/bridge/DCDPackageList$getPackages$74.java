package com.discord.bridge;

import com.discord.timers.TimersModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$74 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, TimersModule> {
    public static final DCDPackageList$getPackages$74 INSTANCE = new DCDPackageList$getPackages$74();

    DCDPackageList$getPackages$74() {
        super(1, TimersModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final TimersModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new TimersModule(p02);
    }
}
