package com.google.android.play.core.integrity;

import com.google.android.play.core.integrity.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s0 extends c.a {

    /* renamed from: a  reason: collision with root package name */
    private final long f17241a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ s0(long j10, int i10, wh.f fVar) {
        this.f17241a = j10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.c.a
    public final int a() {
        return 0;
    }

    @Override // com.google.android.play.core.integrity.c.a
    public final long b() {
        return this.f17241a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof c.a) {
            c.a aVar = (c.a) obj;
            if (this.f17241a == aVar.b()) {
                aVar.a();
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f17241a;
        return (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
    }

    public final String toString() {
        return "PrepareIntegrityTokenRequest{cloudProjectNumber=" + this.f17241a + ", webViewRequestMode=0}";
    }
}
