package com.discord.bridge;

import com.discord.media.engine.MediaEngineModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$77 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, MediaEngineModule> {
    public static final DCDPackageList$getPackages$77 INSTANCE = new DCDPackageList$getPackages$77();

    DCDPackageList$getPackages$77() {
        super(1, MediaEngineModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final MediaEngineModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new MediaEngineModule(p02);
    }
}
