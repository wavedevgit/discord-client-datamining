package com.discord.portals.utils;

import jr.e;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\b\n\u0000\n\u0002\u0010\u000e\n\u0000\u001a\u0006\u0010\u0000\u001a\u00020\u0001¨\u0006\u0002"}, d2 = {"getCurrentStacktraceString", "", "portals_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class StacktraceUtilsKt {
    @NotNull
    public static final String getCurrentStacktraceString() {
        return e.b(new Throwable());
    }
}
