package kotlin.reflect.jvm.internal.impl.load.kotlin.header;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.d;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import org.jetbrains.annotations.NotNull;
import pr.a;
@SourceDebugExtension({"SMAP\nKotlinClassHeader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 KotlinClassHeader.kt\norg/jetbrains/kotlin/load/kotlin/header/KotlinClassHeader\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,75:1\n1#2:76\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class KotlinClassHeader {

    /* renamed from: a  reason: collision with root package name */
    private final Kind f34537a;

    /* renamed from: b  reason: collision with root package name */
    private final MetadataVersion f34538b;

    /* renamed from: c  reason: collision with root package name */
    private final String[] f34539c;

    /* renamed from: d  reason: collision with root package name */
    private final String[] f34540d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f34541e;

    /* renamed from: f  reason: collision with root package name */
    private final String f34542f;

    /* renamed from: g  reason: collision with root package name */
    private final int f34543g;

    /* renamed from: h  reason: collision with root package name */
    private final String f34544h;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f34545i;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @SourceDebugExtension({"SMAP\nKotlinClassHeader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 KotlinClassHeader.kt\norg/jetbrains/kotlin/load/kotlin/header/KotlinClassHeader$Kind\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,75:1\n8704#2,2:76\n8964#2,4:78\n*S KotlinDebug\n*F\n+ 1 KotlinClassHeader.kt\norg/jetbrains/kotlin/load/kotlin/header/KotlinClassHeader$Kind\n*L\n34#1:76,2\n34#1:78,4\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Kind {
        @NotNull
        public static final Companion Companion;

        /* renamed from: e  reason: collision with root package name */
        private static final Map f34546e;

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ Kind[] f34547i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f34548o;

        /* renamed from: d  reason: collision with root package name */
        private final int f34549d;
        public static final Kind UNKNOWN = new Kind("UNKNOWN", 0, 0);
        public static final Kind CLASS = new Kind("CLASS", 1, 1);
        public static final Kind FILE_FACADE = new Kind("FILE_FACADE", 2, 2);
        public static final Kind SYNTHETIC_CLASS = new Kind("SYNTHETIC_CLASS", 3, 3);
        public static final Kind MULTIFILE_CLASS = new Kind("MULTIFILE_CLASS", 4, 4);
        public static final Kind MULTIFILE_CLASS_PART = new Kind("MULTIFILE_CLASS_PART", 5, 5);

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final Kind getById(int i10) {
                Kind kind = (Kind) Kind.f34546e.get(Integer.valueOf(i10));
                if (kind == null) {
                    return Kind.UNKNOWN;
                }
                return kind;
            }

            private Companion() {
            }
        }

        static {
            Kind[] a10 = a();
            f34547i = a10;
            f34548o = a.a(a10);
            Companion = new Companion(null);
            Kind[] values = values();
            LinkedHashMap linkedHashMap = new LinkedHashMap(d.d(o0.e(values.length), 16));
            for (Kind kind : values) {
                linkedHashMap.put(Integer.valueOf(kind.f34549d), kind);
            }
            f34546e = linkedHashMap;
        }

        private Kind(String str, int i10, int i11) {
            this.f34549d = i11;
        }

        private static final /* synthetic */ Kind[] a() {
            return new Kind[]{UNKNOWN, CLASS, FILE_FACADE, SYNTHETIC_CLASS, MULTIFILE_CLASS, MULTIFILE_CLASS_PART};
        }

        @NotNull
        public static final Kind getById(int i10) {
            return Companion.getById(i10);
        }

        public static Kind valueOf(String str) {
            return (Kind) Enum.valueOf(Kind.class, str);
        }

        public static Kind[] values() {
            return (Kind[]) f34547i.clone();
        }
    }

    public KotlinClassHeader(@NotNull Kind kind, @NotNull MetadataVersion metadataVersion, String[] strArr, String[] strArr2, String[] strArr3, String str, int i10, String str2, byte[] bArr) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        this.f34537a = kind;
        this.f34538b = metadataVersion;
        this.f34539c = strArr;
        this.f34540d = strArr2;
        this.f34541e = strArr3;
        this.f34542f = str;
        this.f34543g = i10;
        this.f34544h = str2;
        this.f34545i = bArr;
    }

    private final boolean a(int i10, int i11) {
        return (i10 & i11) != 0;
    }

    public final String[] getData() {
        return this.f34539c;
    }

    public final String[] getIncompatibleData() {
        return this.f34540d;
    }

    @NotNull
    public final Kind getKind() {
        return this.f34537a;
    }

    @NotNull
    public final MetadataVersion getMetadataVersion() {
        return this.f34538b;
    }

    public final String getMultifileClassName() {
        String str = this.f34542f;
        if (this.f34537a == Kind.MULTIFILE_CLASS_PART) {
            return str;
        }
        return null;
    }

    @NotNull
    public final List<String> getMultifilePartNames() {
        String[] strArr = this.f34539c;
        List<String> list = null;
        if (this.f34537a != Kind.MULTIFILE_CLASS) {
            strArr = null;
        }
        if (strArr != null) {
            list = i.e(strArr);
        }
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    public final String[] getStrings() {
        return this.f34541e;
    }

    public final boolean isPreRelease() {
        return a(this.f34543g, 2);
    }

    public final boolean isUnstableJvmIrBinary() {
        if (a(this.f34543g, 16) && !a(this.f34543g, 32)) {
            return true;
        }
        return false;
    }

    @NotNull
    public String toString() {
        return this.f34537a + " version=" + this.f34538b;
    }
}
