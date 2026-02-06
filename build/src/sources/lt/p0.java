package lt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p0 extends n0 {

    /* renamed from: k  reason: collision with root package name */
    private final JsonObject f36695k;

    /* renamed from: l  reason: collision with root package name */
    private final List f36696l;

    /* renamed from: m  reason: collision with root package name */
    private final int f36697m;

    /* renamed from: n  reason: collision with root package name */
    private int f36698n;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public p0(Json json, JsonObject value) {
        super(json, value, null, null, 12, null);
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f36695k = value;
        List h12 = CollectionsKt.h1(D0().keySet());
        this.f36696l = h12;
        this.f36697m = h12.size() * 2;
        this.f36698n = -1;
    }

    @Override // lt.n0, lt.c
    /* renamed from: I0 */
    public JsonObject D0() {
        return this.f36695k;
    }

    @Override // lt.n0, lt.c, jt.q2, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
    }

    @Override // lt.n0, jt.g1
    protected String i0(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return (String) this.f36696l.get(i10 / 2);
    }

    @Override // lt.n0, kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = this.f36698n;
        if (i10 < this.f36697m - 1) {
            int i11 = i10 + 1;
            this.f36698n = i11;
            return i11;
        }
        return -1;
    }

    @Override // lt.n0, lt.c
    protected JsonElement o0(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        if (this.f36698n % 2 == 0) {
            return kt.h.d(tag);
        }
        return (JsonElement) kotlin.collections.o0.j(D0(), tag);
    }
}
