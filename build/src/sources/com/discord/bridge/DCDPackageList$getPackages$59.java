package com.discord.bridge;

import com.discord.react.utilities.DateFormatUtilsModule;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class DCDPackageList$getPackages$59 extends FunctionReferenceImpl implements Function1<ReactApplicationContext, DateFormatUtilsModule> {
    public static final DCDPackageList$getPackages$59 INSTANCE = new DCDPackageList$getPackages$59();

    DCDPackageList$getPackages$59() {
        super(1, DateFormatUtilsModule.class, "<init>", "<init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final DateFormatUtilsModule invoke(ReactApplicationContext p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        return new DateFormatUtilsModule(p02);
    }
}
