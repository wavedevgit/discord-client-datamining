package ys;

import at.a3;
import at.b1;
import at.c3;
import at.d3;
import at.e3;
import at.g0;
import at.h;
import at.i2;
import at.j;
import at.k1;
import at.l1;
import at.m2;
import at.n2;
import at.o;
import at.p0;
import at.q1;
import at.t2;
import at.u0;
import at.w0;
import at.w2;
import at.x;
import at.y;
import at.y2;
import at.z0;
import fs.a;
import ir.b0;
import ir.e0;
import ir.x;
import ir.z;
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
        return d3.f6796b;
    }

    public static final KSerializer B(BooleanCompanionObject booleanCompanionObject) {
        Intrinsics.checkNotNullParameter(booleanCompanionObject, "<this>");
        return h.f6812a;
    }

    public static final KSerializer C(ByteCompanionObject byteCompanionObject) {
        Intrinsics.checkNotNullParameter(byteCompanionObject, "<this>");
        return j.f6821a;
    }

    public static final KSerializer D(CharCompanionObject charCompanionObject) {
        Intrinsics.checkNotNullParameter(charCompanionObject, "<this>");
        return o.f6850a;
    }

    public static final KSerializer E(DoubleCompanionObject doubleCompanionObject) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return x.f6902a;
    }

    public static final KSerializer F(FloatCompanionObject floatCompanionObject) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return g0.f6808a;
    }

    public static final KSerializer G(IntCompanionObject intCompanionObject) {
        Intrinsics.checkNotNullParameter(intCompanionObject, "<this>");
        return p0.f6864a;
    }

    public static final KSerializer H(LongCompanionObject longCompanionObject) {
        Intrinsics.checkNotNullParameter(longCompanionObject, "<this>");
        return z0.f6922a;
    }

    public static final KSerializer I(ShortCompanionObject shortCompanionObject) {
        Intrinsics.checkNotNullParameter(shortCompanionObject, "<this>");
        return m2.f6842a;
    }

    public static final KSerializer J(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        return n2.f6848a;
    }

    public static final KSerializer K(Duration.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y.f6909a;
    }

    public static final KSerializer a(KClass kClass, KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new i2(kClass, elementSerializer);
    }

    public static final KSerializer b() {
        return kotlinx.serialization.internal.a.f36382c;
    }

    public static final KSerializer c() {
        return b.f36383c;
    }

    public static final KSerializer d() {
        return c.f36384c;
    }

    public static final KSerializer e() {
        return d.f36385c;
    }

    public static final KSerializer f() {
        return e.f36386c;
    }

    public static final KSerializer g() {
        return f.f36387c;
    }

    public static final KSerializer h(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new at.f(elementSerializer);
    }

    public static final KSerializer i() {
        return g.f36388c;
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
        return k1.f6831a;
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
        return kotlinx.serialization.internal.h.f36389c;
    }

    public static final KSerializer p(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        return new t2(aSerializer, bSerializer, cSerializer);
    }

    public static final KSerializer q() {
        return i.f36390c;
    }

    public static final KSerializer r() {
        return kotlinx.serialization.internal.j.f36391c;
    }

    public static final KSerializer s() {
        return k.f36392c;
    }

    public static final KSerializer t() {
        return l.f36393c;
    }

    public static final KSerializer u(KSerializer kSerializer) {
        Intrinsics.checkNotNullParameter(kSerializer, "<this>");
        if (kSerializer.getDescriptor().b()) {
            return kSerializer;
        }
        return new l1(kSerializer);
    }

    public static final KSerializer v(a.C0330a c0330a) {
        Intrinsics.checkNotNullParameter(c0330a, "<this>");
        return e3.f6800a;
    }

    public static final KSerializer w(x.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return w2.f6900a;
    }

    public static final KSerializer x(z.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y2.f6914a;
    }

    public static final KSerializer y(b0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a3.f6773a;
    }

    public static final KSerializer z(e0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return c3.f6789a;
    }
}
