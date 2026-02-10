package ht;

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
import kt.a3;
import kt.b1;
import kt.c3;
import kt.d3;
import kt.e3;
import kt.g0;
import kt.i2;
import kt.k1;
import kt.l1;
import kt.m2;
import kt.n2;
import kt.o;
import kt.p0;
import kt.q1;
import kt.t2;
import kt.u0;
import kt.w0;
import kt.w2;
import kt.y;
import kt.y2;
import kt.z0;
import os.a;
import rr.b0;
import rr.e0;
import rr.x;
import rr.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {
    public static final KSerializer A(FloatCompanionObject floatCompanionObject) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return g0.f35141a;
    }

    public static final KSerializer B(IntCompanionObject intCompanionObject) {
        Intrinsics.checkNotNullParameter(intCompanionObject, "<this>");
        return p0.f35197a;
    }

    public static final KSerializer C(LongCompanionObject longCompanionObject) {
        Intrinsics.checkNotNullParameter(longCompanionObject, "<this>");
        return z0.f35255a;
    }

    public static final KSerializer D(ShortCompanionObject shortCompanionObject) {
        Intrinsics.checkNotNullParameter(shortCompanionObject, "<this>");
        return m2.f35175a;
    }

    public static final KSerializer E(StringCompanionObject stringCompanionObject) {
        Intrinsics.checkNotNullParameter(stringCompanionObject, "<this>");
        return n2.f35181a;
    }

    public static final KSerializer F(Duration.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y.f35242a;
    }

    public static final KSerializer G(a.C0604a c0604a) {
        Intrinsics.checkNotNullParameter(c0604a, "<this>");
        return e3.f35133a;
    }

    public static final KSerializer H(x.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return w2.f35233a;
    }

    public static final KSerializer I(z.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return y2.f35247a;
    }

    public static final KSerializer J(b0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return a3.f35106a;
    }

    public static final KSerializer K(e0.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return c3.f35122a;
    }

    public static final KSerializer a(KClass kClass, KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new i2(kClass, elementSerializer);
    }

    public static final KSerializer b() {
        return kotlinx.serialization.internal.a.f34865c;
    }

    public static final KSerializer c() {
        return b.f34866c;
    }

    public static final KSerializer d() {
        return c.f34867c;
    }

    public static final KSerializer e() {
        return d.f34868c;
    }

    public static final KSerializer f() {
        return e.f34869c;
    }

    public static final KSerializer g() {
        return f.f34870c;
    }

    public static final KSerializer h(KSerializer elementSerializer) {
        Intrinsics.checkNotNullParameter(elementSerializer, "elementSerializer");
        return new kt.f(elementSerializer);
    }

    public static final KSerializer i() {
        return g.f34871c;
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
        return k1.f35164a;
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
        return h.f34872c;
    }

    public static final KSerializer p(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        return new t2(aSerializer, bSerializer, cSerializer);
    }

    public static final KSerializer q() {
        return i.f34873c;
    }

    public static final KSerializer r() {
        return j.f34874c;
    }

    public static final KSerializer s() {
        return k.f34875c;
    }

    public static final KSerializer t() {
        return l.f34876c;
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
        return d3.f35129b;
    }

    public static final KSerializer w(BooleanCompanionObject booleanCompanionObject) {
        Intrinsics.checkNotNullParameter(booleanCompanionObject, "<this>");
        return kt.h.f35145a;
    }

    public static final KSerializer x(ByteCompanionObject byteCompanionObject) {
        Intrinsics.checkNotNullParameter(byteCompanionObject, "<this>");
        return kt.j.f35154a;
    }

    public static final KSerializer y(CharCompanionObject charCompanionObject) {
        Intrinsics.checkNotNullParameter(charCompanionObject, "<this>");
        return o.f35183a;
    }

    public static final KSerializer z(DoubleCompanionObject doubleCompanionObject) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return kt.x.f35235a;
    }
}
