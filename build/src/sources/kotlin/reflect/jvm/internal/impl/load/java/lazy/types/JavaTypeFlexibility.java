package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeFlexibility {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ JavaTypeFlexibility[] f33008d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33009e;
    public static final JavaTypeFlexibility INFLEXIBLE = new JavaTypeFlexibility("INFLEXIBLE", 0);
    public static final JavaTypeFlexibility FLEXIBLE_UPPER_BOUND = new JavaTypeFlexibility("FLEXIBLE_UPPER_BOUND", 1);
    public static final JavaTypeFlexibility FLEXIBLE_LOWER_BOUND = new JavaTypeFlexibility("FLEXIBLE_LOWER_BOUND", 2);

    static {
        JavaTypeFlexibility[] a10 = a();
        f33008d = a10;
        f33009e = vr.a.a(a10);
    }

    private JavaTypeFlexibility(String str, int i10) {
    }

    private static final /* synthetic */ JavaTypeFlexibility[] a() {
        return new JavaTypeFlexibility[]{INFLEXIBLE, FLEXIBLE_UPPER_BOUND, FLEXIBLE_LOWER_BOUND};
    }

    public static JavaTypeFlexibility valueOf(String str) {
        return (JavaTypeFlexibility) Enum.valueOf(JavaTypeFlexibility.class, str);
    }

    public static JavaTypeFlexibility[] values() {
        return (JavaTypeFlexibility[]) f33008d.clone();
    }
}
