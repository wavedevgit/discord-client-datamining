package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e1 implements t {

    /* renamed from: a  reason: collision with root package name */
    private Context f17030a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e1(di.j jVar) {
    }

    public final e1 a(Context context) {
        context.getClass();
        this.f17030a = context;
        return this;
    }

    @Override // com.google.android.play.core.integrity.t
    public final u b() {
        ni.c0.a(this.f17030a, Context.class);
        return new f1(this.f17030a, null);
    }
}
