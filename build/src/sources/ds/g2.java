package ds;

import ds.j2;
import java.lang.reflect.Member;
import kotlin.Lazy;
import kotlin.jvm.internal.CallableReference;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g2 extends j2 implements kotlin.reflect.k {
    private final Lazy A;

    /* renamed from: z  reason: collision with root package name */
    private final Lazy f22199z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends j2.c implements k.a {

        /* renamed from: u  reason: collision with root package name */
        private final g2 f22200u;

        public a(g2 property) {
            Intrinsics.checkNotNullParameter(property, "property");
            this.f22200u = property;
        }

        @Override // kotlin.reflect.KProperty.a
        /* renamed from: P */
        public g2 a() {
            return this.f22200u;
        }

        @Override // kotlin.jvm.functions.Function2
        public Object invoke(Object obj, Object obj2) {
            return a().X(obj, obj2);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g2(c1 container, String name, String signature) {
        super(container, name, signature, CallableReference.NO_RECEIVER);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
        jr.o oVar = jr.o.f32182e;
        this.f22199z = jr.l.a(oVar, new e2(this));
        this.A = jr.l.a(oVar, new f2(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a T(g2 g2Var) {
        return new a(g2Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Member W(g2 g2Var) {
        return g2Var.M();
    }

    public Object X(Object obj, Object obj2) {
        return getGetter().call(obj, obj2);
    }

    @Override // kotlin.reflect.KProperty
    /* renamed from: Y */
    public a getGetter() {
        return (a) this.f22199z.getValue();
    }

    @Override // kotlin.reflect.k
    public Object getDelegate(Object obj, Object obj2) {
        return O((Member) this.A.getValue(), obj, obj2);
    }

    @Override // kotlin.jvm.functions.Function2
    public Object invoke(Object obj, Object obj2) {
        return X(obj, obj2);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g2(c1 container, PropertyDescriptor descriptor) {
        super(container, descriptor);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        jr.o oVar = jr.o.f32182e;
        this.f22199z = jr.l.a(oVar, new e2(this));
        this.A = jr.l.a(oVar, new f2(this));
    }
}
