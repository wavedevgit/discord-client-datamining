package kotlin.reflect.jvm.internal.impl.name;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nCallableId.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CallableId.kt\norg/jetbrains/kotlin/name/CallableId\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,134:1\n1#2:135\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CallableId {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Name f35107f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f35108g;

    /* renamed from: a  reason: collision with root package name */
    private final FqName f35109a;

    /* renamed from: b  reason: collision with root package name */
    private final FqName f35110b;

    /* renamed from: c  reason: collision with root package name */
    private final Name f35111c;

    /* renamed from: d  reason: collision with root package name */
    private final ClassId f35112d;

    /* renamed from: e  reason: collision with root package name */
    private final FqName f35113e;

    @SourceDebugExtension({"SMAP\nCallableId.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CallableId.kt\norg/jetbrains/kotlin/name/CallableId$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,134:1\n1#2:135\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        Name name = SpecialNames.LOCAL;
        f35107f = name;
        f35108g = FqName.Companion.topLevel(name);
    }

    private CallableId(FqName fqName, FqName fqName2, Name name, ClassId classId, FqName fqName3) {
        this.f35109a = fqName;
        this.f35110b = fqName2;
        this.f35111c = name;
        this.f35112d = classId;
        this.f35113e = fqName3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof CallableId)) {
            return false;
        }
        CallableId callableId = (CallableId) obj;
        if (Intrinsics.areEqual(this.f35109a, callableId.f35109a) && Intrinsics.areEqual(this.f35110b, callableId.f35110b) && Intrinsics.areEqual(this.f35111c, callableId.f35111c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = (527 + this.f35109a.hashCode()) * 31;
        FqName fqName = this.f35110b;
        if (fqName != null) {
            i10 = fqName.hashCode();
        } else {
            i10 = 0;
        }
        return ((hashCode + i10) * 31) + this.f35111c.hashCode();
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(StringsKt.I(this.f35109a.asString(), '.', '/', false, 4, null));
        sb2.append("/");
        FqName fqName = this.f35110b;
        if (fqName != null) {
            sb2.append(fqName);
            sb2.append(".");
        }
        sb2.append(this.f35111c);
        return sb2.toString();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public CallableId(@NotNull FqName packageName, @NotNull Name callableName) {
        this(packageName, null, callableName, null, null);
        Intrinsics.checkNotNullParameter(packageName, "packageName");
        Intrinsics.checkNotNullParameter(callableName, "callableName");
    }
}
