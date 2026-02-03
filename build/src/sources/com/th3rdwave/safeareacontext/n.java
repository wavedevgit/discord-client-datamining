package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f18061a;

    /* renamed from: b  reason: collision with root package name */
    private final o f18062b;

    /* renamed from: c  reason: collision with root package name */
    private final m f18063c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f18061a = insets;
        this.f18062b = mode;
        this.f18063c = edges;
    }

    public final m a() {
        return this.f18063c;
    }

    public final a b() {
        return this.f18061a;
    }

    public final o c() {
        return this.f18062b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f18061a, nVar.f18061a) && this.f18062b == nVar.f18062b && Intrinsics.areEqual(this.f18063c, nVar.f18063c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f18061a.hashCode() * 31) + this.f18062b.hashCode()) * 31) + this.f18063c.hashCode();
    }

    public String toString() {
        a aVar = this.f18061a;
        o oVar = this.f18062b;
        m mVar = this.f18063c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
