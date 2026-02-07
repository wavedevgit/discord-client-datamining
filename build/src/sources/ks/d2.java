package ks;

import java.lang.reflect.Member;
import kotlin.Lazy;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KProperty1;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import ks.j2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d2 extends j2 implements KProperty1 {
    private final Lazy A;

    /* renamed from: z  reason: collision with root package name */
    private final Lazy f35338z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends j2.c implements KProperty1.a {

        /* renamed from: u  reason: collision with root package name */
        private final d2 f35339u;

        public a(d2 property) {
            Intrinsics.checkNotNullParameter(property, "property");
            this.f35339u = property;
        }

        @Override // kotlin.reflect.KProperty.a
        /* renamed from: P */
        public d2 a() {
            return this.f35339u;
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
        qr.o oVar = qr.o.f48092e;
        this.f35338z = qr.l.b(oVar, new b2(this));
        this.A = qr.l.b(oVar, new c2(this));
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
        return (a) this.f35338z.getValue();
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
        qr.o oVar = qr.o.f48092e;
        this.f35338z = qr.l.b(oVar, new b2(this));
        this.A = qr.l.b(oVar, new c2(this));
    }
}
