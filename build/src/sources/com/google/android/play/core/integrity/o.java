package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o extends IntegrityTokenRequest {

    /* renamed from: a  reason: collision with root package name */
    private final String f16336a;

    /* renamed from: b  reason: collision with root package name */
    private final Long f16337b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f16338c = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ o(String str, Long l10, Object obj, bi.c cVar) {
        this.f16336a = str;
        this.f16337b = l10;
    }

    private static boolean c() {
        return true;
    }

    @Override // com.google.android.play.core.integrity.IntegrityTokenRequest
    public final Long a() {
        return this.f16337b;
    }

    @Override // com.google.android.play.core.integrity.IntegrityTokenRequest
    public final String b() {
        return this.f16336a;
    }

    public final boolean equals(Object obj) {
        boolean z10;
        Long l10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof IntegrityTokenRequest) {
            IntegrityTokenRequest integrityTokenRequest = (IntegrityTokenRequest) obj;
            if (this.f16336a.equals(integrityTokenRequest.b()) && ((l10 = this.f16337b) != null ? l10.equals(integrityTokenRequest.a()) : integrityTokenRequest.a() == null)) {
                z10 = true;
                if (!(obj instanceof o) && c()) {
                    if (z10) {
                        return true;
                    }
                    return false;
                }
                return z10;
            }
        }
        z10 = false;
        if (!(obj instanceof o)) {
        }
        return z10;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2 = this.f16336a.hashCode() ^ 1000003;
        Long l10 = this.f16337b;
        if (l10 == null) {
            hashCode = 0;
        } else {
            hashCode = l10.hashCode();
        }
        int i10 = (hashCode2 * 1000003) ^ hashCode;
        if (c()) {
            return i10 * 1000003;
        }
        return i10;
    }

    public final String toString() {
        String str = "IntegrityTokenRequest{nonce=" + this.f16336a + ", cloudProjectNumber=" + this.f16337b;
        if (c()) {
            str = str.concat(", network=null");
        }
        return str.concat("}");
    }
}
