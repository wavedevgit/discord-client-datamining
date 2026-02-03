package com.shopify.reactnative.flash_list;

import android.content.Context;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends ReactViewGroup implements d {

    /* renamed from: d  reason: collision with root package name */
    private int f18484d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f18484d = -1;
    }

    @Override // com.shopify.reactnative.flash_list.d
    public int getIndex() {
        return this.f18484d;
    }

    public void setIndex(int i10) {
        this.f18484d = i10;
    }
}
