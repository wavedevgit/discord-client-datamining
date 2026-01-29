package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 implements g1 {

    /* renamed from: a  reason: collision with root package name */
    private Context f17154a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ c1(wh.h hVar) {
    }

    public final c1 a(Context context) {
        context.getClass();
        this.f17154a = context;
        return this;
    }

    @Override // com.google.android.play.core.integrity.g1
    public final d1 b() {
        gi.c0.a(this.f17154a, Context.class);
        return new d1(this.f17154a, null);
    }
}
