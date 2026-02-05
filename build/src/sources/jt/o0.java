package jt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonArray;
import kotlinx.serialization.json.JsonElement;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends c {

    /* renamed from: g  reason: collision with root package name */
    private final JsonArray f31356g;

    /* renamed from: h  reason: collision with root package name */
    private final int f31357h;

    /* renamed from: i  reason: collision with root package name */
    private int f31358i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(Json json, JsonArray value) {
        super(json, value, null, 4, null);
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f31356g = value;
        this.f31357h = D0().size();
        this.f31358i = -1;
    }

    @Override // jt.c
    /* renamed from: G0 */
    public JsonArray D0() {
        return this.f31356g;
    }

    @Override // gt.g1
    protected String i0(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return String.valueOf(i10);
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = this.f31358i;
        if (i10 < this.f31357h - 1) {
            int i11 = i10 + 1;
            this.f31358i = i11;
            return i11;
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.c
    public JsonElement o0(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        return D0().get(Integer.parseInt(tag));
    }
}
