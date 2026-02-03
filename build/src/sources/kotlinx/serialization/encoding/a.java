package kotlinx.serialization.encoding;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.c;
import ys.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements Decoder, c {
    @Override // kotlinx.serialization.encoding.c
    public final char A(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return x();
    }

    @Override // kotlinx.serialization.encoding.c
    public final byte B(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return H();
    }

    @Override // kotlinx.serialization.encoding.c
    public final boolean C(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return w();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public boolean D() {
        return true;
    }

    @Override // kotlinx.serialization.encoding.c
    public final short E(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return s();
    }

    @Override // kotlinx.serialization.encoding.c
    public final double F(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return v();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public Object G(DeserializationStrategy deserializationStrategy) {
        return Decoder.a.a(this, deserializationStrategy);
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public abstract byte H();

    public Object I(DeserializationStrategy deserializer, Object obj) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        return G(deserializer);
    }

    public Object J() {
        throw new n(Reflection.getOrCreateKotlinClass(getClass()) + " can't retrieve untyped values");
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this;
    }

    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Object J = J();
        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type kotlin.Int");
        return ((Integer) J).intValue();
    }

    @Override // kotlinx.serialization.encoding.c
    public final long f(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return l();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public abstract int h();

    @Override // kotlinx.serialization.encoding.c
    public final int i(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return h();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.c
    public int k(SerialDescriptor serialDescriptor) {
        return c.a.a(this, serialDescriptor);
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public abstract long l();

    @Override // kotlinx.serialization.encoding.c
    public final String m(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return z();
    }

    @Override // kotlinx.serialization.encoding.c
    public final Object n(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (!deserializer.getDescriptor().b() && !D()) {
            return j();
        }
        return I(deserializer, obj);
    }

    @Override // kotlinx.serialization.encoding.c
    public boolean p() {
        return c.a.b(this);
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this;
    }

    @Override // kotlinx.serialization.encoding.c
    public Decoder r(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return q(descriptor.g(i10));
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public abstract short s();

    @Override // kotlinx.serialization.encoding.Decoder
    public float t() {
        Object J = J();
        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type kotlin.Float");
        return ((Float) J).floatValue();
    }

    @Override // kotlinx.serialization.encoding.c
    public final float u(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return t();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public double v() {
        Object J = J();
        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type kotlin.Double");
        return ((Double) J).doubleValue();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public boolean w() {
        Object J = J();
        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type kotlin.Boolean");
        return ((Boolean) J).booleanValue();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public char x() {
        Object J = J();
        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type kotlin.Char");
        return ((Character) J).charValue();
    }

    public Object y(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        return I(deserializer, obj);
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public String z() {
        Object J = J();
        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type kotlin.String");
        return (String) J;
    }
}
