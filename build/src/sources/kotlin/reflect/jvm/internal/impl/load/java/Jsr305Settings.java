package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import or.l;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJsr305Settings.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Jsr305Settings.kt\norg/jetbrains/kotlin/load/java/Jsr305Settings\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n+ 4 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,26:1\n1#2:27\n216#3,2:28\n37#4:30\n36#4,3:31\n*S KotlinDebug\n*F\n+ 1 Jsr305Settings.kt\norg/jetbrains/kotlin/load/java/Jsr305Settings\n*L\n19#1:28,2\n20#1:30\n20#1:31,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Jsr305Settings {

    /* renamed from: a  reason: collision with root package name */
    private final ReportLevel f32705a;

    /* renamed from: b  reason: collision with root package name */
    private final ReportLevel f32706b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f32707c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f32708d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32709e;

    public Jsr305Settings(@NotNull ReportLevel globalLevel, ReportLevel reportLevel, @NotNull Map<FqName, ? extends ReportLevel> userDefinedLevelForSpecificAnnotation) {
        Intrinsics.checkNotNullParameter(globalLevel, "globalLevel");
        Intrinsics.checkNotNullParameter(userDefinedLevelForSpecificAnnotation, "userDefinedLevelForSpecificAnnotation");
        this.f32705a = globalLevel;
        this.f32706b = reportLevel;
        this.f32707c = userDefinedLevelForSpecificAnnotation;
        this.f32708d = l.a(new g(this));
        ReportLevel reportLevel2 = ReportLevel.IGNORE;
        this.f32709e = globalLevel == reportLevel2 && reportLevel == reportLevel2 && userDefinedLevelForSpecificAnnotation.isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String[] b(Jsr305Settings jsr305Settings) {
        List c10 = CollectionsKt.c();
        c10.add(jsr305Settings.f32705a.getDescription());
        ReportLevel reportLevel = jsr305Settings.f32706b;
        if (reportLevel != null) {
            c10.add("under-migration:" + reportLevel.getDescription());
        }
        for (Map.Entry entry : jsr305Settings.f32707c.entrySet()) {
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
            return this.f32705a == jsr305Settings.f32705a && this.f32706b == jsr305Settings.f32706b && Intrinsics.areEqual(this.f32707c, jsr305Settings.f32707c);
        }
        return false;
    }

    @NotNull
    public final ReportLevel getGlobalLevel() {
        return this.f32705a;
    }

    public final ReportLevel getMigrationLevel() {
        return this.f32706b;
    }

    @NotNull
    public final Map<FqName, ReportLevel> getUserDefinedLevelForSpecificAnnotation() {
        return this.f32707c;
    }

    public int hashCode() {
        int hashCode = this.f32705a.hashCode() * 31;
        ReportLevel reportLevel = this.f32706b;
        return ((hashCode + (reportLevel == null ? 0 : reportLevel.hashCode())) * 31) + this.f32707c.hashCode();
    }

    public final boolean isDisabled() {
        return this.f32709e;
    }

    @NotNull
    public String toString() {
        return "Jsr305Settings(globalLevel=" + this.f32705a + ", migrationLevel=" + this.f32706b + ", userDefinedLevelForSpecificAnnotation=" + this.f32707c + ')';
    }

    public /* synthetic */ Jsr305Settings(ReportLevel reportLevel, ReportLevel reportLevel2, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reportLevel, (i10 & 2) != 0 ? null : reportLevel2, (i10 & 4) != 0 ? o0.i() : map);
    }
}
