package com.discord.bridge;

import com.discord.react_startup_flags.StartupFlagsModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$71 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, StartupFlagsModule> {
    public static final DCDPackageList$getPackages$71 INSTANCE = new DCDPackageList$getPackages$71();

    DCDPackageList$getPackages$71() {
        super(1, StartupFlagsModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final StartupFlagsModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new StartupFlagsModule(p02);
    }
}
