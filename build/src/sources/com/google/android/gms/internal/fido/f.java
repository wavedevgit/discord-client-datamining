package com.google.android.gms.internal.fido;

import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ int f13995a = 0;

    static {
        s0.a(new n0() { // from class: com.google.android.gms.internal.fido.d
            @Override // com.google.android.gms.internal.fido.n0
            public final Object zza() {
                int i10 = f.f13995a;
                return j4.a(Executors.newSingleThreadScheduledExecutor(new ThreadFactory() { // from class: com.google.android.gms.internal.fido.e
                    @Override // java.util.concurrent.ThreadFactory
                    public final Thread newThread(Runnable runnable) {
                        int i11 = f.f13995a;
                        return new Thread(runnable, "ProcessStablePhenotypeFlag");
                    }
                }));
            }
        });
    }

    public static f a() {
        i.a();
        i.b();
        i.d();
        throw new IllegalStateException("Must call PhenotypeContext.setContext() first");
    }

    public static boolean b() {
        i.d();
        i.c();
        return false;
    }
}
