package kotlin.reflect.jvm.internal.impl.builtins;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class UnsignedType {
    public static final UnsignedType UBYTE;
    public static final UnsignedType UINT;
    public static final UnsignedType ULONG;
    public static final UnsignedType USHORT;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ UnsignedType[] f32154o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32155p;

    /* renamed from: d  reason: collision with root package name */
    private final ClassId f32156d;

    /* renamed from: e  reason: collision with root package name */
    private final Name f32157e;

    /* renamed from: i  reason: collision with root package name */
    private final ClassId f32158i;

    static {
        ClassId.Companion companion = ClassId.Companion;
        UBYTE = new UnsignedType("UBYTE", 0, ClassId.Companion.fromString$default(companion, "kotlin/UByte", false, 2, null));
        USHORT = new UnsignedType("USHORT", 1, ClassId.Companion.fromString$default(companion, "kotlin/UShort", false, 2, null));
        UINT = new UnsignedType("UINT", 2, ClassId.Companion.fromString$default(companion, "kotlin/UInt", false, 2, null));
        ULONG = new UnsignedType("ULONG", 3, ClassId.Companion.fromString$default(companion, "kotlin/ULong", false, 2, null));
        UnsignedType[] a10 = a();
        f32154o = a10;
        f32155p = vr.a.a(a10);
    }

    private UnsignedType(String str, int i10, ClassId classId) {
        this.f32156d = classId;
        Name shortClassName = classId.getShortClassName();
        this.f32157e = shortClassName;
        FqName packageFqName = classId.getPackageFqName();
        Name identifier = Name.identifier(shortClassName.asString() + "Array");
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        this.f32158i = new ClassId(packageFqName, identifier);
    }

    private static final /* synthetic */ UnsignedType[] a() {
        return new UnsignedType[]{UBYTE, USHORT, UINT, ULONG};
    }

    public static UnsignedType valueOf(String str) {
        return (UnsignedType) Enum.valueOf(UnsignedType.class, str);
    }

    public static UnsignedType[] values() {
        return (UnsignedType[]) f32154o.clone();
    }

    @NotNull
    public final ClassId getArrayClassId() {
        return this.f32158i;
    }

    @NotNull
    public final ClassId getClassId() {
        return this.f32156d;
    }

    @NotNull
    public final Name getTypeName() {
        return this.f32157e;
    }
}
