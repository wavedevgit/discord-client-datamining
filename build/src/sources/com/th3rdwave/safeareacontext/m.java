package com.th3rdwave.safeareacontext;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f18057a;

    /* renamed from: b  reason: collision with root package name */
    private final l f18058b;

    /* renamed from: c  reason: collision with root package name */
    private final l f18059c;

    /* renamed from: d  reason: collision with root package name */
    private final l f18060d;

    public m(l top, l right, l bottom, l left) {
        Intrinsics.checkNotNullParameter(top, "top");
        Intrinsics.checkNotNullParameter(right, "right");
        Intrinsics.checkNotNullParameter(bottom, "bottom");
        Intrinsics.checkNotNullParameter(left, "left");
        this.f18057a = top;
        this.f18058b = right;
        this.f18059c = bottom;
        this.f18060d = left;
    }

    public final l a() {
        return this.f18059c;
    }

    public final l b() {
        return this.f18060d;
    }

    public final l c() {
        return this.f18058b;
    }

    public final l d() {
        return this.f18057a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            return this.f18057a == mVar.f18057a && this.f18058b == mVar.f18058b && this.f18059c == mVar.f18059c && this.f18060d == mVar.f18060d;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f18057a.hashCode() * 31) + this.f18058b.hashCode()) * 31) + this.f18059c.hashCode()) * 31) + this.f18060d.hashCode();
    }

    public String toString() {
        l lVar = this.f18057a;
        l lVar2 = this.f18058b;
        l lVar3 = this.f18059c;
        l lVar4 = this.f18060d;
        return "SafeAreaViewEdges(top=" + lVar + ", right=" + lVar2 + ", bottom=" + lVar3 + ", left=" + lVar4 + ")";
    }
}
