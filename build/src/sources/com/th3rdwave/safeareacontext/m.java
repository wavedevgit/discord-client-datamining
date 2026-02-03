package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f19075a;

    /* renamed from: b  reason: collision with root package name */
    private final l f19076b;

    /* renamed from: c  reason: collision with root package name */
    private final l f19077c;

    /* renamed from: d  reason: collision with root package name */
    private final l f19078d;

    public m(l top, l right, l bottom, l left) {
        Intrinsics.checkNotNullParameter(top, "top");
        Intrinsics.checkNotNullParameter(right, "right");
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(left, "left");
        this.f19075a = top;
        this.f19076b = right;
        this.f19077c = bottom;
        this.f19078d = left;
    }

    public final l a() {
        return this.f19077c;
    }

    public final l b() {
        return this.f19078d;
    }

    public final l c() {
        return this.f19076b;
    }

    public final l d() {
        return this.f19075a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            return this.f19075a == mVar.f19075a && this.f19076b == mVar.f19076b && this.f19077c == mVar.f19077c && this.f19078d == mVar.f19078d;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f19075a.hashCode() * 31) + this.f19076b.hashCode()) * 31) + this.f19077c.hashCode()) * 31) + this.f19078d.hashCode();
    }

    public String toString() {
        l lVar = this.f19075a;
        l lVar2 = this.f19076b;
        l lVar3 = this.f19077c;
        l lVar4 = this.f19078d;
        return "SafeAreaViewEdges(top=" + lVar + ", right=" + lVar2 + ", bottom=" + lVar3 + ", left=" + lVar4 + ")";
    }
}
