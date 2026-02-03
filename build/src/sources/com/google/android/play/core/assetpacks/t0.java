package com.google.android.play.core.assetpacks;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class t0 extends d {

    /* renamed from: a  reason: collision with root package name */
    private final long f15629a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f15630b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t0(long j10, Map map) {
        this.f15629a = j10;
        this.f15630b = map;
    }

    @Override // com.google.android.play.core.assetpacks.d
    public final Map c() {
        return this.f15630b;
    }

    @Override // com.google.android.play.core.assetpacks.d
    public final long d() {
        return this.f15629a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (this.f15629a == dVar.d() && this.f15630b.equals(dVar.c())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f15629a;
        return ((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f15630b.hashCode();
    }

    public final String toString() {
        String obj = this.f15630b.toString();
        return "AssetPackStates{totalBytes=" + this.f15629a + ", packStates=" + obj + "}";
    }
}
