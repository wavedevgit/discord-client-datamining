package tc;

import android.net.Uri;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface p {

    /* renamed from: a  reason: collision with root package name */
    public static final p f49970a = new p() { // from class: tc.o
        @Override // tc.p
        public final k[] b() {
            return p.c();
        }
    };

    static /* synthetic */ k[] c() {
        return new k[0];
    }

    default k[] a(Uri uri, Map map) {
        return b();
    }

    k[] b();
}
