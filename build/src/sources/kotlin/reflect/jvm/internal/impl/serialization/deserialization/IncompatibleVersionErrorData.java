package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35622a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f35623b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f35624c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f35625d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35626e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f35627f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f35622a = t10;
        this.f35623b = t11;
        this.f35624c = t12;
        this.f35625d = t13;
        this.f35626e = filePath;
        this.f35627f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f35622a, incompatibleVersionErrorData.f35622a) && Intrinsics.areEqual(this.f35623b, incompatibleVersionErrorData.f35623b) && Intrinsics.areEqual(this.f35624c, incompatibleVersionErrorData.f35624c) && Intrinsics.areEqual(this.f35625d, incompatibleVersionErrorData.f35625d) && Intrinsics.areEqual(this.f35626e, incompatibleVersionErrorData.f35626e) && Intrinsics.areEqual(this.f35627f, incompatibleVersionErrorData.f35627f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f35622a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f35623b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f35624c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f35625d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f35626e.hashCode()) * 31) + this.f35627f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f35622a + ", compilerVersion=" + this.f35623b + ", languageVersion=" + this.f35624c + ", expectedVersion=" + this.f35625d + ", filePath=" + this.f35626e + ", classId=" + this.f35627f + ')';
    }
}
