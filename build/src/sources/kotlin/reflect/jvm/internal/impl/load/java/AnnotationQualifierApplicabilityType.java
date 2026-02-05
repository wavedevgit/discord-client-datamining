package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.enums.EnumEntries;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AnnotationQualifierApplicabilityType {

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AnnotationQualifierApplicabilityType[] f32664e;

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f32665i;

    /* renamed from: d  reason: collision with root package name */
    private final String f32666d;
    public static final AnnotationQualifierApplicabilityType METHOD_RETURN_TYPE = new AnnotationQualifierApplicabilityType("METHOD_RETURN_TYPE", 0, "METHOD");
    public static final AnnotationQualifierApplicabilityType VALUE_PARAMETER = new AnnotationQualifierApplicabilityType("VALUE_PARAMETER", 1, "PARAMETER");
    public static final AnnotationQualifierApplicabilityType FIELD = new AnnotationQualifierApplicabilityType("FIELD", 2, "FIELD");
    public static final AnnotationQualifierApplicabilityType TYPE_USE = new AnnotationQualifierApplicabilityType("TYPE_USE", 3, "TYPE_USE");
    public static final AnnotationQualifierApplicabilityType TYPE_PARAMETER_BOUNDS = new AnnotationQualifierApplicabilityType("TYPE_PARAMETER_BOUNDS", 4, "TYPE_USE");
    public static final AnnotationQualifierApplicabilityType TYPE_PARAMETER = new AnnotationQualifierApplicabilityType("TYPE_PARAMETER", 5, "TYPE_PARAMETER");

    static {
        AnnotationQualifierApplicabilityType[] a10 = a();
        f32664e = a10;
        f32665i = vr.a.a(a10);
    }

    private AnnotationQualifierApplicabilityType(String str, int i10, String str2) {
        this.f32666d = str2;
    }

    private static final /* synthetic */ AnnotationQualifierApplicabilityType[] a() {
        return new AnnotationQualifierApplicabilityType[]{METHOD_RETURN_TYPE, VALUE_PARAMETER, FIELD, TYPE_USE, TYPE_PARAMETER_BOUNDS, TYPE_PARAMETER};
    }

    public static AnnotationQualifierApplicabilityType valueOf(String str) {
        return (AnnotationQualifierApplicabilityType) Enum.valueOf(AnnotationQualifierApplicabilityType.class, str);
    }

    public static AnnotationQualifierApplicabilityType[] values() {
        return (AnnotationQualifierApplicabilityType[]) f32664e.clone();
    }

    @NotNull
    public final String getJavaTarget() {
        return this.f32666d;
    }
}
