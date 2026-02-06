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
    private static final xh.k0 f15962g = new xh.k0("ExtractorSessionStoreView");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15963a;

    /* renamed from: b  reason: collision with root package name */
    private final b2 f15964b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f15965c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final ReentrantLock f15966d = new ReentrantLock();

    /* renamed from: e  reason: collision with root package name */
    private final xh.r f15967e;

    /* renamed from: f  reason: collision with root package name */
    private final xh.r f15968f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r2(n0 n0Var, xh.r rVar, b2 b2Var, xh.r rVar2) {
        this.f15963a = n0Var;
        this.f15967e = rVar;
        this.f15964b = b2Var;
        this.f15968f = rVar2;
    }

    public static /* synthetic */ Boolean a(r2 r2Var, Bundle bundle) {
        p2 p2Var;
        boolean z10;
        int i10 = bundle.getInt(SharedPreferencesKey.SESSION_ID);
        if (i10 == 0) {
            return Boolean.FALSE;
        }
        Map map = r2Var.f15965c;
        Integer valueOf = Integer.valueOf(i10);
        if (map.containsKey(valueOf)) {
            o2 q10 = r2Var.q(i10);
            int i11 = bundle.getInt(yh.b.a("status", q10.f15923c.f15908a));
            n2 n2Var = q10.f15923c;
            int i12 = n2Var.f15911d;
            if (m0.c(i12, i11)) {
                f15962g.a("Found stale update for session %s with status %d.", valueOf, Integer.valueOf(i12));
                n2 n2Var2 = q10.f15923c;
                int i13 = n2Var2.f15911d;
                String str = n2Var2.f15908a;
                if (i13 == 4) {
                    ((t4) r2Var.f15967e.a()).b(i10, str);
                } else if (i13 == 5) {
                    ((t4) r2Var.f15967e.a()).a(i10);
                } else if (i13 == 6) {
                    ((t4) r2Var.f15967e.a()).f(Arrays.asList(str));
                }
            } else {
                n2Var.f15911d = i11;
                if (m0.d(i11)) {
                    r2Var.n(i10);
                    r2Var.f15964b.c(q10.f15923c.f15908a);
                } else {
                    for (p2 p2Var2 : n2Var.f15913f) {
                        n2 n2Var3 = q10.f15923c;
                        ArrayList parcelableArrayList = bundle.getParcelableArrayList(yh.b.b("chunk_intents", n2Var3.f15908a, p2Var2.f15936a));
                        if (parcelableArrayList != null) {
                            for (int i14 = 0; i14 < parcelableArrayList.size(); i14++) {
                                if (parcelableArrayList.get(i14) != null && ((Intent) parcelableArrayList.get(i14)).getData() != null) {
                                    ((m2) p2Var2.f15939d.get(i14)).f15892a = true;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            String s10 = s(bundle);
            long j10 = bundle.getLong(yh.b.a("pack_version", s10));
            String string = bundle.getString(yh.b.a("pack_version_tag", s10), "");
            int i15 = bundle.getInt(yh.b.a("status", s10));
            long j11 = bundle.getLong(yh.b.a("total_bytes_to_download", s10));
            ArrayList<String> stringArrayList = bundle.getStringArrayList(yh.b.a("slice_ids", s10));
            ArrayList arrayList = new ArrayList();
            Iterator it = t(stringArrayList).iterator();
            while (it.hasNext()) {
                String str2 = (String) it.next();
                ArrayList parcelableArrayList2 = bundle.getParcelableArrayList(yh.b.b("chunk_intents", s10, str2));
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
                String string2 = bundle.getString(yh.b.b("uncompressed_hash_sha256", s10, str2));
                long j12 = bundle.getLong(yh.b.b("uncompressed_size", s10, str2));
                int i16 = bundle.getInt(yh.b.b("patch_format", s10, str2), 0);
                if (i16 != 0) {
                    p2Var = new p2(str2, string2, j12, arrayList2, 0, i16);
                } else {
                    p2Var = new p2(str2, string2, j12, arrayList2, bundle.getInt(yh.b.b("compression_format", s10, str2), 0), 0);
                }
                arrayList.add(p2Var);
                it = it3;
            }
            r2Var.f15965c.put(Integer.valueOf(i10), new o2(i10, bundle.getInt("app_version_code"), new n2(s10, j10, i15, j11, arrayList, string)));
        }
        return Boolean.TRUE;
    }

    public static /* synthetic */ Boolean b(r2 r2Var, Bundle bundle) {
        int i10 = bundle.getInt(SharedPreferencesKey.SESSION_ID);
        if (i10 == 0) {
            return Boolean.TRUE;
        }
        Map map = r2Var.f15965c;
        Integer valueOf = Integer.valueOf(i10);
        if (!map.containsKey(valueOf)) {
            return Boolean.TRUE;
        }
        o2 o2Var = (o2) r2Var.f15965c.get(valueOf);
        if (o2Var.f15923c.f15911d == 6) {
            return Boolean.FALSE;
        }
        return Boolean.valueOf(!m0.c(o2Var.f15923c.f15911d, bundle.getInt(yh.b.a("status", s(bundle)))));
    }

    public static /* synthetic */ Object c(r2 r2Var, String str, int i10, long j10) {
        o2 o2Var = (o2) r2Var.u(Arrays.asList(str)).get(str);
        if (o2Var == null || m0.d(o2Var.f15923c.f15911d)) {
            f15962g.b(String.format("Could not find pack %s while trying to complete it", str), new Object[0]);
        }
        r2Var.f15963a.d(str, i10, j10);
        o2Var.f15923c.f15911d = 4;
        return null;
    }

    public static /* synthetic */ Object d(r2 r2Var, int i10) {
        o2 q10 = r2Var.q(i10);
        n2 n2Var = q10.f15923c;
        if (m0.d(n2Var.f15911d)) {
            r2Var.f15963a.d(n2Var.f15908a, q10.f15922b, n2Var.f15909b);
            n2 n2Var2 = q10.f15923c;
            int i11 = n2Var2.f15911d;
            if (i11 == 5 || i11 == 6) {
                r2Var.f15963a.e(n2Var2.f15908a, q10.f15922b, n2Var2.f15909b);
                return null;
            }
            return null;
        }
        throw new w1(String.format("Could not safely delete session %d because it is not in a terminal state.", Integer.valueOf(i10)), i10);
    }

    public static /* synthetic */ Object e(r2 r2Var, int i10, int i11) {
        r2Var.q(i10).f15923c.f15911d = 5;
        return null;
    }

    public static /* synthetic */ Map f(r2 r2Var, List list) {
        int i10;
        HashMap hashMap = new HashMap();
        for (o2 o2Var : r2Var.f15965c.values()) {
            String str = o2Var.f15923c.f15908a;
            if (list.contains(str)) {
                o2 o2Var2 = (o2) hashMap.get(str);
                if (o2Var2 == null) {
                    i10 = -1;
                } else {
                    i10 = o2Var2.f15921a;
                }
                if (i10 < o2Var.f15921a) {
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
                n2 n2Var = o2Var.f15923c;
                if (m0.a(n2Var.f15911d)) {
                    try {
                        n2Var.f15911d = 6;
                        ((Executor) r2Var.f15968f.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.k2
                            @Override // java.lang.Runnable
                            public final void run() {
                                r2.this.n(o2Var.f15921a);
                            }
                        });
                        r2Var.f15964b.c(str);
                    } catch (w1 unused) {
                        f15962g.d("Session %d with pack %s does not exist, no need to cancel.", Integer.valueOf(o2Var.f15921a), str);
                    }
                }
                hashMap.put(str, Integer.valueOf(o2Var.f15923c.f15911d));
            }
        }
        return hashMap;
    }

    private final o2 q(int i10) {
        Map map = this.f15965c;
        Integer valueOf = Integer.valueOf(i10);
        o2 o2Var = (o2) map.get(valueOf);
        if (o2Var != null) {
            return o2Var;
        }
        throw new w1(String.format("Could not find session %d while trying to get it", valueOf), i10);
    }

    private final Object r(q2 q2Var) {
        try {
            this.f15966d.lock();
            return q2Var.a();
        } finally {
            this.f15966d.unlock();
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
        return this.f15965c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void j() {
        this.f15966d.lock();
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
        this.f15966d.unlock();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void m(final int i10, int i11) {
        r(new q2(i10, 5) { // from class: com.google.android.play.core.assetpacks.g2

            /* renamed from: b  reason: collision with root package name */
            public final /* synthetic */ int f15758b;

            @Override // com.google.android.play.core.assetpacks.q2
            public final Object a() {
                r2.e(r2.this, this.f15758b, 5);
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
