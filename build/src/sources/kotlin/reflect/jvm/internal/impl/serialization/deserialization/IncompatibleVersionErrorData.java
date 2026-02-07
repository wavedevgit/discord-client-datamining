package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34380a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34381b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f34382c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f34383d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34384e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f34385f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34380a = t10;
        this.f34381b = t11;
        this.f34382c = t12;
        this.f34383d = t13;
        this.f34384e = filePath;
        this.f34385f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f34380a, incompatibleVersionErrorData.f34380a) && Intrinsics.areEqual(this.f34381b, incompatibleVersionErrorData.f34381b) && Intrinsics.areEqual(this.f34382c, incompatibleVersionErrorData.f34382c) && Intrinsics.areEqual(this.f34383d, incompatibleVersionErrorData.f34383d) && Intrinsics.areEqual(this.f34384e, incompatibleVersionErrorData.f34384e) && Intrinsics.areEqual(this.f34385f, incompatibleVersionErrorData.f34385f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f34380a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34381b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f34382c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f34383d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f34384e.hashCode()) * 31) + this.f34385f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f34380a + ", compilerVersion=" + this.f34381b + ", languageVersion=" + this.f34382c + ", expectedVersion=" + this.f34383d + ", filePath=" + this.f34384e + ", classId=" + this.f34385f + ')';
    }
}
