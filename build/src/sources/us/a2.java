package us;

import kotlin.Lazy;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.j;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import us.j2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a2 extends j2 implements kotlin.reflect.j {
    private final Lazy A;

    /* renamed from: z  reason: collision with root package name */
    private final Lazy f50998z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends j2.c implements j.a {

        /* renamed from: u  reason: collision with root package name */
        private final a2 f50999u;

        public a(a2 property) {
            Intrinsics.checkNotNullParameter(property, "property");
            this.f50999u = property;
        }

        @Override // kotlin.reflect.KProperty.a
        /* renamed from: P */
        public a2 a() {
            return this.f50999u;
        }

        @Override // kotlin.jvm.functions.Function0
        public Object invoke() {
            return a().X();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a2(c1 container, PropertyDescriptor descriptor) {
        super(container, descriptor);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        as.o oVar = as.o.f6082e;
        this.f50998z = as.l.a(oVar, new y1(this));
        this.A = as.l.a(oVar, new z1(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a T(a2 a2Var) {
        return new a(a2Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object W(a2 a2Var) {
        return a2Var.O(a2Var.M(), null, null);
    }

    public Object X() {
        return getGetter().call(new Object[0]);
    }

    @Override // kotlin.reflect.KProperty
    /* renamed from: Y */
    public a getGetter() {
        return (a) this.f50998z.getValue();
    }

    @Override // kotlin.reflect.j
    public Object getDelegate() {
        return this.A.getValue();
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        return X();
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a2(c1 container, String name, String signature, Object obj) {
        super(container, name, signature, obj);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
        as.o oVar = as.o.f6082e;
        this.f50998z = as.l.a(oVar, new y1(this));
        this.A = as.l.a(oVar, new z1(this));
    }
}
