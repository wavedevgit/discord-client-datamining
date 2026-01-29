package com.google.android.play.core.assetpacks;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t0 extends d {

    /* renamed from: a  reason: collision with root package name */
    private final long f17032a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f17033b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t0(long j10, Map map) {
        this.f17032a = j10;
        this.f17033b = map;
    }

    @Override // com.google.android.play.core.assetpacks.d
    public final Map c() {
        return this.f17033b;
    }

    @Override // com.google.android.play.core.assetpacks.d
    public final long d() {
        return this.f17032a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (this.f17032a == dVar.d() && this.f17033b.equals(dVar.c())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f17032a;
        return ((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f17033b.hashCode();
    }

    public final String toString() {
        String obj = this.f17033b.toString();
        return "AssetPackStates{totalBytes=" + this.f17032a + ", packStates=" + obj + "}";
    }
}
