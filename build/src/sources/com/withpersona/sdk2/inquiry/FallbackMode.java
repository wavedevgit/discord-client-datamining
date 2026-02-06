package com.withpersona.sdk2.inquiry;

import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import org.jetbrains.annotations.NotNull;
import xr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/FallbackMode;", "", "<init>", "(Ljava/lang/String;I)V", "NEVER", "ALWAYS", "DEFER", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FallbackMode {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ FallbackMode[] $VALUES;
    public static final FallbackMode NEVER = new FallbackMode("NEVER", 0);
    public static final FallbackMode ALWAYS = new FallbackMode("ALWAYS", 1);
    public static final FallbackMode DEFER = new FallbackMode("DEFER", 2);

    private static final /* synthetic */ FallbackMode[] $values() {
        return new FallbackMode[]{NEVER, ALWAYS, DEFER};
    }

    static {
        FallbackMode[] $values = $values();
        $VALUES = $values;
        $ENTRIES = a.a($values);
    }

    private FallbackMode(String str, int i10) {
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static FallbackMode valueOf(String str) {
        return (FallbackMode) Enum.valueOf(FallbackMode.class, str);
    }

    public static FallbackMode[] values() {
        return (FallbackMode[]) $VALUES.clone();
    }
}
