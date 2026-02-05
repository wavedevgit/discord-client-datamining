package jt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k0 extends c {

    /* renamed from: g  reason: collision with root package name */
    private final JsonElement f31340g;

    public /* synthetic */ k0(Json json, JsonElement jsonElement, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(json, jsonElement, (i10 & 4) != 0 ? null : str);
    }

    @Override // jt.c
    public JsonElement D0() {
        return this.f31340g;
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.c
    public JsonElement o0(String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        if (tag == "primitive") {
            return D0();
        }
        throw new IllegalArgumentException("This input can only handle primitives with 'primitive' tag");
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k0(Json json, JsonElement value, String str) {
        super(json, value, str, null);
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f31340g = value;
        f0("primitive");
    }
}
