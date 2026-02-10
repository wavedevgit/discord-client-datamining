package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class MutabilityQualifier {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ MutabilityQualifier[] f32822d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32823e;
    public static final MutabilityQualifier READ_ONLY = new MutabilityQualifier("READ_ONLY", 0);
    public static final MutabilityQualifier MUTABLE = new MutabilityQualifier("MUTABLE", 1);

    static {
        MutabilityQualifier[] a10 = a();
        f32822d = a10;
        f32823e = yr.a.a(a10);
    }

    private MutabilityQualifier(String str, int i10) {
    }

    private static final /* synthetic */ MutabilityQualifier[] a() {
        return new MutabilityQualifier[]{READ_ONLY, MUTABLE};
    }

    public static MutabilityQualifier valueOf(String str) {
        return (MutabilityQualifier) Enum.valueOf(MutabilityQualifier.class, str);
    }

    public static MutabilityQualifier[] values() {
        return (MutabilityQualifier[]) f32822d.clone();
    }
}
