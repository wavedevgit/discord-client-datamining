package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.pm.PackageManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q3 {

    /* renamed from: c  reason: collision with root package name */
    private static final th.k0 f15577c = new th.k0("PackageStateCache");

    /* renamed from: a  reason: collision with root package name */
    private final Context f15578a;

    /* renamed from: b  reason: collision with root package name */
    private int f15579b = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q3(Context context) {
        this.f15578a = context;
    }

    public final synchronized int a() {
        if (this.f15579b == -1) {
            try {
                this.f15579b = this.f15578a.getPackageManager().getPackageInfo(this.f15578a.getPackageName(), 0).versionCode;
            } catch (PackageManager.NameNotFoundException unused) {
                f15577c.b("The current version of the app could not be retrieved", new Object[0]);
            }
        }
        return this.f15579b;
    }
}
