package com.discord.bridge;

import com.discord.tti_manager.TTIManagerModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$29 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, TTIManagerModule> {
    public static final DCDPackageList$getPackages$29 INSTANCE = new DCDPackageList$getPackages$29();

    DCDPackageList$getPackages$29() {
        super(1, TTIManagerModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final TTIManagerModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new TTIManagerModule(p02);
    }
}
