package com.google.android.gms.net;

import android.content.Context;
import android.os.SystemClock;
import gf.n;
import gf.u;
import gf.v;
import gf.w;
import gf.x;
import java.util.Arrays;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;
import yg.f;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f14432c;

    /* renamed from: d  reason: collision with root package name */
    private static final Object f14433d = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final w f14434a;

    /* renamed from: b  reason: collision with root package name */
    final AtomicLong f14435b = new AtomicLong(-1);

    private c(Context context) {
        w b10 = v.b(context, x.a().b("module:cronet_dynamite").a());
        Objects.requireNonNull(b10);
        this.f14434a = b10;
    }

    public static c a(Context context) {
        if (f14432c == null) {
            synchronized (f14433d) {
                try {
                    if (f14432c == null) {
                        f14432c = new c(context);
                    }
                } finally {
                }
            }
        }
        return f14432c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void b(int i10, int i11, long j10, long j11, int i12) {
        AtomicLong atomicLong = this.f14435b;
        if (atomicLong.get() != -1 && SystemClock.uptimeMillis() - atomicLong.get() <= 1800000) {
            return;
        }
        this.f14434a.d(new u(0, Arrays.asList(new n(i10, i11, -1, j10, j11, null, null, 368, i12)))).e(new f() { // from class: com.google.android.gms.net.b
            @Override // yg.f
            public final /* synthetic */ void onFailure(Exception exc) {
                com.google.android.gms.common.b b10;
                if ((exc instanceof ef.b) && (b10 = ((ef.b) exc).a().b()) != null && b10.c() == 24) {
                    c.this.f14435b.set(SystemClock.elapsedRealtime());
                }
            }
        });
    }
}
