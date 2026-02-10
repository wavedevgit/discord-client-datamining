package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.pm.PackageManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q3 {

    /* renamed from: c  reason: collision with root package name */
    private static final yh.k0 f16091c = new yh.k0("PackageStateCache");

    /* renamed from: a  reason: collision with root package name */
    private final Context f16092a;

    /* renamed from: b  reason: collision with root package name */
    private int f16093b = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q3(Context context) {
        this.f16092a = context;
    }

    public final synchronized int a() {
        if (this.f16093b == -1) {
            try {
                this.f16093b = this.f16092a.getPackageManager().getPackageInfo(this.f16092a.getPackageName(), 0).versionCode;
            } catch (PackageManager.NameNotFoundException unused) {
                f16091c.b("The current version of the app could not be retrieved", new Object[0]);
            }
        }
        return this.f16093b;
    }
}
