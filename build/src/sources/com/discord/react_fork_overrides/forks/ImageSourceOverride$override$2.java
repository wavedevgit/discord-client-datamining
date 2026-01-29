package com.discord.react_fork_overrides.forks;

import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class ImageSourceOverride$override$2 extends FunctionReferenceImpl implements Function1<String, String> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public ImageSourceOverride$override$2(Object obj) {
        super(1, obj, ImageSourceOverride.class, "resolvedOTAAssetOrDefaultToDrawable", "resolvedOTAAssetOrDefaultToDrawable(Ljava/lang/String;)Ljava/lang/String;", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final String invoke(String p02) {
        String resolvedOTAAssetOrDefaultToDrawable;
        Intrinsics.checkNotNullParameter(p02, "p0");
        resolvedOTAAssetOrDefaultToDrawable = ((ImageSourceOverride) this.receiver).resolvedOTAAssetOrDefaultToDrawable(p02);
        return resolvedOTAAssetOrDefaultToDrawable;
    }
}
