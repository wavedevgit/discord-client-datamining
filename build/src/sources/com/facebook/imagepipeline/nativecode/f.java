package com.facebook.imagepipeline.nativecode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f11267a;

    public static synchronized void a() {
        synchronized (f.class) {
            if (!f11267a) {
                ob.a.d("static-webp");
                f11267a = true;
            }
        }
    }
}
