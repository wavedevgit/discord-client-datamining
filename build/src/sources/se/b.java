package se;

import com.google.android.gms.internal.gtm.zzbv;
import com.google.android.gms.internal.gtm.zzft;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends d {

    /* renamed from: h  reason: collision with root package name */
    private static List f49467h = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private boolean f49468e;

    /* renamed from: f  reason: collision with root package name */
    private Set f49469f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f49470g;

    public b(zzbv zzbvVar) {
        super(zzbvVar);
        this.f49469f = new HashSet();
    }

    public static void c() {
        synchronized (b.class) {
            try {
                List<Runnable> list = f49467h;
                if (list != null) {
                    for (Runnable runnable : list) {
                        runnable.run();
                    }
                    f49467h = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void b(boolean z10) {
        this.f49470g = z10;
    }

    public final void d() {
        zzft zzq = a().zzq();
        zzq.zzf();
        if (zzq.zze()) {
            b(zzq.zzc());
        }
        zzq.zzf();
        this.f49468e = true;
    }
}
