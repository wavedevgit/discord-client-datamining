package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f14118a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f14119b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f14120c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f14121d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f14120c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f14121d == null) {
            f14121d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f14119b == null) {
            f14119b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f14118a) {
        }
        return false;
    }
}
