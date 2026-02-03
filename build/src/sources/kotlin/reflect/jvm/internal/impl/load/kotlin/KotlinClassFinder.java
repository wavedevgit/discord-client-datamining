package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.KotlinMetadataFinder;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface KotlinClassFinder extends KotlinMetadataFinder {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class Result {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class ClassFileContent extends Result {

            /* renamed from: a  reason: collision with root package name */
            private final byte[] f33695a;

            @NotNull
            public final byte[] getContent() {
                return this.f33695a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class KotlinClass extends Result {

            /* renamed from: a  reason: collision with root package name */
            private final KotlinJvmBinaryClass f33696a;

            /* renamed from: b  reason: collision with root package name */
            private final byte[] f33697b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public KotlinClass(@NotNull KotlinJvmBinaryClass kotlinJvmBinaryClass, byte[] bArr) {
                super(null);
                Intrinsics.checkNotNullParameter(kotlinJvmBinaryClass, "kotlinJvmBinaryClass");
                this.f33696a = kotlinJvmBinaryClass;
                this.f33697b = bArr;
            }

            @NotNull
            public final KotlinJvmBinaryClass getKotlinJvmBinaryClass() {
                return this.f33696a;
            }

            public /* synthetic */ KotlinClass(KotlinJvmBinaryClass kotlinJvmBinaryClass, byte[] bArr, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(kotlinJvmBinaryClass, (i10 & 2) != 0 ? null : bArr);
            }
        }

        public /* synthetic */ Result(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final KotlinJvmBinaryClass toKotlinJvmBinaryClass() {
            KotlinClass kotlinClass;
            if (this instanceof KotlinClass) {
                kotlinClass = (KotlinClass) this;
            } else {
                kotlinClass = null;
            }
            if (kotlinClass == null) {
                return null;
            }
            return kotlinClass.getKotlinJvmBinaryClass();
        }

        private Result() {
        }
    }

    Result findKotlinClassOrContent(@NotNull JavaClass javaClass, @NotNull MetadataVersion metadataVersion);

    Result findKotlinClassOrContent(@NotNull ClassId classId, @NotNull MetadataVersion metadataVersion);
}
