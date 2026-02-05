package com.facebook.imagepipeline.nativecode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f10650a;

    public static synchronized void a() {
        synchronized (e.class) {
            if (!f10650a) {
                nb.a.d("native-imagetranscoder");
                f10650a = true;
            }
        }
    }
}
