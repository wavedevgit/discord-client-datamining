package s;

import android.hardware.camera2.params.DynamicRangeProfiles;
import java.util.Collections;
import java.util.Set;
import s.f;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class h implements f.a {

    /* renamed from: a  reason: collision with root package name */
    static final f f49133a = new f(new h());

    /* renamed from: b  reason: collision with root package name */
    private static final Set f49134b = Collections.singleton(z.f53039d);

    h() {
    }

    @Override // s.f.a
    public DynamicRangeProfiles a() {
        return null;
    }

    @Override // s.f.a
    public Set b(z zVar) {
        boolean equals = z.f53039d.equals(zVar);
        b2.e.b(equals, "DynamicRange is not supported: " + zVar);
        return f49134b;
    }

    @Override // s.f.a
    public Set c() {
        return f49134b;
    }
}
