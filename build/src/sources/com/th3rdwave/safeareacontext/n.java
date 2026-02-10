package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f19467a;

    /* renamed from: b  reason: collision with root package name */
    private final o f19468b;

    /* renamed from: c  reason: collision with root package name */
    private final m f19469c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f19467a = insets;
        this.f19468b = mode;
        this.f19469c = edges;
    }

    public final m a() {
        return this.f19469c;
    }

    public final a b() {
        return this.f19467a;
    }

    public final o c() {
        return this.f19468b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f19467a, nVar.f19467a) && this.f19468b == nVar.f19468b && Intrinsics.areEqual(this.f19469c, nVar.f19469c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f19467a.hashCode() * 31) + this.f19468b.hashCode()) * 31) + this.f19469c.hashCode();
    }

    public String toString() {
        a aVar = this.f19467a;
        o oVar = this.f19468b;
        m mVar = this.f19469c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
