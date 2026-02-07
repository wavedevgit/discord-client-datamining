package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.resolve.MemberComparator;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.NameResolverUtilKt;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class DeserializedMemberScope extends MemberScopeImpl {

    /* renamed from: e  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f34443e = {Reflection.property1(new PropertyReference1Impl(DeserializedMemberScope.class, "classNames", "getClassNames$deserialization()Ljava/util/Set;", 0)), Reflection.property1(new PropertyReference1Impl(DeserializedMemberScope.class, "classifierNamesLazy", "getClassifierNamesLazy()Ljava/util/Set;", 0))};

    /* renamed from: a  reason: collision with root package name */
    private final DeserializationContext f34444a;

    /* renamed from: b  reason: collision with root package name */
    private final a f34445b;

    /* renamed from: c  reason: collision with root package name */
    private final NotNullLazyValue f34446c;

    /* renamed from: d  reason: collision with root package name */
    private final NullableLazyValue f34447d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class OptimizedImplementation implements a {

        /* renamed from: j  reason: collision with root package name */
        static final /* synthetic */ KProperty[] f34448j = {Reflection.property1(new PropertyReference1Impl(OptimizedImplementation.class, "functionNames", "getFunctionNames()Ljava/util/Set;", 0)), Reflection.property1(new PropertyReference1Impl(OptimizedImplementation.class, "variableNames", "getVariableNames()Ljava/util/Set;", 0))};

        /* renamed from: a  reason: collision with root package name */
        private final Map f34449a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f34450b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f34451c;

        /* renamed from: d  reason: collision with root package name */
        private final MemoizedFunctionToNotNull f34452d;

        /* renamed from: e  reason: collision with root package name */
        private final MemoizedFunctionToNotNull f34453e;

        /* renamed from: f  reason: collision with root package name */
        private final MemoizedFunctionToNullable f34454f;

        /* renamed from: g  reason: collision with root package name */
        private final NotNullLazyValue f34455g;

        /* renamed from: h  reason: collision with root package name */
        private final NotNullLazyValue f34456h;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ DeserializedMemberScope f34457i;

        public OptimizedImplementation(DeserializedMemberScope deserializedMemberScope, List functionList, List propertyList, List typeAliasList) {
            Map i10;
            Intrinsics.checkNotNullParameter(functionList, "functionList");
            Intrinsics.checkNotNullParameter(propertyList, "propertyList");
            Intrinsics.checkNotNullParameter(typeAliasList, "typeAliasList");
            this.f34457i = deserializedMemberScope;
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            for (Object obj : functionList) {
                Name name = NameResolverUtilKt.getName(deserializedMemberScope.l().getNameResolver(), ((ProtoBuf.Function) ((MessageLite) obj)).getName());
                Object obj2 = linkedHashMap.get(name);
                if (obj2 == null) {
                    obj2 = new ArrayList();
                    linkedHashMap.put(name, obj2);
                }
                ((List) obj2).add(obj);
            }
            this.f34449a = n(linkedHashMap);
            DeserializedMemberScope deserializedMemberScope2 = this.f34457i;
            LinkedHashMap linkedHashMap2 = new LinkedHashMap();
            for (Object obj3 : propertyList) {
                Name name2 = NameResolverUtilKt.getName(deserializedMemberScope2.l().getNameResolver(), ((ProtoBuf.Property) ((MessageLite) obj3)).getName());
                Object obj4 = linkedHashMap2.get(name2);
                if (obj4 == null) {
                    obj4 = new ArrayList();
                    linkedHashMap2.put(name2, obj4);
                }
                ((List) obj4).add(obj3);
            }
            this.f34450b = n(linkedHashMap2);
            if (this.f34457i.l().getComponents().getConfiguration().getTypeAliasesAllowed()) {
                DeserializedMemberScope deserializedMemberScope3 = this.f34457i;
                LinkedHashMap linkedHashMap3 = new LinkedHashMap();
                for (Object obj5 : typeAliasList) {
                    Name name3 = NameResolverUtilKt.getName(deserializedMemberScope3.l().getNameResolver(), ((ProtoBuf.TypeAlias) ((MessageLite) obj5)).getName());
                    Object obj6 = linkedHashMap3.get(name3);
                    if (obj6 == null) {
                        obj6 = new ArrayList();
                        linkedHashMap3.put(name3, obj6);
                    }
                    ((List) obj6).add(obj5);
                }
                i10 = n(linkedHashMap3);
            } else {
                i10 = o0.i();
            }
            this.f34451c = i10;
            this.f34452d = this.f34457i.l().getStorageManager().createMemoizedFunction(new z(this));
            this.f34453e = this.f34457i.l().getStorageManager().createMemoizedFunction(new a0(this));
            this.f34454f = this.f34457i.l().getStorageManager().createMemoizedFunctionWithNullableValues(new b0(this));
            this.f34455g = this.f34457i.l().getStorageManager().createLazyValue(new c0(this, this.f34457i));
            this.f34456h = this.f34457i.l().getStorageManager().createLazyValue(new d0(this, this.f34457i));
        }

        /* JADX WARN: Removed duplicated region for block: B:11:0x0048  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final java.util.Collection i(kotlin.reflect.jvm.internal.impl.name.Name r6) {
            /*
                r5 = this;
                java.util.Map r0 = r5.f34449a
                kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function.PARSER
                java.lang.String r2 = "PARSER"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope r2 = r5.f34457i
                java.lang.Object r0 = r0.get(r6)
                byte[] r0 = (byte[]) r0
                if (r0 == 0) goto L2c
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope r3 = r5.f34457i
                java.io.ByteArrayInputStream r4 = new java.io.ByteArrayInputStream
                r4.<init>(r0)
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation$computeDescriptors$1$1 r0 = new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation$computeDescriptors$1$1
                r0.<init>(r1, r4, r3)
                kotlin.sequences.Sequence r0 = kotlin.sequences.k.r(r0)
                java.util.List r0 = kotlin.sequences.k.Y(r0)
                if (r0 == 0) goto L2c
                java.util.Collection r0 = (java.util.Collection) r0
                goto L32
            L2c:
                java.util.List r0 = kotlin.collections.CollectionsKt.l()
                java.util.Collection r0 = (java.util.Collection) r0
            L32:
                r1 = r0
                java.lang.Iterable r1 = (java.lang.Iterable) r1
                java.util.ArrayList r3 = new java.util.ArrayList
                int r0 = r0.size()
                r3.<init>(r0)
                java.util.Iterator r0 = r1.iterator()
            L42:
                boolean r1 = r0.hasNext()
                if (r1 == 0) goto L6b
                java.lang.Object r1 = r0.next()
                kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function r1 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function) r1
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext r4 = r2.l()
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer r4 = r4.getMemberDeserializer()
                kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
                kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor r1 = r4.loadFunction(r1)
                boolean r4 = r2.s(r1)
                if (r4 == 0) goto L64
                goto L65
            L64:
                r1 = 0
            L65:
                if (r1 == 0) goto L42
                r3.add(r1)
                goto L42
            L6b:
                r2.g(r6, r3)
                java.util.List r6 = kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.compact(r3)
                java.util.Collection r6 = (java.util.Collection) r6
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.OptimizedImplementation.i(kotlin.reflect.jvm.internal.impl.name.Name):java.util.Collection");
        }

        /* JADX WARN: Removed duplicated region for block: B:11:0x0048  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final java.util.Collection j(kotlin.reflect.jvm.internal.impl.name.Name r6) {
            /*
                r5 = this;
                java.util.Map r0 = r5.f34450b
                kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property.PARSER
                java.lang.String r2 = "PARSER"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope r2 = r5.f34457i
                java.lang.Object r0 = r0.get(r6)
                byte[] r0 = (byte[]) r0
                if (r0 == 0) goto L2c
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope r3 = r5.f34457i
                java.io.ByteArrayInputStream r4 = new java.io.ByteArrayInputStream
                r4.<init>(r0)
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation$computeDescriptors$1$1 r0 = new kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation$computeDescriptors$1$1
                r0.<init>(r1, r4, r3)
                kotlin.sequences.Sequence r0 = kotlin.sequences.k.r(r0)
                java.util.List r0 = kotlin.sequences.k.Y(r0)
                if (r0 == 0) goto L2c
                java.util.Collection r0 = (java.util.Collection) r0
                goto L32
            L2c:
                java.util.List r0 = kotlin.collections.CollectionsKt.l()
                java.util.Collection r0 = (java.util.Collection) r0
            L32:
                r1 = r0
                java.lang.Iterable r1 = (java.lang.Iterable) r1
                java.util.ArrayList r3 = new java.util.ArrayList
                int r0 = r0.size()
                r3.<init>(r0)
                java.util.Iterator r0 = r1.iterator()
            L42:
                boolean r1 = r0.hasNext()
                if (r1 == 0) goto L63
                java.lang.Object r1 = r0.next()
                kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property r1 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property) r1
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext r4 = r2.l()
                kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer r4 = r4.getMemberDeserializer()
                kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
                kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor r1 = r4.loadProperty(r1)
                if (r1 == 0) goto L42
                r3.add(r1)
                goto L42
            L63:
                r2.h(r6, r3)
                java.util.List r6 = kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.compact(r3)
                java.util.Collection r6 = (java.util.Collection) r6
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.OptimizedImplementation.j(kotlin.reflect.jvm.internal.impl.name.Name):java.util.Collection");
        }

        private final TypeAliasDescriptor k(Name name) {
            ProtoBuf.TypeAlias parseDelimitedFrom;
            byte[] bArr = (byte[]) this.f34451c.get(name);
            if (bArr == null || (parseDelimitedFrom = ProtoBuf.TypeAlias.parseDelimitedFrom(new ByteArrayInputStream(bArr), this.f34457i.l().getComponents().getExtensionRegistryLite())) == null) {
                return null;
            }
            return this.f34457i.l().getMemberDeserializer().loadTypeAlias(parseDelimitedFrom);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Set l(OptimizedImplementation optimizedImplementation, DeserializedMemberScope deserializedMemberScope) {
            return x0.l(optimizedImplementation.f34449a.keySet(), deserializedMemberScope.o());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection m(OptimizedImplementation optimizedImplementation, Name it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return optimizedImplementation.i(it);
        }

        private final Map n(Map map) {
            LinkedHashMap linkedHashMap = new LinkedHashMap(o0.e(map.size()));
            for (Map.Entry entry : map.entrySet()) {
                Object key = entry.getKey();
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                Iterable<AbstractMessageLite> iterable = (Iterable) entry.getValue();
                ArrayList arrayList = new ArrayList(CollectionsKt.w(iterable, 10));
                for (AbstractMessageLite abstractMessageLite : iterable) {
                    abstractMessageLite.writeDelimitedTo(byteArrayOutputStream);
                    arrayList.add(Unit.f32056a);
                }
                linkedHashMap.put(key, byteArrayOutputStream.toByteArray());
            }
            return linkedHashMap;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection o(OptimizedImplementation optimizedImplementation, Name it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return optimizedImplementation.j(it);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final TypeAliasDescriptor p(OptimizedImplementation optimizedImplementation, Name it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return optimizedImplementation.k(it);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Set q(OptimizedImplementation optimizedImplementation, DeserializedMemberScope deserializedMemberScope) {
            return x0.l(optimizedImplementation.f34450b.keySet(), deserializedMemberScope.p());
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Set a() {
            return this.f34451c.keySet();
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public void b(Collection result, DescriptorKindFilter kindFilter, Function1 nameFilter, LookupLocation location) {
            Intrinsics.checkNotNullParameter(result, "result");
            Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
            Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
            Intrinsics.checkNotNullParameter(location, "location");
            if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getVARIABLES_MASK())) {
                ArrayList arrayList = new ArrayList();
                for (Name name : getVariableNames()) {
                    if (((Boolean) nameFilter.invoke(name)).booleanValue()) {
                        arrayList.addAll(getContributedVariables(name, location));
                    }
                }
                MemberComparator.NameAndTypeMemberComparator INSTANCE = MemberComparator.NameAndTypeMemberComparator.INSTANCE;
                Intrinsics.checkNotNullExpressionValue(INSTANCE, "INSTANCE");
                CollectionsKt.A(arrayList, INSTANCE);
                result.addAll(arrayList);
            }
            if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getFUNCTIONS_MASK())) {
                ArrayList arrayList2 = new ArrayList();
                for (Name name2 : getFunctionNames()) {
                    if (((Boolean) nameFilter.invoke(name2)).booleanValue()) {
                        arrayList2.addAll(getContributedFunctions(name2, location));
                    }
                }
                MemberComparator.NameAndTypeMemberComparator INSTANCE2 = MemberComparator.NameAndTypeMemberComparator.INSTANCE;
                Intrinsics.checkNotNullExpressionValue(INSTANCE2, "INSTANCE");
                CollectionsKt.A(arrayList2, INSTANCE2);
                result.addAll(arrayList2);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public TypeAliasDescriptor c(Name name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return (TypeAliasDescriptor) this.f34454f.invoke(name);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Collection getContributedFunctions(Name name, LookupLocation location) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            if (!getFunctionNames().contains(name)) {
                return CollectionsKt.l();
            }
            return (Collection) this.f34452d.invoke(name);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Collection getContributedVariables(Name name, LookupLocation location) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            if (!getVariableNames().contains(name)) {
                return CollectionsKt.l();
            }
            return (Collection) this.f34453e.invoke(name);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Set getFunctionNames() {
            return (Set) StorageKt.getValue(this.f34455g, this, f34448j[0]);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Set getVariableNames() {
            return (Set) StorageKt.getValue(this.f34456h, this, f34448j[1]);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a {
        Set a();

        void b(Collection collection, DescriptorKindFilter descriptorKindFilter, Function1 function1, LookupLocation lookupLocation);

        TypeAliasDescriptor c(Name name);

        Collection getContributedFunctions(Name name, LookupLocation lookupLocation);

        Collection getContributedVariables(Name name, LookupLocation lookupLocation);

        Set getFunctionNames();

        Set getVariableNames();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class b implements a {

        /* renamed from: o  reason: collision with root package name */
        static final /* synthetic */ KProperty[] f34461o = {Reflection.property1(new PropertyReference1Impl(b.class, "declaredFunctions", "getDeclaredFunctions()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "declaredProperties", "getDeclaredProperties()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "allTypeAliases", "getAllTypeAliases()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "allFunctions", "getAllFunctions()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "allProperties", "getAllProperties()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "typeAliasesByName", "getTypeAliasesByName()Ljava/util/Map;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "functionsByName", "getFunctionsByName()Ljava/util/Map;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "propertiesByName", "getPropertiesByName()Ljava/util/Map;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "functionNames", "getFunctionNames()Ljava/util/Set;", 0)), Reflection.property1(new PropertyReference1Impl(b.class, "variableNames", "getVariableNames()Ljava/util/Set;", 0))};

        /* renamed from: a  reason: collision with root package name */
        private final List f34462a;

        /* renamed from: b  reason: collision with root package name */
        private final List f34463b;

        /* renamed from: c  reason: collision with root package name */
        private final List f34464c;

        /* renamed from: d  reason: collision with root package name */
        private final NotNullLazyValue f34465d;

        /* renamed from: e  reason: collision with root package name */
        private final NotNullLazyValue f34466e;

        /* renamed from: f  reason: collision with root package name */
        private final NotNullLazyValue f34467f;

        /* renamed from: g  reason: collision with root package name */
        private final NotNullLazyValue f34468g;

        /* renamed from: h  reason: collision with root package name */
        private final NotNullLazyValue f34469h;

        /* renamed from: i  reason: collision with root package name */
        private final NotNullLazyValue f34470i;

        /* renamed from: j  reason: collision with root package name */
        private final NotNullLazyValue f34471j;

        /* renamed from: k  reason: collision with root package name */
        private final NotNullLazyValue f34472k;

        /* renamed from: l  reason: collision with root package name */
        private final NotNullLazyValue f34473l;

        /* renamed from: m  reason: collision with root package name */
        private final NotNullLazyValue f34474m;

        /* renamed from: n  reason: collision with root package name */
        final /* synthetic */ DeserializedMemberScope f34475n;

        public b(DeserializedMemberScope deserializedMemberScope, List functionList, List propertyList, List typeAliasList) {
            Intrinsics.checkNotNullParameter(functionList, "functionList");
            Intrinsics.checkNotNullParameter(propertyList, "propertyList");
            Intrinsics.checkNotNullParameter(typeAliasList, "typeAliasList");
            this.f34475n = deserializedMemberScope;
            this.f34462a = functionList;
            this.f34463b = propertyList;
            this.f34464c = deserializedMemberScope.l().getComponents().getConfiguration().getTypeAliasesAllowed() ? typeAliasList : CollectionsKt.l();
            this.f34465d = deserializedMemberScope.l().getStorageManager().createLazyValue(new p(this));
            this.f34466e = deserializedMemberScope.l().getStorageManager().createLazyValue(new q(this));
            this.f34467f = deserializedMemberScope.l().getStorageManager().createLazyValue(new r(this));
            this.f34468g = deserializedMemberScope.l().getStorageManager().createLazyValue(new s(this));
            this.f34469h = deserializedMemberScope.l().getStorageManager().createLazyValue(new t(this));
            this.f34470i = deserializedMemberScope.l().getStorageManager().createLazyValue(new u(this));
            this.f34471j = deserializedMemberScope.l().getStorageManager().createLazyValue(new v(this));
            this.f34472k = deserializedMemberScope.l().getStorageManager().createLazyValue(new w(this));
            this.f34473l = deserializedMemberScope.l().getStorageManager().createLazyValue(new x(this, deserializedMemberScope));
            this.f34474m = deserializedMemberScope.l().getStorageManager().createLazyValue(new y(this, deserializedMemberScope));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map A(b bVar) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            for (Object obj : bVar.B()) {
                Name name = ((SimpleFunctionDescriptor) obj).getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                Object obj2 = linkedHashMap.get(name);
                if (obj2 == null) {
                    obj2 = new ArrayList();
                    linkedHashMap.put(name, obj2);
                }
                ((List) obj2).add(obj);
            }
            return linkedHashMap;
        }

        private final List B() {
            return (List) StorageKt.getValue(this.f34468g, this, f34461o[3]);
        }

        private final List C() {
            return (List) StorageKt.getValue(this.f34469h, this, f34461o[4]);
        }

        private final List D() {
            return (List) StorageKt.getValue(this.f34467f, this, f34461o[2]);
        }

        private final List E() {
            return (List) StorageKt.getValue(this.f34465d, this, f34461o[0]);
        }

        private final List F() {
            return (List) StorageKt.getValue(this.f34466e, this, f34461o[1]);
        }

        private final Map G() {
            return (Map) StorageKt.getValue(this.f34471j, this, f34461o[6]);
        }

        private final Map H() {
            return (Map) StorageKt.getValue(this.f34472k, this, f34461o[7]);
        }

        private final Map I() {
            return (Map) StorageKt.getValue(this.f34470i, this, f34461o[5]);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map J(b bVar) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            for (Object obj : bVar.C()) {
                Name name = ((PropertyDescriptor) obj).getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                Object obj2 = linkedHashMap.get(name);
                if (obj2 == null) {
                    obj2 = new ArrayList();
                    linkedHashMap.put(name, obj2);
                }
                ((List) obj2).add(obj);
            }
            return linkedHashMap;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map K(b bVar) {
            List D = bVar.D();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(D, 10)), 16));
            for (Object obj : D) {
                Name name = ((TypeAliasDescriptor) obj).getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                linkedHashMap.put(name, obj);
            }
            return linkedHashMap;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Set L(b bVar, DeserializedMemberScope deserializedMemberScope) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            DeserializedMemberScope deserializedMemberScope2 = bVar.f34475n;
            for (MessageLite messageLite : bVar.f34463b) {
                linkedHashSet.add(NameResolverUtilKt.getName(deserializedMemberScope2.l().getNameResolver(), ((ProtoBuf.Property) messageLite).getName()));
            }
            return x0.l(linkedHashSet, deserializedMemberScope.p());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List n(b bVar) {
            return CollectionsKt.L0(bVar.E(), bVar.q());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List o(b bVar) {
            return CollectionsKt.L0(bVar.F(), bVar.r());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List p(b bVar) {
            return bVar.w();
        }

        private final List q() {
            ArrayList arrayList = new ArrayList();
            for (Name name : this.f34475n.o()) {
                CollectionsKt.B(arrayList, t(name));
            }
            return arrayList;
        }

        private final List r() {
            ArrayList arrayList = new ArrayList();
            for (Name name : this.f34475n.p()) {
                CollectionsKt.B(arrayList, u(name));
            }
            return arrayList;
        }

        private final List s() {
            List<MessageLite> list = this.f34462a;
            DeserializedMemberScope deserializedMemberScope = this.f34475n;
            ArrayList arrayList = new ArrayList();
            for (MessageLite messageLite : list) {
                SimpleFunctionDescriptor loadFunction = deserializedMemberScope.l().getMemberDeserializer().loadFunction((ProtoBuf.Function) messageLite);
                if (!deserializedMemberScope.s(loadFunction)) {
                    loadFunction = null;
                }
                if (loadFunction != null) {
                    arrayList.add(loadFunction);
                }
            }
            return arrayList;
        }

        private final List t(Name name) {
            List E = E();
            DeserializedMemberScope deserializedMemberScope = this.f34475n;
            ArrayList arrayList = new ArrayList();
            for (Object obj : E) {
                if (Intrinsics.areEqual(((DeclarationDescriptor) obj).getName(), name)) {
                    arrayList.add(obj);
                }
            }
            int size = arrayList.size();
            deserializedMemberScope.g(name, arrayList);
            return arrayList.subList(size, arrayList.size());
        }

        private final List u(Name name) {
            List F = F();
            DeserializedMemberScope deserializedMemberScope = this.f34475n;
            ArrayList arrayList = new ArrayList();
            for (Object obj : F) {
                if (Intrinsics.areEqual(((DeclarationDescriptor) obj).getName(), name)) {
                    arrayList.add(obj);
                }
            }
            int size = arrayList.size();
            deserializedMemberScope.h(name, arrayList);
            return arrayList.subList(size, arrayList.size());
        }

        private final List v() {
            DeserializedMemberScope deserializedMemberScope = this.f34475n;
            ArrayList arrayList = new ArrayList();
            for (MessageLite messageLite : this.f34463b) {
                PropertyDescriptor loadProperty = deserializedMemberScope.l().getMemberDeserializer().loadProperty((ProtoBuf.Property) messageLite);
                if (loadProperty != null) {
                    arrayList.add(loadProperty);
                }
            }
            return arrayList;
        }

        private final List w() {
            DeserializedMemberScope deserializedMemberScope = this.f34475n;
            ArrayList arrayList = new ArrayList();
            for (MessageLite messageLite : this.f34464c) {
                TypeAliasDescriptor loadTypeAlias = deserializedMemberScope.l().getMemberDeserializer().loadTypeAlias((ProtoBuf.TypeAlias) messageLite);
                if (loadTypeAlias != null) {
                    arrayList.add(loadTypeAlias);
                }
            }
            return arrayList;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List x(b bVar) {
            return bVar.s();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List y(b bVar) {
            return bVar.v();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Set z(b bVar, DeserializedMemberScope deserializedMemberScope) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            DeserializedMemberScope deserializedMemberScope2 = bVar.f34475n;
            for (MessageLite messageLite : bVar.f34462a) {
                linkedHashSet.add(NameResolverUtilKt.getName(deserializedMemberScope2.l().getNameResolver(), ((ProtoBuf.Function) messageLite).getName()));
            }
            return x0.l(linkedHashSet, deserializedMemberScope.o());
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Set a() {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            DeserializedMemberScope deserializedMemberScope = this.f34475n;
            for (MessageLite messageLite : this.f34464c) {
                linkedHashSet.add(NameResolverUtilKt.getName(deserializedMemberScope.l().getNameResolver(), ((ProtoBuf.TypeAlias) messageLite).getName()));
            }
            return linkedHashSet;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public void b(Collection result, DescriptorKindFilter kindFilter, Function1 nameFilter, LookupLocation location) {
            Intrinsics.checkNotNullParameter(result, "result");
            Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
            Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
            Intrinsics.checkNotNullParameter(location, "location");
            if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getVARIABLES_MASK())) {
                for (Object obj : C()) {
                    Name name = ((PropertyDescriptor) obj).getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    if (((Boolean) nameFilter.invoke(name)).booleanValue()) {
                        result.add(obj);
                    }
                }
            }
            if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getFUNCTIONS_MASK())) {
                for (Object obj2 : B()) {
                    Name name2 = ((SimpleFunctionDescriptor) obj2).getName();
                    Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
                    if (((Boolean) nameFilter.invoke(name2)).booleanValue()) {
                        result.add(obj2);
                    }
                }
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public TypeAliasDescriptor c(Name name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return (TypeAliasDescriptor) I().get(name);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Collection getContributedFunctions(Name name, LookupLocation location) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            if (!getFunctionNames().contains(name)) {
                return CollectionsKt.l();
            }
            Collection collection = (Collection) G().get(name);
            if (collection == null) {
                return CollectionsKt.l();
            }
            return collection;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Collection getContributedVariables(Name name, LookupLocation location) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(location, "location");
            if (!getVariableNames().contains(name)) {
                return CollectionsKt.l();
            }
            Collection collection = (Collection) H().get(name);
            if (collection == null) {
                return CollectionsKt.l();
            }
            return collection;
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Set getFunctionNames() {
            return (Set) StorageKt.getValue(this.f34473l, this, f34461o[8]);
        }

        @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope.a
        public Set getVariableNames() {
            return (Set) StorageKt.getValue(this.f34474m, this, f34461o[9]);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public DeserializedMemberScope(DeserializationContext c10, List functionList, List propertyList, List typeAliasList, Function0 classNames) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(functionList, "functionList");
        Intrinsics.checkNotNullParameter(propertyList, "propertyList");
        Intrinsics.checkNotNullParameter(typeAliasList, "typeAliasList");
        Intrinsics.checkNotNullParameter(classNames, "classNames");
        this.f34444a = c10;
        this.f34445b = j(functionList, propertyList, typeAliasList);
        this.f34446c = c10.getStorageManager().createLazyValue(new n(classNames));
        this.f34447d = c10.getStorageManager().createNullableLazyValue(new o(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set d(Function0 function0) {
        return CollectionsKt.l1((Iterable) function0.invoke());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set e(DeserializedMemberScope deserializedMemberScope) {
        Set n10 = deserializedMemberScope.n();
        if (n10 == null) {
            return null;
        }
        return x0.l(x0.l(deserializedMemberScope.getClassNames$deserialization(), deserializedMemberScope.f34445b.a()), n10);
    }

    private final a j(List list, List list2, List list3) {
        if (this.f34444a.getComponents().getConfiguration().getPreserveDeclarationsOrdering()) {
            return new b(this, list, list2, list3);
        }
        return new OptimizedImplementation(this, list, list2, list3);
    }

    private final ClassDescriptor k(Name name) {
        return this.f34444a.getComponents().deserializeClass(i(name));
    }

    private final Set m() {
        return (Set) StorageKt.getValue(this.f34447d, this, f34443e[1]);
    }

    private final TypeAliasDescriptor q(Name name) {
        return this.f34445b.c(name);
    }

    protected abstract void c(Collection collection, Function1 function1);

    /* JADX INFO: Access modifiers changed from: protected */
    public final Collection f(DescriptorKindFilter kindFilter, Function1 nameFilter, LookupLocation location) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        Intrinsics.checkNotNullParameter(location, "location");
        ArrayList arrayList = new ArrayList(0);
        DescriptorKindFilter.Companion companion = DescriptorKindFilter.Companion;
        if (kindFilter.acceptsKinds(companion.getSINGLETON_CLASSIFIERS_MASK())) {
            c(arrayList, nameFilter);
        }
        this.f34445b.b(arrayList, kindFilter, nameFilter, location);
        if (kindFilter.acceptsKinds(companion.getCLASSIFIERS_MASK())) {
            for (Name name : getClassNames$deserialization()) {
                if (((Boolean) nameFilter.invoke(name)).booleanValue()) {
                    kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, k(name));
                }
            }
        }
        if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getTYPE_ALIASES_MASK())) {
            for (Name name2 : this.f34445b.a()) {
                if (((Boolean) nameFilter.invoke(name2)).booleanValue()) {
                    kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, this.f34445b.c(name2));
                }
            }
        }
        return kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.compact(arrayList);
    }

    protected void g(Name name, List functions) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(functions, "functions");
    }

    @NotNull
    public final Set<Name> getClassNames$deserialization() {
        return (Set) StorageKt.getValue(this.f34446c, this, f34443e[0]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    public Set<Name> getClassifierNames() {
        return m();
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    /* renamed from: getContributedClassifier */
    public ClassifierDescriptor mo1200getContributedClassifier(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        if (r(name)) {
            return k(name);
        }
        if (this.f34445b.a().contains(name)) {
            return q(name);
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    @NotNull
    public Collection<SimpleFunctionDescriptor> getContributedFunctions(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        return this.f34445b.getContributedFunctions(name, location);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Collection<PropertyDescriptor> getContributedVariables(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        return this.f34445b.getContributedVariables(name, location);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Set<Name> getFunctionNames() {
        return this.f34445b.getFunctionNames();
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Set<Name> getVariableNames() {
        return this.f34445b.getVariableNames();
    }

    protected void h(Name name, List descriptors) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(descriptors, "descriptors");
    }

    protected abstract ClassId i(Name name);

    /* JADX INFO: Access modifiers changed from: protected */
    public final DeserializationContext l() {
        return this.f34444a;
    }

    protected abstract Set n();

    protected abstract Set o();

    protected abstract Set p();

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean r(Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return getClassNames$deserialization().contains(name);
    }

    protected boolean s(SimpleFunctionDescriptor function) {
        Intrinsics.checkNotNullParameter(function, "function");
        return true;
    }
}
