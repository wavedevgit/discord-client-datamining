package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.pm.PackageManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q3 {

    /* renamed from: c  reason: collision with root package name */
    private static final ai.k0 f16840c = new ai.k0("PackageStateCache");

    /* renamed from: a  reason: collision with root package name */
    private final Context f16841a;

    /* renamed from: b  reason: collision with root package name */
    private int f16842b = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q3(Context context) {
        this.f16841a = context;
    }

    public final synchronized int a() {
        if (this.f16842b == -1) {
            try {
                this.f16842b = this.f16841a.getPackageManager().getPackageInfo(this.f16841a.getPackageName(), 0).versionCode;
            } catch (PackageManager.NameNotFoundException unused) {
                f16840c.b("The current version of the app could not be retrieved", new Object[0]);
            }
        }
        return this.f16842b;
    }
}
