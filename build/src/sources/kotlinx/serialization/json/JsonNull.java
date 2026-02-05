package kotlinx.serialization.json;

import dt.m;
import ht.v;
import kotlin.Metadata;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0004\bÇ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00000\u0004¢\u0006\u0004\b\u0005\u0010\u0006R\u001a\u0010\f\u001a\u00020\u00078\u0016X\u0096D¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\n\u0010\u000bR\u0014\u0010\u0010\u001a\u00020\r8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u0011"}, d2 = {"Lkotlinx/serialization/json/JsonNull;", "Lkotlinx/serialization/json/JsonPrimitive;", "<init>", "()V", "Lkotlinx/serialization/KSerializer;", "serializer", "()Lkotlinx/serialization/KSerializer;", "", "d", "Ljava/lang/String;", "b", "()Ljava/lang/String;", "content", "", "c", "()Z", "isString", "kotlinx-serialization-json"}, k = 1, mv = {2, 0, 0}, xi = 48)
@m(with = v.class)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JsonNull extends JsonPrimitive {
    @NotNull
    public static final JsonNull INSTANCE = new JsonNull();

    /* renamed from: d  reason: collision with root package name */
    private static final String f35122d = "null";

    private JsonNull() {
        super(null);
    }

    @Override // kotlinx.serialization.json.JsonPrimitive
    public String b() {
        return f35122d;
    }

    @Override // kotlinx.serialization.json.JsonPrimitive
    public boolean c() {
        return false;
    }

    @NotNull
    public final KSerializer serializer() {
        return v.f26988a;
    }
}
