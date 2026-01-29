package com.discord.react.utilities;

import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a \u0010\u0000\u001a\u00020\u00012\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0006\u001a\u0018\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0007\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u0006\u001a\u0016\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006¨\u0006\u000b"}, d2 = {"createReactModuleInfoProvider", "Lcom/facebook/react/module/model/ReactModuleInfoProvider;", "moduleNames", "", "", "needsEagerInit", "", "moduleName", "createReactModuleInfo", "Lcom/facebook/react/module/model/ReactModuleInfo;", "reactModuleName", "react_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactModuleInfoProviderExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactModuleInfoProviderExtensions.kt\ncom/discord/react/utilities/ReactModuleInfoProviderExtensionsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,32:1\n1285#2,2:33\n1299#2,4:35\n*S KotlinDebug\n*F\n+ 1 ReactModuleInfoProviderExtensions.kt\ncom/discord/react/utilities/ReactModuleInfoProviderExtensionsKt\n*L\n10#1:33,2\n10#1:35,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactModuleInfoProviderExtensionsKt {
    @NotNull
    public static final ReactModuleInfo createReactModuleInfo(@NotNull String reactModuleName, boolean z10) {
        Intrinsics.checkNotNullParameter(reactModuleName, "reactModuleName");
        return new ReactModuleInfo(reactModuleName, reactModuleName, false, z10, false, true);
    }

    @NotNull
    public static final ReactModuleInfoProvider createReactModuleInfoProvider(@NotNull final List<String> moduleNames, final boolean z10) {
        Intrinsics.checkNotNullParameter(moduleNames, "moduleNames");
        return new ReactModuleInfoProvider() { // from class: com.discord.react.utilities.d
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                Map createReactModuleInfoProvider$lambda$1;
                createReactModuleInfoProvider$lambda$1 = ReactModuleInfoProviderExtensionsKt.createReactModuleInfoProvider$lambda$1(moduleNames, z10);
                return createReactModuleInfoProvider$lambda$1;
            }
        };
    }

    public static /* synthetic */ ReactModuleInfoProvider createReactModuleInfoProvider$default(List list, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = CollectionsKt.l();
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return createReactModuleInfoProvider(list, z10);
    }

    public static final Map createReactModuleInfoProvider$lambda$1(List list, boolean z10) {
        List list2 = list;
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(list2, 10)), 16));
        for (Object obj : list2) {
            linkedHashMap.put(obj, createReactModuleInfo((String) obj, z10));
        }
        return linkedHashMap;
    }

    @NotNull
    public static final ReactModuleInfoProvider createReactModuleInfoProvider(@NotNull String moduleName, boolean z10) {
        Intrinsics.checkNotNullParameter(moduleName, "moduleName");
        return createReactModuleInfoProvider(CollectionsKt.e(moduleName), z10);
    }

    public static /* synthetic */ ReactModuleInfoProvider createReactModuleInfoProvider$default(String str, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return createReactModuleInfoProvider(str, z10);
    }
}
