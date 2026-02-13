package us;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.g;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import us.j2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l1 extends d2 implements kotlin.reflect.g {
    private final Lazy B;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends j2.d implements g.a {

        /* renamed from: u  reason: collision with root package name */
        private final l1 f51661u;

        public a(l1 property) {
            Intrinsics.checkNotNullParameter(property, "property");
            this.f51661u = property;
        }

        @Override // kotlin.reflect.KProperty.a
        /* renamed from: P */
        public l1 a() {
            return this.f51661u;
        }

        public void Q(Object obj, Object obj2) {
            a().set(obj, obj2);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            Q(obj, obj2);
            return Unit.f32556a;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l1(c1 container, String name, String signature, Object obj) {
        super(container, name, signature, obj);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(signature, "signature");
        this.B = as.l.a(as.o.f6082e, new k1(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a Y(l1 l1Var) {
        return new a(l1Var);
    }

    @Override // kotlin.reflect.g, kotlin.reflect.e
    /* renamed from: a0 */
    public a getSetter() {
        return (a) this.B.getValue();
    }

    @Override // kotlin.reflect.g
    public void set(Object obj, Object obj2) {
        getSetter().call(obj, obj2);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l1(c1 container, PropertyDescriptor descriptor) {
        super(container, descriptor);
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.B = as.l.a(as.o.f6082e, new k1(this));
    }
}
