package s;

import android.hardware.camera2.params.DynamicRangeProfiles;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import s.f;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class g implements f.a {

    /* renamed from: a  reason: collision with root package name */
    private final DynamicRangeProfiles f48725a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Object obj) {
        this.f48725a = (DynamicRangeProfiles) obj;
    }

    private Long d(z zVar) {
        return c.a(zVar, this.f48725a);
    }

    private static Set e(Set set) {
        if (set.isEmpty()) {
            return Collections.EMPTY_SET;
        }
        HashSet hashSet = new HashSet(set.size());
        Iterator it = set.iterator();
        while (it.hasNext()) {
            hashSet.add(f(((Long) it.next()).longValue()));
        }
        return Collections.unmodifiableSet(hashSet);
    }

    private static z f(long j10) {
        z b10 = c.b(j10);
        return (z) b2.e.h(b10, "Dynamic range profile cannot be converted to a DynamicRange object: " + j10);
    }

    @Override // s.f.a
    public DynamicRangeProfiles a() {
        return this.f48725a;
    }

    @Override // s.f.a
    public Set b(z zVar) {
        boolean z10;
        Long d10 = d(zVar);
        if (d10 != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "DynamicRange is not supported: " + zVar);
        return e(this.f48725a.getProfileCaptureRequestConstraints(d10.longValue()));
    }

    @Override // s.f.a
    public Set c() {
        return e(this.f48725a.getSupportedProfiles());
    }
}
