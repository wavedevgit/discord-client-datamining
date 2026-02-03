package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AnnotationArgumentsRenderingPolicy {

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ AnnotationArgumentsRenderingPolicy[] f34483i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34484o;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f34485d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f34486e;
    public static final AnnotationArgumentsRenderingPolicy NO_ARGUMENTS = new AnnotationArgumentsRenderingPolicy("NO_ARGUMENTS", 0, false, false, 3, null);
    public static final AnnotationArgumentsRenderingPolicy UNLESS_EMPTY = new AnnotationArgumentsRenderingPolicy("UNLESS_EMPTY", 1, true, false, 2, null);
    public static final AnnotationArgumentsRenderingPolicy ALWAYS_PARENTHESIZED = new AnnotationArgumentsRenderingPolicy("ALWAYS_PARENTHESIZED", 2, true, true);

    static {
        AnnotationArgumentsRenderingPolicy[] a10 = a();
        f34483i = a10;
        f34484o = sr.a.a(a10);
    }

    private AnnotationArgumentsRenderingPolicy(String str, int i10, boolean z10, boolean z11) {
        this.f34485d = z10;
        this.f34486e = z11;
    }

    private static final /* synthetic */ AnnotationArgumentsRenderingPolicy[] a() {
        return new AnnotationArgumentsRenderingPolicy[]{NO_ARGUMENTS, UNLESS_EMPTY, ALWAYS_PARENTHESIZED};
    }

    public static AnnotationArgumentsRenderingPolicy valueOf(String str) {
        return (AnnotationArgumentsRenderingPolicy) Enum.valueOf(AnnotationArgumentsRenderingPolicy.class, str);
    }

    public static AnnotationArgumentsRenderingPolicy[] values() {
        return (AnnotationArgumentsRenderingPolicy[]) f34483i.clone();
    }

    public final boolean getIncludeAnnotationArguments() {
        return this.f34485d;
    }

    public final boolean getIncludeEmptyAnnotationArguments() {
        return this.f34486e;
    }

    /* synthetic */ AnnotationArgumentsRenderingPolicy(String str, int i10, boolean z10, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, (i11 & 1) != 0 ? false : z10, (i11 & 2) != 0 ? false : z11);
    }
}
