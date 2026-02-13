package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34880a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34881b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f34882c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f34883d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34884e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f34885f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34880a = t10;
        this.f34881b = t11;
        this.f34882c = t12;
        this.f34883d = t13;
        this.f34884e = filePath;
        this.f34885f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f34880a, incompatibleVersionErrorData.f34880a) && Intrinsics.areEqual(this.f34881b, incompatibleVersionErrorData.f34881b) && Intrinsics.areEqual(this.f34882c, incompatibleVersionErrorData.f34882c) && Intrinsics.areEqual(this.f34883d, incompatibleVersionErrorData.f34883d) && Intrinsics.areEqual(this.f34884e, incompatibleVersionErrorData.f34884e) && Intrinsics.areEqual(this.f34885f, incompatibleVersionErrorData.f34885f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f34880a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34881b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f34882c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f34883d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f34884e.hashCode()) * 31) + this.f34885f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f34880a + ", compilerVersion=" + this.f34881b + ", languageVersion=" + this.f34882c + ", expectedVersion=" + this.f34883d + ", filePath=" + this.f34884e + ", classId=" + this.f34885f + ')';
    }
}
