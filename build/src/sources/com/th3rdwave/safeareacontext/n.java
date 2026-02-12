package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final a f19468a;

    /* renamed from: b  reason: collision with root package name */
    private final o f19469b;

    /* renamed from: c  reason: collision with root package name */
    private final m f19470c;

    public n(a insets, o mode, m edges) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f19468a = insets;
        this.f19469b = mode;
        this.f19470c = edges;
    }

    public final m a() {
        return this.f19470c;
    }

    public final a b() {
        return this.f19468a;
    }

    public final o c() {
        return this.f19469b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            return Intrinsics.areEqual(this.f19468a, nVar.f19468a) && this.f19469b == nVar.f19469b && Intrinsics.areEqual(this.f19470c, nVar.f19470c);
        }
        return false;
    }

    public int hashCode() {
        return (((this.f19468a.hashCode() * 31) + this.f19469b.hashCode()) * 31) + this.f19470c.hashCode();
    }

    public String toString() {
        a aVar = this.f19468a;
        o oVar = this.f19469b;
        m mVar = this.f19470c;
        return "SafeAreaViewLocalData(insets=" + aVar + ", mode=" + oVar + ", edges=" + mVar + ")";
    }
}
