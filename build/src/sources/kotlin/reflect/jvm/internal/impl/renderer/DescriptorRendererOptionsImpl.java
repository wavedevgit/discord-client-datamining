package kotlin.reflect.jvm.internal.impl.renderer;

import java.lang.reflect.Field;
import java.util.Iterator;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.properties.ReadWriteProperty;
import kotlin.reflect.KClass;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.renderer.ClassifierNamePolicy;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nDescriptorRendererOptionsImpl.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DescriptorRendererOptionsImpl.kt\norg/jetbrains/kotlin/renderer/DescriptorRendererOptionsImpl\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 Delegates.kt\nkotlin/properties/Delegates\n*L\n1#1,137:1\n1#2:138\n51#3,3:139\n*S KotlinDebug\n*F\n+ 1 DescriptorRendererOptionsImpl.kt\norg/jetbrains/kotlin/renderer/DescriptorRendererOptionsImpl\n*L\n60#1:139,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DescriptorRendererOptionsImpl implements DescriptorRendererOptions {
    static final /* synthetic */ KProperty[] Z = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "classifierNamePolicy", "getClassifierNamePolicy()Lorg/jetbrains/kotlin/renderer/ClassifierNamePolicy;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "withDefinedIn", "getWithDefinedIn()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "withSourceFileForTopLevel", "getWithSourceFileForTopLevel()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "modifiers", "getModifiers()Ljava/util/Set;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "startFromName", "getStartFromName()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "startFromDeclarationKeyword", "getStartFromDeclarationKeyword()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "debugMode", "getDebugMode()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "classWithPrimaryConstructor", "getClassWithPrimaryConstructor()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "verbose", "getVerbose()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "unitReturnType", "getUnitReturnType()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "withoutReturnType", "getWithoutReturnType()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "enhancedTypes", "getEnhancedTypes()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "normalizedVisibilities", "getNormalizedVisibilities()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderDefaultVisibility", "getRenderDefaultVisibility()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderDefaultModality", "getRenderDefaultModality()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderConstructorDelegation", "getRenderConstructorDelegation()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderPrimaryConstructorParametersAsProperties", "getRenderPrimaryConstructorParametersAsProperties()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "actualPropertiesInPrimaryConstructor", "getActualPropertiesInPrimaryConstructor()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "uninferredTypeParameterAsName", "getUninferredTypeParameterAsName()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "includePropertyConstant", "getIncludePropertyConstant()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "propertyConstantRenderer", "getPropertyConstantRenderer()Lkotlin/jvm/functions/Function1;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "withoutTypeParameters", "getWithoutTypeParameters()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "withoutSuperTypes", "getWithoutSuperTypes()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "typeNormalizer", "getTypeNormalizer()Lkotlin/jvm/functions/Function1;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "defaultParameterValueRenderer", "getDefaultParameterValueRenderer()Lkotlin/jvm/functions/Function1;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "secondaryConstructorsAsPrimary", "getSecondaryConstructorsAsPrimary()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "overrideRenderingPolicy", "getOverrideRenderingPolicy()Lorg/jetbrains/kotlin/renderer/OverrideRenderingPolicy;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "valueParametersHandler", "getValueParametersHandler()Lorg/jetbrains/kotlin/renderer/DescriptorRenderer$ValueParametersHandler;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "textFormat", "getTextFormat()Lorg/jetbrains/kotlin/renderer/RenderingFormat;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "parameterNameRenderingPolicy", "getParameterNameRenderingPolicy()Lorg/jetbrains/kotlin/renderer/ParameterNameRenderingPolicy;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "receiverAfterName", "getReceiverAfterName()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderCompanionObjectName", "getRenderCompanionObjectName()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "propertyAccessorRenderingPolicy", "getPropertyAccessorRenderingPolicy()Lorg/jetbrains/kotlin/renderer/PropertyAccessorRenderingPolicy;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderDefaultAnnotationArguments", "getRenderDefaultAnnotationArguments()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "eachAnnotationOnNewLine", "getEachAnnotationOnNewLine()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "excludedAnnotationClasses", "getExcludedAnnotationClasses()Ljava/util/Set;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "excludedTypeAnnotationClasses", "getExcludedTypeAnnotationClasses()Ljava/util/Set;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "annotationFilter", "getAnnotationFilter()Lkotlin/jvm/functions/Function1;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "annotationArgumentsRenderingPolicy", "getAnnotationArgumentsRenderingPolicy()Lorg/jetbrains/kotlin/renderer/AnnotationArgumentsRenderingPolicy;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "alwaysRenderModifiers", "getAlwaysRenderModifiers()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderConstructorKeyword", "getRenderConstructorKeyword()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderUnabbreviatedType", "getRenderUnabbreviatedType()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderTypeExpansions", "getRenderTypeExpansions()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderAbbreviatedTypeComments", "getRenderAbbreviatedTypeComments()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "includeAdditionalModifiers", "getIncludeAdditionalModifiers()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "parameterNamesInFunctionalTypes", "getParameterNamesInFunctionalTypes()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "renderFunctionContracts", "getRenderFunctionContracts()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "presentableUnresolvedTypes", "getPresentableUnresolvedTypes()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "boldOnlyForNamesInHtml", "getBoldOnlyForNamesInHtml()Z", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(DescriptorRendererOptionsImpl.class, "informativeErrorType", "getInformativeErrorType()Z", 0))};
    private final ReadWriteProperty A;
    private final ReadWriteProperty B;
    private final ReadWriteProperty C;
    private final ReadWriteProperty D;
    private final ReadWriteProperty E;
    private final ReadWriteProperty F;
    private final ReadWriteProperty G;
    private final ReadWriteProperty H;
    private final ReadWriteProperty I;
    private final ReadWriteProperty J;
    private final ReadWriteProperty K;
    private final ReadWriteProperty L;
    private final ReadWriteProperty M;
    private final ReadWriteProperty N;
    private final ReadWriteProperty O;
    private final ReadWriteProperty P;
    private final ReadWriteProperty Q;
    private final ReadWriteProperty R;
    private final ReadWriteProperty S;
    private final ReadWriteProperty T;
    private final ReadWriteProperty U;
    private final ReadWriteProperty V;
    private final ReadWriteProperty W;
    private final ReadWriteProperty X;
    private final ReadWriteProperty Y;

    /* renamed from: a  reason: collision with root package name */
    private boolean f34085a;

    /* renamed from: b  reason: collision with root package name */
    private final ReadWriteProperty f34086b = d(ClassifierNamePolicy.SOURCE_CODE_QUALIFIED.INSTANCE);

    /* renamed from: c  reason: collision with root package name */
    private final ReadWriteProperty f34087c;

    /* renamed from: d  reason: collision with root package name */
    private final ReadWriteProperty f34088d;

    /* renamed from: e  reason: collision with root package name */
    private final ReadWriteProperty f34089e;

    /* renamed from: f  reason: collision with root package name */
    private final ReadWriteProperty f34090f;

    /* renamed from: g  reason: collision with root package name */
    private final ReadWriteProperty f34091g;

    /* renamed from: h  reason: collision with root package name */
    private final ReadWriteProperty f34092h;

    /* renamed from: i  reason: collision with root package name */
    private final ReadWriteProperty f34093i;

    /* renamed from: j  reason: collision with root package name */
    private final ReadWriteProperty f34094j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f34095k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f34096l;

    /* renamed from: m  reason: collision with root package name */
    private final ReadWriteProperty f34097m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f34098n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f34099o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f34100p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f34101q;

    /* renamed from: r  reason: collision with root package name */
    private final ReadWriteProperty f34102r;

    /* renamed from: s  reason: collision with root package name */
    private final ReadWriteProperty f34103s;

    /* renamed from: t  reason: collision with root package name */
    private final ReadWriteProperty f34104t;

    /* renamed from: u  reason: collision with root package name */
    private final ReadWriteProperty f34105u;

    /* renamed from: v  reason: collision with root package name */
    private final ReadWriteProperty f34106v;

    /* renamed from: w  reason: collision with root package name */
    private final ReadWriteProperty f34107w;

    /* renamed from: x  reason: collision with root package name */
    private final ReadWriteProperty f34108x;

    /* renamed from: y  reason: collision with root package name */
    private final ReadWriteProperty f34109y;

    /* renamed from: z  reason: collision with root package name */
    private final ReadWriteProperty f34110z;

    public DescriptorRendererOptionsImpl() {
        Boolean bool = Boolean.TRUE;
        this.f34087c = d(bool);
        this.f34088d = d(bool);
        this.f34089e = d(DescriptorRendererModifier.ALL_EXCEPT_ANNOTATIONS);
        Boolean bool2 = Boolean.FALSE;
        this.f34090f = d(bool2);
        this.f34091g = d(bool2);
        this.f34092h = d(bool2);
        this.f34093i = d(bool2);
        this.f34094j = d(bool2);
        this.f34095k = d(bool);
        this.f34096l = d(bool2);
        this.f34097m = d(bool2);
        this.f34098n = d(bool2);
        this.f34099o = d(bool);
        this.f34100p = d(bool);
        this.f34101q = d(bool2);
        this.f34102r = d(bool2);
        this.f34103s = d(bool2);
        this.f34104t = d(bool2);
        this.f34105u = d(bool2);
        this.f34106v = d(null);
        this.f34107w = d(bool2);
        this.f34108x = d(bool2);
        this.f34109y = d(r.f34138d);
        this.f34110z = d(s.f34139d);
        this.A = d(bool);
        this.B = d(OverrideRenderingPolicy.RENDER_OPEN);
        this.C = d(DescriptorRenderer.ValueParametersHandler.DEFAULT.INSTANCE);
        this.D = d(RenderingFormat.PLAIN);
        this.E = d(ParameterNameRenderingPolicy.ALL);
        this.F = d(bool2);
        this.G = d(bool2);
        this.H = d(PropertyAccessorRenderingPolicy.DEBUG);
        this.I = d(bool2);
        this.J = d(bool2);
        this.K = d(x0.d());
        this.L = d(ExcludedTypeAnnotations.INSTANCE.getInternalAnnotationsForResolve());
        this.M = d(null);
        this.N = d(AnnotationArgumentsRenderingPolicy.NO_ARGUMENTS);
        this.O = d(bool2);
        this.P = d(bool);
        this.Q = d(bool);
        this.R = d(bool2);
        this.S = d(bool2);
        this.T = d(bool);
        this.U = d(bool);
        this.V = d(bool2);
        this.W = d(bool2);
        this.X = d(bool2);
        this.Y = d(bool);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String c(ValueParameterDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return "...";
    }

    private final ReadWriteProperty d(final Object obj) {
        kotlin.properties.a aVar = kotlin.properties.a.f32143a;
        return new kotlin.properties.c(obj) { // from class: kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptionsImpl$property$$inlined$vetoable$1
            @Override // kotlin.properties.c
            protected boolean beforeChange(KProperty property, Object obj2, Object obj3) {
                Intrinsics.checkNotNullParameter(property, "property");
                if (!this.isLocked()) {
                    return true;
                }
                throw new IllegalStateException("Cannot modify readonly DescriptorRendererOptions");
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType e(KotlinType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it;
    }

    @NotNull
    public final DescriptorRendererOptionsImpl copy() {
        kotlin.properties.c cVar;
        DescriptorRendererOptionsImpl descriptorRendererOptionsImpl = new DescriptorRendererOptionsImpl();
        Iterator it = ArrayIteratorKt.iterator(DescriptorRendererOptionsImpl.class.getDeclaredFields());
        while (it.hasNext()) {
            Field field = (Field) it.next();
            if ((field.getModifiers() & 8) == 0) {
                field.setAccessible(true);
                Object obj = field.get(this);
                if (obj instanceof kotlin.properties.c) {
                    cVar = (kotlin.properties.c) obj;
                } else {
                    cVar = null;
                }
                if (cVar != null) {
                    String name = field.getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    StringsKt.P(name, "is", false, 2, null);
                    KClass orCreateKotlinClass = Reflection.getOrCreateKotlinClass(DescriptorRendererOptionsImpl.class);
                    String name2 = field.getName();
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("get");
                    String name3 = field.getName();
                    Intrinsics.checkNotNullExpressionValue(name3, "getName(...)");
                    if (name3.length() > 0) {
                        char upperCase = Character.toUpperCase(name3.charAt(0));
                        String substring = name3.substring(1);
                        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                        name3 = upperCase + substring;
                    }
                    sb2.append(name3);
                    field.set(descriptorRendererOptionsImpl, descriptorRendererOptionsImpl.d(cVar.getValue(this, new PropertyReference1Impl(orCreateKotlinClass, name2, sb2.toString()))));
                }
            }
        }
        return descriptorRendererOptionsImpl;
    }

    public boolean getActualPropertiesInPrimaryConstructor() {
        return ((Boolean) this.f34103s.getValue(this, Z[17])).booleanValue();
    }

    public boolean getAlwaysRenderModifiers() {
        return ((Boolean) this.O.getValue(this, Z[39])).booleanValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    @NotNull
    public AnnotationArgumentsRenderingPolicy getAnnotationArgumentsRenderingPolicy() {
        return (AnnotationArgumentsRenderingPolicy) this.N.getValue(this, Z[38]);
    }

    public Function1<AnnotationDescriptor, Boolean> getAnnotationFilter() {
        return (Function1) this.M.getValue(this, Z[37]);
    }

    public boolean getBoldOnlyForNamesInHtml() {
        return ((Boolean) this.X.getValue(this, Z[48])).booleanValue();
    }

    public boolean getClassWithPrimaryConstructor() {
        return ((Boolean) this.f34093i.getValue(this, Z[7])).booleanValue();
    }

    @NotNull
    public ClassifierNamePolicy getClassifierNamePolicy() {
        return (ClassifierNamePolicy) this.f34086b.getValue(this, Z[0]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public boolean getDebugMode() {
        return ((Boolean) this.f34092h.getValue(this, Z[6])).booleanValue();
    }

    public Function1<ValueParameterDescriptor, String> getDefaultParameterValueRenderer() {
        return (Function1) this.f34110z.getValue(this, Z[24]);
    }

    public boolean getEachAnnotationOnNewLine() {
        return ((Boolean) this.J.getValue(this, Z[34])).booleanValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public boolean getEnhancedTypes() {
        return ((Boolean) this.f34097m.getValue(this, Z[11])).booleanValue();
    }

    @NotNull
    public Set<FqName> getExcludedAnnotationClasses() {
        return (Set) this.K.getValue(this, Z[35]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    @NotNull
    public Set<FqName> getExcludedTypeAnnotationClasses() {
        return (Set) this.L.getValue(this, Z[36]);
    }

    public boolean getIncludeAdditionalModifiers() {
        return ((Boolean) this.T.getValue(this, Z[44])).booleanValue();
    }

    public boolean getIncludeAnnotationArguments() {
        return DescriptorRendererOptions.DefaultImpls.getIncludeAnnotationArguments(this);
    }

    public boolean getIncludeEmptyAnnotationArguments() {
        return DescriptorRendererOptions.DefaultImpls.getIncludeEmptyAnnotationArguments(this);
    }

    public boolean getIncludePropertyConstant() {
        return ((Boolean) this.f34105u.getValue(this, Z[19])).booleanValue();
    }

    public boolean getInformativeErrorType() {
        return ((Boolean) this.Y.getValue(this, Z[49])).booleanValue();
    }

    @NotNull
    public Set<DescriptorRendererModifier> getModifiers() {
        return (Set) this.f34089e.getValue(this, Z[3]);
    }

    public boolean getNormalizedVisibilities() {
        return ((Boolean) this.f34098n.getValue(this, Z[12])).booleanValue();
    }

    @NotNull
    public OverrideRenderingPolicy getOverrideRenderingPolicy() {
        return (OverrideRenderingPolicy) this.B.getValue(this, Z[26]);
    }

    @NotNull
    public ParameterNameRenderingPolicy getParameterNameRenderingPolicy() {
        return (ParameterNameRenderingPolicy) this.E.getValue(this, Z[29]);
    }

    public boolean getParameterNamesInFunctionalTypes() {
        return ((Boolean) this.U.getValue(this, Z[45])).booleanValue();
    }

    public boolean getPresentableUnresolvedTypes() {
        return ((Boolean) this.W.getValue(this, Z[47])).booleanValue();
    }

    @NotNull
    public PropertyAccessorRenderingPolicy getPropertyAccessorRenderingPolicy() {
        return (PropertyAccessorRenderingPolicy) this.H.getValue(this, Z[32]);
    }

    public Function1<ConstantValue<?>, String> getPropertyConstantRenderer() {
        return (Function1) this.f34106v.getValue(this, Z[20]);
    }

    public boolean getReceiverAfterName() {
        return ((Boolean) this.F.getValue(this, Z[30])).booleanValue();
    }

    public boolean getRenderAbbreviatedTypeComments() {
        return ((Boolean) this.S.getValue(this, Z[43])).booleanValue();
    }

    public boolean getRenderCompanionObjectName() {
        return ((Boolean) this.G.getValue(this, Z[31])).booleanValue();
    }

    public boolean getRenderConstructorDelegation() {
        return ((Boolean) this.f34101q.getValue(this, Z[15])).booleanValue();
    }

    public boolean getRenderConstructorKeyword() {
        return ((Boolean) this.P.getValue(this, Z[40])).booleanValue();
    }

    public boolean getRenderDefaultAnnotationArguments() {
        return ((Boolean) this.I.getValue(this, Z[33])).booleanValue();
    }

    public boolean getRenderDefaultModality() {
        return ((Boolean) this.f34100p.getValue(this, Z[14])).booleanValue();
    }

    public boolean getRenderDefaultVisibility() {
        return ((Boolean) this.f34099o.getValue(this, Z[13])).booleanValue();
    }

    public boolean getRenderPrimaryConstructorParametersAsProperties() {
        return ((Boolean) this.f34102r.getValue(this, Z[16])).booleanValue();
    }

    public boolean getRenderTypeExpansions() {
        return ((Boolean) this.R.getValue(this, Z[42])).booleanValue();
    }

    public boolean getRenderUnabbreviatedType() {
        return ((Boolean) this.Q.getValue(this, Z[41])).booleanValue();
    }

    public boolean getSecondaryConstructorsAsPrimary() {
        return ((Boolean) this.A.getValue(this, Z[25])).booleanValue();
    }

    public boolean getStartFromDeclarationKeyword() {
        return ((Boolean) this.f34091g.getValue(this, Z[5])).booleanValue();
    }

    public boolean getStartFromName() {
        return ((Boolean) this.f34090f.getValue(this, Z[4])).booleanValue();
    }

    @NotNull
    public RenderingFormat getTextFormat() {
        return (RenderingFormat) this.D.getValue(this, Z[28]);
    }

    @NotNull
    public Function1<KotlinType, KotlinType> getTypeNormalizer() {
        return (Function1) this.f34109y.getValue(this, Z[23]);
    }

    public boolean getUninferredTypeParameterAsName() {
        return ((Boolean) this.f34104t.getValue(this, Z[18])).booleanValue();
    }

    public boolean getUnitReturnType() {
        return ((Boolean) this.f34095k.getValue(this, Z[9])).booleanValue();
    }

    @NotNull
    public DescriptorRenderer.ValueParametersHandler getValueParametersHandler() {
        return (DescriptorRenderer.ValueParametersHandler) this.C.getValue(this, Z[27]);
    }

    public boolean getVerbose() {
        return ((Boolean) this.f34094j.getValue(this, Z[8])).booleanValue();
    }

    public boolean getWithDefinedIn() {
        return ((Boolean) this.f34087c.getValue(this, Z[1])).booleanValue();
    }

    public boolean getWithSourceFileForTopLevel() {
        return ((Boolean) this.f34088d.getValue(this, Z[2])).booleanValue();
    }

    public boolean getWithoutReturnType() {
        return ((Boolean) this.f34096l.getValue(this, Z[10])).booleanValue();
    }

    public boolean getWithoutSuperTypes() {
        return ((Boolean) this.f34108x.getValue(this, Z[22])).booleanValue();
    }

    public boolean getWithoutTypeParameters() {
        return ((Boolean) this.f34107w.getValue(this, Z[21])).booleanValue();
    }

    public final boolean isLocked() {
        return this.f34085a;
    }

    public final void lock() {
        this.f34085a = true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setAnnotationArgumentsRenderingPolicy(@NotNull AnnotationArgumentsRenderingPolicy annotationArgumentsRenderingPolicy) {
        Intrinsics.checkNotNullParameter(annotationArgumentsRenderingPolicy, "<set-?>");
        this.N.setValue(this, Z[38], annotationArgumentsRenderingPolicy);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setClassifierNamePolicy(@NotNull ClassifierNamePolicy classifierNamePolicy) {
        Intrinsics.checkNotNullParameter(classifierNamePolicy, "<set-?>");
        this.f34086b.setValue(this, Z[0], classifierNamePolicy);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setDebugMode(boolean z10) {
        this.f34092h.setValue(this, Z[6], Boolean.valueOf(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setExcludedTypeAnnotationClasses(@NotNull Set<FqName> set) {
        Intrinsics.checkNotNullParameter(set, "<set-?>");
        this.L.setValue(this, Z[36], set);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setModifiers(@NotNull Set<? extends DescriptorRendererModifier> set) {
        Intrinsics.checkNotNullParameter(set, "<set-?>");
        this.f34089e.setValue(this, Z[3], set);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setParameterNameRenderingPolicy(@NotNull ParameterNameRenderingPolicy parameterNameRenderingPolicy) {
        Intrinsics.checkNotNullParameter(parameterNameRenderingPolicy, "<set-?>");
        this.E.setValue(this, Z[29], parameterNameRenderingPolicy);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setReceiverAfterName(boolean z10) {
        this.F.setValue(this, Z[30], Boolean.valueOf(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setRenderCompanionObjectName(boolean z10) {
        this.G.setValue(this, Z[31], Boolean.valueOf(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setStartFromName(boolean z10) {
        this.f34090f.setValue(this, Z[4], Boolean.valueOf(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setTextFormat(@NotNull RenderingFormat renderingFormat) {
        Intrinsics.checkNotNullParameter(renderingFormat, "<set-?>");
        this.D.setValue(this, Z[28], renderingFormat);
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setVerbose(boolean z10) {
        this.f34094j.setValue(this, Z[8], Boolean.valueOf(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setWithDefinedIn(boolean z10) {
        this.f34087c.setValue(this, Z[1], Boolean.valueOf(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setWithoutSuperTypes(boolean z10) {
        this.f34108x.setValue(this, Z[22], Boolean.valueOf(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions
    public void setWithoutTypeParameters(boolean z10) {
        this.f34107w.setValue(this, Z[21], Boolean.valueOf(z10));
    }
}
