package com.google.android.play.core.assetpacks;

import android.content.Intent;
import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.locks.ReentrantLock;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 {

    /* renamed from: g  reason: collision with root package name */
    private static final th.k0 f15588g = new th.k0("ExtractorSessionStoreView");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15589a;

    /* renamed from: b  reason: collision with root package name */
    private final b2 f15590b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f15591c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final ReentrantLock f15592d = new ReentrantLock();

    /* renamed from: e  reason: collision with root package name */
    private final th.r f15593e;

    /* renamed from: f  reason: collision with root package name */
    private final th.r f15594f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r2(n0 n0Var, th.r rVar, b2 b2Var, th.r rVar2) {
        this.f15589a = n0Var;
        this.f15593e = rVar;
        this.f15590b = b2Var;
        this.f15594f = rVar2;
    }

    public static /* synthetic */ Boolean a(r2 r2Var, Bundle bundle) {
        p2 p2Var;
        boolean z10;
        int i10 = bundle.getInt(SharedPreferencesKey.SESSION_ID);
        if (i10 == 0) {
            return Boolean.FALSE;
        }
        Map map = r2Var.f15591c;
        Integer valueOf = Integer.valueOf(i10);
        if (map.containsKey(valueOf)) {
            o2 q10 = r2Var.q(i10);
            int i11 = bundle.getInt(uh.b.a("status", q10.f15549c.f15534a));
            n2 n2Var = q10.f15549c;
            int i12 = n2Var.f15537d;
            if (m0.c(i12, i11)) {
                f15588g.a("Found stale update for session %s with status %d.", valueOf, Integer.valueOf(i12));
                n2 n2Var2 = q10.f15549c;
                int i13 = n2Var2.f15537d;
                String str = n2Var2.f15534a;
                if (i13 == 4) {
                    ((t4) r2Var.f15593e.a()).b(i10, str);
                } else if (i13 == 5) {
                    ((t4) r2Var.f15593e.a()).a(i10);
                } else if (i13 == 6) {
                    ((t4) r2Var.f15593e.a()).f(Arrays.asList(str));
                }
            } else {
                n2Var.f15537d = i11;
                if (m0.d(i11)) {
                    r2Var.n(i10);
                    r2Var.f15590b.c(q10.f15549c.f15534a);
                } else {
                    for (p2 p2Var2 : n2Var.f15539f) {
                        n2 n2Var3 = q10.f15549c;
                        ArrayList parcelableArrayList = bundle.getParcelableArrayList(uh.b.b("chunk_intents", n2Var3.f15534a, p2Var2.f15562a));
                        if (parcelableArrayList != null) {
                            for (int i14 = 0; i14 < parcelableArrayList.size(); i14++) {
                                if (parcelableArrayList.get(i14) != null && ((Intent) parcelableArrayList.get(i14)).getData() != null) {
                                    ((m2) p2Var2.f15565d.get(i14)).f15518a = true;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            String s10 = s(bundle);
            long j10 = bundle.getLong(uh.b.a("pack_version", s10));
            String string = bundle.getString(uh.b.a("pack_version_tag", s10), "");
            int i15 = bundle.getInt(uh.b.a("status", s10));
            long j11 = bundle.getLong(uh.b.a("total_bytes_to_download", s10));
            ArrayList<String> stringArrayList = bundle.getStringArrayList(uh.b.a("slice_ids", s10));
            ArrayList arrayList = new ArrayList();
            Iterator it = t(stringArrayList).iterator();
            while (it.hasNext()) {
                String str2 = (String) it.next();
                ArrayList parcelableArrayList2 = bundle.getParcelableArrayList(uh.b.b("chunk_intents", s10, str2));
                ArrayList arrayList2 = new ArrayList();
                for (Intent intent : t(parcelableArrayList2)) {
                    if (intent != null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    Iterator it2 = it;
                    arrayList2.add(new m2(z10));
                    it = it2;
                }
                Iterator it3 = it;
                String string2 = bundle.getString(uh.b.b("uncompressed_hash_sha256", s10, str2));
                long j12 = bundle.getLong(uh.b.b("uncompressed_size", s10, str2));
                int i16 = bundle.getInt(uh.b.b("patch_format", s10, str2), 0);
                if (i16 != 0) {
                    p2Var = new p2(str2, string2, j12, arrayList2, 0, i16);
                } else {
                    p2Var = new p2(str2, string2, j12, arrayList2, bundle.getInt(uh.b.b("compression_format", s10, str2), 0), 0);
                }
                arrayList.add(p2Var);
                it = it3;
            }
            r2Var.f15591c.put(Integer.valueOf(i10), new o2(i10, bundle.getInt("app_version_code"), new n2(s10, j10, i15, j11, arrayList, string)));
        }
        return Boolean.TRUE;
    }

    public static /* synthetic */ Boolean b(r2 r2Var, Bundle bundle) {
        int i10 = bundle.getInt(SharedPreferencesKey.SESSION_ID);
        if (i10 == 0) {
            return Boolean.TRUE;
        }
        Map map = r2Var.f15591c;
        Integer valueOf = Integer.valueOf(i10);
        if (!map.containsKey(valueOf)) {
            return Boolean.TRUE;
        }
        o2 o2Var = (o2) r2Var.f15591c.get(valueOf);
        if (o2Var.f15549c.f15537d == 6) {
            return Boolean.FALSE;
        }
        return Boolean.valueOf(!m0.c(o2Var.f15549c.f15537d, bundle.getInt(uh.b.a("status", s(bundle)))));
    }

    public static /* synthetic */ Object c(r2 r2Var, String str, int i10, long j10) {
        o2 o2Var = (o2) r2Var.u(Arrays.asList(str)).get(str);
        if (o2Var == null || m0.d(o2Var.f15549c.f15537d)) {
            f15588g.b(String.format("Could not find pack %s while trying to complete it", str), new Object[0]);
        }
        r2Var.f15589a.d(str, i10, j10);
        o2Var.f15549c.f15537d = 4;
        return null;
    }

    public static /* synthetic */ Object d(r2 r2Var, int i10) {
        o2 q10 = r2Var.q(i10);
        n2 n2Var = q10.f15549c;
        if (m0.d(n2Var.f15537d)) {
            r2Var.f15589a.d(n2Var.f15534a, q10.f15548b, n2Var.f15535b);
            n2 n2Var2 = q10.f15549c;
            int i11 = n2Var2.f15537d;
            if (i11 == 5 || i11 == 6) {
                r2Var.f15589a.e(n2Var2.f15534a, q10.f15548b, n2Var2.f15535b);
                return null;
            }
            return null;
        }
        throw new w1(String.format("Could not safely delete session %d because it is not in a terminal state.", Integer.valueOf(i10)), i10);
    }

    public static /* synthetic */ Object e(r2 r2Var, int i10, int i11) {
        r2Var.q(i10).f15549c.f15537d = 5;
        return null;
    }

    public static /* synthetic */ Map f(r2 r2Var, List list) {
        int i10;
        HashMap hashMap = new HashMap();
        for (o2 o2Var : r2Var.f15591c.values()) {
            String str = o2Var.f15549c.f15534a;
            if (list.contains(str)) {
                o2 o2Var2 = (o2) hashMap.get(str);
                if (o2Var2 == null) {
                    i10 = -1;
                } else {
                    i10 = o2Var2.f15547a;
                }
                if (i10 < o2Var.f15547a) {
                    hashMap.put(str, o2Var);
                }
            }
        }
        return hashMap;
    }

    public static /* synthetic */ Map g(final r2 r2Var, List list) {
        Map u10 = r2Var.u(list);
        HashMap hashMap = new HashMap();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            final o2 o2Var = (o2) u10.get(str);
            if (o2Var == null) {
                hashMap.put(str, 8);
            } else {
                n2 n2Var = o2Var.f15549c;
                if (m0.a(n2Var.f15537d)) {
                    try {
                        n2Var.f15537d = 6;
                        ((Executor) r2Var.f15594f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.k2
                            @Override // java.lang.Runnable
                            public final void run() {
                                r2.this.n(o2Var.f15547a);
                            }
                        });
                        r2Var.f15590b.c(str);
                    } catch (w1 unused) {
                        f15588g.d("Session %d with pack %s does not exist, no need to cancel.", Integer.valueOf(o2Var.f15547a), str);
                    }
                }
                hashMap.put(str, Integer.valueOf(o2Var.f15549c.f15537d));
            }
        }
        return hashMap;
    }

    private final o2 q(int i10) {
        Map map = this.f15591c;
        Integer valueOf = Integer.valueOf(i10);
        o2 o2Var = (o2) map.get(valueOf);
        if (o2Var != null) {
            return o2Var;
        }
        throw new w1(String.format("Could not find session %d while trying to get it", valueOf), i10);
    }

    private final Object r(q2 q2Var) {
        try {
            this.f15592d.lock();
            return q2Var.a();
        } finally {
            this.f15592d.unlock();
        }
    }

    private static String s(Bundle bundle) {
        ArrayList<String> stringArrayList = bundle.getStringArrayList("pack_names");
        if (stringArrayList != null && !stringArrayList.isEmpty()) {
            return stringArrayList.get(0);
        }
        throw new w1("Session without pack received.");
    }

    private static List t(List list) {
        if (list == null) {
            return Collections.EMPTY_LIST;
        }
        return list;
    }

    private final Map u(final List list) {
        return (Map) r(new q2() { // from class: com.google.android.play.core.assetpacks.i2
            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                return r2.f(r2.this, list);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map h(final List list) {
        return (Map) r(new q2() { // from class: com.google.android.play.core.assetpacks.h2
            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                return r2.g(r2.this, list);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map i() {
        return this.f15591c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void j() {
        this.f15592d.lock();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void k(final String str, final int i10, final long j10) {
        r(new q2() { // from class: com.google.android.play.core.assetpacks.f2
            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                r2.c(r2.this, str, i10, j10);
                return null;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void l() {
        this.f15592d.unlock();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(final int i10, int i11) {
        r(new q2(i10, 5) { // from class: com.google.android.play.core.assetpacks.g2

            /* renamed from: b  reason: collision with root package name */
            public final /* synthetic */ int f15384b;

            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                r2.e(r2.this, this.f15384b, 5);
                return null;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void n(final int i10) {
        r(new q2() { // from class: com.google.android.play.core.assetpacks.e2
            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                r2.d(r2.this, i10);
                return null;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean o(final Bundle bundle) {
        return ((Boolean) r(new q2() { // from class: com.google.android.play.core.assetpacks.l2
            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                return r2.b(r2.this, bundle);
            }
        })).booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean p(final Bundle bundle) {
        return ((Boolean) r(new q2() { // from class: com.google.android.play.core.assetpacks.j2
            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                return r2.a(r2.this, bundle);
            }
        })).booleanValue();
    }
}
