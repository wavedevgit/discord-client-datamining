package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35606a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f35607b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f35608c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f35609d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35610e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f35611f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f35606a = t10;
        this.f35607b = t11;
        this.f35608c = t12;
        this.f35609d = t13;
        this.f35610e = filePath;
        this.f35611f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f35606a, incompatibleVersionErrorData.f35606a) && Intrinsics.areEqual(this.f35607b, incompatibleVersionErrorData.f35607b) && Intrinsics.areEqual(this.f35608c, incompatibleVersionErrorData.f35608c) && Intrinsics.areEqual(this.f35609d, incompatibleVersionErrorData.f35609d) && Intrinsics.areEqual(this.f35610e, incompatibleVersionErrorData.f35610e) && Intrinsics.areEqual(this.f35611f, incompatibleVersionErrorData.f35611f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f35606a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f35607b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f35608c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f35609d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f35610e.hashCode()) * 31) + this.f35611f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f35606a + ", compilerVersion=" + this.f35607b + ", languageVersion=" + this.f35608c + ", expectedVersion=" + this.f35609d + ", filePath=" + this.f35610e + ", classId=" + this.f35611f + ')';
    }
}
