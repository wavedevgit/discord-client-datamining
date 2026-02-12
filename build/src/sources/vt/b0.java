package vt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends kotlinx.serialization.encoding.a {

    /* renamed from: a  reason: collision with root package name */
    private final a f51876a;

    /* renamed from: b  reason: collision with root package name */
    private final wt.b f51877b;

    public b0(a lexer, Json json) {
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        Intrinsics.checkNotNullParameter(json, "json");
        this.f51876a = lexer;
        this.f51877b = json.a();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public byte H() {
        a aVar = this.f51876a;
        String q10 = aVar.q();
        try {
            return kotlin.text.e0.a(q10);
        } catch (IllegalArgumentException unused) {
            a.x(aVar, "Failed to parse type 'UByte' for input '" + q10 + '\'', 0, null, 6, null);
            throw new as.h();
        }
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public wt.b a() {
        return this.f51877b;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int h() {
        a aVar = this.f51876a;
        String q10 = aVar.q();
        try {
            return kotlin.text.e0.d(q10);
        } catch (IllegalArgumentException unused) {
            a.x(aVar, "Failed to parse type 'UInt' for input '" + q10 + '\'', 0, null, 6, null);
            throw new as.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public long l() {
        a aVar = this.f51876a;
        String q10 = aVar.q();
        try {
            return kotlin.text.e0.g(q10);
        } catch (IllegalArgumentException unused) {
            a.x(aVar, "Failed to parse type 'ULong' for input '" + q10 + '\'', 0, null, 6, null);
            throw new as.h();
        }
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        throw new IllegalStateException("unsupported");
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public short s() {
        a aVar = this.f51876a;
        String q10 = aVar.q();
        try {
            return kotlin.text.e0.j(q10);
        } catch (IllegalArgumentException unused) {
            a.x(aVar, "Failed to parse type 'UShort' for input '" + q10 + '\'', 0, null, 6, null);
            throw new as.h();
        }
    }
}
