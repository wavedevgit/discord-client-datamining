package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f19446a;

    /* renamed from: b  reason: collision with root package name */
    private final o f19447b;

    /* renamed from: c  reason: collision with root package name */
    private final m f19448c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f19446a = insets;
        this.f19447b = mode;
        this.f19448c = edges;
    }

    public final m a() {
        return this.f19448c;
    }

    public final a b() {
        return this.f19446a;
    }

    public final o c() {
        return this.f19447b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f19446a, nVar.f19446a) && this.f19447b == nVar.f19447b && Intrinsics.areEqual(this.f19448c, nVar.f19448c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f19446a.hashCode() * 31) + this.f19447b.hashCode()) * 31) + this.f19448c.hashCode();
    }

    public String toString() {
        a aVar = this.f19446a;
        o oVar = this.f19447b;
        m mVar = this.f19448c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
