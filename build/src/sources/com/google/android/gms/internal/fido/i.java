package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f14695a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f14696b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f14697c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f14698d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f14697c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f14698d == null) {
            f14698d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f14696b == null) {
            f14696b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f14695a) {
        }
        return false;
    }
}
