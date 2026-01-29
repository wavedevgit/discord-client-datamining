package com.discord.bridge;

import com.discord.appreview.AppRatingRequestModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$50 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, AppRatingRequestModule> {
    public static final DCDPackageList$getPackages$50 INSTANCE = new DCDPackageList$getPackages$50();

    DCDPackageList$getPackages$50() {
        super(1, AppRatingRequestModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final AppRatingRequestModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new AppRatingRequestModule(p02);
    }
}
