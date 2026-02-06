package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IncompatibleVersionErrorData<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34332a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f34333b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f34334c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f34335d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34336e;

    /* renamed from: f  reason: collision with root package name */
    private final ClassId f34337f;

    public IncompatibleVersionErrorData(T t10, T t11, T t12, T t13, @NotNull String filePath, @NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(filePath, "filePath");
        Intrinsics.checkNotNullParameter(classId, "classId");
        this.f34332a = t10;
        this.f34333b = t11;
        this.f34334c = t12;
        this.f34335d = t13;
        this.f34336e = filePath;
        this.f34337f = classId;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof IncompatibleVersionErrorData) {
            IncompatibleVersionErrorData incompatibleVersionErrorData = (IncompatibleVersionErrorData) obj;
            return Intrinsics.areEqual(this.f34332a, incompatibleVersionErrorData.f34332a) && Intrinsics.areEqual(this.f34333b, incompatibleVersionErrorData.f34333b) && Intrinsics.areEqual(this.f34334c, incompatibleVersionErrorData.f34334c) && Intrinsics.areEqual(this.f34335d, incompatibleVersionErrorData.f34335d) && Intrinsics.areEqual(this.f34336e, incompatibleVersionErrorData.f34336e) && Intrinsics.areEqual(this.f34337f, incompatibleVersionErrorData.f34337f);
        }
        return false;
    }

    public int hashCode() {
        Object obj = this.f34332a;
        int hashCode = (obj == null ? 0 : obj.hashCode()) * 31;
        Object obj2 = this.f34333b;
        int hashCode2 = (hashCode + (obj2 == null ? 0 : obj2.hashCode())) * 31;
        Object obj3 = this.f34334c;
        int hashCode3 = (hashCode2 + (obj3 == null ? 0 : obj3.hashCode())) * 31;
        Object obj4 = this.f34335d;
        return ((((hashCode3 + (obj4 != null ? obj4.hashCode() : 0)) * 31) + this.f34336e.hashCode()) * 31) + this.f34337f.hashCode();
    }

    @NotNull
    public String toString() {
        return "IncompatibleVersionErrorData(actualVersion=" + this.f34332a + ", compilerVersion=" + this.f34333b + ", languageVersion=" + this.f34334c + ", expectedVersion=" + this.f34335d + ", filePath=" + this.f34336e + ", classId=" + this.f34337f + ')';
    }
}
