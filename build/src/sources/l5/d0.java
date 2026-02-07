package l5;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d0 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f35843a = false;

    /* renamed from: b  reason: collision with root package name */
    private final Set f35844b = new u0.b();

    /* renamed from: c  reason: collision with root package name */
    private final Map f35845c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Comparator f35846d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(b2.c cVar, b2.c cVar2) {
            float floatValue = ((Float) cVar.f6385b).floatValue();
            float floatValue2 = ((Float) cVar2.f6385b).floatValue();
            if (floatValue2 > floatValue) {
                return 1;
            }
            if (floatValue > floatValue2) {
                return -1;
            }
            return 0;
        }
    }

    public void a(String str, float f10) {
        if (this.f35843a) {
            x5.h hVar = (x5.h) this.f35845c.get(str);
            if (hVar == null) {
                hVar = new x5.h();
                this.f35845c.put(str, hVar);
            }
            hVar.a(f10);
            if (str.equals("__container")) {
                Iterator it = this.f35844b.iterator();
                if (it.hasNext()) {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        this.f35843a = z10;
    }
}
