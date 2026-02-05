package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f14015a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f14016b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f14017c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f14018d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f14017c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f14018d == null) {
            f14018d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f14016b == null) {
            f14016b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f14015a) {
        }
        return false;
    }
}
