package gt;

import jt.a3;
import jt.b1;
import jt.c3;
import jt.d3;
import jt.e3;
import jt.g0;
import jt.i2;
import jt.k1;
import jt.l1;
import jt.m2;
import jt.n2;
import jt.o;
import jt.p0;
import jt.q1;
import jt.t2;
import jt.u0;
import jt.w0;
import jt.w2;
import jt.y;
import jt.y2;
import jt.z0;
import kotlin.Unit;
import kotlin.jvm.internal.BooleanCompanionObject;
import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.jvm.internal.CharCompanionObject;
import kotlin.jvm.internal.DoubleCompanionObject;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.IntCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.ShortCompanionObject;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.reflect.KClass;
import kotlin.time.Duration;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.b;
import kotlinx.serialization.internal.c;
import kotlinx.serialization.internal.d;
import kotlinx.serialization.internal.e;
import kotlinx.serialization.internal.f;
import kotlinx.serialization.internal.g;
import kotlinx.serialization.internal.h;
import kotlinx.serialization.internal.i;
import kotlinx.serialization.internal.j;
import kotlinx.serialization.internal.k;
import kotlinx.serialization.internal.l;
import ns.a;
import qr.b0;
import qr.e0;
import qr.x;
import qr.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static final KSerializer A(FloatCompanionObject floatCompanionObject) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return g0.f31001a;
    }

    public static final KSerializer B(IntCompanionObject intCompanionObject) {
        Intrinsics.checkNotNullParameter(intCompanionObject, "<this>");
        return p0.f31057a;
    }

    public static final KSerializer C(LongCompanionObject longCompanionObject) {
        Intrinsics.checkNotNullParameter(longCompanionObject, "<this>");
        return z0.f31115a;
    }

    public static final KSerializer D(ShortCompanionObject shortCompanionObject) {
        Intrinsics.checkNotNullParameter(shortCompanionObject, "<this>");
        return m2.f31035a;
    }

    public static final KSerializer E(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        return n2.f31041a;
    }

    public static final KSerializer F(Duration.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y.f31102a;
    }

    public static final KSerializer G(a.C0551a c0551a) {
        Intrinsics.checkNotNullParameter(c0551a, "<this>");
        return e3.f30993a;
    }

    public static final KSerializer H(x.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return w2.f31093a;
    }

    public static final KSerializer I(z.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y2.f31107a;
    }

    public static final KSerializer J(b0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a3.f30966a;
    }

    public static final KSerializer K(e0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return c3.f30982a;
    }

    public static final KSerializer a(KClass kClass, KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new i2(kClass, elementSerializer);
    }

    public static final KSerializer b() {
        return kotlinx.serialization.internal.a.f35108c;
    }

    public static final KSerializer c() {
        return b.f35109c;
    }

    public static final KSerializer d() {
        return c.f35110c;
    }

    public static final KSerializer e() {
        return d.f35111c;
    }

    public static final KSerializer f() {
        return e.f35112c;
    }

    public static final KSerializer g() {
        return f.f35113c;
    }

    public static final KSerializer h(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new jt.f(elementSerializer);
    }

    public static final KSerializer i() {
        return g.f35114c;
    }

    public static final KSerializer j(KSerializer keySerializer, KSerializer valueSerializer) {
        Intrinsics.checkNotNullParameter(keySerializer, "keySerializer");
        Intrinsics.checkNotNullParameter(valueSerializer, "valueSerializer");
        return new b1(keySerializer, valueSerializer);
    }

    public static final KSerializer k(KSerializer keySerializer, KSerializer valueSerializer) {
        Intrinsics.checkNotNullParameter(keySerializer, "keySerializer");
        Intrinsics.checkNotNullParameter(valueSerializer, "valueSerializer");
        return new u0(keySerializer, valueSerializer);
    }

    public static final KSerializer l() {
        return k1.f31024a;
    }

    public static final KSerializer m(KSerializer keySerializer, KSerializer valueSerializer) {
        Intrinsics.checkNotNullParameter(keySerializer, "keySerializer");
        Intrinsics.checkNotNullParameter(valueSerializer, "valueSerializer");
        return new q1(keySerializer, valueSerializer);
    }

    public static final KSerializer n(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new w0(elementSerializer);
    }

    public static final KSerializer o() {
        return h.f35115c;
    }

    public static final KSerializer p(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        return new t2(aSerializer, bSerializer, cSerializer);
    }

    public static final KSerializer q() {
        return i.f35116c;
    }

    public static final KSerializer r() {
        return j.f35117c;
    }

    public static final KSerializer s() {
        return k.f35118c;
    }

    public static final KSerializer t() {
        return l.f35119c;
    }

    public static final KSerializer u(KSerializer kSerializer) {
        Intrinsics.checkNotNullParameter(kSerializer, "<this>");
        if (kSerializer.getDescriptor().b()) {
            return kSerializer;
        }
        return new l1(kSerializer);
    }

    public static final KSerializer v(Unit unit) {
        Intrinsics.checkNotNullParameter(unit, "<this>");
        return d3.f30989b;
    }

    public static final KSerializer w(BooleanCompanionObject booleanCompanionObject) {
        Intrinsics.checkNotNullParameter(booleanCompanionObject, "<this>");
        return jt.h.f31005a;
    }

    public static final KSerializer x(ByteCompanionObject byteCompanionObject) {
        Intrinsics.checkNotNullParameter(byteCompanionObject, "<this>");
        return jt.j.f31014a;
    }

    public static final KSerializer y(CharCompanionObject charCompanionObject) {
        Intrinsics.checkNotNullParameter(charCompanionObject, "<this>");
        return o.f31043a;
    }

    public static final KSerializer z(DoubleCompanionObject doubleCompanionObject) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return jt.x.f31095a;
    }
}
