package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import com.discord.js_watchdog.SharedPreferencesKey;
import com.google.android.gms.tasks.Task;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k4 implements AssetPackManager {

    /* renamed from: m  reason: collision with root package name */
    private static final ai.k0 f16724m = new ai.k0("AssetPackManager");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f16725a;

    /* renamed from: b  reason: collision with root package name */
    private final d0 f16726b;

    /* renamed from: c  reason: collision with root package name */
    private final i0 f16727c;

    /* renamed from: d  reason: collision with root package name */
    private final ai.e f16728d;

    /* renamed from: e  reason: collision with root package name */
    private final r2 f16729e;

    /* renamed from: f  reason: collision with root package name */
    private final b2 f16730f;

    /* renamed from: g  reason: collision with root package name */
    private final g1 f16731g;

    /* renamed from: h  reason: collision with root package name */
    private final o3 f16732h;

    /* renamed from: i  reason: collision with root package name */
    private final Handler f16733i = new Handler(Looper.getMainLooper());

    /* renamed from: j  reason: collision with root package name */
    private boolean f16734j;

    /* renamed from: k  reason: collision with root package name */
    private final ai.r f16735k;

    /* renamed from: l  reason: collision with root package name */
    private final ai.r f16736l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k4(n0 n0Var, ai.r rVar, d0 d0Var, i0 i0Var, ai.e eVar, r2 r2Var, b2 b2Var, g1 g1Var, ai.r rVar2, o3 o3Var) {
        this.f16725a = n0Var;
        this.f16735k = rVar;
        this.f16726b = d0Var;
        this.f16727c = i0Var;
        this.f16728d = eVar;
        this.f16729e = r2Var;
        this.f16730f = b2Var;
        this.f16731g = g1Var;
        this.f16736l = rVar2;
        this.f16732h = o3Var;
    }

    public static /* synthetic */ void e(k4 k4Var) {
        k4Var.f16725a.K();
        k4Var.f16725a.I();
        k4Var.f16725a.J();
    }

    public static /* synthetic */ void f(k4 k4Var) {
        final n0 n0Var = k4Var.f16725a;
        Objects.requireNonNull(n0Var);
        ((t4) k4Var.f16735k.a()).c(k4Var.f16725a.G()).f((Executor) k4Var.f16736l.a(), new zg.g() { // from class: com.google.android.play.core.assetpacks.y2
            @Override // zg.g
            public final void onSuccess(Object obj) {
                n0.this.c((List) obj);
            }
        }).d((Executor) k4Var.f16736l.a(), new zg.f() { // from class: com.google.android.play.core.assetpacks.x3
            @Override // zg.f
            public final void onFailure(Exception exc) {
                k4.f16724m.e(String.format("Could not sync active asset packs. %s", exc), new Object[0]);
            }
        });
    }

    private final void i() {
        ((Executor) this.f16736l.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.i4
            @Override // java.lang.Runnable
            public final void run() {
                k4.f(k4.this);
            }
        });
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final synchronized void a(AssetPackStateUpdateListener assetPackStateUpdateListener) {
        this.f16727c.a(assetPackStateUpdateListener);
        d0 d0Var = this.f16726b;
        boolean f10 = d0Var.f();
        d0Var.c(assetPackStateUpdateListener);
        if (!f10) {
            i();
        }
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final Task b(List list) {
        Map G = this.f16725a.G();
        ArrayList arrayList = new ArrayList(list);
        if (arrayList.isEmpty()) {
            Bundle bundle = new Bundle();
            bundle.putInt(SharedPreferencesKey.SESSION_ID, 0);
            bundle.putInt("error_code", 0);
            Iterator it = list.iterator();
            while (it.hasNext()) {
                String str = (String) it.next();
                bundle.putInt(bi.b.a("status", str), 4);
                bundle.putInt(bi.b.a("error_code", str), 0);
                bundle.putLong(bi.b.a("total_bytes_to_download", str), 0L);
                bundle.putLong(bi.b.a("bytes_downloaded", str), 0L);
            }
            bundle.putStringArrayList("pack_names", new ArrayList<>(list));
            bundle.putLong("total_bytes_to_download", 0L);
            bundle.putLong("bytes_downloaded", 0L);
            return zg.m.f(d.a(bundle, this.f16730f, this.f16732h));
        }
        return ((t4) this.f16735k.a()).e(arrayList, G);
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final b c(String str) {
        if (!this.f16734j) {
            ((Executor) this.f16736l.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j4
                @Override // java.lang.Runnable
                public final void run() {
                    k4.e(k4.this);
                }
            });
            this.f16734j = true;
        }
        if (this.f16725a.f(str)) {
            try {
                return this.f16725a.s(str);
            } catch (IOException unused) {
                return null;
            }
        } else if (!this.f16728d.a().contains(str)) {
            return null;
        } else {
            return b.a();
        }
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final d d(List list) {
        int intValue;
        Map h10 = this.f16729e.h(list);
        HashMap hashMap = new HashMap();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            Integer num = (Integer) h10.get(str);
            if (num == null) {
                intValue = 0;
            } else {
                intValue = num.intValue();
            }
            hashMap.put(str, AssetPackState.a(str, intValue, 0, 0L, 0L, 0.0d, 0, "", ""));
        }
        ((t4) this.f16735k.a()).f(list);
        return new t0(0L, hashMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void h(boolean z10) {
        d0 d0Var = this.f16726b;
        boolean f10 = d0Var.f();
        d0Var.d(z10);
        if (z10 && !f10) {
            i();
        }
    }
}
