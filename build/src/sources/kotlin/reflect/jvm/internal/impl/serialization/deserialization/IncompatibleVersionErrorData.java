package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34311a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34312b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f34313c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f34314d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34315e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f34316f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34311a = t10;
        this.f34312b = t11;
        this.f34313c = t12;
        this.f34314d = t13;
        this.f34315e = filePath;
        this.f34316f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f34311a, incompatibleVersionErrorData.f34311a) && Intrinsics.areEqual(this.f34312b, incompatibleVersionErrorData.f34312b) && Intrinsics.areEqual(this.f34313c, incompatibleVersionErrorData.f34313c) && Intrinsics.areEqual(this.f34314d, incompatibleVersionErrorData.f34314d) && Intrinsics.areEqual(this.f34315e, incompatibleVersionErrorData.f34315e) && Intrinsics.areEqual(this.f34316f, incompatibleVersionErrorData.f34316f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f34311a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34312b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f34313c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f34314d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f34315e.hashCode()) * 31) + this.f34316f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f34311a + ", compilerVersion=" + this.f34312b + ", languageVersion=" + this.f34313c + ", expectedVersion=" + this.f34314d + ", filePath=" + this.f34315e + ", classId=" + this.f34316f + ')';
    }
}
