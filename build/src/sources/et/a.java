package et;

import gt.a3;
import gt.b1;
import gt.c3;
import gt.d3;
import gt.e3;
import gt.g0;
import gt.i2;
import gt.k1;
import gt.l1;
import gt.m2;
import gt.n2;
import gt.o;
import gt.p0;
import gt.q1;
import gt.t2;
import gt.u0;
import gt.w0;
import gt.w2;
import gt.y;
import gt.y2;
import gt.z0;
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
import ls.a;
import or.b0;
import or.e0;
import or.x;
import or.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static final KSerializer A(FloatCompanionObject floatCompanionObject) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return g0.f25262a;
    }

    public static final KSerializer B(IntCompanionObject intCompanionObject) {
        Intrinsics.checkNotNullParameter(intCompanionObject, "<this>");
        return p0.f25318a;
    }

    public static final KSerializer C(LongCompanionObject longCompanionObject) {
        Intrinsics.checkNotNullParameter(longCompanionObject, "<this>");
        return z0.f25376a;
    }

    public static final KSerializer D(ShortCompanionObject shortCompanionObject) {
        Intrinsics.checkNotNullParameter(shortCompanionObject, "<this>");
        return m2.f25296a;
    }

    public static final KSerializer E(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        return n2.f25302a;
    }

    public static final KSerializer F(Duration.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y.f25363a;
    }

    public static final KSerializer G(a.C0486a c0486a) {
        Intrinsics.checkNotNullParameter(c0486a, "<this>");
        return e3.f25254a;
    }

    public static final KSerializer H(x.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return w2.f25354a;
    }

    public static final KSerializer I(z.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y2.f25368a;
    }

    public static final KSerializer J(b0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a3.f25227a;
    }

    public static final KSerializer K(e0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return c3.f25243a;
    }

    public static final KSerializer a(KClass kClass, KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new i2(kClass, elementSerializer);
    }

    public static final KSerializer b() {
        return kotlinx.serialization.internal.a.f35088c;
    }

    public static final KSerializer c() {
        return b.f35089c;
    }

    public static final KSerializer d() {
        return c.f35090c;
    }

    public static final KSerializer e() {
        return d.f35091c;
    }

    public static final KSerializer f() {
        return e.f35092c;
    }

    public static final KSerializer g() {
        return f.f35093c;
    }

    public static final KSerializer h(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new gt.f(elementSerializer);
    }

    public static final KSerializer i() {
        return g.f35094c;
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
        return k1.f25285a;
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
        return h.f35095c;
    }

    public static final KSerializer p(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        return new t2(aSerializer, bSerializer, cSerializer);
    }

    public static final KSerializer q() {
        return i.f35096c;
    }

    public static final KSerializer r() {
        return j.f35097c;
    }

    public static final KSerializer s() {
        return k.f35098c;
    }

    public static final KSerializer t() {
        return l.f35099c;
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
        return d3.f25250b;
    }

    public static final KSerializer w(BooleanCompanionObject booleanCompanionObject) {
        Intrinsics.checkNotNullParameter(booleanCompanionObject, "<this>");
        return gt.h.f25266a;
    }

    public static final KSerializer x(ByteCompanionObject byteCompanionObject) {
        Intrinsics.checkNotNullParameter(byteCompanionObject, "<this>");
        return gt.j.f25275a;
    }

    public static final KSerializer y(CharCompanionObject charCompanionObject) {
        Intrinsics.checkNotNullParameter(charCompanionObject, "<this>");
        return o.f25304a;
    }

    public static final KSerializer z(DoubleCompanionObject doubleCompanionObject) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return gt.x.f25356a;
    }
}
