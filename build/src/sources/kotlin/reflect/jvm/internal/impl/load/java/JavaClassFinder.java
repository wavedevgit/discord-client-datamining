package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.Arrays;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaPackage;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface JavaClassFinder {
    JavaClass findClass(@NotNull Request request);

    JavaPackage findPackage(@NotNull FqName fqName, boolean z10);

    Set<String> knownClassNamesInPackage(@NotNull FqName fqName);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Request {

        /* renamed from: a  reason: collision with root package name */
        private final ClassId f32452a;

        /* renamed from: b  reason: collision with root package name */
        private final byte[] f32453b;

        /* renamed from: c  reason: collision with root package name */
        private final JavaClass f32454c;

        public Request(@NotNull ClassId classId, byte[] bArr, JavaClass javaClass) {
            Intrinsics.checkNotNullParameter(classId, "classId");
            this.f32452a = classId;
            this.f32453b = bArr;
            this.f32454c = javaClass;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Request) {
                Request request = (Request) obj;
                return Intrinsics.areEqual(this.f32452a, request.f32452a) && Intrinsics.areEqual(this.f32453b, request.f32453b) && Intrinsics.areEqual(this.f32454c, request.f32454c);
            }
            return false;
        }

        @NotNull
        public final ClassId getClassId() {
            return this.f32452a;
        }

        public int hashCode() {
            int hashCode = this.f32452a.hashCode() * 31;
            byte[] bArr = this.f32453b;
            int hashCode2 = (hashCode + (bArr == null ? 0 : Arrays.hashCode(bArr))) * 31;
            JavaClass javaClass = this.f32454c;
            return hashCode2 + (javaClass != null ? javaClass.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            return "Request(classId=" + this.f32452a + ", previouslyFoundClassFileContent=" + Arrays.toString(this.f32453b) + ", outerClass=" + this.f32454c + ')';
        }

        public /* synthetic */ Request(ClassId classId, byte[] bArr, JavaClass javaClass, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(classId, (i10 & 2) != 0 ? null : bArr, (i10 & 4) != 0 ? null : javaClass);
        }
    }
}
