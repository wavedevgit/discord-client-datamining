package dk;

import com.google.android.gms.dynamite.DynamiteModule;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static boolean a(AtomicReference atomicReference, String str) {
        boolean z10;
        if (atomicReference.get() != null) {
            return ((Boolean) atomicReference.get()).booleanValue();
        }
        if (DynamiteModule.a(sj.i.c().b(), str) > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        atomicReference.set(Boolean.valueOf(z10));
        return z10;
    }
}
