package com.discord.permissions;

import com.discord.permissions.NativePermissionStatus;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
/* synthetic */ class NativePermissionManagerModule$requestWithDeduplication$1$wrapperPromise$1 extends FunctionReferenceImpl implements Function1<Object, String> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public NativePermissionManagerModule$requestWithDeduplication$1$wrapperPromise$1(Object obj) {
        super(1, obj, NativePermissionStatus.Companion.class, "fromAndroidPermissionStatus", "fromAndroidPermissionStatus(Ljava/lang/Object;)Ljava/lang/String;", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public final String invoke(Object obj) {
        return ((NativePermissionStatus.Companion) this.receiver).fromAndroidPermissionStatus(obj);
    }
}
