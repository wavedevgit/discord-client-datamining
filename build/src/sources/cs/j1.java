package cs;

import cs.j2;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.f;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j1 extends a2 implements kotlin.reflect.f {
    private final Lazy B;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends j2.d implements f.a {

        /* renamed from: u  reason: collision with root package name */
        private final j1 f21163u;

        public a(j1 property) {
            Intrinsics.checkNotNullParameter(property, "property");
            this.f21163u = property;
        }

        @Override // kotlin.reflect.KProperty.a
        /* renamed from: P */
        public j1 a() {
            return this.f21163u;
        }

        public void Q(Object obj) {
            a().c0(obj);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            Q(obj);
            return Unit.f33298a;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j1(c1 container, PropertyDescriptor descriptor) {
        super(container, descriptor);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.B = ir.l.a(ir.o.f31119e, new i1(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a Z(j1 j1Var) {
        return new a(j1Var);
    }

    @Override // kotlin.reflect.f, kotlin.reflect.e
    /* renamed from: b0 */
    public a getSetter() {
        return (a) this.B.getValue();
    }

    public void c0(Object obj) {
        getSetter().call(obj);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j1(c1 container, String name, String signature, Object obj) {
        super(container, name, signature, obj);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
        this.B = ir.l.a(ir.o.f31119e, new i1(this));
    }
}
