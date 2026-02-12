package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.pm.PackageManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q3 {

    /* renamed from: c  reason: collision with root package name */
    private static final ai.k0 f16841c = new ai.k0("PackageStateCache");

    /* renamed from: a  reason: collision with root package name */
    private final Context f16842a;

    /* renamed from: b  reason: collision with root package name */
    private int f16843b = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q3(Context context) {
        this.f16842a = context;
    }

    public final synchronized int a() {
        if (this.f16843b == -1) {
            try {
                this.f16843b = this.f16842a.getPackageManager().getPackageInfo(this.f16842a.getPackageName(), 0).versionCode;
            } catch (PackageManager.NameNotFoundException unused) {
                f16841c.b("The current version of the app could not be retrieved", new Object[0]);
            }
        }
        return this.f16843b;
    }
}
