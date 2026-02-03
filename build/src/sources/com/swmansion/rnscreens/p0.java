package com.swmansion.rnscreens;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.LayoutShadowNode;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 extends LayoutShadowNode {

    /* renamed from: a  reason: collision with root package name */
    private ReactContext f17912a;

    public p0(ReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f17912a = context;
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setLocalData(Object obj) {
        super.setLocalData(obj);
    }
}
