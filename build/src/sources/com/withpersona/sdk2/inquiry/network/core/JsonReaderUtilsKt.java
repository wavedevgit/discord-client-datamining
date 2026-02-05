package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.m;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class JsonReaderUtilsKt {
    public static final String nextStringOrNull(@NotNull m mVar) {
        if (mVar.E() != m.c.NULL) {
            return mVar.f1();
        }
        return (String) mVar.m();
    }
}
