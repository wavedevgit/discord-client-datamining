package kotlin.reflect.jvm.internal.impl.resolve.constants;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nClassLiteralValue.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClassLiteralValue.kt\norg/jetbrains/kotlin/resolve/constants/ClassLiteralValue\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,17:1\n1#2:18\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ClassLiteralValue {

    /* renamed from: a  reason: collision with root package name */
    private final ClassId f34134a;

    /* renamed from: b  reason: collision with root package name */
    private final int f34135b;

    public ClassLiteralValue(@NotNull ClassId classId, int i10) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34134a = classId;
        this.f34135b = i10;
    }

    @NotNull
    public final ClassId component1() {
        return this.f34134a;
    }

    public final int component2() {
        return this.f34135b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassLiteralValue) {
            ClassLiteralValue classLiteralValue = (ClassLiteralValue) obj;
            return Intrinsics.areEqual(this.f34134a, classLiteralValue.f34134a) && this.f34135b == classLiteralValue.f34135b;
        }
        return false;
    }

    public final int getArrayNestedness() {
        return this.f34135b;
    }

    @NotNull
    public final ClassId getClassId() {
        return this.f34134a;
    }

    public int hashCode() {
        return (this.f34134a.hashCode() * 31) + Integer.hashCode(this.f34135b);
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        int i10 = this.f34135b;
        for (int i11 = 0; i11 < i10; i11++) {
            sb2.append("kotlin/Array<");
        }
        sb2.append(this.f34134a);
        int i12 = this.f34135b;
        for (int i13 = 0; i13 < i12; i13++) {
            sb2.append(">");
        }
        return sb2.toString();
    }
}
