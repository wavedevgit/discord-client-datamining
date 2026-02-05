package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ClassKind {

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ ClassKind[] f32279e;

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32280i;

    /* renamed from: d  reason: collision with root package name */
    private final String f32281d;
    public static final ClassKind CLASS = new ClassKind("CLASS", 0, "class");
    public static final ClassKind INTERFACE = new ClassKind("INTERFACE", 1, "interface");
    public static final ClassKind ENUM_CLASS = new ClassKind("ENUM_CLASS", 2, "enum class");
    public static final ClassKind ENUM_ENTRY = new ClassKind("ENUM_ENTRY", 3, null);
    public static final ClassKind ANNOTATION_CLASS = new ClassKind("ANNOTATION_CLASS", 4, "annotation class");
    public static final ClassKind OBJECT = new ClassKind("OBJECT", 5, "object");

    static {
        ClassKind[] a10 = a();
        f32279e = a10;
        f32280i = vr.a.a(a10);
    }

    private ClassKind(String str, int i10, String str2) {
        this.f32281d = str2;
    }

    private static final /* synthetic */ ClassKind[] a() {
        return new ClassKind[]{CLASS, INTERFACE, ENUM_CLASS, ENUM_ENTRY, ANNOTATION_CLASS, OBJECT};
    }

    public static ClassKind valueOf(String str) {
        return (ClassKind) Enum.valueOf(ClassKind.class, str);
    }

    public static ClassKind[] values() {
        return (ClassKind[]) f32279e.clone();
    }

    public final boolean isSingleton() {
        if (this != OBJECT && this != ENUM_ENTRY) {
            return false;
        }
        return true;
    }
}
