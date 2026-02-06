package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeComponentPosition {
    public static final TypeComponentPosition FLEXIBLE_LOWER = new TypeComponentPosition("FLEXIBLE_LOWER", 0);
    public static final TypeComponentPosition FLEXIBLE_UPPER = new TypeComponentPosition("FLEXIBLE_UPPER", 1);
    public static final TypeComponentPosition INFLEXIBLE = new TypeComponentPosition("INFLEXIBLE", 2);

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ TypeComponentPosition[] f33089d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33090e;

    static {
        TypeComponentPosition[] a10 = a();
        f33089d = a10;
        f33090e = xr.a.a(a10);
    }

    private TypeComponentPosition(String str, int i10) {
    }

    private static final /* synthetic */ TypeComponentPosition[] a() {
        return new TypeComponentPosition[]{FLEXIBLE_LOWER, FLEXIBLE_UPPER, INFLEXIBLE};
    }

    public static TypeComponentPosition valueOf(String str) {
        return (TypeComponentPosition) Enum.valueOf(TypeComponentPosition.class, str);
    }

    public static TypeComponentPosition[] values() {
        return (TypeComponentPosition[]) f33089d.clone();
    }
}
