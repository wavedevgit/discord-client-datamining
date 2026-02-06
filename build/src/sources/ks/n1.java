package ks;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.h;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import ks.j2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n1 extends g2 implements kotlin.reflect.h {
    private final Lazy B;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends j2.d implements h.a {

        /* renamed from: u  reason: collision with root package name */
        private final n1 f35375u;

        public a(n1 property) {
            Intrinsics.checkNotNullParameter(property, "property");
            this.f35375u = property;
        }

        @Override // kotlin.reflect.KProperty.a
        /* renamed from: P */
        public n1 a() {
            return this.f35375u;
        }

        public void Q(Object obj, Object obj2, Object obj3) {
            a().c0(obj, obj2, obj3);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            Q(obj, obj2, obj3);
            return Unit.f32008a;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n1(c1 container, String name, String signature) {
        super(container, name, signature);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
        this.B = qr.l.b(qr.o.f48044e, new m1(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a Z(n1 n1Var) {
        return new a(n1Var);
    }

    @Override // kotlin.reflect.h, kotlin.reflect.e
    /* renamed from: b0 */
    public a getSetter() {
        return (a) this.B.getValue();
    }

    public void c0(Object obj, Object obj2, Object obj3) {
        getSetter().call(obj, obj2, obj3);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n1(c1 container, PropertyDescriptor descriptor) {
        super(container, descriptor);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.B = qr.l.b(qr.o.f48044e, new m1(this));
    }
}
