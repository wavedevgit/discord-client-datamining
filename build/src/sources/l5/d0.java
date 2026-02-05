package l5;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d0 {

    /* renamed from: a  reason: collision with root package name */
    private boolean f36402a = false;

    /* renamed from: b  reason: collision with root package name */
    private final Set f36403b = new u0.b();

    /* renamed from: c  reason: collision with root package name */
    private final Map f36404c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Comparator f36405d = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(b2.c cVar, b2.c cVar2) {
            float floatValue = ((Float) cVar.f6092b).floatValue();
            float floatValue2 = ((Float) cVar2.f6092b).floatValue();
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
        if (this.f36402a) {
            x5.h hVar = (x5.h) this.f36404c.get(str);
            if (hVar == null) {
                hVar = new x5.h();
                this.f36404c.put(str, hVar);
            }
            hVar.a(f10);
            if (str.equals("__container")) {
                Iterator it = this.f36403b.iterator();
                if (it.hasNext()) {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        this.f36402a = z10;
    }
}
