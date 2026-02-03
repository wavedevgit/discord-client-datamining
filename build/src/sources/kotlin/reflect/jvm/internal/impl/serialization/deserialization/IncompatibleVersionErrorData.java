package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34788a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34789b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f34790c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f34791d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34792e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f34793f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34788a = t10;
        this.f34789b = t11;
        this.f34790c = t12;
        this.f34791d = t13;
        this.f34792e = filePath;
        this.f34793f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f34788a, incompatibleVersionErrorData.f34788a) && Intrinsics.areEqual(this.f34789b, incompatibleVersionErrorData.f34789b) && Intrinsics.areEqual(this.f34790c, incompatibleVersionErrorData.f34790c) && Intrinsics.areEqual(this.f34791d, incompatibleVersionErrorData.f34791d) && Intrinsics.areEqual(this.f34792e, incompatibleVersionErrorData.f34792e) && Intrinsics.areEqual(this.f34793f, incompatibleVersionErrorData.f34793f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f34788a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34789b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f34790c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f34791d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f34792e.hashCode()) * 31) + this.f34793f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f34788a + ", compilerVersion=" + this.f34789b + ", languageVersion=" + this.f34790c + ", expectedVersion=" + this.f34791d + ", filePath=" + this.f34792e + ", classId=" + this.f34793f + ')';
    }
}
