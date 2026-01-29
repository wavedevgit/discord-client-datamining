package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f15024a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static volatile g f15025b = null;

    /* renamed from: c  reason: collision with root package name */
    private static volatile boolean f15026c = false;

    /* renamed from: d  reason: collision with root package name */
    private static volatile g f15027d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a() {
        f15026c = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b() {
        if (f15027d == null) {
            f15027d = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c() {
        if (f15025b == null) {
            f15025b = new g(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        synchronized (f15024a) {
        }
        return false;
    }
}
