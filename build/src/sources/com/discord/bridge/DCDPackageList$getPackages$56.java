package com.discord.bridge;

import com.discord.client_info.ClientInfoModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$56 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, ClientInfoModule> {
    public static final DCDPackageList$getPackages$56 INSTANCE = new DCDPackageList$getPackages$56();

    DCDPackageList$getPackages$56() {
        super(1, ClientInfoModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final ClientInfoModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new ClientInfoModule(p02);
    }
}
