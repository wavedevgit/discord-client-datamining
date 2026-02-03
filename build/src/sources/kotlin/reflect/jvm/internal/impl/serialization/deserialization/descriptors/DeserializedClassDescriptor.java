package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.AdaptedFunctionReference;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.DeserializedDeclarationsFromSupertypeConflictDataKey;
import kotlin.reflect.jvm.internal.impl.descriptors.DeserializedDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.InlineClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ScopesHolderForClass;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.SupertypeLoopChecker;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterUtilsKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.AbstractClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassConstructorDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.EnumEntrySyntheticClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.FunctionDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ReceiverParameterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.incremental.UtilsKt;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.Flags;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoTypeTableUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.VersionRequirementTable;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.CliSealedClassInheritorsProvider;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.resolve.NonReportingOverrideStrategy;
import kotlin.reflect.jvm.internal.impl.resolve.OverridingUtil;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.StaticScopeForKotlinEnum;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ContextClassReceiver;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationComponents;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ErrorReporter;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.NameResolverUtilKt;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoEnumFlags;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoEnumFlagsUtilsKt;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ValueClassUtilKt;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.types.AbstractClassTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nDeserializedClassDescriptor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeserializedClassDescriptor.kt\norg/jetbrains/kotlin/serialization/deserialization/descriptors/DeserializedClassDescriptor\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,429:1\n295#2,2:430\n774#2:432\n865#2,2:433\n1563#2:435\n1634#2,3:436\n1563#2:439\n1634#2,3:440\n1617#2,9:443\n1869#2:452\n1870#2:454\n1626#2:455\n669#2,11:457\n1#3:453\n1#3:456\n*S KotlinDebug\n*F\n+ 1 DeserializedClassDescriptor.kt\norg/jetbrains/kotlin/serialization/deserialization/descriptors/DeserializedClassDescriptor\n*L\n141#1:430,2\n153#1:432\n153#1:433,2\n153#1:435\n153#1:436,3\n159#1:439\n159#1:440,3\n190#1:443,9\n190#1:452\n190#1:454\n190#1:455\n220#1:457,11\n190#1:453\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DeserializedClassDescriptor extends AbstractClassDescriptor implements DeserializedDescriptor {
    private final ScopesHolderForClass A;
    private final b B;
    private final DeclarationDescriptor C;
    private final NullableLazyValue D;
    private final NotNullLazyValue E;
    private final NullableLazyValue F;
    private final NotNullLazyValue G;
    private final NullableLazyValue H;
    private final ProtoContainer.Class I;
    private final Annotations J;

    /* renamed from: p  reason: collision with root package name */
    private final ProtoBuf.Class f34827p;

    /* renamed from: q  reason: collision with root package name */
    private final BinaryVersion f34828q;

    /* renamed from: r  reason: collision with root package name */
    private final SourceElement f34829r;

    /* renamed from: s  reason: collision with root package name */
    private final ClassId f34830s;

    /* renamed from: t  reason: collision with root package name */
    private final Modality f34831t;

    /* renamed from: u  reason: collision with root package name */
    private final DescriptorVisibility f34832u;

    /* renamed from: v  reason: collision with root package name */
    private final ClassKind f34833v;

    /* renamed from: w  reason: collision with root package name */
    private final DeserializationContext f34834w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f34835x;

    /* renamed from: y  reason: collision with root package name */
    private final MemberScopeImpl f34836y;

    /* renamed from: z  reason: collision with root package name */
    private final a f34837z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class DeserializedClassMemberScope extends DeserializedMemberScope {

        /* renamed from: f  reason: collision with root package name */
        private final KotlinTypeRefiner f34838f;

        /* renamed from: g  reason: collision with root package name */
        private final NotNullLazyValue f34839g;

        /* renamed from: h  reason: collision with root package name */
        private final NotNullLazyValue f34840h;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ DeserializedClassDescriptor f34841i;

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public DeserializedClassMemberScope(kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor r8, kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner r9) {
            /*
                r7 = this;
                java.lang.String r0 = "kotlinTypeRefiner"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
                r7.f34841i = r8
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext r2 = r8.getC()
                kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r0 = r8.getClassProto()
                java.util.List r3 = r0.getFunctionList()
                java.lang.String r0 = "getFunctionList(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
                kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r0 = r8.getClassProto()
                java.util.List r4 = r0.getPropertyList()
                java.lang.String r0 = "getPropertyList(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r4, r0)
                kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r0 = r8.getClassProto()
                java.util.List r5 = r0.getTypeAliasList()
                java.lang.String r0 = "getTypeAliasList(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r5, r0)
                kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r0 = r8.getClassProto()
                java.util.List r0 = r0.getNestedClassNameList()
                java.lang.String r1 = "getNestedClassNameList(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                java.lang.Iterable r0 = (java.lang.Iterable) r0
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext r8 = r8.getC()
                kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver r8 = r8.getNameResolver()
                java.util.ArrayList r1 = new java.util.ArrayList
                r6 = 10
                int r6 = kotlin.collections.CollectionsKt.w(r0, r6)
                r1.<init>(r6)
                java.util.Iterator r0 = r0.iterator()
            L58:
                boolean r6 = r0.hasNext()
                if (r6 == 0) goto L70
                java.lang.Object r6 = r0.next()
                java.lang.Number r6 = (java.lang.Number) r6
                int r6 = r6.intValue()
                kotlin.reflect.jvm.internal.impl.name.Name r6 = kotlin.reflect.jvm.internal.impl.serialization.deserialization.NameResolverUtilKt.getName(r8, r6)
                r1.add(r6)
                goto L58
            L70:
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.g r6 = new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.g
                r6.<init>(r1)
                r1 = r7
                r1.<init>(r2, r3, r4, r5, r6)
                r1.f34838f = r9
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext r8 = r7.l()
                kotlin.reflect.jvm.internal.impl.storage.StorageManager r8 = r8.getStorageManager()
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.h r9 = new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.h
                r9.<init>(r7)
                kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue r8 = r8.createLazyValue(r9)
                r1.f34839g = r8
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext r8 = r7.l()
                kotlin.reflect.jvm.internal.impl.storage.StorageManager r8 = r8.getStorageManager()
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.i r9 = new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.i
                r9.<init>(r7)
                kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue r8 = r8.createLazyValue(r9)
                r1.f34840h = r8
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor.DeserializedClassMemberScope.<init>(kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor, kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner):void");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection A(DeserializedClassMemberScope deserializedClassMemberScope) {
            return deserializedClassMemberScope.f34838f.refineSupertypes(deserializedClassMemberScope.z());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List t(List list) {
            return list;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection x(DeserializedClassMemberScope deserializedClassMemberScope) {
            return deserializedClassMemberScope.f(DescriptorKindFilter.ALL, MemberScope.Companion.getALL_NAME_FILTER(), NoLookupLocation.WHEN_GET_ALL_DESCRIPTORS);
        }

        private final void y(Name name, Collection collection, final List list) {
            l().getComponents().getKotlinTypeChecker().getOverridingUtil().generateOverridesInFunctionGroup(name, collection, new ArrayList(list), z(), new NonReportingOverrideStrategy() { // from class: kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor$DeserializedClassMemberScope$generateFakeOverrides$1
                @Override // kotlin.reflect.jvm.internal.impl.resolve.NonReportingOverrideStrategy
                protected void a(CallableMemberDescriptor fromSuper, CallableMemberDescriptor fromCurrent) {
                    Intrinsics.checkNotNullParameter(fromSuper, "fromSuper");
                    Intrinsics.checkNotNullParameter(fromCurrent, "fromCurrent");
                    if (fromCurrent instanceof FunctionDescriptorImpl) {
                        ((FunctionDescriptorImpl) fromCurrent).putInUserDataMap(DeserializedDeclarationsFromSupertypeConflictDataKey.INSTANCE, fromSuper);
                    }
                }

                @Override // kotlin.reflect.jvm.internal.impl.resolve.OverridingStrategy
                public void addFakeOverride(CallableMemberDescriptor fakeOverride) {
                    Intrinsics.checkNotNullParameter(fakeOverride, "fakeOverride");
                    OverridingUtil.resolveUnknownVisibilityForMember(fakeOverride, null);
                    list.add(fakeOverride);
                }
            });
        }

        private final DeserializedClassDescriptor z() {
            return this.f34841i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected void c(Collection result, Function1 nameFilter) {
            List list;
            Intrinsics.checkNotNullParameter(result, "result");
            Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
            b bVar = z().B;
            if (bVar != null) {
                list = bVar.d();
            } else {
                list = null;
            }
            if (list == null) {
                list = CollectionsKt.l();
            }
            result.addAll(list);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected void g(Name name, List functions) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(functions, "functions");
            ArrayList arrayList = new ArrayList();
            for (KotlinType kotlinType : (Collection) this.f34840h.invoke()) {
                arrayList.addAll(kotlinType.getMemberScope().getContributedFunctions(name, NoLookupLocation.FOR_ALREADY_TRACKED));
            }
            functions.addAll(l().getComponents().getAdditionalClassPartsProvider().getFunctions(name, this.f34841i));
            y(name, arrayList, functions);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
        /* renamed from: getContributedClassifier */
        public ClassifierDescriptor mo1198getContributedClassifier(Name name, LookupLocation location) {
            ClassDescriptor i10;
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            mo1201recordLookup(name, location);
            b bVar = z().B;
            if (bVar != null && (i10 = bVar.i(name)) != null) {
                return i10;
            }
            return super.mo1198getContributedClassifier(name, location);
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
        public Collection getContributedDescriptors(DescriptorKindFilter kindFilter, Function1 nameFilter) {
            Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
            Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
            return (Collection) this.f34839g.invoke();
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
        public Collection getContributedFunctions(Name name, LookupLocation location) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            mo1201recordLookup(name, location);
            return super.getContributedFunctions(name, location);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
        public Collection getContributedVariables(Name name, LookupLocation location) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            mo1201recordLookup(name, location);
            return super.getContributedVariables(name, location);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected void h(Name name, List descriptors) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(descriptors, "descriptors");
            ArrayList arrayList = new ArrayList();
            for (KotlinType kotlinType : (Collection) this.f34840h.invoke()) {
                arrayList.addAll(kotlinType.getMemberScope().getContributedVariables(name, NoLookupLocation.FOR_ALREADY_TRACKED));
            }
            y(name, arrayList, descriptors);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected ClassId i(Name name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return this.f34841i.f34830s.createNestedClassId(name);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected Set n() {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            for (KotlinType kotlinType : z().f34837z.getSupertypes()) {
                Set<Name> classifierNames = kotlinType.getMemberScope().getClassifierNames();
                if (classifierNames == null) {
                    return null;
                }
                CollectionsKt.B(linkedHashSet, classifierNames);
            }
            return linkedHashSet;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected Set o() {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            for (KotlinType kotlinType : z().f34837z.getSupertypes()) {
                CollectionsKt.B(linkedHashSet, kotlinType.getMemberScope().getFunctionNames());
            }
            linkedHashSet.addAll(l().getComponents().getAdditionalClassPartsProvider().getFunctionsNames(this.f34841i));
            return linkedHashSet;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected Set p() {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            for (KotlinType kotlinType : z().f34837z.getSupertypes()) {
                CollectionsKt.B(linkedHashSet, kotlinType.getMemberScope().getVariableNames());
            }
            return linkedHashSet;
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
        /* renamed from: recordLookup */
        public void mo1201recordLookup(Name name, LookupLocation location) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            UtilsKt.record(l().getComponents().getLookupTracker(), location, z(), name);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope
        protected boolean s(SimpleFunctionDescriptor function) {
            Intrinsics.checkNotNullParameter(function, "function");
            return l().getComponents().getPlatformDependentDeclarationFilter().isFunctionAvailable(this.f34841i, function);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a extends AbstractClassTypeConstructor {

        /* renamed from: d  reason: collision with root package name */
        private final NotNullLazyValue f34843d;

        public a() {
            super(DeserializedClassDescriptor.this.getC().getStorageManager());
            this.f34843d = DeserializedClassDescriptor.this.getC().getStorageManager().createLazyValue(new j(DeserializedClassDescriptor.this));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List D(DeserializedClassDescriptor deserializedClassDescriptor) {
            return TypeParameterUtilsKt.computeConstructorTypeParameters(deserializedClassDescriptor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractClassTypeConstructor, kotlin.reflect.jvm.internal.impl.types.ClassifierBasedTypeConstructor, kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        /* renamed from: C */
        public DeserializedClassDescriptor mo1197getDeclarationDescriptor() {
            return DeserializedClassDescriptor.this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public List getParameters() {
            return (List) this.f34843d.invoke();
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public boolean isDenotable() {
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected Collection l() {
            String asString;
            FqName asSingleFqName;
            NotFoundClasses.MockClassDescriptor mockClassDescriptor;
            List<ProtoBuf.Type> supertypes = ProtoTypeTableUtilKt.supertypes(DeserializedClassDescriptor.this.getClassProto(), DeserializedClassDescriptor.this.getC().getTypeTable());
            DeserializedClassDescriptor deserializedClassDescriptor = DeserializedClassDescriptor.this;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(supertypes, 10));
            for (ProtoBuf.Type type : supertypes) {
                arrayList.add(deserializedClassDescriptor.getC().getTypeDeserializer().type(type));
            }
            List<KotlinType> L0 = CollectionsKt.L0(arrayList, DeserializedClassDescriptor.this.getC().getComponents().getAdditionalClassPartsProvider().getSupertypes(DeserializedClassDescriptor.this));
            ArrayList<NotFoundClasses.MockClassDescriptor> arrayList2 = new ArrayList();
            for (KotlinType kotlinType : L0) {
                ClassifierDescriptor mo1197getDeclarationDescriptor = kotlinType.getConstructor().mo1197getDeclarationDescriptor();
                if (mo1197getDeclarationDescriptor instanceof NotFoundClasses.MockClassDescriptor) {
                    mockClassDescriptor = (NotFoundClasses.MockClassDescriptor) mo1197getDeclarationDescriptor;
                } else {
                    mockClassDescriptor = null;
                }
                if (mockClassDescriptor != null) {
                    arrayList2.add(mockClassDescriptor);
                }
            }
            if (!arrayList2.isEmpty()) {
                ErrorReporter errorReporter = DeserializedClassDescriptor.this.getC().getComponents().getErrorReporter();
                DeserializedClassDescriptor deserializedClassDescriptor2 = DeserializedClassDescriptor.this;
                ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList2, 10));
                for (NotFoundClasses.MockClassDescriptor mockClassDescriptor2 : arrayList2) {
                    ClassId classId = DescriptorUtilsKt.getClassId(mockClassDescriptor2);
                    if (classId == null || (asSingleFqName = classId.asSingleFqName()) == null || (asString = asSingleFqName.asString()) == null) {
                        asString = mockClassDescriptor2.getName().asString();
                        Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
                    }
                    arrayList3.add(asString);
                }
                errorReporter.reportIncompleteHierarchy(deserializedClassDescriptor2, arrayList3);
            }
            return CollectionsKt.h1(L0);
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected SupertypeLoopChecker p() {
            return SupertypeLoopChecker.EMPTY.INSTANCE;
        }

        public String toString() {
            String name = DeserializedClassDescriptor.this.getName().toString();
            Intrinsics.checkNotNullExpressionValue(name, "toString(...)");
            return name;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Map f34845a;

        /* renamed from: b  reason: collision with root package name */
        private final MemoizedFunctionToNullable f34846b;

        /* renamed from: c  reason: collision with root package name */
        private final NotNullLazyValue f34847c;

        public b() {
            List<ProtoBuf.EnumEntry> enumEntryList = DeserializedClassDescriptor.this.getClassProto().getEnumEntryList();
            Intrinsics.checkNotNullExpressionValue(enumEntryList, "getEnumEntryList(...)");
            List<ProtoBuf.EnumEntry> list = enumEntryList;
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(list, 10)), 16));
            for (Object obj : list) {
                linkedHashMap.put(NameResolverUtilKt.getName(DeserializedClassDescriptor.this.getC().getNameResolver(), ((ProtoBuf.EnumEntry) obj).getName()), obj);
            }
            this.f34845a = linkedHashMap;
            this.f34846b = DeserializedClassDescriptor.this.getC().getStorageManager().createMemoizedFunctionWithNullableValues(new k(this, DeserializedClassDescriptor.this));
            this.f34847c = DeserializedClassDescriptor.this.getC().getStorageManager().createLazyValue(new l(this));
        }

        private final Set e() {
            HashSet hashSet = new HashSet();
            for (KotlinType kotlinType : DeserializedClassDescriptor.this.getTypeConstructor().getSupertypes()) {
                for (DeclarationDescriptor declarationDescriptor : ResolutionScope.DefaultImpls.getContributedDescriptors$default(kotlinType.getMemberScope(), null, null, 3, null)) {
                    if ((declarationDescriptor instanceof SimpleFunctionDescriptor) || (declarationDescriptor instanceof PropertyDescriptor)) {
                        hashSet.add(((CallableMemberDescriptor) declarationDescriptor).getName());
                    }
                }
            }
            List<ProtoBuf.Function> functionList = DeserializedClassDescriptor.this.getClassProto().getFunctionList();
            Intrinsics.checkNotNullExpressionValue(functionList, "getFunctionList(...)");
            DeserializedClassDescriptor deserializedClassDescriptor = DeserializedClassDescriptor.this;
            for (ProtoBuf.Function function : functionList) {
                hashSet.add(NameResolverUtilKt.getName(deserializedClassDescriptor.getC().getNameResolver(), function.getName()));
            }
            List<ProtoBuf.Property> propertyList = DeserializedClassDescriptor.this.getClassProto().getPropertyList();
            Intrinsics.checkNotNullExpressionValue(propertyList, "getPropertyList(...)");
            DeserializedClassDescriptor deserializedClassDescriptor2 = DeserializedClassDescriptor.this;
            for (ProtoBuf.Property property : propertyList) {
                hashSet.add(NameResolverUtilKt.getName(deserializedClassDescriptor2.getC().getNameResolver(), property.getName()));
            }
            return x0.l(hashSet, hashSet);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final ClassDescriptor f(b bVar, DeserializedClassDescriptor deserializedClassDescriptor, Name name) {
            Intrinsics.checkNotNullParameter(name, "name");
            ProtoBuf.EnumEntry enumEntry = (ProtoBuf.EnumEntry) bVar.f34845a.get(name);
            if (enumEntry != null) {
                return EnumEntrySyntheticClassDescriptor.create(deserializedClassDescriptor.getC().getStorageManager(), deserializedClassDescriptor, name, bVar.f34847c, new DeserializedAnnotations(deserializedClassDescriptor.getC().getStorageManager(), new m(deserializedClassDescriptor, enumEntry)), SourceElement.NO_SOURCE);
            }
            return null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List g(DeserializedClassDescriptor deserializedClassDescriptor, ProtoBuf.EnumEntry enumEntry) {
            return CollectionsKt.h1(deserializedClassDescriptor.getC().getComponents().getAnnotationAndConstantLoader().loadEnumEntryAnnotations(deserializedClassDescriptor.getThisAsProtoContainer$deserialization(), enumEntry));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Set h(b bVar) {
            return bVar.e();
        }

        public final Collection d() {
            ArrayList arrayList = new ArrayList();
            for (Name name : this.f34845a.keySet()) {
                ClassDescriptor i10 = i(name);
                if (i10 != null) {
                    arrayList.add(i10);
                }
            }
            return arrayList;
        }

        public final ClassDescriptor i(Name name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return (ClassDescriptor) this.f34846b.invoke(name);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class c extends AdaptedFunctionReference implements Function1 {
        c(Object obj) {
            super(1, obj, TypeDeserializer.class, "simpleType", "simpleType(Lorg/jetbrains/kotlin/metadata/ProtoBuf$Type;Z)Lorg/jetbrains/kotlin/types/SimpleType;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final SimpleType invoke(ProtoBuf.Type p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return TypeDeserializer.simpleType$default((TypeDeserializer) this.receiver, p02, false, 2, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class d extends FunctionReferenceImpl implements Function1 {
        d(Object obj) {
            super(1, obj, DeserializedClassDescriptor.class, "getValueClassPropertyType", "getValueClassPropertyType(Lorg/jetbrains/kotlin/name/Name;)Lorg/jetbrains/kotlin/types/SimpleType;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final SimpleType invoke(Name p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ((DeserializedClassDescriptor) this.receiver).r(p02);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class e extends FunctionReferenceImpl implements Function1 {
        e(Object obj) {
            super(1, obj, DeserializedClassMemberScope.class, "<init>", "<init>(Lorg/jetbrains/kotlin/serialization/deserialization/descriptors/DeserializedClassDescriptor;Lorg/jetbrains/kotlin/types/checker/KotlinTypeRefiner;)V", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final DeserializedClassMemberScope invoke(KotlinTypeRefiner p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return new DeserializedClassMemberScope((DeserializedClassDescriptor) this.receiver, p02);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DeserializedClassDescriptor(@NotNull DeserializationContext outerContext, @NotNull ProtoBuf.Class classProto, @NotNull NameResolver nameResolver, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        super(outerContext.getStorageManager(), NameResolverUtilKt.getClassId(nameResolver, classProto.getFqName()).getShortClassName());
        MemberScopeImpl memberScopeImpl;
        b bVar;
        DeserializedClassDescriptor deserializedClassDescriptor;
        Annotations nonEmptyDeserializedAnnotations;
        boolean z10;
        Intrinsics.checkNotNullParameter(outerContext, "outerContext");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34827p = classProto;
        this.f34828q = metadataVersion;
        this.f34829r = sourceElement;
        this.f34830s = NameResolverUtilKt.getClassId(nameResolver, classProto.getFqName());
        ProtoEnumFlags protoEnumFlags = ProtoEnumFlags.INSTANCE;
        this.f34831t = protoEnumFlags.modality(Flags.MODALITY.get(classProto.getFlags()));
        this.f34832u = ProtoEnumFlagsUtilsKt.descriptorVisibility(protoEnumFlags, Flags.VISIBILITY.get(classProto.getFlags()));
        ClassKind classKind = protoEnumFlags.classKind(Flags.CLASS_KIND.get(classProto.getFlags()));
        this.f34833v = classKind;
        List<ProtoBuf.TypeParameter> typeParameterList = classProto.getTypeParameterList();
        Intrinsics.checkNotNullExpressionValue(typeParameterList, "getTypeParameterList(...)");
        ProtoBuf.TypeTable typeTable = classProto.getTypeTable();
        Intrinsics.checkNotNullExpressionValue(typeTable, "getTypeTable(...)");
        TypeTable typeTable2 = new TypeTable(typeTable);
        VersionRequirementTable.Companion companion = VersionRequirementTable.Companion;
        ProtoBuf.VersionRequirementTable versionRequirementTable = classProto.getVersionRequirementTable();
        Intrinsics.checkNotNullExpressionValue(versionRequirementTable, "getVersionRequirementTable(...)");
        DeserializationContext childContext = outerContext.childContext(this, typeParameterList, nameResolver, typeTable2, companion.create(versionRequirementTable), metadataVersion);
        this.f34834w = childContext;
        Boolean bool = Flags.HAS_ENUM_ENTRIES.get(classProto.getFlags());
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        boolean booleanValue = bool.booleanValue();
        this.f34835x = booleanValue;
        ClassKind classKind2 = ClassKind.ENUM_CLASS;
        if (classKind == classKind2) {
            if (!booleanValue && !Intrinsics.areEqual(childContext.getComponents().getEnumEntriesDeserializationSupport().canSynthesizeEnumEntries(), Boolean.TRUE)) {
                z10 = false;
            } else {
                z10 = true;
            }
            memberScopeImpl = new StaticScopeForKotlinEnum(childContext.getStorageManager(), this, z10);
        } else {
            memberScopeImpl = MemberScope.Empty.INSTANCE;
        }
        this.f34836y = memberScopeImpl;
        this.f34837z = new a();
        this.A = ScopesHolderForClass.Companion.create(this, childContext.getStorageManager(), childContext.getComponents().getKotlinTypeChecker().getKotlinTypeRefiner(), new e(this));
        if (classKind == classKind2) {
            bVar = new b();
        } else {
            bVar = null;
        }
        this.B = bVar;
        DeclarationDescriptor containingDeclaration = outerContext.getContainingDeclaration();
        this.C = containingDeclaration;
        this.D = childContext.getStorageManager().createNullableLazyValue(new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.a(this));
        this.E = childContext.getStorageManager().createLazyValue(new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.b(this));
        this.F = childContext.getStorageManager().createNullableLazyValue(new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.c(this));
        this.G = childContext.getStorageManager().createLazyValue(new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.d(this));
        this.H = childContext.getStorageManager().createNullableLazyValue(new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.e(this));
        NameResolver nameResolver2 = childContext.getNameResolver();
        TypeTable typeTable3 = childContext.getTypeTable();
        if (containingDeclaration instanceof DeserializedClassDescriptor) {
            deserializedClassDescriptor = (DeserializedClassDescriptor) containingDeclaration;
        } else {
            deserializedClassDescriptor = null;
        }
        this.I = new ProtoContainer.Class(classProto, nameResolver2, typeTable3, sourceElement, deserializedClassDescriptor != null ? deserializedClassDescriptor.I : null);
        if (!Flags.HAS_ANNOTATIONS.get(classProto.getFlags()).booleanValue()) {
            nonEmptyDeserializedAnnotations = Annotations.Companion.getEMPTY();
        } else {
            nonEmptyDeserializedAnnotations = new NonEmptyDeserializedAnnotations(childContext.getStorageManager(), new f(this));
        }
        this.J = nonEmptyDeserializedAnnotations;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List h(DeserializedClassDescriptor deserializedClassDescriptor) {
        return CollectionsKt.h1(deserializedClassDescriptor.f34834w.getComponents().getAnnotationAndConstantLoader().loadClassAnnotations(deserializedClassDescriptor.I));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptor i(DeserializedClassDescriptor deserializedClassDescriptor) {
        return deserializedClassDescriptor.j();
    }

    private final ClassDescriptor j() {
        if (!this.f34827p.hasCompanionObjectName()) {
            return null;
        }
        ClassifierDescriptor mo1198getContributedClassifier = q().mo1198getContributedClassifier(NameResolverUtilKt.getName(this.f34834w.getNameResolver(), this.f34827p.getCompanionObjectName()), NoLookupLocation.FROM_DESERIALIZATION);
        if (!(mo1198getContributedClassifier instanceof ClassDescriptor)) {
            return null;
        }
        return (ClassDescriptor) mo1198getContributedClassifier;
    }

    private final Collection k() {
        return CollectionsKt.L0(CollectionsKt.L0(m(), CollectionsKt.p(mo1192getUnsubstitutedPrimaryConstructor())), this.f34834w.getComponents().getAdditionalClassPartsProvider().getConstructors(this));
    }

    private final ClassConstructorDescriptor l() {
        Object obj;
        if (this.f34833v.isSingleton()) {
            ClassConstructorDescriptorImpl createPrimaryConstructorForObject = DescriptorFactory.createPrimaryConstructorForObject(this, SourceElement.NO_SOURCE);
            createPrimaryConstructorForObject.setReturnType(getDefaultType());
            return createPrimaryConstructorForObject;
        }
        List<ProtoBuf.Constructor> constructorList = this.f34827p.getConstructorList();
        Intrinsics.checkNotNullExpressionValue(constructorList, "getConstructorList(...)");
        Iterator<T> it = constructorList.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (!Flags.IS_SECONDARY.get(((ProtoBuf.Constructor) obj).getFlags()).booleanValue()) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        ProtoBuf.Constructor constructor = (ProtoBuf.Constructor) obj;
        if (constructor == null) {
            return null;
        }
        return this.f34834w.getMemberDeserializer().loadConstructor(constructor, true);
    }

    private final List m() {
        List<ProtoBuf.Constructor> constructorList = this.f34827p.getConstructorList();
        Intrinsics.checkNotNullExpressionValue(constructorList, "getConstructorList(...)");
        ArrayList<ProtoBuf.Constructor> arrayList = new ArrayList();
        for (Object obj : constructorList) {
            Boolean bool = Flags.IS_SECONDARY.get(((ProtoBuf.Constructor) obj).getFlags());
            Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
            if (bool.booleanValue()) {
                arrayList.add(obj);
            }
        }
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (ProtoBuf.Constructor constructor : arrayList) {
            MemberDeserializer memberDeserializer = this.f34834w.getMemberDeserializer();
            Intrinsics.checkNotNull(constructor);
            arrayList2.add(memberDeserializer.loadConstructor(constructor, false));
        }
        return arrayList2;
    }

    private final Collection n() {
        if (this.f34831t != Modality.SEALED) {
            return CollectionsKt.l();
        }
        List<Integer> sealedSubclassFqNameList = this.f34827p.getSealedSubclassFqNameList();
        Intrinsics.checkNotNull(sealedSubclassFqNameList);
        if (!sealedSubclassFqNameList.isEmpty()) {
            ArrayList arrayList = new ArrayList();
            for (Integer num : sealedSubclassFqNameList) {
                DeserializationComponents components = this.f34834w.getComponents();
                NameResolver nameResolver = this.f34834w.getNameResolver();
                Intrinsics.checkNotNull(num);
                ClassDescriptor deserializeClass = components.deserializeClass(NameResolverUtilKt.getClassId(nameResolver, num.intValue()));
                if (deserializeClass != null) {
                    arrayList.add(deserializeClass);
                }
            }
            return arrayList;
        }
        return CliSealedClassInheritorsProvider.INSTANCE.computeSealedSubclasses(this, false);
    }

    private final ValueClassRepresentation o() {
        if (!isInline() && !isValue()) {
            return null;
        }
        ValueClassRepresentation loadValueClassRepresentation = ValueClassUtilKt.loadValueClassRepresentation(this.f34827p, this.f34834w.getNameResolver(), this.f34834w.getTypeTable(), new c(this.f34834w.getTypeDeserializer()), new d(this));
        if (loadValueClassRepresentation != null) {
            return loadValueClassRepresentation;
        }
        if (this.f34828q.isAtLeast(1, 5, 1)) {
            return null;
        }
        ClassConstructorDescriptor mo1192getUnsubstitutedPrimaryConstructor = mo1192getUnsubstitutedPrimaryConstructor();
        if (mo1192getUnsubstitutedPrimaryConstructor != null) {
            List<ValueParameterDescriptor> valueParameters = mo1192getUnsubstitutedPrimaryConstructor.getValueParameters();
            Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
            Name name = ((ValueParameterDescriptor) CollectionsKt.o0(valueParameters)).getName();
            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
            SimpleType r10 = r(name);
            if (r10 != null) {
                return new InlineClassRepresentation(name, r10);
            }
            throw new IllegalStateException(("Value class has no underlying property: " + this).toString());
        }
        throw new IllegalStateException(("Inline class has no primary constructor: " + this).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection p(DeserializedClassDescriptor deserializedClassDescriptor) {
        return deserializedClassDescriptor.k();
    }

    private final DeserializedClassMemberScope q() {
        return (DeserializedClassMemberScope) this.A.getScope(this.f34834w.getComponents().getKotlinTypeChecker().getKotlinTypeRefiner());
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:10:0x002d, code lost:
        if (r1 == false) goto L12;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x0028, code lost:
        r2 = null;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final kotlin.reflect.jvm.internal.impl.types.SimpleType r(kotlin.reflect.jvm.internal.impl.name.Name r6) {
        /*
            r5 = this;
            kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor$DeserializedClassMemberScope r0 = r5.q()
            kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation r1 = kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation.FROM_DESERIALIZATION
            java.util.Collection r6 = r0.getContributedVariables(r6, r1)
            java.lang.Iterable r6 = (java.lang.Iterable) r6
            java.util.Iterator r6 = r6.iterator()
            r0 = 0
            r1 = 0
            r2 = r0
        L13:
            boolean r3 = r6.hasNext()
            if (r3 == 0) goto L2d
            java.lang.Object r3 = r6.next()
            r4 = r3
            kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor r4 = (kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor) r4
            kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor r4 = r4.getExtensionReceiverParameter()
            if (r4 != 0) goto L13
            if (r1 == 0) goto L2a
        L28:
            r2 = r0
            goto L30
        L2a:
            r1 = 1
            r2 = r3
            goto L13
        L2d:
            if (r1 != 0) goto L30
            goto L28
        L30:
            kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor r2 = (kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor) r2
            if (r2 == 0) goto L38
            kotlin.reflect.jvm.internal.impl.types.KotlinType r0 = r2.getType()
        L38:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r0 = (kotlin.reflect.jvm.internal.impl.types.SimpleType) r0
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor.r(kotlin.reflect.jvm.internal.impl.name.Name):kotlin.reflect.jvm.internal.impl.types.SimpleType");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassConstructorDescriptor s(DeserializedClassDescriptor deserializedClassDescriptor) {
        return deserializedClassDescriptor.l();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection t(DeserializedClassDescriptor deserializedClassDescriptor) {
        return deserializedClassDescriptor.n();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ValueClassRepresentation u(DeserializedClassDescriptor deserializedClassDescriptor) {
        return deserializedClassDescriptor.o();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    @NotNull
    public Annotations getAnnotations() {
        return this.J;
    }

    @NotNull
    public final DeserializationContext getC() {
        return this.f34834w;
    }

    @NotNull
    public final ProtoBuf.Class getClassProto() {
        return this.f34827p;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    /* renamed from: getCompanionObjectDescriptor */
    public ClassDescriptor mo1191getCompanionObjectDescriptor() {
        return (ClassDescriptor) this.F.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public Collection<ClassConstructorDescriptor> getConstructors() {
        return (Collection) this.E.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorNonRoot, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    @NotNull
    public DeclarationDescriptor getContainingDeclaration() {
        return this.C;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.AbstractClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public List<ReceiverParameterDescriptor> getContextReceivers() {
        List<ProtoBuf.Type> contextReceiverTypes = ProtoTypeTableUtilKt.contextReceiverTypes(this.f34827p, this.f34834w.getTypeTable());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(contextReceiverTypes, 10));
        for (ProtoBuf.Type type : contextReceiverTypes) {
            arrayList.add(new ReceiverParameterDescriptorImpl(getThisAsReceiverParameter(), new ContextClassReceiver(this, this.f34834w.getTypeDeserializer().type(type), null, null), Annotations.Companion.getEMPTY()));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
    @NotNull
    public List<TypeParameterDescriptor> getDeclaredTypeParameters() {
        return this.f34834w.getTypeDeserializer().getOwnTypeParameters();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public ClassKind getKind() {
        return this.f34833v;
    }

    @NotNull
    public final BinaryVersion getMetadataVersion() {
        return this.f34828q;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    @NotNull
    public Modality getModality() {
        return this.f34831t;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public Collection<ClassDescriptor> getSealedSubclasses() {
        return (Collection) this.G.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithSource
    @NotNull
    public SourceElement getSource() {
        return this.f34829r;
    }

    @NotNull
    public final ProtoContainer.Class getThisAsProtoContainer$deserialization() {
        return this.I;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
    @NotNull
    public TypeConstructor getTypeConstructor() {
        return this.f34837z;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleAwareClassDescriptor
    protected MemberScope getUnsubstitutedMemberScope(KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        return this.A.getScope(kotlinTypeRefiner);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    /* renamed from: getUnsubstitutedPrimaryConstructor */
    public ClassConstructorDescriptor mo1192getUnsubstitutedPrimaryConstructor() {
        return (ClassConstructorDescriptor) this.D.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public ValueClassRepresentation<SimpleType> getValueClassRepresentation() {
        return (ValueClassRepresentation) this.H.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithVisibility
    @NotNull
    public DescriptorVisibility getVisibility() {
        return this.f34832u;
    }

    public final boolean hasNestedClass$deserialization(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return q().getClassNames$deserialization().contains(name);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isActual() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isCompanionObject() {
        if (Flags.CLASS_KIND.get(this.f34827p.getFlags()) == ProtoBuf.Class.Kind.COMPANION_OBJECT) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isData() {
        Boolean bool = Flags.IS_DATA.get(this.f34827p.getFlags());
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        return bool.booleanValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isExpect() {
        Boolean bool = Flags.IS_EXPECT_CLASS.get(this.f34827p.getFlags());
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        return bool.booleanValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isExternal() {
        Boolean bool = Flags.IS_EXTERNAL_CLASS.get(this.f34827p.getFlags());
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        return bool.booleanValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isFun() {
        Boolean bool = Flags.IS_FUN_INTERFACE.get(this.f34827p.getFlags());
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        return bool.booleanValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isInline() {
        if (Flags.IS_VALUE_CLASS.get(this.f34827p.getFlags()).booleanValue() && this.f34828q.isAtMost(1, 4, 1)) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
    public boolean isInner() {
        Boolean bool = Flags.IS_INNER.get(this.f34827p.getFlags());
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        return bool.booleanValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isValue() {
        if (Flags.IS_VALUE_CLASS.get(this.f34827p.getFlags()).booleanValue() && this.f34828q.isAtLeast(1, 4, 2)) {
            return true;
        }
        return false;
    }

    @NotNull
    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("deserialized ");
        if (isExpect()) {
            str = "expect ";
        } else {
            str = "";
        }
        sb2.append(str);
        sb2.append("class ");
        sb2.append(getName());
        return sb2.toString();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public MemberScopeImpl getStaticScope() {
        return this.f34836y;
    }
}
