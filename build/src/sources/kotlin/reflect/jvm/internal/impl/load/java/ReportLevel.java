package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReportLevel {
    @NotNull
    public static final Companion Companion;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ ReportLevel[] f34052e;

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34053i;

    /* renamed from: d  reason: collision with root package name */
    private final String f34054d;
    public static final ReportLevel IGNORE = new ReportLevel("IGNORE", 0, "ignore");
    public static final ReportLevel WARN = new ReportLevel("WARN", 1, "warn");
    public static final ReportLevel STRICT = new ReportLevel("STRICT", 2, "strict");

    @SourceDebugExtension({"SMAP\nReportLevel.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReportLevel.kt\norg/jetbrains/kotlin/load/java/ReportLevel$Companion\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,20:1\n1310#2,2:21\n*S KotlinDebug\n*F\n+ 1 ReportLevel.kt\norg/jetbrains/kotlin/load/java/ReportLevel$Companion\n*L\n15#1:21,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        ReportLevel[] a10 = a();
        f34052e = a10;
        f34053i = pr.a.a(a10);
        Companion = new Companion(null);
    }

    private ReportLevel(String str, int i10, String str2) {
        this.f34054d = str2;
    }

    private static final /* synthetic */ ReportLevel[] a() {
        return new ReportLevel[]{IGNORE, WARN, STRICT};
    }

    public static ReportLevel valueOf(String str) {
        return (ReportLevel) Enum.valueOf(ReportLevel.class, str);
    }

    public static ReportLevel[] values() {
        return (ReportLevel[]) f34052e.clone();
    }

    @NotNull
    public final String getDescription() {
        return this.f34054d;
    }

    public final boolean isIgnore() {
        if (this == IGNORE) {
            return true;
        }
        return false;
    }

    public final boolean isWarning() {
        if (this == WARN) {
            return true;
        }
        return false;
    }
}
