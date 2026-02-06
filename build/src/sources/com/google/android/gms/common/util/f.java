package com.google.android.gms.common.util;

import android.os.SystemClock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements d {

    /* renamed from: a  reason: collision with root package name */
    private static final f f13797a = new f();

    private f() {
    }

    public static d c() {
        return f13797a;
    }

    @Override // com.google.android.gms.common.util.d
    public final long a() {
        return System.currentTimeMillis();
    }

    @Override // com.google.android.gms.common.util.d
    public final long b() {
        return SystemClock.elapsedRealtime();
    }
}
