package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f18447a;

    /* renamed from: b  reason: collision with root package name */
    private final o f18448b;

    /* renamed from: c  reason: collision with root package name */
    private final m f18449c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f18447a = insets;
        this.f18448b = mode;
        this.f18449c = edges;
    }

    public final m a() {
        return this.f18449c;
    }

    public final a b() {
        return this.f18447a;
    }

    public final o c() {
        return this.f18448b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f18447a, nVar.f18447a) && this.f18448b == nVar.f18448b && Intrinsics.areEqual(this.f18449c, nVar.f18449c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f18447a.hashCode() * 31) + this.f18448b.hashCode()) * 31) + this.f18449c.hashCode();
    }

    public String toString() {
        a aVar = this.f18447a;
        o oVar = this.f18448b;
        m mVar = this.f18449c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
