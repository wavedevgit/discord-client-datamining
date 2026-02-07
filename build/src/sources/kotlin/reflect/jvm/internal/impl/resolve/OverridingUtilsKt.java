package kotlin.reflect.jvm.internal.impl.resolve;

import java.util.Collection;
import java.util.LinkedList;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.utils.SmartSet;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\noverridingUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 overridingUtils.kt\norg/jetbrains/kotlin/resolve/OverridingUtilsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,84:1\n1634#2,3:85\n855#2,2:88\n*S KotlinDebug\n*F\n+ 1 overridingUtils.kt\norg/jetbrains/kotlin/resolve/OverridingUtilsKt\n*L\n40#1:85,3\n72#1:88,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class OverridingUtilsKt {
    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(SmartSet smartSet, Object obj) {
        Intrinsics.checkNotNull(obj);
        smartSet.add(obj);
        return Unit.f32056a;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @NotNull
    public static final <H> Collection<H> selectMostSpecificInEachOverridableGroup(@NotNull Collection<? extends H> collection, @NotNull Function1<? super H, ? extends CallableDescriptor> descriptorByHandle) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        Intrinsics.checkNotNullParameter(descriptorByHandle, "descriptorByHandle");
        if (collection.size() <= 1) {
            return collection;
        }
        LinkedList linkedList = new LinkedList(collection);
        SmartSet create = SmartSet.Companion.create();
        while (!linkedList.isEmpty()) {
            Object o02 = CollectionsKt.o0(linkedList);
            SmartSet create2 = SmartSet.Companion.create();
            Collection extractMembersOverridableInBothWays = OverridingUtil.extractMembersOverridableInBothWays(o02, linkedList, descriptorByHandle, new f(create2));
            Intrinsics.checkNotNullExpressionValue(extractMembersOverridableInBothWays, "extractMembersOverridableInBothWays(...)");
            if (extractMembersOverridableInBothWays.size() == 1 && create2.isEmpty()) {
                Object P0 = CollectionsKt.P0(extractMembersOverridableInBothWays);
                Intrinsics.checkNotNullExpressionValue(P0, "single(...)");
                create.add(P0);
            } else {
                Object selectMostSpecificMember = OverridingUtil.selectMostSpecificMember(extractMembersOverridableInBothWays, descriptorByHandle);
                CallableDescriptor callableDescriptor = (CallableDescriptor) descriptorByHandle.invoke(selectMostSpecificMember);
                for (Object obj : extractMembersOverridableInBothWays) {
                    Intrinsics.checkNotNull(obj);
                    if (!OverridingUtil.isMoreSpecific(callableDescriptor, (CallableDescriptor) descriptorByHandle.invoke(obj))) {
                        create2.add(obj);
                    }
                }
                if (!create2.isEmpty()) {
                    create.addAll(create2);
                }
                create.add(selectMostSpecificMember);
            }
        }
        return create;
    }
}
