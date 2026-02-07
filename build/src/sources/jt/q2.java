package jt;

import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q2 implements Decoder, kotlinx.serialization.encoding.c {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f31115a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private boolean f31116b;

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object L(q2 q2Var, DeserializationStrategy deserializationStrategy, Object obj) {
        if (!deserializationStrategy.getDescriptor().b() && !q2Var.D()) {
            return q2Var.j();
        }
        return q2Var.N(deserializationStrategy, obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object M(q2 q2Var, DeserializationStrategy deserializationStrategy, Object obj) {
        return q2Var.N(deserializationStrategy, obj);
    }

    private final Object g0(Object obj, Function0 function0) {
        f0(obj);
        Object invoke = function0.invoke();
        if (!this.f31116b) {
            e0();
        }
        this.f31116b = false;
        return invoke;
    }

    @Override // kotlinx.serialization.encoding.c
    public final char A(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return Q(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.c
    public final byte B(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return P(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.c
    public final boolean C(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return O(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public boolean D() {
        Object b02 = b0();
        if (b02 == null) {
            return false;
        }
        return X(b02);
    }

    @Override // kotlinx.serialization.encoding.c
    public final short E(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return Y(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.c
    public final double F(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return R(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public abstract Object G(DeserializationStrategy deserializationStrategy);

    @Override // kotlinx.serialization.encoding.Decoder
    public final byte H() {
        return P(e0());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void K(q2 other) {
        Intrinsics.checkNotNullParameter(other, "other");
        other.f31115a.addAll(this.f31115a);
    }

    protected Object N(DeserializationStrategy deserializer, Object obj) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        return G(deserializer);
    }

    protected abstract boolean O(Object obj);

    protected abstract byte P(Object obj);

    protected abstract char Q(Object obj);

    protected abstract double R(Object obj);

    protected abstract int S(Object obj, SerialDescriptor serialDescriptor);

    protected abstract float T(Object obj);

    /* JADX INFO: Access modifiers changed from: protected */
    public Decoder U(Object obj, SerialDescriptor inlineDescriptor) {
        Intrinsics.checkNotNullParameter(inlineDescriptor, "inlineDescriptor");
        f0(obj);
        return this;
    }

    protected abstract int V(Object obj);

    protected abstract long W(Object obj);

    protected boolean X(Object obj) {
        return true;
    }

    protected abstract short Y(Object obj);

    protected String Z(Object obj) {
        Object a02 = a0(obj);
        Intrinsics.checkNotNull(a02, "null cannot be cast to non-null type kotlin.String");
        return (String) a02;
    }

    protected Object a0(Object obj) {
        throw new ft.n(Reflection.getOrCreateKotlinClass(getClass()) + " can't retrieve untyped values");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b0() {
        return CollectionsKt.B0(this.f31115a);
    }

    @Override // kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
    }

    protected abstract Object c0(SerialDescriptor serialDescriptor, int i10);

    public final ArrayList d0() {
        return this.f31115a;
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        return S(e0(), enumDescriptor);
    }

    protected final Object e0() {
        ArrayList arrayList = this.f31115a;
        Object remove = arrayList.remove(CollectionsKt.n(arrayList));
        this.f31116b = true;
        return remove;
    }

    @Override // kotlinx.serialization.encoding.c
    public final long f(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return W(c0(descriptor, i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f0(Object obj) {
        this.f31115a.add(obj);
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final int h() {
        return V(e0());
    }

    @Override // kotlinx.serialization.encoding.c
    public final int i(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return V(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.c
    public int k(SerialDescriptor serialDescriptor) {
        return c.a.a(this, serialDescriptor);
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final long l() {
        return W(e0());
    }

    @Override // kotlinx.serialization.encoding.c
    public final String m(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return Z(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.c
    public final Object n(SerialDescriptor descriptor, int i10, final DeserializationStrategy deserializer, final Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        return g0(c0(descriptor, i10), new Function0() { // from class: jt.p2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Object L;
                L = q2.L(q2.this, deserializer, obj);
                return L;
            }
        });
    }

    @Override // kotlinx.serialization.encoding.c
    public boolean p() {
        return c.a.b(this);
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return U(e0(), descriptor);
    }

    @Override // kotlinx.serialization.encoding.c
    public final Decoder r(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return U(c0(descriptor, i10), descriptor.g(i10));
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final short s() {
        return Y(e0());
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final float t() {
        return T(e0());
    }

    @Override // kotlinx.serialization.encoding.c
    public final float u(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return T(c0(descriptor, i10));
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final double v() {
        return R(e0());
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final boolean w() {
        return O(e0());
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final char x() {
        return Q(e0());
    }

    @Override // kotlinx.serialization.encoding.c
    public final Object y(SerialDescriptor descriptor, int i10, final DeserializationStrategy deserializer, final Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        return g0(c0(descriptor, i10), new Function0() { // from class: jt.o2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Object M;
                M = q2.M(q2.this, deserializer, obj);
                return M;
            }
        });
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public final String z() {
        return Z(e0());
    }
}
