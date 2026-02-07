package kotlin.reflect.jvm.internal.impl.builtins;

import kotlin.enums.EnumEntries;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class UnsignedArrayType {
    public static final UnsignedArrayType UBYTEARRAY;
    public static final UnsignedArrayType UINTARRAY;
    public static final UnsignedArrayType ULONGARRAY;
    public static final UnsignedArrayType USHORTARRAY;

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ UnsignedArrayType[] f32218i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32219o;

    /* renamed from: d  reason: collision with root package name */
    private final ClassId f32220d;

    /* renamed from: e  reason: collision with root package name */
    private final Name f32221e;

    static {
        ClassId.Companion companion = ClassId.Companion;
        UBYTEARRAY = new UnsignedArrayType("UBYTEARRAY", 0, ClassId.Companion.fromString$default(companion, "kotlin/UByteArray", false, 2, null));
        USHORTARRAY = new UnsignedArrayType("USHORTARRAY", 1, ClassId.Companion.fromString$default(companion, "kotlin/UShortArray", false, 2, null));
        UINTARRAY = new UnsignedArrayType("UINTARRAY", 2, ClassId.Companion.fromString$default(companion, "kotlin/UIntArray", false, 2, null));
        ULONGARRAY = new UnsignedArrayType("ULONGARRAY", 3, ClassId.Companion.fromString$default(companion, "kotlin/ULongArray", false, 2, null));
        UnsignedArrayType[] a10 = a();
        f32218i = a10;
        f32219o = xr.a.a(a10);
    }

    private UnsignedArrayType(String str, int i10, ClassId classId) {
        this.f32220d = classId;
        this.f32221e = classId.getShortClassName();
    }

    private static final /* synthetic */ UnsignedArrayType[] a() {
        return new UnsignedArrayType[]{UBYTEARRAY, USHORTARRAY, UINTARRAY, ULONGARRAY};
    }

    public static UnsignedArrayType valueOf(String str) {
        return (UnsignedArrayType) Enum.valueOf(UnsignedArrayType.class, str);
    }

    public static UnsignedArrayType[] values() {
        return (UnsignedArrayType[]) f32218i.clone();
    }

    @NotNull
    public final Name getTypeName() {
        return this.f32221e;
    }
}
