package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class NullabilityQualifier {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ NullabilityQualifier[] f34358d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34359e;
    public static final NullabilityQualifier FORCE_FLEXIBILITY = new NullabilityQualifier("FORCE_FLEXIBILITY", 0);
    public static final NullabilityQualifier NULLABLE = new NullabilityQualifier("NULLABLE", 1);
    public static final NullabilityQualifier NOT_NULL = new NullabilityQualifier("NOT_NULL", 2);

    static {
        NullabilityQualifier[] a10 = a();
        f34358d = a10;
        f34359e = pr.a.a(a10);
    }

    private NullabilityQualifier(String str, int i10) {
    }

    private static final /* synthetic */ NullabilityQualifier[] a() {
        return new NullabilityQualifier[]{FORCE_FLEXIBILITY, NULLABLE, NOT_NULL};
    }

    public static NullabilityQualifier valueOf(String str) {
        return (NullabilityQualifier) Enum.valueOf(NullabilityQualifier.class, str);
    }

    public static NullabilityQualifier[] values() {
        return (NullabilityQualifier[]) f34358d.clone();
    }
}
