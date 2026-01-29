package com.facebook.imagepipeline.nativecode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f11668a;

    public static synchronized void a() {
        synchronized (e.class) {
            if (!f11668a) {
                nb.a.d("native-imagetranscoder");
                f11668a = true;
            }
        }
    }
}
