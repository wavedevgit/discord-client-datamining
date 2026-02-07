package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\npredefinedEnhancementInfo.kt\nKotlin\n*S Kotlin\n*F\n+ 1 predefinedEnhancementInfo.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/PredefinedFunctionEnhancementInfo\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,347:1\n1563#2:348\n1634#2,3:349\n*S KotlinDebug\n*F\n+ 1 predefinedEnhancementInfo.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/PredefinedFunctionEnhancementInfo\n*L\n41#1:348\n41#1:349,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PredefinedFunctionEnhancementInfo {

    /* renamed from: a  reason: collision with root package name */
    private final TypeEnhancementInfo f33124a;

    /* renamed from: b  reason: collision with root package name */
    private final List f33125b;

    /* renamed from: c  reason: collision with root package name */
    private final String f33126c;

    /* renamed from: d  reason: collision with root package name */
    private final PredefinedFunctionEnhancementInfo f33127d;

    public PredefinedFunctionEnhancementInfo() {
        this(null, null, null, 7, null);
    }

    public final String getErrorsSinceLanguageVersion() {
        return this.f33126c;
    }

    @NotNull
    public final List<TypeEnhancementInfo> getParametersInfo() {
        return this.f33125b;
    }

    public final TypeEnhancementInfo getReturnTypeInfo() {
        return this.f33124a;
    }

    public final PredefinedFunctionEnhancementInfo getWarningModeClone() {
        return this.f33127d;
    }

    public PredefinedFunctionEnhancementInfo(TypeEnhancementInfo typeEnhancementInfo, @NotNull List<TypeEnhancementInfo> parametersInfo, String str) {
        Intrinsics.checkNotNullParameter(parametersInfo, "parametersInfo");
        this.f33124a = typeEnhancementInfo;
        this.f33125b = parametersInfo;
        this.f33126c = str;
        PredefinedFunctionEnhancementInfo predefinedFunctionEnhancementInfo = null;
        if (str != null) {
            TypeEnhancementInfo copyForWarnings = typeEnhancementInfo != null ? typeEnhancementInfo.copyForWarnings() : null;
            List<TypeEnhancementInfo> list = parametersInfo;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (TypeEnhancementInfo typeEnhancementInfo2 : list) {
                arrayList.add(typeEnhancementInfo2 != null ? typeEnhancementInfo2.copyForWarnings() : null);
            }
            predefinedFunctionEnhancementInfo = new PredefinedFunctionEnhancementInfo(copyForWarnings, arrayList, null);
        }
        this.f33127d = predefinedFunctionEnhancementInfo;
    }

    public /* synthetic */ PredefinedFunctionEnhancementInfo(TypeEnhancementInfo typeEnhancementInfo, List list, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : typeEnhancementInfo, (i10 & 2) != 0 ? CollectionsKt.l() : list, (i10 & 4) != 0 ? null : str);
    }
}
