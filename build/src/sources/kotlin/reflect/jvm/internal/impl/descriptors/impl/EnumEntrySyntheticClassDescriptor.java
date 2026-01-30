package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.NonReportingOverrideStrategy;
import kotlin.reflect.jvm.internal.impl.resolve.OverridingUtil;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.ClassTypeConstructorImpl;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class EnumEntrySyntheticClassDescriptor extends ClassDescriptorBase {

    /* renamed from: s  reason: collision with root package name */
    private final TypeConstructor f33729s;

    /* renamed from: t  reason: collision with root package name */
    private final MemberScope f33730t;

    /* renamed from: u  reason: collision with root package name */
    private final NotNullLazyValue f33731u;

    /* renamed from: v  reason: collision with root package name */
    private final Annotations f33732v;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class a extends MemberScopeImpl {

        /* renamed from: a  reason: collision with root package name */
        private final MemoizedFunctionToNotNull f33733a;

        /* renamed from: b  reason: collision with root package name */
        private final MemoizedFunctionToNotNull f33734b;

        /* renamed from: c  reason: collision with root package name */
        private final NotNullLazyValue f33735c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ EnumEntrySyntheticClassDescriptor f33736d;

        /* renamed from: kotlin.reflect.jvm.internal.impl.descriptors.impl.EnumEntrySyntheticClassDescriptor$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class C0452a implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ EnumEntrySyntheticClassDescriptor f33737d;

            C0452a(EnumEntrySyntheticClassDescriptor enumEntrySyntheticClassDescriptor) {
                this.f33737d = enumEntrySyntheticClassDescriptor;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public Collection invoke(Name name) {
                return a.this.f(name);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class b implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ EnumEntrySyntheticClassDescriptor f33739d;

            b(EnumEntrySyntheticClassDescriptor enumEntrySyntheticClassDescriptor) {
                this.f33739d = enumEntrySyntheticClassDescriptor;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public Collection invoke(Name name) {
                return a.this.g(name);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class c implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ EnumEntrySyntheticClassDescriptor f33741d;

            c(EnumEntrySyntheticClassDescriptor enumEntrySyntheticClassDescriptor) {
                this.f33741d = enumEntrySyntheticClassDescriptor;
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public Collection invoke() {
                return a.this.e();
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class d extends NonReportingOverrideStrategy {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ Set f33743a;

            d(Set set) {
                this.f33743a = set;
            }

            private static /* synthetic */ void b(int i10) {
                Object[] objArr = new Object[3];
                if (i10 == 1) {
                    objArr[0] = "fromSuper";
                } else if (i10 != 2) {
                    objArr[0] = "fakeOverride";
                } else {
                    objArr[0] = "fromCurrent";
                }
                objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/EnumEntrySyntheticClassDescriptor$EnumEntryScope$4";
                if (i10 == 1 || i10 == 2) {
                    objArr[2] = "conflict";
                } else {
                    objArr[2] = "addFakeOverride";
                }
                throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
            }

            @Override // kotlin.reflect.jvm.internal.impl.resolve.NonReportingOverrideStrategy
            protected void a(CallableMemberDescriptor callableMemberDescriptor, CallableMemberDescriptor callableMemberDescriptor2) {
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
                OverridingUtil.resolveUnknownVisibilityForMember(callableMemberDescriptor, null);
                this.f33743a.add(callableMemberDescriptor);
            }
        }

        public a(EnumEntrySyntheticClassDescriptor enumEntrySyntheticClassDescriptor, StorageManager storageManager) {
            if (storageManager == null) {
                a(0);
            }
            this.f33736d = enumEntrySyntheticClassDescriptor;
            this.f33733a = storageManager.createMemoizedFunction(new C0452a(enumEntrySyntheticClassDescriptor));
            this.f33734b = storageManager.createMemoizedFunction(new b(enumEntrySyntheticClassDescriptor));
            this.f33735c = storageManager.createLazyValue(new c(enumEntrySyntheticClassDescriptor));
        }

        /* JADX WARN: Removed duplicated region for block: B:16:0x0022  */
        /* JADX WARN: Removed duplicated region for block: B:20:0x002d  */
        /* JADX WARN: Removed duplicated region for block: B:21:0x0032  */
        /* JADX WARN: Removed duplicated region for block: B:22:0x0037  */
        /* JADX WARN: Removed duplicated region for block: B:23:0x003c  */
        /* JADX WARN: Removed duplicated region for block: B:24:0x0041  */
        /* JADX WARN: Removed duplicated region for block: B:25:0x0046  */
        /* JADX WARN: Removed duplicated region for block: B:26:0x0049  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x004e  */
        /* JADX WARN: Removed duplicated region for block: B:30:0x005d  */
        /* JADX WARN: Removed duplicated region for block: B:43:0x008b  */
        /* JADX WARN: Removed duplicated region for block: B:45:0x0090  */
        /* JADX WARN: Removed duplicated region for block: B:46:0x0095  */
        /* JADX WARN: Removed duplicated region for block: B:47:0x009a  */
        /* JADX WARN: Removed duplicated region for block: B:48:0x009d  */
        /* JADX WARN: Removed duplicated region for block: B:49:0x00a0  */
        /* JADX WARN: Removed duplicated region for block: B:50:0x00a5  */
        /* JADX WARN: Removed duplicated region for block: B:51:0x00a8  */
        /* JADX WARN: Removed duplicated region for block: B:52:0x00ad  */
        /* JADX WARN: Removed duplicated region for block: B:55:0x00b5 A[ADDED_TO_REGION] */
        /* JADX WARN: Removed duplicated region for block: B:59:0x00be  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private static /* synthetic */ void a(int r13) {
            /*
                Method dump skipped, instructions count: 346
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.descriptors.impl.EnumEntrySyntheticClassDescriptor.a.a(int):void");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public Collection e() {
            HashSet hashSet = new HashSet();
            for (Name name : (Set) this.f33736d.f33731u.invoke()) {
                NoLookupLocation noLookupLocation = NoLookupLocation.FOR_NON_TRACKED_SCOPE;
                hashSet.addAll(getContributedFunctions(name, noLookupLocation));
                hashSet.addAll(getContributedVariables(name, noLookupLocation));
            }
            return hashSet;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public Collection f(Name name) {
            if (name == null) {
                a(8);
            }
            return i(name, h().getContributedFunctions(name, NoLookupLocation.FOR_NON_TRACKED_SCOPE));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public Collection g(Name name) {
            if (name == null) {
                a(4);
            }
            return i(name, h().getContributedVariables(name, NoLookupLocation.FOR_NON_TRACKED_SCOPE));
        }

        private MemberScope h() {
            MemberScope memberScope = this.f33736d.getTypeConstructor().getSupertypes().iterator().next().getMemberScope();
            if (memberScope == null) {
                a(9);
            }
            return memberScope;
        }

        private Collection i(Name name, Collection collection) {
            if (name == null) {
                a(10);
            }
            if (collection == null) {
                a(11);
            }
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            OverridingUtil.DEFAULT.generateOverridesInFunctionGroup(name, collection, Collections.EMPTY_SET, this.f33736d, new d(linkedHashSet));
            return linkedHashSet;
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
        public Set getClassifierNames() {
            Set set = Collections.EMPTY_SET;
            if (set == null) {
                a(18);
            }
            return set;
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
        public Collection getContributedDescriptors(DescriptorKindFilter descriptorKindFilter, Function1 function1) {
            if (descriptorKindFilter == null) {
                a(13);
            }
            if (function1 == null) {
                a(14);
            }
            Collection collection = (Collection) this.f33735c.invoke();
            if (collection == null) {
                a(15);
            }
            return collection;
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
        public Collection getContributedFunctions(Name name, LookupLocation lookupLocation) {
            if (name == null) {
                a(5);
            }
            if (lookupLocation == null) {
                a(6);
            }
            Collection collection = (Collection) this.f33733a.invoke(name);
            if (collection == null) {
                a(7);
            }
            return collection;
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
        public Collection getContributedVariables(Name name, LookupLocation lookupLocation) {
            if (name == null) {
                a(1);
            }
            if (lookupLocation == null) {
                a(2);
            }
            Collection collection = (Collection) this.f33734b.invoke(name);
            if (collection == null) {
                a(3);
            }
            return collection;
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
        public Set getFunctionNames() {
            Set set = (Set) this.f33736d.f33731u.invoke();
            if (set == null) {
                a(17);
            }
            return set;
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
        public Set getVariableNames() {
            Set set = (Set) this.f33736d.f33731u.invoke();
            if (set == null) {
                a(19);
            }
            return set;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private EnumEntrySyntheticClassDescriptor(StorageManager storageManager, ClassDescriptor classDescriptor, KotlinType kotlinType, Name name, NotNullLazyValue notNullLazyValue, Annotations annotations, SourceElement sourceElement) {
        super(storageManager, classDescriptor, name, sourceElement, false);
        if (storageManager == null) {
            a(6);
        }
        if (classDescriptor == null) {
            a(7);
        }
        if (kotlinType == null) {
            a(8);
        }
        if (name == null) {
            a(9);
        }
        if (notNullLazyValue == null) {
            a(10);
        }
        if (annotations == null) {
            a(11);
        }
        if (sourceElement == null) {
            a(12);
        }
        this.f33732v = annotations;
        this.f33729s = new ClassTypeConstructorImpl(this, Collections.EMPTY_LIST, Collections.singleton(kotlinType), storageManager);
        this.f33730t = new a(this, storageManager);
        this.f33731u = notNullLazyValue;
    }

    private static /* synthetic */ void a(int i10) {
        String str;
        int i11;
        switch (i10) {
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
                str = "@NotNull method %s.%s must not return null";
                break;
            default:
                str = "Argument for @NotNull parameter '%s' of %s.%s must not be null";
                break;
        }
        switch (i10) {
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
                i11 = 2;
                break;
            default:
                i11 = 3;
                break;
        }
        Object[] objArr = new Object[i11];
        switch (i10) {
            case 1:
                objArr[0] = "enumClass";
                break;
            case 2:
            case 9:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case 3:
            case 10:
                objArr[0] = "enumMemberNames";
                break;
            case 4:
            case 11:
                objArr[0] = "annotations";
                break;
            case 5:
            case 12:
                objArr[0] = "source";
                break;
            case 6:
            default:
                objArr[0] = "storageManager";
                break;
            case 7:
                objArr[0] = "containingClass";
                break;
            case 8:
                objArr[0] = "supertype";
                break;
            case 13:
                objArr[0] = "kotlinTypeRefiner";
                break;
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/EnumEntrySyntheticClassDescriptor";
                break;
        }
        switch (i10) {
            case 14:
                objArr[1] = "getUnsubstitutedMemberScope";
                break;
            case 15:
                objArr[1] = "getStaticScope";
                break;
            case 16:
                objArr[1] = "getConstructors";
                break;
            case 17:
                objArr[1] = "getTypeConstructor";
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                objArr[1] = "getKind";
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                objArr[1] = "getModality";
                break;
            case 20:
                objArr[1] = "getVisibility";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                objArr[1] = "getAnnotations";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                objArr[1] = "getDeclaredTypeParameters";
                break;
            case 23:
                objArr[1] = "getSealedSubclasses";
                break;
            default:
                objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/EnumEntrySyntheticClassDescriptor";
                break;
        }
        switch (i10) {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                objArr[2] = "<init>";
                break;
            case 13:
                objArr[2] = "getUnsubstitutedMemberScope";
                break;
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
                break;
            default:
                objArr[2] = "create";
                break;
        }
        String format = String.format(str, objArr);
        switch (i10) {
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
                throw new IllegalStateException(format);
            default:
                throw new IllegalArgumentException(format);
        }
    }

    @NotNull
    public static EnumEntrySyntheticClassDescriptor create(@NotNull StorageManager storageManager, @NotNull ClassDescriptor classDescriptor, @NotNull Name name, @NotNull NotNullLazyValue<Set<Name>> notNullLazyValue, @NotNull Annotations annotations, @NotNull SourceElement sourceElement) {
        if (storageManager == null) {
            a(0);
        }
        if (classDescriptor == null) {
            a(1);
        }
        if (name == null) {
            a(2);
        }
        if (notNullLazyValue == null) {
            a(3);
        }
        if (annotations == null) {
            a(4);
        }
        if (sourceElement == null) {
            a(5);
        }
        return new EnumEntrySyntheticClassDescriptor(storageManager, classDescriptor, classDescriptor.getDefaultType(), name, notNullLazyValue, annotations, sourceElement);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    @NotNull
    public Annotations getAnnotations() {
        Annotations annotations = this.f33732v;
        if (annotations == null) {
            a(21);
        }
        return annotations;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    /* renamed from: getCompanionObjectDescriptor */
    public ClassDescriptor mo1192getCompanionObjectDescriptor() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public Collection<ClassConstructorDescriptor> getConstructors() {
        List list = Collections.EMPTY_LIST;
        if (list == null) {
            a(16);
        }
        return list;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
    @NotNull
    public List<TypeParameterDescriptor> getDeclaredTypeParameters() {
        List<TypeParameterDescriptor> list = Collections.EMPTY_LIST;
        if (list == null) {
            a(22);
        }
        return list;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public ClassKind getKind() {
        ClassKind classKind = ClassKind.ENUM_ENTRY;
        if (classKind == null) {
            a(18);
        }
        return classKind;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    @NotNull
    public Modality getModality() {
        Modality modality = Modality.FINAL;
        if (modality == null) {
            a(19);
        }
        return modality;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public Collection<ClassDescriptor> getSealedSubclasses() {
        List list = Collections.EMPTY_LIST;
        if (list == null) {
            a(23);
        }
        return list;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public MemberScope getStaticScope() {
        MemberScope.Empty empty = MemberScope.Empty.INSTANCE;
        if (empty == null) {
            a(15);
        }
        return empty;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
    @NotNull
    public TypeConstructor getTypeConstructor() {
        TypeConstructor typeConstructor = this.f33729s;
        if (typeConstructor == null) {
            a(17);
        }
        return typeConstructor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleAwareClassDescriptor
    @NotNull
    public MemberScope getUnsubstitutedMemberScope(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        if (kotlinTypeRefiner == null) {
            a(13);
        }
        MemberScope memberScope = this.f33730t;
        if (memberScope == null) {
            a(14);
        }
        return memberScope;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    /* renamed from: getUnsubstitutedPrimaryConstructor */
    public ClassConstructorDescriptor mo1193getUnsubstitutedPrimaryConstructor() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public ValueClassRepresentation<SimpleType> getValueClassRepresentation() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithVisibility
    @NotNull
    public DescriptorVisibility getVisibility() {
        DescriptorVisibility descriptorVisibility = DescriptorVisibilities.PUBLIC;
        if (descriptorVisibility == null) {
            a(20);
        }
        return descriptorVisibility;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isActual() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isCompanionObject() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isData() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isExpect() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isFun() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isInline() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
    public boolean isInner() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isValue() {
        return false;
    }

    public String toString() {
        return "enum entry " + getName();
    }
}
