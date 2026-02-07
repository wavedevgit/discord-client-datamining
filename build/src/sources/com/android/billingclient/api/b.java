package com.android.billingclient.api;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.content.pm.ServiceInfo;
import android.os.Bundle;
import android.os.DeadObjectException;
import android.os.Handler;
import android.os.Looper;
import android.os.RemoteException;
import android.text.TextUtils;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.google.android.gms.internal.play_billing.b5;
import com.google.android.gms.internal.play_billing.k5;
import com.google.android.gms.internal.play_billing.k6;
import com.google.android.gms.internal.play_billing.l5;
import com.google.android.gms.internal.play_billing.q4;
import com.google.android.gms.internal.play_billing.q5;
import com.google.android.gms.internal.play_billing.r4;
import com.google.android.gms.internal.play_billing.s5;
import com.google.android.gms.internal.play_billing.u4;
import com.google.android.gms.internal.play_billing.v4;
import com.google.android.gms.internal.play_billing.x4;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import org.json.JSONException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b extends BillingClient {
    private boolean A;
    private ExecutorService B;

    /* renamed from: a */
    private volatile int f7896a;

    /* renamed from: b */
    private final String f7897b;

    /* renamed from: c */
    private final Handler f7898c;

    /* renamed from: d */
    private volatile i0 f7899d;

    /* renamed from: e */
    private Context f7900e;

    /* renamed from: f */
    private t f7901f;

    /* renamed from: g */
    private volatile k6 f7902g;

    /* renamed from: h */
    private volatile p f7903h;

    /* renamed from: i */
    private boolean f7904i;

    /* renamed from: j */
    private boolean f7905j;

    /* renamed from: k */
    private int f7906k;

    /* renamed from: l */
    private boolean f7907l;

    /* renamed from: m */
    private boolean f7908m;

    /* renamed from: n */
    private boolean f7909n;

    /* renamed from: o */
    private boolean f7910o;

    /* renamed from: p */
    private boolean f7911p;

    /* renamed from: q */
    private boolean f7912q;

    /* renamed from: r */
    private boolean f7913r;

    /* renamed from: s */
    private boolean f7914s;

    /* renamed from: t */
    private boolean f7915t;

    /* renamed from: u */
    private boolean f7916u;

    /* renamed from: v */
    private boolean f7917v;

    /* renamed from: w */
    private boolean f7918w;

    /* renamed from: x */
    private boolean f7919x;

    /* renamed from: y */
    private boolean f7920y;

    /* renamed from: z */
    private c f7921z;

    public b(String str, Context context, t tVar, ExecutorService executorService) {
        this.f7896a = 0;
        this.f7898c = new Handler(Looper.getMainLooper());
        this.f7906k = 0;
        String U = U();
        this.f7897b = U;
        this.f7900e = context.getApplicationContext();
        k5 E = l5.E();
        E.o(U);
        E.m(this.f7900e.getPackageName());
        this.f7901f = new v(this.f7900e, (l5) E.f());
        this.f7900e.getPackageName();
    }

    public static /* bridge */ /* synthetic */ a6.i0 N(b bVar, String str, int i10) {
        Bundle v10;
        int i11;
        com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Querying owned items, item type: ".concat(String.valueOf(str)));
        ArrayList arrayList = new ArrayList();
        Bundle c10 = com.google.android.gms.internal.play_billing.a0.c(bVar.f7909n, bVar.f7917v, bVar.f7921z.a(), bVar.f7921z.b(), bVar.f7897b);
        List list = null;
        String str2 = null;
        while (true) {
            try {
                if (bVar.f7909n) {
                    k6 k6Var = bVar.f7902g;
                    if (true != bVar.f7917v) {
                        i11 = 9;
                    } else {
                        i11 = 19;
                    }
                    v10 = k6Var.X(i11, bVar.f7900e.getPackageName(), str, str2, c10);
                } else {
                    v10 = bVar.f7902g.v(3, bVar.f7900e.getPackageName(), str, str2);
                }
                f0 a10 = g0.a(v10, "BillingClient", "getPurchase()");
                BillingResult a11 = a10.a();
                if (a11 != u.f8013l) {
                    bVar.W(s.a(a10.b(), 9, a11));
                    return new a6.i0(a11, list);
                }
                ArrayList<String> stringArrayList = v10.getStringArrayList("INAPP_PURCHASE_ITEM_LIST");
                ArrayList<String> stringArrayList2 = v10.getStringArrayList("INAPP_PURCHASE_DATA_LIST");
                ArrayList<String> stringArrayList3 = v10.getStringArrayList("INAPP_DATA_SIGNATURE_LIST");
                boolean z10 = false;
                for (int i12 = 0; i12 < stringArrayList2.size(); i12++) {
                    String str3 = stringArrayList2.get(i12);
                    String str4 = stringArrayList3.get(i12);
                    com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Sku is owned: ".concat(String.valueOf(stringArrayList.get(i12))));
                    try {
                        Purchase purchase = new Purchase(str3, str4);
                        if (TextUtils.isEmpty(purchase.i())) {
                            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "BUG: empty/null token!");
                            z10 = true;
                        }
                        arrayList.add(purchase);
                    } catch (JSONException e10) {
                        com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Got an exception trying to decode the purchase!", e10);
                        BillingResult billingResult = u.f8011j;
                        bVar.W(s.a(51, 9, billingResult));
                        return new a6.i0(billingResult, null);
                    }
                }
                if (z10) {
                    bVar.W(s.a(26, 9, u.f8011j));
                }
                str2 = v10.getString("INAPP_CONTINUATION_TOKEN");
                com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Continuation token: ".concat(String.valueOf(str2)));
                if (TextUtils.isEmpty(str2)) {
                    return new a6.i0(u.f8013l, arrayList);
                }
                list = null;
            } catch (Exception e11) {
                BillingResult billingResult2 = u.f8014m;
                bVar.W(s.a(52, 9, billingResult2));
                com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Got exception trying to get purchasesm try to reconnect", e11);
                return new a6.i0(billingResult2, null);
            }
        }
    }

    public final Handler Q() {
        if (Looper.myLooper() == null) {
            return this.f7898c;
        }
        return new Handler(Looper.myLooper());
    }

    private final BillingResult R(final BillingResult billingResult) {
        if (Thread.interrupted()) {
            return billingResult;
        }
        this.f7898c.post(new Runnable() { // from class: com.android.billingclient.api.j0
            @Override // java.lang.Runnable
            public final void run() {
                b.this.F(billingResult);
            }
        });
        return billingResult;
    }

    public final BillingResult S() {
        if (this.f7896a != 0 && this.f7896a != 3) {
            return u.f8011j;
        }
        return u.f8014m;
    }

    private final String T(QueryProductDetailsParams queryProductDetailsParams) {
        if (!TextUtils.isEmpty(null)) {
            return null;
        }
        return this.f7900e.getPackageName();
    }

    private static String U() {
        try {
            return (String) b6.a.class.getField("VERSION_NAME").get(null);
        } catch (Exception unused) {
            return z5.a.f55956a;
        }
    }

    public final Future V(Callable callable, long j10, final Runnable runnable, Handler handler) {
        if (this.B == null) {
            this.B = Executors.newFixedThreadPool(com.google.android.gms.internal.play_billing.a0.f14133a, new k(this));
        }
        try {
            final Future submit = this.B.submit(callable);
            handler.postDelayed(new Runnable() { // from class: a6.s0
                @Override // java.lang.Runnable
                public final void run() {
                    Future future = submit;
                    if (!future.isDone() && !future.isCancelled()) {
                        Runnable runnable2 = runnable;
                        future.cancel(true);
                        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Async task is taking too long, cancel it!");
                        if (runnable2 != null) {
                            runnable2.run();
                        }
                    }
                }
            }, (long) (j10 * 0.95d));
            return submit;
        } catch (Exception e10) {
            com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Async task throws exception!", e10);
            return null;
        }
    }

    public final void W(r4 r4Var) {
        this.f7901f.d(r4Var, this.f7906k);
    }

    public final void X(v4 v4Var) {
        this.f7901f.a(v4Var, this.f7906k);
    }

    private final void Y(String str, final a6.i iVar) {
        if (!f()) {
            BillingResult billingResult = u.f8014m;
            W(s.a(2, 11, billingResult));
            iVar.a(billingResult, null);
        } else if (V(new m(this, str, iVar), 30000L, new Runnable() { // from class: com.android.billingclient.api.g
            @Override // java.lang.Runnable
            public final void run() {
                b.this.K(iVar);
            }
        }, Q()) == null) {
            BillingResult S = S();
            W(s.a(25, 11, S));
            iVar.a(S, null);
        }
    }

    private final void Z(String str, final a6.j jVar) {
        if (!f()) {
            BillingResult billingResult = u.f8014m;
            W(s.a(2, 9, billingResult));
            jVar.a(billingResult, com.google.android.gms.internal.play_billing.j.l());
        } else if (TextUtils.isEmpty(str)) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Please provide a valid product type.");
            BillingResult billingResult2 = u.f8008g;
            W(s.a(50, 9, billingResult2));
            jVar.a(billingResult2, com.google.android.gms.internal.play_billing.j.l());
        } else if (V(new l(this, str, jVar), 30000L, new Runnable() { // from class: com.android.billingclient.api.d
            @Override // java.lang.Runnable
            public final void run() {
                b.this.L(jVar);
            }
        }, Q()) == null) {
            BillingResult S = S();
            W(s.a(25, 9, S));
            jVar.a(S, com.google.android.gms.internal.play_billing.j.l());
        }
    }

    private final boolean a0() {
        if (this.f7917v && this.f7921z.b()) {
            return true;
        }
        return false;
    }

    private final void b0(BillingResult billingResult, int i10, int i11) {
        v4 v4Var = null;
        r4 r4Var = null;
        if (billingResult.b() != 0) {
            int i12 = s.f8000a;
            try {
                q4 F = r4.F();
                x4 F2 = b5.F();
                F2.o(billingResult.b());
                F2.m(billingResult.a());
                F2.q(i10);
                F.l(F2);
                F.o(5);
                q5 C = s5.C();
                C.l(i11);
                F.m((s5) C.f());
                r4Var = (r4) F.f();
            } catch (Exception e10) {
                com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to create logging payload", e10);
            }
            W(r4Var);
            return;
        }
        int i13 = s.f8000a;
        try {
            u4 D = v4.D();
            D.m(5);
            q5 C2 = s5.C();
            C2.l(i11);
            D.l((s5) C2.f());
            v4Var = (v4) D.f();
        } catch (Exception e11) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to create logging payload", e11);
        }
        X(v4Var);
    }

    public static /* bridge */ /* synthetic */ r h0(b bVar, String str) {
        com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Querying purchase history, item type: ".concat(String.valueOf(str)));
        ArrayList arrayList = new ArrayList();
        Bundle c10 = com.google.android.gms.internal.play_billing.a0.c(bVar.f7909n, bVar.f7917v, bVar.f7921z.a(), bVar.f7921z.b(), bVar.f7897b);
        String str2 = null;
        while (bVar.f7907l) {
            try {
                Bundle n02 = bVar.f7902g.n0(6, bVar.f7900e.getPackageName(), str, str2, c10);
                f0 a10 = g0.a(n02, "BillingClient", "getPurchaseHistory()");
                BillingResult a11 = a10.a();
                if (a11 != u.f8013l) {
                    bVar.W(s.a(a10.b(), 11, a11));
                    return new r(a11, null);
                }
                ArrayList<String> stringArrayList = n02.getStringArrayList("INAPP_PURCHASE_ITEM_LIST");
                ArrayList<String> stringArrayList2 = n02.getStringArrayList("INAPP_PURCHASE_DATA_LIST");
                ArrayList<String> stringArrayList3 = n02.getStringArrayList("INAPP_DATA_SIGNATURE_LIST");
                boolean z10 = false;
                for (int i10 = 0; i10 < stringArrayList2.size(); i10++) {
                    String str3 = stringArrayList2.get(i10);
                    String str4 = stringArrayList3.get(i10);
                    com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Purchase record found for sku : ".concat(String.valueOf(stringArrayList.get(i10))));
                    try {
                        PurchaseHistoryRecord purchaseHistoryRecord = new PurchaseHistoryRecord(str3, str4);
                        if (TextUtils.isEmpty(purchaseHistoryRecord.e())) {
                            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "BUG: empty/null token!");
                            z10 = true;
                        }
                        arrayList.add(purchaseHistoryRecord);
                    } catch (JSONException e10) {
                        com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Got an exception trying to decode the purchase!", e10);
                        BillingResult billingResult = u.f8011j;
                        bVar.W(s.a(51, 11, billingResult));
                        return new r(billingResult, null);
                    }
                }
                if (z10) {
                    bVar.W(s.a(26, 11, u.f8011j));
                }
                str2 = n02.getString("INAPP_CONTINUATION_TOKEN");
                com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Continuation token: ".concat(String.valueOf(str2)));
                if (TextUtils.isEmpty(str2)) {
                    return new r(u.f8013l, arrayList);
                }
            } catch (RemoteException e11) {
                com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Got exception trying to get purchase history, try to reconnect", e11);
                BillingResult billingResult2 = u.f8014m;
                bVar.W(s.a(59, 11, billingResult2));
                return new r(billingResult2, null);
            }
        }
        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "getPurchaseHistory is not supported on current device");
        return new r(u.f8018q, null);
    }

    private void m(Context context, a6.k kVar, c cVar, a6.x xVar, String str, t tVar) {
        boolean z10;
        this.f7900e = context.getApplicationContext();
        k5 E = l5.E();
        E.o(str);
        E.m(this.f7900e.getPackageName());
        if (tVar != null) {
            this.f7901f = tVar;
        } else {
            this.f7901f = new v(this.f7900e, (l5) E.f());
        }
        if (kVar == null) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Billing client should have a valid listener but the provided is null.");
        }
        this.f7899d = new i0(this.f7900e, kVar, null, xVar, null, this.f7901f);
        this.f7921z = cVar;
        if (xVar != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.A = z10;
        this.f7900e.getPackageName();
    }

    public final /* synthetic */ void E(a6.b bVar) {
        BillingResult billingResult = u.f8015n;
        W(s.a(24, 3, billingResult));
        bVar.a(billingResult);
    }

    public final /* synthetic */ void F(BillingResult billingResult) {
        if (this.f7899d.d() != null) {
            this.f7899d.d().onPurchasesUpdated(billingResult, null);
        } else {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "No valid listener is set in BroadcastManager");
        }
    }

    public final /* synthetic */ void G(a6.f fVar, a6.e eVar) {
        BillingResult billingResult = u.f8015n;
        W(s.a(24, 4, billingResult));
        fVar.a(billingResult, eVar.a());
    }

    public final /* synthetic */ void H(a6.d dVar) {
        BillingResult billingResult = u.f8015n;
        W(s.a(24, 13, billingResult));
        dVar.onBillingConfigResponse(billingResult, null);
    }

    public final /* synthetic */ void I(a6.h hVar) {
        BillingResult billingResult = u.f8015n;
        W(s.a(24, 7, billingResult));
        hVar.a(billingResult, new ArrayList());
    }

    public final /* synthetic */ void K(a6.i iVar) {
        BillingResult billingResult = u.f8015n;
        W(s.a(24, 11, billingResult));
        iVar.a(billingResult, null);
    }

    public final /* synthetic */ void L(a6.j jVar) {
        BillingResult billingResult = u.f8015n;
        W(s.a(24, 9, billingResult));
        jVar.a(billingResult, com.google.android.gms.internal.play_billing.j.l());
    }

    @Override // com.android.billingclient.api.BillingClient
    public final void a(final a6.a aVar, final a6.b bVar) {
        if (!f()) {
            BillingResult billingResult = u.f8014m;
            W(s.a(2, 3, billingResult));
            bVar.a(billingResult);
        } else if (TextUtils.isEmpty(aVar.a())) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Please provide a valid purchase token.");
            BillingResult billingResult2 = u.f8010i;
            W(s.a(26, 3, billingResult2));
            bVar.a(billingResult2);
        } else if (!this.f7909n) {
            BillingResult billingResult3 = u.f8003b;
            W(s.a(27, 3, billingResult3));
            bVar.a(billingResult3);
        } else if (V(new Callable() { // from class: com.android.billingclient.api.l0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                b.this.l0(aVar, bVar);
                return null;
            }
        }, 30000L, new Runnable() { // from class: com.android.billingclient.api.m0
            @Override // java.lang.Runnable
            public final void run() {
                b.this.E(bVar);
            }
        }, Q()) == null) {
            BillingResult S = S();
            W(s.a(25, 3, S));
            bVar.a(S);
        }
    }

    @Override // com.android.billingclient.api.BillingClient
    public final void b(final a6.e eVar, final a6.f fVar) {
        if (!f()) {
            BillingResult billingResult = u.f8014m;
            W(s.a(2, 4, billingResult));
            fVar.a(billingResult, eVar.a());
        } else if (V(new Callable() { // from class: com.android.billingclient.api.e
            @Override // java.util.concurrent.Callable
            public final Object call() {
                b.this.m0(eVar, fVar);
                return null;
            }
        }, 30000L, new Runnable() { // from class: com.android.billingclient.api.f
            @Override // java.lang.Runnable
            public final void run() {
                b.this.G(fVar, eVar);
            }
        }, Q()) == null) {
            BillingResult S = S();
            W(s.a(25, 4, S));
            fVar.a(S, eVar.a());
        }
    }

    @Override // com.android.billingclient.api.BillingClient
    public final void c() {
        X(s.c(12));
        try {
            try {
                if (this.f7899d != null) {
                    this.f7899d.f();
                }
                if (this.f7903h != null) {
                    this.f7903h.c();
                }
                if (this.f7903h != null && this.f7902g != null) {
                    com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Unbinding from service.");
                    this.f7900e.unbindService(this.f7903h);
                    this.f7903h = null;
                }
                this.f7902g = null;
                ExecutorService executorService = this.B;
                if (executorService != null) {
                    executorService.shutdownNow();
                    this.B = null;
                }
            } catch (Exception e10) {
                com.google.android.gms.internal.play_billing.a0.j("BillingClient", "There was an exception while ending connection!", e10);
            }
            this.f7896a = 3;
        } catch (Throwable th2) {
            this.f7896a = 3;
            throw th2;
        }
    }

    @Override // com.android.billingclient.api.BillingClient
    public void d(a6.g gVar, final a6.d dVar) {
        if (!f()) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Service disconnected.");
            BillingResult billingResult = u.f8014m;
            W(s.a(2, 13, billingResult));
            dVar.onBillingConfigResponse(billingResult, null);
        } else if (!this.f7916u) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Current client doesn't support get billing config.");
            BillingResult billingResult2 = u.A;
            W(s.a(32, 13, billingResult2));
            dVar.onBillingConfigResponse(billingResult2, null);
        } else {
            String str = this.f7897b;
            final Bundle bundle = new Bundle();
            bundle.putString("playBillingLibraryVersion", str);
            if (V(new Callable() { // from class: com.android.billingclient.api.n0
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    b.this.n0(bundle, dVar);
                    return null;
                }
            }, 30000L, new Runnable() { // from class: com.android.billingclient.api.o0
                @Override // java.lang.Runnable
                public final void run() {
                    b.this.H(dVar);
                }
            }, Q()) == null) {
                BillingResult S = S();
                W(s.a(25, 13, S));
                dVar.onBillingConfigResponse(S, null);
            }
        }
    }

    public final /* synthetic */ Bundle d0(int i10, String str, String str2, BillingFlowParams billingFlowParams, Bundle bundle) {
        return this.f7902g.J(i10, this.f7900e.getPackageName(), str, str2, null, bundle);
    }

    @Override // com.android.billingclient.api.BillingClient
    public final BillingResult e(String str) {
        BillingResult billingResult;
        BillingResult billingResult2;
        BillingResult billingResult3;
        BillingResult billingResult4;
        BillingResult billingResult5;
        BillingResult billingResult6;
        BillingResult billingResult7;
        BillingResult billingResult8;
        BillingResult billingResult9;
        BillingResult billingResult10;
        BillingResult billingResult11;
        BillingResult billingResult12;
        BillingResult billingResult13;
        BillingResult billingResult14;
        if (!f()) {
            BillingResult billingResult15 = u.f8014m;
            if (billingResult15.b() != 0) {
                W(s.a(2, 5, billingResult15));
                return billingResult15;
            }
            X(s.c(5));
            return billingResult15;
        }
        BillingResult billingResult16 = u.f8002a;
        switch (str.hashCode()) {
            case -422092961:
                if (str.equals("subscriptionsUpdate")) {
                    if (this.f7905j) {
                        billingResult = u.f8013l;
                    } else {
                        billingResult = u.f8017p;
                    }
                    b0(billingResult, 10, 3);
                    return billingResult;
                }
                break;
            case 96321:
                if (str.equals("aaa")) {
                    if (this.f7913r) {
                        billingResult2 = u.f8013l;
                    } else {
                        billingResult2 = u.f8020s;
                    }
                    b0(billingResult2, 31, 6);
                    return billingResult2;
                }
                break;
            case 97314:
                if (str.equals("bbb")) {
                    if (this.f7911p) {
                        billingResult3 = u.f8013l;
                    } else {
                        billingResult3 = u.f8024w;
                    }
                    b0(billingResult3, 30, 5);
                    return billingResult3;
                }
                break;
            case 98307:
                if (str.equals("ccc")) {
                    if (this.f7914s) {
                        billingResult4 = u.f8013l;
                    } else {
                        billingResult4 = u.f8021t;
                    }
                    b0(billingResult4, 19, 8);
                    return billingResult4;
                }
                break;
            case 99300:
                if (str.equals("ddd")) {
                    if (this.f7912q) {
                        billingResult5 = u.f8013l;
                    } else {
                        billingResult5 = u.f8022u;
                    }
                    b0(billingResult5, 21, 7);
                    return billingResult5;
                }
                break;
            case 100293:
                if (str.equals("eee")) {
                    if (this.f7914s) {
                        billingResult6 = u.f8013l;
                    } else {
                        billingResult6 = u.f8021t;
                    }
                    b0(billingResult6, 61, 9);
                    return billingResult6;
                }
                break;
            case 101286:
                if (str.equals("fff")) {
                    if (this.f7915t) {
                        billingResult7 = u.f8013l;
                    } else {
                        billingResult7 = u.f8023v;
                    }
                    b0(billingResult7, 20, 10);
                    return billingResult7;
                }
                break;
            case 102279:
                if (str.equals("ggg")) {
                    if (this.f7916u) {
                        billingResult8 = u.f8013l;
                    } else {
                        billingResult8 = u.A;
                    }
                    b0(billingResult8, 32, 11);
                    return billingResult8;
                }
                break;
            case 103272:
                if (str.equals("hhh")) {
                    if (this.f7916u) {
                        billingResult9 = u.f8013l;
                    } else {
                        billingResult9 = u.B;
                    }
                    b0(billingResult9, 33, 12);
                    return billingResult9;
                }
                break;
            case 104265:
                if (str.equals("iii")) {
                    if (this.f7918w) {
                        billingResult10 = u.f8013l;
                    } else {
                        billingResult10 = u.D;
                    }
                    b0(billingResult10, 60, 13);
                    return billingResult10;
                }
                break;
            case 105258:
                if (str.equals("jjj")) {
                    if (this.f7919x) {
                        billingResult11 = u.f8013l;
                    } else {
                        billingResult11 = u.E;
                    }
                    b0(billingResult11, 66, 14);
                    return billingResult11;
                }
                break;
            case 106251:
                if (str.equals("kkk")) {
                    if (this.f7920y) {
                        billingResult12 = u.f8013l;
                    } else {
                        billingResult12 = u.f8026y;
                    }
                    b0(billingResult12, 103, 18);
                    return billingResult12;
                }
                break;
            case 207616302:
                if (str.equals("priceChangeConfirmation")) {
                    if (this.f7908m) {
                        billingResult13 = u.f8013l;
                    } else {
                        billingResult13 = u.f8019r;
                    }
                    b0(billingResult13, 35, 4);
                    return billingResult13;
                }
                break;
            case 1987365622:
                if (str.equals("subscriptions")) {
                    if (this.f7904i) {
                        billingResult14 = u.f8013l;
                    } else {
                        billingResult14 = u.f8016o;
                    }
                    b0(billingResult14, 9, 2);
                    return billingResult14;
                }
                break;
        }
        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Unsupported feature: ".concat(str));
        BillingResult billingResult17 = u.f8027z;
        b0(billingResult17, 34, 1);
        return billingResult17;
    }

    public final /* synthetic */ Bundle e0(String str, String str2) {
        return this.f7902g.t0(3, this.f7900e.getPackageName(), str, str2, null);
    }

    @Override // com.android.billingclient.api.BillingClient
    public final boolean f() {
        return (this.f7896a != 2 || this.f7902g == null || this.f7903h == null) ? false : true;
    }

    @Override // com.android.billingclient.api.BillingClient
    public final BillingResult g(Activity activity, final BillingFlowParams billingFlowParams) {
        String str;
        Future V;
        int i10;
        String str2;
        String str3;
        boolean z10;
        BillingFlowParams.b bVar;
        String str4;
        BillingFlowParams.b bVar2;
        String str5;
        boolean z11;
        int i11;
        final int i12;
        if (this.f7899d != null && this.f7899d.d() != null) {
            if (!f()) {
                BillingResult billingResult = u.f8014m;
                W(s.a(2, 2, billingResult));
                R(billingResult);
                return billingResult;
            }
            ArrayList g10 = billingFlowParams.g();
            List h10 = billingFlowParams.h();
            android.support.v4.media.session.b.a(com.google.android.gms.internal.play_billing.o.a(g10, null));
            BillingFlowParams.b bVar3 = (BillingFlowParams.b) com.google.android.gms.internal.play_billing.o.a(h10, null);
            final String d10 = bVar3.b().d();
            final String e10 = bVar3.b().e();
            if (e10.equals("subs") && !this.f7904i) {
                com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Current client doesn't support subscriptions.");
                BillingResult billingResult2 = u.f8016o;
                W(s.a(9, 2, billingResult2));
                R(billingResult2);
                return billingResult2;
            } else if (billingFlowParams.q() && !this.f7907l) {
                com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Current client doesn't support extra params for buy intent.");
                BillingResult billingResult3 = u.f8009h;
                W(s.a(18, 2, billingResult3));
                R(billingResult3);
                return billingResult3;
            } else if (g10.size() > 1 && !this.f7914s) {
                com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Current client doesn't support multi-item purchases.");
                BillingResult billingResult4 = u.f8021t;
                W(s.a(19, 2, billingResult4));
                R(billingResult4);
                return billingResult4;
            } else if (!h10.isEmpty() && !this.f7915t) {
                com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Current client doesn't support purchases with ProductDetails.");
                BillingResult billingResult5 = u.f8023v;
                W(s.a(20, 2, billingResult5));
                R(billingResult5);
                return billingResult5;
            } else {
                if (!this.f7907l) {
                    str = "BUY_INTENT";
                    V = V(new Callable() { // from class: com.android.billingclient.api.k0
                        @Override // java.util.concurrent.Callable
                        public final Object call() {
                            return b.this.e0(d10, e10);
                        }
                    }, 5000L, null, this.f7898c);
                    i10 = 80;
                } else {
                    boolean z12 = this.f7909n;
                    boolean z13 = this.f7917v;
                    boolean a10 = this.f7921z.a();
                    boolean b10 = this.f7921z.b();
                    boolean z14 = this.A;
                    String str6 = this.f7897b;
                    final Bundle bundle = new Bundle();
                    bundle.putString("playBillingLibraryVersion", str6);
                    if (billingFlowParams.b() != 0) {
                        bundle.putInt("prorationMode", billingFlowParams.b());
                    }
                    if (!TextUtils.isEmpty(billingFlowParams.c())) {
                        bundle.putString("accountId", billingFlowParams.c());
                    }
                    if (!TextUtils.isEmpty(billingFlowParams.d())) {
                        bundle.putString("obfuscatedProfileId", billingFlowParams.d());
                    }
                    if (billingFlowParams.p()) {
                        bundle.putBoolean("isOfferPersonalizedByDeveloper", true);
                    }
                    if (!TextUtils.isEmpty(null)) {
                        bundle.putStringArrayList("skusToReplace", new ArrayList<>(Arrays.asList(null)));
                    }
                    if (!TextUtils.isEmpty(billingFlowParams.e())) {
                        bundle.putString("oldSkuPurchaseToken", billingFlowParams.e());
                    }
                    if (!TextUtils.isEmpty(null)) {
                        str2 = null;
                        bundle.putString("oldSkuPurchaseId", null);
                    } else {
                        str2 = null;
                    }
                    if (!TextUtils.isEmpty(billingFlowParams.f())) {
                        str3 = str2;
                        bundle.putString("originalExternalTransactionId", billingFlowParams.f());
                    } else {
                        str3 = str2;
                    }
                    if (!TextUtils.isEmpty(str3)) {
                        bundle.putString("paymentsPurchaseParams", str3);
                    }
                    if (z12 && a10) {
                        z10 = true;
                        bundle.putBoolean("enablePendingPurchases", true);
                    } else {
                        z10 = true;
                    }
                    if (z13 && b10) {
                        bundle.putBoolean("enablePendingPurchaseForSubscriptions", z10);
                    }
                    if (z14) {
                        bundle.putBoolean("enableAlternativeBilling", z10);
                    }
                    if (!g10.isEmpty()) {
                        ArrayList<String> arrayList = new ArrayList<>();
                        new ArrayList();
                        new ArrayList();
                        new ArrayList();
                        new ArrayList();
                        Iterator it = g10.iterator();
                        if (!it.hasNext()) {
                            if (!arrayList.isEmpty()) {
                                bundle.putStringArrayList("skuDetailsTokens", arrayList);
                            }
                            if (g10.size() > 1) {
                                ArrayList<String> arrayList2 = new ArrayList<>(g10.size() - 1);
                                ArrayList<String> arrayList3 = new ArrayList<>(g10.size() - 1);
                                bVar = bVar3;
                                if (1 >= g10.size()) {
                                    bundle.putStringArrayList("additionalSkus", arrayList2);
                                    bundle.putStringArrayList("additionalSkuTypes", arrayList3);
                                } else {
                                    android.support.v4.media.session.b.a(g10.get(1));
                                    throw null;
                                }
                            } else {
                                bVar = bVar3;
                            }
                            str = "BUY_INTENT";
                            str4 = e10;
                        } else {
                            android.support.v4.media.session.b.a(it.next());
                            throw null;
                        }
                    } else {
                        bVar = bVar3;
                        ArrayList<String> arrayList4 = new ArrayList<>(h10.size() - 1);
                        ArrayList<String> arrayList5 = new ArrayList<>(h10.size() - 1);
                        ArrayList<String> arrayList6 = new ArrayList<>();
                        ArrayList<String> arrayList7 = new ArrayList<>();
                        str4 = e10;
                        ArrayList<String> arrayList8 = new ArrayList<>();
                        str = "BUY_INTENT";
                        for (int i13 = 0; i13 < h10.size(); i13++) {
                            BillingFlowParams.b bVar4 = (BillingFlowParams.b) h10.get(i13);
                            ProductDetails b11 = bVar4.b();
                            if (!b11.i().isEmpty()) {
                                bVar2 = bVar4;
                                arrayList6.add(b11.i());
                            } else {
                                bVar2 = bVar4;
                            }
                            arrayList7.add(bVar2.c());
                            if (!TextUtils.isEmpty(b11.j())) {
                                arrayList8.add(b11.j());
                            }
                            if (i13 > 0) {
                                arrayList4.add(((BillingFlowParams.b) h10.get(i13)).b().d());
                                arrayList5.add(((BillingFlowParams.b) h10.get(i13)).b().e());
                            }
                        }
                        bundle.putStringArrayList("SKU_OFFER_ID_TOKEN_LIST", arrayList7);
                        if (!arrayList6.isEmpty()) {
                            bundle.putStringArrayList("skuDetailsTokens", arrayList6);
                        }
                        if (!arrayList8.isEmpty()) {
                            bundle.putStringArrayList("SKU_SERIALIZED_DOCID_LIST", arrayList8);
                        }
                        if (!arrayList4.isEmpty()) {
                            bundle.putStringArrayList("additionalSkus", arrayList4);
                            bundle.putStringArrayList("additionalSkuTypes", arrayList5);
                        }
                    }
                    if (bundle.containsKey("SKU_OFFER_ID_TOKEN_LIST") && !this.f7912q) {
                        BillingResult billingResult6 = u.f8022u;
                        W(s.a(21, 2, billingResult6));
                        R(billingResult6);
                        return billingResult6;
                    }
                    if (bVar != null && !TextUtils.isEmpty(bVar.b().h())) {
                        bundle.putString("skuPackageName", bVar.b().h());
                        str5 = null;
                        z11 = true;
                    } else {
                        str5 = null;
                        z11 = false;
                    }
                    if (!TextUtils.isEmpty(str5)) {
                        bundle.putString("accountName", str5);
                    }
                    Intent intent = activity.getIntent();
                    if (intent == null) {
                        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Activity's intent is null.");
                    } else if (!TextUtils.isEmpty(intent.getStringExtra("PROXY_PACKAGE"))) {
                        String stringExtra = intent.getStringExtra("PROXY_PACKAGE");
                        bundle.putString("proxyPackage", stringExtra);
                        try {
                            bundle.putString("proxyPackageVersion", this.f7900e.getPackageManager().getPackageInfo(stringExtra, 0).versionName);
                        } catch (PackageManager.NameNotFoundException unused) {
                            bundle.putString("proxyPackageVersion", "package not found");
                        }
                    }
                    if (this.f7915t && !h10.isEmpty()) {
                        i11 = 17;
                    } else if (this.f7913r && z11) {
                        i11 = 15;
                    } else if (this.f7909n) {
                        i12 = 9;
                        final String str7 = str4;
                        V = V(new Callable() { // from class: com.android.billingclient.api.j
                            @Override // java.util.concurrent.Callable
                            public final Object call() {
                                return b.this.d0(i12, d10, str7, billingFlowParams, bundle);
                            }
                        }, 5000L, null, this.f7898c);
                        i10 = 78;
                    } else {
                        i11 = 6;
                    }
                    i12 = i11;
                    final String str72 = str4;
                    V = V(new Callable() { // from class: com.android.billingclient.api.j
                        @Override // java.util.concurrent.Callable
                        public final Object call() {
                            return b.this.d0(i12, d10, str72, billingFlowParams, bundle);
                        }
                    }, 5000L, null, this.f7898c);
                    i10 = 78;
                }
                try {
                    if (V == null) {
                        BillingResult billingResult7 = u.f8014m;
                        W(s.a(25, 2, billingResult7));
                        R(billingResult7);
                        return billingResult7;
                    }
                    Bundle bundle2 = (Bundle) V.get(5000L, TimeUnit.MILLISECONDS);
                    int b12 = com.google.android.gms.internal.play_billing.a0.b(bundle2, "BillingClient");
                    String e11 = com.google.android.gms.internal.play_billing.a0.e(bundle2, "BillingClient");
                    if (b12 != 0) {
                        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Unable to buy item, Error response code: " + b12);
                        BillingResult a11 = u.a(b12, e11);
                        if (bundle2 != null) {
                            i10 = 23;
                        }
                        W(s.a(i10, 2, a11));
                        R(a11);
                        return a11;
                    }
                    Intent intent2 = new Intent(activity, ProxyBillingActivity.class);
                    String str8 = str;
                    intent2.putExtra(str8, (PendingIntent) bundle2.getParcelable(str8));
                    activity.startActivity(intent2);
                    return u.f8013l;
                } catch (CancellationException e12) {
                    e = e12;
                    com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Time out while launching billing flow. Try to reconnect", e);
                    BillingResult billingResult8 = u.f8015n;
                    W(s.a(4, 2, billingResult8));
                    R(billingResult8);
                    return billingResult8;
                } catch (TimeoutException e13) {
                    e = e13;
                    com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Time out while launching billing flow. Try to reconnect", e);
                    BillingResult billingResult82 = u.f8015n;
                    W(s.a(4, 2, billingResult82));
                    R(billingResult82);
                    return billingResult82;
                } catch (Exception e14) {
                    com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Exception while launching billing flow. Try to reconnect", e14);
                    BillingResult billingResult9 = u.f8014m;
                    W(s.a(5, 2, billingResult9));
                    R(billingResult9);
                    return billingResult9;
                }
            }
        }
        BillingResult billingResult10 = u.F;
        W(s.a(12, 2, billingResult10));
        return billingResult10;
    }

    @Override // com.android.billingclient.api.BillingClient
    public final void i(final QueryProductDetailsParams queryProductDetailsParams, final a6.h hVar) {
        if (!f()) {
            BillingResult billingResult = u.f8014m;
            W(s.a(2, 7, billingResult));
            hVar.a(billingResult, new ArrayList());
        } else if (!this.f7915t) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Querying product details is not supported.");
            BillingResult billingResult2 = u.f8023v;
            W(s.a(20, 7, billingResult2));
            hVar.a(billingResult2, new ArrayList());
        } else if (V(new Callable() { // from class: com.android.billingclient.api.h
            @Override // java.util.concurrent.Callable
            public final Object call() {
                b.this.o0(queryProductDetailsParams, hVar);
                return null;
            }
        }, 30000L, new Runnable() { // from class: com.android.billingclient.api.i
            @Override // java.lang.Runnable
            public final void run() {
                b.this.I(hVar);
            }
        }, Q()) == null) {
            BillingResult S = S();
            W(s.a(25, 7, S));
            hVar.a(S, new ArrayList());
        }
    }

    @Override // com.android.billingclient.api.BillingClient
    public final void j(a6.l lVar, a6.i iVar) {
        Y(lVar.b(), iVar);
    }

    @Override // com.android.billingclient.api.BillingClient
    public final void k(a6.m mVar, a6.j jVar) {
        Z(mVar.b(), jVar);
    }

    @Override // com.android.billingclient.api.BillingClient
    public final void l(a6.c cVar) {
        if (f()) {
            com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Service connection is valid. No need to re-initialize.");
            X(s.c(6));
            cVar.onBillingSetupFinished(u.f8013l);
            return;
        }
        int i10 = 1;
        if (this.f7896a == 1) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Client is already in the process of connecting to billing service.");
            BillingResult billingResult = u.f8005d;
            W(s.a(37, 6, billingResult));
            cVar.onBillingSetupFinished(billingResult);
        } else if (this.f7896a == 3) {
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Client was already closed and can't be reused. Please create another instance.");
            BillingResult billingResult2 = u.f8014m;
            W(s.a(38, 6, billingResult2));
            cVar.onBillingSetupFinished(billingResult2);
        } else {
            this.f7896a = 1;
            com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Starting in-app billing setup.");
            this.f7903h = new p(this, cVar, null);
            Intent intent = new Intent("com.android.vending.billing.InAppBillingService.BIND");
            intent.setPackage("com.android.vending");
            List<ResolveInfo> queryIntentServices = this.f7900e.getPackageManager().queryIntentServices(intent, 0);
            if (queryIntentServices != null && !queryIntentServices.isEmpty()) {
                ServiceInfo serviceInfo = queryIntentServices.get(0).serviceInfo;
                if (serviceInfo != null) {
                    String str = serviceInfo.packageName;
                    String str2 = serviceInfo.name;
                    if ("com.android.vending".equals(str) && str2 != null) {
                        ComponentName componentName = new ComponentName(str, str2);
                        Intent intent2 = new Intent(intent);
                        intent2.setComponent(componentName);
                        intent2.putExtra("playBillingLibraryVersion", this.f7897b);
                        if (this.f7900e.bindService(intent2, this.f7903h, 1)) {
                            com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Service was bonded successfully.");
                            return;
                        } else {
                            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Connection to Billing service is blocked.");
                            i10 = 39;
                        }
                    } else {
                        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "The device doesn't have valid Play Store.");
                        i10 = 40;
                    }
                }
            } else {
                i10 = 41;
            }
            this.f7896a = 0;
            com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Billing service unavailable on device.");
            BillingResult billingResult3 = u.f8004c;
            W(s.a(i10, 6, billingResult3));
            cVar.onBillingSetupFinished(billingResult3);
        }
    }

    public final /* synthetic */ Object l0(a6.a aVar, a6.b bVar) {
        try {
            k6 k6Var = this.f7902g;
            String packageName = this.f7900e.getPackageName();
            String a10 = aVar.a();
            String str = this.f7897b;
            Bundle bundle = new Bundle();
            bundle.putString("playBillingLibraryVersion", str);
            Bundle U0 = k6Var.U0(9, packageName, a10, bundle);
            bVar.a(u.a(com.google.android.gms.internal.play_billing.a0.b(U0, "BillingClient"), com.google.android.gms.internal.play_billing.a0.e(U0, "BillingClient")));
            return null;
        } catch (Exception e10) {
            com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Error acknowledge purchase!", e10);
            BillingResult billingResult = u.f8014m;
            W(s.a(28, 3, billingResult));
            bVar.a(billingResult);
            return null;
        }
    }

    public final /* synthetic */ Object m0(a6.e eVar, a6.f fVar) {
        int l10;
        String str;
        String a10 = eVar.a();
        try {
            com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Consuming purchase with token: " + a10);
            if (this.f7909n) {
                k6 k6Var = this.f7902g;
                String packageName = this.f7900e.getPackageName();
                boolean z10 = this.f7909n;
                String str2 = this.f7897b;
                Bundle bundle = new Bundle();
                if (z10) {
                    bundle.putString("playBillingLibraryVersion", str2);
                }
                Bundle h02 = k6Var.h0(9, packageName, a10, bundle);
                l10 = h02.getInt("RESPONSE_CODE");
                str = com.google.android.gms.internal.play_billing.a0.e(h02, "BillingClient");
            } else {
                l10 = this.f7902g.l(3, this.f7900e.getPackageName(), a10);
                str = "";
            }
            BillingResult a11 = u.a(l10, str);
            if (l10 == 0) {
                com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Successfully consumed purchase.");
                fVar.a(a11, a10);
                return null;
            }
            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Error consuming purchase with token. Response code: " + l10);
            W(s.a(23, 4, a11));
            fVar.a(a11, a10);
            return null;
        } catch (Exception e10) {
            com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Error consuming purchase!", e10);
            BillingResult billingResult = u.f8014m;
            W(s.a(29, 4, billingResult));
            fVar.a(billingResult, a10);
            return null;
        }
    }

    public final /* synthetic */ Object n0(Bundle bundle, a6.d dVar) {
        try {
            this.f7902g.z0(18, this.f7900e.getPackageName(), bundle, new q(dVar, this.f7901f, this.f7906k, null));
        } catch (DeadObjectException e10) {
            com.google.android.gms.internal.play_billing.a0.j("BillingClient", "getBillingConfig got a dead object exception (try to reconnect).", e10);
            BillingResult billingResult = u.f8014m;
            W(s.a(62, 13, billingResult));
            dVar.onBillingConfigResponse(billingResult, null);
        } catch (Exception e11) {
            com.google.android.gms.internal.play_billing.a0.j("BillingClient", "getBillingConfig got an exception.", e11);
            BillingResult billingResult2 = u.f8011j;
            W(s.a(62, 13, billingResult2));
            dVar.onBillingConfigResponse(billingResult2, null);
        }
        return null;
    }

    public final /* synthetic */ Object o0(QueryProductDetailsParams queryProductDetailsParams, a6.h hVar) {
        String str;
        int i10;
        int i11;
        int i12;
        int i13;
        ArrayList arrayList = new ArrayList();
        String c10 = queryProductDetailsParams.c();
        com.google.android.gms.internal.play_billing.j b10 = queryProductDetailsParams.b();
        int size = b10.size();
        int i14 = 0;
        while (true) {
            if (i14 < size) {
                int i15 = i14 + 20;
                if (i15 > size) {
                    i11 = size;
                } else {
                    i11 = i15;
                }
                ArrayList arrayList2 = new ArrayList(b10.subList(i14, i11));
                ArrayList<String> arrayList3 = new ArrayList<>();
                int size2 = arrayList2.size();
                for (int i16 = 0; i16 < size2; i16++) {
                    arrayList3.add(((QueryProductDetailsParams.b) arrayList2.get(i16)).b());
                }
                Bundle bundle = new Bundle();
                bundle.putStringArrayList("ITEM_ID_LIST", arrayList3);
                bundle.putString("playBillingLibraryVersion", this.f7897b);
                try {
                    k6 k6Var = this.f7902g;
                    if (true != this.f7918w) {
                        i13 = 17;
                    } else {
                        i13 = 20;
                    }
                    String packageName = this.f7900e.getPackageName();
                    boolean a02 = a0();
                    String str2 = this.f7897b;
                    T(queryProductDetailsParams);
                    T(queryProductDetailsParams);
                    T(queryProductDetailsParams);
                    int i17 = i13;
                    Bundle bundle2 = new Bundle();
                    bundle2.putString("playBillingLibraryVersion", str2);
                    bundle2.putBoolean("enablePendingPurchases", true);
                    bundle2.putString("SKU_DETAILS_RESPONSE_FORMAT", "PRODUCT_DETAILS");
                    if (a02) {
                        bundle2.putBoolean("enablePendingPurchaseForSubscriptions", true);
                    }
                    ArrayList<String> arrayList4 = new ArrayList<>();
                    ArrayList<String> arrayList5 = new ArrayList<>();
                    int size3 = arrayList2.size();
                    int i18 = 0;
                    boolean z10 = false;
                    boolean z11 = false;
                    while (i18 < size3) {
                        k6 k6Var2 = k6Var;
                        arrayList4.add(null);
                        z10 |= !TextUtils.isEmpty(null);
                        com.google.android.gms.internal.play_billing.j jVar = b10;
                        if (((QueryProductDetailsParams.b) arrayList2.get(i18)).c().equals("first_party")) {
                            com.google.android.gms.internal.play_billing.b.c(null, "Serialized DocId is required for constructing ExtraParams to query ProductDetails for all first party products.");
                            arrayList5.add(null);
                            z11 = true;
                        }
                        i18++;
                        b10 = jVar;
                        k6Var = k6Var2;
                    }
                    com.google.android.gms.internal.play_billing.j jVar2 = b10;
                    k6 k6Var3 = k6Var;
                    if (z10) {
                        bundle2.putStringArrayList("SKU_OFFER_ID_TOKEN_LIST", arrayList4);
                    }
                    if (!arrayList5.isEmpty()) {
                        bundle2.putStringArrayList("SKU_SERIALIZED_DOCID_LIST", arrayList5);
                    }
                    if (z11 && !TextUtils.isEmpty(null)) {
                        bundle2.putString("accountName", null);
                    }
                    Bundle g02 = k6Var3.g0(i17, packageName, c10, bundle, bundle2);
                    i12 = 4;
                    str = "Item is unavailable for purchase.";
                    if (g02 == null) {
                        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "queryProductDetailsAsync got empty product details response.");
                        W(s.a(44, 7, u.C));
                        break;
                    } else if (!g02.containsKey("DETAILS_LIST")) {
                        i10 = com.google.android.gms.internal.play_billing.a0.b(g02, "BillingClient");
                        str = com.google.android.gms.internal.play_billing.a0.e(g02, "BillingClient");
                        if (i10 != 0) {
                            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "getSkuDetails() failed for queryProductDetailsAsync. Response code: " + i10);
                            W(s.a(23, 7, u.a(i10, str)));
                        } else {
                            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "getSkuDetails() returned a bundle with neither an error nor a product detail list for queryProductDetailsAsync.");
                            W(s.a(45, 7, u.a(6, str)));
                            i10 = 6;
                        }
                    } else {
                        ArrayList<String> stringArrayList = g02.getStringArrayList("DETAILS_LIST");
                        if (stringArrayList == null) {
                            com.google.android.gms.internal.play_billing.a0.i("BillingClient", "queryProductDetailsAsync got null response list");
                            W(s.a(46, 7, u.C));
                            break;
                        }
                        for (int i19 = 0; i19 < stringArrayList.size(); i19++) {
                            try {
                                ProductDetails productDetails = new ProductDetails(stringArrayList.get(i19));
                                com.google.android.gms.internal.play_billing.a0.h("BillingClient", "Got product details: ".concat(productDetails.toString()));
                                arrayList.add(productDetails);
                            } catch (JSONException e10) {
                                com.google.android.gms.internal.play_billing.a0.j("BillingClient", "Got a JSON exception trying to decode ProductDetails. \n Exception: ", e10);
                                str = "Error trying to decode SkuDetails.";
                                i12 = 6;
                                W(s.a(47, 7, u.a(6, "Error trying to decode SkuDetails.")));
                            }
                        }
                        i14 = i15;
                        b10 = jVar2;
                    }
                } catch (Exception e11) {
                    i12 = 6;
                    com.google.android.gms.internal.play_billing.a0.j("BillingClient", "queryProductDetailsAsync got a remote exception (try to reconnect).", e11);
                    W(s.a(43, 7, u.f8011j));
                    str = "An internal error occurred.";
                }
            } else {
                str = "";
                i10 = 0;
                break;
            }
        }
        i10 = i12;
        hVar.a(u.a(i10, str), arrayList);
        return null;
    }

    public b(String str, c cVar, Context context, a6.d0 d0Var, t tVar, ExecutorService executorService) {
        this.f7896a = 0;
        this.f7898c = new Handler(Looper.getMainLooper());
        this.f7906k = 0;
        this.f7897b = U();
        this.f7900e = context.getApplicationContext();
        k5 E = l5.E();
        E.o(U());
        E.m(this.f7900e.getPackageName());
        this.f7901f = new v(this.f7900e, (l5) E.f());
        com.google.android.gms.internal.play_billing.a0.i("BillingClient", "Billing client should have a valid listener but the provided is null.");
        this.f7899d = new i0(this.f7900e, null, null, null, null, this.f7901f);
        this.f7921z = cVar;
        this.f7900e.getPackageName();
    }

    public b(String str, c cVar, Context context, a6.k kVar, a6.x xVar, t tVar, ExecutorService executorService) {
        String U = U();
        this.f7896a = 0;
        this.f7898c = new Handler(Looper.getMainLooper());
        this.f7906k = 0;
        this.f7897b = U;
        m(context, kVar, cVar, null, U, null);
    }
}
