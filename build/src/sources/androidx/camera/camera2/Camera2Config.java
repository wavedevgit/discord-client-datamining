package androidx.camera.camera2;

import a0.b0;
import a0.c0;
import a0.m0;
import a0.y2;
import android.content.Context;
import androidx.annotation.NonNull;
import androidx.camera.camera2.Camera2Config;
import java.util.Set;
import q.e2;
import q.h2;
import x.p;
import x.r;
import x.w;
import x.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class Camera2Config {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class DefaultProvider implements w.b {
        @Override // x.w.b
        @NonNull
        public w getCameraXConfig() {
            return Camera2Config.c();
        }
    }

    public static /* synthetic */ y2 a(Context context) {
        return new h2(context);
    }

    public static /* synthetic */ b0 b(Context context, Object obj, Set set) {
        try {
            return new e2(context, obj, set);
        } catch (r e10) {
            throw new w0(e10);
        }
    }

    public static w c() {
        c0.a aVar = new c0.a() { // from class: o.a
            @Override // a0.c0.a
            public final c0 a(Context context, m0 m0Var, p pVar, long j10) {
                return new q.w(context, m0Var, pVar, j10);
            }
        };
        b0.a aVar2 = new b0.a() { // from class: o.b
            @Override // a0.b0.a
            public final b0 a(Context context, Object obj, Set set) {
                return Camera2Config.b(context, obj, set);
            }
        };
        return new w.a().c(aVar).d(aVar2).g(new y2.c() { // from class: o.c
            @Override // a0.y2.c
            public final y2 a(Context context) {
                return Camera2Config.a(context);
            }
        }).a();
    }
}
