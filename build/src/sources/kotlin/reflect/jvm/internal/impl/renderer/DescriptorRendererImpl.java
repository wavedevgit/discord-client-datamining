package kotlin.reflect.jvm.internal.impl.renderer;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.FunctionTypesKt;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithSource;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.FieldDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageViewDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PossiblyInnerType;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyAccessorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyGetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertySetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterUtilsKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationUseSiteTarget;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.name.SpecialNames;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.constants.AnnotationValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ArrayValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.KClassValue;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.AbbreviatedType;
import kotlin.reflect.jvm.internal.impl.types.DefinitelyNotNullType;
import kotlin.reflect.jvm.internal.impl.types.FlexibleType;
import kotlin.reflect.jvm.internal.impl.types.IntersectionTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.SpecialTypesKt;
import kotlin.reflect.jvm.internal.impl.types.StubTypeForBuilderInference;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.WrappedType;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorType;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import kotlin.reflect.jvm.internal.impl.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt;
import kotlin.text.CharsKt;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nDescriptorRendererImpl.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DescriptorRendererImpl.kt\norg/jetbrains/kotlin/renderer/DescriptorRendererImpl\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,1225:1\n152#1,10:1226\n152#1,10:1236\n2746#2,3:1246\n774#2:1249\n865#2,2:1250\n1563#2:1252\n1634#2,3:1253\n774#2:1256\n865#2,2:1257\n1563#2:1259\n1634#2,3:1260\n1563#2:1263\n1634#2,3:1264\n1617#2,9:1268\n1869#2:1277\n1870#2:1279\n1626#2:1280\n2746#2,3:1281\n2746#2,3:1284\n774#2:1287\n865#2,2:1288\n1634#2,3:1290\n1#3:1267\n1#3:1278\n*S KotlinDebug\n*F\n+ 1 DescriptorRendererImpl.kt\norg/jetbrains/kotlin/renderer/DescriptorRendererImpl\n*L\n138#1:1226,10\n145#1:1236,10\n200#1:1246,3\n501#1:1249\n501#1:1250,2\n502#1:1252\n502#1:1253,3\n504#1:1256\n504#1:1257,2\n504#1:1259\n504#1:1260,3\n506#1:1263\n506#1:1264,3\n515#1:1268,9\n515#1:1277\n515#1:1279\n515#1:1280\n606#1:1281,3\n608#1:1284,3\n824#1:1287\n824#1:1288,2\n847#1:1290,3\n515#1:1278\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DescriptorRendererImpl extends DescriptorRenderer implements DescriptorRendererOptions {

    /* renamed from: a  reason: collision with root package name */
    private final DescriptorRendererOptionsImpl f34079a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f34080b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class RenderDeclarationDescriptorVisitor implements DeclarationDescriptorVisitor {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[PropertyAccessorRenderingPolicy.values().length];
                try {
                    iArr[PropertyAccessorRenderingPolicy.PRETTY.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[PropertyAccessorRenderingPolicy.DEBUG.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[PropertyAccessorRenderingPolicy.NONE.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public RenderDeclarationDescriptorVisitor() {
        }

        private final void g(PropertyAccessorDescriptor propertyAccessorDescriptor, StringBuilder sb2, String str) {
            int i10 = WhenMappings.$EnumSwitchMapping$0[DescriptorRendererImpl.this.getPropertyAccessorRenderingPolicy().ordinal()];
            if (i10 == 1) {
                DescriptorRendererImpl.this.R(propertyAccessorDescriptor, sb2);
                sb2.append(str + " for ");
                DescriptorRendererImpl descriptorRendererImpl = DescriptorRendererImpl.this;
                PropertyDescriptor correspondingProperty = propertyAccessorDescriptor.getCorrespondingProperty();
                Intrinsics.checkNotNullExpressionValue(correspondingProperty, "getCorrespondingProperty(...)");
                descriptorRendererImpl.A0(correspondingProperty, sb2);
            } else if (i10 != 2) {
                if (i10 == 3) {
                    return;
                }
                throw new qr.p();
            } else {
                c(propertyAccessorDescriptor, sb2);
            }
        }

        public void a(ClassDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.X(descriptor, builder);
        }

        public void b(ConstructorDescriptor constructorDescriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(constructorDescriptor, "constructorDescriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.b0(constructorDescriptor, builder);
        }

        public void c(FunctionDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.j0(descriptor, builder);
        }

        public void d(ModuleDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.s0(descriptor, builder, true);
        }

        public void e(PackageFragmentDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.w0(descriptor, builder);
        }

        public void f(PackageViewDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.y0(descriptor, builder);
        }

        public void h(PropertyDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.A0(descriptor, builder);
        }

        public void i(PropertyGetterDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            g(descriptor, builder, "getter");
        }

        public void j(PropertySetterDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            g(descriptor, builder, "setter");
        }

        public void k(ReceiverParameterDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            builder.append(descriptor.getName());
        }

        public void l(TypeAliasDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.J0(descriptor, builder);
        }

        public void m(TypeParameterDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.N0(descriptor, builder, true);
        }

        public void n(ValueParameterDescriptor descriptor, StringBuilder builder) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(builder, "builder");
            DescriptorRendererImpl.this.S0(descriptor, true, builder, true);
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitClassDescriptor(ClassDescriptor classDescriptor, Object obj) {
            a(classDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitConstructorDescriptor(ConstructorDescriptor constructorDescriptor, Object obj) {
            b(constructorDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitFunctionDescriptor(FunctionDescriptor functionDescriptor, Object obj) {
            c(functionDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitModuleDeclaration(ModuleDescriptor moduleDescriptor, Object obj) {
            d(moduleDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitPackageFragmentDescriptor(PackageFragmentDescriptor packageFragmentDescriptor, Object obj) {
            e(packageFragmentDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitPackageViewDescriptor(PackageViewDescriptor packageViewDescriptor, Object obj) {
            f(packageViewDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitPropertyDescriptor(PropertyDescriptor propertyDescriptor, Object obj) {
            h(propertyDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitPropertyGetterDescriptor(PropertyGetterDescriptor propertyGetterDescriptor, Object obj) {
            i(propertyGetterDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitPropertySetterDescriptor(PropertySetterDescriptor propertySetterDescriptor, Object obj) {
            j(propertySetterDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitReceiverParameterDescriptor(ReceiverParameterDescriptor receiverParameterDescriptor, Object obj) {
            k(receiverParameterDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitTypeAliasDescriptor(TypeAliasDescriptor typeAliasDescriptor, Object obj) {
            l(typeAliasDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitTypeParameterDescriptor(TypeParameterDescriptor typeParameterDescriptor, Object obj) {
            m(typeParameterDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
        public /* bridge */ /* synthetic */ Object visitValueParameterDescriptor(ValueParameterDescriptor valueParameterDescriptor, Object obj) {
            n(valueParameterDescriptor, (StringBuilder) obj);
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[RenderingFormat.values().length];
            try {
                iArr[RenderingFormat.PLAIN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[RenderingFormat.HTML.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[ParameterNameRenderingPolicy.values().length];
            try {
                iArr2[ParameterNameRenderingPolicy.ALL.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[ParameterNameRenderingPolicy.ONLY_NON_SYNTHESIZED.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[ParameterNameRenderingPolicy.NONE.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    public DescriptorRendererImpl(@NotNull DescriptorRendererOptionsImpl options) {
        Intrinsics.checkNotNullParameter(options, "options");
        this.f34079a = options;
        options.isLocked();
        this.f34080b = qr.l.a(new l(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void A0(PropertyDescriptor propertyDescriptor, StringBuilder sb2) {
        PropertyDescriptor propertyDescriptor2;
        StringBuilder sb3;
        boolean z10;
        if (!getStartFromName()) {
            if (!getStartFromDeclarationKeyword()) {
                List<ReceiverParameterDescriptor> contextReceiverParameters = propertyDescriptor.getContextReceiverParameters();
                Intrinsics.checkNotNullExpressionValue(contextReceiverParameters, "getContextReceiverParameters(...)");
                d0(contextReceiverParameters, sb2);
                B0(propertyDescriptor, sb2);
                DescriptorVisibility visibility = propertyDescriptor.getVisibility();
                Intrinsics.checkNotNullExpressionValue(visibility, "getVisibility(...)");
                V0(visibility, sb2);
                boolean z11 = false;
                if (getModifiers().contains(DescriptorRendererModifier.CONST) && propertyDescriptor.isConst()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                r0(sb2, z10, "const");
                o0(propertyDescriptor, sb2);
                q0(propertyDescriptor, sb2);
                v0(propertyDescriptor, sb2);
                if (getModifiers().contains(DescriptorRendererModifier.LATEINIT) && propertyDescriptor.isLateInit()) {
                    z11 = true;
                }
                r0(sb2, z11, "lateinit");
                n0(propertyDescriptor, sb2);
            }
            propertyDescriptor2 = propertyDescriptor;
            sb3 = sb2;
            R0(this, propertyDescriptor2, sb3, false, 4, null);
            List<TypeParameterDescriptor> typeParameters = propertyDescriptor2.getTypeParameters();
            Intrinsics.checkNotNullExpressionValue(typeParameters, "getTypeParameters(...)");
            P0(typeParameters, sb3, true);
            C0(propertyDescriptor2, sb3);
        } else {
            propertyDescriptor2 = propertyDescriptor;
            sb3 = sb2;
        }
        s0(propertyDescriptor2, sb3, true);
        sb3.append(": ");
        KotlinType type = propertyDescriptor2.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        sb3.append(renderType(type));
        D0(propertyDescriptor2, sb3);
        l0(propertyDescriptor2, sb3);
        List<TypeParameterDescriptor> typeParameters2 = propertyDescriptor2.getTypeParameters();
        Intrinsics.checkNotNullExpressionValue(typeParameters2, "getTypeParameters(...)");
        W0(typeParameters2, sb3);
    }

    private final void B0(PropertyDescriptor propertyDescriptor, StringBuilder sb2) {
        if (getModifiers().contains(DescriptorRendererModifier.ANNOTATIONS)) {
            V(this, sb2, propertyDescriptor, null, 2, null);
            FieldDescriptor backingField = propertyDescriptor.getBackingField();
            if (backingField != null) {
                U(sb2, backingField, AnnotationUseSiteTarget.FIELD);
            }
            FieldDescriptor delegateField = propertyDescriptor.getDelegateField();
            if (delegateField != null) {
                U(sb2, delegateField, AnnotationUseSiteTarget.PROPERTY_DELEGATE_FIELD);
            }
            if (getPropertyAccessorRenderingPolicy() == PropertyAccessorRenderingPolicy.NONE) {
                PropertyGetterDescriptor getter = propertyDescriptor.getGetter();
                if (getter != null) {
                    U(sb2, getter, AnnotationUseSiteTarget.PROPERTY_GETTER);
                }
                PropertySetterDescriptor setter = propertyDescriptor.getSetter();
                if (setter != null) {
                    U(sb2, setter, AnnotationUseSiteTarget.PROPERTY_SETTER);
                    List<ValueParameterDescriptor> valueParameters = setter.getValueParameters();
                    Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
                    ValueParameterDescriptor valueParameterDescriptor = (ValueParameterDescriptor) CollectionsKt.Q0(valueParameters);
                    Intrinsics.checkNotNull(valueParameterDescriptor);
                    U(sb2, valueParameterDescriptor, AnnotationUseSiteTarget.SETTER_PARAMETER);
                }
            }
        }
    }

    private final void C(StringBuilder sb2, DeclarationDescriptor declarationDescriptor) {
        DeclarationDescriptor containingDeclaration;
        String renderFqName;
        String name;
        if (!(declarationDescriptor instanceof PackageFragmentDescriptor) && !(declarationDescriptor instanceof PackageViewDescriptor) && (containingDeclaration = declarationDescriptor.getContainingDeclaration()) != null && !(containingDeclaration instanceof ModuleDescriptor)) {
            sb2.append(" ");
            sb2.append(renderMessage("defined in"));
            sb2.append(" ");
            FqNameUnsafe fqName = DescriptorUtils.getFqName(containingDeclaration);
            Intrinsics.checkNotNullExpressionValue(fqName, "getFqName(...)");
            if (fqName.isRoot()) {
                renderFqName = "root package";
            } else {
                renderFqName = renderFqName(fqName);
            }
            sb2.append(renderFqName);
            if (getWithSourceFileForTopLevel() && (containingDeclaration instanceof PackageFragmentDescriptor) && (declarationDescriptor instanceof DeclarationDescriptorWithSource) && (name = ((DeclarationDescriptorWithSource) declarationDescriptor).getSource().getContainingFile().getName()) != null) {
                sb2.append(" ");
                sb2.append(renderMessage("in file"));
                sb2.append(" ");
                sb2.append(name);
            }
        }
    }

    private final void C0(CallableDescriptor callableDescriptor, StringBuilder sb2) {
        ReceiverParameterDescriptor extensionReceiverParameter = callableDescriptor.getExtensionReceiverParameter();
        if (extensionReceiverParameter != null) {
            U(sb2, extensionReceiverParameter, AnnotationUseSiteTarget.RECEIVER);
            KotlinType type = extensionReceiverParameter.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            sb2.append(h0(type));
            sb2.append(".");
        }
    }

    private final void D(StringBuilder sb2, List list) {
        CollectionsKt.v0(list, sb2, ", ", null, null, 0, null, new n(this), 60, null);
    }

    private final void D0(CallableDescriptor callableDescriptor, StringBuilder sb2) {
        ReceiverParameterDescriptor extensionReceiverParameter;
        if (getReceiverAfterName() && (extensionReceiverParameter = callableDescriptor.getExtensionReceiverParameter()) != null) {
            sb2.append(" on ");
            KotlinType type = extensionReceiverParameter.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            sb2.append(renderType(type));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence E(DescriptorRendererImpl descriptorRendererImpl, TypeProjection it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it.isStarProjection()) {
            return "*";
        }
        KotlinType type = it.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        String renderType = descriptorRendererImpl.renderType(type);
        if (it.getProjectionKind() == Variance.INVARIANT) {
            return renderType;
        }
        return it.getProjectionKind() + ' ' + renderType;
    }

    private final void E0(StringBuilder sb2, SimpleType simpleType) {
        if (!Intrinsics.areEqual(simpleType, TypeUtils.CANNOT_INFER_FUNCTION_PARAM_TYPE) && !TypeUtils.isDontCarePlaceholder(simpleType)) {
            if (ErrorUtils.isUninferredTypeVariable(simpleType)) {
                if (getUninferredTypeParameterAsName()) {
                    TypeConstructor constructor = simpleType.getConstructor();
                    Intrinsics.checkNotNull(constructor, "null cannot be cast to non-null type org.jetbrains.kotlin.types.error.ErrorTypeConstructor");
                    sb2.append(f0(((ErrorTypeConstructor) constructor).getParam(0)));
                    return;
                }
                sb2.append("???");
                return;
            } else if (KotlinTypeKt.isError(simpleType)) {
                e0(sb2, simpleType);
                return;
            } else if (X0(simpleType)) {
                k0(sb2, simpleType);
                return;
            } else {
                e0(sb2, simpleType);
                return;
            }
        }
        sb2.append("???");
    }

    private final String F() {
        int i10 = WhenMappings.$EnumSwitchMapping$0[getTextFormat().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "&rarr;";
            }
            throw new qr.p();
        }
        return G("->");
    }

    private final void F0(StringBuilder sb2) {
        int length = sb2.length();
        if (length != 0 && sb2.charAt(length - 1) == ' ') {
            return;
        }
        sb2.append(' ');
    }

    private final String G(String str) {
        return getTextFormat().escape(str);
    }

    private final void G0(ClassDescriptor classDescriptor, StringBuilder sb2) {
        if (!getWithoutSuperTypes() && !KotlinBuiltIns.isNothing(classDescriptor.getDefaultType())) {
            Collection<KotlinType> supertypes = classDescriptor.getTypeConstructor().getSupertypes();
            Intrinsics.checkNotNullExpressionValue(supertypes, "getSupertypes(...)");
            if (!supertypes.isEmpty()) {
                if (supertypes.size() != 1 || !KotlinBuiltIns.isAnyOrNullableAny(supertypes.iterator().next())) {
                    F0(sb2);
                    sb2.append(": ");
                    CollectionsKt.v0(supertypes, sb2, ", ", null, null, 0, null, new p(this), 60, null);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DescriptorRendererImpl H(DescriptorRendererImpl descriptorRendererImpl) {
        DescriptorRenderer withOptions = descriptorRendererImpl.withOptions(q.f34137d);
        Intrinsics.checkNotNull(withOptions, "null cannot be cast to non-null type org.jetbrains.kotlin.renderer.DescriptorRendererImpl");
        return (DescriptorRendererImpl) withOptions;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence H0(DescriptorRendererImpl descriptorRendererImpl, KotlinType kotlinType) {
        Intrinsics.checkNotNull(kotlinType);
        return descriptorRendererImpl.renderType(kotlinType);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I(DescriptorRendererOptions withOptions) {
        Intrinsics.checkNotNullParameter(withOptions, "$this$withOptions");
        withOptions.setExcludedTypeAnnotationClasses(x0.l(withOptions.getExcludedTypeAnnotationClasses(), CollectionsKt.o(StandardNames.FqNames.extensionFunctionType, StandardNames.FqNames.contextFunctionTypeParams)));
        return Unit.f32056a;
    }

    private final void I0(FunctionDescriptor functionDescriptor, StringBuilder sb2) {
        r0(sb2, functionDescriptor.isSuspend(), "suspend");
    }

    private final DescriptorRendererImpl J() {
        return (DescriptorRendererImpl) this.f34080b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void J0(TypeAliasDescriptor typeAliasDescriptor, StringBuilder sb2) {
        V(this, sb2, typeAliasDescriptor, null, 2, null);
        DescriptorVisibility visibility = typeAliasDescriptor.getVisibility();
        Intrinsics.checkNotNullExpressionValue(visibility, "getVisibility(...)");
        V0(visibility, sb2);
        o0(typeAliasDescriptor, sb2);
        sb2.append(m0("typealias"));
        sb2.append(" ");
        s0(typeAliasDescriptor, sb2, true);
        List<TypeParameterDescriptor> declaredTypeParameters = typeAliasDescriptor.getDeclaredTypeParameters();
        Intrinsics.checkNotNullExpressionValue(declaredTypeParameters, "getDeclaredTypeParameters(...)");
        P0(declaredTypeParameters, sb2, false);
        W(typeAliasDescriptor, sb2);
        sb2.append(" = ");
        sb2.append(renderType(typeAliasDescriptor.getUnderlyingType()));
    }

    private final String K() {
        return G(">");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object K0(KotlinType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof StubTypeForBuilderInference) {
            return ((StubTypeForBuilderInference) it).getOriginalTypeVariable();
        }
        return it;
    }

    private final boolean L(KotlinType kotlinType) {
        if (!FunctionTypesKt.isSuspendFunctionType(kotlinType) && kotlinType.getAnnotations().isEmpty()) {
            return false;
        }
        return true;
    }

    private final void L0(StringBuilder sb2, KotlinType kotlinType, TypeConstructor typeConstructor) {
        PossiblyInnerType buildPossiblyInnerType = TypeParameterUtilsKt.buildPossiblyInnerType(kotlinType);
        if (buildPossiblyInnerType == null) {
            sb2.append(renderTypeConstructor(typeConstructor));
            sb2.append(renderTypeArguments(kotlinType.getArguments()));
            return;
        }
        z0(sb2, buildPossiblyInnerType);
    }

    private final Modality M(MemberDescriptor memberDescriptor) {
        ClassDescriptor classDescriptor;
        if (memberDescriptor instanceof ClassDescriptor) {
            if (((ClassDescriptor) memberDescriptor).getKind() == ClassKind.INTERFACE) {
                return Modality.ABSTRACT;
            }
            return Modality.FINAL;
        }
        DeclarationDescriptor containingDeclaration = memberDescriptor.getContainingDeclaration();
        if (containingDeclaration instanceof ClassDescriptor) {
            classDescriptor = (ClassDescriptor) containingDeclaration;
        } else {
            classDescriptor = null;
        }
        if (classDescriptor == null) {
            return Modality.FINAL;
        }
        if (!(memberDescriptor instanceof CallableMemberDescriptor)) {
            return Modality.FINAL;
        }
        CallableMemberDescriptor callableMemberDescriptor = (CallableMemberDescriptor) memberDescriptor;
        Collection<? extends CallableMemberDescriptor> overriddenDescriptors = callableMemberDescriptor.getOverriddenDescriptors();
        Intrinsics.checkNotNullExpressionValue(overriddenDescriptors, "getOverriddenDescriptors(...)");
        if (!overriddenDescriptors.isEmpty() && classDescriptor.getModality() != Modality.FINAL) {
            return Modality.OPEN;
        }
        if (classDescriptor.getKind() == ClassKind.INTERFACE && !Intrinsics.areEqual(callableMemberDescriptor.getVisibility(), DescriptorVisibilities.PRIVATE)) {
            Modality modality = callableMemberDescriptor.getModality();
            Modality modality2 = Modality.ABSTRACT;
            if (modality == modality2) {
                return modality2;
            }
            return Modality.OPEN;
        }
        return Modality.FINAL;
    }

    static /* synthetic */ void M0(DescriptorRendererImpl descriptorRendererImpl, StringBuilder sb2, KotlinType kotlinType, TypeConstructor typeConstructor, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            typeConstructor = kotlinType.getConstructor();
        }
        descriptorRendererImpl.L0(sb2, kotlinType, typeConstructor);
    }

    private final boolean N(AnnotationDescriptor annotationDescriptor) {
        return Intrinsics.areEqual(annotationDescriptor.getFqName(), StandardNames.FqNames.parameterName);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void N0(TypeParameterDescriptor typeParameterDescriptor, StringBuilder sb2, boolean z10) {
        boolean z11;
        if (z10) {
            sb2.append(O());
        }
        if (getVerbose()) {
            sb2.append("/*");
            sb2.append(typeParameterDescriptor.getIndex());
            sb2.append("*/ ");
        }
        r0(sb2, typeParameterDescriptor.isReified(), "reified");
        String label = typeParameterDescriptor.getVariance().getLabel();
        boolean z12 = true;
        if (label.length() > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        r0(sb2, z11, label);
        V(this, sb2, typeParameterDescriptor, null, 2, null);
        s0(typeParameterDescriptor, sb2, z10);
        int size = typeParameterDescriptor.getUpperBounds().size();
        if ((size > 1 && !z10) || size == 1) {
            KotlinType next = typeParameterDescriptor.getUpperBounds().iterator().next();
            if (!KotlinBuiltIns.isDefaultBound(next)) {
                sb2.append(" : ");
                Intrinsics.checkNotNull(next);
                sb2.append(renderType(next));
            }
        } else if (z10) {
            for (KotlinType kotlinType : typeParameterDescriptor.getUpperBounds()) {
                if (!KotlinBuiltIns.isDefaultBound(kotlinType)) {
                    if (z12) {
                        sb2.append(" : ");
                    } else {
                        sb2.append(" & ");
                    }
                    Intrinsics.checkNotNull(kotlinType);
                    sb2.append(renderType(kotlinType));
                    z12 = false;
                }
            }
        }
        if (z10) {
            sb2.append(K());
        }
    }

    private final String O() {
        return G("<");
    }

    private final void O0(StringBuilder sb2, List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            N0((TypeParameterDescriptor) it.next(), sb2, false);
            if (it.hasNext()) {
                sb2.append(", ");
            }
        }
    }

    private final boolean P(CallableMemberDescriptor callableMemberDescriptor) {
        return !callableMemberDescriptor.getOverriddenDescriptors().isEmpty();
    }

    private final void P0(List list, StringBuilder sb2, boolean z10) {
        if (!getWithoutTypeParameters() && !list.isEmpty()) {
            sb2.append(O());
            O0(sb2, list);
            sb2.append(K());
            if (z10) {
                sb2.append(" ");
            }
        }
    }

    private final void Q(StringBuilder sb2, AbbreviatedType abbreviatedType) {
        RenderingFormat textFormat = getTextFormat();
        RenderingFormat renderingFormat = RenderingFormat.HTML;
        if (textFormat == renderingFormat) {
            sb2.append("<font color=\"808080\"><i>");
        }
        sb2.append(" /* ");
        sb2.append("from: ");
        u0(sb2, abbreviatedType.getAbbreviation());
        sb2.append(" */");
        if (getTextFormat() == renderingFormat) {
            sb2.append("</i></font>");
        }
    }

    private final void Q0(VariableDescriptor variableDescriptor, StringBuilder sb2, boolean z10) {
        String str;
        if (!z10 && (variableDescriptor instanceof ValueParameterDescriptor)) {
            return;
        }
        if (variableDescriptor.isVar()) {
            str = "var";
        } else {
            str = "val";
        }
        sb2.append(m0(str));
        sb2.append(" ");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(PropertyAccessorDescriptor propertyAccessorDescriptor, StringBuilder sb2) {
        o0(propertyAccessorDescriptor, sb2);
    }

    static /* synthetic */ void R0(DescriptorRendererImpl descriptorRendererImpl, VariableDescriptor variableDescriptor, StringBuilder sb2, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        descriptorRendererImpl.Q0(variableDescriptor, sb2, z10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:13:0x0037, code lost:
        if (getAlwaysRenderModifiers() != false) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x006f, code lost:
        if (getAlwaysRenderModifiers() != false) goto L28;
     */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0042  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void S(kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor r6, java.lang.StringBuilder r7) {
        /*
            r5 = this;
            boolean r0 = r6.isOperator()
            r1 = 0
            r2 = 1
            java.lang.String r3 = "getOverriddenDescriptors(...)"
            if (r0 == 0) goto L3b
            java.util.Collection r0 = r6.getOverriddenDescriptors()
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r3)
            java.lang.Iterable r0 = (java.lang.Iterable) r0
            r4 = r0
            java.util.Collection r4 = (java.util.Collection) r4
            boolean r4 = r4.isEmpty()
            if (r4 == 0) goto L1d
            goto L39
        L1d:
            java.util.Iterator r0 = r0.iterator()
        L21:
            boolean r4 = r0.hasNext()
            if (r4 == 0) goto L39
            java.lang.Object r4 = r0.next()
            kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor r4 = (kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor) r4
            boolean r4 = r4.isOperator()
            if (r4 == 0) goto L21
            boolean r0 = r5.getAlwaysRenderModifiers()
            if (r0 == 0) goto L3b
        L39:
            r0 = r2
            goto L3c
        L3b:
            r0 = r1
        L3c:
            boolean r4 = r6.isInfix()
            if (r4 == 0) goto L72
            java.util.Collection r4 = r6.getOverriddenDescriptors()
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r4, r3)
            java.lang.Iterable r4 = (java.lang.Iterable) r4
            r3 = r4
            java.util.Collection r3 = (java.util.Collection) r3
            boolean r3 = r3.isEmpty()
            if (r3 == 0) goto L55
            goto L71
        L55:
            java.util.Iterator r3 = r4.iterator()
        L59:
            boolean r4 = r3.hasNext()
            if (r4 == 0) goto L71
            java.lang.Object r4 = r3.next()
            kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor r4 = (kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor) r4
            boolean r4 = r4.isInfix()
            if (r4 == 0) goto L59
            boolean r3 = r5.getAlwaysRenderModifiers()
            if (r3 == 0) goto L72
        L71:
            r1 = r2
        L72:
            boolean r2 = r6.isTailrec()
            java.lang.String r3 = "tailrec"
            r5.r0(r7, r2, r3)
            r5.I0(r6, r7)
            boolean r6 = r6.isInline()
            java.lang.String r2 = "inline"
            r5.r0(r7, r6, r2)
            java.lang.String r6 = "infix"
            r5.r0(r7, r1, r6)
            java.lang.String r6 = "operator"
            r5.r0(r7, r0, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererImpl.S(kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor, java.lang.StringBuilder):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0063  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x008e  */
    /* JADX WARN: Removed duplicated region for block: B:31:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void S0(kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor r9, boolean r10, java.lang.StringBuilder r11, boolean r12) {
        /*
            r8 = this;
            if (r12 == 0) goto L10
            java.lang.String r2 = "value-parameter"
            java.lang.String r2 = r8.m0(r2)
            r11.append(r2)
            java.lang.String r2 = " "
            r11.append(r2)
        L10:
            boolean r2 = r8.getVerbose()
            if (r2 == 0) goto L27
            java.lang.String r2 = "/*"
            r11.append(r2)
            int r2 = r9.getIndex()
            r11.append(r2)
        */
        //  java.lang.String r2 = "*/ "
        /*
            r11.append(r2)
        L27:
            r4 = 2
            r5 = 0
            r3 = 0
            r0 = r8
            r2 = r9
            r1 = r11
            V(r0, r1, r2, r3, r4, r5)
            boolean r2 = r9.isCrossinline()
            java.lang.String r3 = "crossinline"
            r8.r0(r11, r2, r3)
            boolean r2 = r9.isNoinline()
            java.lang.String r3 = "noinline"
            r8.r0(r11, r2, r3)
            boolean r2 = r8.getRenderPrimaryConstructorParametersAsProperties()
            r6 = 0
            r7 = 1
            if (r2 == 0) goto L60
            kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor r2 = r9.getContainingDeclaration()
            boolean r3 = r2 instanceof kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor
            if (r3 == 0) goto L55
            kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor r2 = (kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor) r2
            goto L56
        L55:
            r2 = 0
        L56:
            if (r2 == 0) goto L60
            boolean r2 = r2.isPrimary()
            if (r2 != r7) goto L60
            r5 = r7
            goto L61
        L60:
            r5 = r6
        L61:
            if (r5 == 0) goto L6c
            boolean r2 = r8.getActualPropertiesInPrimaryConstructor()
            java.lang.String r3 = "actual"
            r8.r0(r11, r2, r3)
        L6c:
            r0 = r8
            r1 = r9
            r2 = r10
            r3 = r11
            r4 = r12
            r0.U0(r1, r2, r3, r4, r5)
            kotlin.jvm.functions.Function1 r0 = r8.getDefaultParameterValueRenderer()
            if (r0 == 0) goto L8c
            boolean r0 = r8.getDebugMode()
            if (r0 == 0) goto L85
            boolean r0 = r9.declaresDefaultValue()
            goto L89
        L85:
            boolean r0 = kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt.declaresOrInheritsDefaultValue(r9)
        L89:
            if (r0 == 0) goto L8c
            r6 = r7
        L8c:
            if (r6 == 0) goto Laf
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r2 = " = "
            r0.append(r2)
            kotlin.jvm.functions.Function1 r2 = r8.getDefaultParameterValueRenderer()
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
            java.lang.Object r2 = r2.invoke(r9)
            java.lang.String r2 = (java.lang.String) r2
            r0.append(r2)
            java.lang.String r0 = r0.toString()
            r11.append(r0)
        Laf:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererImpl.S0(kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor, boolean, java.lang.StringBuilder, boolean):void");
    }

    private final List T(AnnotationDescriptor annotationDescriptor) {
        ClassDescriptor classDescriptor;
        String str;
        ClassConstructorDescriptor mo1194getUnsubstitutedPrimaryConstructor;
        List<ValueParameterDescriptor> valueParameters;
        Map<Name, ConstantValue<?>> allValueArguments = annotationDescriptor.getAllValueArguments();
        List list = null;
        if (getRenderDefaultAnnotationArguments()) {
            classDescriptor = DescriptorUtilsKt.getAnnotationClass(annotationDescriptor);
        } else {
            classDescriptor = null;
        }
        if (classDescriptor != null && (mo1194getUnsubstitutedPrimaryConstructor = classDescriptor.mo1194getUnsubstitutedPrimaryConstructor()) != null && (valueParameters = mo1194getUnsubstitutedPrimaryConstructor.getValueParameters()) != null) {
            ArrayList<ValueParameterDescriptor> arrayList = new ArrayList();
            for (Object obj : valueParameters) {
                if (((ValueParameterDescriptor) obj).declaresDefaultValue()) {
                    arrayList.add(obj);
                }
            }
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (ValueParameterDescriptor valueParameterDescriptor : arrayList) {
                arrayList2.add(valueParameterDescriptor.getName());
            }
            list = arrayList2;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        ArrayList arrayList3 = new ArrayList();
        for (Object obj2 : list) {
            if (!allValueArguments.containsKey((Name) obj2)) {
                arrayList3.add(obj2);
            }
        }
        ArrayList arrayList4 = new ArrayList(CollectionsKt.w(arrayList3, 10));
        Iterator it = arrayList3.iterator();
        while (it.hasNext()) {
            arrayList4.add(((Name) it.next()).asString() + " = ...");
        }
        Set<Map.Entry<Name, ConstantValue<?>>> entrySet = allValueArguments.entrySet();
        ArrayList arrayList5 = new ArrayList(CollectionsKt.w(entrySet, 10));
        Iterator<T> it2 = entrySet.iterator();
        while (it2.hasNext()) {
            Map.Entry entry = (Map.Entry) it2.next();
            Name name = (Name) entry.getKey();
            ConstantValue constantValue = (ConstantValue) entry.getValue();
            StringBuilder sb2 = new StringBuilder();
            sb2.append(name.asString());
            sb2.append(" = ");
            if (!list.contains(name)) {
                str = a0(constantValue);
            } else {
                str = "...";
            }
            sb2.append(str);
            arrayList5.add(sb2.toString());
        }
        return CollectionsKt.U0(CollectionsKt.L0(arrayList4, arrayList5));
    }

    private final void T0(Collection collection, boolean z10, StringBuilder sb2) {
        boolean Y0 = Y0(z10);
        int size = collection.size();
        getValueParametersHandler().appendBeforeValueParameters(size, sb2);
        Iterator it = collection.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            ValueParameterDescriptor valueParameterDescriptor = (ValueParameterDescriptor) it.next();
            getValueParametersHandler().appendBeforeValueParameter(valueParameterDescriptor, i10, size, sb2);
            S0(valueParameterDescriptor, Y0, sb2, false);
            getValueParametersHandler().appendAfterValueParameter(valueParameterDescriptor, i10, size, sb2);
            i10++;
        }
        getValueParametersHandler().appendAfterValueParameters(size, sb2);
    }

    private final void U(StringBuilder sb2, Annotated annotated, AnnotationUseSiteTarget annotationUseSiteTarget) {
        Set<FqName> excludedAnnotationClasses;
        if (getModifiers().contains(DescriptorRendererModifier.ANNOTATIONS)) {
            if (annotated instanceof KotlinType) {
                excludedAnnotationClasses = getExcludedTypeAnnotationClasses();
            } else {
                excludedAnnotationClasses = getExcludedAnnotationClasses();
            }
            Function1<AnnotationDescriptor, Boolean> annotationFilter = getAnnotationFilter();
            for (AnnotationDescriptor annotationDescriptor : annotated.getAnnotations()) {
                if (!CollectionsKt.d0(excludedAnnotationClasses, annotationDescriptor.getFqName()) && !N(annotationDescriptor) && (annotationFilter == null || ((Boolean) annotationFilter.invoke(annotationDescriptor)).booleanValue())) {
                    sb2.append(renderAnnotation(annotationDescriptor, annotationUseSiteTarget));
                    if (getEachAnnotationOnNewLine()) {
                        sb2.append('\n');
                    } else {
                        sb2.append(" ");
                    }
                }
            }
        }
    }

    private final void U0(VariableDescriptor variableDescriptor, boolean z10, StringBuilder sb2, boolean z11, boolean z12) {
        ValueParameterDescriptor valueParameterDescriptor;
        KotlinType kotlinType;
        boolean z13;
        KotlinType type = variableDescriptor.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        KotlinType kotlinType2 = null;
        if (variableDescriptor instanceof ValueParameterDescriptor) {
            valueParameterDescriptor = (ValueParameterDescriptor) variableDescriptor;
        } else {
            valueParameterDescriptor = null;
        }
        if (valueParameterDescriptor != null) {
            kotlinType2 = valueParameterDescriptor.getVarargElementType();
        }
        if (kotlinType2 == null) {
            kotlinType = type;
        } else {
            kotlinType = kotlinType2;
        }
        if (kotlinType2 != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        r0(sb2, z13, "vararg");
        if (z12 || (z11 && !getStartFromName())) {
            Q0(variableDescriptor, sb2, z12);
        }
        if (z10) {
            s0(variableDescriptor, sb2, z11);
            sb2.append(": ");
        }
        sb2.append(renderType(kotlinType));
        l0(variableDescriptor, sb2);
        if (getVerbose() && kotlinType2 != null) {
            sb2.append(" /*");
            sb2.append(renderType(type));
            sb2.append("*/");
        }
    }

    static /* synthetic */ void V(DescriptorRendererImpl descriptorRendererImpl, StringBuilder sb2, Annotated annotated, AnnotationUseSiteTarget annotationUseSiteTarget, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            annotationUseSiteTarget = null;
        }
        descriptorRendererImpl.U(sb2, annotated, annotationUseSiteTarget);
    }

    private final boolean V0(DescriptorVisibility descriptorVisibility, StringBuilder sb2) {
        if (!getModifiers().contains(DescriptorRendererModifier.VISIBILITY)) {
            return false;
        }
        if (getNormalizedVisibilities()) {
            descriptorVisibility = descriptorVisibility.normalize();
        }
        if (!getRenderDefaultVisibility() && Intrinsics.areEqual(descriptorVisibility, DescriptorVisibilities.DEFAULT_VISIBILITY)) {
            return false;
        }
        sb2.append(m0(descriptorVisibility.getInternalDisplayName()));
        sb2.append(" ");
        return true;
    }

    private final void W(ClassifierDescriptorWithTypeParameters classifierDescriptorWithTypeParameters, StringBuilder sb2) {
        List<TypeParameterDescriptor> declaredTypeParameters = classifierDescriptorWithTypeParameters.getDeclaredTypeParameters();
        Intrinsics.checkNotNullExpressionValue(declaredTypeParameters, "getDeclaredTypeParameters(...)");
        List<TypeParameterDescriptor> parameters = classifierDescriptorWithTypeParameters.getTypeConstructor().getParameters();
        Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
        if (getVerbose() && classifierDescriptorWithTypeParameters.isInner() && parameters.size() > declaredTypeParameters.size()) {
            sb2.append(" /*captured type parameters: ");
            O0(sb2, parameters.subList(declaredTypeParameters.size(), parameters.size()));
            sb2.append("*/");
        }
    }

    private final void W0(List list, StringBuilder sb2) {
        if (!getWithoutTypeParameters()) {
            ArrayList arrayList = new ArrayList(0);
            Iterator it = list.iterator();
            while (it.hasNext()) {
                TypeParameterDescriptor typeParameterDescriptor = (TypeParameterDescriptor) it.next();
                List<KotlinType> upperBounds = typeParameterDescriptor.getUpperBounds();
                Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
                for (KotlinType kotlinType : CollectionsKt.f0(upperBounds, 1)) {
                    StringBuilder sb3 = new StringBuilder();
                    Name name = typeParameterDescriptor.getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    sb3.append(renderName(name, false));
                    sb3.append(" : ");
                    Intrinsics.checkNotNull(kotlinType);
                    sb3.append(renderType(kotlinType));
                    arrayList.add(sb3.toString());
                }
            }
            if (!arrayList.isEmpty()) {
                sb2.append(" ");
                sb2.append(m0("where"));
                sb2.append(" ");
                CollectionsKt.v0(arrayList, sb2, ", ", null, null, 0, null, null, 124, null);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void X(ClassDescriptor classDescriptor, StringBuilder sb2) {
        boolean z10;
        ClassConstructorDescriptor mo1194getUnsubstitutedPrimaryConstructor;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        boolean z15;
        if (classDescriptor.getKind() == ClassKind.ENUM_ENTRY) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!getStartFromName()) {
            List<ReceiverParameterDescriptor> contextReceivers = classDescriptor.getContextReceivers();
            Intrinsics.checkNotNullExpressionValue(contextReceivers, "getContextReceivers(...)");
            d0(contextReceivers, sb2);
            V(this, sb2, classDescriptor, null, 2, null);
            if (!z10) {
                DescriptorVisibility visibility = classDescriptor.getVisibility();
                Intrinsics.checkNotNullExpressionValue(visibility, "getVisibility(...)");
                V0(visibility, sb2);
            }
            if ((classDescriptor.getKind() != ClassKind.INTERFACE || classDescriptor.getModality() != Modality.ABSTRACT) && (!classDescriptor.getKind().isSingleton() || classDescriptor.getModality() != Modality.FINAL)) {
                Modality modality = classDescriptor.getModality();
                Intrinsics.checkNotNullExpressionValue(modality, "getModality(...)");
                p0(modality, sb2, M(classDescriptor));
            }
            o0(classDescriptor, sb2);
            if (getModifiers().contains(DescriptorRendererModifier.INNER) && classDescriptor.isInner()) {
                z11 = true;
            } else {
                z11 = false;
            }
            r0(sb2, z11, "inner");
            if (getModifiers().contains(DescriptorRendererModifier.DATA) && classDescriptor.isData()) {
                z12 = true;
            } else {
                z12 = false;
            }
            r0(sb2, z12, "data");
            if (getModifiers().contains(DescriptorRendererModifier.INLINE) && classDescriptor.isInline()) {
                z13 = true;
            } else {
                z13 = false;
            }
            r0(sb2, z13, "inline");
            if (getModifiers().contains(DescriptorRendererModifier.VALUE) && classDescriptor.isValue()) {
                z14 = true;
            } else {
                z14 = false;
            }
            r0(sb2, z14, "value");
            if (getModifiers().contains(DescriptorRendererModifier.FUN) && classDescriptor.isFun()) {
                z15 = true;
            } else {
                z15 = false;
            }
            r0(sb2, z15, "fun");
            Y(classDescriptor, sb2);
        }
        if (!DescriptorUtils.isCompanionObject(classDescriptor)) {
            if (!getStartFromName()) {
                F0(sb2);
            }
            s0(classDescriptor, sb2, true);
        } else {
            Z(classDescriptor, sb2);
        }
        if (z10) {
            return;
        }
        List<TypeParameterDescriptor> declaredTypeParameters = classDescriptor.getDeclaredTypeParameters();
        Intrinsics.checkNotNullExpressionValue(declaredTypeParameters, "getDeclaredTypeParameters(...)");
        P0(declaredTypeParameters, sb2, false);
        W(classDescriptor, sb2);
        if (!classDescriptor.getKind().isSingleton() && getClassWithPrimaryConstructor() && (mo1194getUnsubstitutedPrimaryConstructor = classDescriptor.mo1194getUnsubstitutedPrimaryConstructor()) != null) {
            sb2.append(" ");
            V(this, sb2, mo1194getUnsubstitutedPrimaryConstructor, null, 2, null);
            DescriptorVisibility visibility2 = mo1194getUnsubstitutedPrimaryConstructor.getVisibility();
            Intrinsics.checkNotNullExpressionValue(visibility2, "getVisibility(...)");
            V0(visibility2, sb2);
            sb2.append(m0("constructor"));
            List<ValueParameterDescriptor> valueParameters = mo1194getUnsubstitutedPrimaryConstructor.getValueParameters();
            Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
            T0(valueParameters, mo1194getUnsubstitutedPrimaryConstructor.hasSynthesizedParameterNames(), sb2);
        }
        G0(classDescriptor, sb2);
        W0(declaredTypeParameters, sb2);
    }

    private final boolean X0(KotlinType kotlinType) {
        if (FunctionTypesKt.isBuiltinFunctionalType(kotlinType)) {
            List<TypeProjection> arguments = kotlinType.getArguments();
            if (!(arguments instanceof Collection) || !arguments.isEmpty()) {
                for (TypeProjection typeProjection : arguments) {
                    if (typeProjection.isStarProjection()) {
                        return false;
                    }
                }
                return true;
            }
            return true;
        }
        return false;
    }

    private final void Y(ClassDescriptor classDescriptor, StringBuilder sb2) {
        sb2.append(m0(DescriptorRenderer.Companion.getClassifierKindPrefix(classDescriptor)));
    }

    private final boolean Y0(boolean z10) {
        int i10 = WhenMappings.$EnumSwitchMapping$1[getParameterNameRenderingPolicy().ordinal()];
        if (i10 == 1) {
            return true;
        }
        if (i10 != 2) {
            if (i10 == 3) {
                return false;
            }
            throw new qr.p();
        } else if (!z10) {
            return true;
        } else {
            return false;
        }
    }

    private final void Z(DeclarationDescriptor declarationDescriptor, StringBuilder sb2) {
        if (getRenderCompanionObjectName()) {
            if (getStartFromName()) {
                sb2.append("companion object");
            }
            F0(sb2);
            DeclarationDescriptor containingDeclaration = declarationDescriptor.getContainingDeclaration();
            if (containingDeclaration != null) {
                sb2.append("of ");
                Name name = containingDeclaration.getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                sb2.append(renderName(name, false));
            }
        }
        if (!getVerbose() && Intrinsics.areEqual(declarationDescriptor.getName(), SpecialNames.DEFAULT_NAME_FOR_COMPANION_OBJECT)) {
            return;
        }
        if (!getStartFromName()) {
            F0(sb2);
        }
        Name name2 = declarationDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
        sb2.append(renderName(name2, true));
    }

    private final String a0(ConstantValue constantValue) {
        Function1<ConstantValue<?>, String> propertyConstantRenderer = this.f34079a.getPropertyConstantRenderer();
        if (propertyConstantRenderer != null) {
            return (String) propertyConstantRenderer.invoke(constantValue);
        }
        if (constantValue instanceof ArrayValue) {
            ArrayList arrayList = new ArrayList();
            Iterator<T> it = ((ArrayValue) constantValue).getValue().iterator();
            while (it.hasNext()) {
                String a02 = a0((ConstantValue) it.next());
                if (a02 != null) {
                    arrayList.add(a02);
                }
            }
            return CollectionsKt.x0(arrayList, ", ", "{", "}", 0, null, null, 56, null);
        } else if (constantValue instanceof AnnotationValue) {
            return StringsKt.B0(DescriptorRenderer.renderAnnotation$default(this, ((AnnotationValue) constantValue).getValue(), null, 2, null), "@");
        } else {
            if (constantValue instanceof KClassValue) {
                KClassValue.Value value = ((KClassValue) constantValue).getValue();
                if (value instanceof KClassValue.Value.LocalClass) {
                    return ((KClassValue.Value.LocalClass) value).getType() + "::class";
                } else if (value instanceof KClassValue.Value.NormalClass) {
                    KClassValue.Value.NormalClass normalClass = (KClassValue.Value.NormalClass) value;
                    String asString = normalClass.getClassId().asSingleFqName().asString();
                    for (int i10 = 0; i10 < normalClass.getArrayDimensions(); i10++) {
                        asString = "kotlin.Array<" + asString + '>';
                    }
                    return asString + "::class";
                } else {
                    throw new qr.p();
                }
            }
            return constantValue.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:19:0x004b  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0065  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00bb  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00d8  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x0101  */
    /* JADX WARN: Removed duplicated region for block: B:55:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void b0(kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor r18, java.lang.StringBuilder r19) {
        /*
            Method dump skipped, instructions count: 268
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererImpl.b0(kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor, java.lang.StringBuilder):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence c0(ValueParameterDescriptor valueParameterDescriptor) {
        return "";
    }

    private final void d0(List list, StringBuilder sb2) {
        if (!list.isEmpty()) {
            sb2.append("context(");
            Iterator it = list.iterator();
            int i10 = 0;
            while (it.hasNext()) {
                int i11 = i10 + 1;
                ReceiverParameterDescriptor receiverParameterDescriptor = (ReceiverParameterDescriptor) it.next();
                U(sb2, receiverParameterDescriptor, AnnotationUseSiteTarget.RECEIVER);
                KotlinType type = receiverParameterDescriptor.getType();
                Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                sb2.append(h0(type));
                if (i10 == CollectionsKt.n(list)) {
                    sb2.append(") ");
                } else {
                    sb2.append(", ");
                }
                i10 = i11;
            }
        }
    }

    private final void e0(StringBuilder sb2, KotlinType kotlinType) {
        DefinitelyNotNullType definitelyNotNullType;
        V(this, sb2, kotlinType, null, 2, null);
        boolean z10 = kotlinType instanceof DefinitelyNotNullType;
        SimpleType simpleType = null;
        if (z10) {
            definitelyNotNullType = (DefinitelyNotNullType) kotlinType;
        } else {
            definitelyNotNullType = null;
        }
        if (definitelyNotNullType != null) {
            simpleType = definitelyNotNullType.getOriginal();
        }
        if (KotlinTypeKt.isError(kotlinType)) {
            if (TypeUtilsKt.isUnresolvedType(kotlinType) && getPresentableUnresolvedTypes()) {
                sb2.append(f0(ErrorUtils.INSTANCE.unresolvedTypeAsItIs(kotlinType)));
            } else {
                if ((kotlinType instanceof ErrorType) && !getInformativeErrorType()) {
                    sb2.append(((ErrorType) kotlinType).getDebugMessage());
                } else {
                    sb2.append(kotlinType.getConstructor().toString());
                }
                sb2.append(renderTypeArguments(kotlinType.getArguments()));
            }
        } else if (kotlinType instanceof StubTypeForBuilderInference) {
            sb2.append(((StubTypeForBuilderInference) kotlinType).getOriginalTypeVariable().toString());
        } else if (simpleType instanceof StubTypeForBuilderInference) {
            sb2.append(((StubTypeForBuilderInference) simpleType).getOriginalTypeVariable().toString());
        } else {
            M0(this, sb2, kotlinType, null, 2, null);
            Unit unit = Unit.f32056a;
        }
        if (kotlinType.isMarkedNullable()) {
            sb2.append("?");
        }
        if (SpecialTypesKt.isDefinitelyNotNullType(kotlinType)) {
            sb2.append(" & Any");
        }
    }

    private final String f0(String str) {
        int i10 = WhenMappings.$EnumSwitchMapping$0[getTextFormat().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "<font color=red><b>" + str + "</b></font>";
            }
            throw new qr.p();
        }
        return str;
    }

    private final void g0(StringBuilder sb2, AbbreviatedType abbreviatedType) {
        RenderingFormat textFormat = getTextFormat();
        RenderingFormat renderingFormat = RenderingFormat.HTML;
        if (textFormat == renderingFormat) {
            sb2.append("<font color=\"808080\"><i>");
        }
        sb2.append(" /* ");
        sb2.append("= ");
        u0(sb2, abbreviatedType.getExpandedType());
        sb2.append(" */");
        if (getTextFormat() == renderingFormat) {
            sb2.append("</i></font>");
        }
    }

    private final String h0(KotlinType kotlinType) {
        String renderType = renderType(kotlinType);
        if ((X0(kotlinType) && !TypeUtils.isNullableType(kotlinType)) || (kotlinType instanceof DefinitelyNotNullType)) {
            return '(' + renderType + ')';
        }
        return renderType;
    }

    private final String i0(List list) {
        return G(RenderingUtilsKt.renderFqName(list));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void j0(FunctionDescriptor functionDescriptor, StringBuilder sb2) {
        FunctionDescriptor functionDescriptor2;
        StringBuilder sb3;
        String renderType;
        if (!getStartFromName()) {
            if (!getStartFromDeclarationKeyword()) {
                List<ReceiverParameterDescriptor> contextReceiverParameters = functionDescriptor.getContextReceiverParameters();
                Intrinsics.checkNotNullExpressionValue(contextReceiverParameters, "getContextReceiverParameters(...)");
                d0(contextReceiverParameters, sb2);
                functionDescriptor2 = functionDescriptor;
                sb3 = sb2;
                V(this, sb3, functionDescriptor2, null, 2, null);
                DescriptorVisibility visibility = functionDescriptor2.getVisibility();
                Intrinsics.checkNotNullExpressionValue(visibility, "getVisibility(...)");
                V0(visibility, sb3);
                q0(functionDescriptor2, sb3);
                if (getIncludeAdditionalModifiers()) {
                    o0(functionDescriptor2, sb3);
                }
                v0(functionDescriptor2, sb3);
                if (getIncludeAdditionalModifiers()) {
                    S(functionDescriptor2, sb3);
                } else {
                    I0(functionDescriptor2, sb3);
                }
                n0(functionDescriptor2, sb3);
                if (getVerbose()) {
                    if (functionDescriptor2.isHiddenToOvercomeSignatureClash()) {
                        sb3.append("/*isHiddenToOvercomeSignatureClash*/ ");
                    }
                    if (functionDescriptor2.isHiddenForResolutionEverywhereBesideSupercalls()) {
                        sb3.append("/*isHiddenForResolutionEverywhereBesideSupercalls*/ ");
                    }
                }
            } else {
                functionDescriptor2 = functionDescriptor;
                sb3 = sb2;
            }
            sb3.append(m0("fun"));
            sb3.append(" ");
            List<TypeParameterDescriptor> typeParameters = functionDescriptor2.getTypeParameters();
            Intrinsics.checkNotNullExpressionValue(typeParameters, "getTypeParameters(...)");
            P0(typeParameters, sb3, true);
            C0(functionDescriptor2, sb3);
        } else {
            functionDescriptor2 = functionDescriptor;
            sb3 = sb2;
        }
        s0(functionDescriptor2, sb3, true);
        List<ValueParameterDescriptor> valueParameters = functionDescriptor2.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
        T0(valueParameters, functionDescriptor2.hasSynthesizedParameterNames(), sb3);
        D0(functionDescriptor2, sb3);
        KotlinType returnType = functionDescriptor2.getReturnType();
        if (!getWithoutReturnType() && (getUnitReturnType() || returnType == null || !KotlinBuiltIns.isUnit(returnType))) {
            sb3.append(": ");
            if (returnType == null) {
                renderType = "[NULL]";
            } else {
                renderType = renderType(returnType);
            }
            sb3.append(renderType);
        }
        List<TypeParameterDescriptor> typeParameters2 = functionDescriptor2.getTypeParameters();
        Intrinsics.checkNotNullExpressionValue(typeParameters2, "getTypeParameters(...)");
        W0(typeParameters2, sb3);
    }

    private final void k0(StringBuilder sb2, KotlinType kotlinType) {
        boolean z10;
        boolean z11;
        Name name;
        boolean z12;
        int length = sb2.length();
        V(J(), sb2, kotlinType, null, 2, null);
        if (sb2.length() != length) {
            z10 = true;
        } else {
            z10 = false;
        }
        KotlinType receiverTypeFromFunctionType = FunctionTypesKt.getReceiverTypeFromFunctionType(kotlinType);
        List<KotlinType> contextReceiverTypesFromFunctionType = FunctionTypesKt.getContextReceiverTypesFromFunctionType(kotlinType);
        boolean isSuspendFunctionType = FunctionTypesKt.isSuspendFunctionType(kotlinType);
        boolean isMarkedNullable = kotlinType.isMarkedNullable();
        if (!isMarkedNullable && (!z10 || receiverTypeFromFunctionType == null)) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z11) {
            if (isSuspendFunctionType) {
                sb2.insert(length, '(');
            } else {
                if (z10) {
                    CharsKt.b(StringsKt.t1(sb2));
                    if (sb2.charAt(StringsKt.c0(sb2) - 1) != ')') {
                        sb2.insert(StringsKt.c0(sb2), "()");
                    }
                }
                sb2.append("(");
            }
        }
        if (!contextReceiverTypesFromFunctionType.isEmpty()) {
            sb2.append("context(");
            for (KotlinType kotlinType2 : contextReceiverTypesFromFunctionType.subList(0, CollectionsKt.n(contextReceiverTypesFromFunctionType))) {
                t0(sb2, kotlinType2);
                sb2.append(", ");
            }
            t0(sb2, (KotlinType) CollectionsKt.z0(contextReceiverTypesFromFunctionType));
            sb2.append(") ");
        }
        r0(sb2, isSuspendFunctionType, "suspend");
        if (receiverTypeFromFunctionType != null) {
            if ((!X0(receiverTypeFromFunctionType) || receiverTypeFromFunctionType.isMarkedNullable()) && !L(receiverTypeFromFunctionType) && !(receiverTypeFromFunctionType instanceof DefinitelyNotNullType)) {
                z12 = false;
            } else {
                z12 = true;
            }
            if (z12) {
                sb2.append("(");
            }
            t0(sb2, receiverTypeFromFunctionType);
            if (z12) {
                sb2.append(")");
            }
            sb2.append(".");
        }
        sb2.append("(");
        if (FunctionTypesKt.isBuiltinExtensionFunctionalType(kotlinType) && kotlinType.getArguments().size() <= 1) {
            sb2.append("???");
        } else {
            int i10 = 0;
            for (TypeProjection typeProjection : FunctionTypesKt.getValueParameterTypesFromFunctionType(kotlinType)) {
                int i11 = i10 + 1;
                if (i10 > 0) {
                    sb2.append(", ");
                }
                if (getParameterNamesInFunctionalTypes()) {
                    KotlinType type = typeProjection.getType();
                    Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                    name = FunctionTypesKt.extractParameterNameFromFunctionTypeArgument(type);
                } else {
                    name = null;
                }
                if (name != null) {
                    sb2.append(renderName(name, false));
                    sb2.append(": ");
                }
                sb2.append(renderTypeProjection(typeProjection));
                i10 = i11;
            }
        }
        sb2.append(") ");
        sb2.append(F());
        sb2.append(" ");
        t0(sb2, FunctionTypesKt.getReturnTypeFromFunctionType(kotlinType));
        if (z11) {
            sb2.append(")");
        }
        if (isMarkedNullable) {
            sb2.append("?");
        }
    }

    private final void l0(VariableDescriptor variableDescriptor, StringBuilder sb2) {
        ConstantValue<?> mo1196getCompileTimeInitializer;
        String a02;
        if (getIncludePropertyConstant() && (mo1196getCompileTimeInitializer = variableDescriptor.mo1196getCompileTimeInitializer()) != null && (a02 = a0(mo1196getCompileTimeInitializer)) != null) {
            sb2.append(" = ");
            sb2.append(G(a02));
        }
    }

    private final String m0(String str) {
        int i10 = WhenMappings.$EnumSwitchMapping$0[getTextFormat().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (!getBoldOnlyForNamesInHtml()) {
                    return "<b>" + str + "</b>";
                }
            } else {
                throw new qr.p();
            }
        }
        return str;
    }

    private final void n0(CallableMemberDescriptor callableMemberDescriptor, StringBuilder sb2) {
        if (getModifiers().contains(DescriptorRendererModifier.MEMBER_KIND) && getVerbose() && callableMemberDescriptor.getKind() != CallableMemberDescriptor.Kind.DECLARATION) {
            sb2.append("/*");
            sb2.append(CapitalizeDecapitalizeKt.toLowerCaseAsciiOnly(callableMemberDescriptor.getKind().name()));
            sb2.append("*/ ");
        }
    }

    private final void o0(MemberDescriptor memberDescriptor, StringBuilder sb2) {
        boolean z10;
        r0(sb2, memberDescriptor.isExternal(), "external");
        boolean z11 = false;
        if (getModifiers().contains(DescriptorRendererModifier.EXPECT) && memberDescriptor.isExpect()) {
            z10 = true;
        } else {
            z10 = false;
        }
        r0(sb2, z10, "expect");
        if (getModifiers().contains(DescriptorRendererModifier.ACTUAL) && memberDescriptor.isActual()) {
            z11 = true;
        }
        r0(sb2, z11, "actual");
    }

    private final void p0(Modality modality, StringBuilder sb2, Modality modality2) {
        if (!getRenderDefaultModality() && modality == modality2) {
            return;
        }
        r0(sb2, getModifiers().contains(DescriptorRendererModifier.MODALITY), CapitalizeDecapitalizeKt.toLowerCaseAsciiOnly(modality.name()));
    }

    private final void q0(CallableMemberDescriptor callableMemberDescriptor, StringBuilder sb2) {
        if (!DescriptorUtils.isTopLevelDeclaration(callableMemberDescriptor) || callableMemberDescriptor.getModality() != Modality.FINAL) {
            if (getOverrideRenderingPolicy() == OverrideRenderingPolicy.RENDER_OVERRIDE && callableMemberDescriptor.getModality() == Modality.OPEN && P(callableMemberDescriptor)) {
                return;
            }
            Modality modality = callableMemberDescriptor.getModality();
            Intrinsics.checkNotNullExpressionValue(modality, "getModality(...)");
            p0(modality, sb2, M(callableMemberDescriptor));
        }
    }

    private final void r0(StringBuilder sb2, boolean z10, String str) {
        if (z10) {
            sb2.append(m0(str));
            sb2.append(" ");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void s0(DeclarationDescriptor declarationDescriptor, StringBuilder sb2, boolean z10) {
        Name name = declarationDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        sb2.append(renderName(name, z10));
    }

    private final void t0(StringBuilder sb2, KotlinType kotlinType) {
        AbbreviatedType abbreviatedType;
        UnwrappedType unwrap = kotlinType.unwrap();
        if (unwrap instanceof AbbreviatedType) {
            abbreviatedType = (AbbreviatedType) unwrap;
        } else {
            abbreviatedType = null;
        }
        if (abbreviatedType != null) {
            if (getRenderTypeExpansions()) {
                u0(sb2, abbreviatedType.getExpandedType());
                if (getRenderAbbreviatedTypeComments()) {
                    Q(sb2, abbreviatedType);
                    return;
                }
                return;
            }
            u0(sb2, abbreviatedType.getAbbreviation());
            if (getRenderUnabbreviatedType()) {
                g0(sb2, abbreviatedType);
                return;
            }
            return;
        }
        u0(sb2, kotlinType);
    }

    private final void u0(StringBuilder sb2, KotlinType kotlinType) {
        if ((kotlinType instanceof WrappedType) && getDebugMode() && !((WrappedType) kotlinType).isComputed()) {
            sb2.append("<Not computed yet>");
            return;
        }
        UnwrappedType unwrap = kotlinType.unwrap();
        if (unwrap instanceof FlexibleType) {
            sb2.append(((FlexibleType) unwrap).render(this, this));
        } else if (unwrap instanceof SimpleType) {
            E0(sb2, (SimpleType) unwrap);
        } else {
            throw new qr.p();
        }
    }

    private final void v0(CallableMemberDescriptor callableMemberDescriptor, StringBuilder sb2) {
        if (getModifiers().contains(DescriptorRendererModifier.OVERRIDE) && P(callableMemberDescriptor) && getOverrideRenderingPolicy() != OverrideRenderingPolicy.RENDER_OPEN) {
            r0(sb2, true, "override");
            if (getVerbose()) {
                sb2.append("/*");
                sb2.append(callableMemberDescriptor.getOverriddenDescriptors().size());
                sb2.append("*/ ");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w0(PackageFragmentDescriptor packageFragmentDescriptor, StringBuilder sb2) {
        x0(packageFragmentDescriptor.getFqName(), "package-fragment", sb2);
        if (getDebugMode()) {
            sb2.append(" in ");
            s0(packageFragmentDescriptor.getContainingDeclaration(), sb2, false);
        }
    }

    private final void x0(FqName fqName, String str, StringBuilder sb2) {
        sb2.append(m0(str));
        String renderFqName = renderFqName(fqName.toUnsafe());
        if (renderFqName.length() > 0) {
            sb2.append(" ");
            sb2.append(renderFqName);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void y0(PackageViewDescriptor packageViewDescriptor, StringBuilder sb2) {
        x0(packageViewDescriptor.getFqName(), "package", sb2);
        if (getDebugMode()) {
            sb2.append(" in context of ");
            s0(packageViewDescriptor.getModule(), sb2, false);
        }
    }

    private final void z0(StringBuilder sb2, PossiblyInnerType possiblyInnerType) {
        PossiblyInnerType outerType = possiblyInnerType.getOuterType();
        if (outerType != null) {
            z0(sb2, outerType);
            sb2.append('.');
            Name name = possiblyInnerType.getClassifierDescriptor().getName();
            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
            sb2.append(renderName(name, false));
        } else {
            TypeConstructor typeConstructor = possiblyInnerType.getClassifierDescriptor().getTypeConstructor();
            Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
            sb2.append(renderTypeConstructor(typeConstructor));
        }
        sb2.append(renderTypeArguments(possiblyInnerType.getArguments()));
    }

    public boolean getActualPropertiesInPrimaryConstructor() {
        return this.f34079a.getActualPropertiesInPrimaryConstructor();
    }

    public boolean getAlwaysRenderModifiers() {
        return this.f34079a.getAlwaysRenderModifiers();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    @NotNull
    public AnnotationArgumentsRenderingPolicy getAnnotationArgumentsRenderingPolicy() {
        return this.f34079a.getAnnotationArgumentsRenderingPolicy();
    }

    public Function1<AnnotationDescriptor, Boolean> getAnnotationFilter() {
        return this.f34079a.getAnnotationFilter();
    }

    public boolean getBoldOnlyForNamesInHtml() {
        return this.f34079a.getBoldOnlyForNamesInHtml();
    }

    public boolean getClassWithPrimaryConstructor() {
        return this.f34079a.getClassWithPrimaryConstructor();
    }

    @NotNull
    public ClassifierNamePolicy getClassifierNamePolicy() {
        return this.f34079a.getClassifierNamePolicy();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public boolean getDebugMode() {
        return this.f34079a.getDebugMode();
    }

    public Function1<ValueParameterDescriptor, String> getDefaultParameterValueRenderer() {
        return this.f34079a.getDefaultParameterValueRenderer();
    }

    public boolean getEachAnnotationOnNewLine() {
        return this.f34079a.getEachAnnotationOnNewLine();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public boolean getEnhancedTypes() {
        return this.f34079a.getEnhancedTypes();
    }

    @NotNull
    public Set<FqName> getExcludedAnnotationClasses() {
        return this.f34079a.getExcludedAnnotationClasses();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    @NotNull
    public Set<FqName> getExcludedTypeAnnotationClasses() {
        return this.f34079a.getExcludedTypeAnnotationClasses();
    }

    public boolean getIncludeAdditionalModifiers() {
        return this.f34079a.getIncludeAdditionalModifiers();
    }

    public boolean getIncludeAnnotationArguments() {
        return this.f34079a.getIncludeAnnotationArguments();
    }

    public boolean getIncludeEmptyAnnotationArguments() {
        return this.f34079a.getIncludeEmptyAnnotationArguments();
    }

    public boolean getIncludePropertyConstant() {
        return this.f34079a.getIncludePropertyConstant();
    }

    public boolean getInformativeErrorType() {
        return this.f34079a.getInformativeErrorType();
    }

    @NotNull
    public Set<DescriptorRendererModifier> getModifiers() {
        return this.f34079a.getModifiers();
    }

    public boolean getNormalizedVisibilities() {
        return this.f34079a.getNormalizedVisibilities();
    }

    @NotNull
    public final DescriptorRendererOptionsImpl getOptions() {
        return this.f34079a;
    }

    @NotNull
    public OverrideRenderingPolicy getOverrideRenderingPolicy() {
        return this.f34079a.getOverrideRenderingPolicy();
    }

    @NotNull
    public ParameterNameRenderingPolicy getParameterNameRenderingPolicy() {
        return this.f34079a.getParameterNameRenderingPolicy();
    }

    public boolean getParameterNamesInFunctionalTypes() {
        return this.f34079a.getParameterNamesInFunctionalTypes();
    }

    public boolean getPresentableUnresolvedTypes() {
        return this.f34079a.getPresentableUnresolvedTypes();
    }

    @NotNull
    public PropertyAccessorRenderingPolicy getPropertyAccessorRenderingPolicy() {
        return this.f34079a.getPropertyAccessorRenderingPolicy();
    }

    public boolean getReceiverAfterName() {
        return this.f34079a.getReceiverAfterName();
    }

    public boolean getRenderAbbreviatedTypeComments() {
        return this.f34079a.getRenderAbbreviatedTypeComments();
    }

    public boolean getRenderCompanionObjectName() {
        return this.f34079a.getRenderCompanionObjectName();
    }

    public boolean getRenderConstructorDelegation() {
        return this.f34079a.getRenderConstructorDelegation();
    }

    public boolean getRenderConstructorKeyword() {
        return this.f34079a.getRenderConstructorKeyword();
    }

    public boolean getRenderDefaultAnnotationArguments() {
        return this.f34079a.getRenderDefaultAnnotationArguments();
    }

    public boolean getRenderDefaultModality() {
        return this.f34079a.getRenderDefaultModality();
    }

    public boolean getRenderDefaultVisibility() {
        return this.f34079a.getRenderDefaultVisibility();
    }

    public boolean getRenderPrimaryConstructorParametersAsProperties() {
        return this.f34079a.getRenderPrimaryConstructorParametersAsProperties();
    }

    public boolean getRenderTypeExpansions() {
        return this.f34079a.getRenderTypeExpansions();
    }

    public boolean getRenderUnabbreviatedType() {
        return this.f34079a.getRenderUnabbreviatedType();
    }

    public boolean getSecondaryConstructorsAsPrimary() {
        return this.f34079a.getSecondaryConstructorsAsPrimary();
    }

    public boolean getStartFromDeclarationKeyword() {
        return this.f34079a.getStartFromDeclarationKeyword();
    }

    public boolean getStartFromName() {
        return this.f34079a.getStartFromName();
    }

    @NotNull
    public RenderingFormat getTextFormat() {
        return this.f34079a.getTextFormat();
    }

    @NotNull
    public Function1<KotlinType, KotlinType> getTypeNormalizer() {
        return this.f34079a.getTypeNormalizer();
    }

    public boolean getUninferredTypeParameterAsName() {
        return this.f34079a.getUninferredTypeParameterAsName();
    }

    public boolean getUnitReturnType() {
        return this.f34079a.getUnitReturnType();
    }

    @NotNull
    public DescriptorRenderer.ValueParametersHandler getValueParametersHandler() {
        return this.f34079a.getValueParametersHandler();
    }

    public boolean getVerbose() {
        return this.f34079a.getVerbose();
    }

    public boolean getWithDefinedIn() {
        return this.f34079a.getWithDefinedIn();
    }

    public boolean getWithSourceFileForTopLevel() {
        return this.f34079a.getWithSourceFileForTopLevel();
    }

    public boolean getWithoutReturnType() {
        return this.f34079a.getWithoutReturnType();
    }

    public boolean getWithoutSuperTypes() {
        return this.f34079a.getWithoutSuperTypes();
    }

    public boolean getWithoutTypeParameters() {
        return this.f34079a.getWithoutTypeParameters();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer
    @NotNull
    public String render(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "declarationDescriptor");
        StringBuilder sb2 = new StringBuilder();
        declarationDescriptor.accept(new RenderDeclarationDescriptorVisitor(), sb2);
        if (getWithDefinedIn()) {
            C(sb2, declarationDescriptor);
        }
        return sb2.toString();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer
    @NotNull
    public String renderAnnotation(@NotNull AnnotationDescriptor annotation, AnnotationUseSiteTarget annotationUseSiteTarget) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        StringBuilder sb2 = new StringBuilder();
        sb2.append('@');
        if (annotationUseSiteTarget != null) {
            sb2.append(annotationUseSiteTarget.getRenderName() + ':');
        }
        KotlinType type = annotation.getType();
        sb2.append(renderType(type));
        if (getIncludeAnnotationArguments()) {
            List T = T(annotation);
            if (getIncludeEmptyAnnotationArguments() || !T.isEmpty()) {
                CollectionsKt.v0(T, sb2, ", ", "(", ")", 0, null, null, 112, null);
            }
        }
        if (getVerbose() && (KotlinTypeKt.isError(type) || (type.getConstructor().mo1199getDeclarationDescriptor() instanceof NotFoundClasses.MockClassDescriptor))) {
            sb2.append(" /* annotation class not found */");
        }
        return sb2.toString();
    }

    @NotNull
    public String renderClassifierName(@NotNull ClassifierDescriptor klass) {
        Intrinsics.checkNotNullParameter(klass, "klass");
        if (ErrorUtils.isError(klass)) {
            return klass.getTypeConstructor().toString();
        }
        return getClassifierNamePolicy().renderClassifier(klass, this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer
    @NotNull
    public String renderFlexibleType(@NotNull String lowerRendered, @NotNull String upperRendered, @NotNull KotlinBuiltIns builtIns) {
        Intrinsics.checkNotNullParameter(lowerRendered, "lowerRendered");
        Intrinsics.checkNotNullParameter(upperRendered, "upperRendered");
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        if (RenderingUtilsKt.typeStringsDifferOnlyInNullability(lowerRendered, upperRendered)) {
            if (StringsKt.P(upperRendered, "(", false, 2, null)) {
                return '(' + lowerRendered + ")!";
            }
            return lowerRendered + '!';
        }
        ClassifierNamePolicy classifierNamePolicy = getClassifierNamePolicy();
        ClassDescriptor collection = builtIns.getCollection();
        Intrinsics.checkNotNullExpressionValue(collection, "getCollection(...)");
        String e12 = StringsKt.e1(classifierNamePolicy.renderClassifier(collection, this), "Collection", null, 2, null);
        String replacePrefixesInTypeRepresentations = RenderingUtilsKt.replacePrefixesInTypeRepresentations(lowerRendered, e12 + "Mutable", upperRendered, e12, e12 + "(Mutable)");
        if (replacePrefixesInTypeRepresentations != null) {
            return replacePrefixesInTypeRepresentations;
        }
        String replacePrefixesInTypeRepresentations2 = RenderingUtilsKt.replacePrefixesInTypeRepresentations(lowerRendered, e12 + "MutableMap.MutableEntry", upperRendered, e12 + "Map.Entry", e12 + "(Mutable)Map.(Mutable)Entry");
        if (replacePrefixesInTypeRepresentations2 != null) {
            return replacePrefixesInTypeRepresentations2;
        }
        ClassifierNamePolicy classifierNamePolicy2 = getClassifierNamePolicy();
        ClassDescriptor array = builtIns.getArray();
        Intrinsics.checkNotNullExpressionValue(array, "getArray(...)");
        String e13 = StringsKt.e1(classifierNamePolicy2.renderClassifier(array, this), "Array", null, 2, null);
        String replacePrefixesInTypeRepresentations3 = RenderingUtilsKt.replacePrefixesInTypeRepresentations(lowerRendered, e13 + G("Array<"), upperRendered, e13 + G("Array<out "), e13 + G("Array<(out) "));
        if (replacePrefixesInTypeRepresentations3 != null) {
            return replacePrefixesInTypeRepresentations3;
        }
        return '(' + lowerRendered + ".." + upperRendered + ')';
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer
    @NotNull
    public String renderFqName(@NotNull FqNameUnsafe fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return i0(fqName.pathSegments());
    }

    @NotNull
    public String renderMessage(@NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        int i10 = WhenMappings.$EnumSwitchMapping$0[getTextFormat().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return "<i>" + message + "</i>";
            }
            throw new qr.p();
        }
        return message;
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer
    @NotNull
    public String renderName(@NotNull Name name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        String G = G(RenderingUtilsKt.render(name));
        if (getBoldOnlyForNamesInHtml() && getTextFormat() == RenderingFormat.HTML && z10) {
            return "<b>" + G + "</b>";
        }
        return G;
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer
    @NotNull
    public String renderType(@NotNull KotlinType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        StringBuilder sb2 = new StringBuilder();
        t0(sb2, (KotlinType) getTypeNormalizer().invoke(type));
        return sb2.toString();
    }

    @NotNull
    public String renderTypeArguments(@NotNull List<? extends TypeProjection> typeArguments) {
        Intrinsics.checkNotNullParameter(typeArguments, "typeArguments");
        if (typeArguments.isEmpty()) {
            return "";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append(O());
        D(sb2, typeArguments);
        sb2.append(K());
        return sb2.toString();
    }

    @NotNull
    public String renderTypeConstructor(@NotNull TypeConstructor typeConstructor) {
        Intrinsics.checkNotNullParameter(typeConstructor, "typeConstructor");
        ClassifierDescriptor mo1199getDeclarationDescriptor = typeConstructor.mo1199getDeclarationDescriptor();
        if (!(mo1199getDeclarationDescriptor instanceof TypeParameterDescriptor) && !(mo1199getDeclarationDescriptor instanceof ClassDescriptor) && !(mo1199getDeclarationDescriptor instanceof TypeAliasDescriptor)) {
            if (mo1199getDeclarationDescriptor == null) {
                if (typeConstructor instanceof IntersectionTypeConstructor) {
                    return ((IntersectionTypeConstructor) typeConstructor).makeDebugNameForIntersectionType(m.f34133d);
                }
                return typeConstructor.toString();
            }
            throw new IllegalStateException(("Unexpected classifier: " + mo1199getDeclarationDescriptor.getClass()).toString());
        }
        return renderClassifierName(mo1199getDeclarationDescriptor);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer
    @NotNull
    public String renderTypeProjection(@NotNull TypeProjection typeProjection) {
        Intrinsics.checkNotNullParameter(typeProjection, "typeProjection");
        StringBuilder sb2 = new StringBuilder();
        D(sb2, CollectionsKt.e(typeProjection));
        return sb2.toString();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setAnnotationArgumentsRenderingPolicy(@NotNull AnnotationArgumentsRenderingPolicy annotationArgumentsRenderingPolicy) {
        Intrinsics.checkNotNullParameter(annotationArgumentsRenderingPolicy, "<set-?>");
        this.f34079a.setAnnotationArgumentsRenderingPolicy(annotationArgumentsRenderingPolicy);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setClassifierNamePolicy(@NotNull ClassifierNamePolicy classifierNamePolicy) {
        Intrinsics.checkNotNullParameter(classifierNamePolicy, "<set-?>");
        this.f34079a.setClassifierNamePolicy(classifierNamePolicy);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setDebugMode(boolean z10) {
        this.f34079a.setDebugMode(z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setExcludedTypeAnnotationClasses(@NotNull Set<FqName> set) {
        Intrinsics.checkNotNullParameter(set, "<set-?>");
        this.f34079a.setExcludedTypeAnnotationClasses(set);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setModifiers(@NotNull Set<? extends DescriptorRendererModifier> set) {
        Intrinsics.checkNotNullParameter(set, "<set-?>");
        this.f34079a.setModifiers(set);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setParameterNameRenderingPolicy(@NotNull ParameterNameRenderingPolicy parameterNameRenderingPolicy) {
        Intrinsics.checkNotNullParameter(parameterNameRenderingPolicy, "<set-?>");
        this.f34079a.setParameterNameRenderingPolicy(parameterNameRenderingPolicy);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setReceiverAfterName(boolean z10) {
        this.f34079a.setReceiverAfterName(z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setRenderCompanionObjectName(boolean z10) {
        this.f34079a.setRenderCompanionObjectName(z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setStartFromName(boolean z10) {
        this.f34079a.setStartFromName(z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setTextFormat(@NotNull RenderingFormat renderingFormat) {
        Intrinsics.checkNotNullParameter(renderingFormat, "<set-?>");
        this.f34079a.setTextFormat(renderingFormat);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setVerbose(boolean z10) {
        this.f34079a.setVerbose(z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setWithDefinedIn(boolean z10) {
        this.f34079a.setWithDefinedIn(z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setWithoutSuperTypes(boolean z10) {
        this.f34079a.setWithoutSuperTypes(z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setWithoutTypeParameters(boolean z10) {
        this.f34079a.setWithoutTypeParameters(z10);
    }
}
