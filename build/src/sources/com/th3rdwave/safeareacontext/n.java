package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f18587a;

    /* renamed from: b  reason: collision with root package name */
    private final o f18588b;

    /* renamed from: c  reason: collision with root package name */
    private final m f18589c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f18587a = insets;
        this.f18588b = mode;
        this.f18589c = edges;
    }

    public final m a() {
        return this.f18589c;
    }

    public final a b() {
        return this.f18587a;
    }

    public final o c() {
        return this.f18588b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f18587a, nVar.f18587a) && this.f18588b == nVar.f18588b && Intrinsics.areEqual(this.f18589c, nVar.f18589c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f18587a.hashCode() * 31) + this.f18588b.hashCode()) * 31) + this.f18589c.hashCode();
    }

    public String toString() {
        a aVar = this.f18587a;
        o oVar = this.f18588b;
        m mVar = this.f18589c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
