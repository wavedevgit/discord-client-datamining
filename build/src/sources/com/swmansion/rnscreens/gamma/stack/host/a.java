package com.swmansion.rnscreens.gamma.stack.host;

import androidx.fragment.app.FragmentManager;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: a  reason: collision with root package name */
    private final com.swmansion.rnscreens.gamma.stack.screen.d f19176a;

    /* renamed from: b  reason: collision with root package name */
    private final int f19177b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f19178c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f19179d;

    public /* synthetic */ a(com.swmansion.rnscreens.gamma.stack.screen.d dVar, int i10, boolean z10, boolean z11, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(dVar, i10, z10, (i11 & 8) != 0 ? true : z11);
    }

    @Override // com.swmansion.rnscreens.gamma.stack.host.b
    public void a(FragmentManager fragmentManager, c executor) {
        Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
        Intrinsics.checkNotNullParameter(executor, "executor");
        executor.e(fragmentManager, this);
    }

    public final boolean b() {
        return this.f19178c;
    }

    public final boolean c() {
        return this.f19179d;
    }

    public final int d() {
        return this.f19177b;
    }

    public final com.swmansion.rnscreens.gamma.stack.screen.d e() {
        return this.f19176a;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(com.swmansion.rnscreens.gamma.stack.screen.d fragment, int i10, boolean z10, boolean z11) {
        super(null);
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        this.f19176a = fragment;
        this.f19177b = i10;
        this.f19178c = z10;
        this.f19179d = z11;
    }
}
