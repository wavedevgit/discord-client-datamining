package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class VariableDescriptorWithInitializerImpl extends VariableDescriptorImpl {

    /* renamed from: q  reason: collision with root package name */
    private final boolean f32632q;

    /* renamed from: r  reason: collision with root package name */
    protected NullableLazyValue f32633r;

    /* renamed from: s  reason: collision with root package name */
    protected Function0 f32634s;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public VariableDescriptorWithInitializerImpl(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull Annotations annotations, @NotNull Name name, KotlinType kotlinType, boolean z10, @NotNull SourceElement sourceElement) {
        super(declarationDescriptor, annotations, name, kotlinType, sourceElement);
        if (declarationDescriptor == null) {
            a(0);
        }
        if (annotations == null) {
            a(1);
        }
        if (name == null) {
            a(2);
        }
        if (sourceElement == null) {
            a(3);
        }
        this.f32632q = z10;
    }

    private static /* synthetic */ void a(int i10) {
        Object[] objArr = new Object[3];
        if (i10 == 1) {
            objArr[0] = "annotations";
        } else if (i10 == 2) {
            objArr[0] = StackTraceHelper.NAME_KEY;
        } else if (i10 == 3) {
            objArr[0] = "source";
        } else if (i10 == 4 || i10 == 5) {
            objArr[0] = "compileTimeInitializerFactory";
        } else {
            objArr[0] = "containingDeclaration";
        }
        objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/VariableDescriptorWithInitializerImpl";
        if (i10 == 4) {
            objArr[2] = "setCompileTimeInitializerFactory";
        } else if (i10 != 5) {
            objArr[2] = "<init>";
        } else {
            objArr[2] = "setCompileTimeInitializer";
        }
        throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor
    /* renamed from: getCompileTimeInitializer */
    public ConstantValue<?> mo1196getCompileTimeInitializer() {
        NullableLazyValue nullableLazyValue = this.f32633r;
        if (nullableLazyValue != null) {
            return (ConstantValue) nullableLazyValue.invoke();
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor
    public boolean isVar() {
        return this.f32632q;
    }

    public void setCompileTimeInitializer(NullableLazyValue<ConstantValue<?>> nullableLazyValue, @NotNull Function0<NullableLazyValue<ConstantValue<?>>> function0) {
        if (function0 == null) {
            a(5);
        }
        this.f32634s = function0;
        if (nullableLazyValue == null) {
            nullableLazyValue = (NullableLazyValue) function0.invoke();
        }
        this.f32633r = nullableLazyValue;
    }

    public void setCompileTimeInitializerFactory(@NotNull Function0<NullableLazyValue<ConstantValue<?>>> function0) {
        if (function0 == null) {
            a(4);
        }
        setCompileTimeInitializer(null, function0);
    }
}
