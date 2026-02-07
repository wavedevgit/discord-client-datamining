package lt;

import ht.k;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.JsonPrimitive;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n0 extends c {

    /* renamed from: g  reason: collision with root package name */
    private final JsonObject f36736g;

    /* renamed from: h  reason: collision with root package name */
    private final SerialDescriptor f36737h;

    /* renamed from: i  reason: collision with root package name */
    private int f36738i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f36739j;

    public /* synthetic */ n0(Json json, JsonObject jsonObject, String str, SerialDescriptor serialDescriptor, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(json, jsonObject, (i10 & 4) != 0 ? null : str, (i10 & 8) != 0 ? null : serialDescriptor);
    }

    private final boolean G0(SerialDescriptor serialDescriptor, int i10) {
        boolean z10;
        if (!d().e().j() && !serialDescriptor.i(i10) && serialDescriptor.g(i10).b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f36739j = z10;
        return z10;
    }

    private final boolean H0(SerialDescriptor serialDescriptor, int i10, String str) {
        JsonPrimitive jsonPrimitive;
        boolean z10;
        Json d10 = d();
        boolean i11 = serialDescriptor.i(i10);
        SerialDescriptor g10 = serialDescriptor.g(i10);
        if (i11 && !g10.b() && (o0(str) instanceof JsonNull)) {
            return true;
        }
        if (!Intrinsics.areEqual(g10.getKind(), k.b.f26536a) || (g10.b() && (o0(str) instanceof JsonNull))) {
            return false;
        }
        JsonElement o02 = o0(str);
        String str2 = null;
        if (o02 instanceof JsonPrimitive) {
            jsonPrimitive = (JsonPrimitive) o02;
        } else {
            jsonPrimitive = null;
        }
        if (jsonPrimitive != null) {
            str2 = kt.h.h(jsonPrimitive);
        }
        if (str2 == null) {
            return false;
        }
        int i12 = i0.i(g10, d10, str2);
        if (!d10.e().j() && g10.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i12 == -3 && (i11 || z10)) {
            return true;
        }
        return false;
    }

    @Override // lt.c, jt.q2, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        if (!this.f36739j && super.D()) {
            return true;
        }
        return false;
    }

    @Override // lt.c
    /* renamed from: I0 */
    public JsonObject D0() {
        return this.f36736g;
    }

    @Override // lt.c, kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (descriptor == this.f36737h) {
            Json d10 = d();
            JsonElement p02 = p0();
            String h10 = this.f36737h.h();
            if (p02 instanceof JsonObject) {
                return new n0(d10, (JsonObject) p02, C0(), this.f36737h);
            }
            throw g0.e(-1, "Expected " + Reflection.getOrCreateKotlinClass(JsonObject.class).getSimpleName() + ", but had " + Reflection.getOrCreateKotlinClass(p02.getClass()).getSimpleName() + " as the serialized body of " + h10 + " at element: " + l0(), p02.toString());
        }
        return super.b(descriptor);
    }

    @Override // lt.c, jt.q2, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Set set;
        Set l10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (!this.f36690f.k() && !(descriptor.getKind() instanceof ht.d)) {
            i0.m(descriptor, d());
            if (!this.f36690f.o()) {
                l10 = jt.q0.a(descriptor);
            } else {
                Set a10 = jt.q0.a(descriptor);
                Map map = (Map) kt.a0.a(d()).a(descriptor, i0.g());
                if (map != null) {
                    set = map.keySet();
                } else {
                    set = null;
                }
                if (set == null) {
                    set = kotlin.collections.x0.d();
                }
                l10 = kotlin.collections.x0.l(a10, set);
            }
            for (String str : D0().keySet()) {
                if (!l10.contains(str) && !Intrinsics.areEqual(str, C0())) {
                    throw g0.f(str, D0().toString());
                }
            }
        }
    }

    @Override // jt.g1
    protected String i0(SerialDescriptor descriptor, int i10) {
        Object obj;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        i0.m(descriptor, d());
        String e10 = descriptor.e(i10);
        if (!this.f36690f.o() || D0().keySet().contains(e10)) {
            return e10;
        }
        Map e11 = i0.e(d(), descriptor);
        Iterator<T> it = D0().keySet().iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                Integer num = (Integer) e11.get((String) obj);
                if (num != null && num.intValue() == i10) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        String str = (String) obj;
        if (str != null) {
            return str;
        }
        return e10;
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        while (this.f36738i < descriptor.d()) {
            int i10 = this.f36738i;
            this.f36738i = i10 + 1;
            String c02 = c0(descriptor, i10);
            int i11 = this.f36738i - 1;
            this.f36739j = false;
            if (D0().containsKey(c02) || G0(descriptor, i11)) {
                if (!this.f36690f.g() || !H0(descriptor, i11, c02)) {
                    return i11;
                }
            }
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // lt.c
    public JsonElement o0(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        return (JsonElement) kotlin.collections.o0.j(D0(), tag);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n0(Json json, JsonObject value, String str, SerialDescriptor serialDescriptor) {
        super(json, value, str, null);
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f36736g = value;
        this.f36737h = serialDescriptor;
    }
}
