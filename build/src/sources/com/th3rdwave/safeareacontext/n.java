package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f18467a;

    /* renamed from: b  reason: collision with root package name */
    private final o f18468b;

    /* renamed from: c  reason: collision with root package name */
    private final m f18469c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f18467a = insets;
        this.f18468b = mode;
        this.f18469c = edges;
    }

    public final m a() {
        return this.f18469c;
    }

    public final a b() {
        return this.f18467a;
    }

    public final o c() {
        return this.f18468b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f18467a, nVar.f18467a) && this.f18468b == nVar.f18468b && Intrinsics.areEqual(this.f18469c, nVar.f18469c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f18467a.hashCode() * 31) + this.f18468b.hashCode()) * 31) + this.f18469c.hashCode();
    }

    public String toString() {
        a aVar = this.f18467a;
        o oVar = this.f18468b;
        m mVar = this.f18469c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
