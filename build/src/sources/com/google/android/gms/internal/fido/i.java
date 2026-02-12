package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f14696a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f14697b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f14698c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f14699d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f14698c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f14699d == null) {
            f14699d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f14697b == null) {
            f14697b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f14696a) {
        }
        return false;
    }
}
