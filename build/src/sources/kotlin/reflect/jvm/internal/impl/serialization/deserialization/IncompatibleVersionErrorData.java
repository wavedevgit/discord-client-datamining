package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35398a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f35399b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f35400c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f35401d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35402e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f35403f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f35398a = t10;
        this.f35399b = t11;
        this.f35400c = t12;
        this.f35401d = t13;
        this.f35402e = filePath;
        this.f35403f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f35398a, incompatibleVersionErrorData.f35398a) && Intrinsics.areEqual(this.f35399b, incompatibleVersionErrorData.f35399b) && Intrinsics.areEqual(this.f35400c, incompatibleVersionErrorData.f35400c) && Intrinsics.areEqual(this.f35401d, incompatibleVersionErrorData.f35401d) && Intrinsics.areEqual(this.f35402e, incompatibleVersionErrorData.f35402e) && Intrinsics.areEqual(this.f35403f, incompatibleVersionErrorData.f35403f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f35398a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f35399b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f35400c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f35401d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f35402e.hashCode()) * 31) + this.f35403f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f35398a + ", compilerVersion=" + this.f35399b + ", languageVersion=" + this.f35400c + ", expectedVersion=" + this.f35401d + ", filePath=" + this.f35402e + ", classId=" + this.f35403f + ')';
    }
}
