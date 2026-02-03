package ds;

import ds.j2;
import java.lang.reflect.Member;
import kotlin.Lazy;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KProperty1;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d2 extends j2 implements KProperty1 {
    private final Lazy A;

    /* renamed from: z  reason: collision with root package name */
    private final Lazy f22179z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends j2.c implements KProperty1.a {

        /* renamed from: u  reason: collision with root package name */
        private final d2 f22180u;

        public a(d2 property) {
            Intrinsics.checkNotNullParameter(property, "property");
            this.f22180u = property;
        }

        @Override // kotlin.reflect.KProperty.a
        /* renamed from: P */
        public d2 a() {
            return this.f22180u;
        }

        @Override // kotlin.jvm.functions.Function1
        public Object invoke(Object obj) {
            return a().get(obj);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d2(c1 container, String name, String signature, Object obj) {
        super(container, name, signature, obj);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
        jr.o oVar = jr.o.f32182e;
        this.f22179z = jr.l.a(oVar, new b2(this));
        this.A = jr.l.a(oVar, new c2(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a T(d2 d2Var) {
        return new a(d2Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Member W(d2 d2Var) {
        return d2Var.M();
    }

    @Override // kotlin.reflect.KProperty
    /* renamed from: X */
    public a getGetter() {
        return (a) this.f22179z.getValue();
    }

    @Override // kotlin.reflect.KProperty1
    public Object get(Object obj) {
        return getGetter().call(obj);
    }

    @Override // kotlin.reflect.KProperty1
    public Object getDelegate(Object obj) {
        return O((Member) this.A.getValue(), obj, null);
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        return get(obj);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d2(c1 container, PropertyDescriptor descriptor) {
        super(container, descriptor);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        jr.o oVar = jr.o.f32182e;
        this.f22179z = jr.l.a(oVar, new b2(this));
        this.A = jr.l.a(oVar, new c2(this));
    }
}
