package com.swmansion.rnscreens.utils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f18381a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f18382b;

    public b(int i10, boolean z10) {
        this.f18381a = i10;
        this.f18382b = z10;
    }

    public final int a() {
        return this.f18381a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return this.f18381a == bVar.f18381a && this.f18382b == bVar.f18382b;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f18381a) * 31) + Boolean.hashCode(this.f18382b);
    }

    public String toString() {
        int i10 = this.f18381a;
        boolean z10 = this.f18382b;
        return "CacheKey(fontSize=" + i10 + ", isTitleEmpty=" + z10 + ")";
    }
}
