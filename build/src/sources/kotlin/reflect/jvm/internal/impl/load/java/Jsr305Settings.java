package kotlin.reflect.jvm.internal.impl.load.java;

import as.l;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJsr305Settings.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Jsr305Settings.kt\norg/jetbrains/kotlin/load/java/Jsr305Settings\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n+ 4 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,26:1\n1#2:27\n216#3,2:28\n37#4:30\n36#4,3:31\n*S KotlinDebug\n*F\n+ 1 Jsr305Settings.kt\norg/jetbrains/kotlin/load/java/Jsr305Settings\n*L\n19#1:28,2\n20#1:30\n20#1:31,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Jsr305Settings {

    /* renamed from: a  reason: collision with root package name */
    private final ReportLevel f32704a;

    /* renamed from: b  reason: collision with root package name */
    private final ReportLevel f32705b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f32706c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f32707d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32708e;

    public Jsr305Settings(@NotNull ReportLevel globalLevel, ReportLevel reportLevel, @NotNull Map<FqName, ? extends ReportLevel> userDefinedLevelForSpecificAnnotation) {
        Intrinsics.checkNotNullParameter(globalLevel, "globalLevel");
        Intrinsics.checkNotNullParameter(userDefinedLevelForSpecificAnnotation, "userDefinedLevelForSpecificAnnotation");
        this.f32704a = globalLevel;
        this.f32705b = reportLevel;
        this.f32706c = userDefinedLevelForSpecificAnnotation;
        this.f32707d = l.b(new g(this));
        ReportLevel reportLevel2 = ReportLevel.IGNORE;
        this.f32708e = globalLevel == reportLevel2 && reportLevel == reportLevel2 && userDefinedLevelForSpecificAnnotation.isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String[] b(Jsr305Settings jsr305Settings) {
        List c10 = CollectionsKt.c();
        c10.add(jsr305Settings.f32704a.getDescription());
        ReportLevel reportLevel = jsr305Settings.f32705b;
        if (reportLevel != null) {
            c10.add("under-migration:" + reportLevel.getDescription());
        }
        for (Map.Entry entry : jsr305Settings.f32706c.entrySet()) {
            c10.add('@' + entry.getKey() + ':' + ((ReportLevel) entry.getValue()).getDescription());
        }
        return (String[]) CollectionsKt.a(c10).toArray(new String[0]);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Jsr305Settings) {
            Jsr305Settings jsr305Settings = (Jsr305Settings) obj;
            return this.f32704a == jsr305Settings.f32704a && this.f32705b == jsr305Settings.f32705b && Intrinsics.areEqual(this.f32706c, jsr305Settings.f32706c);
        }
        return false;
    }

    @NotNull
    public final ReportLevel getGlobalLevel() {
        return this.f32704a;
    }

    public final ReportLevel getMigrationLevel() {
        return this.f32705b;
    }

    @NotNull
    public final Map<FqName, ReportLevel> getUserDefinedLevelForSpecificAnnotation() {
        return this.f32706c;
    }

    public int hashCode() {
        int hashCode = this.f32704a.hashCode() * 31;
        ReportLevel reportLevel = this.f32705b;
        return ((hashCode + (reportLevel == null ? 0 : reportLevel.hashCode())) * 31) + this.f32706c.hashCode();
    }

    public final boolean isDisabled() {
        return this.f32708e;
    }

    @NotNull
    public String toString() {
        return "Jsr305Settings(globalLevel=" + this.f32704a + ", migrationLevel=" + this.f32705b + ", userDefinedLevelForSpecificAnnotation=" + this.f32706c + ')';
    }

    public /* synthetic */ Jsr305Settings(ReportLevel reportLevel, ReportLevel reportLevel2, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reportLevel, (i10 & 2) != 0 ? null : reportLevel2, (i10 & 4) != 0 ? o0.i() : map);
    }
}
