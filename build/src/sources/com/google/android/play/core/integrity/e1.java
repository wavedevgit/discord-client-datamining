package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e1 implements t {

    /* renamed from: a  reason: collision with root package name */
    private Context f16161a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e1(zh.j jVar) {
    }

    public final e1 a(Context context) {
        context.getClass();
        this.f16161a = context;
        return this;
    }

    @Override // com.google.android.play.core.integrity.t
    public final u b() {
        ji.c0.a(this.f16161a, Context.class);
        return new f1(this.f16161a, null);
    }
}
