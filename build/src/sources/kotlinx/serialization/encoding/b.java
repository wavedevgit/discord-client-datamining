package kotlinx.serialization.encoding;

import dt.o;
import gt.i1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b implements Encoder, CompositeEncoder {
    public void A(SerialDescriptor descriptor, int i10, o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (G(descriptor, i10)) {
            H(serializer, obj);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void B(int i10);

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void C(SerialDescriptor descriptor, int i10, short s10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            p(s10);
        }
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void D(SerialDescriptor descriptor, int i10, double d10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            f(d10);
        }
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void E(SerialDescriptor descriptor, int i10, long j10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            k(j10);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void F(String str);

    public boolean G(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return true;
    }

    public void H(o oVar, Object obj) {
        Encoder.a.c(this, oVar, obj);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public CompositeEncoder b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this;
    }

    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final Encoder e(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            return j(descriptor.g(i10));
        }
        return i1.f25271a;
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void f(double d10);

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void g(byte b10);

    @Override // kotlinx.serialization.encoding.Encoder
    public CompositeEncoder h(SerialDescriptor serialDescriptor, int i10) {
        return Encoder.a.a(this, serialDescriptor, i10);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public Encoder j(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this;
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void k(long j10);

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public void l(SerialDescriptor descriptor, int i10, o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (G(descriptor, i10)) {
            y(serializer, obj);
        }
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void m(SerialDescriptor descriptor, int i10, char c10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            t(c10);
        }
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void o(SerialDescriptor descriptor, int i10, byte b10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            g(b10);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void p(short s10);

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void q(boolean z10);

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void r(SerialDescriptor descriptor, int i10, float f10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            s(f10);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void s(float f10);

    @Override // kotlinx.serialization.encoding.Encoder
    public abstract void t(char c10);

    @Override // kotlinx.serialization.encoding.Encoder
    public void u() {
        Encoder.a.b(this);
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void v(SerialDescriptor descriptor, int i10, int i11) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            B(i11);
        }
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void w(SerialDescriptor descriptor, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (G(descriptor, i10)) {
            q(z10);
        }
    }

    @Override // kotlinx.serialization.encoding.CompositeEncoder
    public final void x(SerialDescriptor descriptor, int i10, String value) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(value, "value");
        if (G(descriptor, i10)) {
            F(value);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void y(o oVar, Object obj) {
        Encoder.a.d(this, oVar, obj);
    }

    public boolean z(SerialDescriptor serialDescriptor, int i10) {
        return CompositeEncoder.a.a(this, serialDescriptor, i10);
    }
}
