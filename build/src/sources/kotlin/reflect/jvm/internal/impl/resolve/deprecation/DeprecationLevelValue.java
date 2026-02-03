package kotlin.reflect.jvm.internal.impl.resolve.deprecation;

import kotlin.enums.EnumEntries;
import sr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DeprecationLevelValue {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ DeprecationLevelValue[] f34618d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34619e;
    public static final DeprecationLevelValue WARNING = new DeprecationLevelValue("WARNING", 0);
    public static final DeprecationLevelValue ERROR = new DeprecationLevelValue("ERROR", 1);
    public static final DeprecationLevelValue HIDDEN = new DeprecationLevelValue("HIDDEN", 2);

    static {
        DeprecationLevelValue[] a10 = a();
        f34618d = a10;
        f34619e = a.a(a10);
    }

    private DeprecationLevelValue(String str, int i10) {
    }

    private static final /* synthetic */ DeprecationLevelValue[] a() {
        return new DeprecationLevelValue[]{WARNING, ERROR, HIDDEN};
    }

    public static DeprecationLevelValue valueOf(String str) {
        return (DeprecationLevelValue) Enum.valueOf(DeprecationLevelValue.class, str);
    }

    public static DeprecationLevelValue[] values() {
        return (DeprecationLevelValue[]) f34618d.clone();
    }
}
