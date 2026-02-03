package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f14653a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f14654b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f14655c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f14656d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f14655c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f14656d == null) {
            f14656d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f14654b == null) {
            f14654b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f14653a) {
        }
        return false;
    }
}
