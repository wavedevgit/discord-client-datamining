package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f13978a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f13979b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f13980c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f13981d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f13980c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f13981d == null) {
            f13981d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f13979b == null) {
            f13979b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f13978a) {
        }
        return false;
    }
}
