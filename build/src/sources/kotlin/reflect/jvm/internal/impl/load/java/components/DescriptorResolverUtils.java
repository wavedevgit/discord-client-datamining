package kotlin.reflect.jvm.internal.impl.load.java.components;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.NonReportingOverrideStrategy;
import kotlin.reflect.jvm.internal.impl.resolve.OverridingUtil;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ErrorReporter;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DescriptorResolverUtils {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends NonReportingOverrideStrategy {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ErrorReporter f32773a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Set f32774b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ boolean f32775c;

        /* renamed from: kotlin.reflect.jvm.internal.impl.load.java.components.DescriptorResolverUtils$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class C0443a implements Function1 {
            C0443a() {
            }

            private static /* synthetic */ void a(int i10) {
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", "descriptor", "kotlin/reflect/jvm/internal/impl/load/java/components/DescriptorResolverUtils$1$1", "invoke"));
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: b */
            public Unit invoke(CallableMemberDescriptor callableMemberDescriptor) {
                if (callableMemberDescriptor == null) {
                    a(0);
                }
                a.this.f32773a.reportCannotInferVisibility(callableMemberDescriptor);
                return Unit.f31988a;
            }
        }

        a(ErrorReporter errorReporter, Set set, boolean z10) {
            this.f32773a = errorReporter;
            this.f32774b = set;
            this.f32775c = z10;
        }

        private static /* synthetic */ void b(int i10) {
            Object[] objArr = new Object[3];
            if (i10 == 1) {
                objArr[0] = "fromSuper";
            } else if (i10 == 2) {
                objArr[0] = "fromCurrent";
            } else if (i10 == 3) {
                objArr[0] = "member";
            } else if (i10 != 4) {
                objArr[0] = "fakeOverride";
            } else {
                objArr[0] = "overridden";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/java/components/DescriptorResolverUtils$1";
            if (i10 == 1 || i10 == 2) {
                objArr[2] = "conflict";
            } else if (i10 == 3 || i10 == 4) {
                objArr[2] = "setOverriddenDescriptors";
            } else {
                objArr[2] = "addFakeOverride";
            }
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.NonReportingOverrideStrategy
        public void a(CallableMemberDescriptor callableMemberDescriptor, CallableMemberDescriptor callableMemberDescriptor2) {
            if (callableMemberDescriptor == null) {
                b(1);
            }
            if (callableMemberDescriptor2 == null) {
                b(2);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.OverridingStrategy
        public void addFakeOverride(CallableMemberDescriptor callableMemberDescriptor) {
            if (callableMemberDescriptor == null) {
                b(0);
            }
            OverridingUtil.resolveUnknownVisibilityForMember(callableMemberDescriptor, new C0443a());
            this.f32774b.add(callableMemberDescriptor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.OverridingStrategy
        public void setOverriddenDescriptors(CallableMemberDescriptor callableMemberDescriptor, Collection collection) {
            if (callableMemberDescriptor == null) {
                b(3);
            }
            if (collection == null) {
                b(4);
            }
            if (this.f32775c && callableMemberDescriptor.getKind() != CallableMemberDescriptor.Kind.FAKE_OVERRIDE) {
                return;
            }
            super.setOverriddenDescriptors(callableMemberDescriptor, collection);
        }
    }

    private static /* synthetic */ void a(int i10) {
        String str = i10 != 18 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
        Object[] objArr = new Object[i10 != 18 ? 3 : 2];
        switch (i10) {
            case 1:
            case 7:
            case 13:
                objArr[0] = "membersFromSupertypes";
                break;
            case 2:
            case 8:
            case 14:
                objArr[0] = "membersFromCurrent";
                break;
            case 3:
            case 9:
            case 15:
                objArr[0] = "classDescriptor";
                break;
            case 4:
            case 10:
            case 16:
                objArr[0] = "errorReporter";
                break;
            case 5:
            case 11:
            case 17:
                objArr[0] = "overridingUtil";
                break;
            case 6:
            case 12:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            default:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/load/java/components/DescriptorResolverUtils";
                break;
            case 20:
                objArr[0] = "annotationClass";
                break;
        }
        if (i10 != 18) {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/java/components/DescriptorResolverUtils";
        } else {
            objArr[1] = "resolveOverrides";
        }
        switch (i10) {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                objArr[2] = "resolveOverridesForStaticMembers";
                break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                objArr[2] = "resolveOverrides";
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
                objArr[2] = "getAnnotationParameterByName";
                break;
            default:
                objArr[2] = "resolveOverridesForNonStaticMembers";
                break;
        }
        String format = String.format(str, objArr);
        if (i10 == 18) {
            throw new IllegalStateException(format);
        }
    }

    private static Collection b(Name name, Collection collection, Collection collection2, ClassDescriptor classDescriptor, ErrorReporter errorReporter, OverridingUtil overridingUtil, boolean z10) {
        if (name == null) {
            a(12);
        }
        if (collection == null) {
            a(13);
        }
        if (collection2 == null) {
            a(14);
        }
        if (classDescriptor == null) {
            a(15);
        }
        if (errorReporter == null) {
            a(16);
        }
        if (overridingUtil == null) {
            a(17);
        }
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        overridingUtil.generateOverridesInFunctionGroup(name, collection, collection2, classDescriptor, new a(errorReporter, linkedHashSet, z10));
        return linkedHashSet;
    }

    public static ValueParameterDescriptor getAnnotationParameterByName(@NotNull Name name, @NotNull ClassDescriptor classDescriptor) {
        if (name == null) {
            a(19);
        }
        if (classDescriptor == null) {
            a(20);
        }
        Collection<ClassConstructorDescriptor> constructors = classDescriptor.getConstructors();
        if (constructors.size() != 1) {
            return null;
        }
        for (ValueParameterDescriptor valueParameterDescriptor : constructors.iterator().next().getValueParameters()) {
            if (valueParameterDescriptor.getName().equals(name)) {
                return valueParameterDescriptor;
            }
        }
        return null;
    }

    @NotNull
    public static <D extends CallableMemberDescriptor> Collection<D> resolveOverridesForNonStaticMembers(@NotNull Name name, @NotNull Collection<D> collection, @NotNull Collection<D> collection2, @NotNull ClassDescriptor classDescriptor, @NotNull ErrorReporter errorReporter, @NotNull OverridingUtil overridingUtil) {
        if (name == null) {
            a(0);
        }
        if (collection == null) {
            a(1);
        }
        if (collection2 == null) {
            a(2);
        }
        if (classDescriptor == null) {
            a(3);
        }
        if (errorReporter == null) {
            a(4);
        }
        if (overridingUtil == null) {
            a(5);
        }
        return b(name, collection, collection2, classDescriptor, errorReporter, overridingUtil, false);
    }

    @NotNull
    public static <D extends CallableMemberDescriptor> Collection<D> resolveOverridesForStaticMembers(@NotNull Name name, @NotNull Collection<D> collection, @NotNull Collection<D> collection2, @NotNull ClassDescriptor classDescriptor, @NotNull ErrorReporter errorReporter, @NotNull OverridingUtil overridingUtil) {
        if (name == null) {
            a(6);
        }
        if (collection == null) {
            a(7);
        }
        if (collection2 == null) {
            a(8);
        }
        if (classDescriptor == null) {
            a(9);
        }
        if (errorReporter == null) {
            a(10);
        }
        if (overridingUtil == null) {
            a(11);
        }
        return b(name, collection, collection2, classDescriptor, errorReporter, overridingUtil, true);
    }
}
