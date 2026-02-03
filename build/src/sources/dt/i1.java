package dt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i1 extends kotlinx.serialization.encoding.b {

    /* renamed from: a  reason: collision with root package name */
    public static final i1 f20947a = new i1();

    /* renamed from: b  reason: collision with root package name */
    private static final gt.b f20948b = gt.c.a();

    private i1() {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void F(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public gt.b a() {
        return f20948b;
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void j(SerialDescriptor enumDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void n() {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void A(int i10) {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void f(double d10) {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void g(byte b10) {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void l(long j10) {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void p(short s10) {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void q(boolean z10) {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void t(float f10) {
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void u(char c10) {
    }
}
