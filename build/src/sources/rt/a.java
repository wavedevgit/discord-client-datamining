package rt;

import as.b0;
import as.e0;
import as.x;
import as.z;
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
import tt.a3;
import tt.b1;
import tt.c3;
import tt.d3;
import tt.e3;
import tt.g0;
import tt.h;
import tt.i2;
import tt.j;
import tt.k1;
import tt.l1;
import tt.m2;
import tt.n2;
import tt.o;
import tt.p0;
import tt.q1;
import tt.t2;
import tt.u0;
import tt.w0;
import tt.w2;
import tt.x;
import tt.y;
import tt.y2;
import tt.z0;
import xs.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static final KSerializer A(BooleanCompanionObject booleanCompanionObject) {
        Intrinsics.checkNotNullParameter(booleanCompanionObject, "<this>");
        return h.f50565a;
    }

    public static final KSerializer B(ByteCompanionObject byteCompanionObject) {
        Intrinsics.checkNotNullParameter(byteCompanionObject, "<this>");
        return j.f50574a;
    }

    public static final KSerializer C(CharCompanionObject charCompanionObject) {
        Intrinsics.checkNotNullParameter(charCompanionObject, "<this>");
        return o.f50603a;
    }

    public static final KSerializer D(DoubleCompanionObject doubleCompanionObject) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return x.f50655a;
    }

    public static final KSerializer E(FloatCompanionObject floatCompanionObject) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return g0.f50561a;
    }

    public static final KSerializer F(IntCompanionObject intCompanionObject) {
        Intrinsics.checkNotNullParameter(intCompanionObject, "<this>");
        return p0.f50617a;
    }

    public static final KSerializer G(LongCompanionObject longCompanionObject) {
        Intrinsics.checkNotNullParameter(longCompanionObject, "<this>");
        return z0.f50675a;
    }

    public static final KSerializer H(ShortCompanionObject shortCompanionObject) {
        Intrinsics.checkNotNullParameter(shortCompanionObject, "<this>");
        return m2.f50595a;
    }

    public static final KSerializer I(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        return n2.f50601a;
    }

    public static final KSerializer J(Duration.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y.f50662a;
    }

    public static final KSerializer K(a.C0766a c0766a) {
        Intrinsics.checkNotNullParameter(c0766a, "<this>");
        return e3.f50553a;
    }

    public static final KSerializer a(KClass kClass, KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new i2(kClass, elementSerializer);
    }

    public static final KSerializer b() {
        return kotlinx.serialization.internal.a.f35656c;
    }

    public static final KSerializer c() {
        return b.f35657c;
    }

    public static final KSerializer d() {
        return c.f35658c;
    }

    public static final KSerializer e() {
        return d.f35659c;
    }

    public static final KSerializer f() {
        return e.f35660c;
    }

    public static final KSerializer g() {
        return f.f35661c;
    }

    public static final KSerializer h(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new tt.f(elementSerializer);
    }

    public static final KSerializer i() {
        return g.f35662c;
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
        return k1.f50584a;
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
        return kotlinx.serialization.internal.h.f35663c;
    }

    public static final KSerializer p(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        return new t2(aSerializer, bSerializer, cSerializer);
    }

    public static final KSerializer q() {
        return i.f35664c;
    }

    public static final KSerializer r() {
        return kotlinx.serialization.internal.j.f35665c;
    }

    public static final KSerializer s() {
        return k.f35666c;
    }

    public static final KSerializer t() {
        return l.f35667c;
    }

    public static final KSerializer u(KSerializer kSerializer) {
        Intrinsics.checkNotNullParameter(kSerializer, "<this>");
        if (kSerializer.getDescriptor().b()) {
            return kSerializer;
        }
        return new l1(kSerializer);
    }

    public static final KSerializer v(x.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return w2.f50653a;
    }

    public static final KSerializer w(z.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y2.f50667a;
    }

    public static final KSerializer x(b0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a3.f50526a;
    }

    public static final KSerializer y(e0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return c3.f50542a;
    }

    public static final KSerializer z(Unit unit) {
        Intrinsics.checkNotNullParameter(unit, "<this>");
        return d3.f50549b;
    }
}
