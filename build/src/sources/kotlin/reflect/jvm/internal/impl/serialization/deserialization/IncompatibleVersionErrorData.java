package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34312a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34313b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f34314c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f34315d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34316e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f34317f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34312a = t10;
        this.f34313b = t11;
        this.f34314c = t12;
        this.f34315d = t13;
        this.f34316e = filePath;
        this.f34317f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f34312a, incompatibleVersionErrorData.f34312a) && Intrinsics.areEqual(this.f34313b, incompatibleVersionErrorData.f34313b) && Intrinsics.areEqual(this.f34314c, incompatibleVersionErrorData.f34314c) && Intrinsics.areEqual(this.f34315d, incompatibleVersionErrorData.f34315d) && Intrinsics.areEqual(this.f34316e, incompatibleVersionErrorData.f34316e) && Intrinsics.areEqual(this.f34317f, incompatibleVersionErrorData.f34317f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f34312a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34313b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f34314c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f34315d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f34316e.hashCode()) * 31) + this.f34317f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f34312a + ", compilerVersion=" + this.f34313b + ", languageVersion=" + this.f34314c + ", expectedVersion=" + this.f34315d + ", filePath=" + this.f34316e + ", classId=" + this.f34317f + ')';
    }
}
