package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f13621a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f13622b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f13623c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f13624d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f13623c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f13624d == null) {
            f13624d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f13622b == null) {
            f13622b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f13621a) {
        }
        return false;
    }
}
