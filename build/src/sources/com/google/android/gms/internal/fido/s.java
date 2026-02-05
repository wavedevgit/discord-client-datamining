package com.google.android.gms.internal.fido;

import androidx.collection.SimpleArrayMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements n0 {

    /* renamed from: s  reason: collision with root package name */
    private static volatile j f14104s = new j(new Object() { // from class: com.google.android.gms.internal.fido.r
    });

    /* renamed from: t  reason: collision with root package name */
    public static final /* synthetic */ int f14105t = 0;

    /* renamed from: i  reason: collision with root package name */
    private SimpleArrayMap f14108i;

    /* renamed from: o  reason: collision with root package name */
    private SimpleArrayMap f14109o;

    /* renamed from: p  reason: collision with root package name */
    private SimpleArrayMap f14110p;

    /* renamed from: r  reason: collision with root package name */
    private final k f14112r;

    /* renamed from: e  reason: collision with root package name */
    private volatile int f14107e = -1;

    /* renamed from: d  reason: collision with root package name */
    private final String f14106d = "com.google.android.gms.fido";

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f14111q = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(String str, String str2, Object obj, k kVar, boolean z10) {
        this.f14112r = kVar;
    }

    @Override // com.google.android.gms.internal.fido.n0
    public final Object zza() {
        boolean z10;
        f.a();
        if ("".equals("")) {
            if (this.f14107e == -1) {
                synchronized (this) {
                    try {
                        if (this.f14107e == -1) {
                            this.f14112r.a(null, this.f14106d, "");
                        }
                        throw null;
                    } finally {
                    }
                }
            }
            throw null;
        }
        synchronized (this) {
            try {
                if (this.f14109o == null) {
                    boolean z11 = false;
                    if (this.f14108i == null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    k0.f(z10);
                    if (this.f14110p == null) {
                        z11 = true;
                    }
                    k0.f(z11);
                    this.f14109o = new SimpleArrayMap();
                    this.f14108i = new SimpleArrayMap();
                    this.f14110p = new SimpleArrayMap();
                }
                android.support.v4.media.session.b.a(this.f14109o.get(""));
                this.f14112r.a(null, this.f14106d, "");
                android.support.v4.media.session.b.a(this.f14109o.put("", null));
                k0.g(true, "PackageVersionCache object should not change in the life of the process.");
                throw null;
            } finally {
            }
        }
    }
}
