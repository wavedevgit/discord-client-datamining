package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34089a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34090b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f34091c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f34092d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34093e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f34094f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34089a = t10;
        this.f34090b = t11;
        this.f34091c = t12;
        this.f34092d = t13;
        this.f34093e = filePath;
        this.f34094f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f34089a, incompatibleVersionErrorData.f34089a) && Intrinsics.areEqual(this.f34090b, incompatibleVersionErrorData.f34090b) && Intrinsics.areEqual(this.f34091c, incompatibleVersionErrorData.f34091c) && Intrinsics.areEqual(this.f34092d, incompatibleVersionErrorData.f34092d) && Intrinsics.areEqual(this.f34093e, incompatibleVersionErrorData.f34093e) && Intrinsics.areEqual(this.f34094f, incompatibleVersionErrorData.f34094f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f34089a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34090b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f34091c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f34092d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f34093e.hashCode()) * 31) + this.f34094f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f34089a + ", compilerVersion=" + this.f34090b + ", languageVersion=" + this.f34091c + ", expectedVersion=" + this.f34092d + ", filePath=" + this.f34093e + ", classId=" + this.f34094f + ')';
    }
}
