package ft;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import ct.k;
import ct.l;
import dt.g1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.text.StringsKt;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonArray;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.JsonPrimitive;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c extends g1 implements et.f {

    /* renamed from: c  reason: collision with root package name */
    private final Json f24705c;

    /* renamed from: d  reason: collision with root package name */
    private final JsonElement f24706d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24707e;

    /* renamed from: f  reason: collision with root package name */
    protected final et.d f24708f;

    public /* synthetic */ c(Json json, JsonElement jsonElement, String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(json, jsonElement, str);
    }

    private final Void F0(JsonPrimitive jsonPrimitive, String str, String str2) {
        StringBuilder sb2;
        String str3;
        if (StringsKt.P(str, "i", false, 2, null)) {
            sb2 = new StringBuilder();
            str3 = "an ";
        } else {
            sb2 = new StringBuilder();
            str3 = "a ";
        }
        sb2.append(str3);
        sb2.append(str);
        String sb3 = sb2.toString();
        throw g0.e(-1, "Failed to parse literal '" + jsonPrimitive + "' as " + sb3 + " value at element: " + E0(str2), p0().toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: A0 */
    public short Y(String tag) {
        Short sh2;
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                int k10 = et.h.k(jsonPrimitive);
                if (-32768 <= k10 && k10 <= 32767) {
                    sh2 = Short.valueOf((short) k10);
                } else {
                    sh2 = null;
                }
                if (sh2 != null) {
                    return sh2.shortValue();
                }
                F0(jsonPrimitive, "short", tag);
                throw new lr.h();
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, "short", tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of short at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: B0 */
    public String Z(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            if (jsonPrimitive instanceof et.r) {
                et.r rVar = (et.r) jsonPrimitive;
                if (!rVar.c() && !d().e().q()) {
                    throw g0.e(-1, "String literal for key '" + tag + "' should be quoted at element: " + E0(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", p0().toString());
                }
                return rVar.b();
            }
            throw g0.e(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + E0(tag), p0().toString());
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of " + InquiryField.StringField.TYPE + " at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final String C0() {
        return this.f24707e;
    }

    @Override // dt.q2, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        return !(p0() instanceof JsonNull);
    }

    public abstract JsonElement D0();

    public final String E0(String currentTag) {
        Intrinsics.checkNotNullParameter(currentTag, "currentTag");
        return l0() + '.' + currentTag;
    }

    @Override // dt.q2, kotlinx.serialization.encoding.Decoder
    public Object G(DeserializationStrategy deserializer) {
        String str;
        JsonPrimitive o10;
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if ((deserializer instanceof dt.b) && !d().e().p()) {
            dt.b bVar = (dt.b) deserializer;
            String c10 = r0.c(bVar.getDescriptor(), d());
            JsonElement g10 = g();
            String h10 = bVar.getDescriptor().h();
            if (g10 instanceof JsonObject) {
                JsonObject jsonObject = (JsonObject) g10;
                JsonElement jsonElement = (JsonElement) jsonObject.get(c10);
                if (jsonElement != null && (o10 = et.h.o(jsonElement)) != null) {
                    str = et.h.h(o10);
                } else {
                    str = null;
                }
                try {
                    DeserializationStrategy b10 = at.h.b((dt.b) deserializer, this, str);
                    Intrinsics.checkNotNull(b10, "null cannot be cast to non-null type kotlinx.serialization.DeserializationStrategy<T of kotlinx.serialization.json.internal.PolymorphicKt.decodeSerializableValuePolymorphic>");
                    return d1.b(d(), c10, jsonObject, b10);
                } catch (at.n e10) {
                    String message = e10.getMessage();
                    Intrinsics.checkNotNull(message);
                    throw g0.e(-1, message, jsonObject.toString());
                }
            }
            throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonObject.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(g10.getClass()).getSimpleName() + " as the serialized body of " + h10 + " at element: " + l0(), g10.toString());
        }
        return deserializer.deserialize(this);
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public gt.b a() {
        return d().a();
    }

    @Override // kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        JsonElement p02 = p0();
        ct.k kind = descriptor.getKind();
        if (!Intrinsics.areEqual(kind, l.b.f19854a) && !(kind instanceof ct.d)) {
            if (Intrinsics.areEqual(kind, l.c.f19855a)) {
                Json d10 = d();
                SerialDescriptor a10 = f1.a(descriptor.g(0), d10.a());
                ct.k kind2 = a10.getKind();
                if (!(kind2 instanceof ct.e) && !Intrinsics.areEqual(kind2, k.b.f19852a)) {
                    if (d10.e().c()) {
                        Json d11 = d();
                        String h10 = descriptor.h();
                        if (p02 instanceof JsonArray) {
                            return new o0(d11, (JsonArray) p02);
                        }
                        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonArray.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(p02.getClass()).getSimpleName() + " as the serialized body of " + h10 + " at element: " + l0(), p02.toString());
                    }
                    throw g0.c(a10);
                }
                Json d12 = d();
                String h11 = descriptor.h();
                if (p02 instanceof JsonObject) {
                    return new p0(d12, (JsonObject) p02);
                }
                throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonObject.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(p02.getClass()).getSimpleName() + " as the serialized body of " + h11 + " at element: " + l0(), p02.toString());
            }
            Json d13 = d();
            String h12 = descriptor.h();
            if (p02 instanceof JsonObject) {
                return new n0(d13, (JsonObject) p02, this.f24707e, null, 8, null);
            }
            throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonObject.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(p02.getClass()).getSimpleName() + " as the serialized body of " + h12 + " at element: " + l0(), p02.toString());
        }
        Json d14 = d();
        String h13 = descriptor.h();
        if (p02 instanceof JsonArray) {
            return new o0(d14, (JsonArray) p02);
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonArray.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(p02.getClass()).getSimpleName() + " as the serialized body of " + h13 + " at element: " + l0(), p02.toString());
    }

    @Override // dt.q2, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
    }

    @Override // et.f
    public Json d() {
        return this.f24705c;
    }

    @Override // et.f
    public JsonElement g() {
        return p0();
    }

    @Override // dt.g1
    protected String h0(String parentName, String childName) {
        Intrinsics.checkNotNullParameter(parentName, "parentName");
        Intrinsics.checkNotNullParameter(childName, "childName");
        return childName;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract JsonElement o0(String str);

    /* JADX INFO: Access modifiers changed from: protected */
    public final JsonElement p0() {
        JsonElement o02;
        String str = (String) b0();
        if (str != null && (o02 = o0(str)) != null) {
            return o02;
        }
        return D0();
    }

    @Override // dt.q2, kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (b0() != null) {
            return super.q(descriptor);
        }
        return new k0(d(), D0(), this.f24707e).q(descriptor);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: q0 */
    public boolean O(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                Boolean g10 = et.h.g(jsonPrimitive);
                if (g10 != null) {
                    return g10.booleanValue();
                }
                F0(jsonPrimitive, InquiryField.BooleanField.TYPE, tag);
                throw new lr.h();
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, InquiryField.BooleanField.TYPE, tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of " + InquiryField.BooleanField.TYPE + " at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: r0 */
    public byte P(String tag) {
        Byte b10;
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                int k10 = et.h.k(jsonPrimitive);
                if (-128 <= k10 && k10 <= 127) {
                    b10 = Byte.valueOf((byte) k10);
                } else {
                    b10 = null;
                }
                if (b10 != null) {
                    return b10.byteValue();
                }
                F0(jsonPrimitive, "byte", tag);
                throw new lr.h();
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, "byte", tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of byte at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: s0 */
    public char Q(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                return StringsKt.w1(jsonPrimitive.b());
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, "char", tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of char at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: t0 */
    public double R(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                double i10 = et.h.i(jsonPrimitive);
                if (!d().e().b()) {
                    if (!Double.isInfinite(i10) && !Double.isNaN(i10)) {
                        return i10;
                    }
                    throw g0.a(Double.valueOf(i10), tag, p0().toString());
                }
                return i10;
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, "double", tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of double at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: u0 */
    public int S(String tag, SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Json d10 = d();
        JsonElement o02 = o0(tag);
        String h10 = enumDescriptor.h();
        if (o02 instanceof JsonPrimitive) {
            return i0.k(enumDescriptor, d10, ((JsonPrimitive) o02).b(), null, 4, null);
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of " + h10 + " at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: v0 */
    public float T(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                float j10 = et.h.j(jsonPrimitive);
                if (!d().e().b()) {
                    if (!Float.isInfinite(j10) && !Float.isNaN(j10)) {
                        return j10;
                    }
                    throw g0.a(Float.valueOf(j10), tag, p0().toString());
                }
                return j10;
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, InquiryField.FloatField.TYPE, tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of " + InquiryField.FloatField.TYPE + " at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: w0 */
    public Decoder U(String tag, SerialDescriptor inlineDescriptor) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(inlineDescriptor, "inlineDescriptor");
        if (y0.b(inlineDescriptor)) {
            Json d10 = d();
            JsonElement o02 = o0(tag);
            String h10 = inlineDescriptor.h();
            if (o02 instanceof JsonPrimitive) {
                return new b0(a1.a(d10, ((JsonPrimitive) o02).b()), d());
            }
            throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of " + h10 + " at element: " + E0(tag), o02.toString());
        }
        return super.U(tag, inlineDescriptor);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: x0 */
    public int V(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                return et.h.k(jsonPrimitive);
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, "int", tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of int at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: y0 */
    public long W(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        JsonElement o02 = o0(tag);
        if (o02 instanceof JsonPrimitive) {
            JsonPrimitive jsonPrimitive = (JsonPrimitive) o02;
            try {
                return et.h.q(jsonPrimitive);
            } catch (IllegalArgumentException unused) {
                F0(jsonPrimitive, "long", tag);
                throw new lr.h();
            }
        }
        throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonPrimitive.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(o02.getClass()).getSimpleName() + " as the serialized body of long at element: " + E0(tag), o02.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.q2
    /* renamed from: z0 */
    public boolean X(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        if (o0(tag) != JsonNull.INSTANCE) {
            return true;
        }
        return false;
    }

    public /* synthetic */ c(Json json, JsonElement jsonElement, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(json, jsonElement, (i10 & 4) != 0 ? null : str, null);
    }

    private c(Json json, JsonElement jsonElement, String str) {
        this.f24705c = json;
        this.f24706d = jsonElement;
        this.f24707e = str;
        this.f24708f = d().e();
    }
}
