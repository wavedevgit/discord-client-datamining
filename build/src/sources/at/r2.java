package at;

import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r2 implements Encoder, CompositeEncoder {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f6878a = new ArrayList();

    private final boolean G(SerialDescriptor serialDescriptor, int i10) {
        b0(Z(serialDescriptor, i10));
        return true;
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public boolean A(SerialDescriptor serialDescriptor, int i10) {
        return CompositeEncoder.a.a(this, serialDescriptor, i10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void B(int i10) {
        P(a0(), i10);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void C(SerialDescriptor descriptor, int i10, short s10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        T(Z(descriptor, i10), s10);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void D(SerialDescriptor descriptor, int i10, double d10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        L(Z(descriptor, i10), d10);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void E(SerialDescriptor descriptor, int i10, long j10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Q(Z(descriptor, i10), j10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void F(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        U(a0(), value);
    }

    public void H(xs.o oVar, Object obj) {
        Encoder.a.c(this, oVar, obj);
    }

    protected void I(Object obj, boolean z10) {
        V(obj, Boolean.valueOf(z10));
    }

    protected void J(Object obj, byte b10) {
        V(obj, Byte.valueOf(b10));
    }

    protected void K(Object obj, char c10) {
        V(obj, Character.valueOf(c10));
    }

    protected void L(Object obj, double d10) {
        V(obj, Double.valueOf(d10));
    }

    protected abstract void M(Object obj, SerialDescriptor serialDescriptor, int i10);

    protected void N(Object obj, float f10) {
        V(obj, Float.valueOf(f10));
    }

    protected Encoder O(Object obj, SerialDescriptor inlineDescriptor) {
        Intrinsics.checkNotNullParameter(inlineDescriptor, "inlineDescriptor");
        b0(obj);
        return this;
    }

    protected void P(Object obj, int i10) {
        V(obj, Integer.valueOf(i10));
    }

    protected void Q(Object obj, long j10) {
        V(obj, Long.valueOf(j10));
    }

    protected abstract void S(Object obj);

    protected void T(Object obj, short s10) {
        V(obj, Short.valueOf(s10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void U(Object obj, String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        V(obj, value);
    }

    protected abstract void V(Object obj, Object obj2);

    protected void W(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
    }

    protected final Object X() {
        return CollectionsKt.z0(this.f6878a);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object Y() {
        return CollectionsKt.B0(this.f6878a);
    }

    protected abstract Object Z(SerialDescriptor serialDescriptor, int i10);

    protected final Object a0() {
        if (!this.f6878a.isEmpty()) {
            ArrayList arrayList = this.f6878a;
            return arrayList.remove(CollectionsKt.n(arrayList));
        }
        throw new xs.n("No tag in stack for requested element");
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public CompositeEncoder b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this;
    }

    protected final void b0(Object obj) {
        this.f6878a.add(obj);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (!this.f6878a.isEmpty()) {
            a0();
        }
        W(descriptor);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final Encoder e(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return O(Z(descriptor, i10), descriptor.g(i10));
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void f(double d10) {
        L(a0(), d10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void g(byte b10) {
        J(a0(), b10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void h(xs.o oVar, Object obj);

    @Override // kotlinx.serialization.encoding.Encoder
    public CompositeEncoder i(SerialDescriptor serialDescriptor, int i10) {
        return Encoder.a.a(this, serialDescriptor, i10);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public void j(SerialDescriptor descriptor, int i10, xs.o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (G(descriptor, i10)) {
            h(serializer, obj);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void k(SerialDescriptor enumDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        M(a0(), enumDescriptor, i10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public Encoder l(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return O(a0(), descriptor);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void m(long j10) {
        Q(a0(), j10);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void n(SerialDescriptor descriptor, int i10, char c10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        K(Z(descriptor, i10), c10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void o() {
        S(a0());
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void p(SerialDescriptor descriptor, int i10, byte b10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        J(Z(descriptor, i10), b10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void q(short s10) {
        T(a0(), s10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void r(boolean z10) {
        I(a0(), z10);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void s(SerialDescriptor descriptor, int i10, float f10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        N(Z(descriptor, i10), f10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void t(float f10) {
        N(a0(), f10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public final void u(char c10) {
        K(a0(), c10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void v() {
        R(X());
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void w(SerialDescriptor descriptor, int i10, int i11) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        P(Z(descriptor, i10), i11);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void x(SerialDescriptor descriptor, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        I(Z(descriptor, i10), z10);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void y(SerialDescriptor descriptor, int i10, String value) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(value, "value");
        U(Z(descriptor, i10), value);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public void z(SerialDescriptor descriptor, int i10, xs.o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (G(descriptor, i10)) {
            H(serializer, obj);
        }
    }

    protected void R(Object obj) {
    }
}
