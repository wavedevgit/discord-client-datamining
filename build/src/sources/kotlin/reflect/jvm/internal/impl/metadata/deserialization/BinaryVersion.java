package kotlin.reflect.jvm.internal.impl.metadata.deserialization;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nBinaryVersion.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BinaryVersion.kt\norg/jetbrains/kotlin/metadata/deserialization/BinaryVersion\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,101:1\n5343#2,7:102\n*S KotlinDebug\n*F\n+ 1 BinaryVersion.kt\norg/jetbrains/kotlin/metadata/deserialization/BinaryVersion\n*L\n73#1:102,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class BinaryVersion {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final int[] f33766a;

    /* renamed from: b  reason: collision with root package name */
    private final int f33767b;

    /* renamed from: c  reason: collision with root package name */
    private final int f33768c;

    /* renamed from: d  reason: collision with root package name */
    private final int f33769d;

    /* renamed from: e  reason: collision with root package name */
    private final List f33770e;

    @SourceDebugExtension({"SMAP\nBinaryVersion.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BinaryVersion.kt\norg/jetbrains/kotlin/metadata/deserialization/BinaryVersion$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,101:1\n1563#2:102\n1634#2,3:103\n37#3:106\n36#3,3:107\n*S KotlinDebug\n*F\n+ 1 BinaryVersion.kt\norg/jetbrains/kotlin/metadata/deserialization/BinaryVersion$Companion\n*L\n97#1:102\n97#1:103,3\n98#1:106\n98#1:107,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public BinaryVersion(@NotNull int... numbers) {
        int i10;
        int i11;
        List l10;
        Intrinsics.checkNotNullParameter(numbers, "numbers");
        this.f33766a = numbers;
        Integer b02 = i.b0(numbers, 0);
        if (b02 != null) {
            i10 = b02.intValue();
        } else {
            i10 = -1;
        }
        this.f33767b = i10;
        Integer b03 = i.b0(numbers, 1);
        if (b03 != null) {
            i11 = b03.intValue();
        } else {
            i11 = -1;
        }
        this.f33768c = i11;
        Integer b04 = i.b0(numbers, 2);
        this.f33769d = b04 != null ? b04.intValue() : -1;
        if (numbers.length > 3) {
            if (numbers.length <= 1024) {
                l10 = CollectionsKt.h1(i.d(numbers).subList(3, numbers.length));
            } else {
                throw new IllegalArgumentException("BinaryVersion with length more than 1024 are not supported. Provided length " + numbers.length + '.');
            }
        } else {
            l10 = CollectionsKt.l();
        }
        this.f33770e = l10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean a(BinaryVersion ourVersion) {
        Intrinsics.checkNotNullParameter(ourVersion, "ourVersion");
        int i10 = this.f33767b;
        if (i10 == 0) {
            if (ourVersion.f33767b != 0 || this.f33768c != ourVersion.f33768c) {
                return false;
            }
            return true;
        } else if (i10 != ourVersion.f33767b || this.f33768c > ourVersion.f33768c) {
            return false;
        } else {
            return true;
        }
    }

    public boolean equals(Object obj) {
        if (obj != null && Intrinsics.areEqual(getClass(), obj.getClass())) {
            BinaryVersion binaryVersion = (BinaryVersion) obj;
            if (this.f33767b == binaryVersion.f33767b && this.f33768c == binaryVersion.f33768c && this.f33769d == binaryVersion.f33769d && Intrinsics.areEqual(this.f33770e, binaryVersion.f33770e)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final int getMajor() {
        return this.f33767b;
    }

    public final int getMinor() {
        return this.f33768c;
    }

    public int hashCode() {
        int i10 = this.f33767b;
        int i11 = i10 + (i10 * 31) + this.f33768c;
        int i12 = i11 + (i11 * 31) + this.f33769d;
        return i12 + (i12 * 31) + this.f33770e.hashCode();
    }

    public final boolean isAtLeast(@NotNull BinaryVersion version) {
        Intrinsics.checkNotNullParameter(version, "version");
        return isAtLeast(version.f33767b, version.f33768c, version.f33769d);
    }

    public final boolean isAtMost(int i10, int i11, int i12) {
        int i13 = this.f33767b;
        if (i13 < i10) {
            return true;
        }
        if (i13 > i10) {
            return false;
        }
        int i14 = this.f33768c;
        if (i14 < i11) {
            return true;
        }
        if (i14 <= i11 && this.f33769d <= i12) {
            return true;
        }
        return false;
    }

    @NotNull
    public final int[] toArray() {
        return this.f33766a;
    }

    @NotNull
    public String toString() {
        int[] array = toArray();
        ArrayList arrayList = new ArrayList();
        for (int i10 : array) {
            if (i10 == -1) {
                break;
            }
            arrayList.add(Integer.valueOf(i10));
        }
        if (arrayList.isEmpty()) {
            return "unknown";
        }
        return CollectionsKt.x0(arrayList, ".", null, null, 0, null, null, 62, null);
    }

    public final boolean isAtLeast(int i10, int i11, int i12) {
        int i13 = this.f33767b;
        if (i13 > i10) {
            return true;
        }
        if (i13 < i10) {
            return false;
        }
        int i14 = this.f33768c;
        if (i14 > i11) {
            return true;
        }
        return i14 >= i11 && this.f33769d >= i12;
    }
}
