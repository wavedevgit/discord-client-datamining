package com.facebook.imagepipeline.nativecode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f10689a;

    public static synchronized void a() {
        synchronized (e.class) {
            if (!f10689a) {
                ob.a.d("native-imagetranscoder");
                f10689a = true;
            }
        }
    }
}
