package com.swmansion.rnscreens.gamma.stack.host;

import androidx.fragment.app.FragmentManager;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: a  reason: collision with root package name */
    private final com.swmansion.rnscreens.gamma.stack.screen.d f19179a;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(com.swmansion.rnscreens.gamma.stack.screen.d fragment) {
        super(null);
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        this.f19179a = fragment;
    }

    @Override // com.swmansion.rnscreens.gamma.stack.host.b
    public void a(FragmentManager fragmentManager, c executor) {
        Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
        Intrinsics.checkNotNullParameter(executor, "executor");
        executor.h(fragmentManager, this);
    }

    public final com.swmansion.rnscreens.gamma.stack.screen.d b() {
        return this.f19179a;
    }
}
