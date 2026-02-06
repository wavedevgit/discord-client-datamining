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
    private static final xh.k0 f15835m = new xh.k0("AssetPackManager");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15836a;

    /* renamed from: b  reason: collision with root package name */
    private final d0 f15837b;

    /* renamed from: c  reason: collision with root package name */
    private final i0 f15838c;

    /* renamed from: d  reason: collision with root package name */
    private final xh.e f15839d;

    /* renamed from: e  reason: collision with root package name */
    private final r2 f15840e;

    /* renamed from: f  reason: collision with root package name */
    private final b2 f15841f;

    /* renamed from: g  reason: collision with root package name */
    private final g1 f15842g;

    /* renamed from: h  reason: collision with root package name */
    private final o3 f15843h;

    /* renamed from: i  reason: collision with root package name */
    private final Handler f15844i = new Handler(Looper.getMainLooper());

    /* renamed from: j  reason: collision with root package name */
    private boolean f15845j;

    /* renamed from: k  reason: collision with root package name */
    private final xh.r f15846k;

    /* renamed from: l  reason: collision with root package name */
    private final xh.r f15847l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k4(n0 n0Var, xh.r rVar, d0 d0Var, i0 i0Var, xh.e eVar, r2 r2Var, b2 b2Var, g1 g1Var, xh.r rVar2, o3 o3Var) {
        this.f15836a = n0Var;
        this.f15846k = rVar;
        this.f15837b = d0Var;
        this.f15838c = i0Var;
        this.f15839d = eVar;
        this.f15840e = r2Var;
        this.f15841f = b2Var;
        this.f15842g = g1Var;
        this.f15847l = rVar2;
        this.f15843h = o3Var;
    }

    public static /* synthetic */ void e(k4 k4Var) {
        k4Var.f15836a.K();
        k4Var.f15836a.I();
        k4Var.f15836a.J();
    }

    public static /* synthetic */ void f(k4 k4Var) {
        final n0 n0Var = k4Var.f15836a;
        Objects.requireNonNull(n0Var);
        ((t4) k4Var.f15846k.a()).c(k4Var.f15836a.G()).f((Executor) k4Var.f15847l.a(), new yg.g() { // from class: com.google.android.play.core.assetpacks.y2
            @Override // yg.g
            public final void onSuccess(Object obj) {
                n0.this.c((List) obj);
            }
        }).d((Executor) k4Var.f15847l.a(), new yg.f() { // from class: com.google.android.play.core.assetpacks.x3
            @Override // yg.f
            public final void onFailure(Exception exc) {
                k4.f15835m.e(String.format("Could not sync active asset packs. %s", exc), new Object[0]);
            }
        });
    }

    private final void i() {
        ((Executor) this.f15847l.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.i4
            @Override // java.lang.Runnable
            public final void run() {
                k4.f(k4.this);
            }
        });
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final synchronized void a(AssetPackStateUpdateListener assetPackStateUpdateListener) {
        this.f15838c.a(assetPackStateUpdateListener);
        d0 d0Var = this.f15837b;
        boolean f10 = d0Var.f();
        d0Var.c(assetPackStateUpdateListener);
        if (!f10) {
            i();
        }
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final Task b(List list) {
        Map G = this.f15836a.G();
        ArrayList arrayList = new ArrayList(list);
        if (arrayList.isEmpty()) {
            Bundle bundle = new Bundle();
            bundle.putInt(SharedPreferencesKey.SESSION_ID, 0);
            bundle.putInt("error_code", 0);
            Iterator it = list.iterator();
            while (it.hasNext()) {
                String str = (String) it.next();
                bundle.putInt(yh.b.a("status", str), 4);
                bundle.putInt(yh.b.a("error_code", str), 0);
                bundle.putLong(yh.b.a("total_bytes_to_download", str), 0L);
                bundle.putLong(yh.b.a("bytes_downloaded", str), 0L);
            }
            bundle.putStringArrayList("pack_names", new ArrayList<>(list));
            bundle.putLong("total_bytes_to_download", 0L);
            bundle.putLong("bytes_downloaded", 0L);
            return yg.m.f(d.a(bundle, this.f15841f, this.f15843h));
        }
        return ((t4) this.f15846k.a()).e(arrayList, G);
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final b c(String str) {
        if (!this.f15845j) {
            ((Executor) this.f15847l.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j4
                @Override // java.lang.Runnable
                public final void run() {
                    k4.e(k4.this);
                }
            });
            this.f15845j = true;
        }
        if (this.f15836a.f(str)) {
            try {
                return this.f15836a.s(str);
            } catch (IOException unused) {
                return null;
            }
        } else if (!this.f15839d.a().contains(str)) {
            return null;
        } else {
            return b.a();
        }
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final d d(List list) {
        int intValue;
        Map h10 = this.f15840e.h(list);
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
        ((t4) this.f15846k.a()).f(list);
        return new t0(0L, hashMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void h(boolean z10) {
        d0 d0Var = this.f15837b;
        boolean f10 = d0Var.f();
        d0Var.d(z10);
        if (z10 && !f10) {
            i();
        }
    }
}
