package kotlin.reflect.jvm.internal.impl.types;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeUsage {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ TypeUsage[] f34638d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34639e;
    public static final TypeUsage SUPERTYPE = new TypeUsage("SUPERTYPE", 0);
    public static final TypeUsage COMMON = new TypeUsage("COMMON", 1);

    static {
        TypeUsage[] a10 = a();
        f34638d = a10;
        f34639e = xr.a.a(a10);
    }

    private TypeUsage(String str, int i10) {
    }

    private static final /* synthetic */ TypeUsage[] a() {
        return new TypeUsage[]{SUPERTYPE, COMMON};
    }

    public static TypeUsage valueOf(String str) {
        return (TypeUsage) Enum.valueOf(TypeUsage.class, str);
    }

    public static TypeUsage[] values() {
        return (TypeUsage[]) f34638d.clone();
    }
}
