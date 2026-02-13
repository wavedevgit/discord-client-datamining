package vt;

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
    private final JsonObject f52502k;

    /* renamed from: l  reason: collision with root package name */
    private final List f52503l;

    /* renamed from: m  reason: collision with root package name */
    private final int f52504m;

    /* renamed from: n  reason: collision with root package name */
    private int f52505n;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public p0(Json json, JsonObject value) {
        super(json, value, null, null, 12, null);
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f52502k = value;
        List h12 = CollectionsKt.h1(D0().keySet());
        this.f52503l = h12;
        this.f52504m = h12.size() * 2;
        this.f52505n = -1;
    }

    @Override // vt.n0, vt.c
    /* renamed from: I0 */
    public JsonObject D0() {
        return this.f52502k;
    }

    @Override // vt.n0, vt.c, tt.q2, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
    }

    @Override // vt.n0, tt.g1
    protected String i0(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return (String) this.f52503l.get(i10 / 2);
    }

    @Override // vt.n0, kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = this.f52505n;
        if (i10 < this.f52504m - 1) {
            int i11 = i10 + 1;
            this.f52505n = i11;
            return i11;
        }
        return -1;
    }

    @Override // vt.n0, vt.c
    protected JsonElement o0(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        if (this.f52505n % 2 == 0) {
            return ut.h.d(tag);
        }
        return (JsonElement) kotlin.collections.o0.j(D0(), tag);
    }
}
