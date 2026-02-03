package bt;

import dt.a3;
import dt.b1;
import dt.c3;
import dt.d3;
import dt.e3;
import dt.g0;
import dt.i2;
import dt.k1;
import dt.l1;
import dt.m2;
import dt.n2;
import dt.o;
import dt.p0;
import dt.q1;
import dt.t2;
import dt.u0;
import dt.w0;
import dt.w2;
import dt.x;
import dt.y;
import dt.y2;
import dt.z0;
import is.a;
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
import lr.b0;
import lr.e0;
import lr.x;
import lr.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static final KSerializer A(DoubleCompanionObject doubleCompanionObject) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return x.f21032a;
    }

    public static final KSerializer B(FloatCompanionObject floatCompanionObject) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return g0.f20938a;
    }

    public static final KSerializer C(IntCompanionObject intCompanionObject) {
        Intrinsics.checkNotNullParameter(intCompanionObject, "<this>");
        return p0.f20994a;
    }

    public static final KSerializer D(LongCompanionObject longCompanionObject) {
        Intrinsics.checkNotNullParameter(longCompanionObject, "<this>");
        return z0.f21052a;
    }

    public static final KSerializer E(ShortCompanionObject shortCompanionObject) {
        Intrinsics.checkNotNullParameter(shortCompanionObject, "<this>");
        return m2.f20972a;
    }

    public static final KSerializer F(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        return n2.f20978a;
    }

    public static final KSerializer G(Duration.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y.f21039a;
    }

    public static final KSerializer H(x.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return w2.f21030a;
    }

    public static final KSerializer I(z.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y2.f21044a;
    }

    public static final KSerializer J(b0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a3.f20903a;
    }

    public static final KSerializer K(e0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return c3.f20919a;
    }

    public static final KSerializer a(KClass kClass, KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new i2(kClass, elementSerializer);
    }

    public static final KSerializer b() {
        return kotlinx.serialization.internal.a.f35564c;
    }

    public static final KSerializer c() {
        return b.f35565c;
    }

    public static final KSerializer d() {
        return c.f35566c;
    }

    public static final KSerializer e() {
        return d.f35567c;
    }

    public static final KSerializer f() {
        return e.f35568c;
    }

    public static final KSerializer g() {
        return f.f35569c;
    }

    public static final KSerializer h(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new dt.f(elementSerializer);
    }

    public static final KSerializer i() {
        return g.f35570c;
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
        return k1.f20961a;
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
        return h.f35571c;
    }

    public static final KSerializer p(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        return new t2(aSerializer, bSerializer, cSerializer);
    }

    public static final KSerializer q() {
        return i.f35572c;
    }

    public static final KSerializer r() {
        return j.f35573c;
    }

    public static final KSerializer s() {
        return k.f35574c;
    }

    public static final KSerializer t() {
        return l.f35575c;
    }

    public static final KSerializer u(KSerializer kSerializer) {
        Intrinsics.checkNotNullParameter(kSerializer, "<this>");
        if (kSerializer.getDescriptor().b()) {
            return kSerializer;
        }
        return new l1(kSerializer);
    }

    public static final KSerializer v(a.C0410a c0410a) {
        Intrinsics.checkNotNullParameter(c0410a, "<this>");
        return e3.f20930a;
    }

    public static final KSerializer w(Unit unit) {
        Intrinsics.checkNotNullParameter(unit, "<this>");
        return d3.f20926b;
    }

    public static final KSerializer x(BooleanCompanionObject booleanCompanionObject) {
        Intrinsics.checkNotNullParameter(booleanCompanionObject, "<this>");
        return dt.h.f20942a;
    }

    public static final KSerializer y(ByteCompanionObject byteCompanionObject) {
        Intrinsics.checkNotNullParameter(byteCompanionObject, "<this>");
        return dt.j.f20951a;
    }

    public static final KSerializer z(CharCompanionObject charCompanionObject) {
        Intrinsics.checkNotNullParameter(charCompanionObject, "<this>");
        return o.f20980a;
    }
}
