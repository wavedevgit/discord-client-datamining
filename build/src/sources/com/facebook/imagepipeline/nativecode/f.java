package com.facebook.imagepipeline.nativecode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f10550a;

    public static synchronized void a() {
        synchronized (f.class) {
            if (!f10550a) {
                nb.a.d("static-webp");
                f10550a = true;
            }
        }
    }
}
