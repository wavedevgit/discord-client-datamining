package cs;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.i;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d3 {

    /* renamed from: a  reason: collision with root package name */
    public static final d3 f21122a = new d3();

    /* renamed from: b  reason: collision with root package name */
    private static final DescriptorRenderer f21123b = DescriptorRenderer.FQ_NAMES_IN_TYPES;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f21124a;

        static {
            int[] iArr = new int[i.a.values().length];
            try {
                iArr[i.a.f33399e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[i.a.f33398d.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[i.a.f33400i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f21124a = iArr;
        }
    }

    private d3() {
    }

    private final void c(StringBuilder sb2, ReceiverParameterDescriptor receiverParameterDescriptor) {
        if (receiverParameterDescriptor != null) {
            KotlinType type = receiverParameterDescriptor.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            sb2.append(l(type));
            sb2.append(".");
        }
    }

    private final void d(StringBuilder sb2, CallableDescriptor callableDescriptor) {
        boolean z10;
        ReceiverParameterDescriptor i10 = j3.i(callableDescriptor);
        ReceiverParameterDescriptor extensionReceiverParameter = callableDescriptor.getExtensionReceiverParameter();
        c(sb2, i10);
        if (i10 != null && extensionReceiverParameter != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            sb2.append("(");
        }
        c(sb2, extensionReceiverParameter);
        if (z10) {
            sb2.append(")");
        }
    }

    private final String e(CallableDescriptor callableDescriptor) {
        if (callableDescriptor instanceof PropertyDescriptor) {
            return k((PropertyDescriptor) callableDescriptor);
        }
        if (callableDescriptor instanceof FunctionDescriptor) {
            return f((FunctionDescriptor) callableDescriptor);
        }
        throw new IllegalStateException(("Illegal callable: " + callableDescriptor).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence g(ValueParameterDescriptor valueParameterDescriptor) {
        d3 d3Var = f21122a;
        KotlinType type = valueParameterDescriptor.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        return d3Var.l(type);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence i(ValueParameterDescriptor valueParameterDescriptor) {
        d3 d3Var = f21122a;
        KotlinType type = valueParameterDescriptor.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        return d3Var.l(type);
    }

    public final String f(FunctionDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        StringBuilder sb2 = new StringBuilder();
        sb2.append("fun ");
        d3 d3Var = f21122a;
        d3Var.d(sb2, descriptor);
        DescriptorRenderer descriptorRenderer = f21123b;
        Name name = descriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        sb2.append(descriptorRenderer.renderName(name, true));
        List<ValueParameterDescriptor> valueParameters = descriptor.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
        CollectionsKt.v0(valueParameters, sb2, ", ", "(", ")", 0, null, b3.f21100d, 48, null);
        sb2.append(": ");
        KotlinType returnType = descriptor.getReturnType();
        Intrinsics.checkNotNull(returnType);
        sb2.append(d3Var.l(returnType));
        return sb2.toString();
    }

    public final String h(FunctionDescriptor invoke) {
        Intrinsics.checkNotNullParameter(invoke, "invoke");
        StringBuilder sb2 = new StringBuilder();
        d3 d3Var = f21122a;
        d3Var.d(sb2, invoke);
        List<ValueParameterDescriptor> valueParameters = invoke.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
        CollectionsKt.v0(valueParameters, sb2, ", ", "(", ")", 0, null, c3.f21116d, 48, null);
        sb2.append(" -> ");
        KotlinType returnType = invoke.getReturnType();
        Intrinsics.checkNotNull(returnType);
        sb2.append(d3Var.l(returnType));
        return sb2.toString();
    }

    public final String j(x1 parameter) {
        Intrinsics.checkNotNullParameter(parameter, "parameter");
        StringBuilder sb2 = new StringBuilder();
        int i10 = a.f21124a[parameter.getKind().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    sb2.append("parameter #" + parameter.getIndex() + ' ' + parameter.getName());
                } else {
                    throw new ir.p();
                }
            } else {
                sb2.append("instance parameter");
            }
        } else {
            sb2.append("extension receiver parameter");
        }
        sb2.append(" of ");
        sb2.append(f21122a.e(parameter.g().D()));
        return sb2.toString();
    }

    public final String k(PropertyDescriptor descriptor) {
        String str;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        StringBuilder sb2 = new StringBuilder();
        if (descriptor.isVar()) {
            str = "var ";
        } else {
            str = "val ";
        }
        sb2.append(str);
        d3 d3Var = f21122a;
        d3Var.d(sb2, descriptor);
        DescriptorRenderer descriptorRenderer = f21123b;
        Name name = descriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        sb2.append(descriptorRenderer.renderName(name, true));
        sb2.append(": ");
        KotlinType type = descriptor.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        sb2.append(d3Var.l(type));
        return sb2.toString();
    }

    public final String l(KotlinType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return f21123b.renderType(type);
    }
}
