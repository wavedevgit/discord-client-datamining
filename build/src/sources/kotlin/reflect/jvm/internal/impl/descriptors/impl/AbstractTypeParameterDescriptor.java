package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.SupertypeLoopChecker;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorEquivalenceForOverrides;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.LazyScopeAdapter;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.TypeIntersectionScope;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractTypeParameterDescriptor extends DeclarationDescriptorNonRootImpl implements TypeParameterDescriptor {

    /* renamed from: p  reason: collision with root package name */
    private final Variance f33701p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f33702q;

    /* renamed from: r  reason: collision with root package name */
    private final int f33703r;

    /* renamed from: s  reason: collision with root package name */
    private final NotNullLazyValue f33704s;

    /* renamed from: t  reason: collision with root package name */
    private final NotNullLazyValue f33705t;

    /* renamed from: u  reason: collision with root package name */
    private final StorageManager f33706u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ StorageManager f33707d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SupertypeLoopChecker f33708e;

        a(StorageManager storageManager, SupertypeLoopChecker supertypeLoopChecker) {
            this.f33707d = storageManager;
            this.f33708e = supertypeLoopChecker;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public TypeConstructor invoke() {
            return new c(AbstractTypeParameterDescriptor.this, this.f33707d, this.f33708e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class b implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Name f33710d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements Function0 {
            a() {
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public MemberScope invoke() {
                return TypeIntersectionScope.create("Scope for type parameter " + b.this.f33710d.asString(), AbstractTypeParameterDescriptor.this.getUpperBounds());
            }
        }

        b(Name name) {
            this.f33710d = name;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public SimpleType invoke() {
            return KotlinTypeFactory.simpleTypeWithNonTrivialMemberScope(TypeAttributes.Companion.getEmpty(), AbstractTypeParameterDescriptor.this.getTypeConstructor(), Collections.EMPTY_LIST, false, new LazyScopeAdapter(new a()));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class c extends AbstractTypeConstructor {

        /* renamed from: d  reason: collision with root package name */
        private final SupertypeLoopChecker f33713d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbstractTypeParameterDescriptor f33714e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(AbstractTypeParameterDescriptor abstractTypeParameterDescriptor, StorageManager storageManager, SupertypeLoopChecker supertypeLoopChecker) {
            super(storageManager);
            if (storageManager == null) {
                A(0);
            }
            this.f33714e = abstractTypeParameterDescriptor;
            this.f33713d = supertypeLoopChecker;
        }

        private static /* synthetic */ void A(int i10) {
            String str = (i10 == 1 || i10 == 2 || i10 == 3 || i10 == 4 || i10 == 5 || i10 == 8) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
            Object[] objArr = new Object[(i10 == 1 || i10 == 2 || i10 == 3 || i10 == 4 || i10 == 5 || i10 == 8) ? 2 : 3];
            switch (i10) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 8:
                    objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeParameterDescriptor$TypeParameterTypeConstructor";
                    break;
                case 6:
                    objArr[0] = "type";
                    break;
                case 7:
                    objArr[0] = "supertypes";
                    break;
                case 9:
                    objArr[0] = "classifier";
                    break;
                default:
                    objArr[0] = "storageManager";
                    break;
            }
            if (i10 == 1) {
                objArr[1] = "computeSupertypes";
            } else if (i10 == 2) {
                objArr[1] = "getParameters";
            } else if (i10 == 3) {
                objArr[1] = "getDeclarationDescriptor";
            } else if (i10 == 4) {
                objArr[1] = "getBuiltIns";
            } else if (i10 == 5) {
                objArr[1] = "getSupertypeLoopChecker";
            } else if (i10 != 8) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeParameterDescriptor$TypeParameterTypeConstructor";
            } else {
                objArr[1] = "processSupertypesWithoutCycles";
            }
            switch (i10) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 8:
                    break;
                case 6:
                    objArr[2] = "reportSupertypeLoopError";
                    break;
                case 7:
                    objArr[2] = "processSupertypesWithoutCycles";
                    break;
                case 9:
                    objArr[2] = "isSameClassifier";
                    break;
                default:
                    objArr[2] = "<init>";
                    break;
            }
            String format = String.format(str, objArr);
            if (i10 != 1 && i10 != 2 && i10 != 3 && i10 != 4 && i10 != 5 && i10 != 8) {
                throw new IllegalArgumentException(format);
            }
            throw new IllegalStateException(format);
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.ClassifierBasedTypeConstructor
        protected boolean c(ClassifierDescriptor classifierDescriptor) {
            if (classifierDescriptor == null) {
                A(9);
            }
            if ((classifierDescriptor instanceof TypeParameterDescriptor) && DescriptorEquivalenceForOverrides.INSTANCE.areTypeParametersEquivalent(this.f33714e, (TypeParameterDescriptor) classifierDescriptor, true)) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public KotlinBuiltIns getBuiltIns() {
            KotlinBuiltIns builtIns = DescriptorUtilsKt.getBuiltIns(this.f33714e);
            if (builtIns == null) {
                A(4);
            }
            return builtIns;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.ClassifierBasedTypeConstructor, kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        /* renamed from: getDeclarationDescriptor */
        public ClassifierDescriptor mo1198getDeclarationDescriptor() {
            AbstractTypeParameterDescriptor abstractTypeParameterDescriptor = this.f33714e;
            if (abstractTypeParameterDescriptor == null) {
                A(3);
            }
            return abstractTypeParameterDescriptor;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public List getParameters() {
            List list = Collections.EMPTY_LIST;
            if (list == null) {
                A(2);
            }
            return list;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public boolean isDenotable() {
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected Collection l() {
            List c10 = this.f33714e.c();
            if (c10 == null) {
                A(1);
            }
            return c10;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected KotlinType m() {
            return ErrorUtils.createErrorType(ErrorTypeKind.CYCLIC_UPPER_BOUNDS, new String[0]);
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected SupertypeLoopChecker p() {
            SupertypeLoopChecker supertypeLoopChecker = this.f33713d;
            if (supertypeLoopChecker == null) {
                A(5);
            }
            return supertypeLoopChecker;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected List q(List list) {
            if (list == null) {
                A(7);
            }
            List b10 = this.f33714e.b(list);
            if (b10 == null) {
                A(8);
            }
            return b10;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected void s(KotlinType kotlinType) {
            if (kotlinType == null) {
                A(6);
            }
            this.f33714e.reportSupertypeLoopError(kotlinType);
        }

        public String toString() {
            return this.f33714e.getName().toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AbstractTypeParameterDescriptor(StorageManager storageManager, DeclarationDescriptor declarationDescriptor, Annotations annotations, Name name, Variance variance, boolean z10, int i10, SourceElement sourceElement, SupertypeLoopChecker supertypeLoopChecker) {
        super(declarationDescriptor, annotations, name, sourceElement);
        if (storageManager == null) {
            a(0);
        }
        if (declarationDescriptor == null) {
            a(1);
        }
        if (annotations == null) {
            a(2);
        }
        if (name == null) {
            a(3);
        }
        if (variance == null) {
            a(4);
        }
        if (sourceElement == null) {
            a(5);
        }
        if (supertypeLoopChecker == null) {
            a(6);
        }
        this.f33701p = variance;
        this.f33702q = z10;
        this.f33703r = i10;
        this.f33704s = storageManager.createLazyValue(new a(storageManager, supertypeLoopChecker));
        this.f33705t = storageManager.createLazyValue(new b(name));
        this.f33706u = storageManager;
    }

    private static /* synthetic */ void a(int i10) {
        String str;
        int i11;
        switch (i10) {
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
                str = "@NotNull method %s.%s must not return null";
                break;
            case 12:
            default:
                str = "Argument for @NotNull parameter '%s' of %s.%s must not be null";
                break;
        }
        switch (i10) {
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
                i11 = 2;
                break;
            case 12:
            default:
                i11 = 3;
                break;
        }
        Object[] objArr = new Object[i11];
        switch (i10) {
            case 1:
                objArr[0] = "containingDeclaration";
                break;
            case 2:
                objArr[0] = "annotations";
                break;
            case 3:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case 4:
                objArr[0] = "variance";
                break;
            case 5:
                objArr[0] = "source";
                break;
            case 6:
                objArr[0] = "supertypeLoopChecker";
                break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeParameterDescriptor";
                break;
            case 12:
                objArr[0] = "bounds";
                break;
            default:
                objArr[0] = "storageManager";
                break;
        }
        switch (i10) {
            case 7:
                objArr[1] = "getVariance";
                break;
            case 8:
                objArr[1] = "getUpperBounds";
                break;
            case 9:
                objArr[1] = "getTypeConstructor";
                break;
            case 10:
                objArr[1] = "getDefaultType";
                break;
            case 11:
                objArr[1] = "getOriginal";
                break;
            case 12:
            default:
                objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeParameterDescriptor";
                break;
            case 13:
                objArr[1] = "processBoundsWithoutCycles";
                break;
            case 14:
                objArr[1] = "getStorageManager";
                break;
        }
        switch (i10) {
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
                break;
            case 12:
                objArr[2] = "processBoundsWithoutCycles";
                break;
            default:
                objArr[2] = "<init>";
                break;
        }
        String format = String.format(str, objArr);
        switch (i10) {
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
                throw new IllegalStateException(format);
            case 12:
            default:
                throw new IllegalArgumentException(format);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public <R, D> R accept(DeclarationDescriptorVisitor<R, D> declarationDescriptorVisitor, D d10) {
        return declarationDescriptorVisitor.visitTypeParameterDescriptor(this, d10);
    }

    protected List b(List list) {
        if (list == null) {
            a(12);
        }
        if (list == null) {
            a(13);
        }
        return list;
    }

    protected abstract List c();

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
    @NotNull
    public SimpleType getDefaultType() {
        SimpleType simpleType = (SimpleType) this.f33705t.invoke();
        if (simpleType == null) {
            a(10);
        }
        return simpleType;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public int getIndex() {
        return this.f33703r;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    @NotNull
    public StorageManager getStorageManager() {
        StorageManager storageManager = this.f33706u;
        if (storageManager == null) {
            a(14);
        }
        return storageManager;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
    @NotNull
    public final TypeConstructor getTypeConstructor() {
        TypeConstructor typeConstructor = (TypeConstructor) this.f33704s.invoke();
        if (typeConstructor == null) {
            a(9);
        }
        return typeConstructor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    @NotNull
    public List<KotlinType> getUpperBounds() {
        List<KotlinType> supertypes = ((c) getTypeConstructor()).getSupertypes();
        if (supertypes == null) {
            a(8);
        }
        return supertypes;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    @NotNull
    public Variance getVariance() {
        Variance variance = this.f33701p;
        if (variance == null) {
            a(7);
        }
        return variance;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public boolean isCapturedFromOuterDeclaration() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public boolean isReified() {
        return this.f33702q;
    }

    protected abstract void reportSupertypeLoopError(KotlinType kotlinType);

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorNonRootImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    @NotNull
    public TypeParameterDescriptor getOriginal() {
        TypeParameterDescriptor typeParameterDescriptor = (TypeParameterDescriptor) super.getOriginal();
        if (typeParameterDescriptor == null) {
            a(11);
        }
        return typeParameterDescriptor;
    }
}
