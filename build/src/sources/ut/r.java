package ut;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.JsonPrimitive;
import vt.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends JsonPrimitive {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f51254d;

    /* renamed from: e  reason: collision with root package name */
    private final SerialDescriptor f51255e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51256i;

    public /* synthetic */ r(Object obj, boolean z10, SerialDescriptor serialDescriptor, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, z10, (i10 & 4) != 0 ? null : serialDescriptor);
    }

    @Override // kotlinx.serialization.json.JsonPrimitive
    public String b() {
        return this.f51256i;
    }

    @Override // kotlinx.serialization.json.JsonPrimitive
    public boolean c() {
        return this.f51254d;
    }

    public final SerialDescriptor d() {
        return this.f51255e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || r.class != obj.getClass()) {
            return false;
        }
        r rVar = (r) obj;
        if (c() == rVar.c() && Intrinsics.areEqual(b(), rVar.b())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Boolean.hashCode(c()) * 31) + b().hashCode();
    }

    @Override // kotlinx.serialization.json.JsonPrimitive
    public String toString() {
        if (c()) {
            StringBuilder sb2 = new StringBuilder();
            c1.c(sb2, b());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
            return sb3;
        }
        return b();
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r(Object body, boolean z10, SerialDescriptor serialDescriptor) {
        super(null);
        Intrinsics.checkNotNullParameter(body, "body");
        this.f51254d = z10;
        this.f51255e = serialDescriptor;
        this.f51256i = body.toString();
        if (serialDescriptor != null && !serialDescriptor.isInline()) {
            throw new IllegalArgumentException("Failed requirement.");
        }
    }
}
