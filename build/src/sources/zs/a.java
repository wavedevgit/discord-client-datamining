package zs;

import bt.a3;
import bt.b1;
import bt.c3;
import bt.d3;
import bt.e3;
import bt.g0;
import bt.h;
import bt.i2;
import bt.j;
import bt.k1;
import bt.l1;
import bt.m2;
import bt.n2;
import bt.o;
import bt.p0;
import bt.q1;
import bt.t2;
import bt.u0;
import bt.w0;
import bt.w2;
import bt.x;
import bt.y;
import bt.y2;
import bt.z0;
import gs.a;
import jr.b0;
import jr.e0;
import jr.x;
import jr.z;
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
import kotlinx.serialization.internal.i;
import kotlinx.serialization.internal.k;
import kotlinx.serialization.internal.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static final KSerializer A(Unit unit) {
        Intrinsics.checkNotNullParameter(unit, "<this>");
        return d3.f7610b;
    }

    public static final KSerializer B(BooleanCompanionObject booleanCompanionObject) {
        Intrinsics.checkNotNullParameter(booleanCompanionObject, "<this>");
        return h.f7626a;
    }

    public static final KSerializer C(ByteCompanionObject byteCompanionObject) {
        Intrinsics.checkNotNullParameter(byteCompanionObject, "<this>");
        return j.f7635a;
    }

    public static final KSerializer D(CharCompanionObject charCompanionObject) {
        Intrinsics.checkNotNullParameter(charCompanionObject, "<this>");
        return o.f7664a;
    }

    public static final KSerializer E(DoubleCompanionObject doubleCompanionObject) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return x.f7716a;
    }

    public static final KSerializer F(FloatCompanionObject floatCompanionObject) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return g0.f7622a;
    }

    public static final KSerializer G(IntCompanionObject intCompanionObject) {
        Intrinsics.checkNotNullParameter(intCompanionObject, "<this>");
        return p0.f7678a;
    }

    public static final KSerializer H(LongCompanionObject longCompanionObject) {
        Intrinsics.checkNotNullParameter(longCompanionObject, "<this>");
        return z0.f7736a;
    }

    public static final KSerializer I(ShortCompanionObject shortCompanionObject) {
        Intrinsics.checkNotNullParameter(shortCompanionObject, "<this>");
        return m2.f7656a;
    }

    public static final KSerializer J(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        return n2.f7662a;
    }

    public static final KSerializer K(Duration.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y.f7723a;
    }

    public static final KSerializer a(KClass kClass, KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new i2(kClass, elementSerializer);
    }

    public static final KSerializer b() {
        return kotlinx.serialization.internal.a.f36174c;
    }

    public static final KSerializer c() {
        return b.f36175c;
    }

    public static final KSerializer d() {
        return c.f36176c;
    }

    public static final KSerializer e() {
        return d.f36177c;
    }

    public static final KSerializer f() {
        return e.f36178c;
    }

    public static final KSerializer g() {
        return f.f36179c;
    }

    public static final KSerializer h(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new bt.f(elementSerializer);
    }

    public static final KSerializer i() {
        return g.f36180c;
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
        return k1.f7645a;
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
        return kotlinx.serialization.internal.h.f36181c;
    }

    public static final KSerializer p(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        return new t2(aSerializer, bSerializer, cSerializer);
    }

    public static final KSerializer q() {
        return i.f36182c;
    }

    public static final KSerializer r() {
        return kotlinx.serialization.internal.j.f36183c;
    }

    public static final KSerializer s() {
        return k.f36184c;
    }

    public static final KSerializer t() {
        return l.f36185c;
    }

    public static final KSerializer u(KSerializer kSerializer) {
        Intrinsics.checkNotNullParameter(kSerializer, "<this>");
        if (kSerializer.getDescriptor().b()) {
            return kSerializer;
        }
        return new l1(kSerializer);
    }

    public static final KSerializer v(a.C0355a c0355a) {
        Intrinsics.checkNotNullParameter(c0355a, "<this>");
        return e3.f7614a;
    }

    public static final KSerializer w(x.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return w2.f7714a;
    }

    public static final KSerializer x(z.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y2.f7728a;
    }

    public static final KSerializer y(b0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a3.f7587a;
    }

    public static final KSerializer z(e0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return c3.f7603a;
    }
}
