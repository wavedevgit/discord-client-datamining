package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f19079a;

    /* renamed from: b  reason: collision with root package name */
    private final o f19080b;

    /* renamed from: c  reason: collision with root package name */
    private final m f19081c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f19079a = insets;
        this.f19080b = mode;
        this.f19081c = edges;
    }

    public final m a() {
        return this.f19081c;
    }

    public final a b() {
        return this.f19079a;
    }

    public final o c() {
        return this.f19080b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f19079a, nVar.f19079a) && this.f19080b == nVar.f19080b && Intrinsics.areEqual(this.f19081c, nVar.f19081c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f19079a.hashCode() * 31) + this.f19080b.hashCode()) * 31) + this.f19081c.hashCode();
    }

    public String toString() {
        a aVar = this.f19079a;
        o oVar = this.f19080b;
        m mVar = this.f19081c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
